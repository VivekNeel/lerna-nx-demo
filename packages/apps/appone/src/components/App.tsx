import * as React from "react";
import { Button } from "@vivek/ui";
import { isEmpty } from "lodash";

const App = () => {
  return (
    <div>
      {[...Array(10000).keys()].map((item) => {
        return <Button color="red" title="Primary 😃" />;
      })}
    </div>
  );
};

export default App;
