import React, { Fragment, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import LanguageContext from "../../context/language";
// import { changeLanguage } from "../../store/actions/language";

const LocationSwitcher = () => {
  const { contextLang, setContextLang } = useContext(LanguageContext);
  // const lang = useSelector((state) => state.language.currentLang);

  // const dispatch = useDispatch();

  // const changeLang = () => {
  //   dispatch(changeLanguage(lang === "ar" ? "en" : "ar"));
  // };
  return (
    <Fragment>
      <div className="container-fluid d-flex">
        <p className="text-capitalize fs-5 me-4" style={{ color: "white" }}>
          {" "}
          your current language : {contextLang}{" "}
        </p>
        <div
          className="btn  btn-outline-secondary"
          style={{ lineHeight: "32px" }}
          onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
        >
          toogle lang{" "}
        </div>
      </div>
    </Fragment>
  );
};

export default LocationSwitcher;
