import { Card, CardBody } from "@heroui/react";

interface StatProps {
  label: string;
  value: string;
}

export function Stat({ label, value }: StatProps) {
  return (
    <Card className="text-center p-4">
      <CardBody className="p-0">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {value}
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          {label}
        </div>
      </CardBody>
    </Card>
  );
}
