import coin from "../assets/dollar.png";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { AgCharts } from "ag-charts-react";
export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Total Task Done vs Total coined Earned",
  },
};

const Home = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  // State variable to track if the mouse is at the top of the screen
  // State variable to track if the mouse has scrolled to the top
   // State variable to track if the mouse has scrolled to the top
  const [isMouseScrolledToTop, setIsMouseScrolledToTop] = useState(false);

  useEffect(() => {
    // Function to handle mouse scroll
    const handleMouseScroll = () => {
      // Check if the scroll position is at the top of the page (0)
      if (window.pageYOffset <= 0) {
        setIsMouseScrolledToTop(true);
      } else {
        setIsMouseScrolledToTop(false);
      }
    };

    // Add event listener for mouse scrol
    window.addEventListener('scroll', handleMouseScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleMouseScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount mount update

  useEffect(() => {
    const fetchUserData = async () => {
      const webapp = await window?.Telegram?.WebApp?.initDataUnsafe;
      if (webapp && webapp["user"]) {
        setUsername(webapp["user"]["username"] || "Unknown User");
      } else {
        setUsername("Guest");
      }
    };
    fetchUserData();
  }, []);
  console.log("mouse scroll pos", isMouseScrolledToTop);

  return (
    <div className="h-[90vh] w-full px-2 py-6 flex flex-col gap-2 max-w-3xl">
      <div className="h-10 flex flex-row justify-between">
        <p>{username} : Rank</p>
        <div
          className=""
          onClick={() => setOpen(!open)}
        >
          <i className="bi bi-gear-fill"></i>
        </div>
        {open && (
          <div className="absolute flex flex-col gap-3 right-5 top-12 z-[1] bg-cyan-950 shadow-black text-white rounded-lg p-2 opacity-70">
            <div className="hover:bg-blue-200 hover:text-blue-900 px-3 rounded-lg">
              <a href="/languages">Languages</a>
            </div>
            <div className="hover:bg-blue-200 hover:text-blue-900 px-3 rounded-lg">
              <a href="/profile">Profile</a>
            </div>
            <div className="hover:bg-blue-200 hover:text-blue-900 px-3 rounded-lg">
              <a href="/faqs">FAQs</a>
            </div>
            <div className="hover:bg-blue-200 hover:text-blue-900 px-3 rounded-lg">
              <a href="/support">Get a Support</a>
            </div>
          </div>
        )}
      </div>
      <div className="flex h-1/5  text-white text-center items-center justify-between w-full ">
        <div className="flex gap-2 w-full justify-between">
          <div className="bg-blue-600 rounded-2xl px-5 py-2 hover:translate-y-1 duration-150 ">
            {/* w-36 */}
            <p >Earn per Tap</p>
            <p className="flex justify-center items-center gap-1">
              <img src={coin} alt="" width={20} />
              +8
            </p>
          </div>
          <div className="bg-blue-600 rounded-2xl px-5  py-2 hover:translate-y-1 duration-150 ">
            {/* w-36 */}
            <p>Earn per Tap</p>
            <p>1M</p>
          </div>
          <div className="bg-blue-600 rounded-2xl px-5 py-2 hover:translate-y-1 duration-150 ">
            {/* w-36 */}
            <p>Earn per Tap</p>
            <p>+612.5K</p>
          </div>
        </div>
      </div>
      <div className="h-1/4 text-center flex flex-col justify-center gap-4 ">
        <p className="text-4xl text-blue-600 font-bold">TOTAL E4C COIN</p>
        <div className="flex justify-end px-2">
          <p className="text-2xl text-blue-600 font-bold">AVAILABLE COIN</p>
        </div>
      </div>
      <div className="h-1/2 border-2 border-sky-400 rounded-lg p-2">
        <Chart
          chartType="Bar"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Home;
