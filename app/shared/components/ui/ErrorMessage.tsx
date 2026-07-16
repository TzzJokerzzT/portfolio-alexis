import { CircleX } from "lucide-react";

export function ErrorMsg({
  errorMsg,
  message,
}: {
  errorMsg: string | undefined;
  message: string;
}) {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center py-12 text-center">
        <CircleX size={200} color="#ff0000" />
        <p className="text-4xl font-bold text-p5-red">{message}</p>
        <p className="mt-2 text-2xl text-gray-500 dark:text-gray-400">
          {errorMsg ?? "Please check your connection and try again."}
        </p>
      </div>
    </div>
  );
}
