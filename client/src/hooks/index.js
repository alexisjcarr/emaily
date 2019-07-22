import React, { useState } from "react";

const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    callback();
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  return { handleSubmit, handleInputChange, inputs };
};

export default useSignUpForm;
