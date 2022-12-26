import { gql } from "graphql-request"

const getReport = (reportId: String) => gql`
	query getReport (
		$reportId: String! = "${reportId}"
	) {
			reportData {
					report(code: $reportId) {
							owner {
									name
									id
							}
					}
			}
    }
`

export { getReport }