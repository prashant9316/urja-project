import React, { useState } from "react";
import { FaqData } from "./FaqData";
import FaqContent from "./FaqContent";
import "./Faq.css";

const Faq = () => {
  const [data] = useState(FaqData);
  return (
    <>
      <section className="main-div reveal">
        <h1 className="common-heading">Frequently Asked Questions </h1>
        <div className="flex-horizontal">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <img
                src={require("../../assets/questions.png")}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              {data.map((curElem) => {
                return <FaqContent key={curElem.id} {...curElem} />;
              })}
            </div>

          </div>
          {/* <div style={{ width: "50%" }}>
            
          </div>
          <div style={{ width: "48%" }}>
            
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Faq;
