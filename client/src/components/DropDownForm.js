import React from "react";

function DropDownForm({contents, title}) {
  return (
    <select className="form-control form-control-lg">
      <option>{title}</option>
      {
          contents.map(element => (
                <option value={element}>{element}</option>
            ))
      }
    </select>
  );
}

export default DropDownForm;
