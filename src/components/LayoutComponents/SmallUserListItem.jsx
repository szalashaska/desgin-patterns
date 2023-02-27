export const SmallUserListItem = ({ user }) => {
  const { name, age } = user;

  return (
    <li>
      Name: {name}, Age: {age} years
    </li>
  );
};
