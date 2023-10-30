
// Store imports
import { store } from "./store/store";
import { Provider } from "react-redux";

// Import paper to user react paper components
import { PaperProvider } from "react-native-paper";

import Navigation from "./Navigation";

const App = () => {
  return (
    // Store provider
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;
