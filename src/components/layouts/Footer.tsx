import NewsLetter from "./home/NewsLetter";
import Logo from "../ui/Logo";
export default function Footer() {
  return (
    <footer className="py-12">
      <NewsLetter />
      <div className="w-full container pt-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          {/* <div className="border border-gray-200 bg-white p-4">
            <span>L</span>
            <span>ibraryWave</span>
          </div> */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <span className="block text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            SOFIA™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
