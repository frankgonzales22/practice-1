// import React from 'react'

// import { useReactTable } from '@tanstack/react-table';


// interface Data {
//     id: number;
//     name: string;
//     age: number;
//     isExpanded: boolean; // Add an isExpanded property
// }

// const Table: React.FC<{ data: Data[] }> = ({ data }) => {
//     const columns = React.useMemo(
//         () => [
//             {
//                 Header: 'Name',
//                 accessor: 'name',
//             },
//             {
//                 Header: 'Age',
//                 accessor: 'age',
//             },
//         ],
//         []
//     );

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//         state,
//         toggleRowExpanded,
//     } = useReactTable(
//         {
//             columns,
//             data,
//             initialState: {
//                 // Define the initial state to expand rows with isExpanded: true
//                 expanded: data.filter((row) => row.isExpanded).map((row) => row.id),
//             },
//         },
//         // Add options here if needed
//     );

//     return (
//         <table {...getTableProps()} style={{ width: '100%' }}>
//             <thead>
//                 {headerGroups.map((headerGroup) => (
//                     <tr {...headerGroup.getHeaderGroupProps()}>
//                         {headerGroup.headers.map((column) => (
//                             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                         ))}
//                     </tr>
//                 ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//                 {rows.map((row) => {
//                     prepareRow(row);

//                     return (
//                         <React.Fragment key={row.id}>
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map((cell) => {
//                                     return (
//                                         <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                     );
//                                 })}
//                             </tr>
//                             {row.isExpanded && (
//                                 <tr>
//                                     <td colSpan={columns.length}>
//                                         {/* Content to display when row is expanded */}
//                                         Expanded Content
//                                     </td>
//                                 </tr>
//                             )}
//                         </React.Fragment>
//                     );
//                 })}
//             </tbody>
//         </table>
//     );
// };


// export default Table