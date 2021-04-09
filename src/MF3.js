import * as React from 'react';
import workercode from './workercode';

import importWorker from './importWorker';
import useWorker from './useWorker';

const MyClass = () => {
	const [worker, setWorker] = React.useState(null);
	const onMessage = (ev) => {
		console.log('got data back from worker');
		console.log(ev);
	};

	React.useEffect(() => {
		// const worker = new Worker(worker_script);
		const worker = new Worker(importWorker(workercode));

		setWorker(worker);
		worker.addEventListener('message', onMessage);
		return () => {
			worker.removeEventListener('error', onMessage);
			worker.terminate();
		};
	}, []);
	React.useEffect(() => {
		if (worker) worker.addEventListener('message', onMessage);
	}, [worker]);
	const handleClick = () => {
		console.log('Posting message');
		worker.postMessage('Button clicked');
	};
	return (
		<div>
			Button test
			<button onClick={handleClick}>Click to trigger worker</button>
		</div>
	);
};

export default MyClass;
