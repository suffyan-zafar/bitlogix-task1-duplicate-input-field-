import { ChangeEventHandler, FC, FunctionComponent, useState } from "react";
import "../css/textField.css"

interface TextField {
  val: string,
  onChange: any
}

const TextField:FC<TextField> = ({val, onChange}) => {

  return (
    <div>
      <input value={val} onChange={(e) => onChange(e.target.value)} type="text" placeholder="enter text" className="inpt" />
    </div>
  );
};

export default TextField;
