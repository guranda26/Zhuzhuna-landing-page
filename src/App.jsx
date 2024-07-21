import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Cocktails from "./pages/Cocktails";
// import News from "./pages/News";
// import Wines from "./pages/Wines";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<MainPage />} />
        {/* <Route path="about" element={<AboutUs />} />
        <Route path="cocktail" element={<Cocktails />} />
        <Route path="news" element={<News />} />
        <Route path="wines" element={<Wines />} />
        <Route path="contact" /> */}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
