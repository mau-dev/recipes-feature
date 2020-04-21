# Recipe feature
* Preview app here: https://quiet-refuge-44149.herokuapp.com/recipes

### Technologies used:
* Node.js
* MongoDB
* Mongoose
* React.js
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
I started with ERD and defining the models. I created a model for the Users to handle authentication on register and login only, a Profile model that references User and holds all the data that users will create with updating their profile. Lastly is the Recipe model that references the users to track postedBy, and the recipe data coming from the forms. 
The recipe model has nested expression for the ingredients, as I wanted to separate unit, and amount from the ingredient name, so I can implement a toggle measurement unit functionality. 

I moved to set the Express server and the routes that have to do with authentication, CRUD actions for the profiles, and for the recipes.
After completing the backend I initialized the client with create-react-app and set up the redux store, actions and combined reducers.

The most important actions are handled with redux: login, register, create_profile, update_profile, get_recipes, get_recipe(by id), create_recipe, save and unsave recipe.
Hence, I think I should have separate the save and unsave logic, and use redux only to communicate with the database for save and unsave actions, but for the presentational part that toggles different icon (empty of field bookmark icon) based on saved or not condition, should have been handled by the component state.


### Features 
The recipes are accessed from a public route, guest users can see recipes.
To create a recipe is a protected route and only accessed by registered users. If not logged in the user will be redirected to register/login route when trying to click on "Post Recipe".
First-time users can create a user account, then they are redirected to set up their profile. On their profile dashboard, there is a link to the settings where they can update their profile.
Logged in users can create recipes. When creating a recipe, there is a group form for the array of ingredients. User can add and remove ingredients while creating the recipe, once done with adding ingredients to the list should click on the "Submit ingredient list" button before proceeding with the rest of the form to save the added ingredients to the recipe.
Users can save a recipe as a bookmark. 


### What would I differently
I would plan my front-end logic more carefully before jumping on redux, so I can have the presentational components for the UI reused, and only the logic connected to redux in my containers. I would have separate the presentational logic in component state and use redux for state management for the database calls only.
