import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import BankDetail from '../Routes/BankDetail';
import { useNavigate } from 'react-router-dom';

function BankCard({ bank, page, setFavourites }) {
	const navigate = useNavigate();

	const [handleClick, setHandleClick] = useState('none');

	const deleteFavourites = () => {
		let favouriteBanks = JSON.parse(localStorage.getItem('favourite'));
		let index = favouriteBanks.indexOf(bank);
		favouriteBanks.splice(index, 1);
		localStorage.setItem('favourite', JSON.stringify(favouriteBanks));
		setFavourites(favouriteBanks);
	};

	const handleFavourites = () => {
		if (handleClick === 'none') {
			if (localStorage.getItem('favourite')) {
				let favouriteBanks = JSON.parse(localStorage.getItem('favourite'));
				favouriteBanks.push(bank);
				localStorage.setItem('favourite', JSON.stringify(favouriteBanks));
			} else {
				let favouriteBanks = [];
				favouriteBanks.push(bank);

				localStorage.setItem('favourite', JSON.stringify(favouriteBanks));
			}
			setHandleClick('');
		} else {
			//remove the element from local storage
			let favouriteBanks = JSON.parse(localStorage.getItem('favourite'));
			let index = favouriteBanks.indexOf(bank);
			favouriteBanks.splice(index, 1);
			localStorage.setItem('favourite', JSON.stringify(favouriteBanks));
			setHandleClick('none');
		}
		navigate(`/`);
	};

	const performRedirect = () => {
		navigate(`/bank-details/${bank.ifsc}`);
	};

	return (
		// <button>
		<div className="grid grid-cols-6 place-items-center gap-8 px-3 py-5 border-b-2">
			<h1 onClick={() => performRedirect()}>{bank.bank_name}</h1>
			<h1 onClick={() => performRedirect()}>{bank.ifsc}</h1>
			<h1 onClick={() => performRedirect()}>{bank.branch}</h1>
			<h1 onClick={() => performRedirect()}>{bank.city}</h1>
			<h1 onClick={() => performRedirect()}>{bank.address}</h1>
			<button>
				{page == 'home' ? (
					<div className="flex flex-row gap-2" onClick={() => handleFavourites()}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill={handleClick}
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
							/>
						</svg>
					</div>
				) : (
					<div className="flex flex-row gap-2" onClick={() => deleteFavourites()}>
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
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</div>
				)}
			</button>
		</div>
	);
}

export default BankCard;
