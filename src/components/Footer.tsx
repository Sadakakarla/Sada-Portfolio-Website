export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-8 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-heading text-2xl font-bold text-foreground">
          SK<span className="text-primary">.</span>
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sada Kakarla. All rights reserved.
        </span>
      </div>
    </footer>
  );
}