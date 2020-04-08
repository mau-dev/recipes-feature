
import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
   
    </div>
  </div>
);



const renderIngredients= ({ fields, meta: { touched, error, submitFailed }}) => (
    <div>
  <ul style={{listStyle: 'none'}}>
   
    {fields.map((ingredient, index) => (
      <li key={index}>
        
        
        <p>Ingredient {index + 1}:</p>
        <Row form>
        <Col md={3}>
        <Field
          name={`${ingredient}.quantity`}
          type="text"
          component={renderField}
          placeholder="Amount"
          label="quantuty"
        />
        </Col>
         <Col md={3}>
        <Field
          name={`${ingredient}.unit`}
          type="text"
          component={renderField}
          placeholder="Unit"
          label="unit"
        />
        </Col>
         <Col md={3}>
        <Field
          name={`${ingredient}.ingredient`}
          type="text"
          component={renderField}
                                                                                            
          placeholder="Ingredient"
        />
        </Col>
         <Col md={3}>
        <Button  outline color="danger" title="Remove ingredient"
        onClick={() => fields.remove(index)}
        >Remove ingredient</Button>
        </Col>
        </Row> 
      </li>
      
    ))}
  </ul>
  <br></br>
   <div>
   <Button type="button" color="info" onClick={() => fields.push({})}>Add Ingredient</Button>
   
   {(touched || submitFailed) && error && <span>{error}</span>}
 </div>
 <br></br>
 </div>
);

const FieldArraysForm = props => {
  const { handleSubmit, reset, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
 
      <FieldArray name="ingredients" component={renderIngredients} />
      <div>
        <Row>
        <Col md={6}>
        <Button  size="md" block  color="success" type="submit" disabled={submitting}>Submit Ingredient list</Button>
        </Col>
        <Col md={6}>
        <Button  size="md" block  color="danger" type="button"disabled={pristine || submitting}onClick={reset}>
          Clear Ingredient List
        </Button>
        </Col>
        </Row>
      </div>
      <br></br>
    </form>
  );
};

export default reduxForm({form: 'fieldArrays', })(FieldArraysForm);



