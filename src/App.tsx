import "./App.css";
import ImagePicker from "./components/ImagePicker";
import { ThemeProvider } from "./components/theme-provider";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="flex flex-col gap-5 mb-5">
          <ThemeSelector />
          <ImagePicker />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
