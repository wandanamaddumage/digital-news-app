"use client";

import React, { useState } from "react";
import "./header.css";
import Nav from "../navigation/nav";
import Sci from "../sci/sci";

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-item-center justify-content-between">
        <a
          href="/"
          className="logo d-flex align-items-center justify-content-between"
        >
          <h1>DigitalNews</h1>
        </a>
        <Nav />
        <div className="position-relative">
          <Sci />
        </div>
      </div>
    </header>
  );
}
