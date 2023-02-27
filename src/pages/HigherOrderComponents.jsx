import { printProps } from "../components/HigherOrderComponents/printProps";
import { UserInfo } from "../components/HigherOrderComponents/UserInfo";
import { withUser } from "../components/HigherOrderComponents/withUser";
import { UserInfoFormWithResource } from "../components/HigherOrderComponents/UserInfoFormWithResource";
import { UserInfoFormWithUser } from "../components/HigherOrderComponents/UserInfoFormWithUser";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "234");

const HigherOrderComponents = () => {
  return (
    <>
      <section>
        <UserInfoWrapped a={1} b="Hello" c={{ name: "Shaun" }} />
      </section>

      <section>
        <UserInfoWithLoader />
      </section>

      <section>
        <h1>with user</h1>
        <UserInfoFormWithUser />
      </section>

      <section>
        <h1>with resource</h1>
        <UserInfoFormWithResource />
      </section>
    </>
  );
};

export default HigherOrderComponents;
