import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActivity } from "../../actions";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import ActList from "./ActList";

class ActivitySignUp extends Component {
    render() {
        const { data, onSubmit } = this.props
        return [
            <Banner key="0" />, 
            <SearchBar key="1" onSubmit={onSubmit}/>, 
            <ActList key="2" data={data}/>
        ];
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    data: state.data
});


const mapDispatchToProps = ({
    onSubmit: fetchActivity
});


export default connect(mapStateToProps,mapDispatchToProps)(ActivitySignUp);
