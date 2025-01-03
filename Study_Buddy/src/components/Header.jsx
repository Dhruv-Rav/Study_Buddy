import { FaShareAlt } from 'react-icons/fa';

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      <img src="/logo.svg" alt="Study Buddy Logo" className="h-10 w-10" />
      <h1 className="text-2xl font-bold">Study Buddy</h1>
      <div className="flex items-center space-x-4">
        <img src="/User.png" alt="User Profile" className="h-8 w-8 rounded-full" />
        <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
          <FaShareAlt />
        </button>
      </div>
    </header>
  );
}

export default Header;