import { Frown } from "lucide-react";

export function NotFound({ message }: { message: string }) {
  return (
    <p className="flex flex-col items-center gap-4 py-12 text-center text-gray-500 dark:text-gray-400">
      <Frown size={200} color="#ff0000" />
      <p className="text-4xl font-bold text-p5-red">Sorry</p>
      <p className="text-2xl text-gray-500 dark:text-gray-400">{message}</p>
    </p>
  );
}
