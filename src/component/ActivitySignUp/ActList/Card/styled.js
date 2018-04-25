import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div `
  margin: 10px;
  padding-bottom: 10px;
  height: 90px;
  border-bottom: 1px solid #ccc;
  .act-img {
    width: 95px;
    height: 75px;
    object-fit: fill;
    background: #ccc;
    position: relative;
    float: left;
    overflow: hidden;
    margin: 10px 10px 0 0;
    .type {
      height: 20px;
      position: absolute;
      bottom: 0px;
      width: 100%;
      font-size: 10px;
      color: #fff;
      background: rgba(0, 0, 0, 0.6);
      text-align:center;
    }
  }
  .act-info {
    width: calc(100% - 100px);
    float: left;
    text-align: left;
    margin-right: -10px;
    margin-top: 5px;
    p {
      margin: 0 0 5px;
      font-size:12px;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      color: red;
    }
    small {
      display: block;
      font-size: 10px;
    }
    label {
      font-size: 10px;
      color: #666;
      font-weight: 300;
      display: block;
      float: right;
      width: 45px;
      text-align: center;
      padding: 1px 0px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin: 0px 2px 0;
    }
  }
  

`