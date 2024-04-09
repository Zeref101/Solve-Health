import { NavLink } from "react-router-dom";
import { getFieldFromDetails } from "../../../util";
import yodaimage from "../../../assets/yoda.png";

export default function StudentDashboard() {
  const details = JSON.parse(localStorage.getItem("details"));

  return (
    <div>
      <div className="py-4 min-h-screen bg-backgroundColor w-full text-white flex flex-col gap-4">
        <div className="flex justify-between items-center p-4">
          <div className="logo flex flex-col justify-center items-center">
            <h1 className=" self-start">Hello,</h1>
            <h1>{details.name}</h1>
          </div>
          <div className="icon">
            <div className="bg-black border-2 border-gray-300 rounded-full w-14 h-14"></div>
          </div>
        </div>
        <div className="quote h-40 bg-riverBed mx-6 rounded-2xl flex justify-center items-center">
          <div className="flex flex-col m-2 my-4 gap-2 basis-1/2 w-full">
            <img src={yodaimage} alt="yoda" />
            <div className="text-center text-lg font-bold textShadow">
              How do you feel?
            </div>
            <div className="text-center text-sm font-semibold">
              I am feeling great right now
            </div>
          </div>
        </div>
        <div className="search  mx-6 shadow-custom rounded-3xl">
          <div className="search-bar">
            <div className="w-full h-14 bg-contain bg-no-repeat font-semibold flex justify-center items-center bg-right bg-dark border-2 bg-search border-dark rounded-3xl p-4 text-white">
              Current Queue <span className="mx-2">:</span>
              <div className="w-[35px] h-[35px] rounded-full font-bold text-aquaMarine border-4 flex justify-center items-center border-[#20E9C1]">
                15
              </div>
            </div>
          </div>
        </div>
        <div className="category flex flex-col mx-6 gap-4">
          <div className="header flex items-center justify-between">
            <h1 className="text-xl font-bold">Functionality</h1>
            <h1 className="">See All</h1>
          </div>
          <div className="list flex gap-2 justify-start overflow-x-scroll">
            <NavLink
              to={`/student/ambulance`}
              className="flex flex-col justify-center items-center"
            >
              <div className="h-16 bg-dark p-2 hover:bg-aquaMarine duration-150 shadow-custom rounded-2xl w-16">
                <img src="/src/assets/ambulance.png" alt="ambulance" />
              </div>
              <span className="text-sm font-semibold">Ambulance</span>
            </NavLink>
            <NavLink
              to={`/student/prescription-history`}
              className="flex flex-col justify-center items-center"
            >
              <div className="h-16 p-2 bg-dark hover:bg-aquaMarine shadow-custom rounded-2xl w-16">
                <img src="/src/assets/prescription101.png" alt="prescription" />
              </div>
              <span className="text-sm font-semibold">Prescription</span>
            </NavLink>
          </div>
        </div>
        <div className="doctor flex flex-col mx-6 gap-4">
          <div className="header flex items-center justify-between">
            <h1 className="text-xl font-bold">Doctors</h1>
            <h1 className="">See All</h1>
          </div>
          <div className="list py-4 px-2 flex gap-10 justify-between overflow-x-scroll">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center h-36 bg-dark hover:scale-105 duration-150 ease-in-out rounded-2xl shadow-custom w-24">
                <div className="h-20 w-20 rounded-full border-4 border-lightTurquoise"></div>
                <div className="relative -top-2 overflow-hidden w-16 px-2 flex justify-center h-4 object-contain bg-lightTurquoise rounded-3xl">
                  <img
                    className="w-4 h-4"
                    src="https://s3-alpha-sig.figma.com/img/fea8/d3ae/e63153e4aac87e918cc1611bbba3b28e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hk6w6lBFcKnQ9Sgo1qiS5~OmjkNworEV1MS094qwG3vQ16CPxlg5vaz1fjTUpLexe1kPXQHhimYkj6LoCfG4U8TDoNl1jLB8I6CRZSBobLO3Mev-dTBg2R2KrmNI4Wv9BvbTIK8-S~Azd0t43CMMeH7aIkyUEbIgyk-xWywZCox1Uy4BoMy3-PdjmxGBQgOJeeHWHhV8w~a4T9RZ~cosqNKpU6jr4ZE0NJwf3u9aKJQBCfA62pfTsCpFOnzSOqJQagl1t0yo1zpIdPF2eUh6trhMd5hPgxxRR871YDEsKvkopYgkGaoZdBrmGdCInlWXvs6j3DOgOcgTf9vPKxN2pA__"
                    alt=""
                  />
                  <span className="text-black font-bold text-sm">49</span>
                </div>
                <div className="pt-2">Nigga #1</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center h-36 bg-dark shadow-custom hover:scale-105 duration-150 ease-in-out rounded-2xl w-24">
                <div className="h-20 w-20 rounded-full border-4 border-lightTurquoise"></div>
                <div className="relative -top-2 overflow-hidden w-16 px-2 flex justify-center h-4 object-contain bg-lightTurquoise rounded-3xl">
                  <img
                    className="w-4 h-4"
                    src="https://s3-alpha-sig.figma.com/img/fea8/d3ae/e63153e4aac87e918cc1611bbba3b28e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hk6w6lBFcKnQ9Sgo1qiS5~OmjkNworEV1MS094qwG3vQ16CPxlg5vaz1fjTUpLexe1kPXQHhimYkj6LoCfG4U8TDoNl1jLB8I6CRZSBobLO3Mev-dTBg2R2KrmNI4Wv9BvbTIK8-S~Azd0t43CMMeH7aIkyUEbIgyk-xWywZCox1Uy4BoMy3-PdjmxGBQgOJeeHWHhV8w~a4T9RZ~cosqNKpU6jr4ZE0NJwf3u9aKJQBCfA62pfTsCpFOnzSOqJQagl1t0yo1zpIdPF2eUh6trhMd5hPgxxRR871YDEsKvkopYgkGaoZdBrmGdCInlWXvs6j3DOgOcgTf9vPKxN2pA__"
                    alt=""
                  />
                  <span className="text-black font-bold text-sm">49</span>
                </div>
                <div className="pt-2">Nigga #1</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center h-36 bg-dark shadow-custom hover:scale-105 duration-150 ease-in-out rounded-2xl w-24">
                <div className="h-20 w-20 rounded-full border-4 border-lightTurquoise"></div>
                <div className="relative -top-2 overflow-hidden w-16 px-2 flex justify-center h-4 object-contain bg-lightTurquoise rounded-3xl">
                  <img
                    className="w-4 h-4"
                    src="https://s3-alpha-sig.figma.com/img/fea8/d3ae/e63153e4aac87e918cc1611bbba3b28e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hk6w6lBFcKnQ9Sgo1qiS5~OmjkNworEV1MS094qwG3vQ16CPxlg5vaz1fjTUpLexe1kPXQHhimYkj6LoCfG4U8TDoNl1jLB8I6CRZSBobLO3Mev-dTBg2R2KrmNI4Wv9BvbTIK8-S~Azd0t43CMMeH7aIkyUEbIgyk-xWywZCox1Uy4BoMy3-PdjmxGBQgOJeeHWHhV8w~a4T9RZ~cosqNKpU6jr4ZE0NJwf3u9aKJQBCfA62pfTsCpFOnzSOqJQagl1t0yo1zpIdPF2eUh6trhMd5hPgxxRR871YDEsKvkopYgkGaoZdBrmGdCInlWXvs6j3DOgOcgTf9vPKxN2pA__"
                    alt=""
                  />
                  <span className="text-black font-bold text-sm">49</span>
                </div>
                <div className="pt-2">Nigga #1</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center h-36 bg-dark shadow-custom hover:scale-105 duration-150 ease-in-out rounded-2xl w-24">
                <div className="h-20 w-20 rounded-full border-4 border-lightTurquoise"></div>
                <div className="relative -top-2 overflow-hidden w-16 px-2 flex justify-center h-4 object-contain bg-lightTurquoise rounded-3xl">
                  <img
                    className="w-4 h-4"
                    src="https://s3-alpha-sig.figma.com/img/fea8/d3ae/e63153e4aac87e918cc1611bbba3b28e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hk6w6lBFcKnQ9Sgo1qiS5~OmjkNworEV1MS094qwG3vQ16CPxlg5vaz1fjTUpLexe1kPXQHhimYkj6LoCfG4U8TDoNl1jLB8I6CRZSBobLO3Mev-dTBg2R2KrmNI4Wv9BvbTIK8-S~Azd0t43CMMeH7aIkyUEbIgyk-xWywZCox1Uy4BoMy3-PdjmxGBQgOJeeHWHhV8w~a4T9RZ~cosqNKpU6jr4ZE0NJwf3u9aKJQBCfA62pfTsCpFOnzSOqJQagl1t0yo1zpIdPF2eUh6trhMd5hPgxxRR871YDEsKvkopYgkGaoZdBrmGdCInlWXvs6j3DOgOcgTf9vPKxN2pA__"
                    alt=""
                  />
                  <span className="text-black font-bold text-sm">49</span>
                </div>
                <div className="pt-2">Nigga #1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
