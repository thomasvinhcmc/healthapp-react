import React from "react";

import "../styles/web1280topmy-page.css";
// import { routeToMyRecord } from "../utils/router";
import { useHistory } from "react-router-dom"

export const Logo = (props) => {
    let history = useHistory();
    return (
        <div className="web1280topmy-page-logo" onClick={() => history.push("/")}>
            <img
              src="/playground_assets/image46i133-l2gh-200h.png"
              alt="IMAGE46I133"
              className="web1280topmy-page-image461"
            />
            <div className="web1280topmy-page-frame138">
              <img
                src="/playground_assets/svg82i133-9em.svg"
                alt="SVG82I133"
                className="web1280topmy-page-svg82"
              />
              <img
                src="/playground_assets/svg83i133-6vcf.svg"
                alt="SVG83I133"
                className="web1280topmy-page-svg83"
              />
              <img
                src="/playground_assets/svg84i133-4y6b.svg"
                alt="SVG84I133"
                className="web1280topmy-page-svg84"
              />
              <img
                src="/playground_assets/image45i133-w84e-200w.png"
                alt="IMAGE45I133"
                className="web1280topmy-page-image451"
              />
              <img
                src="/playground_assets/svg85i133-7pz.svg"
                alt="SVG85I133"
                className="web1280topmy-page-svg85"
              />
              <img
                src="/playground_assets/svg86i133-ircj.svg"
                alt="SVG86I133"
                className="web1280topmy-page-svg86"
              />
              <img
                src="/playground_assets/svg87i133-tvsp.svg"
                alt="SVG87I133"
                className="web1280topmy-page-svg87"
              />
            </div>
        </div>
    )
}
