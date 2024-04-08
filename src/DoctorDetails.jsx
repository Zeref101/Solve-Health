import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function DoctorDetails() {
  const [details, setDetails] = useState({
    img: "https://s3-alpha-sig.figma.com/img/fb11/a9f5/77f63aabaac5cd02a9af6492c086a768?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2EYeUz~fRSTDHeaa73E8B4q~Y4S~fOdc1datMvxuWAPS~~Z9qtfTLHp32FY16ngSJhVOKrH2V2~5T3XvvTMsbPLrhYcNkGb68zR7keuTcjghcFtLIIKutP1BpSnqUfFW98xnHdef52mc-gXFG8ZqFNHTvRvUrg3a9bmUKHszRNJnHcthdgSPNVazigZJUZR0A2y-EKH8iRnoKRlX~GrP-MlMzPbdYHLMNQ1GWPWq0Hud~PZqWUpP1G-CgAGrk04LErYkd5e-5LeaKXraXx6LloiqR5Rk7vamKPf2ntKVjREJ6yUTUzZeALgn77y8bNWM~QveW7aPP9IVIaz9zq9gw__",
    name: "Dr. Om Aditya",
    speciality: "Nothing Special",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nisi accusantium qui consequatur. Deserunt, esse incidunt cumque dolores optio iste.",
  });

  const [reviews, setReviews] = useState([
    
  ])
  return (
    <div className="min-h-screen bg-backgroundColor w-full text-white flex flex-col">
      <div className="header w-full flex flex-col justify-center items-center rounded-b-xl overflow-hidden shadow-custom bg-riverBed py-4 gap-4">
        <div>
          <img
            className="w-32 h-32 rounded-full border-2 border-gray-300 self-center shadow-custom"
            src={details.img}
            alt=""
          />
        </div>
        <div className="details flex flex-col items-center text-black justify-center">
          <h1 className="text-2xl font-bold">{details.name}</h1>
          <h1 className="text-lg">{details.speciality}</h1>
        </div>
        <div className="nav flex gap-10">
          <div className="h-14 w-14 rounded-2xl bg-backgroundColor flex justify-center items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/0953/8ff6/c77e382807bed7ba55315ff2d2ac309d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrVATMdcvmRb3D6misPo7UabOa0C0MDsIrRHfuWF0-uJq7XNCFXFwQC~dpjor~PKxckiNoTi349stp5bWoHbG14hH33HOd58uWufYojd2GgCBC47rzYtTksvGHbdBSFlO251uylmZQBfyPy4s~c0MHuQYC1NmIYyv55kPIpg8KR8~oon-ggtwFpddUT1K8VIhOZ27mTem2v9UtICXX3klufXLAlce-fNzMRQCNKCUilxIKV7Q-tG4PIr74iF3hnxFPo-Xb4f9AbB1st7GCPD0DsZ6WIf11b78aYKy9~v4YoApws-7zhKhvCHeaC98Cb1n7SXpzasaxrIja6z9cLUbA__"
              alt=""
            />
          </div>
          <div className="h-14 w-14 rounded-2xl bg-backgroundColor flex justify-center items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/8253/0d58/3b1d5813306f08dad63667677f14e06b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxMNfIWxv~tdktmEmU4FHVhAAtHLath-nA~9A1JzwoD5XERPsASTHRW8cVJxPqJ3ANkdvCfV9iaY9vJhKCfoeR7v9rhQxq3A7fUWSsFgESvX2eF3e8vKCr2eTRI3IClaWkjj9LFMeiCyDpbSjG6y0XN-551vtUmXrLXTpHPPVlekM1-Is5OIlV26sUZ44kpJNDTUawhMVGnUWZD3fJdW6BmFMooehc44Z34w7b6hh5izMk84gf8rh2~eAmcFZqcS7vDvk9~Wm4pgU-vRK5Qnhx8bbUBEUDZXCLe~WWIQNnbkImShNT8Ddnrgd5R05XlMIa1km9IZkOqK5--OTd1aug__"
              alt=""
            />
          </div>
          <div className="h-14 w-14 rounded-2xl bg-backgroundColor flex justify-center items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/c609/3500/8ca694500ab3f4d1bd65c97b682564c4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N69sAHDOeA0izCpL-zFFWrR1W92X~nLd3TTvMt8qvnA3sWLlLGjqJj~KDCrYBdYDxxgAHCrOcf1212xiM1ajixsagllp7ZIlp8eBSHEzjRSqcXae8lC5nbAFNoM82jHmT67Ut6sl1kwYwJbvoYNraNAWw3OaxrqUYYHLsqFO5A22xKCBsNX5ANXXCr3EEZZQ3Jm28HJy1Gzw-m7oC~CK9VrXPJK0blGAIh~~pxPKkqVUf6-Qg~UWmHWP9kZpxsEN1pnKRftOdYdT0JVN93I8a9O~nAEeAW4rDePJ-p7tRKhcZ1bOjqXb-N3kDKkMLrkL7lJWJGo5wuNapklNgb5MYQ__"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="details m-6 gap-4 flex flex-col">
        <div className="header text-2xl font-bold">Details</div>
        <div className="">{details.details}</div>
      </div>
      <div className="reviews m-6 gap-4 flex flex-col">
        <div className="header text-2xl font-bold flex gap-4">
          <h1>Reviews</h1>
          <div className="rating border-2 border-gray-300 flex rounded-full justify-between gap-1 items-center p-2">
            <img
              className="h-4 w-4"
              src="https://s3-alpha-sig.figma.com/img/fea8/d3ae/e63153e4aac87e918cc1611bbba3b28e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N0uWbnAaEmMCYCzjexuETjaGJMyLUYNaFh854XmooXhAnkV4HqVvaOer-UPr~TvUFuH1X51Tu7Ly1-U3L6lB6jDS7Zbo9gkZ3UOjtTFeDTTbULG~j6rCGnTb2g2wgNafwKQ7f5NE-03rCTZenLQLI0jXPTh7oBHMsb1BycaShp0x7M1SD9Bz5BJA32~vte3dgHIdSSci5EAUcKoWvDodeDJLF2YrmkXXqtakwjv8DZ8F4u6h7bVSdxp8ZOk4Nemok2IAhncx2KgQjIrdNtJIpYVTVSr3bTcbawLlLedSdjtuKwYs~7R-mH9wb-i~RCM8-WHT2WjD0cUvKAJ-sBT~JQ__"
              alt=""
            />
            <span className="text-sm align-bottom flex items-center">4.5</span>
          </div>
        </div>
        <div className="">
          <Swiper
            className="p-10"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>{details.details}</SwiperSlide>
            <SwiperSlide>{details.details}1224</SwiperSlide>
            <SwiperSlide>{details.details}</SwiperSlide>
            <SwiperSlide>{details.details}</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
