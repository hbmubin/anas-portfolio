const Footer = () => {
  return (
    <footer className="bg-bodyBlack py-10 text-center">
      <span className="text-white block mb-2">
        Copyright &copy; 2024 by Anas Munir
      </span>
      <span className="text-neutral-400 block text-sm">
        Developed by{" "}
        <a
          className="hover:text-blue-700 duration-200 underline text-sm"
          target="_blank"
          href="https://hbmubin.github.io/me/"
        >
          HB Mubin
        </a>
      </span>
    </footer>
  );
};

export default Footer;
