import React, { useState } from "react";

export default function Ambulance() {
  const [checked, setChecked] = useState(false);
  const [issue, setIssue] = useState("");
  function handleCheck() {
    if (issue === "") {
      alert("Please enter your issue");
      return;
    } else {
      setChecked(!checked);
      if (!checked) {
        console.log(issue);
        setIssue("");
      }
    }
  }
  return (
    <div className="min-h-screen bg-backgroundColor w-full text-white flex gap-6 flex-col">
      <header className="w-full p-6">
        <h1 className="text-white text-2xl font-extrabold w-full">Ambulance</h1>
      </header>
      <div className="ambulance h-72 overflow-hidden relative flex flex-col justify-center items-center">
        <img
          className="absolute top-0 self-center h-72 w-64 z-50"
          src="https://s3-alpha-sig.figma.com/img/8b9b/5714/73e28ec81dd8c6f2b2bfafc0baec096c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n8ZAsGxkGyjz8Se7IY6PhOeOkiNpk--vsnFpJTAO6I-WFBEq-rdZcYAwzCCj-wigY2hKxMo-vE-7nLB5JnobAfKE7QLtPRFmJLrlBzRHBR9OpM0XwbAWQIVQIakdmf16KTWVpfRSA7EPJYbWU1ENlWkOWLLJ1ldGnvVwX7g5uGWzbnkSRoE-Tdv5MaoTw7KP0-pHGVTKK70Fv57O5Dg9VymyVW0NUrfRe9VkmISw3htO14dSOwpMDCwiaW5nkAl6pPHKMTH-6Q7rS6L-C4ULHjf3UNUFw5iVcECYvVBOFEu6u~Aj33nZBlUP0JNhBkf9UpiFjHT~S99~it73biz0Ig__"
          alt=""
        />
        <img
          className="absolute top-0 self-center h-72 w-96 z-0"
          src="https://s3-alpha-sig.figma.com/img/00fa/553c/27ea107ff3d6e84d818d06d05da4a8c4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lePB52wSgOhufU7oVdfN8kton32URD0zgkKSVr2tcuJWbA9bPHlu6HwL7d1waJnNhK9eb-unsBeiUXAU~kp0DBB~ttIWUUVTdWOKfp-Qgzvr3drMMYuRbhHEXmS864MLZPDbHJoUUZVem2XcywUBPlvQL9cfqWx8QEYF2MPLP29IJ5C-AyMLSKfrHbR30HZHRP0VjifZHyxSIMr5pi9i63-Hpe0TDJsOdlEAVxCceh4LFxRjOeUF79suyUvTBtisWZ3981cQxfbvKC9WCBzlRm7IxyIBJztFQycxuhzKkx~qgC1gTNna1C36tSQClXNB~87SbV4Xqs0JUo7PV3Z5Bw__"
          alt=""
        />
      </div>
      <div className="tag whitespace-nowrap text-center text-lg">
        We are here to help you out
      </div>
      <div
        className={`search h-20 flex flex-col items-center justify-center relative mx-6 rounded-3xl`}
      >
        <div
          className={`search-bar w-full rounded-3xl absolute ${
            checked ? "animate-fadeOut " : ""
          }`}
        >
          <textarea
            type="text"
            className="w-full shadow-custom h-20 rounded-3xl bg-dark placeholder:text-white placeholder:font-bold p-4 text-white"
            placeholder="Type your issue..."
            value={issue}
            onChange={(e) => {
              setIssue(e.currentTarget.value);
            }}
            required
          />
        </div>
        <div
          className={`timer overflow-hidden flex text-white justify-between absolute ${
            checked ? "animate-fadeIn" : "opacity-0 w-0"
          }`}
        >
          <div className="h-14 w-14 rounded-3xl bg-aquaMarine flex justify-center items-center text-black text-2xl font-bold">
            00
          </div>
          <div className="h-14 flex flex-col justify-center items-center text-3xl gap-3 font-extrabold">
            <div className="flex justify-center items-center h-3 w-3 rounded-full bg-white"></div>
            <div className="flex justify-center items-center h-3 w-3 rounded-full bg-white"></div>
          </div>
          <div className="h-14 w-14 rounded-3xl bg-aquaMarine flex justify-center items-center text-black text-2xl font-bold">
            01
          </div>
          <div className="h-14 flex flex-col justify-center items-center text-3xl gap-3 font-extrabold">
            <div className="flex justify-center items-center h-3 w-3 rounded-full bg-white"></div>
            <div className="flex justify-center items-center h-3 w-3 rounded-full bg-white"></div>
          </div>
          <div className="h-14 w-14 rounded-3xl bg-aquaMarine flex justify-center items-center text-black text-2xl font-bold">
            03
          </div>
        </div>
      </div>
      <div className="flex flex-col relative h-14 mx-6 justify-center items-center">
        <div className="slider flex justify-center absolute">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className={`group peer ring-0 overflow-hidden rounded-full outline-none duration-500 after:duration-300  h-12 shadow-md  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:flex after:justify-center after:items-center ${
                checked
                  ? "animate-fadeOut after:translate-x-0 w-12 after:content-['✔️'] hover:after:scale-95 bg-emerald-500 focus:outline-none"
                  : "bg-rose-400 w-40 after:content-['✖️']"
              } flex justify-center items-center`}
              checked={checked}
              onClick={handleCheck}
            >
              <div>{checked ? "" : "Request"}</div>
            </div>
          </label>
        </div>
        <div className={`status overflow-hidden flex h-14 text-white justify-between items-center rounded-3xl pl-4 absolute bg-gray-600 ${
            checked ? "animate-fadeIn" : "opacity-0 w-0"
          }`}>
            <span>Status</span>
            <div className="w-1/2 h-full rounded-3xl flex justify-center items-center bg-red-600">Pending</div>
          </div>
      </div>
    </div>
  );
}
