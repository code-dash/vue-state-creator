import * as vscode from 'vscode';
import { init } from './app';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('vue-state-creator.createState', function () {
		init();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
