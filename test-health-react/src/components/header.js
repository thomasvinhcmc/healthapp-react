import React from "react";

import "../styles/web1280topmy-page.css";
import { Logo } from "./logo";
import { useHistory } from "react-router-dom";

export const BtnTakeNote = (props) => {
  let history = useHistory();
  return (
    <div
      className="web1280topmy-page-navimemo"
      onClick={() => history.push("/my-record")}
    >
      <img
        src="/playground_assets/image49i133-hv2f-200h.png"
        alt="IMAGE49I133"
        className="web1280topmy-page-image491"
      />
      <div className="web1280topmy-page-iconmemo">
        <img
          src="/playground_assets/image47i133-9b5-200h.png"
          alt="IMAGE47I133"
          className="web1280topmy-page-image471"
        />
        <div className="web1280topmy-page-frame139">
          <img
            src="/playground_assets/svg43i133-0b3.svg"
            alt="SVG43I133"
            className="web1280topmy-page-svg43"
          />
          <img
            src="/playground_assets/svg44i133-jzu.svg"
            alt="SVG44I133"
            className="web1280topmy-page-svg44"
          />
          <img
            src="/playground_assets/image12i133-sct9-200h.png"
            alt="IMAGE12I133"
            className="web1280topmy-page-image12"
          />
          <img
            src="/playground_assets/image13i133-gbn8-200h.png"
            alt="IMAGE13I133"
            className="web1280topmy-page-image13"
          />
          <img
            src="/playground_assets/image14i133-2rlo-200h.png"
            alt="IMAGE14I133"
            className="web1280topmy-page-image14"
          />
          <img
            src="/playground_assets/svg45i133-nr4j.svg"
            alt="SVG45I133"
            className="web1280topmy-page-svg45"
          />
        </div>
      </div>
      <span className="web1280topmy-page-text69">
        <span>自分の記録</span>
      </span>
    </div>
  );
};

export const BtnMenu = (props) => {
    return (
      <div className="web1280topmy-page-iconmenu">
        <img
          src="/playground_assets/image50i133-8r5w-200h.png"
          alt="IMAGE50I133"
          className="web1280topmy-page-image501"
        />
        <img
          src="/playground_assets/svg4i133-8y1r.svg"
          alt="SVG4I133"
          className="web1280topmy-page-svg4"
        />
        <img
          src="/playground_assets/svg5i133-798.svg"
          alt="SVG5I133"
          className="web1280topmy-page-svg5"
        />
        <img
          src="/playground_assets/svg6i133-3sk.svg"
          alt="SVG6I133"
          className="web1280topmy-page-svg6"
        />
      </div>
    );
};

export const PageHeader = (props) => {
  return (
    <div className="web1280topmy-page-header">
      <img
        src="/playground_assets/image16i133-0miv-200h.png"
        alt="IMAGE16I133"
        className="web1280topmy-page-image16"
      />
      <Logo />
      <BtnMenu/>
      <BtnTakeNote />
      <div className="web1280topmy-page-navimemo1">
        <img
          src="/playground_assets/image49i133-4ipv-200h.png"
          alt="IMAGE49I133"
          className="web1280topmy-page-image492"
        />
        <div className="web1280topmy-page-iconchallenge">
          <img
            src="/playground_assets/image48i133-2ki-200h.png"
            alt="IMAGE48I133"
            className="web1280topmy-page-image481"
          />
          <img
            src="/playground_assets/svg25i133-bqei.svg"
            alt="SVG25I133"
            className="web1280topmy-page-svg25"
          />
        </div>
        <span className="web1280topmy-page-text71">
          <span>チャレンジ</span>
        </span>
      </div>
      <div className="web1280topmy-page-navimemo2">
        <img
          src="/playground_assets/image49i133-jcaa-200h.png"
          alt="IMAGE49I133"
          className="web1280topmy-page-image493"
        />
        <div className="web1280topmy-page-iconinfo">
          <img
            src="/playground_assets/image49i133-ed7-200h.png"
            alt="IMAGE49I133"
            className="web1280topmy-page-image494"
          />
          <img
            src="/playground_assets/svg30i133-3hyr.svg"
            alt="SVG30I133"
            className="web1280topmy-page-svg30"
          />
        </div>
        <span className="web1280topmy-page-text73">
          <span>お知らせ</span>
        </span>
        <div className="web1280topmy-page-infocount">
          <img
            src="/playground_assets/image6i133-irs8-200h.png"
            alt="IMAGE6I133"
            className="web1280topmy-page-image6"
          />
          <div className="web1280topmy-page-frame-clippinggroup">
            <span className="web1280topmy-page-text75">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
