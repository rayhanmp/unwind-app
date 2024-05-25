<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)"
          srcset="./assets/unwindLogo-Light.svg"
          width="600"
          height="200"
      />
      <source media="(prefers-color-scheme: light)"
          srcset="./assets/unwindLogo-Dark.svg"
          width="600"
          height="200"
      />
      <img id="logo" alt="Unwind logo"
          src="./assets/unwindLogo-Dark.svg"
      />
    </picture>
</p>

<p align="center">
  Your Go-To Productivity and Mental Wellness App<p>
  </p>
<p align="center">
  <a href ="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License - GPLv3"></a>
  <img src="https://img.shields.io/badge/status-alpha-orange" alt="Status - Alpha"></a>
</p>

<p align="center">
      <img src="./assets/readme_banner.png" style="width: 80%"></td>
</p>

# Unwind
A mobile application for journaling and productivity.

## Table of Contents
- [Introduction](#intro)
- [Features](#features)
- [How do I use it?](#howtouse)
- [Tech stack](#techstack)
- [Contributors](#contributors)
- [License](#license)
  
## Introduction
<a name="intro"></a>
In today's fast-paced world, it's easy to feel **overwhelmed and stressed**. Unwind is a mobile app designed to help you prioritize your mental well-being and find balance in your life. 

With features like work timer, journaling, articles, and meditations, Unwind offers a safe and supportive space to relax, reflect, and recharge.

## Features
<a name="features"></a>
* **Work Timer:** Setup a work timer to help you focus and track your productivity.
* **Journaling:**  Capture your thoughts and feelings in a private journal to gain clarity and perspective.
* **Articles:**  Access a library of curated articles on topics like stress management, mindfulness, and productivity.
* **Meditations:** Practice mindfulness and reduce stress with  meditation sessions.

## How do I use it?
<a name="howtouse"></a>
Currently, Unwind is in alpha development and not yet available on app stores. However, you can build and run the app locally using Expo.
There are some prequisites however, ensure you have [Node.js](https://nodejs.org/en) and npm installed on your system. If you already have it, here's how you can build your own Unwind application.

Clone this repository by using this command:

    % git clone https://github.com/rayhanmp/unwind-app.git

Go to the repository location:

    % cd unwind-app

Install all the dependencies:

    % npm install

Make sure you already have an Expo account, then build the project using EAS:

    % eas build --profile development --platform android

After the build is done, download the .apk through their site and install it on your device. Alternatively, you can follow the on-screen instructions to open the app in an emulator by typing:

    % npm expo

Then press `a` to open it in the emulator. Done.

## Tech stack
<a name="techstack"></a>
- **React Native**: The core framework for building the app.
- **Expo**: Simplifies the development and deployment process.
- **Firebase**: Handles authentication, database storage, and cloud functions.
- **React Native Paper**: Provides a consistent and customizable UI component library.

## Contributors
<a name="contributors"></a>
| <img width="50" src="https://avatars.githubusercontent.com/u/42485997?v=4"/> | <img width="50" src="https://avatars.githubusercontent.com/u/78632601?v=4"/> | <img width="50" src="https://avatars.githubusercontent.com/u/90276351?v=4"/>
| :---: | :---: | :---: |
| [Aulia Nadhirah Y. B.](https://github.com/Aulianyb) | [Kinanti W. Asih](https://github.com/KinantiWening1) | [Rayhan M. Pramanda](https://github.com/rayhanmp) |

## License
<a name="license"></a>
This project is licensed under the [GNU General Public License version 3](https://www.gnu.org/licenses/gpl-3.0) (GPLv3).
