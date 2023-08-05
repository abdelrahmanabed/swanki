import Axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getApiBaseUrl } from "../../apiConfig";

export default function PersonalInfo() {
  const apiUrl = getApiBaseUrl();

  const router = useRouter();
  const userId = window.localStorage.getItem('adminID');

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Phone: "",
  });

  useEffect(() => {
    Axios.get(`${apiUrl}/admin/${userId}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Axios.put(`${apiUrl}/admin/${userId}`, user)
      .then((response) => {
        console.log(response.data);
        window.location.reload()
        // Redirect to a success page or do something else
      })
      .catch((error) => {
        console.log(error);
        // Display an error message or do something else
      });
  };

  const handleFirstNameChange = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, Email: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setUser({ ...user, Phone: e.target.value });
  };

  return (
    <div id="personal-information" className="w-full bg-white p-2 rounded-large">
      <form className="flex-col flex sm:items-center space-y-3 md:space-y-5" onSubmit={handleFormSubmit}>
        <div className="flex space-x-2 justify-center sm:w-2/3 md:w-96">
          <input
            type="text"
            value={user.firstName}
            onChange={handleFirstNameChange}
            placeholder="First Name"
            className="bg-third-c p-3 rounded-full w-full md:text-xl"
          />

          <input
            type="text"
            value={user.lastName}
            onChange={handleLastNameChange}
            placeholder="Last Name"
            className="bg-third-c p-3 rounded-full w-full md:text-xl"
          />
        </div>

        <div className="flex space-x-2 justify-center sm:w-2/3 md:w-96">
          <input
          readOnly
            type="Email"
            value={user.Email}
            onChange={handleEmailChange}
            placeholder="Email Address"
            className="bg-third-c p-3 rounded-full w-full"
          />
        </div>

        <div className="flex space-x-2 justify-center sm:w-2/3 md:w-96">
          <input
            type="tel"
            value={user.Phone}
            onChange={handlePhoneChange}
            placeholder="Phone Number : example +201023456789"
            className="bg-third-c p-3 rounded-full md:text-xl w-full"
          />
        </div>

        <div className="w-full sm:w-2/3 md:w-96">
          <input type="submit" value={'Save'} className=" bg-main-t w-full p-3 rounded-full"></input>
        </div>
      </form>
    </div>
  );
}