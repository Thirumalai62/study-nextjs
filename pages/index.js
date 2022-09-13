import Link from "next/link";
import React from "react";

function Home() {
    return (
        <div>
            Home
            <Link href="/blog">Blog</Link>
        </div>
    );
}

export default Home;
