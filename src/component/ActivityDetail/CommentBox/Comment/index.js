import React, { Component } from "react";
import { connect } from "react-redux";
import moment from 'moment';
import { Wrapper } from "./styled";
import { 
  fetchUser,
} from "../../../../actions";
import { RoundButton } from "../../../Common";

class Comment extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount(props) {
      this.props.dispatch(fetchUser(this.props.user, this.props.id))
    }
    
    shouldComponentUpdate(props) {
      if (props.fromObjID !== this.props.id) 
        return false
      return true
    }
/*  
    renderChildren() {
      const { 
        content,
        avatar
      } = this.props; 

      return [
        <div className="comment" key={0}>
          <img className="avatar" src={`${avatar}`} alt="user avatar" />
          <div className="content">
            <div>
              {content}
            </div>
          </div>
        </div>
      ]
    }
*/
    renderParent() {
      const { 
        id,
        user,
        userProfile,
        message,
        createdAt,
        comments,
        onClick
      } = this.props;
      const {
        name,
        avatar
      } = userProfile;
      const createdTime = moment.unix(createdAt/1000)
      
      return [
        <div className="comment" key={0}>
          <img className="avatar" src={`${avatar}`} alt="user avatar" />
          <div className="content-wrapper">
            <div className="user-block">
              <div>{name}</div>
              <div>{createdAt > 0? createdTime.format('YYYY/MM/DD HH:mm:ss') : ''}</div>
            </div>
            <div className="content">
              {message}
            </div>
          </div>
        </div>,
        <div className="reply" key={1}>
          { comments.map((comment, i) => <Comment key={i} isParent={false} {...comment} />) }
        </div>,
        <div className="reply-btn" key={2}>
          <RoundButton> 回覆 </RoundButton>
        </div>
      ]
    }

    render() {
      const { 
        isParent
      } = this.props; 
      
      return (
        <Wrapper className={`${!isParent? 'child-comment': 'parent-comment'}`}>
          { isParent? this.renderParent(): ''/*this.renderChildren()*/ }
        </Wrapper>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  const data = state.userReducer.user;
  const fromObjID = state.userReducer.fromObjID;
  if (data && fromObjID == ownProps.id ){
    return { userProfile: {name: data.name, avatar: data.avatar}, fromObjID }
  }

  return {...ownProps, fromObjID};
}



Comment.defaultProps = {
  id: 0,
  user: 0,
  userProfile: {
    name: "Name",
    avatar: "/assets/images/DefaultUserImg.png",
  },
  message: "",
  createdAt: 0,
  isParent: false,
  comments: [], //used to children comment
  onClick: () => {}
}

export default connect(mapStateToProps)(Comment);
