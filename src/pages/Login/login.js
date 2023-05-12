import Loader from "../../Components/Loader/Loader";
import Logo from "./Logo/Logo";
import CustomInput from "./CustomInput/CustomInput";
import { useState } from "react";
import Image from "./Image/Image";


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
      <Image
        src="/images/iphone-with-profile.jpg"
        alt="iPhone with Instagram app"
        imageWrapperStyle="flex w-3/5"
      />
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
         <h1 className="flex justify-center w-full">
            <Image
              src="/images/logo.png"
              alt="Instagram"
              imageWrapperStyle="mt-2 w-6/12 mb-4"
            />
          </h1>
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
