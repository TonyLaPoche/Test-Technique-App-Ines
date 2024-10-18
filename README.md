
# App'Ines Technical Test (Angular + Ionic / Typescript / TailwindCSS)

This repository is the Ionic project for App'ines technical test.
It is an Ionic v8+ project, configured with Angular v18+ and TailwindCSS.

## Prerequisites

This project requires the following to be installed on your machine:

- Node.js (recommended LTS version)
- npm (installed with Node.js)
- Ionic CLI


Optional :
- Xcode (See [Capacitor Environment Setup](https://capacitorjs.com/docs/getting-started/environment-setup))
- Android Studio (See [Capacitor Environment Setup](https://capacitorjs.com/docs/getting-started/environment-setup))

You can check if you already have Node.js and npm installed by running:

```
node -v
npm -v
```

To install Ionic CLI:

```
npm install -g @ionic/cli
```

## Installation

To set up this project locally, follow these steps:

1. Clone this repository to your local machine:

```
git clone git@bitbucket.org:appinesfr/appines_angular_test.git
```

2. Navigate to the project folder:

```
cd appines_angular_test
```

3. Install the necessary dependencies with npm:

```
npm install
```

## Usage

To run the project locally, execute:

```
ionic serve
```

To build the project and open it in a simulator or on a device:

```
ionic build
npx cap open ios
```

or

```
npx cap open android
```

## Live Reload

Live Reload is useful for debugging both the web portion of an app as well as native functionality on device hardware or simulators. Rather than deploy a new native binary every time you make a code change, it reloads the browser (or Web View) when changes in the app are detected.

If running on a device, make sure it is on the same Wi-Fi network as your computer.

See [Capacitor documentation](https://capacitorjs.com/docs/guides/live-reload)

```
ionic cap run android -l --external
ionic cap run ios -l --external
```

Need Xcode & Android Studio (maybe you need to install [Java JDK](https://www.oracle.com/fr/java/technologies/downloads/#jdk17-mac))
