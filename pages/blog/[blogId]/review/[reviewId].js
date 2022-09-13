import { useRouter } from "next/router";
import React from "react";

function ReviewBlogDetails() {
    const router = useRouter();
    const { blogId, reviewId } = router?.query;
    return (
        <div>
            Review {reviewId} for BlogDetails {blogId}
        </div>
    );
}

export default ReviewBlogDetails;
