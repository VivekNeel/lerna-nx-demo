//@ts-nocheck
import { Button } from "@vivek/ui";
import React from "react";
const ButtonS = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>Click me</button>
      {[...Array(5000).keys()].map((item) => {
        return <Button color="red" title="Primary 😃" />;
      })}
    </>
  );
};

export default ButtonS;
