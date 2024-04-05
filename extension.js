const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand('t-fileheader', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const filePath = editor.document.fileName;
      const fileName = filePath.split(/\\|\//).pop();

      // 설정에서 저자 이름과 설명 가져오기
      const config = vscode.workspace.getConfiguration('fileHeader');
      const author = config.get('authorName', 'Author Name'); // 기본값 설정
      const authorEmail = config.get('authorEmail', 'Author Email'); // 기본값 설정
      const description = config.get('description', 'File description');

      // 생성일을 YYYY-MM-DD 형식으로 설정
      const createDate = new Date().toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      let fileHeader = `// Filename: ${fileName}\n`;
      fileHeader += `// Author: ${author}\n`;
      fileHeader += `// Email: ${authorEmail}\n`;
      fileHeader += `// Creation Date: ${createDate}\n`;
      fileHeader += `// Description: ${description}\n\n`;

      const position = new vscode.Position(0, 0);
      editor.edit((editBuilder) => {
        editBuilder.insert(position, fileHeader);
      });
    }
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
