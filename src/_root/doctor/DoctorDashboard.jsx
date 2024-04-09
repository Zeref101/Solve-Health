import { useEffect, useState } from "react";
import DoctorSidebar from "../../doctor_components/DoctorSidebar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { quote, shifts, times } from "../../constant";
import minus from "../../assets/minus 1.png";

export default function DoctorDashboard() {
  const [percentage, setPercentage] = useState(0);
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(15);
  const [time, setTime] = useState(100);

//   ISSUE FIXX KR SAALE

//   const timer = setInterval(()=>{
//     if(time === 0){
//         clearInterval(timer);
//     }else{
//         setTime(time-1);
//         console.log(time);
//     }
// }, 1000)
  useEffect(() => {
    setPercentage(100);
  }, [count]);
  return (
    <div className="min-h-screen bg-backgroundColor w-full text-white flex gap-10">
      <DoctorSidebar></DoctorSidebar>
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
        <div className="top flex gap-10 w-full h-56">
          <div className="bg-dark basis-5/12 rounded-2xl w-full p-6 gap-6 flex flex-col">
            <div className="header flex justify-between items-center">
              <div className="text-xl font-bold">Prescriptions</div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/bbc1/a70f/8b9a2573f89f39f99d7dfeec7594f1ba?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZPCAFP5tC8GQtEAwUUGTny8OzKHKrL7DdFtGgwrYbZN5YjtLZE2Zu4n~Exiqa892Gf-TAyc3AqnMEaoB~HywklirPEYkNGpLQtIAiKig8R5McbPR6Jcm~GVGCaYap2r2McqvzVli3MWNNiqPUXv8Tixo3ofoPlH83xMwfuOp38fETWb2VfK4FYy6xH0brT-v98zLNW1Zr-WHzl2ZS0KUJSpKJZ4uk-l6WOYpdETw-F2YWCYw9e3T5UYQmO4wO8gnVKLf~trpc6kVfKpPXshQ0dFrcIPsrSBeTnDqGhST~2lVo4x7Np9BGu91uFVkY9J8~Lc7TYXJ3VyGVKzOME9G3g__"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/bbc1/a70f/8b9a2573f89f39f99d7dfeec7594f1ba?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZPCAFP5tC8GQtEAwUUGTny8OzKHKrL7DdFtGgwrYbZN5YjtLZE2Zu4n~Exiqa892Gf-TAyc3AqnMEaoB~HywklirPEYkNGpLQtIAiKig8R5McbPR6Jcm~GVGCaYap2r2McqvzVli3MWNNiqPUXv8Tixo3ofoPlH83xMwfuOp38fETWb2VfK4FYy6xH0brT-v98zLNW1Zr-WHzl2ZS0KUJSpKJZ4uk-l6WOYpdETw-F2YWCYw9e3T5UYQmO4wO8gnVKLf~trpc6kVfKpPXshQ0dFrcIPsrSBeTnDqGhST~2lVo4x7Np9BGu91uFVkY9J8~Lc7TYXJ3VyGVKzOME9G3g__"
                  alt=""
                />
              </div>
            </div>
            <div className="mid flex gap-4 justify-center items-center">
              <CircularProgressbar
                value={percentage}
                text={`${count}`}
                styles={{
                  // Customize the root svg element
                  root: {
                    width: "50px",
                    height: "50px",
                    boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 1)",
                    borderRadius: "50%",
                  },
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `#20E9C1`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",
                    // Customize transition animation
                    transition: "stroke-dashoffset 1s ease 0s",
                    // Rotate the path
                    transform: "rotate(0turn)",
                    transformOrigin: "center center",
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: "#172935",
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",
                    // Rotate the trail
                    transform: "rotate(0turn)",
                    transformOrigin: "center center",
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: "#20E9C1",
                    // Text size
                    fontSize: "40px",
                    textShadow: "0px 0px 5px 2px rgba(0, 0, 0, 1)",
                  },
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: "#3e98c7",
                  },
                }}
              />
              <div className="font-bold text-2xl">medication advises given</div>
            </div>
            <div className="compare text-gray-500 self-center">
              +2 this week
            </div>
            <div className="compare text-gray-500 self-center">
              +2 this week
            </div>
          </div>
          <div className="bg-quote bg-top bg-cover bg-gray-400 bg-no-repeat basis-7/12 rounded-2xl w-full ">
            <div className="w-full h-full bg-black bg-opacity-50 p-6 gap-3 flex">
              <div className="basis-2/3 text-black font-bold text-2xl">
                {quote}
              </div>
              <div className="basis-1/3 object-cover flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/fa6c/8f55/2826124e1aa2b435fd64df7d85138fec?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJSGMRfhxF7bRNOomzUFpipaDp7NOg1AeYnCaRPjZMzuTiz2Fbb7sxl2Ko4M6r94Hdg2gBCiAWHXUu7zTD24mJWmPAXBHGnv1yAO-E9U87Z~D0D2Yy0vmV~pzUPBCoC4jeL3~Tv4jqGYuB30z4WqKFLo1mg6II9rezJXb9X0SoiymPnun9qL-672xWuoaqyCKYL-fVUEvgNS3ogsd7lzvRXWY6bgUXYcgk1lq5g5iPTytXuCju3n7cce7mImir-VhfzlPUQYAk4Y646id6TGdwcM2pEP7j7s3xAaNlMzpICf99ra5Ut5jELzZeGSMu3bCKYb1epeLXuvMZF3-FLDtw__"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom h-full w-full bg-dark p-6 flex gap-10 flex-col">
          <div className="header w-full text-2xl font-extrabold">
            Shift Timing
          </div>
          <div className="main h-full w-full flex">
            <div className="left basis-1/2">
              <div className="flex h-full gap-6">
                <div className="flex flex-col">
                  {shifts.map((day) => {
                    return (
                      <div className="text-xl font-bold rounded-2xl">{day}</div>
                    );
                  })}
                </div>
                <div className=""><img className="h-full" src={minus} alt="" /></div>
                <div className="flex flex-col">
                  {times.map((time) => {
                    return (
                      <div className="text-xl font-bold rounded-2xl">
                        {time}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div></div>
            </div>
            <div className="right basis-1/2 flex justify-center">
              <CircularProgressbar
                value={value}
                text={`${value}%`}
                styles={{
                  // Customize the root svg element
                  root: {
                    width: "200px",
                    height: "200px",
                    boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 1)",
                    borderRadius: "50%",
                  },
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `#20E9C1`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",
                    // Customize transition animation
                    transition: "stroke-dashoffset 1s ease 0s",
                    // Rotate the path
                    transform: "rotate(0turn)",
                    transformOrigin: "center center",
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: "#172935",
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",
                    // Rotate the trail
                    transform: "rotate(0turn)",
                    transformOrigin: "center center",
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: "#20E9C1",
                    // Text size
                    fontSize: "20px",
                    textShadow: "0px 0px 5px 2px rgba(0, 0, 0, 1)",
                  },
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: "#41515B",
                    
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
