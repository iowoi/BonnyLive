import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div `
    background: #a5a5a5;
    color: #fff;
    font-size: 12px;
    padding: 10px 5px;

    .btn {
        color: #fff;
        width: 50px;
        padding: 0;
    }

    .date>div {
        display: inline-block;
    }

    .date input {
        width: 85px;
        height: 30px;
    }

    .date select {
        margin-left: 5px;
        height: 30px;
    }

    .input-button {
        margin: 0 7px;
    }

    .input-button input {
        width: 100px;
        height: 30px;
    }

    .search-info {
        margin-top: 10px;
    }

    .search-info, .loc {
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .loc img,
    .loc span,
    .input-button,
    .btn {
        display: flex;
    }

    .loc img {
        height: 15px;
        margin-right: 5px;
    }

`
