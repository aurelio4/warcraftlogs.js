import { gql } from "graphql-request"

const getReport = (reportId: String) => gql`
    {
        reportData {
            report(code: "${reportId}") {
                owner {
                    name
                    id
                }
            }
        }
    }
`

export { getReport }