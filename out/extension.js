"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const app_1 = require("./app");
function activate(context) {
    let disposable = vscode.commands.registerCommand('vue-state-creator.createState', function () {
        app_1.init();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map