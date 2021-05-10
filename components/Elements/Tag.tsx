import style from "./Tag.module.scss";
import { capitalize } from "../../helpers";

const Tag = ({ name }) => {
  return (
    <span className={style.tag + " " + style[name]}>{capitalize(name)}</span>
  );
};

export default Tag;
