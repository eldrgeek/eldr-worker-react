// worker.js
// import api from "./testModule";
const importWorkeer = (workercode) => {
	let code = workercode.toString();
	code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

	const blob = new Blob([code], { type: 'application/javascript' });
	const worker_script = URL.createObjectURL(blob);

	return worker_script;
};
export default importWorkeer;
