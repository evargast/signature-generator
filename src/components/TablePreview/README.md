## HTML Copy functionality

So the changes made in the file that allow for the table component to be copied to the
clipboard are the following:

---

### useRef hook use

```typescript
const tableRef = useRef<HTMLTableElement>(null);
```

This creates a reference to the HTML table element in the component using the useRef hook. The useRef hook allows us to access a DOM element and its properties in a React component.

HTMLTableElement is a built-in type in TypeScript that represents a DOM element of type <table>.

```typescript
const handleCopy = () => {...}
```

This function is called when the Copy button is clicked. It checks if the tableRef is not null and if it is not, calls the copyTableToClipboard function passing the tableRef.current as an argument.

---

## Where the magic happens

```typescript
const copyTableToClipboard = (table: HTMLTableElement) => {...}
```

This function takes in the argument of a HTMLTableElement called table, creates a Range object and selects the table passed as an argument. Then it creates a Selection object and adds the Range object to it. After that, it uses the document.execCommand("copy") method to copy the selected content to the clipboard.

---

## Range object

The Range object is a part of the Document Object Model (DOM) API, which is a set of objects that allow JavaScript to manipulate the structure and content of an HTML document. The Range object represents a fragment of a document that can be selected for editing or copying. It is typically used in conjunction with the Selection object, which represents the user's current selection in the document.

In the copyTableToClipboard function, a new Range object is created using the document _createRange()_ method. This range is then expanded to include the entire table element using the range._selectNode(table)_ method, where table is the HTML table element passed as an argument to the function.

---

## Selection Object

The Selection object represents the user's current selection in the document. The _window.getSelection()_ method returns a Selection object that represents the selection. Once the Range object has been expanded to include the entire table element, it is added to the current selection using the _selection.addRange(range)_ method.

Finally, the _execCommand()_ method is called on the document object, passing the argument **"copy"**. This method is used to execute a command on the document, such as copying the selected text or executing a browser-specific command. In this case, calling _**document.execCommand("copy") copies the selected table element to the clipboard.**_

After the table has been copied, the range is removed from the selection using _selection.removeAllRanges()_ just like at the beginning of the function call. This ensures that the selection is cleared and does not interfere with any subsequent copying or pasting operations.

---

## HTML table tag with ref prop

```typescript
<table ref={tableRef}>
```

This attaches the tableRef reference to the table element. This allows us to access the table element and its properties in the component.
