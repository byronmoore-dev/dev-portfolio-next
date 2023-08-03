export default function Footer() {
  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer className="relative mt-28 flex w-full items-center border-t-[1.5px] border-beige-100 px-12 py-6  ">
      <div className="flex cursor-default flex-col">
        <div className="mb-1 h-[3px] w-32 rounded-xl bg-beige-300 brightness-75 md:w-48" />
        <p className="font-base text-base font-medium text-beige-300 brightness-[60%]">
          Byron Moore
        </p>
      </div>
      <ul className="m-3 ml-auto hidden items-start sm:flex sm:flex-col">
        <li
          onClick={() => scrollToElement("header")}
          className="mx-6 cursor-pointer font-head text-base text-beige-300 brightness-[60%]"
        >
          top.
        </li>

        <a
          href="https://photography.byronjaris.com"
          rel="noopener noreferrer"
          target="new_blank"
          className="hidden cursor-pointer flex-col md:flex"
        >
          <p className="mx-6 cursor-pointer font-head text-base text-beige-300 brightness-[60%]">
            photography.
          </p>
        </a>
      </ul>
    </footer>
  );
}
