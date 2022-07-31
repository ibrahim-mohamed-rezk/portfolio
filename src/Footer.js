import React from "react";



function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "50px 10px", zIndex: "100", justifyContent: "center" }}
    >
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2022 ibrahim mohamed. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
