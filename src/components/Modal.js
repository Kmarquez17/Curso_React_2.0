import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Modal.css';

const Modal = props => {
	if (!props.modalIsOpen) {
		return null;
	}

	return (
		<div>
			{ReactDOM.createPortal(
				<div className="Modal">
					<div className="Modal__container">
						<button onClick={props.onCloseModal} className="Modal__close-button ">
							X
						</button>
						{props.children}
					</div>
				</div>,
				document.getElementById('modal')
			)}
		</div>
	);
};

export default Modal;
