declare namespace WCLClient {
    class wotlk {
        private static readonly WOTLK_ENDPOINT;
        private wotlkClient;
        constructor(token: string);
        private static createClient;
        request(wclQuery: any): Promise<any>;
    }
    class retail {
        private static readonly RETAIL_ENDPOINT;
        private retailClient;
        constructor(token: string);
        private static createClient;
    }
}
export * as WCLQuery from './queries';
export { WCLClient };
