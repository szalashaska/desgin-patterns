import { NumberedList } from "../components/LayoutComponents/NumberedList";
import { RegularList } from "../components/LayoutComponents/RegularList";
import { SmallProductListItem } from "../components/LayoutComponents/SmallProductListItem";
import { LargeUserListItem } from "../components/LayoutComponents/LargeUserListItem";
import { SmallUserListItem } from "../components/LayoutComponents/SmallUserListItem";
import { LargeProductListItem } from "../components/LayoutComponents/LargeProductListItem";
import { SplitScreen } from "../components/LayoutComponents/SplitScreen";
import LeftHandComponent from "../components/LayoutComponents/LeftHandComponent";
import RightHandComponent from "../components/LayoutComponents/RightHandComponent";
import { Modal } from "../components/LayoutComponents/Modal";

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

const LayoutComponents = () => {
  return (
    <>
      <section>
        <SplitScreen leftWeight={1} rightWeight={3}>
          <LeftHandComponent name="Shaun" />
          <RightHandComponent message="Hello" />
        </SplitScreen>
      </section>
      <section>
        <RegularList
          items={people}
          resourceName="user"
          itemComponent={SmallUserListItem}
        />
        <NumberedList
          items={people}
          resourceName="user"
          itemComponent={LargeUserListItem}
        />
        <RegularList
          items={products}
          resourceName="product"
          itemComponent={SmallProductListItem}
        />
        <NumberedList
          items={products}
          resourceName="product"
          itemComponent={LargeProductListItem}
        />
      </section>
      <section>
        <Modal>
          <LargeProductListItem product={products[0]} />
        </Modal>
      </section>
    </>
  );
};

export default LayoutComponents;
