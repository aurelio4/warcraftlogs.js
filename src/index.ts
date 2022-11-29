import { GraphQLClient } from "graphql-request"

class WCLClient {
    private static readonly WOTLK_ENDPOINT: string = "https://classic.warcraftlogs.com/api/v2/client"
    private static readonly RETAIL_ENDPOINT: string = "https://www.warcraftlogs.com/api/v2/client"

    private wotlkClient: GraphQLClient
    private retailClient: GraphQLClient

    constructor(token: string) {
        this.wotlkClient = WCLClient.createClient(WCLClient.WOTLK_ENDPOINT, token)
        this.retailClient = WCLClient.createClient(WCLClient.RETAIL_ENDPOINT, token)
    }

    private static createClient(url: string, token: string): GraphQLClient {
        return new GraphQLClient(url, {
            headers: { authorization: `Bearer ${token}` },
        })
    }

    public async wotlkRequest(wclQuery: any): Promise<any> {
        try {
            const data = await this.wotlkClient.request(wclQuery)
            return data
        } catch(err) {
            return err
        }
    }
}

export * as WCLQuery from './queries'
export { WCLClient }