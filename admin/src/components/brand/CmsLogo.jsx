import logo from "../../assets/skykidhero.png";

export default function CmsLogo({
  compact = false,
  className = "",
}) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
    >
      <img
        src={logo}
        alt="SkyKidHero CMS"
        className={
          compact
            ? "h-10 w-10 object-contain"
            : "h-12 w-auto max-w-45 object-contain"
        }
      />

      {!compact && (
        <div>
          <p className="text-lg uppercase font-bold text-amber-900">
            SkyKidHero
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-500">
            Content Management System
          </p>
        </div>
      )}
    </div>
  );
}