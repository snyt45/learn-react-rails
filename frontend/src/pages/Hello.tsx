import React from "react";
import { useHello } from "../provider/HelloProvider";

const ApiTest: React.FC = () => {
  const { message } = useHello();

  return <div>{message}</div>;
};

export default ApiTest;
