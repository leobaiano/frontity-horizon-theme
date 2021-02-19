import { connect } from "frontity";
import MainHeader from "./header";
import Logo from "./logo";
import MainNavigation from "../main-navigation";

const Header = ({ state }) => (
    <MainHeader>
        <Logo />
        <MainNavigation />
    </MainHeader>
);
export default connect(Header);
