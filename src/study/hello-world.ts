import * as vscode from "vscode";

const HelloWorld = (): vscode.Disposable => {
  return vscode.commands.registerCommand('dz-ext.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from study!');
  });
};

export default HelloWorld;
