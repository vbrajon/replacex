# ReplaceX
> Replace selection with JS expression result where `x` is your selection

## Usage

- Select text or multi-cursor
- Hit <kbd>cmd+e</kbd> OR <kbd>cmd+maj+p</kbd> and search for "Eval"
- Enter a JS expression in the prompt like:
  - (bool) toggle: `!x`
  - (num) increment: `x + 1`
  - (str) append: `s + ' // ' + e`
  - (str) split: `s.split(',').join('\n')`
  - (arr) filter: `x.filter(v => v)`
  - (obj) modify: `(x.y = 1, x)`
  - (any) condition: `!x ? 'yes' : 'no'`
  - or use `state` with a selection to save it as the current state
  - or use `state` without any selection to dump the current state
- Where `x` is your selection **parsed as JSON**
- And `s` is the original string
- And `e` is the evaluated string, shortcut for `eval(x)`
- And `i` is the index of the cursor
- And `j` is `i + 1`

## Ideas

- Prompt crafting via copilot
- await import('https://external-url-like-esm.sh/')
- REPL mode to have live preview of the result and autocomplete

## Development

```bash
git clone https://github.com/vbrajon/replacex
ln -s replacex ~/.vscode/extensions/vbrajon.replacex-latest
```

> Note: that you need to reload the window each time you make a change to the extension using the vscode command: cmd+maj+p > Developer: Reload Window
