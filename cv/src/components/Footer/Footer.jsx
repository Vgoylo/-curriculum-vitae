import React from "react";
import style from "./Footer.module.css";
import cv from "../../assets/images/CV.png";

export default function footer() {
  return (
    <footer class={style.footer}>
      {/* <p>
        Blog template built for{" "}
        <a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
        <a href="https://twitter.com/mdo">@mdo</a>.
      </p> */}
      <p class="mb-0">
        <a class="nav-item link-body-emphasis" href="/">
          <img src={cv} width="110px" alt="logo-cv" />
        </a>
        {/* <a href="/">main</a> */}
      </p>
    </footer>
  );
}
