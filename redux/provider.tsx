import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface providerProps {
  children: React.ReactNode;
}

const ReduxProvider: FC<providerProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
