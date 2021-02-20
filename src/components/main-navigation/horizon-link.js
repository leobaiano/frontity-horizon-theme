import { connect, useConnect } from "frontity";
import Link from "@frontity/components/link";

const HorizonLink = ({ children, ...props }) => {
    const { state, actions } = useConnect();
    const onClick = () => {
        if (state.theme.isMobileMenuOpen) {
          actions.theme.closeMobileMenu();
        }
      };

    return (
        <Link {...props} onClick={onClick}>
        {children}
        </Link>
    );
};

export default connect(HorizonLink, { injectProps: false });
