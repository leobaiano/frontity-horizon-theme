import { Head, connect, decode } from "frontity";

const DocumentTitle = ({ state }) => {
    const data = state.source.get(state.router.link);
    let title = state.frontity.title;

    if (data.isTaxonomy) {
        const { taxonomy, name } = state.source[data.taxonomy][data.id];
        const taxonomyCapitalized =
            taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);

        title = `${taxonomyCapitalized}: ${decode(name)} - ${
            state.frontity.title
        }`;
    } else if (data.isAuthor) {
        const { name } = state.source.author[data.id];

        title = `${decode(name)} - ${state.frontity.title}`;
    } else if (data.isPostType) {
        const postTitle = state.source[data.type][data.id].title.rendered;
        const cleanTitle = decode(postTitle);

        title = `${cleanTitle} - ${state.frontity.title}`;
    } else if (data.is404) {
        title = `404 Not Found - ${state.frontity.title}`;
    }

    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};

export default connect(DocumentTitle);
