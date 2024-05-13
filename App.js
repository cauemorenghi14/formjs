import React, { useState } from 'react';
import { Form } from './hooks/useform';

const SimpleForm = () => {
  const { register, handleSubmit, handleFormSubmit, errors } = Form()

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label>Nome:</label>
      <input type="text" {...register('name', { required: true })} />
      {errors.name && <span>{errors.name.message}</span>}

      <label>Email:</label>
      <input type="email" {...register('email', { required: true })} />
      {errors.email && <span>{errors.email.message}</span>}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default SimpleForm;
