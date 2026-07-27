"use client";

// Submit button that asks for confirmation before letting its parent form's
// server action run. Used for destructive actions (delete).
export default function ConfirmButton({
  children,
  message = "Are you sure?",
  className = "",
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  message?: string;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <button
      type="submit"
      aria-label={ariaLabel}
      className={className}
      onClick={(e) => {
        if (!confirm(message)) e.preventDefault();
      }}
    >
      {children}
    </button>
  );
}
