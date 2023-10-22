import likeBtn from "../assets/icons/heart.svg";
import playBtn from "../assets/icons/play.svg";
import ellipsisBtn from "../assets/icons/dots.svg";

const Buttons = () => {
  return (
    <div className="btn-container">
      <button type="button" id="like-btn" className="like btn">
        <img src={likeBtn} alt="like button" />
      </button>

      <button type="button" id="play-btn" className="play btn">
        <img src={playBtn} alt="play button" />
      </button>

      <button type="button" id="more-btn" className="ellipsis btn">
        <img src={ellipsisBtn} alt="more button" />
      </button>
    </div>
  )
}

export default Buttons;
