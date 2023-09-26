// import React, { useState, useEffect } from 'react';

// // Define the type for your template objects
// type Template = {
//   templateId: number;
//   chart: string;
//   row: string[];
//   value: string[];
// };

// const SaveToLocal: React.FC = () => {
//   // Define the state for your array of template objects and a setter function
//   const [templates, setTemplates] = useState<Template[]>([]);

//   // Key to store data in local storage
//   const localStorageKey = 'templatesData';

//   // Function to update the state and save it to local storage
//   const updateTemplates = (newTemplates: Template[]) => {
//     setTemplates(newTemplates);
//     localStorage.setItem(localStorageKey, JSON.stringify(newTemplates));
//   };

//   // Load data from local storage when the component mounts
//   useEffect(() => {
//     const storedData = localStorage.getItem(localStorageKey);
//     if (storedData) {
//       const parsedData = JSON.parse(storedData);
//       setTemplates(parsedData);
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Templates</h1>
//       <ul>
//         {templates.map((template) => (
//           <li key={template.templateId}>
//             <pre>{JSON.stringify(template, null, 2)}</pre>
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={() => {
//           // Create a new template object (you can customize this part)
//           const newTemplate: Template = {
//             templateId: templates.length, // Use a unique identifier
//             chart: 'barChart',
//             row: ['regioncode'],
//             value: ['quota', 'nsTotal'],
//           };

//           updateTemplates([...templates, newTemplate]);
//         }}
//       >
//         Add Template
//       </button>
//     </div>
//   );
// };

// export default SaveToLocal;


import React, { useState, useEffect } from 'react';

// Define the type for your template objects
type Template = {
  templateId: number;
  chart: string;
  row: string[];
  value: string[];
};

const SaveToLocal: React.FC = () => {
  // Define the state for your array of template objects and a setter function
  const [templates, setTemplates] = useState<Template[]>([]);

  // Key to store data in local storage
  const localStorageKey = 'templatesData';

  // Function to update the state and save it to local storage
  const updateTemplates = (newTemplate: Template) => {
    setTemplates((prevTemplates) => [...prevTemplates, newTemplate]);
  };

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTemplates(parsedData);
    }
  }, []);

  // Function to save the updated templates to local storage
  const saveTemplatesToLocalStorage = (templatesToSave: Template[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(templatesToSave));
  };

  // Function to handle adding a new template
  const handleAddTemplate = () => {
    // Create a new template object based on user input (customize this part)
    const newTemplate: Template = {
      templateId: templates.length, // Use a unique identifier
      chart: prompt('Enter chart type') || 'barChart', // Customize input fields as needed
      row: prompt('Enter row')?.split(',') || [],
      value: prompt('Enter value')?.split(',') || [],
    };

    if (newTemplate.chart && newTemplate.row.length > 0 && newTemplate.value.length > 0) {
      updateTemplates(newTemplate);
      saveTemplatesToLocalStorage([...templates, newTemplate]);
    } else {
      alert('Invalid input. Please provide values for chart, row, and value.');
    }
  };

  return (
    <div>
      <h1>Templates</h1>
      <ul>
        {templates.map((template) => (
          <li key={template.templateId}>
            <pre>{JSON.stringify(template, null, 2)}</pre>
          </li>
        ))}
      </ul>
      <button onClick={handleAddTemplate}>Add Template</button>
    </div>
  );
};

export default SaveToLocal;
