import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <span className="font-display text-7xl font-semibold text-caramel">404</span>
      <h1 className="mt-4 font-display text-3xl font-semibold text-espresso sm:text-4xl">
        This page has wandered off for a coffee.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        We couldn&apos;t find the page you were looking for. It may have moved,
        or it simply doesn&apos;t exist.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href="/">
          <Home aria-hidden className="h-4 w-4" />
          Back to home
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Button>
        <Button href="/menu" variant="outline">
          Browse the menu
        </Button>
      </div>
    </Container>
  );
}
