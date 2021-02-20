import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const horizonTheme = {
    name: "horizon-theme",
    roots: {
        theme: Theme,
    },
    state: {
        theme: {
            autoPrefetch: "in-view",
            menu: [
                ["Home", "/"],
                ["Page 2", "/page-2"],
            ],
            favicon:
                "https://raw.githubusercontent.com/leobaiano/frontity-horizon-theme/main/src/assets/images/favicon.png",
            logo:
                "https://raw.githubusercontent.com/leobaiano/frontity-horizon-theme/main/src/assets/images/horizon-logo.png",
            isMobileMenuOpen: false,
        },
    },
    actions: {
        theme: {
            toggleMobileMenu: ({ state }) => {
                state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
            },
            closeMobileMenu: ({ state }) => {
                state.theme.isMobileMenuOpen = false;
            },
        },
    },
    libraries: {
        html2react: {
            processors: [image, iframe, link],
        },
    },
};

export default horizonTheme;
