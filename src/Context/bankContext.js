import { createContext, useContext, useState } from 'react';

import { API } from '../Constants';

export const bankContext = createContext({
	banks: null,
	getBanks: () => {},
	getFilteredBanks: () => {},
});

const BANK = {
	data: null,
	filteredData: null,
	filters: { city: 'MUMBAI', filter: null, query: '' },
	favourites: null,
};

export function BankContextProvider({ children }) {
	const [banks, setBank] = useState(BANK);

	function getBanks(values) {
		//perform the API call

		setBank({ data: values });
	}
	function getFilteredBanks(filters) {
		//filtering the data here
		setBank({
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
