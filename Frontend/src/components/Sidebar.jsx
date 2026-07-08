import React, { useState } from "react";
import "./Sidebar.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const sections = ["Categories", "Size", "Material", "Color", "State"];

function Sidebar() {
  const [open, setOpen] = useState(null);
  const [price, setPrice] = useState(5000);

  const toggle = (s) => {
    setOpen(open === s ? null : s);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-card">
        <div className="sidebar-header" onClick={() => toggle("Categories")}>
          <span>Categories</span>
          {open === "Categories" ? <FiChevronUp /> : <FiChevronDown />}
        </div>

        {open === "Categories" && (
          <div className="sidebar-content">
            <label>
              <input type="checkbox" />
              Handicrafts
            </label>
            <label>
              <input type="checkbox" />
              Jewellery
            </label>
            <label>
              <input type="checkbox" />
              Paintings
            </label>
            <label>
              <input type="checkbox" />
              Textiles
            </label>
          </div>
        )}
      </div>

      <div className="sidebar-card">
        <div className="sidebar-header">
          <span>Price Range</span>
        </div>

        <div className="sidebar-content">
          <input
            type="range"
            min="120"
            max="5000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <div className="price-boxes">
            <input value="120" readOnly />
            <input value={price} readOnly />
          </div>
        </div>
      </div>

      {sections.slice(1).map((section) => (
        <div className="sidebar-card" key={section}>
          <div
            className="sidebar-header"
            onClick={() => toggle(section)}
          >
            <span>{section}</span>
            {open === section ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          {open === section && (
            <div className="sidebar-content">
              <label>
                <input type="checkbox" /> Option 1
              </label>
              <label>
                <input type="checkbox" /> Option 2
              </label>
              <label>
                <input type="checkbox" /> Option 3
              </label>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
