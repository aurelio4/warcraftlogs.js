declare const getCharacterById: (id: number) => Promise<any>;
declare const getCharacterByName: (name: string, serverSlug: string, serverRegion: string) => Promise<any>;
export { getCharacterById, getCharacterByName };
