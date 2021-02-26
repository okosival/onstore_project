import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import {
	Products,
	ProductDetails,
	Navbar,
	Footer,
	Home,
	Cart,
	Checkout,
} from "./components";

const App = () => {
	const { pathname } = useLocation();
	return (
		<div className="h-full w-full">
			{pathname !== "/cart" && pathname !== "/checkout" && <Navbar />}

			<Switch>
				<Route exact path="/home/products" component={Products} />

				<Route path="/home/product/:id" component={ProductDetails} />

				<Route path="/cart/" component={Cart} />

				<Route path="/checkout/" component={Checkout} />

				<Route exact path="/home" component={Home} />

				<Redirect from="/" to="/home" />
			</Switch>

			<Footer />
		</div>
	);
};

export default App;
