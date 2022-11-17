import { client } from "../api/client";
import { getReportQuery } from "../queries";

const getReport = async (reportId: string) => {
    const data = await client.request(getReportQuery(reportId))
    return data
}

export { getReport }