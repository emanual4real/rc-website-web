import React, { useState } from "react";
import { Badge, Button, Card, CardBody, CardTitle, Fade } from "reactstrap";

const RTSCard = (props) => {
  const { model, rtsLevel, brand, name, image } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Card style={{ border: "1px solid black" }}>
        <CardBody>
          <Badge color="primary">RTS Level - {rtsLevel}</Badge>
          <CardTitle
            tag="h5"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {brand}-{name}
          </CardTitle>
          <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
            Show Picture
          </Button>
          {isOpen && (
            <Fade className="mt-3" in={isOpen} tag="h5">
              <img src={image} alt="car image" />
            </Fade>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default RTSCard;
