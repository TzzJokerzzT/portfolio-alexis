export function Description({ description }: { description: string }) {
  return (
    <li key={description} className="ml-4">
      {description}
    </li>
  );
}
