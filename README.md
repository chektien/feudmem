# Issues

### Firebase
Needs to be 9.6.11 as the latest version contains iOS bugs with this idb module.
Can continue to monitor this issue thread 

Use `yarn upgrade firebase@9.6.11` to install the specific version, and change packages.json to point to the specific version (without `^`).

Another thing is that the tutorials online did not add the `compat` folder when importing firebase dependencies.

A nice firebase expo tutorial is at https://www.youtube.com/watch?v=ql4J6SpLXZA
- need to change the way you interact with Firebase when using version ^9
