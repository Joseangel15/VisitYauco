import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from "./Components/Dashboard/Dashboard";
import DestinationsPage from './Components/DestinationsPage/DestinationsPage';
import HistoryPage from './Components/HistoryPage/HistoryPage';
import NewsPage from './Components/NewsPage/NewsPage';
import RestaurantsPage from './Components/RestaurantsPage/RestaurantsPage';
import MapPage from './Components/MapPage/MapPage';
import StorePage from './Components/StorePage/StorePage';
import ItemPage from './Components/ItemPage/ItemPage';
import CartPage from './Components/CartPage/CartPage';
import ContactPage from './Components/ContactPage/ContactPage';


export default (

    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route component={DestinationsPage} path='/Destinations' />
        <Route component={HistoryPage} path='/History' />
        <Route component={NewsPage} path='/News' />
        <Route component={RestaurantsPage} path='/Restaurants' />
        <Route component={MapPage} path='/Map' />
        <Route component={StorePage} path='/Store' />
        <Route component={ItemPage} path='/Item/:id' />
        <Route component={CartPage} path='/Cart' />
        <Route component={ContactPage} path='/Contact' />
    </Switch>
)