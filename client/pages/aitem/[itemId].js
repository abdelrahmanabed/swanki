import Axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ItemDetailsC from "@/components/ItemDetails/ItemDetailsC";
import Loading from "@/components/Loading";
import Image from "next/image";
import { getApiBaseUrl } from "@/apiConfig";
export default function ItemDetails() {
  const apiUrl = getApiBaseUrl();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const itemId = router.query.itemId;
  const [items, setItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState("a.webp");

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true when the data is being fetched

    Axios.get(`${apiUrl}/aitems`).then((res) => {
      setItems(res.data);
      setIsLoading(false); // Set isLoading to false when the data is fetched successfully
    });
  }, [itemId]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
   {isLoading? <Loading/>: <div className="flex flex-col">
      {items.map((item) => {
        if (item._id === itemId) {
          const imgarr = item.itemImage;
          console.log("imgarr:", imgarr);
          const result = [];
          const imgcolors = [];
          const characters = Array.from({ length: 26 }, (_, i) =>
            String.fromCharCode("a".charCodeAt(0) + i)
          );
          for (let char of characters) {
            const matchingItems = imgarr.filter(
              (img) => img.endsWith(`${char}.webp`) && img.includes(selectedColor)
            );
            console.log(`Matching items for ${char}:`, matchingItems);
            matchingItems.forEach((item) => {
              if (!result.includes(item)) {
                result.push(item);
              }
            });
          }     for (let char of characters) {
            const matchingItem = imgarr.find((img) => img.endsWith(`${char}.webp`));
            if (matchingItem && !imgcolors.includes(matchingItem)) {
              imgcolors.push(matchingItem);
            }
          }

          console.log("Selected color:", selectedColor);
          console.log("Result:", result);
          return (
            <ItemDetailsC
            key={item._id}

              Colors={imgcolors
                .map((img) => (
                  <button
                    className={`w-8 rounded-full justify-center items-center flex overflow-hidden h-8 ${
                      img.slice(-6) === selectedColor ? " border-main-t border-2" : ""
                    }`}
                    key={img}
                    onClick={() => handleColorClick(img.slice(-6))}
                  >
                    <img src={"/" + img} id="itemdetcolors" className=" " />
                  </button>
                ))}
              imgArr={result.map((img) => (
                <Image width={960} height={1200} src={"/" + img} className="w-96" key={img} />
              ))}
              itemId={item._id}
              label={item.label}
              price={item.Price}
              href={`aitem/${item._id}`}
              Color={selectedColor}
              img={item.itemImage}
              otherColors={imgcolors}
              sizeClass="hidden"
              canAddToCart={true}
            />
          );
        }
      })}
    </div>}</>
  );
}