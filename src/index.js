import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import {Redirect, Route, Router, Switch} from "react-router";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import createBrowserHistory from "history/createBrowserHistory";
import Login from "././components/Login/Login";
import Home from "./features/Home";
import App from "./App"
import Signup from "./components/Signup/Signup";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Title from './components/Title/Title'
import Profile from './components/Profile/Profile'
import Workspace from './components/Workspace/Workspace'


const muiTheme = getMuiTheme({
    appBar: {
        color: "#37517E",
        height: 50
    },
});

injectTapEventPlugin();

const customHistory = createBrowserHistory();
const Root = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
<div>
<div className="off-canvas-wrapper">
<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
<div className="off-canvas-content" data-off-canvas-content>
<Title />
<Header />
</div>
</div>
</div>


        <Router history={customHistory}>
            <div>
            <Switch>
                
                <Route path="/workspace" component={Workspace}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/home" component={Home}/>
                <Redirect from="/" to="/login"/>
            </Switch>
            </div>
        </Router>
        <hr />
        <Footer />
        </div>
    </MuiThemeProvider>
);
ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
