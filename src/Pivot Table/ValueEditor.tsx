// ValueEditor.tsx

import React from 'react';

interface ValueEditorProps {
  columns: any[];
  setColumns: (columns: any[]) => void;
}

const ValueEditor: React.FC<ValueEditorProps> = ({ columns, setColumns }) => {
  const handleValueChange = (index: number, newValue: string) => {
    const newColumns = [...columns];
    newColumns[index].value = newValue;
    setColumns(newColumns);
  };

  return (
    <div className="value-editor">
      <h2>Configure Values</h2>
      {columns.map((column, index) => (
        <div key={column.id || index}>
          <span>{column.Header}</span>
          <input
            type="text"
            value={column.value || ''}
            onChange={(e) => handleValueChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ValueEditor;
