import Image from "next/image";
import Link from "next/link";
import style from "../styles/BlogCard.module.css";

const BlogCard = ({ title, author, coverPhoto, datePublished, slug }) => {
  return (
    <div className="">
      <Link href={"./posts/" + slug}>
        <div className={style.imgContainer}>
          <Image
            height={400}
            width={400}
            src={coverPhoto.url}
            alt="cover photo"
          />
        </div>
      </Link>
      <div className={style.text}>
        <h2>{title}</h2>
        <div className={style.details}>
          <div className={style.author}>
            {/* <Image
              src={author.avatar.url}
              alt="author"
              height={30}
              width={30}
            /> */}
            {/* <h3>{author.name}</h3> */}
          </div>
          <div className={style.date}>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
