import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  avatarSrc?: string;
}

export function TestimonialCard({ name, role, text, avatarSrc }: TestimonialCardProps) {
  return (
    <blockquote className="rounded-xl border border-slate-200 border-l-4 border-l-accent-500 bg-white p-6 shadow-sm">
      <p className="text-slate-700">&ldquo;{text}&rdquo;</p>
      <footer className="mt-4 flex items-center gap-3">
        {avatarSrc && (
          <Image
            src={avatarSrc}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        )}
        <cite className="not-italic">
          <span className="font-semibold text-slate-900">{name}</span>
          <span className="text-slate-500"> — {role}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
