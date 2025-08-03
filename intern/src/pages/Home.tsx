import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Home() {
    const navigate = useNavigate();
    const [referral_code, setReferralCode] = useState('...');
    const [intern_name, setInternName] = useState("...");
    const [donation_Amount, setDonationAmount] = useState("...");

    useEffect(()=>{
         axios.get("https://intern-project-liard.vercel.app/data")
         .then(responce =>{
               console.log(responce.data.data[0]);
               setInternName(responce.data.data[0].name);
               setReferralCode(responce.data.data[0].referral_code);
               setDonationAmount(`₹${responce.data.data[0].donation_Amount}`);
         })
    },[]);

  return (
    <div className="bg-gray-100 flex justify-center w-full">
          <div className="bg-white m-5 w-[70%] shadow-2xl p-10 rounded-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
                <div className="flex space-x-2">
                    <button id="leaderboard-link" className="bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full text-md font-semibold hover:bg-indigo-200 transition-colors duration-300 transform hover:scale-105">Leaderboard</button>
                    <button id="logout-btn" onClick={()=>navigate('/login')} className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-md font-semibold hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105">Logout</button>
                </div>
            </div>

       
                {/* <!-- Intern Info Section --> */}
                <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.01]">
                    <h3 className="text-xl font-semibold">Hello, <span id="intern-name">{intern_name}</span>!</h3>
                    <p className="mt-2 text-sm">Your unique referral code:</p>
                    <div className="flex items-center mt-1">
                        <span id="referral-code" className="bg-indigo-700 text-white font-mono text-sm px-3 py-1 rounded-full">{referral_code}</span>
                        <button className="ml-2 p-1 rounded-full hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
               

               {/* <!-- Stats Section --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    <div className="bg-green-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transition-all duration-300 transform hover:scale-[1.01]">
                        <div>
                            <p className="text-sm">Total Donations Raised</p>
                            <span id="donations-raised" className="text-3xl font-bold">{donation_Amount}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.485 0-4.5 2.015-4.5 4.5S9.515 17 12 17s4.5-2.015 4.5-4.5S14.485 8 12 8z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v.01M12 20v.01M4 12h.01M20 12h.01M6.343 6.343l.01.01M17.657 17.657l.01.01M6.343 17.657l.01.01M17.657 6.343l.01.01" />
                        </svg>
                    </div>

                     <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md flex items-center justify-between transition-all duration-300 transform hover:scale-[1.01]">
                        <div>
                            <p className="text-sm">Current Reward Tier</p>
                            <span id="rewards-tier" className="text-3xl font-bold">Silver Tier</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
             
              </div>

               {/* <!-- Rewards Section (Static) --> */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Rewards & Unlockables</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-gray-200 p-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105">
                            <img src="https://placehold.co/80x80/0d9488/ffffff?text=Shirt" alt="Custom T-Shirt" className="mx-auto mb-2 rounded-lg"/>
                            <p className="text-sm font-semibold">Custom T-Shirt</p>
                            <p className="text-xs text-gray-600">Unlocked at $100</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105">
                            <img src="https://placehold.co/80x80/3730a3/ffffff?text=Mug" alt="Branded Mug" className="mx-auto mb-2 rounded-lg"/>
                            <p className="text-sm font-semibold">Branded Mug</p>
                            <p className="text-xs text-gray-600">Unlocked at $250</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105">
                            <img src="https://placehold.co/80x80/dc2626/ffffff?text=Bonus" alt="Performance Bonus" className="mx-auto mb-2 rounded-lg"/>
                            <p className="text-sm font-semibold">Performance Bonus</p>
                            <p className="text-xs text-gray-600">Unlocked at $500</p>
                        </div>
                    </div>
                </div>

                <div id="message-box" className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg hidden">
                    Text copied to clipboard!
                </div>
            </div>
        </div>

    
 
  )
}

export default Home
