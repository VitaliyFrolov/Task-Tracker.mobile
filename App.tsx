import { Provider } from "react-redux";
import { AppNavigator } from "./src/app/navigation";
import { store } from "./src/app/store";
import { AuthProvider } from "./src/app/context/AuthContext";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </Provider>
  );
}
