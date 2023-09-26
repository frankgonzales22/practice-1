import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

interface DropTargetProps {
  onDrop: (item: any) => void;
}

const DropTarget: React.FC<DropTargetProps> = ({ onDrop }) => {
  const [droppedItems, setDroppedItems] = useState<any[]>([]);

  const [, ref] = useDrop({
    accept: 'DRAGGABLE_ITEM',
    drop: (item: any) => {
      setDroppedItems(prev =>[...prev, item]);
      onDrop(item);
    },
  });

  return (
    <div
      ref={ref}
      style={{
        width: '200px',
        height: '200px',
        border: '2px dashed #ccc',
        marginTop: '16px',
      }}
    >
      <h3>Dropped Items</h3>
      
      <ul>
        {droppedItems.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropTarget;
