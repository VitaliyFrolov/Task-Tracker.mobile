import { Provider } from "react-redux";
import { AppNavigator } from "./src/app/navigation";
import { store } from "./src/app/store";

export default function App() {
  return (
    <Provider store={store}>
       <AppNavigator />
    </Provider>
  );
}
