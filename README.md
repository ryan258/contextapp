This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Lessons 1 - from the [React Context & Hooks Tutorial Playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI) by [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

## Useful Links

- [ReactJS.org Context Docs](https://reactjs.org/docs/context.html)

## Benefits of Using .Consumer > static

- You can use .Consumer in functional components.
- You can consume multiple contexts in one component.

## Updating Context Data

- You can add functions to your Context.Provider
- Pass it down along with state state in the provider.
- Destructure the function out of the context.)
- (Add that function to a component using the context.
- Then we should have access to this function in any component that consumes the context.
- Render the component somewhere. :)

## Multiple Contexts

- Yes, you can have multiple contexts, best broken up into seperate files.
