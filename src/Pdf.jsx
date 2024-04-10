import html2pdf from "html2pdf.js";
import { URL_ORIGIN } from "./constant";
import { useState } from "react";
import axios from "axios";
import { useUserContext } from "./context/AuthenticationProvider";

const Pdf = () => {
  const { prescription1 } = useUserContext();
  console.log(prescription1);

  function convertToPdf() {
    const input = document.getElementById("convert");
    const [pdf, setPdf] = useState("");
    html2pdf(input);
    html2pdf(input, {
      // margin: 10,
      filename: "prescription.pdf",
      // jsPDF: { unit: "px", format: "a4", orientation: "portrait" },
    }).then(function (pdf) {
      // Convert the PDF to a blob
      pdf.output("blob").then(function (blob) {
        // Create a FormData object and append the blob
        const formData = new FormData();
        formData.append("pdf", blob, "prescription.pdf");

        // Send the blob to the backend
        axios
          .post(`${URL_ORIGIN}/upload/`, formData)
          .then((response) => {
            console.log(response);
            console.log("PDF sent to backend successfully");
          })
          .catch((error) => {
            console.error("Failed to send PDF to backend");
            console.error("Error sending PDF to backend:", error);
          });
      });
    });
  }
  return (
    <html>
      <head>
        <title>Prescription</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <style>
          {`
                        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
                        body {
                            font-family: 'Open Sans', sans-serif;
                        }
                        .prescription-header {
                            border-bottom: 2px solid black;
                        }
                        .prescription-footer {
                            border-top: 2px solid black;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        th, td {
                            border: 1px solid black;
                            text-align: left;
                            padding: 8px;
                        }
                        th {
                            background-color: #f3f3f3;
                        }
                    `}
        </style>
      </head>
      <body className="p-8 bg-white min-h-screen">
        <button
          className="bg-red-500 p-2 rounded-3xl text-white font-extrabold drop-shadow-custom"
          onClick={convertToPdf}
        >
          Convert to PDF
        </button>

        <div id="convert" className="p-8 bg-white min-h-screen">
          <div className="prescription-header flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">Dr. Om Aditya</h1>
              <p className="text-lg">Physician</p>
              <p className="text-lg">VIT CHENNAI</p>
              <p className="text-lg">
                Health Centre, Kelambakkam-Vandalur Rd,Chennai
              </p>
            </div>
            <div className="text-right">
              <img
                alt="Medical cross symbol in a blue star, representing a clinic logo"
                className="inline-block mb-2"
                height="100"
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-oWUqJtoNsCRtl1pPGYgEepoL/user-kxtpMTC9GlKHy05DwQPPTL7I/img-7I0X6GkA6CCt2RK8pmkdssgb.png?st=2024-04-09T18%3A13%3A26Z&amp;se=2024-04-09T20%3A13%3A26Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-04-09T00%3A13%3A51Z&amp;ske=2024-04-10T00%3A13%3A51Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=vU9oYn63lA5uVTQYepwyZZ%2BGHF42gjo9rjfS/1xnlmk%3D"
                width="100"
              />
              <p className="text-lg">Clinic Hours:</p>
              <p className="text-lg">Morning: 9:00 - 11:30AM</p>
              <p className="text-lg">Evening: 2:00 - 9:00 PM</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-lg">Patient's Name:</label>
            <input className="border-b-2 border-black ml-2 p-1" type="text" />
          </div>
          <div className="flex mb-4">
            <div className="mr-4">
              <label className="text-lg">Sex:</label>
              <input className="border-b-2 border-black ml-2 p-1" type="text" />
            </div>
            <div className="mr-4">
              <label className="text-lg">Age:</label>
              <input className="border-b-2 border-black ml-2 p-1" type="text" />
            </div>
            <div>
              <label className="text-lg">Date:</label>
              <input className="border-b-2 border-black ml-2 p-1" type="text" />
            </div>
          </div>
          <table className="mb-4">
            <tr>
              <th className="text-lg">S.NO</th>
              <th className="text-lg">MEDICINE NAME</th>
              <th className="text-lg">DOSAGE</th>
              <th className="text-lg">REMARKS</th>
            </tr>
            <tr>
              <td className="text-lg">1</td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
            </tr>
            <tr>
              <td className="text-lg">2</td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
            </tr>
            <tr>
              <td className="text-lg">3</td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
            </tr>
            <tr>
              <td className="text-lg">4</td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
              <td>
                <input className="w-full h-12 block" type="text" />
              </td>
            </tr>
          </table>
          <div className="prescription-footer flex justify-between items-center pt-4">
            <div>
              <img
                alt="Caduceus symbol representing medical services"
                className="inline-block"
                height="50"
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-oWUqJtoNsCRtl1pPGYgEepoL/user-kxtpMTC9GlKHy05DwQPPTL7I/img-tABJnXbD6GRVW5PngrndIuRA.png?st=2024-04-09T18%3A13%3A26Z&amp;se=2024-04-09T20%3A13%3A26Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-04-09T00%3A48%3A20Z&amp;ske=2024-04-10T00%3A48%3A20Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=PeqJAVZKMXk%2B6smr5%2Bm4NqUT5MWda4m0wSM8oroylWc%3D"
                width="50"
              />
            </div>
            <div className="text-right">
              <label className="text-lg">Signature</label>
              <div className="border-t-2 border-black w-48 inline-block"></div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <i className="fas fa-phone fa-lg"></i>
            <i className="fas fa-fax fa-lg"></i>
            <i className="fas fa-envelope fa-lg"></i>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Pdf;
