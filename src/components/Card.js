import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withPromoterLabel = (Restuarant) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <ResCard {...props}/>
      </div>
    );
  };
};

export default ResCard;
