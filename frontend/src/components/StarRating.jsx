import { assets } from "../assets/assets";

const StarRating = ({ rating /* 0‑5, integer */ }) => (
  <>
    {Array.from({ length: 5 }, (_, i) => (
      <img
        key={i}
        src={i < rating ? assets.star_icon : assets.star_dull_icon}
        alt={i < rating ? "filled star" : "empty star"}
        className="w-3 5"
      />
    ))}
  </>
);

export default StarRating;
