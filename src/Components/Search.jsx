import React from 'react';
import { useBankContext } from '../Context/bankContext';

function Search() {
	const { banks, getSearchResults } = useBankContext();

	const handleSearch = (e) => {
		getSearchResults(e.target.value);
	};

	return (
		<div className="flex items-center ">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6;"
				viewBox="0 0 20 20"
				fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
					clip-rule="evenodd"
				/>
			</svg>
			<input
				type="text"
				placeholder="Search"
				className="bg- rounded-md m-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-300"
				onKeyUp={(e) => handleSearch(e)}
			/>
		</div>
	);
}

export default Search;
