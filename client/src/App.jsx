import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import CreateQuoationPage from "./pages/CreateQuotation";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open state

  // Function to toggle the sidebar state (open/close)
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/make-quotation" element={<CreateQuoationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
