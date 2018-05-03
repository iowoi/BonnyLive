import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Buttons } from "./styled";
import Header from "../Header";
import MiddleContent from "../MiddleContent";

class Home extends Component {
    render() {
        const isIndex = this.props.location.pathname === "/";
        return (
            <Wrapper isIndex={isIndex}>
                <Header />{" "}
                {isIndex ? (
                    <Buttons>
                        <Link to="/activitySignUp" />
                        <Link to="/newGroup" />
                        <Link to="/newGroup" />
                        <Link to="/newGroup" />
                        <Link to="/newGroup">
                            <img src="/assets/images/liveButton.png" />
                        </Link>
                    </Buttons>
                ) : (
                    <MiddleContent />
                )}
            </Wrapper>
        );
    }
}

export default Home;
