### Fast Blazing Server API

This is a simple API that allows you to create a blazing fast server in a few lines of code.

#### Tech Stack

- [Fastify](https://www.fastify.io/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Mercurius](https://mercurius.dev/)

#### Query Examples

```graphql
mutation {
  createPost(data: {
    title: "My New Post",
    body: "This is the content of my new post",
    category: "Technology",
    published: true
  }) {
    id
    title
    body
    category
    published
  }
}
```