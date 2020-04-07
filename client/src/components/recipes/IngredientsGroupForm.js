
import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
   
    </div>
  </div>
);



const renderIngredients= ({ fields, meta: { touched, error, submitFailed }}) => (
    <div>
  <ul>
   
    {fields.map((ingredient, index) => (
      <li key={index}>
       
        <h4>Ingredient {index + 1}:</h4>
        <Field
          name={`${ingredient}.quantity`}
          type="text"
          component={renderField}
          label="quantuty"
        />
        <Field
          name={`${ingredient}.unit`}
          type="text"
          component={renderField}
          label="unit"
        />
        <Field
          name={`${ingredient}.ingredient`}
          type="text"
          component={renderField}
          label="ingredient"
          placeholder="ingredient"
        />
        <button title="Remove ingredient"
        onClick={() => fields.remove(index)}
        >Remove ingredient</button>
      </li>
    ))}
  </ul>
   <div>
   <button type="button" onClick={() => fields.push({})}>Add Ingredient</button>
   {(touched || submitFailed) && error && <span>{error}</span>}
 </div>
 </div>
);

const FieldArraysForm = props => {
  const { handleSubmit, reset, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
 
      <FieldArray name="ingredients" component={renderIngredients} />
      <div>
        <button type="submit" disabled={submitting}>Submit Ingredient list</button>
        <button type="button"disabled={pristine || submitting}onClick={reset}>
          Delete Ingredient List
        </button>
      </div>
    </form>
  );
};

export default reduxForm({form: 'fieldArrays', })(FieldArraysForm);
