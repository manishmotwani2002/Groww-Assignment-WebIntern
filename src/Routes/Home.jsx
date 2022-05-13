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

	useEffect(() => {
		getBanks();
	}, []);

	return (
		<Base>
			<div className="flex justify-between items-center my-4 ml-6">
				<h1 className=" text-2xl font-bold text-gray-600">ALL BANKS</h1>

				<div className="flex items-center ">
					<Filters />
					<Search />
				</div>
			</div>

			<div className="bg-white rounded-md overflow-hidden shadow-lg ml-6 max-max-h-screen">
				<div className="flex flex-col">
					<div className="grid grid-cols-6 place-items-center gap-8 bg-emerald-500 py-4 text-gray-50 p-3 font-bold text-light text-xl ">
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

			<center>
				{banks.banks.length == 0 && (
					<svg
						role="status"
						class="w-20 h-20 mr-2 mt-4 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
				)}
			</center>

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
