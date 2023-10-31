import "../css/addField.css"
import AddFieldProps from "../interfaces/addFieldProps";
const AddField: React.FC<AddFieldProps> = ({onClick}) => {

  return (
    <div>
        <button className='field' onClick={onClick}>
            Add Field
        </button>
    </div>
  );
};

export default AddField;
