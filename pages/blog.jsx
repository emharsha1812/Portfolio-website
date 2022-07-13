import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl5atxxip6trk01ue2dwa3rha/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

const Blog = ({ posts }) => {
  return (
    <div>
      <main className="">
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  );
};

export default Blog;
