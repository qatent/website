---
title: "Stage 1: construction d’un vocabulaire de brevets by means of deep learning"
date: 2021-01-05T10:07:21+06:00
# post image
image: "images/markus-spiske-iar-afB0QQw-unsplash.jpg"
# post type (regular/featured)
type: "regular"
# meta description
description: "stage 1, vocabulaire, Inria, équipe Almanach"
# post draft
draft: false
---



### Création d’un vocabulaire technique multimots par croisement du vocabulaire extrait de Wikipédia et d'autres ressources scientifiques avec un corpus de brevets. 

* Lire https://stackoverflow.com/questions/61218518/count-frequency-of-multi-word-terms-in-large-texts-with-python/61293305#61293305 
* Extraction de phrases définitoires, analyse syntaxique, extraction de termes et d’hyponymes par simplification de syntagmes. Lire https://towardsdatascience.com/unsupervised-synonym-harvesting-d592eaaf3c15
* Ajout de vocabulaire multi-mots par fréquence et entropie.
* Utilisation des informations portant sur les classes de brevets (p. ex. CPC) pour la définition d’un vocabulaire dépendant du domaine technique.
* Compléter le vocabulaire à l'aide de plongements multi-mots
* Développement d'une taxonomie de terminologie
* Intégration de la taxonomie dans un API Django


#### L'essentiel pour réussir
* Il est important d'être opérationnel en python et outils TAL d'apprentissage profond (Spacy, Pytorch, ...)
* Aussi : Il vous faut une fascintation pour la langue et le traitement automatique de la langue

Début du contrat idéal : début mars.

<!-- * Intégration du vocabulaire dans un spanBERT. -->
<!-- Intégration du spanBERT dans une API Django. -->
<!-- Si possible : faire de même avec des textes scientifiques, créer un procédé pour ajouter de nouveaux textes. -->

