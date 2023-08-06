const express = require("express")
const app = express()
const cors = require("cors")
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose")
app.use(express.json())
app.use(cors())
app.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With, Content-Type, Accept") 
  next(); 
})
const dotenv = require('dotenv');
dotenv.config();
const path = require('path')


const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl)
const port = process.env.PORT || 10000;
//Import item Model

const ItemModel = require('./models/Items')
const AitemModel = require('./models/Aitems')
const OrderModel = require("./models/Orders");

app.get("/items", async (req,res)=>{
  const items = await ItemModel.find();
    res.json(items)
})
app.get("/aitems", async (req,res)=>{
  const items = await AitemModel.find();
    res.json(items)
})



//create item 
app.post("/createItem", async (req, res)=>{
    const item = req.body
    const newItem = new ItemModel(item)
    await newItem.save()

    res.json(item)
})


//Admin Model
const AdminModel = require('./models/Admins')
app.get("/admin/:_id", async (req, res) => {
    try {
        const _id = req.params._id;
        const user = await AdminModel.findById(_id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        res.json(user);
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});
app.put('/admin/:_id', async (req, res) => {
    try {
      const _id = req.params._id;
      const { firstName, lastName, Email, Phone,Password } = req.body;
  
      const user = await AdminModel.findById(_id);
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      user.firstName = firstName;
      user.lastName = lastName;
      user.Email = Email;
      user.Phone = Phone;
      user.Password = Password;
      await user.save();
  
      res.status(200).json({ message: "User updated successfully", user });
    } catch (err) {
      res.status(500).json({ message: "Unable to update user", error: err });
    }
  });

 
app.get("/admin/:_id/addresses", async (req, res) => {
    try {
        const _id = req.params._id;
        const user = await AdminModel.findById(_id);
        const userAdd = user.Address
        if (!userAdd) {
            return res.status(404).send('User not found');
        }

        res.json(userAdd);
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});
app.post('/orders', async (req, res) => {
  const order = req.body;
  const newOrder = new OrderModel({
    userId: order.userId,
    items: order.items,
    userAdd: order.userAdd,
    totalPrice: order.totalPrice
  });
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving order');
  }
});
app.delete('/users/:userId/addresses/:index', async (req, res) => {
    const userId = req.params.userId;
    const index = parseInt(req.params.index);
  
    // Find the user and the address to delete
    const user = await AdminModel.findById(userId);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    if (index < 0 || index >= user.Address.length) {
      return res.stacCtus(404).json({ message: 'Address not found' });
    }
  
    // Remove the address from the user's address list
    user.Address.splice(index, 1);
    await user.save();
  
    res.json({ message: 'Address deleted' });
  });
app.put('/users/:_id/addresses', async (req, res) => {
    try {
      const _id = req.params._id;
      const { Address } = req.body;
  
      const user = await AdminModel.findById(_id);
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      const updatedUser = await AdminModel.findByIdAndUpdate(_id, { $push: { Address } }, { new: true });
  
      res.status(200).json({ message: "Address added successfully", user: updatedUser });
    } catch (err) {
      res.status(500).json({ message: "Unable to add address", error: err });
    }
  });

  app.get("/orders", async (req,res)=>{
    const orders = await OrderModel.find();
      res.json(orders)
  })
app.get("/admin", async (req,res)=>{
    const users = await AdminModel.find();
      res.json(users)
  })
// Add or remove an item from an admin's favorites array
app.put("/admin/:_id/favourites", async (req, res) => {
  const adminId = req.params._id;
  const { item } = req.body;

  try {
    const admin = await AdminModel.findById(adminId);
    if (!admin) {
      return res.status(404).send("Admin not found");
    }

    const idx = admin.Favourites.findIndex((fav) => fav.itemId === item.itemId);
    if (idx === -1) {
      // item is not in favourites array, so add it
      admin.Favourites.push(item);
    } else {
      // item is already in favourites array, so remove it
      admin.Favourites.splice(idx, 1);
    }

    await admin.save();

    return res.json(admin);
  } catch (err) {
    res.status(500).json({ message: "Unable to update favourites", error: err });
  }
});
app.put("/admin/:_id/cart", async (req, res) => {
  const adminId = req.params._id;
  const { item } = req.body;

  try {
    const admin = await AdminModel.findById(adminId);
    if (!admin) {
      return res.status(404).send("Admin not found");
    }

    const idx = admin.Cart.findIndex((ite) => ite.itemId === item.itemId);
    if (idx === -1) {
      // item is not in cart array, so add it
      admin.Cart.push(item);
    } else {
      // item is already in cart array, so remove it
      admin.Cart.splice(idx, 1);
    }

    await admin.save();

    return res.json(admin);
  } catch (err) {
    res.status(500).json({ message: "Unable to update cart", error: err });
  }
});

app.post("/admin/:_id/cart", async (req, res) => {
  const adminId = req.params._id;
  const { item } = req.body;

  try {
    const admin = await AdminModel.findById(adminId);
    if (!admin) {
      return res.status(404).send("Admin not found");
    }

      // item is not in cart array, so add it
   admin.Cart.push(item);
   

    await admin.save();

    return res.json(admin);
  } catch (err) {
    res.status(500).json({ message: "Unable to update cart", error: err });
  }
});
app.post('/register',async (req,res)=>{
    const{email, password ,firstname,lastname ,phone} = req.body
    const admin = await AdminModel.findOne({Email:email})
    if(admin){
		return res.status(401).send({ message: " Email Already Exist" });
    }else{
    const newAdmin = new AdminModel({
        Email: email,
        Password: password,
        firstName: firstname,
        lastName: lastname,
        Phone: phone,
    })
    await newAdmin.save();

    return res.json({message:'admin created'})
}})


app.post('/login', async (req, res) => {
    try {

      

    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ Email:email });



    if (!admin) {
		return res.status(401).send({ message: "Invalid Email or Password" });
    }

    if (!admin.Password || typeof admin.Password !== 'string') {
        return res.status(401).send({ message: "Invalid Email or Password" });
    }

    if (password !== admin.Password) {
        return res.status(401).send({ message: "Invalid Email or Password" });
    }

    const secret = 'YOUR_SECRET_KEY';
    const token = jwt.sign({ id: admin._id }, secret);
    const adminID = admin._id;
    const firstName = admin.firstName;
    const lastName = admin.lastName;
    const Email = admin.Email;
    const  Phone= admin.Phone;
    const Address = admin.Address;
    const Favourites = admin.Favourites;
    const Cart = admin.Cart;


    return res.json({ token, adminID,firstName,lastName,Email,Phone,Address,Favourites,Cart });
    } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});