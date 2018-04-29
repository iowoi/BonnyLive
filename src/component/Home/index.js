import React, {Component} from "react";
import {Wrapper} from './styled'
import Header from "../Header";
import MiddleContent from "../MiddleContent";

class Home extends Component {
    render() {
        const isIndex = this.props.location.pathname === '/'
        return (
            <Wrapper isIndex={isIndex}>
                <Header/> {isIndex
                    ? <div>Home</div>
                    : <MiddleContent/>
}
            </Wrapper>
        );
    }
}

export default Home;