import { MENU_URL } from "./constant";
import { useEffect, useState } from "react";
const useResturantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    setRestInfo(json.data);
    console.log(json.data);
  };
  return restInfo;
};

export default useResturantMenu;
