export default function Footer() {
  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer className="relative mt-28 flex w-full flex-col-reverse items-center border-t-[1.5px] border-beige-100 px-12 py-6 md:flex-row  ">
      <div className="flex cursor-default flex-col">
        <div className="mb-1 h-[3px] w-32 rounded-xl bg-beige-300 brightness-75 md:w-48" />
        <p className="md-text-left text-center font-base text-base font-medium text-beige-300 brightness-[60%] md:text-left">
          Byron Moore
        </p>
      </div>
      <ul className="m-3 mb-8 flex flex-col items-center sm:flex-col md:mb-0 md:ml-auto md:items-start">
        <li
          onClick={() => scrollToElement("header")}
          className="mx-6 cursor-pointer text-center font-head text-base text-beige-300 brightness-[60%] md:text-left"
        >
          top.
        </li>

        <a
          href="https://photography.byronjaris.com"
          rel="noopener noreferrer"
          target="new_blank"
          className="cursor-pointer flex-col md:flex"
        >
          <p className="mx-6 cursor-pointer text-center font-head text-base text-beige-300 brightness-[60%] md:text-left">
            photography.
          </p>
        </a>
      </ul>
    </footer>
  );
}
