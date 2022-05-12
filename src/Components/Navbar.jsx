import React from 'react';
import Logo from '../Assets/growwLogo.png';

function Navbar() {
	return (
		<div className="flex justify-between">
			<div className="flex flex-row">
				<img src={Logo} alt="Logo" className="w-20 h-20" />
				<div className="uppercase  text-3xl  font-bold text-green-500">
					find your bank
				</div>
			</div>
			<div className="">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			</div>
		</div>
	);
}

export default Navbar;
