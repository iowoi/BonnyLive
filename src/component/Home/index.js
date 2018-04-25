import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MainWrapper, Wrapper} from './styled'
import ActivitySignUp from "../ActivitySignUp";
import Login from "../Login";
import Register from "../Register";
import NewGroup from "../NewGroup";
import Header from "../Header";
import Footer from "../Footer";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routeChange: null
        }
        this.props.history.listen((location, action) => {
            this.setState({
                routeChange: action 
            })
        });
    }

    render() {
        const isIndex = this.props.location.pathname === '/'
        const { routeChange } = this.state
        return (
            <MainWrapper isIndex={isIndex}>
                <Header routeChange={routeChange}/> 
                    {isIndex ? <div>Home</div>: [
                        <Wrapper key="0">
                            <Route path="/activitySignUp" component={ActivitySignUp}/>
                            <Route path="/newGroup" component={NewGroup}/>
                            <Route path="/Login" component={Login}/>
                            <Route path="/Register" component={Register}/>
                        </Wrapper>,
                        <Footer key="1"/> 
                        ]
                    }
            </MainWrapper>
        );
    }
}

export default Home;