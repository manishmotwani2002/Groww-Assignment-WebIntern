import React from 'react';
import Navbar from './Navbar';

function Base({ children }) {
	return (
		<div className=" text-gray-700">
			<Navbar />
			<div className="mx-16 my-10">{children}</div>
		</div>
	);
}

export default Base;
