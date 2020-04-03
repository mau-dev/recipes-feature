

// import React, {Fragment, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// // import { Autocomplete } from '@material-ui/lab';
// // import TextField from '@material-ui/core/TextField';

// import {searchRecipes} from '../actions/recipe';

// const Search = ({searchRecipes, recipe: {recipes, title, ingredients, category, loading}}) => {

   

//       const onSubmit = (e) => {
// 		e.preventDefault();
// 		searchRecipes( );
//     };
    
// 	return (
// 		<Fragment>
// 			{/* <Autocomplete
//             id="grouped-demo"
//             // options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
//             // groupBy={(option) => option.firstLetter}
//             // getOptionLabel={(option) => option.title}
//             style={{ width: 300 }}
//             renderInput={(params) => <TextField {...params} label="With categories" variant="outlined" />}
//             /> */}
//             <input type='search' placeholder='Search' name='search' className='searchInput'  onSubmit={(e) => onSubmit(e)}  />
// 		</Fragment>
// 	);
// };

// Search.propTypes = {
// 	getRecipes: PropTypes.func.isRequired,
// 	recipe: PropTypes.object.isRequired
// 	// recipes: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
// 	recipe: state.recipe
// 	// recipes: state.recipes
// });

// export default connect(mapStateToProps, {searchRecipes})(Search);