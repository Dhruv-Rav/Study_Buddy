import { FaHome, FaBook, FaTasks, FaComments, FaCog } from 'react-icons/fa';


function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col border-r border-gray-700">
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FaHome />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FaBook />
            <span>Subjects</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FaTasks />
            <span>Assignments</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FaComments />
            <span>Chats</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FaCog />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;