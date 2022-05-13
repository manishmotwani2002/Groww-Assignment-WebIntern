import React from 'react';
import Logo from '../Assets/growwLogo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate('/');
	};

	return (
		<div className="flex justify-between">
			<div
				className="flex flex-row items-center gap-4"
				onClick={() => {
					handleRedirect();
				}}>
				<img src={Logo} alt="Logo" className="w-16 h-16" />
				<div className="uppercase  text-3xl  font-bold text-emerald-500">
					find your bank
				</div>
			</div>

			<div>
				<button>Favourites</button>
			</div>
		</div>
	);
}

export default Navbar;
