import CustomInput from "../Login/CustomInput/CustomInput";
import { useState } from "react";
import Image from "../Login/Image/Image";
import CustomButton from "../Login/CustomButton/CustomButton";
import Paragraph from "../Login/Paragraph/Paragraph";

export default function AuthForm({
  formType,
  handleSubmit,
  error,
  setError,
  isInvalid,
  ImageProps,
  LogoProps,
  inputFields,
  buttonProps,
  ParagraphProps,
  linkProps,
}) {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (event) => {
    event.preventDefault();

    try {
      handleSubmit({ username, fullName, emailAddress, password });
    } catch (error) {
      setUsername("");
      setFullName("");
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <Image {...ImageProps} />
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full ">
            <Image {...LogoProps} />
          </h1>
          {error && (
            <p className="mb-4 text-xs text-red-primary">{error}</p>
          )}
          <form onSubmit={handleAuth} method="POST">
            {inputFields.map((input) => (
              <CustomInput key={input.id} {...input} />
            ))}
            <CustomButton {...buttonProps}  disabled={isInvalid}>{formType}  </CustomButton>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <Paragraph {...ParagraphProps} linkProps={linkProps} />
        </div>
      </div>
    </div>
  );
}