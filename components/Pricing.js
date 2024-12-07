// import React from "react";

// const Pricing = () => {


//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
//         <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
//           <h2 className="mb-4 text-7xl tracking-tight font-bold text-gray-900 dark:text-white">
//             Choose Your Plan
//           </h2>
//           <p className="mb-5 font-medium text-black sm:text-xl dark:text-gray-400">
//             Whether you want to get organized, keep your personal life on track,
//             or boost workplace productivity, Evernote has the right plan for
//             you.
//           </p>
//         </div>
//         <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
//           <div className="flex flex-col p-6 mx-auto max-w-lg text-start  text-gray-900 bg-white rounded-lg border border-[#FFE492]  dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
//             <h3 className="mb-0 text-2xl font-semibold">Free</h3>

//             <div className="flex justify-start items-baseline my-4">
//               <span className="mr-2 text-lg font-medium">$0</span>
//             </div>
//             <div className="flex justify-start items-baseline ">
//               <span className="mr-2 mb-4 text-lg font-medium ">
//                 Capture ideas and find them quickly
//               </span>
//             </div>

//             <ul role="list" className="mb-8 space-y-4 text-left">
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>Individual configuration</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>No setup, or hidden fees</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>
//                   Team size: <span className="font-semibold">1 developer</span>
//                 </span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>
//                   Premium support:{" "}
//                   <span className="font-semibold">6 months</span>
//                 </span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>
//                   Free updates: <span className="font-semibold">6 months</span>
//                 </span>
//               </li>
//             </ul>
//             <a
//               href="#"
//               className="text-black bg-white border border-[#FFE492] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 max-w-[166px] 
//               font-medium rounded-lg text-base  px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
//             >
//               Get started
//             </a>
//           </div>
//           <div className="flex flex-col p-6 mx-auto max-w-lg text-start  text-gray-900 bg-[#043873] rounded-lg border border-[#FFE492]  dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
//             <h3 className="mb-0 text-2xl text-white font-semibold">Personal</h3>

//             <div className="flex justify-start items-baseline my-4">
//               <span className="mr-2 text-lg text-[#FFE492] font-medium">
//                 $11.99
//               </span>
//             </div>
//             <div className="flex justify-start items-baseline ">
//               <span className="mr-2 mb-4 text-lg text-white font-medium ">
//                 Capture ideas and find them quickly
//               </span>
//             </div>

//             <ul role="list" className="mb-8 space-y-4 text-left text-white">
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>Individual configuration</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>No setup, or hidden fees</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>
//                   Team size: <span className="font-semibold">1 developer</span>
//                 </span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>
//                   Premium support:{" "}
//                   <span className="font-semibold">6 months</span>
//                 </span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>
//                   Free updates: <span className="font-semibold">6 months</span>
//                 </span>
//               </li>
//             </ul>
//             <a
//               href="#"
//               className="text-white bg-[#4F9CF9] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 max-w-[166px] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
//             >
//               Get started
//             </a>
//           </div>

//           <div className="flex flex-col p-6 mx-auto max-w-lg text-start mt-[20px] text-gray-900 bg-white rounded-lg border border-[#FFE492]  dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
//             <h3 className="mb-0 text-2xl font-semibold">Free</h3>

//             <div className="flex justify-start items-baseline my-4">
//               <span className="mr-2 text-lg font-medium">$0</span>
//             </div>
//             <div className="flex justify-start items-baseline ">
//               <span className="mr-2 mb-4 text-lg font-medium ">
//                 Capture ideas and find them quickly
//               </span>
//             </div>

//             <ul role="list" className="mb-8 space-y-4 text-left">
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>Individual configuration</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>No setup, or hidden fees</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>
//                   Team size: <span className="font-semibold">1 developer</span>
//                 </span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>
//                   Premium support:{" "}
//                   <span className="font-semibold">6 months</span>
//                 </span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 <span>
//                   Free updates: <span className="font-semibold">6 months</span>
//                 </span>
//               </li>
//             </ul>
//             <a
//               href="#"
//               className="text-black bg-white border border-[#FFE492] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 max-w-[166px] 
//               font-medium rounded-lg text-base  px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
//             >
//               Get started
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
    
//   );
// };

// export default Pricing;
import React from "react";
import PricingCard from './PricingCard';
import { ReactComponent as Logo } from '../asset/Icon.svg';
import { ReactComponent as Logo2 } from '../asset/Icon1.svg';

const Pricing = () => {
    const plans = [
      {
        title: "Free",
        price: "$0",
        description: "Capture ideas and find them quickly",
        icon:<Logo2/>,
        features: [
          "Sync unlimited devices",
          "10 GB monthly uploads",
          "200 MB max. note size",
          "Customize Home dashboard and access extra widgets",
          "Connect primary Google Calendar account",
          "Add due dates, reminders, and notifications to your tasks"
        ],
        buttonText: "Get started",
        bgColor: "bg-white",
        textColor: "text-gray-900",
      },
      {
        title: "Personal",
        price: "$11.99",
        description: "Keep home and family on track",
        icon:<Logo/>,
        features: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
            "Add due dates, reminders, and notifications to your tasks"
          ],
        buttonText: "Get started",
        bgColor: "bg-[#043873]",
        textColor: "text-white",
      },
      {
        title: "Organization",
        price: "$49.99",
        description: "Capture ideas and find them quickly",
        icon:<Logo2/>,
        features: [
          "Sync unlimited devices",
          "10 GB monthly uploads",
          "200 MB max. note size",
          "Customize Home dashboard and access extra widgets",
          "Connect primary Google Calendar account",
          "Add due dates, reminders, and notifications to your tasks"
        ],
        buttonText: "Get started",
        bgColor: "bg-white",
        textColor: "text-gray-900",
      },
    ];
  
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-7xl tracking-tight font-bold text-gray-900 dark:text-white">
              Choose Your Plan
            </h2>
            <p className="mb-5 font-medium text-black sm:text-xl dark:text-gray-400">
              Whether you want to get organized, keep your personal life on track,
              or boost workplace productivity, Evernote has the right plan for
              you.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;
  
