import React from "react";
import type { UserData } from "../types";

interface TableRowProps {
    item: UserData;
}

const TableRow: React.FC<TableRowProps> = ({ item }) => {
    return (
        <tr>
            {Object.entries(item).map(([key, value]) => (
                <td key={key} style={{ border: '1px solid #ccc', padding: '8px' }}>
                    {value}
                </td>
            ))}
        </tr>
    );
};

export default TableRow;