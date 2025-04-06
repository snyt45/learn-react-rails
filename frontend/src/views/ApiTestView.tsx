import React, { useEffect } from "react";
import { hello } from "../lib/api/v1/hello";

const fetchData = async () => {
  const response = await hello();
  console.log(response);
};

const ApiTestView: React.FC = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return <div>test</div>;
};

export default ApiTestView;
