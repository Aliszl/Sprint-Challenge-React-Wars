# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
        React JS is am open source  JS library developed by facebook, used to build user interface components which are reusable, don't have to be reloaded and are therefore fast.

1. What does it mean to think in react?

            ‘Thinking in react’ is seeing a project design in terms of the components required.  

1. Describe state.
            State is  assigning a certain condition to a piece of data, a state can be changed to affect certain behaviours.  Equivalent to local variables in a function.
            Allows components to be made dynamic.

1. Describe props.
        Props or properties are ‘immutable’ arguments, like a functions arguments that are  passed into a component via the render method (often the state of a parent component is passed down as  prop to a a child element)

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
            Side effects are anything that must be computed , calculated or rendered in a component  (in addition to the function output itself) such as console.logs or data fetching(api requests). You use an effect hook to perform a side effect
