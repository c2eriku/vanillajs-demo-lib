"use client";
import { useState } from "react";
import SideNavigation from "./(components)/SideNav";
import { BrowserEmuUI } from "./(components)/BrowserEmuUI";

export default function Home() {
  const [title, setTitle] = useState('example');
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const [iframeSrc, setIframeSrc] = useState('/examples.html');

  function toggleDrawer() {
    setDrawerOpen(!isDrawerOpen);
  }

  return (
    <main className="flex min-h-screen">

      <div className={`w-${isDrawerOpen ? '1/4' : '0 opacity-0'} transition-all ease-in-out`}>
        <SideNavigation
          setTitle={setTitle}
          setIframeSrc={setIframeSrc}
          toggleDrawer={toggleDrawer}></SideNavigation>
      </div>

      <div className={`w-${isDrawerOpen ? '3/4' : 'full'} h-100 p-2 transition-all ease-in-out`}>
        <BrowserEmuUI title={title} iframeSrc={iframeSrc}></BrowserEmuUI>
      </div>

    </main>
  );
}
