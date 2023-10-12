https://www.patterns.dev/
Design patterns are concepts to solve commonly recurring problems in software architecture.
enhance modularity reuseablity maintainablity cleaner code and easy to refactor of react applications
instead of dubplicating code we try to write more generic components 

Controlled and uncontrolled components , controlled component are more reuseable (the parent component manages the state of the component)
Control-UnControlParrern.txt

prototype Pattern :A popular library that uses the observable pattern (RxJS).
Module Pattern ,The module pattern allows you to split up your code into smaller, reusable pieces

import add, { multiply, subtract, square } from "./math.js"; import * as math from "./math.js"; math.default(7, 8);math.multiply(8, 9);   
https://codesandbox.io/embed/green-sound-j60fl
Mixin Pattern :The React team encouraged the use of higher order components instead, which can now often be replaced by Hooks.
https://codesandbox.io/embed/zen-franklin-gvusj

Mediator/Middleware Pattern : A good use case for the mediator pattern is a chatroom! The users within the chatroom won't talk to each other directly. Instead, the chatroom serves as the mediator between the users.
https://codesandbox.io/embed/late-glade-7gjmr
We can add this header in a middleware callback.The next method calls the next callback in the request-response cycle

Compound Components Pattern : Create multiple components that work together to perform a single task
Compound Components Pattern.txt

Layout Components Pattern
Layout Components Pattern.txt

List Virtualization https://react-window.vercel.app/#/examples/list/fixed-size
react-window is a rewrite of react-virtualized by the same author aiming to be smaller, faster and more tree-shakeable.

Some modern browsers now support CSS content-visibility. content-visibility:auto allows you to skip rendering & painting offscreen content until needed.
pagination
debounce
yagni principle ,You Ain't going to need it

lazy and suspense and fallback
dependency inversion
SWC vs babel
open-close principle open for extention close for modifaction
Advantages of OCP:
1-Minimize the possibilities of error by not modifying existing classes.
2-Easily add new functionalities by adding new classes wherein no current functionality depends on the new classes.
3-Promote the Single Responsibility Principle
4-Unit test each class

cqrs pattern
sepration of concern , single responsiblity