
import Link from 'components/Link';
import Route from 'components/Route';
import SideBar from 'components/Sidebar';
import ModalPage from 'pages/ModalPage';
import TablePage from 'pages/TablePage';
import React from 'react';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';

function App() {
    return (
        <div className='flex relative'>
            <SideBar />
            <div className="border border-gray-200">
                <Route path='/'>
                    <DropdownPage />
                </Route>
                <Route path='/button'>
                    <ButtonPage />
                </Route>
                <Route path='/accordion'>
                    <AccordionPage />
                </Route>
                <Route path='/modal'>
                    <ModalPage />
                </Route>
                <Route path='/table'>
                    <TablePage />
                </Route>
            </div>
        </div>
    )
}

export default App
