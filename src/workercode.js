const workercode = () => {
  console.log("loaded workercode");
  let index = 0;
  // eslint-disable-next-line
  self.onmessage = function (e) {
    // self.importScripts("./testModule"); // eslint-disable-line no-restricted-globals
    // eslint-disable-line no-restricted-globals
    console.log("message received in main script");
    setInterval(() => {
      var workerResult = { count: index };
      // ++ + ' main: ' + e.data + 'dhhhdf';
      console.log(index++ + " Message back to main script");
      // self.postMessage(api.message()); // eslint-disable-line no-restricted-globals
      self.postMessage(workerResult); // eslint-disable-line no-restricted-globals
    }, 1000);
  };
};

export default workercode;
