import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import type { UserData } from "../types";

interface TableProps {
    data: UserData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <TableHeader columns={columns} />
            <TableBody data={data} />
        </table>
    );
};

export default Table;