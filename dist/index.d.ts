import { EncounterData } from './types/index';
declare namespace WCLClient {
    class Wotlk {
        private static readonly WOTLK_ENDPOINT;
        private wotlkClient;
        constructor(token: string);
        private static createClient;
        getCharacterFightData(name: string, serverSlug: string, serverRegion: string, zoneID: Number): Promise<EncounterData>;
    }
    class Retail {
        private static readonly RETAIL_ENDPOINT;
        private retailClient;
        constructor(token: string);
        private static createClient;
    }
}
export { WCLClient };
