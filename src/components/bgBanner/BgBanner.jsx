import React from "react";

import bgDesktopDark from "../../assets/images/bg-desktop-dark.jpg";

const BgBanner = () => {
  return (
    <div
      className="min-h-[16rem] w-full"
      style={{ backgroundImage: `url(${bgDesktopDark})` }}
    ></div>
  );
};

export default BgBanner;
