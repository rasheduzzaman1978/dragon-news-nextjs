import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-3">Login with</h2>

      <div className="flex flex-col gap-2">
        <button className="flex items-center justify-center gap-2 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600">
          <FaGoogle /> Google
        </button>

        <button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
          <FaGithub /> GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;