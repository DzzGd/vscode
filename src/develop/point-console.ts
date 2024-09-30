import * as vscode from "vscode";

const PointConsole = () => {
  return vscode.languages.registerCompletionItemProvider(
    "javascript",
    {
      provideCompletionItems(document, position, token, context) {
        const line = document.lineAt(position);
        const lineText = line.text.substring(0, position.character);

        const pointConsole = new vscode.CompletionItem(
          "log",
          vscode.CompletionItemKind.Function
        );
        // pointConsole.insertText = new vscode.SnippetString("console.log(${1})");

   
        return [pointConsole];
      },
    },
    ".",
  );
};

export default PointConsole;
