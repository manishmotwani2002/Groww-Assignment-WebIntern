import React from 'react';
import Filter from './Filter';

import { cities, filterOptions, PageLimits } from '../Constants/index';

function Filters() {
	return (
		<div className="px-20">
			<Filter title="Select City" values={cities} />
			<Filter title="Select Category" values={filterOptions} />
		</div>
	);
}

export default Filters;
