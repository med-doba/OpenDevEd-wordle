
import { useState } from "react";
import About from "./About";

export const Menu = ({onPlay}) => {

    const [selected, setSelected] = useState('PLAY'); 
    const [showAbout, setShowAbout] = useState(false);

    const handlePlay = () => {
        setSelected('PLAY');
        setShowAbout(false);
        onPlay(true);
    }
    const handleAbout = () => {
        setSelected('ABOUT');
        setShowAbout(true);
        onPlay(false);
    }

    const handleBack = () => {
        setShowAbout(false);
    }

    if (showAbout) {
        return <About onBack={handleBack} />;
    }

    return (
        <div className="bg-stone-900 h-1/2 w-1/2 flex flex-col items-center justify-center space-y-9">
            <div className="bg-[#C4CFA1] w-[85%] h-[45.13%] flex p-2">
                <div className="bg-[#C4CFA1] border-solide border-8 border-[#8B956D] w-full h-full">
                    <h1 className="text-center text-9xl">WORDLE</h1>
                </div>
            </div>
            <div className="bg-[#C4CFA1] w-[85%] h-[20.13%] flex p-2">
                <div className="bg-[#C4CFA1] border-solide border-8 border-[#8B956D] w-full h-full flex flex-row justify-between items-center px-10">
                    <button
                        className={`text-4xl ${selected === 'PLAY' ? 'border-b-2 border-black' : ''}`}
                        onClick={handlePlay}
                    >
                    {selected === 'PLAY' && '>'}PLAY
                    </button>
                    <button
                        className={`text-4xl ${selected === 'ABOUT' ? 'border-b-2 border-black' : ''}`}
                        onClick={handleAbout}
                    >
                    {selected === 'ABOUT' && '>'}ABOUT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Menu;