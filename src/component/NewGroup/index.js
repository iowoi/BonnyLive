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
import { connect } from "react-redux";
import { createGroup, getLevels } from "../../actions";
import moment from 'moment'

class NewGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group_name: '',
            people: 1,
            dateForPlay: moment(),
            timeForPlay: "0:00",
            frequency: {
                type: "",
                value: ""
            },
            place_name: '',
            address: '',
            badminton_level: 1,
            fee: 0,
            place_count: 1,
            age_min: 20,
            age_max: 60,
            tag: [],
            city: '',
            area: "",
            start: 1523577600
        };
    }

    componentDidMount() {
        this.props.getLevels()
    }

    handleOnChange = (element, e) => {
        if (element == "frequency") {
            if (e.target.value !== "") {
                var frequency = {type:e.target.value, values: 1}
                this.setState({ frequency: frequency })
            }else{
                this.setState({ frequency: {}})
            }
        }
        else {
            this.setState({ [element]: e.target.value })
        }
    }

    handleSubmit = (e) => {
        console.log(this.state)
        this.props.onSubmit(this.state);
        e.preventDefault();
    }

    handleAddFeature = (text) => {
        this.setState({ tag: [...this.state.tag, text] })
    }

    handleRemoveFeature = (text) => {
        this.setState({ tag: this.state.tag.filter(x => x !== text) })
    }


    render() {
        const { name, label, levels } = this.props;

        return (
            <Wrapper>
                <Banner />
                <form onSubmit={this.handleSubmit} className="main-form">
                    <GroupNameInput value={this.state.group_name} onChange={(e) => this.handleOnChange("group_name", e)} />
                    <GroupPeopleNumberSeelct value={this.state.people} onChange={(e) => this.handleOnChange("people", e)} />
                    <TimeForPlay
                        date={this.state.dateForPlay}
                        time={this.state.timeForPlay}
                        onDateChange={(e) => this.handleOnChange("dateForPlay", e)}
                        onTimeChange={(e) => this.handleOnChange("timeForPlay", e)} />
                    <FrequencySelect value={this.state.frequency} onChange={(e) => this.handleOnChange("frequency", e)} />
                    <CourtName value={this.state.place_name} onChange={(e) => this.handleOnChange("place_name", e)} />
                    <CourtAddress value={this.state.address} onChange={(e) => this.handleOnChange("address", e)} />
                    <SkillLevelSelect levels={this.props.levels} value={this.state.badminton_level} onChange={(e) => this.handleOnChange("badminton_level", e)} />
                    <CourtPriceSelect value={this.state.fee} onChange={(e) => this.handleOnChange("fee", e)} />
                    <CourtSizeSelect value={this.state.place_count} onChange={(e) => this.handleOnChange("place_count", e)} />
                    <AgeSelect label={"球友年齡"} value={this.state.age_min} onChange={(e) => this.handleOnChange("age_min", e)} />
                    <AgeSelect value={this.state.age_max} onChange={(e) => this.handleOnChange("age_max", e)} />
                    <FormControl>
                        <ImageUploader />
                    </FormControl>
                    <FormControl>
                        <CourtFeatures features={this.state.tag} addFeature={this.handleAddFeature} removeFeature={this.handleRemoveFeature} />
                    </FormControl>
                    <br />
                    <SubmitButton />
                </form>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        levels: state.newGorupReducer.levels
    }
};

const mapDispatchToProps = ({
    onSubmit: createGroup,
    getLevels: getLevels,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGroup);