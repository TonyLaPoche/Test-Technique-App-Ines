# Test Technique App'Ines pour Angular + Ionic / TypeScript / TailwindCSS

## Introduction
Bienvenue dans ce test technique visant à évaluer vos compétences en [Angular](https://angular.dev/), [Ionic](https://ionicframework.com/), [TypeScript](https://www.typescriptlang.org/) et [TailwindCSS](https://tailwindcss.com/).  
Ce test est divisé en deux étapes et doit être complété dans un délai de **7 jours**.

Vous travaillerez sur une application sur le thème de Harry Potter, compatible avec mobile et tablette, en utilisant l'API open source [HP-API](https://hp-api.onrender.com/).

## Objectifs
- Comprendre et corriger un bug dans une application existante.
- Optimiser et refactoriser du code existant.
- Créer une nouvelle route et un composant à partir d'une maquette Figma fournie.
- Intégrer une API externe et afficher ses données dans l'application.
- Utiliser les **Signals Angular** (Angular 17+) pour un rendu ultra optimisé.
- Employer la nouvelle syntaxe de **Control Flow** (Angular 17+).
- Produire un code **responsive**.

## Étapes

### 1. Correction et optimisation d'un code existant

- **Description :** Une section de l'application dédiée à la gestion des sorts (*spells*) a été partiellement développée et contient du code obsolète. Le développeur précédent a laissé des annotations **TODO** indiquant les parties à corriger et à refactoriser. Votre mission est de mettre à jour cette section en suivant les bonnes pratiques actuelles.

- **Objectif :** Se familiariser avec l'application, appliquer les concepts modernes d'Angular, et améliorer le code en utilisant les nouveaux outils du framework (comme les **Signals** et la nouvelle syntaxe de **Control Flow**).

- **Critères de réussite :**
  - Remplacer les directives classiques telles que `*ngFor` et `*ngIf` par la nouvelle syntaxe de [Control Flow](https://angular.dev/guide/templates/control-flow).
  - Refactoriser la logique des appels HTTP en les déplaçant dans un service dédié.
  - Convertir toutes les propriétés des composants en [Signals](https://angular.dev/guide/signals#) pour une gestion réactive des données.
  - Remplacer les @Input et @Output par des **Signals** pour la communication entre les composants parents et enfants.
  - Utiliser un **computed signal** pour gérer la propriété `filteredSpells`.
  - Supprimer la classe personnalisée `.card` du composant `spell` et la remplacer par des classes natives de [TailwindCSS](https://tailwindcss.com/). La [personnalisation](https://tailwindcss.com/docs/configuration) via la configuration de Tailwind est fortement encouragée pour adapter le style aux besoins de l'application.

### 2. Création d'une nouvelle route et d'un composant

- **Description :** À partir des maquettes fournies, complétez la page existante **Wizards** en ajoutant une nouvelle page qui affichera les détails d'un sorcier (wizard).
- **Maquettes :** [Lien vers les maquettes](https://www.figma.com/design/Crzdw2uNkgUuufkfHS6CLI/Test-technique---Recrutement-tech?node-id=0-1&t=EITm01wabJ1Yi3Y2-1).

- **Objectifs :**
  - Implémenter le composant et la mise en page selon les spécifications des maquettes.
  - Assurer que la page soit **responsive** et compatible avec les formats mobile et tablette.

- **Critères de réussite :**
  - La mise en page doit respecter fidèlement les maquettes fournies.
  - La barre de recherche doit être fonctionnelle.
  - Utilisation correcte de TailwindCSS pour la gestion des styles.
  - Navigation fluide vers la nouvelle route.
  - Intégration réussie de la nouvelle route avec l'[API Harry Potter](https://hp-api.onrender.com/).

## Détails Techniques
- **Technologies requises :** Angular 17, Ionic 8, TailwindCSS.
- **Environnement de développement :** Utilisez les dernières versions des outils requis. Configurez votre projet avec `npm` ou `yarn`.
- L'utilisation des **NgModules** est interdite ! Seuls les composants **standalone** doivent être utilisés.
- Toutes les propriétés des classes doivent être converties en **Signals** pour le rendu final.
- Vous êtes encouragé à ajouter des bonus pertinents comme des tests unitaires ou la configuration de **Prettier** pour le formatage du code.

## Livrables
- **Durée :** Vous avez **7 jours** pour compléter ce test technique.
- **Soumission :**
  - Créez un dépôt GitHub ou GitLab pour votre projet.
  - Envoyez-nous le lien vers votre dépôt avec des instructions claires pour installer et exécuter le projet.

## Critères d'évaluation
- Qualité du code (lisibilité, modularité).
- Respect des consignes.
- Fonctionnalités opérationnelles sans bugs.
- Design responsive fidèle aux standards des maquetttes.
- Intégration propre et efficace de l'API.
- Utilisation des concepts modernes d'Angular.

Bonne chance !
