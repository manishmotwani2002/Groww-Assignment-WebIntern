import React from 'react';
import Navbar from './Navbar';

function Base({ children }) {
	return (
		<div className="p-10 text-gray-700">
			<Navbar />
			{children}
		</div>
	);
}

export default Base;
