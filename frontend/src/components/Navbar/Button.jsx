import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='/payment'>
      <button className='paymentBtn'>Get a Quote</button>
    </Link>
  );
}