import React from "react";
import { useHello } from "../lib/provider/HelloProvider";

const ApiTest: React.FC = () => {
  const { message } = useHello();

  return <div>api test: {message}</div>;
};

export default ApiTest;
