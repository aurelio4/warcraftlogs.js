import { client } from "../api/client";
import { getCharacterByIdQuery } from "../queries";

const getCharacterById = async (id: number) => {
    const data = await client.request(getCharacterByIdQuery(id))
    return data
}

export { getCharacterById }