import React from "react";
import { useParams } from "react-router-dom";

export const TestPage = () => {
  const { id } = useParams();

  return <div>TestPage{id}</div>;
};
