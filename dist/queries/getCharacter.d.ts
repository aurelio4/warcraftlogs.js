declare const getCharacterById: (userId: number) => string;
declare const getCharacterByName: (name: String, serverSlug: String, serverRegion: String) => string;
declare const getFightData: (name: String, serverSlug: string, serverRegion: String, zoneID: Number) => string;
export { getCharacterById, getCharacterByName, getFightData };
