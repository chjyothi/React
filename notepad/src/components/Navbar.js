import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import AddNote from './AddNote';
import NotesHome from './NotesHome';

export default function Navbar() {
    return (
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/AddNote'>NEW NOTE</Link>
                    </li>
                    <li>
                        <Link to='/NotesHome'>VIEW NOTES</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/AddNote'>
                        <AddNote/>
                    </Route>
                    <Route path='/NotesHome'>
                        <NotesHome/>
                    </Route>
                    <Route path='/'>
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
