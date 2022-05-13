import React, { useEffect, useState } from 'react';
import Base from '../Components/Base';

function BankDetail() {
	const [filteredbank, setFilteredbank] = useState({});

	const preloadValues = () => {
		const ifsc = window.location.pathname.split('/')[2];
		console.log('ifsc param', ifsc);

		//find details by ifsc code
		const bankObject = JSON.parse(localStorage.getItem('banks'));

		const bank = bankObject.find((bank) => bank.ifsc === ifsc);
		console.log('filtered bank', bank);
		setFilteredbank(bank);
	};

	useEffect(() => {
		preloadValues();
	}, []);

	return (
		<Base>
			<div className="flex flex-col max-w-5xl mx-auto border-2">
				<h1 className="font-bold text-2xl text-center bg-emerald-500 text-gray-50 py-4">
					{filteredbank.bank_name}
				</h1>
				<div className="px-10 py-6 font-semibold">
					<div className="flex justify-between py-4">
						<h1>City</h1>
						<h1>{filteredbank.city}</h1>
					</div>
					<div className="flex justify-between py-4">
						<h1>District</h1>
						<h1>{filteredbank.district}</h1>
					</div>
					<div className="flex justify-between py-4">
						<h1>Address</h1>
						<h1>{filteredbank.address}</h1>
					</div>
					<div className="flex justify-between py-4">
						<h1>Branch</h1>
						<h1>{filteredbank.branch}</h1>
					</div>
					<div className="flex justify-between py-4">
						<h1>State</h1>
						<h1>{filteredbank.state}</h1>
					</div>
					<div className="flex justify-between py-4">
						<h1>IFSC</h1>
						<h1>{filteredbank.ifsc}</h1>
					</div>
					<div className="flex justify-between py-4">
						<h1>Bank Id</h1>
						<h1>{filteredbank.bank_id}</h1>
					</div>
				</div>
			</div>
		</Base>
	);
}

export default BankDetail;
