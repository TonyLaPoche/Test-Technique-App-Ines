# Test Technique App'Ines (Angular + Ionic / Typescript / TailwindCSS)

Ce dépôt contient le projet Ionic pour le test technique d'App'Ines.  
Il s'agit d'un projet Ionic v8+ configuré avec Angular v18+ et TailwindCSS.

## Prérequis

Ce projet nécessite l'installation des éléments suivants sur votre machine :

- Node.js (version LTS recommandée)
- npm (installé avec Node.js)
- Ionic CLI

Optionnel :
- Xcode (Voir [Configuration de l'Environnement Capacitor](https://capacitorjs.com/docs/getting-started/environment-setup))
- Android Studio (Voir [Configuration de l'Environnement Capacitor](https://capacitorjs.com/docs/getting-started/environment-setup))

Vous pouvez vérifier si Node.js et npm sont déjà installés en exécutant les commandes suivantes :

```
node -v
npm -v
```

Pour installer Ionic CLI :

```
npm install -g @ionic/cli
```

## Installation

Pour configurer ce projet en local, suivez ces étapes :

1. Clonez ce dépôt sur votre machine locale :

```
git clone git@github.com:TonyLaPoche/Test-Technique-App-Ines.git
```

2. Accédez au dossier du projet :

```
cd appines_angular_test
```

3. Installez les dépendances nécessaires avec npm :

```
npm install
```

## Utilisation

Pour exécuter le projet en local, lancez la commande suivante :

```
ionic serve
```

Pour compiler le projet et l'ouvrir dans un simulateur ou sur un appareil :

```
ionic build
npx cap open ios
```

ou

```
npx cap open android
```

## Rechargement Automatique (Live Reload)

Le rechargement automatique est utile pour déboguer aussi bien la partie web d'une application que les fonctionnalités natives sur le matériel de l'appareil ou les simulateurs. Au lieu de déployer un nouveau binaire à chaque modification, cette fonctionnalité recharge le navigateur (ou Web View) dès qu'un changement est détecté dans l'application.

Si vous exécutez l'application sur un appareil, assurez-vous qu'il est connecté au même réseau Wi-Fi que votre ordinateur.

Consultez la [documentation de Capacitor](https://capacitorjs.com/docs/guides/live-reload)

```
ionic cap run android -l --external
ionic cap run ios -l --external
```

Xcode et Android Studio sont nécessaires (vous devrez peut-être installer le [Java JDK](https://www.oracle.com/fr/java/technologies/downloads/#jdk17-mac))