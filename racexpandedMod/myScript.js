(function () {
	var ready = function () {
	  
		//Adds Platforms
		racexpandedMod.addPlatform();
		racexpandedMod.addTopic();
		racexpandedMod.addPlatform();
		racexpandedMod.addEvent();
		racexpandedMod.addResearch();
		
	};

	var error = function () {
	};

	GDT.loadJs(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/api/research.js',
	'mods/racexpandedMod/source.js'
	], ready, error);
})();