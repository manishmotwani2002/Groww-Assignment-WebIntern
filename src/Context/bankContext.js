import { createContext, useEffect, useContext, useState } from 'react';
import axios from 'axios';

import { API } from '../Constants';

export const bankContext = createContext({
	banks: null,
	getBanks: () => {},
	getFilteredBanks: () => {},
	getSearchResults: () => {},
});

const BANK = {
	banks: [],
	filteredData: null,
	filters: { city: 'MUMBAI', filter: 'Select Category', filerValue: '' },
	favourites: null,
};

const bankData = JSON.parse(localStorage.getItem('banks'));

export function BankContextProvider({ children }) {
	const [banks, setBanks] = useState(BANK);

	async function getBanks(city = 'MUMBAI') {
		//perform the API call

		let bankObject = banks;
		bankObject.filters.city = city;
		setBanks(bankObject);

		await axios
			.get(`${API}` + `${city}`)
			.then((response) => {
				localStorage.setItem('banks', JSON.stringify(response.data));
				setBanks({ ...banks, banks: response.data });
			})
			.catch((err) => console.log('err', err));
	}

	function getFilteredBanks(filters) {
		//filtering the data here

		let bankObject = banks;
		bankObject.filters.filter = filters;
		setBanks(bankObject);
	}

	const debounce = (func, wait) => {
		let timeout;
		return (val) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => func(val), wait);
		};
	};

	const getSearchResults = debounce((value) => {
		handleSearch(value);
	}, 1000);

	const handleSearch = (value) => {
		//appliying searching by debouncing
		//debouncing limit is set to 1000ms

		const filteredBanks = bankData.filter((bank) => {
			return bank[banks.filters.filter]
				.toLowerCase()
				.includes(value.toLowerCase());
		});
		//update the local storage
		localStorage.setItem('banks', JSON.stringify(filteredBanks));
		setBanks({ ...banks, banks: filteredBanks });
	};

	return (
		<bankContext.Provider
			value={{ banks, getBanks, getFilteredBanks, getSearchResults }}>
			{children}
		</bankContext.Provider>
	);
}

export function useBankContext() {
	const { banks, getBanks, getFilteredBanks, getSearchResults } =
		useContext(bankContext);

	return { banks, getBanks, getFilteredBanks, getSearchResults };
}
