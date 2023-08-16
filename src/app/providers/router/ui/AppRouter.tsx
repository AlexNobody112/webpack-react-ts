import React, { Suspense } from "react";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
          return (
            <Route
              key={path}
              element={<div className="page-wrapper">{element}</div>}
              path={path}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};
