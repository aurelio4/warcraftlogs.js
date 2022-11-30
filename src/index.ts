import { GraphQLClient } from "graphql-request"

namespace WCLClient {
    export class wotlk {
        private static readonly WOTLK_ENDPOINT: string = "https://classic.warcraftlogs.com/api/v2/client"

        private wotlkClient: GraphQLClient

        constructor(token: string) {
            this.wotlkClient = WCLClient.wotlk.createClient(WCLClient.wotlk.WOTLK_ENDPOINT, token)
        }

        private static createClient(url: string, token: string): GraphQLClient {
            return new GraphQLClient(url, {
                headers: { authorization: `Bearer ${token}` },
            })
        }

        public async request(wclQuery: any): Promise<any> {
            try {
                const data = await this.wotlkClient.request(wclQuery)
                return data
            } catch(err) {
                return err
            }
        }
    }

    export class retail {
        private static readonly RETAIL_ENDPOINT: string = "https://www.warcraftlogs.com/api/v2/client"

        private retailClient: GraphQLClient

        constructor(token: string) {
            this.retailClient = WCLClient.retail.createClient(WCLClient.retail.RETAIL_ENDPOINT, token)
        }

        private static createClient(url: string, token: string): GraphQLClient {
            return new GraphQLClient(url, {
                headers: { authorization: `Bearer ${token}` },
            })
        }
    }
}

export * as WCLQuery from './queries'
export { WCLClient }