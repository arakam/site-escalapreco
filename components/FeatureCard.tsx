import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}

export function FeatureCard({ title, description, icon, imageSrc }: FeatureCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md hover:border-primary-200">
      {imageSrc && (
        <div className="mb-4 flex justify-center">
          <Image
            src={imageSrc}
            alt=""
            width={120}
            height={120}
            className="h-24 w-24 object-contain"
          />
        </div>
      )}
      {icon && !imageSrc && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-100 text-accent-600">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </article>
  );
}
