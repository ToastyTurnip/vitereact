import React, { useState } from 'react';

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

//   const selected = <style><style/>

  return (
    <div>
      <div className="tabsparent">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="viewing-window">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default TabComponent;
