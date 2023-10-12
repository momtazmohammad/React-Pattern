The container-presentational pattern made up of both presentational components and container components is abstract enough to find use across many different frontend frameworks other than React, including Angular and Vue.js.

Container components
These components create and maintain data, pushing it further to their child components. They contain no UI elements. Their main goal is to deliver data and business logic to presentational components. It is a co-called smart component because it takes care of all the inner workings of the app in the background. Aside of smart components, we also have…

Presentational components
Their job is to make presentational data available to the UI. This data is first passed by their parent components. Components such as this can be described as dumb components because they don’t do anything all by themselves. They typically don’t have a local state unless they need it to display the UI in a specific way.
