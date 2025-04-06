import React, { useEffect } from "react";
import { hello } from "../lib/api/v1/hello";

const fetchData = async () => {
  const response = await hello();
  console.log(response);
};

const ApiTest: React.FC = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return <div>api test</div>;
};

export default ApiTest;
