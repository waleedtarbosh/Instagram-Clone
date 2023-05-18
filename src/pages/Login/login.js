import AuthForm from "../AuthForm/AuthForm";
import { useState } from "react";
import Loader from "../../Components/Loader/Loader";

export default function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const imageProps = {
    src: "/images/iphone-with-profile.jpg",
    alt: "iPhone with Instagram app",
    imageWrapperStyle: "flex w-3/5"
  };
  const logoProps = {
    src: "/images/logo.png",
    alt: "Instagram",
    imageWrapperStyle: "mt-2 w-6/12 mb-4"
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
      onChange: (event) => setEmailAddress(event.target.value)
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your Password",
      styleInput:
        "text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",
      value: password,
      onChange: (event) => setPassword(event.target.value)
    }
  ];
  const buttonProps = {
    disabled: isInvalid,
    type: "submit",
    styleButton: `bg-blue-medium text-white w-full rounded h-8 font-bold ${
      isInvalid && "opacity-50"
    }`,
    content: "Login"
  };
  const paragraphProps = {
    text: "Don't have an account?",
    linkText: "Sign up",
    textStyle: "text-sm"
  };
  const linkProps = {
    to: "/sign-up",
    className: "font-bold text-blue-medium",
    type: "submit",
    styleButton: `bg-blue-medium text-white w-full rounded h-8 font-bold ${
      isInvalid && "opacity-50"
    }`
  };

  const handleLogin = async (credentials) => {
    // login logic here using credentials object
  };

  return (
    <>
    <Loader fadeOutInterval={5000} />
    <AuthForm
      formType="Login"
      handleSubmit={handleLogin}
      isInvalid={isInvalid}
      imageProps={imageProps}
      logoProps={logoProps}
      inputFields={inputFields}
      buttonProps={buttonProps}
      paragraphProps={paragraphProps}
      linkProps={linkProps}
    />
    </>
  );
}