// pages/404.tsx
'use client'

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const NotFoundPage = () => {
  const consoleRef = useRef<HTMLDivElement>(null);

  const txt = [
    "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय || 1-1||",
    "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसंगम्य राजा वचनमब्रवीत् || 1-2||",
    "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् | व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता || 1-3||",
    "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुधानो विराटश्च द्रुपदश्च महारथः || 1-4||",
    "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् | पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुंगवः || 1-5||",
    "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् | सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः || 1-6||",
    "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम | नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते || 1-7||",
    "भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः | अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च || 1-8||",
    "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः | नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः || 1-9||",
    "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् | पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् || 1-10||",
    "अयनेषु च सर्वेषु यथाभागमवस्थिताः | भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि || 1-11||",
    "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः | सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान् || 1-12||",
    "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः | सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् || 1-13||",
    "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ | माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः || 1-14||",
    "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः | पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः || 1-15||"
  ];

  useEffect(() => {
    const intervalID = setInterval(updateScreen, 200);
    const consoleElement = consoleRef.current;

    function updateScreen() {
      if (consoleElement) {
        // Shuffle the "txt" array
        txt.push(txt.shift() as string);

        // Rebuild document fragment
        const docfrag = document.createDocumentFragment();
        txt.forEach(e => {
          const p = document.createElement("p");
          p.textContent = e;
          docfrag.appendChild(p);
        });

        // Clear and append updated fragment to DOM
        consoleElement.innerHTML = '';
        consoleElement.appendChild(docfrag);
      }
    }

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-lime-500 overflow-hidden w-screen absolute top-0 z-50 left-0">
      <div className="main-wrapper">
        <div className="signboard-wrapper">
          <div className="signboard text-xl md:text-5xl">TaskVault</div>
          <div className="string"></div>
          <div className="pin pin1"></div>
          <div className="pin pin2"></div>
          <div className="pin pin3"></div>
        </div>
      </div>
      <div className="msg font-mono text-xl md:text-5xl font-bold uppercase text-white bg-red-600 p-5 shadow-red-600 text-center animate-blink absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button>404 - Page Not Found</button>
      </div>
      <Link href={"/"} className='absolute top-[54%] bg-red-700 text-white p-4 font-bold'>Back To Home</Link>
      <div id="console" ref={consoleRef} className="mt-5 font-mono font-bold text-[1.4rem] md:text-6xl leading-tight text-lime-500 text-shadow"></div>

      <style jsx>{`
        @keyframes blink {
          0% {
            transform: rotate(0deg) translate(-50%, -50%);
          }
          50%{
            transform: rotate(30deg) translate(-50%, -50%);
          }
          100% {
            transform: rotate(-30deg) translate(-50%, -50%);
          }
        }

        .animate-blink {
          animation: blink 0.9s infinite alternate linear;
        }

        .text-shadow {
          text-shadow: 0px 0px 10px limegreen;
        }

        .main-wrapper {
          font-size: 50px;
          background-color: transparent;
          display: flex;
          align-items: top;
          justify-content: center;
          width: 100%;
          height: auto;
          float: right;
          z-index: 999;
          position: fixed;
          top: 0;
        }

        .signboard-wrapper {
          width: 50vmin;
          height: 28vmin;
          position: relative;
          flex-shrink: 0;
          transform-origin: center 2.5vmin;
          animation: 1000ms init forwards, 1000ms init-sign-move ease-out 1000ms, 3000ms sign-move 2000ms infinite;
        }

        .signboard-wrapper .signboard {
          color: #ffffff;
          font-family: Montserrat, sans-serif;
          font-weight: bold;
          background-color: #ff5625;
          width: 50vmin;
          height: 15vmin;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 0;
          border-radius: 4vmin;
        }

        .signboard-wrapper .string {
          width: 20vmin;
          height: 20vmin;
          border: solid 0.9vmin #893d00;
          border-bottom: none;
          border-right: none;
          position: absolute;
          left: 50%;
          transform-origin: top left;
          transform: rotatez(45deg);
        }

        .signboard-wrapper .pin {
          width: 1.5vmin;
          height: 1.5vmin;
          position: absolute;
          border-radius: 50%;
        }

        .signboard-wrapper .pin.pin1 {
          background-color: #9f9f9f;
          top: 0;
          left: calc(54% - 2.8vmin);
        }

        .signboard-wrapper .pin.pin2,
        .signboard-wrapper .pin.pin3 {
          background-color: #d83000;
          top: 15.5vmin;
        }

        .signboard-wrapper .pin.pin2 {
          left: 8vmin;
        }

        .signboard-wrapper .pin.pin3 {
          right: 8vmin;
        }

        @keyframes init {
          0% {
            transform: scale(0);
          }

          40% {
            transform: scale(1.1);
          }

          60% {
            transform: scale(0.9);
          }

          80% {
            transform: scale(1.05);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes init-sign-move {
          100% {
            transform: rotatez(3deg);
          }
        }

        @keyframes sign-move {
          0% {
            transform: rotatez(3deg);
          }

          50% {
            transform: rotatez(-3deg);
          }

          100% {
            transform: rotatez(3deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
