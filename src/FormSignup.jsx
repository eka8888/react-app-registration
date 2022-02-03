import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, } = useForm(
    submitForm,

    validate
  );

  return (
    <div className='form1'>
      <form onSubmit={handleSubmit} className='form' noValidate>
       
        <div className='form-inputs'>
          <label className='form-label'></label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='First Name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'></label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Last Name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'></label>
          <input
            className='form-input'
            type="text"
            name='website'
            placeholder='Website'
            value={values.website}
            onChange={handleChange}
          />
          {errors.website && <p>{errors.website}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'></label>
          <select
            className='form-input1'
            name='select'
            onChange={handleChange}
          >
              <option value={values.select}>Male</option>
              <option value={values.select}>Female</option>
          </select>
          {errors.select && <p>{errors.select}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Married</label>
          <input
            className='form-input2'
            type="checkbox"
            name='checkbox'
            placeholder='Website'
            value={values.checkbox}
            onChange={handleChange}
          />
          {errors.checkbox && <p>{errors.checkbox}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'></label>
          <input
            className='form-input'
            type="number"
            name='number'
            placeholder='0'
            value={values.number}
            onChange={handleChange}
          />
          {errors.number && <p>{errors.number}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'></label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'></label>
          <input
            className='form-input'
            type='text'
            name='country'
            placeholder='Country'
            value={values.country}
            onChange={handleChange}
          />
          {errors.country && <p>{errors.country}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'></label>
          <input
            className='form-input'
            type='text'
            name='city'
            placeholder='City'
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'></label>
          <input
            className='form-input'
            type='text'
            name='catch'
            placeholder='Catch phrase'
            value={values.catch}
            onChange={handleChange}
          />
          {errors.catch && <p>{errors.catch}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
        <button className='form-input-btn' type="reset"  >
        
          Reset
        </button>
     
      </form>
    </div>
  );
};

export default FormSignup;
