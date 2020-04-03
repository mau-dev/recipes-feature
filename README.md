# Recipe feature

### Technologies used:
* Node.js
* MongoDB
* Mongoose
* React
* Redux
* Express.js

### Installation:
* Install Node.js
* clone or download the repo

### Database:
* The database is on a cloud, to connect the local project to it add a default.json file inside the config folder
* Copy the content from the production.json file to the created default.json file to connect to the database

### To install server dependencies:
* npm install

### To install client dependencies:
* cd client 
* npm install 

### Run scripts:
*  npm run dev for starting both server and client scripts 
*  npm start will run the node script

* server will run on http://localhost:9000/
* with npm run dev the project will run both scripts on http://localhost:3000/


### Approach
I started with ERD and defining the models. As I wanted to create the same experience as the existing website with added recipes I created a model for the Users to handle authentication on register and login only, a Profile model that references User and holds all the data that users will create with updating their profile. Lastly is the Recipe model that references the users to track postedBy, and the recipe data coming from the forms. 
The recipe model has nested expression for the ingredients, as I wanted to separate unit, and amount from the ingredient name, so I can implement a toggle measurement unit functionality. 

I moved to set the Express server and the routes that have to do with authentication, CRUD actions for the profiles, and for the recipes.

After completing the backend I initialized the client with create-react-app and set up the redux store, actions and combined reducers.

I mainly focused to get the redux work done and connecting all actions to the corresponding components and I left the UI last. I ended up with not very well planed client architecture at the end, as I wanted to have separate UI components for the presentational components and the redux logic moved into containers folder. 

The most important actions are handled with redux: login, register, create_profile, update_profile, get_recipes, get_recipe(by id), create_recipe, save and unsave recipe.
Hence, I think I should have separate the save and unsave logic, and use redux only to communicate with the database for save and unsave actions, but for the presentational part that toggles different icon (empty of field bookmark icon) based on saved or not condition, should have been handled by the component state.

I was changing my initial form for creating recipes, as I wanted one separate form to handle the ingredients input as an array of objects. There is a redux form for the group fields for adding ingredients, but that part is not properly connected to the redux action for create_recipe yet.


### Problems 
As an array of separate objects, I was not able to handle the ingredients form together with the rest of the recipe body. Initially, I planned to have separate action and separate routes that will patch the recipe, with adding the ingredients but I realized it will be a bad experience to create part of the recipe, and then updating it. I needed a form that will add or remove as much more ingredients needed, and nest all the values in one group index when a row is created.


### What would I differently
I would focus on the recipes' functionality at first and simplify the initial plan in order to meet the basic requirements. I would plan my front-end logic more carefully before jumping on redux, so I can have the presentational components for the UI reused, and only the logic connected to redux in my containers. I would have separate the presentational logic in component state and use redux for state management for the database calls only.