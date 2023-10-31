import "../css/theme.css";
import ThemeProps from "../interfaces/themeProps";
interface HOCProps{
    cmp: React.FC<ThemeProps>;
    onClick:()=> void
    isTheme:boolean
  }
const HOC:React.FC<HOCProps> = ({cmp:Theme,onClick,isTheme}) => {
  return (
    <div>
        <Theme onClick={onClick} isTheme={isTheme}/>
    </div>
  );
};

export default HOC;
