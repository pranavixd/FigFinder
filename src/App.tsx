import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DashboardOptionsSelect from "./pages/DashboardOptionsSelect";
import Dashboard from "./pages/Dashboard";
import DashboardOptions from "./pages/DashboardOptions";
import Select from "./pages/Select";
import Messages3 from "./pages/Messages3";
import Messages from "./pages/Messages";
import Selct from "./pages/Selct";
import Messages2 from "./pages/Messages2";
import Messages1 from "./pages/Messages1";
import Groups from "./pages/Groups";
import Calender from "./pages/Calender";
import Select1 from "./pages/Select1";

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
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-options":
        title = "";
        metaDescription = "";
        break;
      case "/select-2":
        title = "";
        metaDescription = "";
        break;
      case "/messages-4":
        title = "";
        metaDescription = "";
        break;
      case "/messages":
        title = "";
        metaDescription = "";
        break;
      case "/selct-3":
        title = "";
        metaDescription = "";
        break;
      case "/messages-3":
        title = "";
        metaDescription = "";
        break;
      case "/messages-2":
        title = "";
        metaDescription = "";
        break;
      case "/groups":
        title = "";
        metaDescription = "";
        break;
      case "/calender":
        title = "";
        metaDescription = "";
        break;
      case "/select-4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DashboardOptionsSelect />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard-options" element={<DashboardOptions />} />
      <Route path="/select-2" element={<Select />} />
      <Route path="/messages-4" element={<Messages3 />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/selct-3" element={<Selct />} />
      <Route path="/messages-3" element={<Messages2 />} />
      <Route path="/messages-2" element={<Messages1 />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/select-4" element={<Select1 />} />
    </Routes>
  );
}
export default App;
