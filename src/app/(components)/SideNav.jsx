"use client";
import { demoSourcePath } from "../demoSourcePath";


export default function SideNav({ setTitle, setIframeSrc, toggleDrawer }) {


    function Item({ title, path }) {
        return (<button
            className="text-left px-4 py-2 hover:bg-sky-600"
            onClick={() => {
                setTitle(title);
                setIframeSrc(path)
            }}>
            {title}
        </button>);
    }

    const itemSet = demoSourcePath.map((el, index) => {
        return (<Item key={index} title={el.title} path={el.path}>{el.title}</Item>);
    })


    return (
        <div className={`w-full h-screen flex flex-col bg-gray-100 transition-all ease-in-out duration-1000`}>
            <div className="h-10 flex flex-row-reverse p-1 bg-gray-400">
                <button className="px-1 bg-sky-100 rounded-lg" onClick={toggleDrawer}>
                    <ChevronLeft></ChevronLeft>
                </button>
            </div>
            {itemSet}
        </div >
    );
}


function ChevronLeft() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    );
}


