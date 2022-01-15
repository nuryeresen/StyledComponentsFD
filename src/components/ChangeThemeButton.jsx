import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { PrimaryButton } from "../styledComponents";
function ChangeThemeButton() {
  const { setThemeName, themeName } = useContext(ThemeContext);

  return (
    <PrimaryButton
      onClick={() => {
        setThemeName((prev) => (prev === "light" ? "dark" : "light"));
        console.log(themeName);
      }}
    >
      Theme Changer
    </PrimaryButton>
  );
}
export default ChangeThemeButton;
