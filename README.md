# ReplaceX
> Replace selection with JS expression result where `x` is your selection

## Usage

- Select text or multi-cursor
- Hit <kbd>cmd+e</kbd> OR <kbd>cmd+maj+p</kbd> and search for "Eval"
- Enter a JS expression in the prompt like:
  - `x + 1` or  to increment **numbers**
  - `x.replace(/foo/, 'bar')` to replace **text**
  - `!x` to toggle **booleans**
  - `x.map(v => v.name)` to loop over an **array** and extract a property
- Where `x` is your selection **parsed as JSON**
- And `s` is the original string
- And `e` is the evaluated string, shortcut for `eval(x)`
- And `i` is the index of the cursor

## Ideas

- Allow upper arrow to go back in history in the prompt
- Document more realistic examples and more advanced ones
- Alias expressions like `up = s.toUpperCase()`, then reference it later with `up`
- REPL mode to have live preview of the result and autocomplete
- State mode to have a state object that can be used in the expression later, could be useful for aliases
- Allow await import('https://external-url-like-esm.sh/')
- Allow search for previous prompt
- Allow prompt crafting via copilot

## Development

```bash
git clone https://github.com/vbrajon/replacex
ln -s replacex ~/.vscode/extensions/vbrajon.replacex-latest
```
> Note: that you need to reload the window each time you make a change to the extension using the vscode command: cmd+maj+p > Developer: Reload Window
