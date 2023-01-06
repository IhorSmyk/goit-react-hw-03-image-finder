import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
const modalContainer = document.getElementById('modal');
// import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleEscapePress);
  };
  componentWillUnmount = () => {
    window.removeEventListener('ketdown', this.handleEscapePress);
  };

  handleBackdropClick = e => {
    if (e.current.target === e.target) {
      this.props.onCloseModal();
    }
  };

  handleEscapePress = e => {
    if (e.key === 'Escape') {
      this.ptops.onCloseModal();
    }
  };

  render() {
    const jsx = (
      <>
        <div className={s.overlay}>
          <div className={s.modal}>
            <img src={this.props.link} alt={this.props.tags} />
          </div>
        </div>
      </>
    );

    return createPortal(jsx, modalContainer);
  }
}
export default Modal;
