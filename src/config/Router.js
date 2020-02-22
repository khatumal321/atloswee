import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Serviceareas, Faq, SuccessStories, Getanoffer} from './../pages/index/index'

export default class BasicRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                {/* <Route  path='/Serviceareas' component={Serviceareas} />
                <Route path='/Faq' component={Faq} />
                <Route path='/SuccessStories' component={SuccessStories} />
                <Route path='/Getanoffer' component={Getanoffer} /> */}
            </Router>
        )
    }
}