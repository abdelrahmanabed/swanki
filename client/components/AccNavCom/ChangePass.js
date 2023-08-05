import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { getApiBaseUrl } from "../../apiConfig";

const ChangePass = () => {
  const apiUrl = getApiBaseUrl();

  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = async (e) => {
    const userId = window.localStorage.getItem('adminID');

    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New password does not match.");
      return;
    }
    try {
      const res = await axios.put(`${apiUrl}/admin/${userId}`, {
        Password: newPassword,
      });
      if (res.status === 200) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setError("");
        alert("Password changed successfully!");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center bg-white rounded ">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleChangePassword} className="flex-col flex justify-center w-full  md:w-96">
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="currentPassword">
            Current Password
          </label>
          <input
            className="bg-third-c rounded-full w-full py-3  px-3"
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="newPassword">
            New Password
          </label>
          <input
            className="bg-third-c rounded-full w-full py-3  px-3"
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            className="bg-third-c rounded-full w-full py-3  px-3"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-main-t hover:bg-blue-700  font-bold py-3 px-4 rounded-full"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePass;