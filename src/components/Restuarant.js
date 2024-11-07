import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "./../utils/useResturantMenu";
import ResturantCategory from "./RestuarantCategory";
//import { MENU_URL } from "../utils/constant";
const Restuarant = () => {
  //const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  const restInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

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
  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <ResturantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restuarant;
