import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const HorizonLink = ({ children, ...props }) => {
return (
    <Link {...props}>
      {children}
    </Link>
  );
};

export default connect(HorizonLink, { injectProps: false });
