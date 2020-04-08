import React, {Fragment, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';

import RecipeItem from './RecipeItem';

// import {getRecipe} from '../../actions/recipe';
import {getRecipes} from '../../actions/recipe';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  marginTop: 40,
	},
	paper: {
	  height: 200,
	  width: 300,
	},
	control: {
	  padding: theme.spacing(2),
	},
  }));
  

const Recipes = ({getRecipes, recipe: {recipes, _id, loading}}) => {

	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();
  

	useEffect(
		() => {
			getRecipes();
		},
		[ getRecipes ]
	);

  
	return (
		<Fragment>
	  <Grid container className={classes.root} spacing={2}>
		<Grid item xs={12}>
		  <Grid container justify="center" spacing={spacing}>
			{recipes.map((recipe) => (
				<Fragment>
			  <Grid key={recipe._id} item>
			  <Link to={`recipes/${recipe._id}`}>
				  <Paper className={classes.paper} >
				{/* <Paper className={classes.paper} /> */}
				<img  width="300px" height="200" src={recipe.coverPhoto} className="grid-img" />
				</Paper>
				<Typography className="grid-title">
			  {recipe.title}
			</Typography>
			</Link>
			  </Grid>
			  
			
			</Fragment>
			))}
		  </Grid>
		</Grid>
	   
	  </Grid>
	  </Fragment>
	)

	// return (
	// 	<Fragment>
	// 		<h1>recipes</h1>
	// 		<div className='recipes'> {recipes.map((recipe) => <RecipeItem key={recipe._id} recipe={recipe} />)}</div>
	// 	</Fragment>

	// );
};

Recipes.propTypes = {
	getRecipes: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
	// recipes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	recipe: state.recipe
	// recipes: state.recipes
});

export default connect(mapStateToProps, {getRecipes})(Recipes);
