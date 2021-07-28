import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' id={label} onChange={handleChange} {...otherProps}/>
        {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} htmlFor={label}>{label}</label> : null}
    </div>
);

export default FormInput;
