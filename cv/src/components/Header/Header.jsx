import React from "react";
import logo_cv from "../../assets/images/CV.png";

export default function Header() {
  return (
    <div class="container">
      <div class="nav-scroller border-bottom">
        <nav class="nav nav-underline justify-content-between">
          <a class="nav-item link-body-emphasis d-none d-lg-block" href="/">
            <img src={logo_cv} width="110px" alt="logo-cv" />
          </a>
          <a
            class="d-flex flex-column flex-lg-row gap-4 align-items-start align-items-lg-center link-body-emphasis text-decoration-none"
            href="https://www.linkedin.com/in/vitali-hoila-59460b285/"
            target="_blank"
          >
            <img
              class="logo"
              src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg"
              width="45px"
              alt="logo"
            />
            <div class="col-lg-8 a d-none d-lg-block">
              <h6>Vitali Hoila </h6>
              <small>linkedin</small>
            </div>
          </a>
          <a
            class="d-flex flex-column flex-lg-row gap-4 align-items-start align-items-lg-center link-body-emphasis text-decoration-none "
            href="https://github.com/Vgoylo"
            target="_blank"
          >
            <img
              class="logo"
              src="https://masterpiecer-images.s3.yandex.net/70e5816bae5311eeafa00a0d9f74bed2:upscaled"
              width="45px"
              alt="logo"
            />
            <div class="col-lg-8 a d-none d-lg-block">
              <h6>Vgoylo</h6>
              <small>GitHub</small>
            </div>
          </a>
          <a
            class="d-flex flex-column flex-lg-row gap-4 align-items-start align-items-lg-center link-body-emphasis text-decoration-none"
            href="tel:+375 (29) 299-99-27"
          >
            <img
              class="logo"
              src="https://img.freepik.com/premium-photo/3d-telegram-logo-icon-glow-high-quality-render_474486-37.jpg"
              width="45px"
              alt="logo"
            />
            <div class="col-lg-8 a d-none d-lg-block">
              <h6>@ydrive</h6>
              <small>Telegram</small>
            </div>
          </a>
          <a
            class="d-flex flex-column flex-lg-row gap-4 align-items-start align-items-lg-center link-body-emphasis text-decoration-none "
            href="mailto:vgoylo91mav@gmail.com"
          >
            <img
              class="logo"
              src="https://cdn.iconscout.com/icon/free/png-256/free-google-mail-new-4762011-3955524.png?f=webp"
              width="45px"
              alt="logo"
            />
            <div class="col-lg-8 a d-none d-lg-block">
              <h6>vgoylo91mav@gmail.com</h6>
              <small>email</small>
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
}
