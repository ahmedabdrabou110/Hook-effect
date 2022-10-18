import React from 'react';
import styles from "./Input.module.css";

const Input = props =>{
  return (
    <div
          className={`${styles.control} ${
            props.isvalid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
  )
}

export default Input ;