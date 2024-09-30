import * as vscode from "vscode";
const GetCurrentFilePath = () => {
  return vscode.commands.registerCommand("dz-ext.getCurrentFilePath", (url) => {
    vscode.window.showInformationMessage(`the url is ${url.path}`);
  });
};

export default GetCurrentFilePath;
