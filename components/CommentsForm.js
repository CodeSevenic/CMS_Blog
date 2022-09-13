import React, { useState, useEffect } from 'react';

const CommentsForm = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  return (
    <div>
      <h1>Comments Form</h1>
    </div>
  );
};

export default CommentsForm;
