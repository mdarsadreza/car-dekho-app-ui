import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recommendation from "./pages/Recommendation";
import Compare from "./pages/Compare";
import Cars from "./pages/Cars";
import History from "./pages/History";
import NotFound from "./pages/NotFound";
// import Reviews from "./pages/Reviews";
import AddReview from "./pages/AddReview";
import Contact from "./pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recommendations" element={<Recommendation />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/history" element={<History />} />
      {/* <Route path="/reviews" element={<Reviews />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/add-review" element={<AddReview />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;