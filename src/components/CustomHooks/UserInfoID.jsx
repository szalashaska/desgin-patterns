import { useUser } from "./useUser";

export const UserInfoID = ({ userId }) => {
  const user = useUser(userId);

  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <div>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
