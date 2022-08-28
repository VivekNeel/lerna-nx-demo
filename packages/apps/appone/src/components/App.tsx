import * as React from "react";
import { Button as UIButton } from "@vivek/ui";
import { isEmpty } from "lodash";
import Button from "./Button";

const App = () => {
  const [data, setData] = React.useState([...Array(5000).keys()]);
  return (
    <div>
      <UIButton color="red" title="Primary 😃" />
      {data.map((item) => {
        return <UIButton color="red" title="Primary 😃" />;
      })}
      <Button
        onClick={() => {
          setData(data.concat([...Array(5000).keys()]));
        }}
      ></Button>
    </div>
  );
};

export default App;
