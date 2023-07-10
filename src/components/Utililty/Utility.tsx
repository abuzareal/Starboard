import Card from "./../UI/Cards/Card";
import { cardStyle } from "./../UI/Cards/Card.css";
import { untilStyle } from "./Utility.css";

const Utility = (props: any) => {
  return (
    <div>
      <Card className={`${cardStyle.glass} ${untilStyle}`}>
        {props.children}
      </Card>
    </div>
  );
};

export default Utility;
