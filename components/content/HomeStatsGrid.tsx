"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { StatCard } from "@/components/content/StatCard";

type Stat = {
  value: string;
  label: string;
};

type Props = {
  stats: readonly Stat[];
};

function enterClass(index: number) {
  if (index < 2) {
    return `stat-enter-left stat-enter-delay-${index}`;
  }

  return `stat-enter-right stat-enter-delay-${index - 2}`;
}

export function HomeStatsGrid({ stats }: Props) {
  const pathname = usePathname();
  const [visitKey, setVisitKey] = useState(0);

  useEffect(() => {
    if (pathname === "/") {
      setVisitKey((key) => key + 1);
    }
  }, [pathname]);

  return (
    <div
      key={visitKey}
      className="grid grid-cols-2 gap-3 max-md:gap-4 lg:grid-cols-4 lg:gap-5"
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          className={enterClass(index)}
        />
      ))}
    </div>
  );
}
