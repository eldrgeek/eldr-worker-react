const workercode = () => {
	console.log('loaded workercode');
	self.onmessage = function (e) {
		// self.importScripts("./testModule"); // eslint-disable-line no-restricted-globals
		// eslint-disable-line no-restricted-globals
		console.log(' message received in main script');
		setTimeout(() => {
			var workerResult = 'main: ' + e.data + 'DONe';
			console.log('Posting message back to main script');
			// self.postMessage(api.message()); // eslint-disable-line no-restricted-globals
			self.postMessage(workerResult); // eslint-disable-line no-restricted-globals
		}, 1000);
	};
};
export default workercode;