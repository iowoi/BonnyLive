import React, { Component } from "react";
import { FrequencySelect, SkillLevelSelect, Select, CourtPriceSelect, CourtSizeSelect, AgeSelect, GroupPeopleNumberSeelct, ImageUploader, SubmitButton } from "../../component/Common";
import {Route} from "react-router-dom";
import Info from './Info';
import ActivityDetail from "../ActivityDetail";
import { Wrapper } from './styled';
import { FormControl } from "../Common";

class Myinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: '',
            courtName: '',
            courtAddress: ''
        };

        this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
        this.handleCourtNameChange = this.handleCourtNameChange.bind(this);
        this.handleCourtAddressChange = this.handleCourtAddressChange.bind(this);
    }

    handleGroupNameChange(e) {
        this.setState({ groupName: e.target.value });
    }

    handleCourtNameChange(e) {
        this.setState({ courtName: e.target.value });
    }

    handleCourtAddressChange(e) {
        this.setState({ courtAddress: e.target.value });
    }

    handleSubmit = (e) => {
        alert('submit value: ' + JSON.stringify(this.state))
        e.preventDefault();
    }

    render() {
        const { name, label, match } = this.props;

        return (
            <Wrapper>
                <Route path="/myInfo/activityDetail" component={ActivityDetail}/>
                <Route
                  exact
                  path={match.url}
                  component={Info}
                />
            </Wrapper>
        );
    }
}

export default Myinfo
