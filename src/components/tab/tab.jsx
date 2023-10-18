import React, { useState, createContext, useContext } from "react";
import "./tab.css";
//the name of this context will be DataContext
const DataContext = createContext({});

function Tab({ id, children }) {
  const [activeTabID, setActiveTabID] = useContext(DataContext);
  return (
    <div>
      <button
        className={id == activeTabID ? "active" : ""}
        onClick={() => setActiveTabID(id)}
      >
        {children}
      </button>
    </div>
  );
}
function Tabs({ children }) {
  return <div className="tab">{children}</div>;
}
function TabPanel({ whenActive, children }) {
  const [activeTabID] = useContext(DataContext);
  return (
    <div
      className="tabcontent"
      style={{ display: activeTabID == whenActive ? "block" : "none" }}
    >
      {children}
    </div>
  );
}

function TabSwitcher({ activeTab, children }) {
  const [activeTabID, setActiveTabID] = useState(activeTab);
  return (
    <DataContext.Provider value={[activeTabID, setActiveTabID]}>
      {children}
    </DataContext.Provider>
  );
}

export default TabSwitcher;
export { Tabs, Tab, TabPanel };
