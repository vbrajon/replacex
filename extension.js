async function run() {
  const prompt = await vscode.window.showInputBox({ prompt: "Evaluate" })
  if (!prompt) return
  const editor = vscode.window.activeTextEditor
  if (!editor) return
  editor.edit((editBuilder) => {
    // prettier-ignore
    editor.selections.forEach((selection, i) => {
      const s = editor.document.getText(selection)
      let e, x = s
      try { e = eval(`(${x})`) } catch (e) {}
      try { x = JSON.parse(x) } catch (e) {}
      try { x = eval(prompt) } catch(e) {}
      if (typeof x !== "string") x = JSON.stringify(x, null, 2)
      editBuilder.replace(selection, x)
    })
  })
}

const vscode = require("vscode")
function activate(context) {
  const disposable = vscode.commands.registerCommand("replacex.prompt", run)
  context.subscriptions.push(disposable)
}
function deactivate() {}
module.exports = { activate, deactivate }

/*
identity = s
eval = e
json = x
regex = s.replace(/[()]/g, '')
toggle = !x
increment = x+1
duplicate = s+s
condition = x > 10 ? 'yes' : 'no'
obj_modify = (x.y = 1, x) or 
arr_filter = x.filter(v => v)
*/
