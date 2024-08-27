// import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

// function App() {
//   // eslint-disable-next-line no-unused-vars
//   const [showConfetti, setShowConfetti] = useState(false);

//   const congoClick = () => {
//     setShowConfetti(true);

//     setTimeout(() => {
//       setShowConfetti(false);
//     }, 10000);
//   };

//   return (
//     <>
//       <button onClick={congoClick} className="btn btn-primary text-5xl">
//         Button
//       </button>
//       {/* <ConfettiComponent trigger={showConfetti} /> */}
//     </>
//   );
// }

// export default App;
