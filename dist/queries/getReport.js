"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReport = void 0;
const graphql_request_1 = require("graphql-request");
const getReport = (reportId) => (0, graphql_request_1.gql) `
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
exports.getReport = getReport;
//# sourceMappingURL=getReport.js.map