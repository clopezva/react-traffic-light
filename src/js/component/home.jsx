import React from "react";
import useSate  from 'react'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [color, setColor] = useSate('red')

	function handleClick(event){
		//console.log(event.target.id)
		//setColor(event.target.id)
		setColor(event.target.id)
		console.log(color)
	}


	return (
		<div className="container">
			<div className="traffic-light">
				<span onClick={handleClick} id="red" className={`circle red-light `}></span>
				<span onClick={handleClick} id="yellow "className={`circle yellow-light`}></span>
				<span onClick={handleClick} id="green" className={`circle green-light`}></span>
			</div>
		</div>
	);
};

export default Home;
