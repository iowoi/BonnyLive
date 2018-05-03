// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators,createStore, combineReducers, applyMiddleware  } from 'redux';
import { connect } from 'react-redux';
import {render} from "react-dom";
import ModalContent from "./ModalContent";
import {
    Modal,
} from "../Common";
import { fetchRegister } from '../../actions';
import Name from './NameInput';
import Email from './EmailInput';
import Phone from './PhoneInput';
import Password from './PasswordInput';
import AuthPassword from './AuthPasswordInput';
import JobSelect from './JobSelect';
import { SkillLevelSelect } from "../../component/Common";
import Hobby from './HobbyButton';
import Checkbox from './Checkbox';
import SubmitButton from './SubmitButton';
import { Wrapper } from './styled';
import { FormControl } from "../Common";
import type { RegisterProp } from '../definitions/TodoTypeDefinition.js';

class Register extends Component {

    render() {
        console.log(this)
        const { data, onSubmit } = this.props
       
        return [(
            <Wrapper>
                 <h1 className="title">會員註冊</h1>
                <form className="main-form" onSubmit={onSubmit}>
                    <Name />
                    <Email  />
                    <Phone />
                     <Password />
                     <AuthPassword />
                     <JobSelect />
                    <SkillLevelSelect />
                    <FormControl>
                        <Hobby/>
                    </FormControl>
                    <Checkbox />
                    <SubmitButton />
                    <span className="text">已擁有BonnyLIVE帳號?</span> 
                    <Link className="link" to="/Login" onClick={this.closeSideMenu}>我要登入</Link>
                </form>
              
            </Wrapper>
        )];
    }
}

const mapStateToProps = state => ({

});


const mapDispatchToProps = (dispatch) => ({
    onSubmit: () => {
        dispatch(fetchRegister);
        
    }
    
});


   

export default connect(mapStateToProps,mapDispatchToProps)(Register);
