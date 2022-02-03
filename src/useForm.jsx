import { useState, useEffect } from 'react';
import { APP_DOMAIN } from '../src/config';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name:'',
    lastname:'',
    website:'',
    select:'',
    checkbox:'',
    number:'',
    email: '',
    country: '',
    city: '',
    catch:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
 

 

  const handleChange = e => {
   
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    
      
    
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    
    fetch(`${APP_DOMAIN}users/register`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    }).then(()=>{
      console.log('sent request server')
     
    })
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;