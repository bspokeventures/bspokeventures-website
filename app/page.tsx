import Image from "next/image";

const products = [
  {
    name: "MarkPaid",
    url: "https://markpaid.com",
    domain: "markpaid.com",
    category: "Accounts receivable",
    description:
      "Automated invoice follow-up that keeps working until the payment lands — then knows when to stop.",
    logo: "/logo-markpaid.png",
    className: "product-row--markpaid",
  },
  {
    name: "BrandBake",
    url: "https://brandbake.app",
    domain: "brandbake.app",
    category: "Content operations",
    description:
      "An automated email and social calendar that keeps the content queue planned, written, and moving.",
    logo: "/logo-brandbake.png",
    className: "product-row--brandbake",
  },
  {
    name: "SalamanderCRM",
    url: "https://salamandercrm.com",
    domain: "salamandercrm.com",
    category: "Outbound sales",
    description:
      "Automated initial outbound that researches, qualifies, and delivers warm leads ready for a human conversation.",
    logo: "/logo-salamandercrm.svg",
    className: "product-row--salamander",
  },
  {
    name: "Digital Toolbox",
    url: "https://digitaltoolbox.pro",
    domain: "digitaltoolbox.pro",
    category: "Trades online",
    description:
      "The practical digital foundation for trades: website, professional email, and a Google Business Profile.",
    logo: "/logo-digitaltoolbox.png",
    className: "product-row--toolbox",
  },
  {
    name: "SerumSuite",
    url: "https://serumsuite.com",
    domain: "serumsuite.com",
    category: "Commerce operations",
    description:
      "One operations layer for multi-store Shopify businesses shipping from a single warehouse.",
    className: "product-row--serum",
  },
  {
    name: "Hosted Labels",
    url: "https://hostedlabels.com",
    domain: "hostedlabels.com",
    category: "Warehouse tooling",
    description:
      "An online carton-label designer built around the printers warehouses already trust: Zebra.",
    className: "product-row--labels",
  },
  {
    name: "NameScoop",
    url: "https://namescoop.ca",
    domain: "namescoop.ca",
    category: "Naming",
    description:
      "A faster way to find a memorable, available domain that fits the business you are building.",
    className: "product-row--namescoop",
  },
];

export default function Home() {
  return (
    <main id="top">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-lockup" href="#top" aria-label="Bspoke Ventures home">
          <Image src="/bspoke-b.svg" alt="" width={40} height={40} priority />
          <span>Bspoke Ventures</span>
        </a>
        <div className="nav-links">
          <a href="#companies">Companies</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-kicker">
          <span>Independent software studio</span>
          <span>Montréal, Canada</span>
        </div>

        <div className="hero-title">
          <h1>
            We build the software
            <span>between the software.</span>
          </h1>
        </div>

        <div className="hero-note">
          <p>
            The expensive work is often hiding between the systems a business
            already uses. We turn those gaps into focused products.
          </p>
          <a href="#companies">View our companies <span aria-hidden="true">↓</span></a>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <Image src="/bspoke-b.svg" alt="" width={320} height={320} priority />
        </div>
      </section>

      <div className="company-ribbon" aria-label="Bspoke Ventures products">
        {products.map((product) => (
          <a href={product.url} key={product.name} target="_blank" rel="noreferrer">
            {product.name}
          </a>
        ))}
      </div>

      <section className="premise" id="about">
        <p className="section-label">The premise</p>
        <div>
          <h2>Most businesses don&apos;t need more software.</h2>
          <p>
            They need the software they already have to work together. The
            follow-up after the invoice. The handoff after the lead. The content
            calendar after the strategy. The label after the order.
          </p>
          <p>
            That in-between work is usually manual, repetitive, and easy to get
            wrong. It is also where we find our best ideas.
          </p>
        </div>
      </section>

      <section className="companies" id="companies">
        <header className="section-heading">
          <p className="section-label">Our companies</p>
          <h2>Seven products.<br />Built from real work.</h2>
          <p className="section-summary">
            Different industries, same starting point: a useful process that
            should be simpler, faster, or less expensive.
          </p>
        </header>

        <div className="product-list">
          {products.map((product, index) => (
            <a
              className={`product-row ${product.className}`}
              href={product.url}
              key={product.name}
              target="_blank"
              rel="noreferrer"
            >
              <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="product-name">
                {product.logo ? (
                  <Image src={product.logo} alt={product.name} width={320} height={100} />
                ) : (
                  <strong>{product.name}</strong>
                )}
              </div>
              <p>{product.description}</p>
              <div className="product-meta">
                <span>{product.category}</span>
                <span>{product.domain} <i aria-hidden="true">↗</i></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-intro">
          <p className="section-label">How we work</p>
          <h2>Start with the work.<br />Build only what helps.</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div><strong>Watch the process</strong><p>Understand how the work really moves, including the shortcuts and the spreadsheets.</p></div>
          </li>
          <li>
            <span>02</span>
            <div><strong>Find the costly gap</strong><p>Look for the repeated handoff where time, money, or context keeps getting lost.</p></div>
          </li>
          <li>
            <span>03</span>
            <div><strong>Build the missing layer</strong><p>Make focused software that fits the systems and habits already in place.</p></div>
          </li>
          <li>
            <span>04</span>
            <div><strong>Prove the outcome</strong><p>Less admin, lower cost, faster movement, and a process people can trust.</p></div>
          </li>
        </ol>
      </section>

      <section className="closing">
        <p className="section-label">Bspoke Ventures</p>
        <blockquote>
          “The best software doesn&apos;t add another place to work. It makes work
          disappear.”
        </blockquote>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </section>

      <section className="contact" aria-labelledby="contact-heading">
        <div className="contact-intro">
          <p className="section-label">Start a conversation</p>
          <h2 id="contact-heading">Let&apos;s make something useful.</h2>
        </div>
        <a
          className="contact-option"
          href="mailto:ideas@bspokeventures.com?subject=An%20idea%20for%20Bspoke%20Ventures"
        >
          <span>Have an idea?</span>
          <strong>ideas@bspokeventures.com</strong>
          <i aria-hidden="true">↗</i>
        </a>
        <a
          className="contact-option"
          href="mailto:info@bspokeventures.com?subject=Bspoke%20software%20demo"
        >
          <span>Demo our software</span>
          <strong>info@bspokeventures.com</strong>
          <i aria-hidden="true">↗</i>
        </a>
      </section>

      <footer>
        <a className="brand-lockup brand-lockup--footer" href="#top">
          <Image src="/bspoke-b.svg" alt="" width={40} height={40} />
          <span>Bspoke Ventures</span>
        </a>
        <p>Building the software between the software.</p>
        <div>
          <span>Montréal, Québec</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
