import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Routes/Home';
import AllBanks from './Routes/AllBanks';
import BankDetail from './Routes/BankDetail';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/all-banks" element={<AllBanks />} />
				<Route path="/bank-details/:ifsc_code" element={<BankDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
