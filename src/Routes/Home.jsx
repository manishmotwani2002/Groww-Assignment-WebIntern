import React, { useEffect, useState } from 'react';
import BankCard from '../Components/BankCard';
import Base from '../Components/Base';
import Filters from '../Components/Filters';
import Search from '../Components/Search';
import { useBankContext } from '../Context/bankContext';

import { table_coloums } from '../Constants/index';
import Pagination from '../Components/Pagination';

function Home() {
	const [startpost, setStartpost] = useState(0);
	const [limit, setLimit] = useState(10);

	const { banks, getBanks } = useBankContext();

	// const banks = JSON.parse(localStorage.getItem('banks'));

	console.log('banks in home', banks);

	useEffect(() => {
		getBanks();
	}, []);

	return (
		<Base>
			<div className="flex justify-between my-4 ml-6">
				<h1 className=" text-xl font-bold">ALL BANKS</h1>

				<div className="flex ">
					<Filters />
					<Search />
				</div>
			</div>

			<div className="bg-white rounded-md overflow-hidden shadow-lg ml-6 max-max-h-screen">
				<div className="flex flex-col">
					<div className="grid grid-cols-6 gap-8 bg-emerald-500 py-4 text-gray-50 p-3 font-bold text-light text-lg ">
						{table_coloums.map((coloum, index) => {
							return <div key={index}>{coloum.name}</div>;
						})}
					</div>
					<div className=" h-2/3 overflow-y-auto">
						{banks.banks.map((bank, index) => {
							if (index >= startpost && index < startpost + limit)
								return <BankCard bank={bank} page="home" />;
						})}
					</div>
				</div>
			</div>
			<Pagination
				setStartpost={setStartpost}
				setLimit={setLimit}
				startpost={startpost}
				limit={limit}
				endLimit={banks.banks.length}
			/>
		</Base>
	);
}

export default Home;
