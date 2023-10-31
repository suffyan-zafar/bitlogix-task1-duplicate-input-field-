import "../css/addField.css"
const AddField = ({onClick}) => {

  return (
    <div>
        <button className='field' onClick={onClick}>
            Add Field
        </button>
    </div>
  );
};

export default AddField;
