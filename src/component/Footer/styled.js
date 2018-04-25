import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div `
    padding: 17.5px 0;
    background: #DA263C;
    z-index:2;
    position: relative;   
    .nav {
        width: 530px;
        margin: 0 auto;
        a {
            width: calc(20% - 1px);
            display: inline-block;
            text-align: center;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            border-right: 1px solid #fff;
            padding-top: 43px;
            text-decoration: none;
            color: #fff;
            position: relative;
            &:last-child {
                border-right: none;
            }
            img {
                margin: 0 auto;
                position: absolute;
                left: 50%;
                margin: -53px 0 0 -28px;
            }
        }
    }
`