import React from 'react';

function BankCard() {
	return (
		<div className="grid grid-cols-6 gap-8 px-3 py-5 border-b-2">
			<h1>project_id</h1>
			<h1>customer name</h1>
			<h1>total cost</h1>
			<h1>order created</h1>
			<h1>order status </h1>
			<div className="flex flex-row gap-2">icons here</div>
		</div>
	);
}

export default BankCard;
