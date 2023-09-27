// PivotColumn.tsx
import React from 'react';
import { useDrag } from 'react-dnd';

interface PivotColumnProps {
  index: number;
  column: any;
  columns: any[];
  setColumns: (columns: any[]) => void;
}

const PivotColumn: React.FC<PivotColumnProps> = ({ index, column, columns, setColumns }) => {
  const [, ref] = useDrag({
    type: 'COLUMN',
    item: { index },
  });

  const handleRemoveColumn = () => {
    const newColumns = [...columns];
    newColumns.splice(index, 1);
    setColumns(newColumns);
  };

  return (
    <div ref={ref} style={{ border: '1px solid #ccc', margin: '4px', padding: '4px' }}>
      {column.Header}
      <button onClick={handleRemoveColumn}>Remove</button>
    </div>
  );
};

export default PivotColumn;
