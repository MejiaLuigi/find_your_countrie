"use client"

import Header from "../ui/header/Header";

export default function Layout({ children }) {
  return (
    <>
    <div className="w-full bg-element-light text-text-light dark:bg-element-dark dark:text-text-dark shadow-md">
        <div className="max-w-screen  py-[1rem] px-[2rem]">
            <Header/>
        </div>
    </div>
    <div className="flex flex-col md:flex-col md:overflow-hidden ">
        <div className="flex-grow md:overflow-y-auto md:p-5">
        {children}
        </div>
    </div>
    </>
  );
}