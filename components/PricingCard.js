import React from "react";

const PricingCard = ({
  title,
  price,
  description,
  icon,
  features,
  buttonText,
  bgColor,
  textColor,
}) => (
  <div
    className={`flex flex-col p-6 mx-auto max-w-lg text-start rounded-lg border dark:border-gray-600 xl:p-8
   ${title === "Personal" ? "bg-[#043873] text-white" : "bg-white text-black"}`}
  >
    <h3 className="mb-0 text-2xl font-semibold">{title}</h3>
    <div className="flex justify-start items-baseline my-4">
      <span
        className={`mr-2 text-lg font-medium ${
          title === "Personal" ? "text-[#FFE492]" : ""
        }`}
      >
        {price}
      </span>
    </div>
    <div className="flex justify-start items-baseline">
      <span className="mr-2 mb-4 text-lg font-medium">{description}</span>
    </div>
    <ul role="list" className="mb-8 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          {icon}
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <a
      href="#"
      className={`  border ${
        title == "Personal"
          ? "bg-[#4F9CF9] border-none text-white"
          : "border-[#FFE492] bg-white text-black"
      }  hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg 
      text-base px-5 py-2.5 text-center`}
    >
      {buttonText}
    </a>
  </div>
);

export default PricingCard;
