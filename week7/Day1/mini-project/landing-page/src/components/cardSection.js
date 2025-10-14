import React from "react";

function Section({ icon, title, text }) {
  return (
    <section
      className="d-flex align-items-start my-4 p-4 rounded"
      style={{
        backgroundColor: "#f6f6f6",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <div
        className="text-danger me-4"
        style={{ fontSize: "4rem", minWidth: "80px", textAlign: "center" }}
      >
        <i className={icon}></i>
      </div>
      <div>
        <h3 className="fw-bold">{title}</h3>
        <p className="text-muted" style={{ margin: 0 }}>
          {text}
        </p>
      </div>
    </section>
  );
}

export default Section;


