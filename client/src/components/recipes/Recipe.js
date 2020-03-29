// import React, {Fragment, useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';

// import {getRecipe} from '../../actions/recipe';

// const Recipe = ({getRecipe, recipe: {recipe, loading}}) => {
// 	useEffect(
// 		() => {
// 			getRecipe();
// 		},
// 		[ getRecipe ]
// 	);

// 	return (
// 		<Fragment>
// 			<Link to='/recipes'>Back to recipes</Link>
// 			<h1>recipe by id</h1>
// 		</Fragment>
// 	);
// };

// Recipe.propTypes = {
// 	getRecipe: PropTypes.func.isRequired,
// 	recipe: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
// 	recipe: state.recipe
// });

// export default connect(mapStateToProps, {getRecipe})(Recipe);
