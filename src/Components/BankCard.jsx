import React from 'react';
// import { Link } from 'react-router-dom';
import BankDetail from '../Routes/BankDetail';
import { useNavigate } from 'react-router-dom';

function BankCard({ bank }) {
	const navigate = useNavigate();

	const performRedirect = () => {
		console.log('Redirect');

		navigate(`/bank-details/${bank.ifsc}`);
	};

	return (
		// <button>

		<div
			className="grid grid-cols-6 gap-8 px-3 py-5 border-b-2"
			onClick={() => performRedirect()}>
			<h1>{bank.bank_name}</h1>
			<h1>{bank.ifsc}</h1>
			<h1>{bank.branch}</h1>
			<h1>{bank.city}</h1>
			<h1>{bank.address}</h1>
			<div className="flex flex-row gap-2">icons here</div>
		</div>
	);
}

export default BankCard;
