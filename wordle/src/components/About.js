
import React from 'react';

export const About = ({onBack}) => {
    return (
        <section className="bg-[#B7B7B7] h-[58%] w-1/2 flex flex-col items-start p-6 overflow-auto">
            <div className="flex flex-row justify-between items-start w-full">
                <div className='flex flex-col w-auto'>
                    <h1 className="text-4xl font-bold mb-8">How To Play</h1>
                    <p className="text-lg mb-4">Guess the Wordle in 6 tries.</p>
                </div>
                <div className='flex justify-end items-start w-auto'>
                    <button className="text-3xl bg-[#C4CFA1] hover:bg-[#8B956D] font-bold py-2 px-4 " onClick={onBack}>X</button>
                </div>
            </div>
            <div className="flex flex-col flex-auto h-auto">
                <ul className="list-disc ml-6">
                    <li>Each guess must be a valid 5-letter word.</li>
                    <li>The color of the tiles will change to show how close your guess was to the word.</li>
                </ul>
            </div>
            <div className="flex flex-col flex-auto h-auto">
                <h3 className="mb-4">Examples:</h3>
                <ul className="ml-6 space-y-3">
                    <li className="flex items-center">
                        <img src='/gain.png' alt='case 1' className="w-175 h-15 mr-4" />
                        <p className="text-sm">W is in the word and in the correct spot.</p>
                    </li>
                    <li className="flex items-center">
                        <img src='/active.png' alt='case 2' className="w-175 h-15 mr-4" />
                        <p className="text-sm">W is in the word but in the wrong spot.</p>
                    </li>
                    <li className="flex items-center">
                        <img src='/fail.png' alt='case 3' className="w-175 h-15 mr-4" />
                        <p className="text-sm">W is not in the word in any spot.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
