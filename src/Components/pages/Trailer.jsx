import React from "react";
import { useParams } from "react-router-dom";

export default function Trailer() {
  const { name } = useParams();
  return <div>Trailer page - {name}</div>;
}
