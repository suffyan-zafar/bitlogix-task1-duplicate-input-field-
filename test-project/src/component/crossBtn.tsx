import "../css/crossBtn.css"
import CrossBtnProps from "../interfaces/crossBtnProps";
const CrossBtn:React.FC<CrossBtnProps> = ({onClick}) => {
  return (
    <div>
     <button className="btn" onClick={onClick}>X</button>
    </div>
  );
};

export default CrossBtn;
