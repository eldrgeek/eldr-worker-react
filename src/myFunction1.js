import * as React from "react";
import workercode from "./workercode";

import useWorker from "./useWorker";
// import importWorker from './importWorker';

const MyClass = () => {
  const [count, setCount] = React.useState(0);
  const onMessage = (ev) => {
    setCount(ev.data.count);
  };

  const worker = useWorker(workercode);
  const handleClick = () => {
    console.log("Posting message");
    worker.postMessage("Button clicked");
  };

  React.useEffect(() => {
    console.log("using effect", worker);
    if (worker) {
      worker.addEventListener("message", onMessage);
      handleClick();
    } // if(!worke}r) handleClick()
    // eslint-disable-next-line
  }, [worker]);

  return <div>Button test {count}</div>;
};

export default MyClass;
