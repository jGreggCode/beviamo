import React, { useState } from "react";

const Login = () => {
  const [currentSate, setCurrentState] = useState("Sign Up");

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto pt-14 pb-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentSate}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentSate === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-400 rounded-md"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-400 rounded-md"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-400 rounded-md"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer underline">Forgot your password</p>
        {currentSate === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login your account
          </p>
        )}
      </div>
      <button className="bg-[#b6aca3] text-black font-regular px-8 py-5 mt-4 rounded-lg">
        {currentSate === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
