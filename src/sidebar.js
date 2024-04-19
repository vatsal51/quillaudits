import React from "react";

const Sidebar = ({ files, onSelectFile }) => {
  const renderFiles = (items) => {
    return items.map((item) => {
      if (item.isFolder) {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            {renderFiles(item.items)}
          </div>
        );
      } else {
        return (
          <button key={item.id} onClick={() => onSelectFile(item)}>
            {item.name}
          </button>
        );
      }
    });
  };

  return (
    <div className="sidebar">
      <h2>Files</h2>
      {renderFiles(files)}
    </div>
  );
};

export default Sidebar;
