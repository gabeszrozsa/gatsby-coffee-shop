import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
              veniam at consequuntur corrupti aut sint iste, atque expedita enim
              distinctio ipsam, debitis sed beatae sit repellat? Hic quo
              quibusdam, accusamus porro debitis eos in quaerat ducimus eaque
              officia atque error voluptatum provident odit a rem, ipsum, totam
              soluta nesciunt ex quae ea expedita! Molestias, error eos ipsa,
              veniam ad autem vero illo fuga necessitatibus quae quo aspernatur
              unde reprehenderit ipsum accusamus? Expedita exercitationem animi
              quae commodi laborum, totam mollitia veniam soluta molestiae odit,
              quo debitis voluptatibus porro ad in inventore quidem repellat
              hic, unde iste quam enim sint. Possimus, corrupti.
            </p>
            <Link to="/about/">
              <button className="btn btn-yellow text-uppercase">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
