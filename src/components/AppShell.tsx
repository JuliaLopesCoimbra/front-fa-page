import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen w-full justify-center bg-background">
      <div className="relative flex w-full max-w-[430px] flex-col">
        {children}
      </div>
    </div>
  );
}
