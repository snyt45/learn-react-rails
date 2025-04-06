import React from "react";
import { useHelloContext } from "../lib/context/HelloContext";

const ApiTest: React.FC = () => {
  const { message } = useHelloContext();

  return <div>api test: {message}</div>;
};

export default ApiTest;
