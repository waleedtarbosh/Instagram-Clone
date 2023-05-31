import AuthForm from "../AuthForm/AuthForm";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../../context/firebase';
import * as ROUTES from '../../constants/routes';

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = password === "" || emailAddress === "";
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const inputFields = [
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your Username",
      styleInput:
        "text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",
      value: username,
      onChange: (event) => setUsername(event.target.value)
    },
    {
      id: "fullname",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your Full Name",
      styleInput:
        "text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",
      value: fullName,
      onChange: (event) => setFullName(event.target.value)
    },
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
    content: "Sign Up"
  };

  const paragraphProps = {
    text: "Have an account?",
    linkText: "Login",
    textStyle: "text-sm"
  };

  const linkProps = {
    to: "/login",
    className: "font-bold text-blue-medium",
    type: "submit",
    styleButton: `bg-blue-medium text-white w-full rounded h-8 font-bold ${
      isInvalid && "opacity-50"
    }`
  };

  const handleSignUp = async (event) => {
  
    try {
      const existingUser = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username.toLowerCase())
        .get();
  
      if (existingUser.empty) {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);
  
        await createdUserResult.user.updateProfile({
          displayName: username
        });
  
        await firebase
          .firestore()
          .collection('users')
          .add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: ['2'],
            followers: [],
            dateCreated: Date.now()
          });
  
        navigate(ROUTES.DASHBOARD);
      } else {
        setUsername('');
        setError('That username is already taken, please try another.');
      }
    } catch (error) {
      setFullName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };

  return (
    <AuthForm
      formType="Sign Up"
      handleSubmit={handleSignUp}
      isInvalid={isInvalid}
      inputFields={inputFields}
      buttonProps={buttonProps}
      paragraphProps={paragraphProps}
      linkProps={linkProps}
      error={error}
    />
  );
}