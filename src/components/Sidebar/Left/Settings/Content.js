import React from 'react'
import { Nav } from 'react-bootstrap';
import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";
import "../../../CSS/userSettings/settings.css"

import Personal from './SettingComponents/Personal';
import Educational from './SettingComponents/Educational';
import Employment from './SettingComponents/Employment';
import Interest from './SettingComponents/Interest';
import Security from './SettingComponents/Security';
import Report from './SettingComponents/Report';

const Content = () => {
    return (
        <BrowserRouter>
        
            <div className="container">
                <div className="settingsBody">
                    <h1 className="settingsTitle border border-warning p-3 justify-content-space-between">Setting</h1>
                    <div className="row m-1">
                        <div className="col-sm-4 leftSettingsBody">
                            <Nav className="flex-column leftInnersettingsBody">
                                <Link className="leftInnersettingsBody" to="/setting/personal" style={{ textDecoration: 'none' }}>Personal</Link>
                                <Link className="leftInnersettingsBody" to="/setting/educational" style={{ textDecoration: 'none'}}>Educational</Link>
                                <Link className="leftInnersettingsBody" to="/setting/employment" style={{ textDecoration: 'none' }}>Employment</Link>
                                <Link className="leftInnersettingsBody" to="/setting/interest" style={{ textDecoration: 'none' }}>Interest</Link>
                                <Link className="leftInnersettingsBody" to="/setting/security" style={{ textDecoration: 'none' }}>Security</Link>
                                <Link className="leftInnersettingsBody" to="/setting/report" style={{ textDecoration: 'none' }}>Report</Link>
                            </Nav>
                        </div>
                        <div className="col-sm-8 bg-dark">
                           <Switch>
                               <Route exact path="/setting/personal">
                                   <Personal/>
                               </Route>
                               <Route exact path="/setting/educational">
                                   <Educational/>
                               </Route>
                               <Route exact path="/setting/employment">
                                   <Employment/>
                               </Route>
                               <Route exact path="/setting/interest">
                                   <Interest/>
                               </Route>
                               <Route exact path="/setting/security">
                                   <Security/>
                               </Route>
                               <Route exact path="/setting/report">
                                   <Report/>
                               </Route>
                               <Redirect to="/setting/personal" />
                           </Switch>
                        </div>
                    </div>   
                </div>
            </div>
           
        </BrowserRouter>
    )
}

export default Content
