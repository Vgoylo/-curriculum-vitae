import React from "react";

export default function Projects() {
  return (
    <main class="container border-bottom my-5">
      <h2 class="text-center">RECENT PROJECTS</h2>
      <dl class="border-bottom">
        <dt class="blockquote text-center ">Coverwallet</dt>
        <dd class="text-start">
          Description : Business Insurance Project - intelligent system that
          identifies the insurance based on user's specific business, get a
          policy that fits the budget. Users can get available quotas from
          different insurance companies and choose their insurance plan.
        </dd>
        <dt>Responsibility:</dt>
        <dd class="text-start">Backend and Frontend development.</dd>
        <dt>Web technologies and Frameworks:</dt>
        <dd class="text-start">
          Ruby/Rails, JavaScript, ReactJS, Sidekiq, REST services, Heroku,
          RSpec, Capybara, HTML, CSS/SCSS
        </dd>
        <dt>Achievements:</dt>
        <dd>
          <ul class="text-start">
            <li>Implementation of Insurance selection forms</li>
            <li>FE features implementations</li>
            <li>Extend existing API</li>
            <li>Maintain legacy code</li>
            <li>
              Database management systems: PostgreSQL, MySQL, MongoDB, Redis.
            </li>
            <li>Fix bugs and cover uncovered app parts with unit tests.</li>
            <li>Update Ruby and Rails versions.</li>
            <li>
              Implementation of the new logic for creating recommendable quote.
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt class="blockquote text-center">MusicMonitizator</dt>
        <dd class="text-start">
          Description : Music monetizer is a YouTube certified partner. It
          allows you to monetize small and large music catalogs on YouTube.
          Users of Music monetizer gain valuable insight into the usage of their
          music on YouTube and gain control over which third-party videos are
          allowed to remain monetized and which videos they’d like us to take
          down.
        </dd>
        <dt>Responsibility:</dt>
        <dd class="text-start">Backend and Frontend development.</dd>
        <dt>Web technologies and Frameworks:</dt>
        <dd class="text-start">
          Ruby 2.4.1 - 2.6.5, Rails 5.1 - 6.0, PostgreSQL, Sidekiq, Heroku, AWS,
          nginx, RSpec, Capybara, React.js, Git, Jira, Sentry, CircleCI, Asana.
        </dd>
        <dt>Achievements:</dt>
        <dd>
          <ul class="text-start">
            <li>
              Increased application's performance by conducting code refactoring
              and optimization of the existing modules
            </li>
            <li>Developed a number of new features</li>
            <li>
              Implemented logging functionality to track application's failures
            </li>
            <li>Integrated with YouTube API to search for videos' data</li>
            <li>
              Performed independent code reviews and created unit/integration
              test cases to achieve 85% test coverage
            </li>
          </ul>
        </dd>
      </dl>
    </main>
  );
}
