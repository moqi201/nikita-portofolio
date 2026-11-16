import { profile } from '../data/portfolio'

const socialLinks = [
  {
    label: 'GitHub',
    href: profile.github,
    external: true,
  },
  {
    label: 'Instagram',
    href: profile.instagram,
    external: true,
  },
  {
    label: 'Mail',
    href: `mailto:${profile.email}`,
    external: false,
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <a
        className="footer-wordmark"
        href="#home"
      >
        Nikita<span>.</span>
      </a>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Nikita Aidina Hidayat.
        </p>

        <div className="footer-socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={
                social.external ? '_blank' : undefined
              }
              rel={
                social.external ? 'noreferrer' : undefined
              }
            >
              {social.label}
              <span>↗</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}