// src/components/Table.tsx
import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { data } from './mockData';


const Table: React.FC = () => {
  const [aggregatedData, setAggregatedData] = useState<any[]>([]);
  
  useMemo(() => {
    // Aggregate data here
    const departmentMap = new Map();
    data.forEach((row) => {
      const department = row.department;
      if (departmentMap.has(department)) {
        const existingData = departmentMap.get(department);
        existingData.ageSum += row.age;
        existingData.count += 1;
      } else {
        departmentMap.set(department, {
          department,
          ageSum: row.age,
          count: 1,
        });
      }
    });

    const aggregatedDataArray = Array.from(departmentMap.values());
    setAggregatedData(aggregatedDataArray);
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Average Age',
        accessor: 'averageAge',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: aggregatedData,
  });

  return (
    <table {...getTableProps()} className="table">
        
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
