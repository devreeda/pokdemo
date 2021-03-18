# TP2 ANGULAR - Pokdemo

- [name=Rida GHOUTI TERKI]

Le projet Pokdemo est une introduction au Framework Angular qui vise affiche de différentes manière une liste de Pokemons à l'aide d'appels API vers https://pokeapi.co/.

## Lancer le projet

Il vous suffit simplement de cloner le projet dans le repertoire de votre choix :

```
git clone https://github.com/devreeda/pokdemo.git
```

Puis d'accéder au dossier pour lancer l'application :

```
cd pokdemo
ng serve
```

Vous retrouverez normalement l'application web sur le port 4200 à l'adresse http://localhost:4200/ (par défaut).

## Description du projet

Le but de ce projet est de pouvoir retrouver un pokemon dans une liste et d'afficher une description de celui-ci (à quoi il ressemble, ses différentes attaques, etc...).

### MyComponent

Notre premier composant est MyComponent qui va récupérer les informations du Pokemon selectionné pour les afficher par la suite.

### PokemonDetail

Le composant PokemonDetail va permettre de récupérer les information d'un Pokemon selectionné et de les afficher au travers de l'attribut `detail`.

### FilterPokemonPipe

C'est une classe pipe qui va permettre de filtrer le nom d'un Pokemon dans un input afin de faciliter la recherche dans une liste.

### PokemonApiService

C'est une classe service qui va s'occuper des appels API vers https://pokeapi.co/ récuperant notamment la liste (JSON) de pokemons ou les informations d'un Pokemon en particulier en fonction de son id.

### La classe Pokemon et les Interfaces liées

La classe Pokemon va stocker toutes les informations relatives à un Pokemon (son id, son nom, etc...). Dans le fichier `pokemon.ts` nous allons aussi y placer les interfaces permettant la description des données JSON récupérées depuis l'API pour en faciliter la manipulation en y inscrivant notamment les types pour chaque attributs et sous-attributs récupéré depuis l'API.

## Conclusion

On retrouve au final une application fonctionnelle qui affiche les pokemons choisie. Petit bonus : j'ai affiché une image du Pokemon sélectionné. Elle est évidemment améliorable ne serait-ce que par son design en modifiant les styles css pour chaque composant.

- parler des fonctionnalités
- parler des composants
- parler des liens entre eux
