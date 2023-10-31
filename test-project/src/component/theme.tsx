import "../css/theme.css"
import ThemeProps from "../interfaces/themeProps";
const Theme:React.FC<ThemeProps> = ({onClick, isTheme}) => {

  return (
    <div>
        <button className='field2' onClick={onClick} style={{backgroundColor: isTheme ? "white" :"black" , color:isTheme?"black": "white"}}>
         {isTheme ? "Light Theme" : "Dark Theme"}
        </button>
    </div>
  );
};

export default Theme;
