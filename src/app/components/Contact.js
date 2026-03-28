const ICON_SIZE = "h-4 w-4";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bariscijeremias/",
    icon: (
      <path
        fill="currentColor"
        d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17.34V10.5H5.67V17.34H8.34M7 9.44C7.91 9.44 8.56 8.75 8.56 7.94C8.54 7.12 7.91 6.44 7 6.44C6.09 6.44 5.42 7.12 5.44 7.94C5.44 8.75 6.09 9.44 7 9.44M18.33 17.34V13.5C18.33 11.5 17.27 10.47 15.78 10.47C14.59 10.47 14 11.15 13.65 11.65V10.5H10.98V17.34H13.65V13.88C13.65 13.09 13.8 12.32 14.76 12.32C15.7 12.32 15.72 13.21 15.72 13.93V17.34H18.33Z"
      />
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Jerebari",
    icon: (
      <path
        fill="currentColor"
        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C7,19.91 6.35,18.46 6.15,17.79C6.04,17.5 5.5,16.5 5,16.27C4.6,16.07 4,15.5 5,15.5C5.92,15.58 6.5,16.46 6.68,16.77C7.8,18.64 9.56,18.14 10.25,17.86C10.34,17.21 10.61,16.77 10.9,16.5C8.72,16.25 6.44,15.38 6.44,11.5C6.44,10.39 6.82,9.5 7.46,8.79C7.36,8.54 7,7.5 7.56,6.15C7.56,6.15 8.39,5.88 9.5,6.77C10.29,6.54 11.15,6.43 12,6.43C12.85,6.43 13.71,6.54 14.5,6.77C15.61,5.88 16.44,6.15 16.44,6.15C17,7.5 16.64,8.54 16.54,8.79C17.18,9.5 17.56,10.39 17.56,11.5C17.56,15.39 15.28,16.25 13.1,16.5C13.5,16.86 13.81,17.55 13.81,18.62C13.81,20.12 13.8,21.23 13.8,21C13.8,21.27 13.96,21.59 14.46,21.5C16.2,20.9 17.68,19.73 18.73,18.17C19.78,16.61 20.33,14.82 20.33,13A10,10 0 0,0 12,2Z"
      />
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/bariscijeremias",
    icon: (
      <path
        fill="currentColor"
        d="M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4H2V11H7.5M7.5 6C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9H4V6H7.5M8.5 13H2V20H8.5C10.43 20 12 18.43 12 16.5S10.43 13 8.5 13M8.5 18H4V15H8.5C9.33 15 10 15.67 10 16.5S9.33 18 8.5 18M17.5 13C15.02 13 13 15.02 13 17.5C13 19.98 15.02 22 17.5 22C18.58 22 19.57 21.63 20.35 21L22 22.5L23 21.5L21.35 20C21.63 19.22 22 18.23 22 17.5C22 15.02 19.98 13 17.5 13M17.5 20C16.12 20 15 18.88 15 17.5S16.12 15 17.5 15S20 16.12 20 17.5S18.88 20 17.5 20M16 5H21V7H16V5Z"
      />
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border border-[#1a1a1a] bg-black px-6 py-[50px]"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-sm font-medium text-[#888]">Contacto</p>
        <h2
          id="contact-title"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Hablemos
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-[#666]">
          ¿Te interesa conversar sobre un proyecto o una oportunidad?
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="mailto:bariscijeremias@gmail.com"
            className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#ccc]"
          >
            bariscijeremias@gmail.com
          </a>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1a1a1a] text-[#888] transition-colors hover:border-[#333] hover:text-white"
              >
                <svg
                  className={ICON_SIZE}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-5xl border-t border-[#1a1a1a] pt-8">
        <p className="text-center text-xs text-[#444]">
          Jeremías Barisci &middot; {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
