import { useEffect, useState } from "react";
import "./FileExplorerPage.css";
import AddModal from "./AddModal";

export default function FileExplorerPage() {
  const [items, setItems] = useState([]);

  const [showAddModal, setShowAddModal] = useState(false);

  const [activeAddItem, setShowActiveAddItem] = useState("");

  const fetchItems = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
      if (!response.ok) {
        throw new Error("Failed to fetch data.json");
      }
      const json = await response.json();
      setItems(json.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleItem = (id, elements, action, addItem) => {
    if (elements && elements?.length > 0) {
      const searchId = id?.[0];
      const nextSearchIds = id?.slice(1, id.length);
      return elements.map((element, index) => {
        if (index === parseInt(searchId)) {
          if (nextSearchIds?.length > 0) {
            return {
              ...element,
              items: handleItem(nextSearchIds, element.items, action, addItem),
            };
          }
          switch (action) {
            case "expand":
              return {
                ...element,
                isExpanded: !element.isExpanded,
              };
            case "delete":
              return undefined;
            case "add":
              return {
                ...element,
                items: [
                  ...element.items,
                  {
                    name: addItem.name,
                    type: addItem.type,
                    id: activeAddItem + element.items.length,
                    items: [],
                  },
                ],
              };
          }
        }
        return element;
      });
    }
    return;
  };

  const constructItems = (elements) => {
    return elements.map((element) => {
      if (element) {
        if (element.type === "folder") {
          return (
            <div
              className="item"
              key={element.id}
              onClick={(e) => {
                e.stopPropagation();
                setItems(handleItem(element.id, items, "expand"));
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {!element?.isExpanded && <span>{"+ " + element.name}</span>}
                {element?.isExpanded && <span>{"- " + element.name}</span>}
                <span>
                  <img
                    className="action-btn"
                    src="https://www.shutterstock.com/image-vector/create-folder-symbol-design-modern-600nw-2550739939.jpg"
                    alt="plus"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowActiveAddItem(element.id);
                      setShowAddModal(true);
                    }}
                  />
                </span>
                <span>
                  <img
                    className="action-btn-delete"
                    src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png"
                    alt="delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      setItems(handleItem(element.id, items, "delete"));
                    }}
                  />
                </span>
              </div>
              {element.items && element.items.length > 0 && element.isExpanded
                ? constructItems(element.items)
                : ""}
            </div>
          );
        } else {
          return (
            <div
              className="item"
              key={element.id}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {". " + element.name}
                <span>
                  <img
                    className="action-btn-delete"
                    src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png"
                    alt="delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      setItems(handleItem(element.id, items, "delete"));
                    }}
                  />
                </span>
              </div>
            </div>
          );
        }
      }
    });
  };

  const handleAddItemSubmit = (addItem) => {
    setShowAddModal(false);
    setItems(handleItem(activeAddItem, items, "add", addItem));
  };

  const renderedItems = constructItems(items);

  return (
    <div className="App">
      {renderedItems}
      {showAddModal && (
        <AddModal
          setShowAddModal={setShowAddModal}
          handleAddItemSubmit={handleAddItemSubmit}
        />
      )}
    </div>
  );
}
