import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    background: #a5a5a5;
    color: #fff;
    font-size: 12px;
    padding: 10px 5px;

    .btn {
        color: #fff;
        width: 55px;
        padding: 0;
        background: none;
        border: none;
    }

    .date > div {
        display: inline-block;
        width: calc(42.5% - 32.5px);
        margin: 0 5px;
    }

    .date {
        input {
            width: calc(100% - 12px);
            height: 30px;
            padding: 0 5px;
        }
        .select {
            width: 15%;
            select {
                height: 32px;
                width: 100%;
                position: relative;
                top: -2px;
            }
        }
    }

    .input-button {
        margin: 0 7px;
        width: calc(100% - 150px);
        input {
            width: calc(100% - 70px);
            height: 30px;
        }
    }
    .search-info {
        margin-top: 8px;
    }
    .search-info,
    .loc {
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
`;
