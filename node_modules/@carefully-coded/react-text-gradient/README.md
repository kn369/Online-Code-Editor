# React-Text-Gradient

![Icon](https://react-text-gradient.carefully.codes/icon.svg)

A simple React component for awesome, animated or static text gradients. 

[Documentation + Examples](https://react-text-gradient.carefully.codes/)

The library consists of a single component `Text` which when wrapped 
around text or a component containing text applies a gradient to it.

## Installation

Install it from npm: 

```npm install @carefully-coded/react-text-gradient```

Or with Yarn:

```yarn add @carefully-coded/react-text-gradient```

## Usage

### Static gradient text
Add a simple static gradient to your text: 

```TSX
import Text from 'react-text-gradient';
...
<Text gradient={{ from: '#818CF8', to: '#5B21B6' }}>Some fancy text</Text>
```

### Animated gradient text
Use the `animateTo` prop to apply a specific gradient to animate to, or use `animate` to animate between the `from` and `to` positions of 
the initial gradient. Make sure to not set the same prop for `animateTo` and `gradient` or you will animate between the same color (i.e nothing will happen)

Animate between the `from` and `to` colors
```TSX
import Text from 'react-text-gradient';

<Text 
  gradient={{ from: '#818CF8', to: '#5B21B6' }} 
  animate
  animationDuration={4000}
>
  Some fancy animated text
</Text>
```

Specific gradient to animate to:
```TSX
import Text from 'react-text-gradient';

<Text 
  gradient={{ from: '#818CF8', to: '#5B21B6' }} 
  animateTo={{ to: '#818CF8', from: '#5B21B6' }} 
  animationDuration={4000}
>
  Some fancy animated text
</Text>
```

### Enclosing tags
Any text inside of the component will have a gradient added, so it's easy just to add a gradient by wrapping existing components. 

```TSX
import Text from 'react-text-gradient';

<Text 
  gradient={{ from: '#818CF8', to: '#5B21B6' }} 
  animate
  animationDuration={4000}
>
  <h1>Large gradient text</h1>
</Text>
```

### Linear gradient
Gradients are radial by default (we think this looks better most of the time). Set `type` to `linear` to create a linear gradient. 

When adding a linear gradient, add a `degree` to pick what direction the gradient should be in - this defaults to `90`. 
```TSX
import Text from 'react-text-gradient';

<Text 
  gradient={{ from: '#818CF8', to: '#5B21B6', type: 'linear', degree: 90 }} 
  animateTo={{ to: '#818CF8', from: '#5B21B6', degree: 120 }} 
  animationDuration={4000}
>
Some fancy text with a linear gradient
</Text>
```

### Adding styles directly
Styles can be added to the text directly by specifying a `style` or `className` prop. **Note** that any `background` css attribute may be overwritten 
due to the applied gradient. 
```TSX
import Text from 'react-text-gradient';

<Text 
  style={{fontSize: '20px'}}
  gradient={{ from: '#818CF8', to: '#5B21B6' }} 
  animate
  animationDuration={4000}
>
  Text with specific font size
</Text>
```

## `<Text />` Props

```Typescript
type Gradient = {
  type?: 'linear' | 'radial';
  from?: string;
  to?: string;
  degree?: number;
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  gradient: Gradient;
  animate?: Boolean;
  animateTo?: Gradient;
  animateDuration?: number;
}
```

| Prop Name   | Type        | Default       | Description       |
| ---        |    ----   |   ----   |        --- |
| `gradient`  | `Gradient`       | `undefined`   | Starting gradient |
| `animate` | `Boolean` | `false` | Animate the gradient text by transitioning between `from` and `to` colors |
| `animateTo`  | `Gradient`       | `undefined`   | Gradient to animate to |
| `animateDuration`  | `number`       | `4000`   | Duration of animation in ms  |
