import React, { Component } from "react";
import { Wrapper, HamburgerIcon, SideNav } from "./styled";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false
        };
    }
    openSideMenu = () => {
        this.setState({ toggleMenu: true });
    };
    closeSideMenu = () => {
        this.setState({ toggleMenu: false });
    };
    componentWillReceiveProps(nextProps){
        this.setState({ toggleMenu: !this.state.toggleMenu });
    }
    render() {
        const { toggleMenu } = this.state;
        
        return (
            <Wrapper>
                <nav className="navbar">
                    <span className="open-slide">
                        <a
                            href="#"
                            onClick={
                                !toggleMenu
                                    ? this.openSideMenu
                                    : this.closeSideMenu
                            }
                        >
                            <HamburgerIcon
                                className={!toggleMenu ? "" : "active"}
                            >
                                <span className="line line-1" />
                                <span className="line line-2" />
                                <span className="line line-3" />
                            </HamburgerIcon>
                        </a>
                    </span>
                    <Link to="/">
                        <img src="./assets/images/logo.png" className="logo" />
                    </Link>
                    <a className="more">更多運動 +</a>
                </nav>
                <SideNav toggleMenu={toggleMenu}>
                    <Link to="/activitySignUp">
                        <img src="./assets/icons/SignUpMenu.png" alt="" />
                        臨打報名
                    </Link>
                    <Link to="/newGroup">
                        <img src="./assets/icons/GroupMenu.png" alt="" />
                        開團找我
                    </Link>
                    <Link to="/newGroup">
                        <img src="./assets/icons/KnowHowMenu.png" alt="" />
                        羽球知識家
                    </Link>
                    <Link to="/activitySignUp">
                        <img src="./assets/icons/HotLiveMenu.png" alt="" />
                        Live 直播
                    </Link>
                    <Link to="/activitySignUp">
                        <img src="./assets/icons/outfitMenu.png" alt="" />
                        配備推薦
                    </Link>
                    <Link to="/activitySignUp">
                        <img src="./assets/icons/MyBonnyMenu.png" alt="" />
                        My Bonny
                    </Link>
                    <Link to="/activitySignUp">
                        <img src="./assets/icons/LogoutMenu.png" alt="" />
                        會員登出
                    </Link>
                </SideNav>
            </Wrapper>
        );
    }
}

export default Header;
