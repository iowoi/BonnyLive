import React, { Component } from "react";
import { Wrapper } from "./styled";
import { FollowButton } from "../../../Common";

class MemberInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      const { 
        id,
        name,
        avatar,
        registrationTime, 
        registeredNumber, 
        isFollowing,
        onFollowClick
      } = this.props; 

      return (
        <Wrapper>
          <img className="avatar" src={`${avatar}`} alt="user avatar"/>
          <div className="user-info">
            <div>
              <div>{name}</div>
              <div>{`報名時間：${registrationTime} (${registeredNumber} 人)`}</div>
            </div>
            <FollowButton isFollowing={isFollowing} onClick={onFollowClick}/>
          </div>
        </Wrapper>
      )
    }
}

MemberInfo.defaultProps = {
  id: 0,
  name: "Name",
  avatar: "/assets/images/DefaultUserImg.png",
  registrationTime: "2018/4/18",
  registeredNumber: 0,
  isFollowing: false,
  onFollowClick: () => {}
}

export default MemberInfo;
