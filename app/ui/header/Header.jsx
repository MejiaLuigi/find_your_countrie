import React from 'react';
import Button from '../home/Button';

export default function header({ title, subtitle }) {
  return (
    <header className="header">
      <h1 className="header-title">Where in the world?</h1>
      <Button label="Toggle Theme" onClick={() => console.log('Theme toggled')} />
    </header>
  );
}