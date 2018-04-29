// @flow

import React, { Component } from "react";
import { bindActionCreators,createStore, combineReducers, applyMiddleware  } from 'redux';
import { connect,Provider } from 'react-redux';
import {render} from "react-dom";

import { FecthRegister } from '../../actions/registerActions';
import Name from './NameInput';
import Email from './EmailInput';
import Phone from './PhoneInput';
import Password from './PasswordInput';
import AuthPassword from './AuthPasswordInput';
import JobSelect from './JobSelect';
import { SkillLevelSelect } from "../../component/Common";
import Hobby from './HobbyButton';
import SubmitButton from './SubmitButton';
import { Wrapper } from './styled';
import { FormControl } from "../Common";
import * as reducers from '../../reducers';
import type { RegisterProp } from '../definitions/TodoTypeDefinition.js';
import { FetchUserRegister} from '../../middlewares';

         

   // @reducer
   const reducer = combineReducers({
    ...reducers
 })
 
     // @store
     const store = createStore(reducer,applyMiddleware(FetchUserRegister));
     store.dispatch(FecthRegister()) 

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name : ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

     componentDidMount(){
        //this.mapDispatchToProps();
  }



        // 準備綁定用的DispatchToProps方法，
        // 只需要FecthRegister這個方法
          mapDispatchToProps = (dispatch) =>(
             bindActionCreators({ FecthRegister }, dispatch)
         )
    
   // onChange 事件處理函示
//   handleChange(event) {
//     // event.target 是當前的 DOM elment
//     // 從 event.target.Name 取得 Name 剛輸入的值
//     // 將 user 輸入的值更新回 state
//     this.setState({Name: event.target.Name});
//   }

handleClick(event) {
    alert('Name');
    this.setState({ Name: event.target.Name });
}

        
 
     handleSubmit = (event) => {
        this.setState({ Name: event.target.Name });
         this.mapDispatchToProps();
         alert('Submit ' + this.state.Name);
         event.preventDefault();
     }

    render() {
        const { name, label } = this.props;

        return (
            <Provider store={store}>
            <Wrapper>
                <form onSubmit={this.handleSubmit} className="main-form">
                    <h1 className="title">會員註冊</h1>
                    <Name />
                    <Email />
                    <Phone />
                     <Password />
                     <AuthPassword />
                     <JobSelect />
                    <SkillLevelSelect />
                    <FormControl>
                        <Hobby />
                    </FormControl>
                    <SubmitButton /> 
                </form>
            </Wrapper>
            </Provider>
        );
    }


}



export default Register
