import React from 'react';
import PropTypes from 'prop-types';

function Alert({ text, alertClasses, onAlert }) {
  return (
    <div className={alertClasses}>
      <h3>Invalid data</h3>
      <span>{text}</span>
      <button type="button" className="btn btn-block" onClick={onAlert}>
        Ok
      </button>
    </div>
  );
}

export default Alert;

Alert.defaultProps = {
  text: "Can't display alert message - sth gone wrong",
  alertClasses: 'alert-container',
  onAlert: null,
};

Alert.propTypes = {
  text: PropTypes.string,
  alertClasses: PropTypes.string,
  onAlert: PropTypes.func,
};
