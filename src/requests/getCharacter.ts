import { client } from "../api/client";
import { getCharacterByIdQuery, getCharacterByNameQuery } from "../queries";

const getCharacterById = async (id: number) => {
    try {
        const data = await client.request(getCharacterByIdQuery(id))
        return data
    } catch(err) {
        return err.response.errors
    }
    
}

const getCharacterByName = async (name: string, serverSlug: string, serverRegion: string) => {
    try {
        const data = await client.request(getCharacterByNameQuery(name, serverSlug, serverRegion))
        return data
    } catch(err) {
        return err.response.errors
    }
}

export { getCharacterById, getCharacterByName }