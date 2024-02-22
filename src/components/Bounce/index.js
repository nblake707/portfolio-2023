import React from "react";
import { bounce } from "./index.module.css";

  const Bounce = () => {
  
    return (
        <div className={bounce}>
        <svg
          className="h-10 w-10 text-teal-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <line x1="12" y1="5" x2="12" y2="19" />{" "}
          <polyline points="19 12 12 19 5 12" />
        </svg>
        </div>
    )
}

export default Bounce;
