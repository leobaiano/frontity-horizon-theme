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
            favicon: 'https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-0/s640x640/152237107_2282137575250309_5237895879740619740_o.jpg?_nc_cat=111&ccb=3&_nc_sid=730e14&_nc_ohc=wLircWEf1u8AX8sN-Fj&_nc_ht=scontent.fcgh7-1.fna&tp=7&oh=dc8c4f837b2852c08d55f104d03923d2&oe=6054F016',
            logo: 'https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-0/s640x640/152237107_2282137575250309_5237895879740619740_o.jpg?_nc_cat=111&ccb=3&_nc_sid=730e14&_nc_ohc=wLircWEf1u8AX8sN-Fj&_nc_ht=scontent.fcgh7-1.fna&tp=7&oh=dc8c4f837b2852c08d55f104d03923d2&oe=6054F016'
        },
    },
    actions: {
        theme: {},
    },
    libraries: {
        html2react: {
            processors: [image, iframe, link],
        },
    },
};

export default horizonTheme;
