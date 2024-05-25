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
- [What is Unwind](#whatisunwind)
- [How do I use it?](#howtouse)
- [Contributors](#contributors)
## What is Unwind?
<a name="whatisunwind"></a>
The world is moving at an increasingly fast pace - it is easy for people, especially youth, to feel overwhelmed.

An imbalanced lifestyle, poor attention towards mental wellness, and the rising demand for young people. It’s easy to fall into a vicious cycle of fatigue.
Unwind provides a **safe online platform for users to unwind** after a long day at school or work, through features like mood tracking, courses, journaling and meditation.

## How do I use it?
<a name="howtouse"></a>
As of right now, we have not published the application to any major application store. However, you can build your own version by using Expo. There are some prequisites however, you must have [NodeJS](https://nodejs.org/en) installed beforehand. If you already have it, here's how you can build your own Unwind application.

Clone this repository by using this command:

    % git clone https://github.com/rayhanmp/unwind-app.git

Go to the repository location:

    % cd unwind-app

Install all the required packages:

    % npm install

Make sure you already have an Expo account, then build the project using EAS:

    % eas build --profile development --platform android

After the build is done, the CLI will ask you to install the application in your Android emulator. Alternatively, you can also download the .apk through their site. If you choose to run it using Android emulator, then boot up the emulated device, then run:

    % npm expo

Press `a` to open it in the emulator. Done.

## Tech Stack
- React Native
- Expo
- Firebase
- React Native Paper

## Contributors
<a name="contributors"></a>
| <img width="50" src="https://avatars.githubusercontent.com/u/42485997?v=4"/> | <img width="50" src="https://avatars.githubusercontent.com/u/78632601?v=4"/> | <img width="50" src="https://avatars.githubusercontent.com/u/90276351?v=4"/>
| :---: | :---: | :---: |
| [Aulia Nadhirah Y. B.](https://github.com/Aulianyb) | [Kinanti W. Asih](https://github.com/KinantiWening1) | [Rayhan M. Pramanda](https://github.com/rayhanmp) |

## License
This project is licensed under the GNU General Public License version 3 (GPLv3).
