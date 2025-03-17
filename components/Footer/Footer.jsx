import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 bg-dark text-white relative z-0 lamp__container" id="footer">
      <div className="container flex flex-col">
        <div className="flex flex-row items-start justify-between flex-wrap">
          <div className="flex flex-col gap-5">
            <Link href={"/"}>
              <a
                title="Yusolve"
                role="link"
                className="w-[140px] sm:w-[180px] block"
              >
                <img src="/images/logo-yellow.png" alt="logo" title="Yusolve" />
              </a>
            </Link>
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
