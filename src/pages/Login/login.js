import Loader from "../../Components/Loader/Loader";
import ImageComponent from "./ImageComponent/ImageComponent";
import Logo from "./Logo/Logo";
import CustomInput from "./CustomInput/CustomInput";
import { useState } from "react";

export default function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const inputFields = [
    {
      id: "email",
      label: "Email address",
      type: "text",
      placeholder: "Enter your Email Address",
      value: emailAddress,
      onChange: (event) => setEmailAddress(event.target.value)
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your Password",
      value: password,
      onChange: (event) => setPassword(event.target.value)
    }
  ];

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      //login logic here
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <Loader fadeOutInterval={5000} />
      <ImageComponent
        src="/images/iphone-with-profile.jpg"
        alt="iPhone with Instagram app"
        styleImg="flex w-3/5"
      />
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <Logo
            src="/images/logo.png"
            alt="Instagram"
            style1="flex justify-center w-full"
            style2="mt-2 w-6/12 mb-4"
          />
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleLogin} method="POST">
            {inputFields.map((input) => (
              <CustomInput
                key={input.id}
                id={input.id}
                aria-label={input.label}
                type={input.type}
                placeholder={input.placeholder}
                styleInput="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={input.onChange}
                value={input.value}
              />
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}
