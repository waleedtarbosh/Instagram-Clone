import Loader from "../../Components/Loader/Loader";
import CustomInput from "./CustomInput/CustomInput";
import React, { useState } from "react";
import Image from "./Image/Image";
import CustomButton from "./CustomButton/CustomButton";
import Paragraph from "./Paragraph/Paragraph";

export default function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const ImageProps = {
    src: "/images/iphone-with-profile.jpg",
    alt: "iPhone with Instagram app",
    imageWrapperStyle: "flex w-3/5",
  };
  const LogoProps = {
    src: "/images/logo.png",
    alt: "Instagram",
    imageWrapperStyle: "mt-2 w-6/12 mb-4",
  };
  const inputFields = [
    {
      id: "email",
      label: "Email address",
      type: "text",
      placeholder: "Enter your Email Address",
      styleInput:
        "text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",
      value: emailAddress,
      onChange: (event) => setEmailAddress(event.target.value),
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your Password",
      styleInput:
        "text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",
      value: password,
      onChange: (event) => setPassword(event.target.value),
    },
  ];
  const buttonProps = {
    disabled: isInvalid,
    type: "submit",
    styleButton: `bg-blue-medium text-white w-full rounded h-8 font-bold ${
      isInvalid && "opacity-50"
    }`,
    content: "Login",
  };
  const ParagraphProps = {
    text: "Don't have an account?",
    linkText: "Sign up",
    textStyle: "text-sm",
  };
  const linkProps = {
    to: "/sign-up",
    className: "font-bold text-blue-medium",
    type: "submit",
    styleButton: `bg-blue-medium text-white w-full rounded h-8 font-bold ${
      isInvalid && "opacity-50"
    }`,
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
        // Login logic here
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <Loader fadeOutInterval={5000} />
      <Image {...ImageProps} />
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <Image {...LogoProps} />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleLogin} method="POST">
            {inputFields.map((input) => (
              <CustomInput key={input.id} {...input} />
            ))}
            <CustomButton {...buttonProps}></CustomButton>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <Paragraph {...ParagraphProps} linkProps={linkProps} />
        </div>
      </div>
    </div>
  );
}