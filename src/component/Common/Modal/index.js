import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { LeftButton, RightButton, Buttons } from "./styled";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "320px",
        borderRadius: "20px",
        maxHeight: "calc(92vh - 197px)",
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.25)"
        }
    }
};

export default class ModalBox extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        console.log("afterOpenModal");
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        const {
            btnClass,
            btnText,
            modalContent,
            title,
            onClick,
            btnTheme
        } = this.props;
        return [
            <button onClick={this.openModal} className={btnClass} key="0">
                {btnText}
            </button>,
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                key="1"
            >
                <h2 style={{ textAlign: "center" }}>{title}</h2>
                {modalContent}
                {btnTheme === "two" ? (
                    <Buttons>
                        <LeftButton onClick={this.props.onClick}>
                            送出
                        </LeftButton>
                        <RightButton onClick={this.closeModal}>
                            取消
                        </RightButton>
                    </Buttons>
                ) : (
                    <button onClick={this.closeModal}>取消</button>
                )}
            </Modal>
        ];
    }
}

ModalBox.defaultProps = {
    title: null,
    btnClass: null,
    btnText: null,
    btnTheme: "two",
    modalContent: null,
    onSubmit: () => {}
};
