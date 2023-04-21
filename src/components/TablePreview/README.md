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

---

## Handler

```typescript
const handleCopy = () => {...}
```

This function is called when the Copy button is clicked. It checks if the tableRef is not null and if it is not, calls the copyTableToClipboard function passing the _tableRef.current_ as an argument.

---

## Where the magic happens

### Function signature

```typescript
const copyTableToClipboard = (table: HTMLTableElement) => {...}
```

This function takes in the argument of a HTMLTableElement called table, A new ClipboardItem object is created, which contains the data to be copied to the clipboard. In this case, the data is an HTML string of the table. The Blob constructor is used to create a binary large object (BLOB) that represents the table as a file-like object with a specified MIME type. The Blob object is passed as the first argument to the ClipboardItem constructor. The second argument to the Blob constructor is an options object that specifies the MIME type of the Blob.

---

## Clipboard class

The ClipboardItem class is a part of the Clipboard API and provides a way to specify one or more types of data to be copied to the clipboard. It represents a single item in the clipboard, and can contain one or more representations of the same data, each in a different format.

The ClipboardItem constructor takes an object that specifies the data to be copied to the clipboard. The keys of the object represent MIME types, and the values represent the data in that format.

It is created with a single HTML string containing the outerHTML of the table element, and the MIME type of the data is set to 'text/html'. This means that when the item is copied to the clipboard, it will be available in HTML format.

The ClipboardItem is then passed to the navigator.clipboard.write() method to copy the data to the clipboard.

```typescript
        const htmlData = new ClipboardItem({Blob b}})

```

---

## Blob class and object

The Blob class is a built-in class in JavaScript used to represent a raw data of a specific MIME type (Multipurpose Internet Mail Extensions).

A blob is typically used to store and handle binary data in a format that can be easily transferred over a network. For example, it can be used to represent an image, audio or video file, or any other file type.

The Blob class has a constructor that takes an array of raw data as its first parameter and an options object as its second parameter. The options object can be used to specify the MIME type of the data stored in the blob. In this case:

```typescript
"text/html": new Blob([table.outerHTML], { type: "text/html" })
```

---

## Navigator class

The navigator is a global object in the web browser that provides information about the user's browser and device. It can also be used to access various browser features, including the clipboard.

The clipboard property of the navigator object is used to read and modify the contents of the user's clipboard. It provides two methods: read() and write(), which respectively allow reading from and writing to the clipboard.

The write() method accepts an _array_ of _ClipboardItem objects_ as its argument, which represent the data to be written to the clipboard. **ClipboardItem** is a new API introduced in modern browsers and allows copying rich data types to the clipboard.

navigator.clipboard.write() is called with an array of one ClipboardItem, which contains the HTML data of the table as a Blob object with the MIME type of "text/html". This writes the HTML data to the user's clipboard, allowing them to paste it elsewhere as rich HTML data.

```typescript
navigator.clipboard.write([htmlData]);
```

---

## HTML table tag with ref prop

```typescript
<table ref={tableRef}>
```

This attaches/wires the tableRef reference to the table element. This allows us to access the table element and its properties in the component.
