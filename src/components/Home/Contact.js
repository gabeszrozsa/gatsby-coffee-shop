import React from "react";
import Title from "../Globals/Title";

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                rows="5"
                placeholder="your description..."
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
