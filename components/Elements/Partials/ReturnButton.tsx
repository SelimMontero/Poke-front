import style from "./ReturnButton.module.scss";
import Link from "next/link";

const ReturnButton = () => {
  return (
    <div>
      <Link href="/home">
        <button className={style.return_button} />
      </Link>
    </div>
  );
};

export default ReturnButton;
