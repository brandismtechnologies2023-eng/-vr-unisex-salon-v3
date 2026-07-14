// lucide-react v1 dropped brand icons, so these are hand-rolled.
export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M15 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4v2H9v3h2V21h3v-6.5h2.5l.5-3H14v-2c0-.55.45-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
