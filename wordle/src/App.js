import axios from 'axios';
import { useEffect, useState } from 'react';
import Arrays from './components/Arrays';
import Menu from './components/Menu';


function App() {

	const [target, setTarget] = useState(null);
	const [play, setPlay] = useState(false);

	useEffect(() => {
		try
		{
			axios.get("/data/words-bank.json").then(response => {
				const	wordsBank = response.data;
				const 	randomWord = wordsBank[Math.floor(Math.random()* wordsBank.length)];
				setTarget(randomWord);
			});
		}
		catch(error) {
			console.error('Error fetching words:', error);
		}
	}, [setTarget]);
 
	return (
		<div className="bg-lime-200 h-screen w-screen flex items-center justify-center">
			{play === false && <Menu onPlay={setPlay}/>}
			{play === true && <div className='bg-[#B7B7B7] rounded-lg w-700 h-900 justify-center'>
				{target && <Arrays target={target} />}
			</div>}
    	</div>
	);
}

export default App;
 