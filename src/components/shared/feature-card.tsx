export default function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="p-8">
        {icon}
        <h3 className="text-secondary-foreground text-xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
