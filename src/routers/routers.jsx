import React, { useEffect, useState } from "react"; // Импортируйте React
import { createBrowserRouter } from "react-router-dom"; // Убедитесь, что импортируете правильно
import Home from "../page/home/Home";
// import Delivery from "../pages/delivery/Delivery";
// import About from "../pages/about/About";
import Return_policy from "../page/return_policy/Return_policy";
import Deteils from "../page/deteils/Deteils";
// import Electronic_certificate from "../pages/electronic_certificate/Electronic_certificate";
import { Navigate } from "react-router-dom";
import Contacts from "../page/contacts/Contacts";
import LayoutWrapper from "../global/LayoutWrapper";
import Delivery from "../page/delivery/Delivery";
import Certificate from "../page/certificate/Certificate";
import PrivacyPolicy from "../page/PrivacyPolicy/PrivacyPolicy";
// import NotFound from "../pages/notfound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutWrapper>
        <Home />
      </LayoutWrapper>
    ),
  },
  {
    path: "/privacy/policy", // динамический маршрут
    element: (
      <LayoutWrapper>
        <PrivacyPolicy />
      </LayoutWrapper>
    ), // Исправлено имя компонента
  },
  {
    path: "/returnpolicy", // динамический маршрут
    element: (
      <LayoutWrapper>
        <Return_policy />
      </LayoutWrapper>
    ), // Исправлено имя компонента
  },
  {
    path: "/deteils", // динамический маршрут
    element: (
      <LayoutWrapper>
        <Deteils />
      </LayoutWrapper>
    ), // Исправлено имя компонента
  },
  {
    path: "/certificate", // динамический маршрут
    element: (
      <LayoutWrapper>
        <Certificate />
      </LayoutWrapper>
    ), // Исправлено имя компонента
  },
  {
    path: "/contacts", // динамический маршрут
    element: (
      <LayoutWrapper>
        <Contacts />
      </LayoutWrapper>
    ), // Исправлено имя компонента
  },
  {
    path: "/delivery", // динамический маршрут
    element: (
      <LayoutWrapper>
        <Delivery />
      </LayoutWrapper>
    ), // Исправлено имя компонента
  },
  //   {
  //     path: "*",
  //     element: (
  //       <LayoutWrapper>
  //         <NotFound />
  //       </LayoutWrapper>
  //     ),
  //   },
]);
