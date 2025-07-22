import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
const RegistrationFormSimple = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const useData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };

    console.log("User Data:", useData);

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration successful!");
    // const userJson = JSON.stringify(localStorage.setItem("user",));
  };
  return (
    <div className=" w-full px-10 py-12 flex flex-col gap-3">
      <span className=" w-full uppercase text-2xl font-semibold p-2 bg-primaryColor-800 text-white rounded-md">
        Registration Form
      </span>

      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border-2 border-slate-400 rounded-md"
        />

        <input
          type="text"
          placeholder="last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border-2 border-slate-400 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border-2 border-slate-400 rounded-md"
        />

        <input
          type="number"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 border-2 border-slate-400 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border-2 border-slate-400 rounded-md"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border-2 border-slate-400 rounded-md"
        />

        <button
          type="submit"
          className="rounded-md px-4 py-2 bg-primaryColor-800 text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationFormSimple;
