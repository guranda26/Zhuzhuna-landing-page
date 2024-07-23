import { Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
