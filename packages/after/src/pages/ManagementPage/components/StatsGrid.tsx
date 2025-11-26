import { Card } from "@/components/ui";
import type { Stat } from "../types";

interface StatsGridProps {
  stats: Stat[];
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          variant="stat"
          rounded="xl"
          statColor={stat.color}
        >
          <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
          <p className={`text-3xl font-bold ${stat.textColor}`}>
            {stat.value.toLocaleString()}
          </p>
        </Card>
      ))}
    </div>
  );
};
