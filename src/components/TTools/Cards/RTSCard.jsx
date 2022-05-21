import React, { useState } from "react";
import { Badge, Button, Card, CardBody, CardTitle, Fade } from "reactstrap";

const RTSIndexCard = (props) => {
  const { rtsLevel, brand, name, imageUrl, owned } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: "450px" }}>
      <Card style={{ border: "1px solid black" }}>
        <CardBody>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Badge color="secondary">RTS Level - {rtsLevel}</Badge>
            <Badge color={owned > 0 ? "primary" : "danger"} pill>
              {owned > 0 ? `owned - ${owned}` : "needed"}
            </Badge>
          </div>
          <CardTitle
            tag="h5"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {brand} {name}
          </CardTitle>
          <Button
            color="secondary"
            size="sm"
            outline
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Hide" : "Picture"}
          </Button>
          {isOpen && (
            <Fade className="mt-3" in={isOpen} tag="h5">
              <img
                src={imageUrl}
                alt="car image"
                style={{ maxWidth: "400px" }}
              />
            </Fade>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default RTSIndexCard;
