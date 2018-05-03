import React, {Component} from "react";
import {Wrapper} from './styled';
import {Link} from 'react-router-dom';

class Footer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Wrapper>
                <div className="nav">
                    <Link to="/activitySignUp">
                        <img src="/assets/icons/SignUpMenu.png" alt=""/>
                        臨打報名</Link>
                    <Link to="/newGroup">
                        <img src="/assets/icons/GroupMenu.png" alt=""/>
                        開團找我</Link>
                    <Link to="/newGroup">
                        <img src="/assets/icons/KnowHowMenu.png" alt=""/>
                        羽球知識家</Link>
                    <Link to="/activitySignUp">
                        <img src="/assets/icons/HotLiveMenu.png" alt=""/>
                        Live 直播</Link>
                    <Link to="/myInfo">
                        <img src="/assets/icons/MyBonnyMenu.png" alt=""/>
                        My Bonny</Link>
                </div>
            </Wrapper>
        )
    }
}

export default Footer;
