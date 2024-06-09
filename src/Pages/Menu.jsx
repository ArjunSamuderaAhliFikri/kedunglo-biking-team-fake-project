import { useState } from "react";
import HeadingHome from "../components/Fragments/Heading-Home";
import BioUser from "../components/Fragments/Bio-User";
import Menu from "../components/Fragments/Menu";
import ContainerDarkMode from "../Context/DarkModeContext";
export default function App() {
  return (
    <>
      <ContainerDarkMode>
        <HeadingHome />
        <BioUser />
        <Menu />
      </ContainerDarkMode>
    </>
  );
}
