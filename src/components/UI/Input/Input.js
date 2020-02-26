import React from "react";

import styles from "./Input.module.css";

const Input = props => {
  let inputElement = null;
  const inputClasses = [styles.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.Invalid);
  }

  switch (props.elementtype) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = <textarea className={styles.InputElement} {...props} />;
      break;
    case "select":
      inputElement = (
        <select
          className={styles.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementconfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input className={styles.InputElement} {...props} />;
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
