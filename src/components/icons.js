import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faMagnifyingGlass,faLocationCrosshairs,faUser,} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const icons = [
  <FontAwesomeIcon icon={faBars} key="1" size="lg" />,
  <FontAwesomeIcon icon={faMagnifyingGlass} key="2" size="lg" />,
  <FontAwesomeIcon icon={faLocationCrosshairs} key="3" size="lg" />,
  <FontAwesomeIcon icon={faUser} key="4" size="lg" />,
  <FontAwesomeIcon icon={faFacebook} key="5" size="lg" />

];

export default icons;
