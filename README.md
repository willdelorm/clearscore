<!-- README Template courtesy of: https://github.com/othneildrew/Best-README-Template/ -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Ideas Board</h3>

  <p align="center">
    Take-home technical assessment
    <br />
    <a href="https://github.com/willdelorm/assessment-clearscore"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://willdelorm.github.io/assessment-clearscore/">View Demo</a>
    ·
    <a href="https://github.com/willdelorm/assessment-clearscore/issues">Report Bug</a>
    ·
    <a href="https://github.com/willdelorm/assessment-clearscore/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#issues">Issues</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](ideas-board-screenshot.png)

This ideas board provides a simple but effective platform to keep track of all your brightest ideas. Implemented with Vite and React, this application utilizes modern web development practices to provide users a seamless, interactive experience.

Assessment requirements can be found below:

* [Project requirements](https://github.com/ClearScore/tech-screen/tree/master/idea-board)
* [Additional guidelines](https://github.com/ClearScore/tech-screen#what-were-looking-for)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript.js]][TypeScript-url]
* [![Vite][Vite.js]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- REQUIREMENTS -->
## Features

### Required Features

* Each tile contains a title, description and created/updated times
* Description max length of 140 characters
* CRUD functionality
* Editable inline
* Delete button
* Fully responsive
* New ideas should have the title field focused to prompt user to begin typing.
* Add the ability to sort ideas by creation date or alphabetically.

### Stretch features

* Utilise the localStorage API to persist current state when the page is refreshed.
* Add a character countdown as the user is approaching the limit of their description text.
* Add an unobtrusive notification when an update is made to a tile.

### Guidelines

* A stylish solution
* Clean, concise code
* Unit Tests
* Demonstration of CSS knowledge
* A detailed README explaining assumptions / decisions
* A live site we can see

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Format date output cleaner
- [ ] Implement data validation for form
- [ ] Improve testing suite
- [ ] Description text limit of 140 characters
- [ ] Character countdown in description text
- [ ] Add notification to confirm update
- [ ] Mobile view re-design

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ISSUES -->
## Known Issues

- [ ] Should not be able to edit more than one tile at a time

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Will Delorm - [@willdelorm](https://twitter.com/willdelorm) - willdelorm@gmail.com

Project Link: [https://github.com/willdelorm/assessment-clearscore](https://github.com/willdelorm/assessment-clearscore)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: public/ideas-board-screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[TypeScript.js]: https://shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFF
[TypeScript-url]: https://www.typescriptlang.org/
[Vite.js]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
