import { useState } from "react";

export const PageController = () => {
  const [ready, setReady] = useState(false);

  setReady(true);
  return { ready };
};
