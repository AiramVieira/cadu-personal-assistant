import React from "react";
import "./Content.css";
import { EventEmitter } from "../../../utils/EventEmitter";
import Assistant from "../../../pages/assistant/Assistant";
import CustomSearch from "../../../pages/customSearch/CustomSearch";
import NotFound from "../../../pages/not-found/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";

function Content() {
  const baseClassName = "Content";
  EventEmitter.listen("opened-sidebar", (openedSidebar) => {
    const el = document.getElementById("content");
    if (el) {
      if (openedSidebar) {
        el.className = baseClassName + " opened-sidebar";
      } else {
        el.className = baseClassName;
      }
    }
  });

  return (
    <main className={baseClassName} id="content">
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="inicio" element={<Assistant />} />
        <Route path="busca" element={<CustomSearch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Content;
