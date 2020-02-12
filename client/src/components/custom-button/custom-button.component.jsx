import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isFacebookSignIn, ...otherProps}) => (
    <button className={`${isFacebookSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;