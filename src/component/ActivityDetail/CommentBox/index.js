import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./styled"
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { RefreshButton } from "../../Common";
import { 
  fetchAllComments,
  fetchPostComment
} from "../../../actions";

class CommentBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      }
    }

    componentDidMount(props) {
    }

    componentDidUpdate(props) {
      let { onInit, chatroom } = this.props;
      
      if (Object.keys(props.chatroom).length === 0 && Object.keys(this.props.chatroom).length !== 0 ) {
        onInit(chatroom.id);
      }
    }

    chooseTypes(chatroom) {
      let { activity, lesson, id } = chatroom
      if (activity !== null) {
        return {type: 'activity', id: activity}
      } else if (lesson !== null) {
        return {type: 'lesson', id: lesson}
      } else {
        return {type: 'chatroom', id: id}
      }
    }
    
    onChange(e) {
      this.setState({
        message: e.target.value
      });
    }
    
    onSubmit(e) {
      let { chatroom } = this.props;
      let { type, id } = this.chooseTypes(chatroom)
      this.props.onSubmit(id, type, this.state.message)
    }

    render() {
        let { comments, chatroom } = this.props;
        
        return (
            <Wrapper>
              <div className="comment-header-wrapper">
                <div className="comment-header">
                  <div className="comment-count">
                    留言：({comments.length})
                  </div>
                  <RefreshButton />
                </div>
                <CommentForm {...(this.chooseTypes(chatroom))} onClick={(e) => this.onSubmit(e)} onChange={(e) => this.onChange(e)}/>
              </div>
              <div className="comments">
                { comments.map((comment, i) => <Comment key={i} isParent={true} {...comment} />) }
              </div>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
  const data = state.commentReducer.chatroom_data;
  const comments = data.reply;
  return { comments }
}

const mapDispatchToProps = (dispatch) => ({
  onInit: (chatroom_id) => {
    dispatch(fetchAllComments(chatroom_id))
  },
  onSubmit: (id, type, message) => {
    dispatch(fetchPostComment(id, type, message))
  }
})

CommentBox.defaultProps = {
  chatroom: {},
  comments: []
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
