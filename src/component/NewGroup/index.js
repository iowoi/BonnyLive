import React, { Component } from "react";
import { FrequencySelect, SkillLevelSelect, Select, CourtPriceSelect, CourtSizeSelect, AgeSelect, GroupPeopleNumberSeelct, ImageUploader, SubmitButton } from "../../component/Common";
import Banner from './Banner';
import GroupNameInput from './GroupNameInput';
import CourtFeatures from "./CourtFeatures";
import CourtName from "./CourtName";
import CourtAddress from "./CourtAddress";
import TimeForPlay from "./TimeForPlay";
import { Wrapper } from './styled';
import { FormControl } from "../Common";

class NewGroup extends Component {
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
        const { name, label } = this.props;

        return (
            <Wrapper>
                <Banner />
                <form onSubmit={this.handleSubmit} className="main-form">
                    <GroupNameInput />
                    <GroupPeopleNumberSeelct />
                    <TimeForPlay />
                    <FrequencySelect />
                    <CourtName />
                    <CourtAddress />
                    <SkillLevelSelect />
                    <CourtPriceSelect />
                    <CourtSizeSelect />
                    <AgeSelect />
                    <div className="image-uploader-section">
                        <ImageUploader />
                        {/* TODO form-control should used like this not before */}
                    </div>
                    <FormControl>
                        <CourtFeatures />
                    </FormControl>
                    <SubmitButton />
                </form>
            </Wrapper>
        );
    }
}

export default NewGroup
