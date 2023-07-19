import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { Dashboard } from "@mui/icons-material";
import Library from "./pages/Library";
import WishList from "./pages/WishList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<Library />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
