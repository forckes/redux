import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { store, persistor } from "./redux/store.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//persist----------!
import { PersistGate } from "redux-persist/integration/react";
//persist----------!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
