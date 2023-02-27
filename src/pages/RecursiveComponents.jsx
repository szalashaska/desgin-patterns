import { RecursiveComponent } from "../components/RecursiveComponents/RecursiveComponent";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

const RecursiveComponents = () => {
  return <RecursiveComponent data={nestedObject} />;
};

export default RecursiveComponents;
