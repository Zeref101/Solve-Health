import { useParams } from "react-router-dom";

const PrescriptionDetailsPage = () => {
  const { prescriptionId } = useParams();

  return (
    <div className="py-4 min-h-screen bg-backgroundColor w-full text-white flex flex-col gap-4 items-center">
      <div className="flex justify-between items-center w-full pb-8 px-2.5 bg-[#0A171E] prescriptionDetail">
        <span className="text-white text-[24px]">Prescription Detail</span>
        <button>
          <img
            src="/src/assets/downloadButton.png"
            alt="downloadButton"
            className="w-[35px] h-[35px] rounded-full"
          />
        </button>
      </div>
      <div className=" bg-[#172935] flex flex-col w-[80%] px-4 h-auto py-4 rounded-[15px] prescriptionDetail">
        <div className="font-extrabold">Doctor's Details</div>
        <div className="flex flex-col justify-center items-center">
          <div className=" w-[80px] h-[80px] rounded-full bg-black mt-4">
            {/* image */}
          </div>
          <div className="flex flex-col justify-center items-center mt-2">
            <span className="font-bold">Dr. Om Aditya</span>
            <span className="font-normal">Nothing Special</span>
          </div>
        </div>
      </div>
      <div className=" bg-[#172935] flex flex-col w-[80%] px-4 h-auto py-4 rounded-[15px] prescriptionDetail">
        <div className="font-extrabold">Patient's Details</div>
        <div className="flex flex-col justify-center items-start mt-4 font-semibold">
          <span>Name - Shreyas</span>
          <span>Block - A</span>
          <span>Room - 115</span>
          <span>Illness - fever</span>
          <span>Date - 4 April 2024</span>
        </div>
      </div>
      <div className=" bg-[#172935] flex flex-col w-[80%] px-4 h-auto py-4 rounded-[15px] prescriptionDetail">
        <div className="font-extrabold">Prescription given</div>
        <div className="flex flex-col justify-center items-start font-semibold mt-4">
          <span>• Augmentin 625 x 2 tabs. </span>
          <span>• Augmentin 625 x 2 tabs. </span>
          <span>• Augmentin 625 x 2 tabs. </span>
        </div>
      </div>

      {/* Render prescriptionId for testing */}
      {/* Other prescription details */}
    </div>
  );
};

export default PrescriptionDetailsPage;
