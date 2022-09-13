import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function BlogDetails() {
    const router = useRouter();
    const blogId = router?.query?.blogId;
    return (
        <div>
            BlogDetails {blogId}
            <Link href={`${blogId}/review/1`}>Review 1</Link>
            <Link href={`${blogId}/review/2`}>Review 2</Link>
            <Link href={`${blogId}/review/3`}>Review 3</Link>
        </div>
    );
}

export default BlogDetails;
