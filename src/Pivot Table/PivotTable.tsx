// PivotTable.tsx

import React from 'react';
import { useTable } from 'react-table';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableColumn from './DraggableColumn';
import ValueEditor from './ValueEditor';

interface PivotTableProps {
    data: any[];
    columns: any[];
    setColumns: (columns: any[]) => void;
}

const PivotTable: React.FC<PivotTableProps> = ({ data, columns, setColumns }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    return (
        <>
            {/* Render your drop target areas for rows, columns, filters, and values */}
            <div className="drop-target" id="rows">
                Rows Target Area
            </div>
            <div className="drop-target" id="columns">
                Columns Target Area
            </div>
            <div className="drop-target" id="filters">
                Filters Target Area
            </div>
            <div className="drop-target" id="values">
                Values Target Area
            </div>

            {/* Render the pivot table */}
            <table {...getTableProps()}>
                {/* Table headers */}
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                {/* Table body */}
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Render draggable columns */}
            <div className="draggable-columns">
                {columns.map((column, index) => (
                    <DraggableColumn
                        // key={column.id} // Using column.id as the key
                    key={index}
                        column={column}
                        index={index}
                        setColumns={setColumns}
                    />
                ))}
            </div>

            {/* Render value editor */}
            <ValueEditor columns={columns} setColumns={setColumns} />
        </>
    );
};

export default PivotTable;
