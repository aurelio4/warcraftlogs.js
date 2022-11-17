import { gql } from "graphql-request"

const getReportQuery = (reportId: string) => gql`
    {
        reportData {
            report(code: "jr9APvthqVMbYXz8") {
                owner {
                    name
                    id
                }
            }
        }
    }
`

export { getReportQuery }