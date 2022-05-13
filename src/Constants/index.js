export const API = 'https://vast-shore-74260.herokuapp.com/banks?city=';

export const table_coloums = [
	{
		name: 'Bank',
		key: 'bank_name',
	},
	{
		name: 'IFSC',
		key: 'ifsc',
	},
	{
		name: 'Branch',
		key: 'branch',
	},
	{
		name: 'City',
		key: 'bank_id',
	},
	{
		name: 'Address',
		key: 'address',
	},
	{
		name: 'Actions',
		key: 'actions',
	},
];

export const cities = [
	{
		value: 'MUMBAI',
		label: 'Mumbai',
	},
	{
		value: 'PUNE',
		label: 'Pune',
	},
	{
		label: 'Bangalore',
		value: 'BANGALORE',
	},
	{
		label: 'Delhi',
		value: 'DELHI',
	},
	{
		label: 'Chennai',
		value: 'CHENNAI',
	},
];

export const filterOptions = [
	{ label: 'IFSC', value: 'ifsc' },
	{ label: 'Bank Name', value: 'bank_name' },
	{ label: 'Branch', value: 'branch' },
];

export const PageLimits = [
	{ label: '5', value: 5 },
	{ label: '10', value: 10 },
	{ label: '20', value: 20 },
];
