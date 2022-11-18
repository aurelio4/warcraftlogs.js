"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReportQuery = void 0;
const graphql_request_1 = require("graphql-request");
const getReportQuery = (reportId) => (0, graphql_request_1.gql) `
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
`;
exports.getReportQuery = getReportQuery;
//# sourceMappingURL=getReport.js.map