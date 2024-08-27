
// import "./App.css"; 

import Home from "./pages/home/Home";


function App() {

 
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Signup /> */}
     
      <Home />
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
