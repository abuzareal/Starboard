import Card from "../UI/Cards/Card";
import { cardStyle } from "../UI/Cards/Card.css";
import { buttonStyle, formStyle, hoverStyle, inputStyle } from "./Form.css";
import { BsRocketTakeoffFill } from "react-icons/bs";

const Form = () => {
  return (
    <Card className={` ${cardStyle.glass} ${hoverStyle}`}>
      <form className={formStyle}>
        <input
          type="text"
          className={inputStyle}
          placeholder=" ✨ Make your note..."
        />
        <button className={buttonStyle}>
          <BsRocketTakeoffFill />
        </button>
      </form>
    </Card>
  );
};

export default Form;
