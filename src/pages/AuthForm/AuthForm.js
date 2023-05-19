import CustomInput from "../Login/CustomInput/CustomInput";
import { useReducer } from "react";
import Image from "../Login/Image/Image";
import CustomButton from "../Login/CustomButton/CustomButton";
import Paragraph from "../Login/Paragraph/Paragraph";
const instagramAppImage = {
  src: "/images/iphone-with-profile.jpg",
  alt: "iPhone with Instagram app",
  imageWrapperStyle: "flex w-3/5"
};
const logo = {
  src: "/images/logo.png",
  alt: "Instagram",
  imageWrapperStyle: "mt-2 w-6/12 mb-4"
};
const initialState = {
  username: "",
  fullName: "",
  emailAddress: "",
  password: "",
  error: null,
};

function formReducer(state, action) {
  switch (action.type) {
    case "RESET_FORM":
      return initialState;
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_FULLNAME":
      return { ...state, fullName: action.payload };
    case "SET_EMAILADDRESS":
      return { ...state, emailAddress: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SHOW_ERROR":
      return { ...state, error: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function AuthForm({
  formType,
  handleSubmit,
  isInvalid,
  inputFields,
  buttonProps,
  paragraphProps,
  linkProps,
}) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleAuth = async (event) => {
    event.preventDefault();

    try {
      handleSubmit({
        username: state.username,
        fullName: state.fullName,
        emailAddress: state.emailAddress,
        password: state.password,
      });
    } catch (error) {
      dispatch({ type: "SHOW_ERROR", payload: error.message });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <Image {...instagramAppImage} />
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full ">
            <Image {...logo} />
          </h1>
          {state.error && (
            <p className="mb-4 text-xs text-red-primary">{state.error}</p>
          )}
          <form onSubmit={handleAuth} method="POST">
            {inputFields.map((input) => (
              <CustomInput
                key={input.id}
                value={state[input.name]}
                onChange={handleInputChange}
                {...input}
              />
            ))}
            <CustomButton {...buttonProps} disabled={isInvalid}>
              {formType}
            </CustomButton>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <Paragraph {...paragraphProps} linkProps={linkProps} />
        </div>
      </div>
    </div>
  );
}