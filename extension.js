async function exec() {
  const prompt = await vscode.window.showInputBox({ prompt: "Input JS expr to execute" })
  if (prompt === undefined) return
  if (prompt === "") return
  const editor = vscode.window.activeTextEditor
  if (!editor) return
  editor.edit(async (editBuilder) => {
    // prettier-ignore
    editor.selections.forEach(async (selection, i) => {
      let j = i + 1
      let s, e, x
      s = e = x = editor.document.getText(selection)
      if (s && prompt === "state")
        try { eval(s);vscode.workspace.getConfiguration().update("replacex.state", s, true);return vscode.window.showInformationMessage("State saved") }
        catch (e) { return vscode.window.showErrorMessage(e.message) }
      const state = vscode.workspace.getConfiguration().get("replacex.state", "")
      vscode.window.showInformationMessage(`State: ${state}`)
      eval(state)
      try { e = eval(`(${x})`) } catch (e) {}
      try { x = JSON.parse(x) } catch (e) {}
      try { x = eval(prompt) } catch(e) {}
      try { if (x instanceof Function) x = x() } catch(e) {}
      if (typeof x !== "string") x = JSON.stringify(x, null, 2)
      editBuilder.replace(selection, x)
    })
  })
}

const vscode = require("vscode")
function activate(context) {
  context.subscriptions.push(vscode.commands.registerCommand("replacex.exec", exec))
}
function deactivate() {}
module.exports = { activate, deactivate }
