import { Routes, Route, Navigate } from "react-router-dom";

export default (
  <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="help" element={<h1>Help</h1>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
