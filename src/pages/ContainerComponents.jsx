import axios from "axios";
import { DataSource } from "../components/ContainerComponents/DataSource";
import { ProductInfo } from "../components/ContainerComponents/ProductInfo";
import { ResourceLoader } from "../components/ContainerComponents/ResourceLoader";
import { UserLoader } from "../components/ContainerComponents/UserLoader";
import { UserInfo } from "../components/ContainerComponents/UserInfo";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

const ContainerComponents = () => {
  return (
    <>
      <section>
        <UserLoader userId="123">
          <UserInfo />
        </UserLoader>
      </section>
      <section>
        <ResourceLoader resourceUrl="api/users/123" resourceName="user">
          <UserInfo />
        </ResourceLoader>
        <ResourceLoader resourceUrl="api/products/1234" resourceName="product">
          <ProductInfo />
        </ResourceLoader>
      </section>
      <section>
        <DataSource
          getDataFunc={getServerData("/api/users/123")}
          resourceName="user"
        >
          <UserInfo />
        </DataSource>
        <DataSource
          getDataFunc={getLocalStorageData("message")}
          resourceName="message"
        >
          <Text />
        </DataSource>
      </section>
    </>
  );
};

export default ContainerComponents;
