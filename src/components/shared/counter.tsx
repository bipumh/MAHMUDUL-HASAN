function formatNumber(n: number) {
  return new Intl.NumberFormat("en-US").format(Math.round(n));
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  );
}
