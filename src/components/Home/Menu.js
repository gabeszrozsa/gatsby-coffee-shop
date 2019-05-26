import React, { Component } from "react";

import Title from "../Globals/Title";
import Img from "gatsby-image";

const MenuLayout = ({ children }) => (
  <section className="menu py-5">
    <div className="container">{children}</div>
  </section>
);

const getCategories = items => [
  "all",
  ...Array.from(new Set(items.map(item => item.node.category)))
];

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges)
    };
  }

  handleItems = category => {
    const { items } = this.state;
    const coffeeItems =
      category === "all"
        ? items
        : items.filter(({ node }) => node.category === category);
    this.setState({ coffeeItems });
  };

  render() {
    if (this.state.items.length > 0) {
      return (
        <MenuLayout>
          <Title title="best of our menu" />
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {this.state.categories.map((category, i) => (
                <button
                  type="button"
                  key={i}
                  className="btn btn-yellow text-capitalize m-3"
                  onClick={() => this.handleItems(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col">
              {this.state.coffeeItems.map(({ node }) => (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>${node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MenuLayout>
      );
    } else {
      return (
        <MenuLayout>
          <Title title="best of our menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>there are no items to display</h1>
            </div>
          </div>
        </MenuLayout>
      );
    }
  }
}
