import Loader from "../../Components/Loader/Loader";
import Image from "./Image/Image";

export default function Login() {
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
        </div>
      </div>
    </div>
  );
}
