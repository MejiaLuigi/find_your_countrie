"use client"

import React from 'react';
import Button from '../home/Button';


export default function Header({ title, subtitle }) {
  return (
    <header className="flex justify-between items-center py-[1rem] px-[10px] bg-gray-800 text-white h-[10vh] w-full">
      <h1 className="header-title text-lg md:text-xl font-bold">Where in the world?</h1>
      <Button label="Toggle Theme" onClick={() => console.log('Theme toggled')} />
    </header>
  );
}