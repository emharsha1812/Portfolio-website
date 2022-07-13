import Link from "next/link";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-transparent">
      <footer className="footer items-center px-4 py-2 ">
        <div className=" flex align-center items-center grid-flow-col space-x-2 text-center">
          <p className="text-lg md:inline-grid">
            Made with ❤️ by Harshwardhan Fartale{" "}
          </p>
          <div>
            <Link href="/support">
              <button className="btn btn-outline btn-info rounded-full ">
                Support Me!
              </button>
            </Link>
          </div>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/emharsha1812/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="h-[4vh] w-[4vh]" />
          </a>
          <a
            href="https://www.instagram.com/emharsha_1812/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="h-[4vh] w-[4vh]" />
          </a>
          <a
            href="https://github.com/emharsha1812"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="h-[4vh] w-[4vh]" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
