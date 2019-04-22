1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    .filter(), .map(), and .concat() are three JavaScript Array/Object Methods that do not produce side-effects. 
    Object.assign - this method creates a brand new object. It copies another object’s properties and values into it, and updates whichever values we want to update in our new object, or adds new key/value pairs.   



1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions:  Action is an object with type and payload property that send data from an application to a store. It is basically description of what happened due to an event that is dispatched to reducers.
    Reducers: Reducers bind together actions and store. When reducer receives action, it will know how to update the state according to the type (what to do) and payload (what needs to be update). Reducers will NEVER update state directly, but will always return new object. 
    Store: The store is the only source of read only data for the application, so it known as a ‘single source of truth’. State tree of an application is stored here. If we have to modify the state we use actions and actions send payloads of information to reducers. 



1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    1.	Application state is stored in the redux store and any component in the application can have access to it whereas component state is stored locally with in the component.
    2.	Good time to use application state is when we need to hold data that is used by application and components whereas good time to use component state is when state information is only relevant to that particular state. 



1.  What is middleware?
    Middleware provides a way to interact/modify with actions that have been dispatched to the store before they reach the store's reducer.  Redux-thunk is an example of middleware. 



1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk allows us to handle asynchronous operations (as redux is synchronous e.g. action-reducer flow) inside our action-creators.  It allows us to write actions that return a function instead of returning an object. It has access to the dispatch function.



1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect /.connect()