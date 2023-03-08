const getBlogs={
    get: {
        tags: ["Blogs"],
        summary: "Get all blogs",
        operationId: "getAllBlogs",
        parameters: [],
        responses: {
            200: {
                description: "Blogs retrieved successfully",
                schema: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            _id: { type: "string" },
                            blogTitle: { type: "string" },
                            blogContent: { type: "string" },
                            blogImage: { type: "string" }
                        }
                    }
                }
            },
            500: {
                description: "Server error"
            }
        }
    }
}

export default getBlogs