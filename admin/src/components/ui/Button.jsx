export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`rounded-lg bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-700 disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}