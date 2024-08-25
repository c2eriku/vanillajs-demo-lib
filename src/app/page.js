"use client";
import { useState } from "react";
import SideNavigation from "./(components)/SideNav";
import { BrowserEmuUI } from "./(components)/BrowserEmuUI";
import nextConfig from "../../next.config.mjs";


export default function Home() {
  const [title, setTitle] = useState('examples');
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const [iframeSrc, setIframeSrc] = useState(`${nextConfig.basePath}/examples.html`);

  function setIframeSrcWithBasePath(path) {
    setIframeSrc(`${nextConfig.basePath}${path}`);
  }

  function toggleDrawer() {
    setDrawerOpen(!isDrawerOpen);
  }

  return (
    <main className="flex min-h-screen">
      <div className={`${isDrawerOpen ? 'w-1/4' : 'w-0 opacity-0'} transition-all ease-in-out`}>
        <SideNavigation
          setTitle={setTitle}
          setIframeSrc={setIframeSrcWithBasePath}
          toggleDrawer={toggleDrawer}></SideNavigation>
      </div>

      <div className={`${isDrawerOpen ? 'w-3/4' : 'w-full'} h-100 p-2 transition-all ease-in-out`}>
        <BrowserEmuUI title={title} iframeSrc={iframeSrc} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}></BrowserEmuUI>
      </div>

    </main>
  );
}
