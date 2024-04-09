import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import Select from "react-select";
import axios from "axios";
import { URL_ORIGIN } from "../constant";
import { useUserContext } from "../context/AuthenticationProvider";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0A171E", // Tailwind's background color
    color: "#FDF9F9", // Tailwind's text color
    borderRadius: "1rem", // Tailwind's rounded-lg
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#0A171E", // Tailwind's background color for dropdown menu
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#FDF9F9" : "#0A171E", // Tailwind's text color for dropdown menu options
    backgroundColor: state.isSelected ? "#0A171E" : "#FDF9F9", // Tailwind's background color for dropdown menu options
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
          url = `${URL_ORIGIN}/get-hostel`;
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
    <div className=" w-[20rem] mx-6 relative flex flex-col p-4 rounded-md mt-52  text-black bg-white">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Welcome back to <span className="text-[#7747ff]">App</span>
      </div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        Log in to your account
      </div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="block relative">
          <input
            type="text"
            id="email"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            onChange={(e) => setEmail(e.target.value)} // Update this
          />
        </div>
        <div className="block relative">
          <input
            type="text"
            id="password"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            onChange={(e) => setPassword(e.target.value)} // Update this
          />
        </div>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          styles={customStyles}
        />
        <div>
          <a className="text-sm text-[#7747ff]" href="#">
            Forgot your password?
          </a>
        </div>
        <button
          type="submit"
          className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
export default Login;
