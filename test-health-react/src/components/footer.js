import React from "react";

import "../styles/web128-column.css";

export const PageFooter = (props) => {
  return (
    <div className="web128-column-footer" style={{top: props.top}} >
      <img
        src="/playground_assets/image18i166-aik-200h.png"
        alt="IMAGE18I166"
        className="web128-column-image18"
      />
      <span className="web128-column-text76">
        <span>会員登録</span>
      </span>
      <span className="web128-column-text78">
        <span>運営会社</span>
      </span>
      <span className="web128-column-text80">
        <span>利用規約</span>
      </span>
      <span className="web128-column-text82">
        <span>個人情報の取扱について</span>
      </span>
      <span className="web128-column-text84">
        <span>特定商取引法に基づく表記</span>
      </span>
      <span className="web128-column-text86">
        <span>お問い合わせ</span>
      </span>
    </div>
  );
};
