import { connect, Global, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Loading from "./utils/loading";
import DocumentTitle from "./utils/document-title";
import mainStyle from "./styles/main";
import { MenuOverlay } from "./styles/menu-overlay";
import Header from "./header";
import Footer from "./footer";

const Theme = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
    const { isMobileMenuOpen } = state.theme;

    return (
        <>
            <DocumentTitle />
            <Head>
                <meta name="description" content={state.frontity.description} />
                <html lang="en" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="profile" href="http://gmpg.org/xfn/11" />
                <link href={state.theme.favicon} rel="shortcut icon" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap" rel="stylesheet" />
            </Head>

            <Global styles={mainStyle} />

            <Header />

            {isMobileMenuOpen ? (
                <MenuOverlay isVisible={state.theme.isMobileMenuOpen} onClick={actions.theme.toggleMobileMenu} />
            ) : null }

            <main>
                <Switch>
                    <Loading when={data.isFetching} />
                </Switch>
            </main>

            <Footer />
        </>
    );
};

export default connect(Theme);
