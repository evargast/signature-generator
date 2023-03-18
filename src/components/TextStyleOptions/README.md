## Notes about the component

OK so some notes on the made component the process and the use of the stroy book and how everything is wired up.

## UI

First the integration of the UI. This was done though the return statement of the FC where all the html tags and JSX components are, here the pertinent keys that are used for such elements are defined and thus be used in the component behaviour logic. e.g. 'isBold' key in the react spectrum components.

## Pertinent Properties

First once the user interface has been defined the needed interface values need to be also defined, with the relevant types, the _?_ if the value is to be optional, if it is left without asignment its undefined. as such:

```typescript
interface Props {
    isBold?: boolean;
    isItalics?: boolean;
}
```

### Note

This are the components to be passed both in the FC:

```typescript
const ActionGroupButtonComponent: FC<Props> = ({ isBold, isItalics }) => {};
```

that are then accessible in the storybook expanded arguments.

```typescript
[...args];
```

### Setting the values.

The initial request was to use an object yet as the problem, but after some refinement instead of an object the next best implementation was for the use of given useState hook provided by the Adobe documentation:

```typescript
const [selected, setSelected] = React.useState<Selection>(new Set(["list"]));
```

Then due to the fact that we needed to set the interface values, and this was not done by the default hook the implementation of an complex hook was implemented, with the explicit use of the anonimous funtion, like so:

```typescript
const [selected, setSelected] = React.useState<Selection>(() => {});
```

By using the complex implementation of the useState we then create an array within it where the keys are pushed depending on the interface values. the implementation becomes as such with the logic:

```typescript
const initialValue: string[] = [];

if (isBold) {
    initialValue.push("bold");
}

if (isItalics) {
    initialValue.push("italics");
}

return new Set(initialValue);
```

All of this within the complex useState hook.

Very important to return the expected type, in this case Selection expects a Set so a new Set is made with the elements of the local array that have been pushed.

At this point the setSelected is called every time onSelectionChange prop is called this updating the values of the array. And being tracked by the selectedKeys prop of the Action Group component. With this impementation we have controlled by having the selectedKeys prop having the selected interface values.

## Storybook setup

Within the storybook the props from the interface are passed with the ...args, thus the Storybook has access to the interface references that have been also passe into the FC.

We then make the specific stories that are all the branches of possible state combinations in this case, all switches off, all on and one or the other. this follows the following syntax e.g.:

```typescript
const BoldOffItalicsOff = ActionGroupButtonComponentStory.bind({});
BoldOffItalicsOff.args = {
    isBold: false,
    isItalics: false,
};
```

Once the 'story' scenario has been binded we need to also 'export' it as to make it accessible on the storybook, this is one by passing the created story to the export at the end of the file, e.g.:

```typescript
export { BoldOffItalicsOff, BoldOnItalicsOff, BoldOffItalicsOn, BoldOnItalicsOn };
```

With all of this at hand the component is finished and ready to be used and tested in the storybook with all the corresponding stories, the values are set though the useState complex hook and the values pushed with the corresponding keys that were set to the buttons.

## Extra Notes From Ed:

const [selected, setSelected] = React.useState<Selection>([])

Behind the scenes, useState crea un _anonymous function_ para lo que este entre los parentesis
por ejemplo useState([]) se convierte en useState( () => [] ) que es lo mismo que useState( () => { return []})
que se podria convertir a useState( () => { const initialValue = []; return initialValue })

Lo importante es que el anonymous function siempre tenga un RETURN, el return va a ser el default value del hook.
