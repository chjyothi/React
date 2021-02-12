import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import FlashCards from './FlashCards';
import AddQ from './AddQ';
import Home from './Home';
import MultiQuiz from './MultiQuiz';
import Quiz from './Quiz';

export default function Navbar() {
    return (
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li><Link to='/FlashCards'>Flash Cards</Link>
                    </li>
                    <li>
                        <Link to='/Quiz'>Quiz</Link>
                    </li>
                    <li>
                        <Link to='/AddQuestion'>Add Questions</Link>
                    </li>
                    <li>
                        <Link to='/MultiQuiz'>MultiQuiz</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/FlashCards'>
                      <FlashCards></FlashCards>
                    </Route>
                    <Route path='/Quiz'>
                        <Quiz></Quiz>
                    </Route>
                    <Route path='/AddQuestion'>
                        <AddQ></AddQ>
                    </Route>
                    <Route path='/MultiQuiz'>
                        <MultiQuiz></MultiQuiz>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
