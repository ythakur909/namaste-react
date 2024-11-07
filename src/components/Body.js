import ResCard, { withPromoterLabel } from "./Card";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestuarant, setListOfRestuarant] = useState([]);
  const [listOfFilteredRestuarant, setListOfFilteredRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestuarantWithPromoter = withPromoterLabel(ResCard);
  console.log("listofres", listOfRestuarant);
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
  const onlineStatus = useOnlineStatus();
  const { loggedIn, setUserName } = useContext(UserContext);

  console.log("check", loggedIn);
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection!
      </h1>
    );
  }
  return listOfRestuarant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-cont">
          <input
            type="text"
            className="search-box border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn px-2"
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
          className="filter-btn px-4"
          onClick={() => {
            const filteredresList = listOfRestuarant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestuarant(filteredresList);
          }}
        >
          Top Rated Restuarant
        </button>
        <label>UserName : </label>
        <input
          className="px-4 border border-black"
          value={loggedIn}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="res-container">
        {listOfFilteredRestuarant.map((restuarant) => (
          <Link
            to={"/restuarant/" + restuarant.info.id}
            key={restuarant.info.id}
          >
            {restuarant.info.promoted ? (
              <RestuarantWithPromoter resData={restuarant} />
            ) : (
              <ResCard resData={restuarant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
