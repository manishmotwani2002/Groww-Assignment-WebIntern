import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Routes/Home';
import BankDetail from './Routes/BankDetail';

function App() {
	return (
		<div className="bg-gray-50">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/bank-details/:ifsc_code" element={<BankDetail />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
