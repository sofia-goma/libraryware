import Logo from '@/components/shared/logo';
import { Separator } from '../ui/separator';

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className='py-12 bg-background border-t'>
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="mb-6 sm:mb-0">
              <Logo />
            </div>

            <ul className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-8 text-sm font-medium text-secondary-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition duration-300 ease-in-out"
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
                className="hover:text-gray-900 transition duration-300 ease-in-out"
              >
                SOFIA™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
