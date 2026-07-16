export function Skills({ skill }: { skill: string }) {
  return (
    <span className="skew-x-[-3deg] cursor-pointer bg-gray-100 px-2 py-1 mt-4 font-mono text-xs text-p5-red transition duration-100 ease-in hover:bg-p5-black hover:text-p5-white dark:bg-gray-800">
      <span className="inline-block skew-x-[3deg]">{skill}</span>
    </span>
  );
}
