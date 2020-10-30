import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/landing'
import teacherList from './pages/teacher list'
import teacherForm from './pages/Teacher Form'


function Routes() {
    return (
        <BrowserRouter>

        <Route path="/" exact component={Landing} />
        <Route path="/study" component={teacherList} />
        <Route path="/give-classes" component={teacherForm} />

        </BrowserRouter>
    )

}

export default Routes