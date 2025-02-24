import { useReducer, useState } from "react";
import { createContext } from "react";
import Tabs from "./Tabs";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const Context = createContext();

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const profileFields = [
    {
      type: "text",
      id: "name",
      label: "Name",
      placeholder: "Enter Name",
    },
    {
      type: "number",
      label: "Age",
      id: "age",
      placeholder: "Enter Age",
    },
    {
      type: "text",
      id: "email",
      label: "Email",
      placeholder: "Enter Email",
    },
  ];

  const interestsFields = [
    {
      type: "text",
      id: "hobby",
      label: "Hobby",
      placeholder: "Enter Hobby",
    },
  ];

  const settingsFields = [
    {
      type: "password",
      id: "password",
      label: "Password",
      placeholder: "Enter Password",
    },
  ];

  const tabs = [
    {
      label: "Profile",
      component: Profile,
      fields: profileFields,
    },
    {
      label: "Interests",
      component: Interests,
      fields: interestsFields,
    },
    {
      label: "Settings",
      component: Settings,
      fields: settingsFields,
    },
  ];

  const constructFormValues = () => {
    return tabs.map((tab) => {
      return (
        tab?.fields?.reduce(
          (acc, curr) => ({
            ...acc,
            [curr.id]: "",
          }),
          {}
        ) || []
      );
    });
  };

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "updateFieldValue":
        return updateFieldValue(state, action);
      default:
        throw new Error("No action matched !");
    }
  };

  const updateFieldValue = (state, action) => {
    const { tabIndex, id, value } = action.payload;
    let newState = structuredClone(state);
    newState[tabIndex][id] = value;
    return newState;
  };

  const [state, dispatch] = useReducer(reducerFunction, constructFormValues());

  const handleSubmit = () => {
    // make api call
    console.log("form submitted and state is ", { state });
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <Context.Provider
        value={{
          state,
          dispatch,
          handleSubmit,
        }}
      >
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </Context.Provider>
    </div>
  );
}

export { Context };
