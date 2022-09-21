import Button from "@mui/material/Button";

import "./styles.css";
import CustomModal from "./components/CustomModal";
import StepperForm from "./features/StepperForm";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Keyring's React Challenge 🚀</h1>
      <h2>Done by Ahmed</h2>
      <h3>19. Sept. 2022</h3>
      <Button variant="contained">FORK THIS SANDBOX</Button>

      <CustomModal Trigger={(props) => <Button {...props}>Create Rule</Button>}>
        {({ closeModal }) => (
          <StepperForm
            steps={[
              { index: 0, title: "Select Expression" },
              { index: 1, title: "Define Rule Set" },
              { index: 2, title: "Create Rule" },
            ]}
            closeModal={closeModal}
          />
        )}
      </CustomModal>
    </ThemeProvider>
  );
}
