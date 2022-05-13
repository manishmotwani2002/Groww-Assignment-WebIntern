import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Routes/Home';
import BankDetail from './Routes/BankDetail';

import { BankContextProvider } from './Context/bankContext';
import Favourites from './Routes/Favourites';

function App() {
	return (
		<div className="bg-gray-50">
			<BankContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/favourites" element={<Favourites />} />
						<Route path="/bank-details/:ifsc_code" element={<BankDetail />} />
					</Routes>
				</BrowserRouter>
			</BankContextProvider>
		</div>
	);
}

export default App;
