window.addEventListener('load',()=>{
	let progressBars=document.querySelectorAll('.progress-bar');
	let values=[
		'90%',
		'90%',
		'80%',
		'70%',
		'80%',
		'70%',
		'70%',
		'70%'
	];
	progressBars.forEach((progress,index)=>{
		progress.style.width = values[index];
	});
});
