import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./Certificates.css";
import certificate from "../../../data/certificatesData";
export default function Certificates() {
  const certificateData = certificate.centificateArray;
  console.log("AA");
  return (
    <div>
      <div className="container CertificateContainer">
        <Fade>
          <h1 className="CertificateHeading">Certificates</h1>
        </Fade>

        <div className="row">
          {certificateData.map((data) => (
            <Zoom>
              <a href={data.url} target="_blank" className="CertificateAnchor">
                <div
                  className="CertificatesCertificateCard col-sm"
                  id={data._id}
                >
                  <div className="CertificatesCertificateDiv">
                    <h1 className="CertificatesCertificateTitle">
                      {data.title}
                    </h1>
                  </div>
                  <div className="CertificatesCertificateCardBody">
                    <img
                      src={process.env.PUBLIC_URL + data.imageUrl}
                      className="CertificateImg"
                    />
                  </div>
                </div>
              </a>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
}
