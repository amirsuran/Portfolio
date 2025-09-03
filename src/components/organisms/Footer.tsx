import Logo from "@/components/atoms/Logo";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 py-12 dark:border-gray-800">
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo and copyright */}
          <div className="space-y-6 md:col-span-2">
            <Logo />
            <p className="text-sm text-text-muted">
              © 2025 Amir Suran. All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
