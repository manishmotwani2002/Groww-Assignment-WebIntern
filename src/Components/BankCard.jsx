import React from 'react';

function BankCard({ bank }) {
	return (
		<div className="grid grid-cols-6 gap-8 px-3 py-5 border-b-2">
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
