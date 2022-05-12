import React from 'react';
import BankCard from '../Components/BankCard';
import Base from '../Components/Base';

import { table_coloums } from '../Constants/index';

function Home() {
	return (
		<Base>
			<div className="bg-white rounded-md overflow-hidden shadow-lg ml-6 max-max-h-screen">
				<div className="flex flex-col">
					<div className="grid grid-cols-6 gap-8 bg-dark-green p-3 font-bold text-light text-lg ">
						{table_coloums.map((coloum, index) => {
							return (
								<div key={index} className={`${coloum.style.flex}`}>
									{coloum.name}
								</div>
							);
						})}
					</div>
					<div className=" h-2/3 overflow-y-auto">
						<BankCard />
						<BankCard />
						<BankCard />
						<BankCard />
						<BankCard />
						<BankCard />
						<BankCard />
						<BankCard />
						<BankCard />
						<BankCard />
						<BankCard />
						<BankCard />
					</div>
				</div>
			</div>
		</Base>
	);
}

export default Home;
