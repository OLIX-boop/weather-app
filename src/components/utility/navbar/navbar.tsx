import { useRef } from "react";

const Navbar = ({ fetchCoords }: { fetchCoords: (value:string) => void }) => {
    const SearchBar = useRef<HTMLInputElement>(null);

    const SearchCountry = () => {
        const value = SearchBar.current?.value.trim();
        if (value !== "" && value) fetchCoords(value);
        if (SearchBar.current) SearchBar.current.value = '';
    } 

    return(<>
        <div className="dashboard-grid1 grid">
            <div className="search grid bg-color rounded-[.7vh] p-[1vh] w-full" onClick={() => SearchBar.current!.focus()}>
                <i onClick={SearchCountry} className="self-center text-end fa-solid fa-magnifying-glass pr-[1.5vh]"></i>
                <input ref={SearchBar} onKeyUp={(e) => e.key === 'Enter' && SearchCountry()} spellCheck={false} type="text" className="text-xs bg-transparent focus:outline-none" placeholder="Search for location" name="location" id="location" />
            </div>

            <div />  {/* Needed for grid */}

            <div className="flex flex-row-reverse user-notification">
                <i className="fa-solid fa-user bg-color self-center rounded-full ratio-square flex justify-center items-center text-center aspect-square h-[100%]"></i>
                <i className="fa-regular fa-bell mx-[1.2vw] bg-color self-center  rounded-full ratio-square flex justify-center items-center text-center aspect-square h-[100%]"></i>
            </div>
        </div>
    </>)
} 

export default Navbar;