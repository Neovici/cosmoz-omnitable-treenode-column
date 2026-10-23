---
'@neovici/cosmoz-omnitable-treenode-column': major
---

Migrate to the async cosmoz-tree 4 API.

`computeSource` now returns a promise that resolves to the sorted
values once their path strings are available. `getComparableValue`
and `getString` (backing sorting, grouping, cell titles and XLSX
export) now resolve asynchronously.

`@neovici/cosmoz-tree` is bumped to `^4.0.0`, where all public
`Tree` methods return promises, and `@neovici/cosmoz-treenode` to
`^7.0.0`.
