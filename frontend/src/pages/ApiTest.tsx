import React from "react";
import { useHelloContext } from "../lib/provider/HelloProvider";

const ApiTest: React.FC = () => {
  const { message } = useHelloContext();

  return <div>api test: {message}</div>;
};

export default ApiTest;
