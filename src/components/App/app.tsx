import Navbar from "../navbar/navbar";

const App = () => {




    return (<>
        <div className="background"></div>
        <div className="main-container p-[10vh] z-100">
        <video
            src="../../assets/backgrounds/rain.mp4"
            className="h-auto max-h-[600px]  w-full object-contain lg:h-full lg:object-fill"
        />
                <Navbar />
        </div>
    </>)

}


export default App;