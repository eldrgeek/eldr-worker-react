import * as React from 'react';
const importWorker = (workercode) => {
	let code = workercode.toString();
	code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

	const blob = new Blob([code], { type: 'application/javascript' });
	const worker_script = URL.createObjectURL(blob);

	return worker_script;
};
// import importWorker from './importWorker';
const useWorker = (workercode) => {
	const [worker, setWorker] = React.useState(null);
	React.useEffect(() => {
		// const worker = new Worker(worker_script);
		const worker = new Worker(importWorker(workercode));
		console.log('set worker');
		setWorker(worker);
		return () => {
			worker.terminate();
		};
	}, [workercode]);
	return worker;
};

export default useWorker;
