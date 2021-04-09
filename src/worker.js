// worker.js
// import api from "./testModule";
console.log('worker loaded');
const workercode = () => {
	self.onmessage = function (e) {
		// self.importScripts("./testModule"); // eslint-disable-line no-restricted-globals
		// eslint-disable-line no-restricted-globals
		console.log('Message received from main script');
		setTimeout(() => {
			var workerResult = 'Received from main: ' + e.data;
			console.log('Posting message back to main script');
			// self.postMessage(api.message()); // eslint-disable-line no-restricted-globals
			self.postMessage(workerResult); // eslint-disable-line no-restricted-globals
		}, 1000);
	};
};

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;
