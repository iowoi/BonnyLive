import React, { Component } from "react";
import { Wrapper } from './styled'

class SocialSummary extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Wrapper>
              <div className="social-item">
                <img src="/assets/icons/SocialPeople.png" alt="people count"/>
                <span> {this.props.peopleCount} 個報名 </span>
              </div>
              <div className="social-item">
                <img src="/assets/icons/SocialMessage.png" alt="comments count"/>
                <span> {this.props.commentCount} 筆留言 </span>
              </div>
              <div className="social-item">
                <span> {this.props.followCount} 人追蹤 </span>
              </div>
              <div className="social-item">
                <span> {this.props.view} 人看過 </span>
              </div>
            </Wrapper>
        );
    }
}

SocialSummary.defaultProps = {
  peopleCount: 3,
  commentCount: 2,
  followCount: 6,
  view: 1687
}

export default SocialSummary;
