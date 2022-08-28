import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

//@ts-ignore
const container = createRoot(document.getElementById("root"));

container.render(<App />);
