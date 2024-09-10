import ResCard from "./Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestuarant, setListOfRestuarant] = useState([]);
  const [listOfFilteredRestuarant, setListOfFilteredRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.2733352&lng=75.6522066&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestuarant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfFilteredRestuarant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestuarant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-cont">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestuarent = listOfRestuarant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfFilteredRestuarant(filteredRestuarent);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredresList = listOfRestuarant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestuarant(filteredresList);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {listOfFilteredRestuarant.map((restuarant) => (
          <Link
            to={"/restuarant/" + restuarant.info.id}
            key={restuarant.info.id}
          >
            <ResCard resData={restuarant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
