import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import Select from "react-select";
import axios from "axios";
import { URL_ORIGIN } from "../constant";
import { useUserContext } from "../context/AuthenticationProvider";
import arrow from '../assets/arrow.png';

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#EEE", // Tailwind's background color
    color: "#FDF9F9", // Tailwind's text color
    borderRadius: "1rem", // Tailwind's rounded-lg
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#0A171E", // Tailwind's background color for dropdown menu
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#080808" : "#0A171E", // Tailwind's text color for dropdown menu options
    backgroundColor: state.isSelected ? "#EFEFEF" : "#FDF9F9", // Tailwind's background color for dropdown menu options
  }),
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { details, setDetails, setIsAuthenticated, IsAuthenticated } =
    useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const options = [
    { value: "Student", label: "Student" },
    { value: "Doctor", label: "Doctor" },
    { value: "Hostel Office", label: "Hostel Office" },
  ];

  const [selectedOption, setSelectedOption] = useState(
    JSON.parse(localStorage.getItem("selectedOption")) || null
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedOption) {
      let url;
      let dashboard;
      switch (selectedOption.value) {
        case "Student":
          url = `${URL_ORIGIN}/student/login`;
          dashboard = "/student/dashboard";
          break;
        case "Doctor":
          url = `${URL_ORIGIN}/doctor/login`;
          dashboard = "/doctor/dashboard";
          break;
        case "Hostel Office":
          url = `${URL_ORIGIN}/hostel/login`;
          dashboard = "/hostel/dashboard";
          break;
        default:
          console.error("Unknown option selected");
          return;
      }
      setLoading(true);
      try {
        const response = await axios.post(
          url,
          {
            email: email,
            password: password,
          },
          {
            withCredentials: true,
          }
        );
        setDetails(response.data);
        setIsAuthenticated(true);
        navigate(dashboard);
        toast.success("Login successful!");
      } catch (error) {
        toast.error("Login failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (selectedOption) {
      localStorage.setItem("selectedOption", JSON.stringify(selectedOption));
    }
  }, [selectedOption]);

  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className=" w-[20rem] mx-6 relative flex flex-col p-6 rounded-3xl mt-52 gap-10  text-black bg-riverBed">
        <div className="header w-full h-full text-aquaMarine text-6xl font-extrabold flex justify-center">
          <span className="drop-shadow-custom">LOGIN</span>
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="block relative">
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="rounded-3xl bg-email bg-contain bg-left bg-no-repeat placeholder:left-10 placeholder:relative placeholder:text-white border placeholder:text-lg bg-backgroundColor border-gray-200 text-sm w-full font-normal leading-[18px] text-white tracking-[0px] appearance-none block h-11 m-0 p-4 focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              onChange={(e) => setEmail(e.target.value)} // Update this
            />
          </div>
          <div className="block relative">
            <input
              type="text"
              id="password"
              placeholder="Password"
              className="rounded-3xl bg-pass bg-contain bg-left bg-no-repeat placeholder:left-10 placeholder:relative placeholder:text-white border placeholder:text-lg bg-backgroundColor border-gray-200 text-sm w-full font-normal leading-[18px] text-white tracking-[0px] appearance-none block h-11 m-0 p-4 focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              onChange={(e) => setPassword(e.target.value)} // Update this
            />
          </div>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
          />
          <div className="mb-20 w-full flex justify-center">
            <a className="text-lg text-aquaMarine drop-shadow-custom" href="#">
              Forgot your password?
            </a>
          </div>
          <div className="header w-full h-full flex justify-center px-10">
          <button type="submit" className="login flex justify-center gap-4 active:top-1 relative text-2xl font-extrabold px-4 rounded-3xl bg-backgroundColor text-black drop-shadow-custom w-full text-center"><img src={arrow} alt="" className="h-14 w-full px-14"/></button>
        </div>
          {/* <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            { ? "Loading..." : "Submit"}
          </button> */}
        </form>
      </div>
    </div>
  );
};
export default Login;
