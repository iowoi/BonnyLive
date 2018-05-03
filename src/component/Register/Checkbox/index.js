import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ModalContent from "../ModalContent";
import CapitalProtection from "../CapitalProtection";
import { Wrapper } from './styled';

export default ({ Phone, handlePhoneChange }) => (
    <Wrapper>
        <div>
        <label>
<input type="checkbox" check="checked" value="Bike"  />
 <span className="cktext"> 我同意接受來自Bonny的好康及訊息</span>
        </label>
        </div>
        <div>
        <label>
<input type="checkbox" check="checked" value="Bike"  />  
<span className="cktext">我已閱讀並接受《
<Link className="cktext" to="/Login" onClick={this.closeSideMenu}>個資保護聲明</Link>
》</span> 
{/* <Modal
                        title="進階搜尋"
                        btnClass="btn"
                        btnText="進階搜尋"
                        onClick={onSubmit}
                        modalContent={<ModalContent />}
                    /> */}
        </label>
        </div>
   
        </Wrapper>
);


