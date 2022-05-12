export const API = 'https://vast-shore-74260.herokuapp.com/banks?city=';

export const table_coloums = [
	{
		name: 'Bank',
		key: 'bank_name',
		style: { flex: '3', fontWeight: 600 },
	},
	{
		name: 'IFSC',
		key: 'ifsc',
		style: { flex: '3', fontWeight: 600 },
	},
	{
		name: 'Branch',
		key: 'branch',
		style: { flex: '2' },
	},
	{
		name: 'Bank ID',
		key: 'bank_id',
		style: { flex: '2' },
	},
	{
		name: 'Address',
		key: 'address',
		style: { flex: '4' },
	},
	{
		name: 'Favourites',
		key: 'favourites',
		style: { flex: '4' },
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
