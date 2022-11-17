import { gql } from "graphql-request"

const getCharacterByIdQuery = (userId: number) => gql`
	{
		characterData {
			character(id: ${userId}) {
				name
				server {
					slug
				}
				server {
					region {
						name
					}
				}
			}
		}
	}
`

export { getCharacterByIdQuery }