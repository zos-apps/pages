import { useState } from 'react';

const Pages: React.FC = () => {
  const [content, setContent] = useState(`# Welcome to Pages

Start writing your document here. You can use **bold**, *italic*, and other formatting options from the toolbar above.

## Features
- Rich text editing
- Templates
- Export to PDF
- Real-time collaboration
`);
  const [fontFamily, setFontFamily] = useState('Georgia');
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="h-full flex flex-col bg-gray-200">
      {/* Toolbar */}
      <div className="h-12 bg-white border-b flex items-center px-4 gap-3">
        <select 
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="text-sm border rounded px-2 py-1"
        >
          <option value="Georgia">Georgia</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Helvetica">Helvetica</option>
        </select>
        <select 
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="text-sm border rounded px-2 py-1 w-16"
        >
          {[12, 14, 16, 18, 20, 24, 28, 32].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        <div className="w-px h-6 bg-gray-300" />
        <button className="p-1 hover:bg-gray-100 rounded font-bold">B</button>
        <button className="p-1 hover:bg-gray-100 rounded italic">I</button>
        <button className="p-1 hover:bg-gray-100 rounded underline">U</button>
        <div className="w-px h-6 bg-gray-300" />
        <button className="p-1 hover:bg-gray-100 rounded">⬅️</button>
        <button className="p-1 hover:bg-gray-100 rounded">↔️</button>
        <button className="p-1 hover:bg-gray-100 rounded">➡️</button>
      </div>

      {/* Document */}
      <div className="flex-1 overflow-auto p-8 flex justify-center">
        <div 
          className="bg-white shadow-lg w-full max-w-3xl min-h-[1000px] p-16"
          style={{ fontFamily }}
        >
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ fontSize: `${fontSize}px`, fontFamily }}
            className="w-full h-full resize-none outline-none"
            placeholder="Start typing..."
          />
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-gray-100 border-t flex items-center px-4 text-xs text-gray-600">
        <span>{content.split(/\s+/).filter(Boolean).length} words</span>
        <span className="mx-2">•</span>
        <span>{content.length} characters</span>
      </div>
    </div>
  );
};

export default Pages;
