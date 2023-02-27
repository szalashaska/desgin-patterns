import React from "react";
import { UserInfo } from "../components/CustomHooks/UserInfo";
import { UserInfoDataSource } from "../components/CustomHooks/UserInfoDataSource";
import { UserInfoID } from "../components/CustomHooks/UserInfoID";
import { UserInfoResource } from "../components/CustomHooks/UserInfoResource";

const CustomHooks = () => {
  return (
    <>
      <section>
        <UserInfo />
      </section>

      <section>
        <h2>User:</h2>
        <UserInfoID userId="123" />
        <UserInfoID userId="345" />
      </section>

      <section>
        <h2>Resource:</h2>
        <UserInfoResource userId="123" />
        <UserInfoResource userId="345" />
      </section>

      <section>
        <h2>Data source:</h2>
        <UserInfoDataSource userId="123" />
        <UserInfoDataSource userId="345" />
      </section>
    </>
  );
};

export default CustomHooks;
