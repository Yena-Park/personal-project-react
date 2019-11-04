import React from 'react';

const Repository = ({ repository }) => (
  <div>
    <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
      <div>{repository.name}</div>
      <div>{repository.description}</div>  
    </a>
  </div>
)

export default Repository;
