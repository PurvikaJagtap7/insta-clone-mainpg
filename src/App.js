import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import InstaMainPage from "./pages/InstaMainPage";
import InstaMessages from "./pages/InstaMessages";
import InstaSearch from "./pages/InstaSearch";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/insta-messages":
        title = "";
        metaDescription = "";
        break;
      case "/insta-search":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<InstaMainPage />} />
      <Route path="/insta-messages" element={<InstaMessages />} />
      <Route path="/insta-search" element={<InstaSearch />} />
    </Routes>
  );
}
export default App;
