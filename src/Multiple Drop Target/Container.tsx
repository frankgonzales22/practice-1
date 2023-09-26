import React, { useState } from 'react';
import DraggableItem from './DraggableItem';
import DropTarget from './DropTarget';


const Container: React.FC = () => {
  const droppedItems: any[] = [];

  const handleDrop = (item: any) => {
    droppedItems.push(item);
  };

  return (
    <div>
      <h1>React DnD with TypeScript</h1>
      <div style={{ display: 'flex' }}>
        <div>
          <h2>Draggable Items</h2>
          <DraggableItem id="item1" text="Item 1" />
          <DraggableItem id="item2" text="Item 2" />
          <DraggableItem id="item3" text="Item 3" />
        </div>  
        <div>
          <h2>Drop Targets</h2>
          <DropTarget onDrop={handleDrop} />
          <DropTarget onDrop={handleDrop} />
        </div>
      </div>
    </div>
  );
};


export default Container;
