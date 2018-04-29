import React, { Component } from "react";
import Account from './AccountInput';
import Password from './LoginPasswordInput';
import { SkillLevelSelect } from "../../component/Common";
import ThirdParty from './ThirdPartyButton';
import SubmitButton from './SubmitButton';
import RememberMe from './RememberMeClick';
import { Wrapper } from './styled';
import { FormControl } from "../Common";

class NewGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            MobilePhone: '',
            Password: '',
            AuthPassword:''
        };

        // this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
        // this.handleCourtNameChange = this.handleCourtNameChange.bind(this);
        // this.handleCourtAddressChange = this.handleCourtAddressChange.bind(this);
    }

    // handleGroupNameChange(e) {
    //     this.setState({ groupName: e.target.value });
    // }

    // handleCourtNameChange(e) {
    //     this.setState({ courtName: e.target.value });
    // }

    // handleCourtAddressChange(e) {
    //     this.setState({ courtAddress: e.target.value });
    // }

    handleSubmit = (e) => {
        alert('submit value: ' + JSON.stringify(this.state))
        e.preventDefault();
    }

    render() {
        const { name, label } = this.props;

        return (
            <Wrapper>
                <form onSubmit={this.handleSubmit} className="main-form">
                    <h1 class="title">我要登入</h1>
                    <Account />
                    <Password />
                    <SubmitButton />
                    <FormControl>
                        <ThirdParty />
                    </FormControl>
                </form>
                <RememberMe /> 
            </Wrapper>

        );
    }
}

export default NewGroup
