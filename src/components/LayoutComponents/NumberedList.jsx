import { Fragment } from "react";

export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <ol>
      {items.map((item, i) => (
        <Fragment key={`${Date.now()}-${i}`}>
          <ItemComponent {...{ [resourceName]: item }} />
        </Fragment>
      ))}
    </ol>
  );
};
