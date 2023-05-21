import User from './User';
import Suggestions from './Suggestions';
export default function Sidebar() {
  return (
    <div className="p-4">
      <User />
      <Suggestions />
    </div>
  );
}