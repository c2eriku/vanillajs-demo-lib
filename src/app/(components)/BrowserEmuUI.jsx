import Image from "next/image";

export function BrowserEmuUI({ title, iframeSrc, isDrawerOpen, toggleDrawer }) {

    function FuncBar({ title, toggleDrawer }) {
        return (
            <div className="w-full h-10 flex items-center bg-gray-200 box-content border-b-4 border-gray-100">
                <button className="ml-2 p-1 bg-gray-100 rounded-xl hover:bg-gray-300" onClick={toggleDrawer}>
                    <ChevronRight isDrawerOpen={isDrawerOpen}></ChevronRight>
                </button>
                <div className="flex w-60 h-full pt-2 pb-0">
                    <div className="w-2 bg-gray-100">
                        <div className="w-2 h-full bg-gray-200 rounded-br-lg"></div>
                    </div>
                    <div className="w-full h-full px-2 flex items-center bg-gray-100 rounded-t-lg">
                        <div className="relative w-4 h-4 mr-2">
                            <Image src='/favicon.ico' layout="responsive" width={10} height={10} alt="icon"></Image>
                        </div>
                        <div>{title}</div>
                    </div>
                    <div className="w-2 bg-gray-100">
                        <div className="w-2 h-full bg-gray-200 rounded-bl-lg"></div>
                    </div>
                </div>
                <button className="ml-auto p-2 hover:bg-gray-300"><Minus></Minus></button>
                <button className="p-2 hover:bg-gray-300"><Square2Stack></Square2Stack></button>
                <button className="p-2 hover:bg-red-500 hover:text-white"><XMark></XMark></button>
            </div>
        );
    }

    return (
        <div className="w-full h-full bg-white border-2">
            <FuncBar title={title} toggleDrawer={toggleDrawer}></FuncBar>
            <iframe src={iframeSrc}
                className="w-full h-full"></iframe>
        </div>
    );
}

function XMark() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    );
}

function Square2Stack() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
        </svg>

    );
}

function Minus() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
    );
}

function ChevronRight({ isDrawerOpen }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className={`${isDrawerOpen ? 'rotate-180' : ''} size-6 transition-all`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    );
}