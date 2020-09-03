import React from "react";

import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import MiddleContent from "./MiddleContent";

import "../css/App.css";

function Content() {
  return (
    <main className="main-content">
      <LeftContent />
      <MiddleContent />
      <RightContent />
    </main>
  );
}

export default Content;
