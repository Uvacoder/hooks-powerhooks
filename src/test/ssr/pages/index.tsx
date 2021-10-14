import Head from "next/head";
import { useWindowInnerSize } from "powerhooks/tools/useWindowInnerSize";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Root/>
        </>
    );
}

function Root() {

    const { windowInnerWidth, windowInnerHeight } = useWindowInnerSize();
    
    console.log("render root");

    console.log(JSON.stringify({ windowInnerWidth, windowInnerHeight }, null,2));

    return (
        <div
            style={{
                "border": "1px solid black",
                "width": windowInnerWidth / 2,
                "height": windowInnerHeight / 2,
                "margin": 50,
                "backgroundColor": "pink"
            }}
        >
            There is some content in this div
        </div>
    );

}