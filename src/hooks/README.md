## Notes on useLocalStorage Custom Hook

This hook was made based on the javascript utility tool used in the kent workshop.

The original tool used the JSON stringify and parse to be able to serialize the data. This utility was also kept and used in the typescript version of the tool.

### Signature

The useLocalStorageState takes in a string as the key value and the default value of type any to be an empty string. it then returns an array with the any value and the React.Dispatch of type any function, the latter works as the value setter.

The signature of the custom hook, parameters and return value

```typescript
function useLocalStorageState(key: string, defaultValue: any = ""): [any, React.Dispatch<any>] {}
```

### complex useState

The function contains a complex useState

```typescript
const [value, setValue] = useState(args...):['return-array']{}
```

The then a constant is defined to check if there is currently an item in local storage with the passe key, if any. If the value is default then it won't enter the conditional code and thus returning default. If a key is present then parsed value of this constant is set.

### useEffect

```typescript
const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
        return JSON.parse(valueInLocalStorage);
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
});
```

then we make use of a use effect to be able to write into the local storage every time that key or the state is changed, this placed in the dependencies array.

This is done with the line:

```typescript
window.localStorage.setItem(key, "value-that-we-write");
```

In this implementing the value is the useState value.

```typescript
window.localStorage.setItem(key, JSON.stringify(state));
```

Here we need to deserialize through the _JSON.stringify(any)_ so that the value can go into local storage.

## Function return

We then return an array of state and setState, just like in a standard 'useState' hook, thus having out custom hook that sets data and new keys every time that the function runs, furthermore the useEffect keep on writing on the passed key.

```typescript
return [state, setState];
```

## Exporting the Hook

The hook is exported for use in other files as such:

```typescript
export { useLocalStorageState };
```

We also export an object that contains the key and the value, this can then be accessed through a import as such:

```typescript
import { localStorageKeys, useLocalStorageState } from "hooks/useLocalStorage";
```

It can then be used with the similar syntax as the useState hook.

## Implementation

The hook is used before the return but within the App FC of the main application.
