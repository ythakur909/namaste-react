import { useState } from "react";
import ItemCards from "./ItemsCard";

const ResturantCategory = (props) => {
  console.log(props);
  const resDetail = props.data;
  const showItem = props.showItems;
  const setShowIndex = props.setShowIndex;
  console.log(showItem);
  //const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    // setShowItem(!showItem);
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {resDetail.title}({resDetail.itemCards.length})
          </span>

          <span>&#x2304;</span>
        </div>
        {showItem && <ItemCards items={resDetail.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
