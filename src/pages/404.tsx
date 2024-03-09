import * as React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="my-8"
        width="300"
        height="200"
        viewBox="0 0 600 400"
      >
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="central"
          font-size="75"
          font-family="Arial"
          fill="gray"
        >
          404
        </text>
        <text
          x="50%"
          y="60%"
          text-anchor="middle"
          dominant-baseline="central"
          font-size="40"
          font-family="Arial"
          fill="#4A5568"
        >
          Not Found
        </text>
      </svg>
      <p className="text-xl mt-4">Ops...nothing over here</p>
      <p className="mt-4">
        <a href="/" className="text-blue-500 hover:underline">
          Back to Home Page
        </a>
      </p>
    </div>
  );
};

export default NotFoundPage;
