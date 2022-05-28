import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import { 
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom';

import './styles/styles.scss';

const App = () => {
    useEffect(() => {
        if (!window.localStorage.getItem('liked')) {
            window.localStorage.setItem('liked', '[]')
        }
    }, [])

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage />}/>
                    <Route path='favorites' element={<FavoritesPage />}/>
                </Route>
            </Routes>
        </HashRouter>
    )
};

export default App;