import React from "react";
import { JsonServiceConsumer } from "../json-service-context";

const withJsonService = () => (Wrapped) => {
  return (props) => {
    return (
      <JsonServiceConsumer>
        {(jsonService) => {
          return <Wrapped {...props} jsonService={jsonService} />;
        }}
      </JsonServiceConsumer>
    );
  };
};

export default withJsonService;
