//HOC pattern , it is a function get component and instead of returning jsx returning a component which is used for extened functionality ,can be used for validation , logging ,...

import withPreLoadingOption from "./withPreLoadingOption";

const BaseTodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.task}</li>
      ))}
    </ul>
  );
};

const HocPattern = withPreLoadingOption(BaseTodoList);
export default HocPattern;
// function withStyles(Component) {
//   return props => {
//     const style = { padding: '0.2rem', margin: '1rem' }
//     return <Component style={style} {...props} />
//   }
// }
 
// const Button = () = <button>Click me!</button>
// const Text = () => <p>Hello World!</p>
 
// const StyledButton = withStyles(Button)
// const StyledText = withStyles(Text)

//https://codesandbox.io/embed/withloader-rslq4

//We can also compose multiple Higher Order Components.
// export default function withHover(Element) {
//   return props => {
//     const [hovering, setHover] = useState(false);

//     return (
//       <Element
//         {...props}
//         hovering={hovering}
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//       />
//     );
//   };
// }
// export default withHover(
//   withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6")
// );

//In some cases, we can replace the HOC pattern with React Hooks.
//using Hooks can reduce the depth of the component tree.