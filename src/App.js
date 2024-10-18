import Routes from "./routes";
import "./App.css";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="w-screen h-screen bg-sky-200">
      <Routes />
      {/* {isNavar ? (<Navbar className="w-full" />) : (<Navbar className="w-full opacity-0"></Navbar>)} */}
      <Navbar />
    //commitment
    </div>
  );
};

export default App;
