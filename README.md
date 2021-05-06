# ProjetFullStackFront

## Couche Technique :

L'application est composée principalement de multiples composants qui se chargent de l'affichage pour l'utilisateur, de services pour la partie logique et divers models/enums qui définissent les type utilisés.
A l'intérieur des composant "parents" se trouve des modules qui partagent les ressources utilisés.

## Architecture du projet :

-App<br/>
|-common<br/>
||-enums (liste des enums utilisés)<br/>
||-interceptor (liste des interceptors utilisés)<br/>
||-models (liste des models utilisés)<br/>
||-isLoggedGuard (garantie l'état d'un utilisateur connecté)<br/>
|-components<br/>
||-admin (gestion des ressources du site)<br/>
||-auth (connexion de l'utilisateur)<br/>
||-caddy<br/>
||-catalogue <br/>
||-commande (commande de l'utilisateur)<br/>
||-layout (gère les affichages du site)<br/>
||-utilisateurs<br/>
|-services<br/>
||-admin<br/>
||-auth<br/>
||-caddy<br/>
||-catalogue<br/>
||-commande<br/>
||-utilisateur<br/>

Chaque service est directement lié à un composant

## Module :

Chaque composant parent dispose d'un module associé en fonction de ses besoins
app-module appel le layout-module qui lui va faire appel à tous autres modules de composant

Certains modules sont à part : 
-le module des interceptor qui sont appelés directement dans le app-module car présents partout dans l'appli
-Les modules de routing, qui gère les accès aux composants, présent dans le dossier app et dans le composant admin

## Intercepteur :

-Un intercepteur sur les requêtes pour ajouter le token utilisateurs à chaque appel
-Un intercepteur d'erreur pour afficher à l'utilisateur quand quelque chose ne fonctionne pas

## Environement :

Il n'existe qu'un environnement local de configuré (environment.ts), il contient les route d'accès nécéssaire aux services
L'environnement de production existe (par défaut) mais n'est pas configuré.

## Info pour utilisation :

Pour créer un compte : liste déroulante gauche => Créer un compte<br/>
Pour créer un livre : liste déroulante gauche => Créer un livre (connexion necessaire)<br/>
Pour ajouter un livre au panir : Catalogue => cliquer sur un livre => bouton ajouter au panier<br/>
Pour passer une commande : panier => Passer la commande
Pour voir les commandes : Mon compte => Mes commandes
Pour modifier/supprimer un utilisateur : Mon compte => admin => Gérer clients (Doit être admin, voir ci-dessous)
Pour modifier/supprimer un livre : Mon compte => admin => Gérer livre (Doit être admin, voir ci-dessous | modifier non implémenté)

Pour passer un compte, si aucun compte admin, il faut passer par la base de donnée, changer le role d'un utilisateur en 'ADMIN'



# **Projet Full Stack Back**


Pour avoir la dernière version du projet, faites un pull sur la branche patchRoutes

## **Couches techniques :**

Chacune des ressources présentes dispose de :
    - un routeur, le point d'entrée, qui définit les routes de l'API exposées
    - un controlleur, qui appelle les méthodes du service et qui renvoie la réponse à l'utilisateur sous format json
    - un mapper, qui va faire correspondre les données pour que celles qu'on reçoit et celles qu'on envoie soient cohérentes entre elles
    - un service, qui appelle les méthodes du repository et du mapper
    - un repository, qui va effectuer les requêtes avec la base de données
    - un modèle, qui va définir les entités de la base de données et leurs colonnes


## **Système d'authentification :**

L'API va recevoir la demande de connexion et, si l'utilisateur est reconnu, va utiliser lui attribuer un token. Ce token va lui permettre d'effectuer des requêtes sur les routes protégées par un middleware. Ce dernier va vérifier que si l'utilisateur possède un token et si ce dernier est conforme.


## **Installation :**

``` npm i ```

## **Démarrer :**

``` npm start ```
