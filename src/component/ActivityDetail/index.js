import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllHostActivityData, fetchUpdateActivityData } from "../../actions";
import RoundButton from "../Common/RoundButton";
import Modal from "../Common/Modal";
import { Wrapper } from './styled'
import Banner from "./Banner";
import { Buttons } from "./Buttons";
import SocialSummary from "./SocialSummary";
import ActivityContent from "./ActivityContent";
import GroupInfo from "./GroupInfo";
import InviteButton from "./InviteButton";
import ShareButton from "./ShareButton";
import CommentBox from "./CommentBox";

class ActivityDetail extends Component {
    constructor(props) {
      super(props);
      props.onInit();
    }
    
    onCancelClick(id) {
      this.props.onCancelGroup(id)
    }

    render() {
        const {
          id,
          summary,
          content,
          buttonEvents,
          chatroom
        } = this.props
        return (
            <Wrapper>
                <Banner />
                <SocialSummary {...summary} />
                <ActivityContent {...content}/>
                <Buttons>
                    <RoundButton> 編輯開團資訊 </RoundButton>
                </Buttons>
                <Buttons>
                    <Modal 
                      title='報名截止'
                      btnClass='modal-btn'
                      btnText='報名截止'
                      onClick={(id) => this.onCancelClick(id)} />
                    <Modal 
                      title='取消開團'
                      btnClass='modal-btn'
                      btnText='取消開團'
                      onClick={() => this.onCancelClick(id)} />
                </Buttons>
                <hr />
                <GroupInfo />
                <InviteButton input={{placeholder: '請輸入Email或帳號直接手動報名'}}/>
                <ShareButton />
                <hr />
                <Buttons>
                    <RoundButton> 再次開團? </RoundButton>
                </Buttons>
                <Buttons>
                    <RoundButton> 一日內不再提醒 </RoundButton>
                    <RoundButton> 暫不開團並取消提醒 </RoundButton>
                </Buttons>
                <CommentBox chatroom={chatroom}/>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
  const data = state.myInfoReducer.activity_data;
  const id = data.id,
        summary = {
          view: data.view
        }, 
        content = {
          createdAt: data.createdAt,
          groupName: data.group_name,
          people: data.people,
          start: data.start,
          placeName: data.place_name,
          address: data.address,
          badmintonLevel: data.badminton_level,
          fee: data.fee,
          placeCount: data.place_count,
          tag: data.tag
        },
        chatroom = data.chatroom;

  return {id, summary, content, chatroom}
}

const mapDispatchToProps = (dispatch) => ({
  onInit: () => {
    dispatch(fetchAllHostActivityData())
  },
  onCancelGroup: (id) => {
    dispatch(fetchUpdateActivityData(id, {status: 0}))
  }
})

ActivityDetail.defaultProps = {
  summary: {
    peopleCount: 0,
    commentCount: 0,
    followCount: 0,
    view: 0
  },
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetail);
