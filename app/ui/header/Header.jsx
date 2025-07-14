"use client"

import { useState, useEffect } from "react";
import Button from '../home/Button';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; 
import { useTheme } from 'next-themes';



export default function Header({ title, subtitle }) {
     const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center py-[1rem] px-[10px] bg-gray-800 text-white h-[10vh] w-full">
      <h1 className="header-title text-lg md:text-xl font-bold">Where in the world?</h1>
      <Button        
        label={theme === 'dark' ? "Light Mode" : "Dark Mode"}
        icon={theme === 'dark' ? faSun : faMoon}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="bg-gray-700 text-white px-4 py-2 rounded"
      />
    </header>
  );
}