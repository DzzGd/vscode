import * as vscode from "vscode";
const WelcomePage = () => {
  return vscode.commands.registerCommand("dz-ext.showWelcomePage", (url) => {
    const panel = vscode.window.createWebviewPanel(
      "testWelcome",
      "我的欢迎页",
      vscode.ViewColumn.One,
      {
        enableScripts: true,
      }
    );
    panel.webview.html = `
    <!DOCTYPE html>
    <html lang="zh-cn">

    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
      <meta charset="utf-8" />


    </head>

    <body class="">
      <div>dz</div>
    </body>

    </html>
`;
  });
};

export default WelcomePage;
