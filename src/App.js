import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Editor from "@monaco-editor/react";
import Folder from "././components/Folder";
import files from "./files";
import explorer from "./folderData";

function App() {
  const editorRef = useRef(null);
  const [activeFile, setActiveFile] = useState("script.js");
  const [activeFileContent, setActiveFileContent] = useState(
    files[activeFile].value
  );
  const [editorValue, setEditorValue] = useState(activeFileContent);
  const [openFiles, setOpenFiles] = useState(["script.js"]);

  useEffect(() => {
    editorRef.current?.focus();
  }, [activeFile]);

  useEffect(() => {
    setActiveFileContent(files[activeFile]?.value);
    setEditorValue(files[activeFile]?.value);
  }, [activeFile,editorValue]);

  const handleFileSelect = (file) => {
    setActiveFile(file.name);
    setActiveFileContent(file.value);
    setEditorValue(file.value);
    if (!openFiles.includes(file.name)) {
      setOpenFiles((prevOpenFiles) => [...prevOpenFiles, file.name]);
    }
  };

  const handleCloseTab = (fileName) => {
    const updatedOpenFiles = openFiles.filter((file) => file !== fileName);
    let newActiveFile = activeFile;
    if (activeFile === fileName) {
      const closedFileIndex = openFiles.indexOf(fileName);
      newActiveFile =
        updatedOpenFiles[closedFileIndex] ||
        updatedOpenFiles[closedFileIndex - 1];
    }
    setActiveFile(newActiveFile);
    setOpenFiles(updatedOpenFiles);
    const previousFileContent = newActiveFile ? files[newActiveFile].value : "";
    setEditorValue(previousFileContent);
    editorRef.current?.focus();
  };

  const fileTabs = openFiles.map((fileName) => (
    <div
      key={fileName}
      className={`tab ${activeFile === fileName ? "active" : ""}`}
      onClick={() => handleFileSelect(files[fileName])}
    >
      <button onClick={() => handleCloseTab(fileName)}>&times;</button>
      <button>{fileName}</button>
    </div>
  ));

  const options = {
    autoIndent: "full",
    contextmenu: true,
    fontFamily: "monospace",
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: "always",
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className="App">
      <Folder explorer={explorer} handleInsertNode={handleFileSelect} />

      <div className="editor-container">
        <div className="tabs">{fileTabs}</div>
        <Editor
          className="editor"
          height="50vh"
          theme="vs-dark"
          path={files[activeFile].name}
          language={files[activeFile].language}
          defaultValue={editorValue}
          onMount={onMount}
          onChange={(value) => setEditorValue(value)}
          options={options}
        />
      </div>
    </div>
  );
}

export default App;
