import React, { useEffect,useState } from "react";
import "./index.css";

export default function ComboBox({
  items,
  dropDownwidth = "400px",
  selectColor = "#bbb",
  selected,
  onSelect,
  placeHolder = "Please select an item",
}) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [isHovering, setIsHovering] = useState(0);
  const [isHoveringBox, setIsHoveringBox] = useState(false);
  const [filterData, setfilterData] = useState([]);
  const [searchValue,setSearchValue]=useState("")    
  useEffect(()=>{
    setfilterData(items?.filter((item) => item.title.includes(searchValue)));
  },[searchValue])
  
  return (
    <div style={{ width: dropDownwidth }}>
      <div
        style={{
          border: `${openDropDown ? "1px solid #aaa" : "1px solid #666"}`,
          borderRadius: "4px",
        }}
        className="dropDownSelect"        
      >
        <div
          style={{ margin: "10px 5px 10px 20px" }}
          onMouseEnter={() => setIsHoveringBox(true)}
          onMouseLeave={() => setIsHoveringBox(false)}
        >
          <span style={{ display: isHoveringBox ? "block" : "none" }}>
            <input    
            value={searchValue}
              style={{ border: "none", width:"90%"}}              
              type="text"              
              placeholder="select your option ..."
              onChange={({target})=>setSearchValue(target.value)}
              onClick={() => setOpenDropDown(true)}
            />            
            <span style={{ float: "right" }}>
            <i className="fa fa-close" style={{marginRight:"5px"}} onClick={()=>{setSearchValue("");setOpenDropDown(true)}}></i>
            <i className={`${openDropDown?"fa fa-angle-up":"fa fa-angle-down"}`} onClick={() => setOpenDropDown((cur) => !cur)}></i>
            </span>
          </span>
          <span style={{ display: isHoveringBox ? "none" : "block" }}>
            {selected ? selected.title : placeHolder}                        
            <i style={{ float: "right" }} className={`${openDropDown?"fa fa-angle-up":"fa fa-angle-down"}`} onClick={() => setOpenDropDown((cur) => !cur)}></i>
          </span>    
        </div>
      </div>
      <div
        className="dropDownList"
        style={{
          width: dropDownwidth,
          display: `${openDropDown ? "block" : "none"}`,
        }}
      >
        {filterData.length>0 ? (
          filterData.map((item, index) => (
            <div key={index} className="dropDown">
              <button
                style={{
                  width: dropDownwidth,
                  backgroundColor: isHovering == index ? selectColor : "#eee",                  
                }}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(0)}
                onClick={() => {
                  onSelect(item);
                  setOpenDropDown(false);
                  setSearchValue(item.title);
                }}
              >
                {item.title}
              </button>
            </div>
          ))
        ) : (
          <div>No Options</div>
        )}
      </div>
    </div>
  );
}
