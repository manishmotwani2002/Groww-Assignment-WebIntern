import React from 'react';
import { useBankContext } from '../Context/bankContext';

function Search() {
	const { banks, getSearchResults } = useBankContext();

	const handleSearch = (e) => {
		getSearchResults(e.target.value);
	};

	return (
		<div className="flex items-center ">
			<input
				type="text"
				placeholder="Search"
				className="p-2 rounded-md m-2 ring-2 ring-green-300 focus:outline-none  focus:ring-green-600"
				onKeyUp={(e) => handleSearch(e)}
			/>
		</div>
	);
}

export default Search;
