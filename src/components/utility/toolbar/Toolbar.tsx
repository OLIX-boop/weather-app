import { useState } from "react";

const Toolbar = () => {
    const [clicked, setClicked] = useState(false);

    const animate = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 1000);
    }


    return (
        <div className="select-none navbar bg-color flex flex py-[2.5vh] justify-center rounded-l-xl w-full">
            <div className="grid text-xl grid-rows-2">
                <div className="flex flex-col justify-between text-center ">

                    <i 
                        className={`${clicked ? 'fa-bounce': ''} text-2xl fa-solid fa-cloud pb-[4vh] aspect-square self-center rounded-[1vh]`}
                        onClick={() => animate()}
                    ></i>

                    <i className="fa-solid fa-house p-[1.2vh] aspect-square self-center rounded-[1vh]"></i>
                    <i className="fa-regular fa-map p-[1.2vh] aspect-square self-center rounded-[1vh]"></i>
                    <i className="fa-regular fa-compass p-[1.2vh] aspect-square self-center rounded-[1vh]"></i>
                    <i className="fa-solid fa-location-dot p-[1.2vh] aspect-square self-center rounded-[1vh]"></i>
                </div>

                <i className="mt-auto text-right  fa-solid fa-right-from-bracket p-[1.2vh] aspect-square self-center rounded-[1vh] "></i>
            </div>
        </div>
    )
}

export default Toolbar;