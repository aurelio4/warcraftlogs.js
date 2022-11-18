import { gql } from "graphql-request"

const getReportQuery = (reportId: String) => gql`
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

export { getReportQuery }