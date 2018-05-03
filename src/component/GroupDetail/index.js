import React, { Component } from "react";
import { SubmitButton } from "../../component/Common";
import Banner from './Banner';
import Information from './Information';
import { Wrapper } from './styled';
import { FormControl } from "../Common";
import { connect } from "react-redux";
import { createGroup, getGroupDetail } from "../../actions";
import moment from 'moment'
import CommentBox from "../ActivityDetail/CommentBox";

class GroupDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    componentDidMount() {
        this.props.getGroupDetail()
    }

    handleOnChange = (element, e) => {
        if (element == "frequency") {
            if (e.target.value !== "") {
                var frequency = { type: e.target.value, values: 1 }
                this.setState({ frequency: frequency })
            } else {
                this.setState({ frequency: {} })
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

    handleClick = () => { }

    render() {
        const { name, label, levels } = this.props;

        return (
            <Wrapper>
                <Banner />
                <form onSubmit={this.handleSubmit} className="main-form">
                    <Information information={this.props.information} />
                    <br />  
                    <SubmitButton text={"我要報名"} onClick={this.handleClick} />
                </form>
                <CommentBox />
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        information: state.groupDetailReducer.information
    }
};

const mapDispatchToProps = ({
    onSubmit: createGroup,
    getGroupDetail: getGroupDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);