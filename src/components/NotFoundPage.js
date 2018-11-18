import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container">
    <h2>404 - Page Not Found</h2>
    <Link to="/" className="btn">Home</Link>
  </div>
);

export default NotFoundPage;
