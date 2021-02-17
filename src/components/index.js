import { connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Loading from "./loading";

const Theme = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <>
            <Head>
                <title>Horizon Theme</title>
                <meta name="description" content={state.frontity.description} />
                <html lang="en" />
            </Head>

            <header>
                HEADER
            </header>

            <main>
                <Switch>
                    <Loading when={data.isFetching} />
                </Switch>
            </main>
        </>
    );
};

export default connect(Theme);