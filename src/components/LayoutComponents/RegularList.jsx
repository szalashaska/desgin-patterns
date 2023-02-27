export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <ul>
      {items.map((item, i) => (
        <ItemComponent
          key={`${Date.now()}-${i}`}
          {...{ [resourceName]: item }}
        />
      ))}
    </ul>
  );
};
