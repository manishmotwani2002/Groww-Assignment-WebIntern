import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Routes/Home';
import BankDetail from './Routes/BankDetail';

import { BankContextProvider } from './Context/bankContext';

function App() {
	return (
		<div className="bg-gray-50">
			<BankContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/bank-details/:ifsc_code" element={<BankDetail />} />
					</Routes>
				</BrowserRouter>
			</BankContextProvider>
		</div>
	);
}

export default App;
