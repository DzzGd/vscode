// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import studyCommands from "./study";
import developCommands from "./develop";
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log("activate");
  // studyCommands.forEach((command) => {
  //   context.subscriptions.push(command());
  // });
  developCommands.forEach((command) => {
    context.subscriptions.push(command());
  });
}

// This method is called when your extension is deactivated
export function deactivate() {
  console.log("deactivate");
}
