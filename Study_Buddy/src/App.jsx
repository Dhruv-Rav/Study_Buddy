// import { Chat } from './components/Chat';


// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="bg-primary text-primary-foreground py-4">
//         <div className="container">
//           {/* <h1 className="text-2xl font-bold">Study Buddy</h1> */}
//         </div>
//       </header>
//       <main className="flex-grow container my-8">
//         <Chat />
//       </main>
//       {/* <footer className="bg-muted py-4">
//         <div className="container text-center text-sm">
//           © 2023 Study Buddy. All rights reserved.
//         </div>
//       </footer> */}
//     </div>
//   );
// }

// export default App;

// import Header from './Header';
// import Sidebar from './Sidebar';
// import Chat from './Chat';
// import CodeEditor from './CodeEditor';
// import PreviewPanel from './PreviewPanel';
// import ThemeSwitcher from './ThemeSwitcher';
// import Footer from './Footer';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4 relative">
          <div className="flex justify-end items-center mb-4">
            <ThemeSwitcher />
          </div>
          <div className="flex-grow mb-20">
            <Chat />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;