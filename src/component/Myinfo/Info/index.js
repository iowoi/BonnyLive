import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styled";
import Banner from '../Banner';

export default class Info extends Component {

    render() {
        const { onclick } = this.props;
        return [
      <Banner key={0}/>,
    <Wrapper key={1}>
      <div className='div'>
          <Link className='text'  to="/Register" onClick={this.closeSideMenu}><img className="img" src="./assets/icons/arrowJoin.png"  alt=""  /> 個人資料 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/myInfo/activityDetail" onClick={this.closeSideMenu}><img className="img" src="./assets/icons/arrowJoin.png"  alt=""  /> 我的開團 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/Register" onClick={this.closeSideMenu}><img className="img" src="./assets/icons/arrowJoin.png"  alt=""  /> 我的報隊 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/Register" onClick={this.closeSideMenu}><img className="img" src="./assets/icons/arrowJoin.png"  alt=""  /> 我的聊天訊息 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/Register" onClick={this.closeSideMenu}><img className="img" src="./assets/icons/arrowJoin.png"  alt=""  /> 我的通知 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/Register" onClick={this.closeSideMenu}><img className="img" src="./assets/icons/arrowJoin.png"  alt=""  /> 我的追蹤 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/Login" onClick={this.closeSideMenu}><img className="img" src="./assets/icons/arrowJoin.png"  alt=""  /> 登出 </Link>
          <hr className='hr'/>
      </div>
    </Wrapper>
        ];
    }
}
