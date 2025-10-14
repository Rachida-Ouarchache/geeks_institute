import React from "react";

function Contact() {
  return (
    <section
      className="py-5"
      id="contact"
      style={{ backgroundColor: "#f6f6f6" }}
    >
      <div className="container" style={{ maxWidth: "1000px" }}>
        <h3 className="fw-bold text-center mb-4">Contact us</h3>

        <div className="row">
          {/* Colonne gauche : infos de contact */}
          <div className="col-md-6 mb-4">
            <p>Contact us and we will get back to you within 24 hours.</p>
            <p>
              <i className="fa fa-map-marker me-2 text-danger"></i>
              Company Name
            </p>
            <p>
              <i className="fa fa-phone me-2 text-danger"></i>
              +256 778 800 900
            </p>
            <p>
              <i className="fa fa-envelope me-2 text-danger"></i>
              company@gmail.com
            </p>
          </div>

          {/* Colonne droite : formulaire */}
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Contact</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email address"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="comment"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn w-100 text-white fw-bold"
                style={{ backgroundColor: "#e44c2a" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


