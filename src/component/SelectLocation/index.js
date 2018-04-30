import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./styled";

class SelectLocation extends Component {
    componentDidMount() {
        this.props.getBannerList();
    }
    render() {
        const { data } = this.props;
        return (
            <Wrapper>
                <img src="/assets/images/TaipeiBanner.jpg" />
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    data: state.data
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLocation);
