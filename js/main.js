(() => {
	// this is a module pattern, also called iife. Query selector does the same thing like in CSS where it grabs what you're asking for in the html
	const mySpan = document.querySelector('main span'),
		  bananaSVG = document.querySelector('.bananaLeaf');
		  bikiniSVG = document.querySelector('.bikini');
		  cactusSVG = document.querySelector('.cactus');
		  cameraSVG = document.querySelector('.camera');
		  drinkSVG = document.querySelector('.drink');
		  pineappleSVG = document.querySelector('.pineapple');
		  planeSVG = document.querySelector('.plane');
		  shellSVG = document.querySelector('.shell');
		  starfishSVG = document.querySelector('.starfish');
		  sunSVG = document.querySelector('.sun');
		  treeSVG = document.querySelector('.tree');


	function toggleSelected() {
		// we want to add some kind of indicator that someone has selected an icon

		//debugger;
		this.classList.toggle('selected');
	}


	// set up our triggers here. A click is something you do with the mouse... same with a page reload or form submission, etc.
	mySpan.addEventListener('click', toggleSelected);
	bananaSVG.addEventListener('click', toggleSelected);
	bikiniSVG.addEventListener('click', toggleSelected);
	cactusSVG.addEventListener('click', toggleSelected);
	cameraSVG.addEventListener('click', toggleSelected);
	drinkSVG.addEventListener('click', toggleSelected);
	pineappleSVG.addEventListener('click', toggleSelected);
	planeSVG.addEventListener('click', toggleSelected);
	shellSVG.addEventListener('click', toggleSelected);
	starfishSVG.addEventListener('click', toggleSelected);
	sunSVG.addEventListener('click', toggleSelected);
	treeSVG.addEventListener('click', toggleSelected);

	let allSVGs = document.querySelectorAll('.svg')

	function toggleSVG() {

		this.classList.toggle('svg');
	}

	allSVGs.forEach(item => item.addEventListener("mousemove", toggleSVG));


})();