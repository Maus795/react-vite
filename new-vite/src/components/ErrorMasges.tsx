interface ErrorMasegesProps {
  error: string;
}
export function ErrorMaseges({ error }: ErrorMasegesProps) {
  if (error === undefined || error === null || error.length === 0) { return null }
  return <p className="ErrorMassage">{error}</p>;
}
