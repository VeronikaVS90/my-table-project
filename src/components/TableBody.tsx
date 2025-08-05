import React from "react";
import TableRow from "./TableRow";
import type { UserData } from "../types";

interface TableBodyProps {
    data: UserData[];
}

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
    return (
        <tbody>
            {data.map((item) => (
                <TableRow key={item.id} item={item} />
            ))}
        </tbody>
    );
};

export default TableBody;