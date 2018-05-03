import React, { Component } from "react";
import { Wrapper } from "./styled";
import { Button } from "../../Common";

class ShareButton extends Component {
    HOST = 'http://www.bonny-badminton.com';
    constructor(props) {
        super(props)
    }
    
    render() {
      const { url, onClick } = this.props;
      return (
          <Wrapper>
            <div> {`${this.HOST}/${url}`} </div>
            <Button className='btn' onClick={onClick}>
              複製報名連結(可貼至其他平台方便報名)
            </Button>
          </Wrapper>
      );
    }
}

ShareButton.defaultProps = {
  url: "x3hid2",
  onClick: () => {}
}

export default ShareButton;
