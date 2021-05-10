import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Like.module.scss";

const Like = ({ likeState = false, handleLike = () => {} }) => {
  const handleLikeButton = () => {
    return (likeState = !likeState);
  };

  return (
    <div className={style.like_style} onClick={handleLike}>
      {likeState ? (
        <FontAwesomeIcon icon={faThumbsUp} color="blue" />
      ) : (
        <FontAwesomeIcon icon={faThumbsUp} />
      )}
    </div>
  );
};

export default Like;
