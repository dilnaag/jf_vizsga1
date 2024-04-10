import React from "react";
import { featuredProducts } from "../data";
import { Card, CardBody, CardTitle } from "reactstrap";

export const FeaturedProducts = () => {
  console.log(featuredProducts);
  return (
    <div className="featured" style={{background: 'linear-gradient(to bottom, #3498db, #2ecc71)'}}>
      {featuredProducts.map((obj) => (
        <Card
          key={obj.id}
          style={{
            width: "18rem",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">{obj.title}</CardTitle>
          </CardBody>
          <img alt="Card cap" src={obj.thumbnail} width="100%" />
        </Card>
      ))}
    </div>
  );
};
