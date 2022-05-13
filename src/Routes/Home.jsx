import React, { useEffect } from 'react';
import BankCard from '../Components/BankCard';
import Base from '../Components/Base';
import Filters from '../Components/Filters';
import Search from '../Components/Search';
import { useBankContext } from '../Context/bankContext';

import { table_coloums } from '../Constants/index';

function Home() {
	const { banks, getBanks } = useBankContext();
	console.log('home banks log', banks);
	return (
		<Base>
			<div className="flex justify-between my-4 ml-6">
				<h1 className=" text-xl font-bold">All Banks</h1>

				<div className="flex ">
					<Filters />
					<Search />
				</div>
			</div>

			<div className="bg-white rounded-md overflow-hidden shadow-lg ml-6 max-max-h-screen">
				<div className="flex flex-col">
					<div className="grid grid-cols-6 gap-8 bg-dark-green p-3 font-bold text-light text-lg ">
						{table_coloums.map((coloum, index) => {
							return <div key={index}>{coloum.name}</div>;
						})}
					</div>
					<div className=" h-2/3 overflow-y-auto">
						{banks.banks.map((bank, index) => {
							return <BankCard bank={bank} />;
						})}
					</div>
				</div>
			</div>
		</Base>
	);
}

export default Home;
