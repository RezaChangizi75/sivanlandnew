interface Props {
  title: string;
  description: string;
}

export function ProductInfo({
  title,
  description,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold leading-relaxed">
          {title}
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}