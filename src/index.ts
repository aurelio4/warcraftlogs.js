import { GraphQLClient } from "graphql-request"
import { EncounterData } from './types/index'
import { getFightData } from './queries/getCharacter'

namespace WCLClient {
    export class Wotlk {
        private static readonly WOTLK_ENDPOINT: string = "https://classic.warcraftlogs.com/api/v2/client"

        private wotlkClient: GraphQLClient

        constructor(token: string) {
            this.wotlkClient = WCLClient.Wotlk.createClient(WCLClient.Wotlk.WOTLK_ENDPOINT, token)
        }

        private static createClient(url: string, token: string): GraphQLClient {
            return new GraphQLClient(url, {
                headers: { authorization: `Bearer ${token}` },
            })
        }

        public async getCharacterFightData(name: string, serverSlug: string, serverRegion: string, zoneID: Number): Promise<EncounterData> {
            return await this.wotlkClient.request(getFightData(name, serverSlug, serverRegion, zoneID))
        }
    }

    export class Retail {
        private static readonly RETAIL_ENDPOINT: string = "https://www.warcraftlogs.com/api/v2/client"

        private retailClient: GraphQLClient

        constructor(token: string) {
            this.retailClient = WCLClient.Retail.createClient(WCLClient.Retail.RETAIL_ENDPOINT, token)
        }

        private static createClient(url: string, token: string): GraphQLClient {
            return new GraphQLClient(url, {
                headers: { authorization: `Bearer ${token}` },
            })
        }
    }
}

export { WCLClient }