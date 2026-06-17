# The file has the correct default export. This is a VS Code TypeScript cache issue

Try one of these:

Quick fix: Restart the TypeScript language server:

Press Cmd+Shift+P
Type TypeScript: Restart TS Server
Press Enter
Or reload VS Code:

Press Cmd+Shift+P
Type Developer: Reload Window
Press Enter
Or manually clear the cache:

rm -rf ~/Library/Application\ Support/Code/User/globalStorage/ms-vscode.typescript-vue-plugin

The import is correct and the file exists — it's just VS Code's internal TypeScript cache that needs to be refreshed.
