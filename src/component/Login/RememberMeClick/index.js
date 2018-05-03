import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from './styled';

export default ({ Phone, handlePhoneChange }) => (
    <Wrapper>
        <div>
        <label>
<input type="checkbox" check="checked" value="Bike"  />
 <span className="cktext">記住我</span>
 <span className="Forget">忘記密碼?</span>
        </label>
        </div>

        </Wrapper>
);


