import React from "react";

function DropDownForm({contents, title, onChange}) {
  console.log("title " + title + " onChange " + onChange)
  return (
    <select className="form-control form-control-lg" onChange={(e) => onChange(e.target.value)}>
      <option>{title}</option>
      {
          contents.map(element => (
                <option key={element} value={element}>{element}</option>
            ))
      }
    </select>
  );
}

export default DropDownForm;
