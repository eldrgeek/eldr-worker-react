import * as React from 'react';
import workercode from './workercode';
import useWorker from './useWorker';

const MyClass = () => {
	const onMessage = (ev) => {
		console.log(ev.data);
	};
	// console.log("workercode", workercode + "")

	const worker = useWorker(workercode);
	React.useEffect(() => {
		if (worker) worker.addEventListener('message', onMessage);
	}, [worker]);
	const handleClick = () => {
		// console.log('Posting message');
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
