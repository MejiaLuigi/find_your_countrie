"use client"

import Header from "../ui/header/Header";

export default function Layout({ children }) {
  return (
    <>
    <div className="w-full bg-gray-800 text-white">
        <div className="max-w-screen  py-[1rem] px-[2rem]">
            <Header/>
        </div>
    </div>
    <div className="flex flex-col md:flex-col md:overflow-hidden border border-blue-500 h-full">
        <div className="flex-grow md:overflow-y-auto md:p-5">
        {children}
        </div>
    </div>
    </>
  );
}