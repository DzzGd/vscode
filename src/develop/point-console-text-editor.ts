import * as vscode from "vscode";

const PointConsoleTextEditor = () => {
  return vscode.commands.registerCommand(
    "dz-ext.log",
    (
      editor: vscode.TextEditor,
      edit: vscode.TextEditorEdit,
      position: vscode.Position
    ) => {}
  );
};

export default PointConsoleTextEditor;
