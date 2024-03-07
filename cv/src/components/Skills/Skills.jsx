import React from "react";
import style from "./Skills.module.css";

export default function Skills() {
  return (
    <main class="container border-bottom">
      <div class="row">
        <div class="col-lg-7 col-md-5 mx-auto my-3">
          <h2 class="text-center">PROFESSIONAL SKILLS</h2>
          <ul class="blockquote text-start">
            <li>Programming languages: Ruby, Javascript, SQL.</li>
            <li>Technologies: Rails, ReactJS, REST, API, JSON, SOAP, AWS.</li>
            <li>Web/Application servers: Puma, Nginx.</li>
            <li>Deployment tools: Jenkins, CircleCi.</li>
            <li>
              Database management systems: PostgreSQL, MySQL, MongoDB, Redis.
            </li>
            <li>
              Software development methodologies: Agile, Scrum, Kanban, TDD,
              BDD.
            </li>
            <li>Tracking tools: Jira, Trello.</li>
            <li>Continuous integration: Circle CI</li>
            <li>Software development tools: VS code.</li>
            <li>Version Control Systems: Git.</li>
            <li>Operating systems: Linux (Ubuntu), Mac OS, Windows.</li>
          </ul>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          <div class="col">
            <h2>EXPERIENCE</h2>
            <ul class="blockquote text-start">
              <li>iTechArt, Ruby on Rails Developer</li>
              <li>2021 - present</li>
            </ul>
          </div>
          <div class="col">
            <h2>LANGUAGES</h2>
            <ul class="blockquote text-start">
              <li>Intermediate: English.</li>
              <li>Native: Belarusian, Russian</li>
            </ul>
          </div>
          <div class="col">
            <h2>EDUCATION</h2>
            <ul class="blockquote text-start">
              <li>2008-2011</li>
              <li>Belarusian State Academy of Aviation</li>
              <li>Faculty of Radio electronic equipment.</li>
            </ul>
          </div>
          <div class="col">
            <h2>SOFT SKILLS</h2>
            <ul class="blockquote text-start">
              <li>Time management</li>
              <li>Problem-solving</li>
              <li>Multitasking</li>
              <li>
                Ability to communicate well, actively listen and responsible
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
