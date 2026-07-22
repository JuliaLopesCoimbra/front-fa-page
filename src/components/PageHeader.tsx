import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export default function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between px-5 pt-3 pb-2">
      <div>
        <h1 className="text-lg font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs font-medium text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
