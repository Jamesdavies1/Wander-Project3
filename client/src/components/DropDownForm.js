import React from "react";

function DropDownForm({ contents, title, onChange }) {
  return (
    <select
      className="form-control form-control-lg add-walk-form-one"
      required
      onChange={e => onChange(e.target.value)}
    >
      <option>{title}</option>
      {contents.map(element => (
        <option key={element} value={element}>
          {element}
        </option>
      ))}
    </select>
  );
}

export default DropDownForm;
