import type { Product } from "@/lib/data";

/** A product's own logo — the same icon its site uses — as a rounded app tile. */
export default function ProductLogo({ product, size = 40, className = "" }: { product: Pick<Product, "logo" | "name">; size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={product.logo}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`shrink-0 rounded-[24%] shadow-sm ring-1 ring-white/10 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
