import React from 'react';

const MyForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return <form onSubmit={handleSubmit}>...</form>;
};

export default MyForm;