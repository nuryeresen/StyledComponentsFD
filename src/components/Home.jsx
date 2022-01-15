import ChangeThemeButton from "./ChangeThemeButton";
import { PrimaryButton, StyledButton } from "../styledComponents";
import { Card } from "../styledComponents/Card";

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <StyledButton as="a" href="http://google.com">
          Search
        </StyledButton>

        <ChangeThemeButton />
        <br />
        <Card>
          This website created by Şahinde Nur Yereşen
          <PrimaryButton
            variant="outline"
            as="a"
            href="https://www.linkedin.com/in/%C5%9Fahinde-nur-yere%C5%9Fen/"
          >
            Linkedin
          </PrimaryButton>{" "}
        </Card>
      </div>
    </>
  );
};

export default Home;
