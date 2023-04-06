## Notes on useLocalStorage Custom Hook

This hook was made based on the javascript utility tool used in the kent workshop.

The original tool used the JSON stringify and parse to be able to serialize the data. This utility was also kept and used in the typescript version of the tool.

Regarding the typescript version of the tool, the generic type T was used in the custom hook to be able to use any generic type. The initial implementation makes use of a logic that checks to see if the previous key is not equal to the current key, if so then the previous key is removed from local storage.
