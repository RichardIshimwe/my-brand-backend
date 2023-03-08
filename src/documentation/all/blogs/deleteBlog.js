const deleteBlog={
  
    delete: {
        tags: ["Blogs"],
        summary: "Delete a blog by ID",
        operationId: "deleteBlog",
        parameters: [
            {
                in: "path",
                name: "id",
                description: "ID of the blog to delete",
                required: true,
                type: "string"
            }
        ],
        responses: {
            200: {
                description: "Blog post deleted successfully"
            },
            400: {
                description: "Invalid input provided"
            },
            401: {
                description: "User is not authenticated"
            },
            404: {
                description: "Blog post not found"
            },
            500: {
                description: "internal Server error"
            }
        }
    }
}

export default deleteBlog