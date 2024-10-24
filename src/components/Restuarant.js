import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "./../utils/useResturantMenu";
//import { MENU_URL } from "../utils/constant";
const Restuarant = () => {
  //const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  const  restInfo  = useResturantMenu(resId);
  console.log("resInfo", restInfo);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL + resId);

  //   const json = await data.json();
  //   setRestInfo(json.data);
  //   console.log(json.data);
  // };
  if (restInfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwoMessage, sla } =
    restInfo.cards[2]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[4].card.card;
  console.log(itemCards);
  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} -{" Rs. "}
            {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restuarant;
