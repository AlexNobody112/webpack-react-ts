import React, { Suspense } from "react";
import "./styles/index.scss";
import { classNames } from "../shared/lib/heplers/classNames";
import { useTheme } from "./providers/ThemeProviders";
import { AppRouter } from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;