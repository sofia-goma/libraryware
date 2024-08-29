import NewsLetter from "./home/NewsLetter";
import Logo from "../ui/Logo";
export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="mb-6 sm:mb-0">
            <Logo />
          </div>

          <ul className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-8 text-sm font-medium text-gray-500">
            <li>
              <a
                href="#"
                className="hover:text-gray-900 transition duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-900 transition duration-300 ease-in-out"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-900 transition duration-300 ease-in-out"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-900 transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center sm:text-left">
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://flowbite.com/"
              className="hover:text-gray-900 transition duration-300 ease-in-out"
            >
              SOFIA™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
