import { useContext } from "react";
import "./Tabs.css";
import { Context } from "./TabsPage";

export default function Tabs(props) {
  const { tabs, activeTab, setActiveTab } = props;
  const ActiveComponent = tabs[activeTab].component;
  const { fields } = tabs[activeTab];
  const { handleSubmit } = useContext(Context);

  const handleNext = () => {
    setActiveTab((currentTab) => currentTab + 1);
  };

  const handlePrev = () => {
    setActiveTab((currentTab) => currentTab - 1);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div key={index} className="tab" onClick={() => setActiveTab(index)}>
            <h1
              className={
                "tab-label" + (activeTab === index ? " font-bold" : "")
              }
            >
              {tab.label}
            </h1>
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveComponent fields={fields} tabIndex={activeTab} />
      </div>
      <div className="buttons">
        {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}
