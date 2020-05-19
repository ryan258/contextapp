This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Lessons 1 - 8 from the [React Context & Hooks Tutorial Playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI) by [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

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
- Remember that each consumer will be expecting a function(that takes a context object) that returns some JSX.
- Note how the Parent consumer wraps the child.
- What's nice is that the two context work independently of one another. :)
- But this is where REACT HOOKS come into play and save us from having to use all this consumer stuff.

For Lessons 9 - 12 go to the [Hooks Repo](https://github.com/ryan258/hooksapp) to continue following along.

# Now we're picking up on lesson #13

If we're using the functional component we can't use the static contextType method of consuming the context. (We could use a .Consumer, but this is much cleaner)

So we're going to switch the class component to a functional component and use the useContext() hook.

- Import useContext
- Rewrite the component as a functional component
- Use the useContext() hook to consume the context inside the functional component
- Pass useContext() the context we want to use and that will give us access to everything we are passing through the .Provider()
- Then we'll destructure what we want from the context
