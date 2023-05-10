import Loader from '../../Components/Loader/Loader';
import ImageComponent from './ImageComponent/ImageComponent'

export default function Login() {
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
       <Loader fadeOutInterval={5000}/>
       <ImageComponent src="/images/iphone-with-profile.jpg"  alt="iPhone with Instagram app" styleImg='flex w-3/5' />
    </div>
  );
}
