import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { useBankContext } from '../Context/bankContext';

function Filter({ title, values = [] }) {
	const { getBanks, getFilteredBanks } = useBankContext();

	const [header, setHeader] = useState(title);

	const handleClick = (item) => {
		setHeader(item.label);

		if (title === 'Select City') {
			getBanks(item.value);
		} else {
			getFilteredBanks(item.value);
		}
	};

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex gap-2 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-300">
					{header}
					<svg
						height="20"
						width="20"
						viewBox="0 0 20 20"
						aria-hidden="true"
						focusable="false"
						class="css-8mmkcg">
						<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
					</svg>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95">
				<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{values.map((item, index) => {
							return (
								<Menu.Item>
									{() => (
										<a
											className="
										hover:bg-gray-200
										block px-4 py-2 text-sm
									"
											onClick={() => handleClick(item)}>
											{item.label}
										</a>
									)}
								</Menu.Item>
							);
						})}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

export default Filter;
