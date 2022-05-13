import { createContext, useEffect, useContext, useState } from 'react';
import axios from 'axios';

import { API } from '../Constants';

export const bankContext = createContext({
	banks: null,
	getBanks: () => {},
	getFilteredBanks: () => {},
});

const BANK = {
	banks: [],
	filteredData: null,
	filters: { city: 'MUMBAI', filter: null, filerValue: '' },
	favourites: null,
};

export function BankContextProvider({ children }) {
	// console.log('test');

	const [banks, setBanks] = useState(BANK);

	async function getBanks(city = 'MUMBAI') {
		//perform the API call

		await axios
			.get(`${API}` + `${city}`)
			.then((response) => {
				console.log('response', response.data);
				setBanks({ ...banks, banks: response.data });
			})
			.catch((err) => console.log('err', err));
	}

	function getFilteredBanks(filters) {
		//filtering the data here
		setBanks({
			filteredData: banks.data.filter((bank) => {
				return bank.city.toUpperCase().includes(filters.city.toUpperCase());
			}),
		});
	}
	return (
		<bankContext.Provider value={{ banks, getBanks, getFilteredBanks }}>
			{children}
		</bankContext.Provider>
	);
}

export function useBankContext() {
	const { banks, getBanks, getFilteredBanks } = useContext(bankContext);

	return { banks, getBanks, getFilteredBanks };
}
