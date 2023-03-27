## Username input component notes.

The component makes use of the previously made component with the buttons with the italics and bold
options.

A new prop is to be made called onChange in the action group component, since there is no predefined one there is no issue with overriding it.

## UI

To make the user interface of this new component first the textfield component was imported and passed into the new component return. since there was a need to keep everything aligned the Flex component was also imported and implemented for use. Initially two flex components were used to get the job done but defining the direction to 'row' and setting the alignedItems props to 'end' accomplished the same task in a more optimal way.

Once the Textfield component was integrate the previously made component of TextStyledOptions was imported into the parent file and placed into the new parent component.

## Passing data from child to parent.

In order to pass the data from the child to the parent a new prop was defined in the child, with the name of onChange within the child file as such:

```typescript
onChange?: (selectedKeys: (string | number)[]) => void;
```

The type was changed from the initial proposal as to be able to work with the Selection complex type and the Key complex type. Selection => Set(Keys) => Key => string | number.
Thus making this change allowed for the onChange prop to work with the following implementation.

This prop is then passed into child TextStyleOptions FC props explicitly.

Then the function _handleSelectionChange_ was defined with a signature that would take in a Selection as did the initial setSelected and not cause conflict. Since this function was to be called every time that there was a change in selection the setSelected was moved into the new function to be executed as the first thing. e.g.

```typescript
const handleSelectionChange = (selectedKeys: Selection) => {
    setSelected(selectedKeys); //setting the state for when onSelectionChange is triggered.
    //if the optional onChange function if it is defined.
    if (onChange) {
        const values: (string | number)[] = Array.from(selectedKeys);
        onChange(values);
    }
};
```

Then a if statement checks if there is a onChange prop being called and if so then a new array either string or number is made and the values of the passed into it using the function from() from the class Array as such:

```typescript
const values: (string | number)[] = Array.from(selectedKeys);
```

Now that we have the array we just pass it into the onChange prop that expects a string or number array.

## Handle the change in the parent component.

From the parent component and our UI we now have the ability to use the onChange prop within the TextStyleOptions component as such:

```typescript
            <TextStyleOptions onChange={...}|"..." />

```

Since we want to get the states of the buttons in the father component we then make a new function in the parent component that will be called when onChange is called, here it was named _handleButtonChange_, such a function has a signature that expects a string or number array, the function simply prints the passed in values into the console. This is how the function looks like:

```typescript
const handleButtonChange = (values: (string | number)[]) => {
    console.log(values);
};
```

We can the pass this function from the parent to the new child onChange prop as such:

```typescript
<TextStyleOptions onChange={handleButtonChange} />
```

With this implementation we have the desired result for the ticket at hand.
