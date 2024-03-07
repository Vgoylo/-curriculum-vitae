import React from "react";
import style from "./Main.module.css";

export default function mainPart() {
  return (
    <main class="container border-bottom">
      <div class="container text-center my-3">
        <div class="row">
          <div class="col-lg-6 col-md-3 mx-auto">
            <img
              class={style.image}
              src="https://img.freepik.com/free-photo/creative-light-bulb-abstract-glowing-blue-background-generative-ai_188544-8090.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1708905600&semt=sph"
              alt="photo"
            />

            <h1 class="fw-light">Vitali Hoila</h1>
            <h1>Full stack developer</h1>
            <p>
              2 years of experience in Ruby on Rails and Frontend development.
            </p>
            <span class={style.button}>
              <a href="/skills" class="btn btn-primary  my-3">
                PROFESSIONAL SKILLS
              </a>
            </span>
            <span class={style.button}>
              <a href="/projects" class="btn btn-secondary">
                RECENT PROJECTS
              </a>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
