import Link from "next/link";
import Reveal from "./Reveal";
import Icon from "./Icon";
import ProductLogo from "./ProductLogo";
import { ContactLinks } from "./ContactLinks";
import { products } from "@/lib/data";

/** Closing section of the home page: who makes CodeLove, and every product one tap away. */
export default function MadeBy() {
  return (
    <section id="made-by" className="container-px mx-auto max-w-7xl py-[50px]">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] sm:p-10 lg:p-14">
          {/* soft brand glow behind the card */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-[100px]" />
            <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-secondary to-primary opacity-15 blur-[110px]" />
            <div className="absolute inset-0 bg-dots opacity-40" />
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            {/* Story */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                Made by one developer
              </span>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Free tools, built by <span className="text-gradient">Gowtham</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                CodeLove is a one-person studio. Every product here — the creator tools, the 3D model library and the
                browser games — is designed, coded and shipped by Gowtham, and every one of them is free to use.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5 text-sm">
                <li className="inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-3.5 py-1.5 font-medium ring-1 ring-inset ring-[var(--surface-border)]">
                  <Icon name="check" size={15} className="text-accent" />
                  {products.length} products
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-3.5 py-1.5 font-medium ring-1 ring-inset ring-[var(--surface-border)]">
                  <Icon name="check" size={15} className="text-accent" />
                  No paid plans
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-3.5 py-1.5 font-medium ring-1 ring-inset ring-[var(--surface-border)]">
                  <Icon name="check" size={15} className="text-accent" />
                  Talk to the maker directly
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110"
                >
                  Explore all products
                  <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="https://gowtham.codelove.in"
                  className="group inline-flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold transition hover:border-primary"
                >
                  Meet Gowtham
                  <Icon name="arrowUpRight" size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)]">
                Ideas, bugs or feedback? <ContactLinks />
              </p>
            </div>

            {/* Every product, one tap away */}
            <nav aria-label="All CodeLove products">
              {/* Phones: 2 columns of compact rows (10 products fill 5 rows evenly); wider screens: a 5 x 2 grid of tiles. */}
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-5 sm:gap-4">
                {products.map((product, i) => (
                  <li key={product.slug}>
                    <Reveal delay={i * 45} className="h-full">
                      <Link
                        href={`/products/${product.slug}`}
                        className="group flex h-full items-center gap-3 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)] sm:flex-col sm:gap-2.5 sm:p-4 sm:text-center"
                      >
                        <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <ProductLogo product={product} size={40} className="shadow-lg sm:hidden" />
                          <ProductLogo product={product} size={56} className="hidden shadow-lg sm:block" />
                        </span>
                        <span className="text-xs font-semibold leading-tight sm:text-[13px]">{product.name}</span>
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
