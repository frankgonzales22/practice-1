// DraggableColumn.tsx

import React from 'react';
import { useDrag } from 'react-dnd';

interface DraggableColumnProps {
  column: any;
  index: number;
  setColumns: (columns: any[]) => void;
}

const DraggableColumn: React.FC<DraggableColumnProps> = ({ column, index, setColumns }) => {
  const [, ref] = useDrag({
    type: 'COLUMN',
    item: { index },
  });

  return (
    <div className="draggable-column" ref={ref}>
      {column.Header}
    </div>
  );
};

export default DraggableColumn;
