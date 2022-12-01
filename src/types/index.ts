type Faction = {
	id: Number,
	name: String
}

type EncounterData = {
	name: String,
	classID: Number,
	faction: Faction,
	zoneRankings: {
		metric: CharacterRankingMetricType,
		className: String,
		specName: String,
		encounterID: Number
	}
}

type CharacterRankingMetricType = {
	bossdps: Number,
	dps: Number,
	hps: Number,
	tankhps: Number,
	wdps: Number,	
}

export { EncounterData }