import "./ItemBox.css";
import { useContext } from "react";
import { PageContext } from "../context/context";

function ItemBox({ itm }) {
  const value = useContext(PageContext);

  function handleItemSelect() {
    value.setSelectInfo(itm);
    // value.setPage('SelectItem');
    value.navigate("/SelectItem");
  }

  return (
    <>
      <div className="Item_div" onClick={handleItemSelect}>
        <img src={itm.image} className="ItemBox_img" alt=""></img>
        <p className="p_name">{itm.name}</p>
        <p className="p1"> $ {itm.price}</p>
      </div>
    </>
  );
}

export default ItemBox;
