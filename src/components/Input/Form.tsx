import Card from "../UI/Cards/Card";
import { cardStyle } from "../UI/Cards/Card.css";
import { buttonStyle, formStyle, hoverStyle, inputStyle } from "./Form.css";
import { BsRocketTakeoffFill } from "react-icons/bs";
const Form = (props: any) => {
 

  return (
    <Card className={` ${cardStyle.glass} ${hoverStyle}`}>
      <form className={formStyle} onSubmit={props.submitHandler}>
        <input
          type="text"
          className={inputStyle}
          placeholder="✨ Make your note..."
          onChange={props.changeHandler}
          value={props.item}
        />
        <button className={buttonStyle}>
          <BsRocketTakeoffFill />
        </button>
      </form>
      {/* {error && <p>{error}</p>} */}
    </Card>
  );
};

export default Form;
