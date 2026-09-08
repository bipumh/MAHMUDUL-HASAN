import { ArrowRight, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <span className="font-display text-7xl font-semibold text-gradient-blue">404</span>
      <h1 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        This resource was not found on the server. It may have moved, or it may never have
        existed.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href="/">
          <Home aria-hidden className="h-4 w-4" />
          Back to home
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Button>
        <Button href="#contact" variant="outline">
          <Search aria-hidden className="h-4 w-4" />
          Get in touch
        </Button>
      </div>
    </Container>
  );
}
