import { useState } from 'react';

function Pagination({ setStartpost, setLimit, startpost, limit, endLimit }) {
	const handlePrevious = () => {
		if (startpost != 0) setStartpost(startpost - limit);
	};

	const handleNext = () => {
		setStartpost(startpost + limit);
	};

	const handleLimit = (event) => {
		console.log(event.target.value);
		// setLimit(event.target.value);
	};

	return (
		<div className="mt-8 flex gap-6 justify-end">
			<div className="flex gap-4 items-center">
				<h1 className="font-semibold text-green-600">Rows Per Page</h1>
				<input
					type="text"
					placeholder="10"
					width="10"
					className="w-10 h-10 outline-none text-center border-2 border-green-400 rounded-lg focus:border-green-600"
					onChange={(e) => handleLimit(e)}
				/>
			</div>

			<nav aria-label="Page navigation">
				<ul class="inline-flex ">
					<li>
						<button
							class="h-10 px-5 text-green-600 font-semibold transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
							onClick={() => handlePrevious()}>
							<svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
								<path
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clip-rule="evenodd"
									fill-rule="evenodd"></path>
							</svg>
						</button>
					</li>

					<li>
						<button class="h-10 px-5 text-green-600 font-semibold transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
							Page {startpost}-{startpost + limit} of {endLimit}
						</button>
					</li>
					<li>
						<button
							class="h-10 px-5 text-green-600 font-semibold transition-colors duration-150 rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
							onClick={() => handleNext()}>
							<svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
								<path
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
									fill-rule="evenodd"></path>
							</svg>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Pagination;
