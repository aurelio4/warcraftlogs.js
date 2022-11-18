import { client } from "../api/client";
import { getReportQuery } from "../queries";

const getReport = async (reportId: string) => {
    try {
        const data = await client.request(getReportQuery(reportId))
        return data
    } catch(err) {
        return err.response.errors
    }
}

export { getReport }