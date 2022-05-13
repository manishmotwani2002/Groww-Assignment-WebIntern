import React, { useEffect, useState } from 'react';
import BankCard from '../Components/BankCard';
import Base from '../Components/Base';
import { table_coloums } from '../Constants/index';

function Favourites() {
	const [favourites, setFavourites] = useState([]);

	useEffect(() => {
		getFavourites();
	}, []);

	const getFavourites = () => {
		const favourites = JSON.parse(localStorage.getItem('favourite'));
		setFavourites(favourites);
	};

	return (
		<Base>
			<div>
				<div className="flex justify-between my-4 ml-6">
					<h1 className=" text-2xl font-bold">FAVOURITES</h1>
				</div>

				<div className="bg-white rounded-md overflow-hidden shadow-lg ml-6 max-max-h-screen">
					<div className="flex flex-col">
						<div className="grid grid-cols-6 place-items-center gap-8 bg-emerald-500 py-4 text-gray-50 p-3 font-bold text-light text-xl ">
							{table_coloums.map((coloum, index) => {
								return <div key={index}>{coloum.name}</div>;
							})}
						</div>
						<div className=" h-2/3 overflow-y-auto">
							{favourites.map((bank, index) => {
								return (
									<div>
										<BankCard bank={bank} setFavourites={setFavourites} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Base>
	);
}

export default Favourites;
