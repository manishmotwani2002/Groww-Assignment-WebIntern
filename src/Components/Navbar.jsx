import React from 'react';
import Logo from '../Assets/growwLogo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate('/');
	};

	return (
		<div className="flex justify-between shadow-lg rounded-b-3xl py-4 px-4">
			<div
				className="flex flex-row items-center gap-4"
				onClick={() => {
					navigate('/');
				}}>
				<img src={Logo} alt="Logo" className="w-16 h-16" />
				<div className="uppercase  text-3xl  font-bold text-emerald-500">
					find your bank
				</div>
			</div>

			<div className="flex gap-8 text-2xl text-emerald-500 mr-12">
				<button
					onClick={() => {
						navigate('/');
					}}
					className="font-semibold">
					Home
				</button>
				<button
					onClick={() => {
						navigate('favourites');
					}}
					className="font-semibold">
					Favourites
				</button>
			</div>
		</div>
	);
}

export default Navbar;
