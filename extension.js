// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "antipilot" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	vscode.window.showErrorMessage('Everything is broken');
	console.log('ANTIPILOT - ');

	vscode.commands.executeCommand('workbench.view.explorer');
	console.log(
		vscode.workspace.getConfiguration().get('workbench.view.explorer')
	);
	let themes = [
		'Red',
		'Light+',
		'Solarized Light',
		'Dark High Contrast',
		'Tinacious Design',
	];

	for (let i = 0; i < themes.length; i++) {
		setTimeout(async () => {
			await vscode.workspace
				.getConfiguration()
				.update(
					'workbench.colorTheme',
					themes[Math.floor(Math.random() * themes.length)]
				);

			console.log(
				'get: ',
				vscode.workspace.getConfiguration().get('workbench.colorTheme')
			);
		}, (1500 + Math.floor(Math.random() * 200)) * (i + 1));
	}

	vscode.commands.executeCommand('workbench.view.explorer');

	vscode.window.showErrorMessage('Everything is broken'); // test
	let disposable = vscode.commands.registerCommand(
		'antipilot.goodbyeWorld',
		function () {
			// The code you place here will be executed every time your command is executed

			// Display a message box to the user
			vscode.window.showInformationMessage('Goodbye Cruel World :(');
		}
	);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate,
};
