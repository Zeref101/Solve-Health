import WardenSidebar from "../../hostel_components/WardenSideBar";
import { Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function Analytics() {
  const data = {
    labels: [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
      "11th",
      "12th",
      "13th",
      "14th",
      "15th",
      "16th",
      "17th",
    ],
    datasets: [
      {
        label: "First dataset",
        data: [
          33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44,
          65,
        ],
        fill: true,
        backgroundColor: "rgba(130,130,238,0.2)",
        borderColor: "rgba(63,63,229,1)",
      },
    ],
  };
  const data1 = {
    labels: ["1st", "2nd", "3rd"],
    datasets: [
      {
        label: "First dataset",
        data: [78, 12, 10],
        fill: true,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: "category", // Or 'linear' if numerical data
      },
    },
  };
  return (
    <div className="min-h-screen bg-backgroundColor w-full text-white flex gap-10">
      <WardenSidebar></WardenSidebar>
      <div className="dashboard w-full h-full flex flex-col mr-10 gap-6">
        <div className="header my-6 flex justify-between items-center">
          <div className="font-extrabold text-2xl">Discover Today</div>
          <div className="search w-1/3 shadow-custom rounded-3xl">
            <div className="search-bar">
              <input
                type="text"
                className="w-full h-14 bg-contain bg-no-repeat bg-right bg-dark border-2 bg-search border-dark placeholder:text-white placeholder:font-bold rounded-3xl p-4 text-white"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="body h-full w-full flex flex-col gap-10 p-10 rounded-3xl bg-dark">
          <div className="top p-6 text-white bg-[#343434]">
            <div className="header w-full text-4xl font-extrabold">
              Patients\Floor
            </div>
            <Line
              data={data}
              options={options}
              redraw={true}
              updateMode="resize"
            />
          </div>
          <div className="bottom p-6 text-white bg-[#343434]">
            <div className="header w-full text-center text-4xl font-extrabold">
              BreakDown
            </div>
            <div className="main flex">
              <div className="left basis-1/2 w-full">
                <Pie
                  data={data1}
                  options={options}
                  redraw={true}
                  updateMode="resize"
                />
              </div>
              <div className="right basis-1/2 w-full font-bold text-xl justify-center items-start gap-10 flex flex-col">
                <div>78% patients suffer from Dengue</div>
                <div>12% patients suffer from fever</div>
                <div>10% patients suffer from other diseases</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
