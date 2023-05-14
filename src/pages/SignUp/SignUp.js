import CustomInput from "../Login/CustomInput/CustomInput";
import { useState } from "react";
import Image from "../Login/Image/Image";
import CustomButton from "../Login/CustomButton/CustomButton";
import Paragraph from "../Login/Paragraph/Paragraph";

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
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
        id: "Username",
        label:"Enter your username",
        type: "text",
        placeholder: "Username",
        styleInput:
        "text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",
        onChange: (event) => setUsername(event.target.value),
        value: username,

    },

    { 
    id: "FullName",
    label:"Enter your full name",
    type: "text",
    placeholder: "Full name",
    styleInput:
    "text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",
        onChange: (event) => setFullName(event.target.value),
        value: fullName,
    },

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
    content: "SignUp",
  };
  const ParagraphProps = {
    text: "Have an account?",
    linkText: "Login",
    textStyle: "text-sm",
  };
  const linkProps = {
    to: "/login",
    className: "font-bold text-blue-medium",
    type: "submit",
    styleButton: `bg-blue-medium text-white w-full rounded h-8 font-bold ${
      isInvalid && "opacity-50"
    }`,
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      //login logic here
    } catch (error) {
        setFullName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
    }
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <Image {...ImageProps} />
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <Image {...LogoProps} />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleSignUp} method="POST">
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
