import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { filesToCreate } from './files';
import * as json from './create-vue-store.json';

/**
 * Get project root directory
 *
 * @return  {String}  [return description]
 */
const getPath = () => {
  if(vscode.workspace.workspaceFolders) {
    return vscode.workspace.workspaceFolders[0].uri.fsPath;
  }
  return '';
}

/**
 * Check if the configration file .create-vue-store.json exist in the root folder
 *
 * @return  {Boolean}  [return description]
 */
const checkForConfigurationFile = () =>{
  return fs.existsSync(path.join(getPath(), '.create-vue-store.json'))
}

/**
 * Get the configuration file
 *
 * @return  {Buffer}  [return description]
 */
const getConfigurationFile = () =>{
  return fs.readFileSync(path.join(getPath(), '.create-vue-store.json'));
}

/**
 * Show the input box in the editor
 *
 * @param   {String}  jsonModule
 *
 * @return  {void}
 */
const showInputBox = (jsonModule: string) => {
  vscode.window.showInputBox({
    value: '/',
    prompt: `Create a new state`,
    ignoreFocusOut: true,
    valueSelection: [-1, -1]
  }).then((fullpath) => {
    if (!fullpath) return;
    generateFiles(fullpath, jsonModule);
  })
}

/**
 * Generate the default configuration file
 *
 * @param   {object}  json
 *
 * @return  {void}
 */
const createConfigurationFile = (json: object) => fs.writeFileSync(path.join(getPath(), '.create-vue-store.json'), JSON.stringify(json));

/**
 * Initialize the function
 *
 * @return  {void}
 */
export const init = () => {
  if(checkForConfigurationFile()){
    const modulesPath = getConfigurationFile().toString();
    const jsonModule = JSON.parse(modulesPath);
    if(!fs.existsSync(path.join(getPath(), jsonModule.modules))){
      return vscode.window.showErrorMessage('Modules path doesn\'t exist, check the configration file .create-vue-store.json!')
    }
    showInputBox(jsonModule.modules);
  } else {
    createConfigurationFile(json);
    vscode.window.showErrorMessage('No configuration file detected! Create a default one .create-vue-store.json')
  }
  
}

/**
 * Generate all the required files for the state
 *
 * @param   {string}  folderName
 * @param   {string}  jsonModule
 *
 * @return  {void}
 */
const generateFiles = (folderName: string, jsonModule: string) => {
  fs.mkdirSync(path.join(getPath(), jsonModule, folderName))
  Object.entries(filesToCreate).map(([key, content]) => {
    fs.writeFile(path.join(getPath(), jsonModule, folderName, key), content, err => {
      if(err) {
        console.error(err);
        return vscode.window.showErrorMessage('Failed to create file' + key)
      }
      vscode.window.showInformationMessage('Created file ' + path.join(getPath(), jsonModule + key))
    })
  })
}