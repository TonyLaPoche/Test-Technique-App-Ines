# App'Ines Test Technique (Angular + Ionic / TypeScript / TailwindCSS)

Ce dépôt contient le projet pour le test technique App'Ines. Il est construit avec **Angular 18** et **Ionic v8+** et
utilise **TailwindCSS** pour la gestion des styles. Ce projet repose sur un thème **Harry Potter**, avec une interface
compatible mobile et tablette, et utilise l’API open source [HP-API](https://hp-api.onrender.com/).

## Sommaire

- [Objectifs du Projet](#objectifs-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Live Reload](#live-reload)
- [Tests](#tests)
- [Technologies](#technologies)
- [Détails Techniques Spécifiques](#détails-techniques-spécifiques)
- [WakaTime](#wakatime)
- [Licence](#licence)

## Objectifs du Projet

Ce test technique consiste en deux grandes étapes:

1. **Correction et refactorisation** d’un code existant dans l’application.
2. **Création d’une nouvelle page** et d’un composant, basée sur une maquette fournie.

L'ensemble de consignes est dans ce [fichier](./CONSIGNES.md)

## Fonctionnalités

- **Liste des sortilèges** : Affiche et filtre les sorts magiques de l’univers Harry Potter.
- **Page des sorciers** : Explorez les personnages et affichez leurs détails.
- **Application responsive** : Conception optimisée pour les formats mobile et tablette.
- **Tests unitaires** : Mis en place pour assurer la robustesse du code.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Node.js** (version 16 ou supérieure)
- **Angular CLI** (version 18)
- **Ionic CLI**
- **Capacitor** pour la compatibilité multiplateforme

## Installation

Pour les instructions détaillées d'installation, référez-vous au fichier [INSTALL.md](./INSTALL.md).

## Utilisation

Pour démarrer l’application localement :

```bash
ionic serve
```

Pour compiler l'application et la tester sur un appareil ou un simulateur :

```bash
ionic build
npx cap open ios
```

ou

```bash
npx cap open android
```

## Live Reload

Le rechargement automatique facilite le débogage de la partie web et des fonctionnalités natives. Assurez-vous que votre
appareil mobile est sur le même réseau Wi-Fi que votre ordinateur.

```bash
ionic cap run android -l --external
ionic cap run ios -l --external
```

## Tests

Les tests unitaires sont intégrés pour assurer la fiabilité de l'application. Pour lancer les tests :

```bash
ng test --no-watch --code-coverage
```

## Technologies

- **Angular 18** : Framework de développement.
- **Ionic & Capacitor** : Gestion des fonctionnalités natives pour une application multiplateforme.
- **TailwindCSS** : Gestion des styles avec configuration personnalisée.
- **Jasmine** : Outils de tests unitaires.

## Détails Techniques Spécifiques

- **Utilisation de Signals Angular** : Tous les composants sont configurés avec des **Signals** pour optimiser la
  réactivité.
- **Syntaxe Control Flow d’Angular** : Utilisation de la nouvelle syntaxe de flux de contrôle d’Angular pour
  remplacer `*ngFor` et `*ngIf`.
- **Composants Standalone** : Seuls les composants **standalone** sont utilisés, conformément aux bonnes pratiques
  Angular modernes.

## WakaTime

Projet réceptionné le **mercredi 3 novembre 2024** et démarrer le **jeudi 4 novembre 2024**.  
Temps "frappe clavier" passé sur le projet  déterminer par [Wakatime](https://wakatime.com/):

[![wakatime](https://wakatime.com/badge/user/9d5ca4bc-3c1b-4b73-948c-329a6e87bf24/project/0133d120-14d7-403b-9439-9512a01ca966.svg)](https://wakatime.com/badge/user/9d5ca4bc-3c1b-4b73-948c-329a6e87bf24/project/0133d120-14d7-403b-9439-9512a01ca966)

Statistique complète du projet: [appines_angular_test](https://wakatime.com/@9d5ca4bc-3c1b-4b73-948c-329a6e87bf24/projects/xltvbwlxih?start=2024-11-03&end=2024-11-09)

## Licence

Ce projet appartient à la société App'Ines.  
