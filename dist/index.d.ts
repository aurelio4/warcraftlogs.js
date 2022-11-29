declare class WCLClient {
    private static readonly WOTLK_ENDPOINT;
    private static readonly RETAIL_ENDPOINT;
    private wotlkClient;
    private retailClient;
    constructor(token: string);
    private static createClient;
    wotlkRequest(wclQuery: any): Promise<any>;
}
export * as WCLQuery from './queries';
export { WCLClient };
