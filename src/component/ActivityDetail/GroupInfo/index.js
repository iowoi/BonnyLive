import React, { Component } from "react";
import { Wrapper } from "./styled";
import MemberInfo from './MemberInfo';
import { RoundButton } from "../../Common";
import { Buttons } from "../Buttons"

class GroupInfo extends Component {
    constructor(props) {
        super(props)
    }

    renderRegisteredMembers() {
      const { joinedPeople } = this.props
      return joinedPeople.map((person, i) => (
          <div className="registeredMember" key={i}>
            <MemberInfo />
            <Buttons className="btn-group">
              <RoundButton>talk</RoundButton>
              <RoundButton>請假/取消</RoundButton>
              <RoundButton className={ `red ${person.isPaid? 'active': ''}`}>未付款</RoundButton>
            </Buttons>
          </div>
        )
      );
    }

    render() {
      return (
        <Wrapper>
          <div className="info-title">
            已報名人員：{this.props.joinedPeople.length} / {this.props.peopleNumber}
          </div>
          {this.renderRegisteredMembers()}
        </Wrapper>
      )
    }
}

GroupInfo.defaultProps = {
  joinedPeople: [
      {
        id: 0,
        name: "Name",
        avatar: "/assets/images/DefaultUserImg.png",
        registrationTime: "2018/4/18",
        registeredNumber: 0,
        isPaid: false,
        isFollowing: false,
      }
    ],
  peopleNumber: 0
}

export default GroupInfo;
