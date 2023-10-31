import "../css/crossBtn.css"

const CrossBtn = ({onClick}) => {
  return (
    <div>
     <button className="btn" onClick={onClick}>X</button>
    </div>
  );
};

export default CrossBtn;
