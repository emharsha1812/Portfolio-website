import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import style from "../../styles/Slug.module.css";
const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl5atxxip6trk01ue2dwa3rha/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

const Article = ({ post }) => {
  return (
    <main>
      <Image
        src={post.coverPhoto.url}
        className={style.cover}
        alt=""
        height={100}
        width={100}
      />
      <div className={style.title}>
        {/* <Image src={post.author.avatar.url} alt="" height={30} width={30} /> */}
        <div className={style.authtext}>
          <h6 className={style.date}>{post.datePublished}</h6>
        </div>
      </div>
      <h2>{post.title}</h2>
      <div
        className={style.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </main>
  );
};

export default Article;
