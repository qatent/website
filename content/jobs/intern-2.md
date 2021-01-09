---
title: "Stage 2 : Paraphrases technologiques par apprentissage profond"
date: 2021-01-05T10:07:21+06:00
# post image
image: "images/arno-senoner-FDtJZDU8kws-unsplash.jpg"
# post type (regular/featured)
type: "regular"
# meta description
description: "stage 2, paraphrases, Inria, équipe Almanach"
# post draft
draft: false
---



### Stage 2: paraphrases spécifiques aux brevets (environ 6 mois)

* Entraînement d’un système de génération de paraphrases spécifiques au corpus des brevets par apprentissage croisé avec des corpus génériques de paraphrases.
* Spécialisation du modèle de langage par domaine technologique (e.g. tels que définis par les sections CPC/IPC).
* Évaluation de mesures de similarités entre phrases.
* Utilisation des ontologies (Wordnet, stage 1, …) pour obtenir une mesure / ranking de spécificités des paraphrases proposées.
* Intégration dans une API Django.


#### L'essentiel pour réussir
* Il est important d'être opérationnel en python et outils TAL d'apprentissage profond (Spacy, Pytorch, ...)
* Aussi : Il vous faut une fascintation pour la langue et le traitement automatique de la langue

Début du contrat idéal : début mars.

<!-- * Intégration du vocabulaire dans un spanBERT. -->
<!-- Intégration du spanBERT dans une API Django. -->
<!-- Si possible : faire de même avec des textes scientifiques, créer un procédé pour ajouter de nouveaux textes. -->
#### FAQ
* Sur quelles données entraîner ? 
  * Lire : Aaditya Prakash, Sadid A Hasan, Kathy Lee, Vivek Datla, Ashequl Qadir, Joey Liu, and Oladimeji Farri. 2016. Neural paraphrase generation with stacked residual lstm networks. arXiv:1610.03098. https://arxiv.org/abs/1610.03098 (MSCOCO, Quora Duplicates, WikiAnswers Duplicates, PPDB)

* Quel type de modèle neuronal utiliser ? 
  * lire : https://proceedings.neurips.cc/paper/2019/file/5e2b66750529d8ae895ad2591118466f-Paper.pdf  https://opendata.stackexchange.com/questions/6094/paraphrase-data-sets 
  * V. aussi: Wang, S., Gupta, R., Chang, N. and Baldridge, J., 2019, July. A task in a suit and a tie: paraphrase generation with semantic augmentation. In Proceedings of the AAAI Conference on Artificial Intelligence (Vol. 33, pp. 7176-7183). http://suwangcompling.com/wp-content/uploads/2018/10/AAAI_2019___Draft_3-1.pdf
