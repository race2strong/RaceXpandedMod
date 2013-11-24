var racexpandedMod = {};
(function () {	
	/*Topic*/
	racexpandedMod.addTopic = function () {
		GDT.addTopic([
		{
			id: "Sandbox", //must be unique
			name: "Sandbox".localize("game topic"), //user-friendly name
			genreWeightings: [0.7, 0.4, 1, 1, 1, 0.4],  //genreWeightings (see documentation for details)
			audienceWeightings: [1, 1, 0.7]  //audienceWeightings (see documentation for details)
		}
		]);
		
		GDT.addTopic([
		{
			id: "Jump ’n’ Run", //must be unique
			name: "Jump ’n’ Run".localize("game topic"), //user-friendly name
			genreWeightings: [0.7, 0.6, 0.3, 0.3, 1, 1],  //genreWeightings (see documentation for details)
			audienceWeightings: [1, 0.8, 0.3]  //audienceWeightings (see documentation for details)
		}
		]);
	};

	/* Platforms */
	racexpandedMod.addPlatform = function () {
		var icon = './mods/raceExpandedMod/img/ContUI-1.png';
		GDT.addPlatform(
			{
				id: 'ContUI 1.0',
				name: 'ContUI 1.0',
				company: 'Contbrand Inc',
				startAmount: 0.350,
				unitsSold: 1.900,
				published: '1/2/3',
				platformRetireDate: '6/6/4',
				developmentCosts: 10000,
				genreWeightings: [0.8, 1.0, 1.0, 0.7, 1.0, 0.5, 1.0],
				audienceWeightings: [0.5, 0.75, 1.0],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '1',
						date: '1/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Das Softwareunternehmen Contbrand Inc bringt in den nächsten Wochen ihr Betriebsystem für den PC raus. Es heißt ContUI 1.0..".localize().format(General.getETADescription('1/1/1', '1/1/3')),
								image: icon
							});
						}
					}
				]
			});
			
			GDT.addPlatform(
			{
				id: 'ContUI 1.1',
				name: 'ContUI 1.1',
				company: 'Contbrand Inc',
				startAmount: 1.000,
				unitsSold: 1.900,
				published: '6/6/4',
				platformRetireDate: '8/6/4',
				developmentCosts: 10000,
				genreWeightings: [0.8, 1.0, 1.0, 0.7, 1.0, 0.5, 1.0],
				audienceWeightings: [0.5, 0.75, 1.0],
				techLevel: 2,
				iconUri: icon,
				events: [
					{
						id: '2',
						date: '5/12/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Contbrand Inc bringt in den kommenden Monaten ein Update für ihre Betriebssystem ContUI. {n} Es wird von 1.0 auf 1.1 upgedated.".localize().format(General.getETADescription('5/12/4', '6/6/3')),
								image: icon
							});
						}
					}
				]
			});
	};
	 /*  */		       
})();