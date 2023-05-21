import Card from "../UI/Cards/Card";
import { cardStyle } from "../UI/Cards/Card.css";
import { buttonStyle, formStyle, inputStyle } from "./Form.css";

const Form = () => {
  return (
    <Card
      className={cardStyle.glass}
      style={{
        position: "fixed !important",
      }}
    >
      <form className={formStyle}>
        <input
          type="text"
          className={inputStyle}
          placeholder=" ✨ Make your note..."
        />
        <button className={buttonStyle}>Add</button>
      </form>
    </Card>
  );
};

export default Form;
