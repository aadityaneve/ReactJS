import React from 'react';
import styles from './Form.module.css'

const Form = ({ onSubmit, children, title }) => {
    return (
        <div>
            <form className={styles.myForm} onSubmit={onSubmit}>
                <h3>{title}</h3>
                {children}
                <div>
                    <input type="submit"  />
                </div>
            </form>
        </div>
    );
};

export default Form;
