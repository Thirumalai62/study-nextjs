import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Blog() {
    const router = useRouter();
    return (
        <div>
            Blog
            <Link href="/blog/1">Blog Details 1</Link>
            <Link href="/blog/2">Blog Details 2</Link>
            <Link href="/blog/3">Blog Details 3</Link>
            <button onClick={() => router.push("/blog/1")}>Blog Details 1</button>
            <button onClick={() => router.replace("/")}>Home</button>
        </div>
    );
}

export default Blog;
