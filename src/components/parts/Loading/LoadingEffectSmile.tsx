export const LoadingEffectSmile: React.FC<{
  fill?: string;
}> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 8"
      fill={fill ? fill : "#fff"}
    >
      <path d="M7.4 7.1c-.2 0-.4-.2-.4-.4V1.2c0-.2.2-.3.3-.3s.3.2.3.3v5.5c.1.2-.1.4-.2.4zm5.4 0c-.2 0-.3-.2-.3-.3V1.3c0-.2.2-.3.3-.3.2 0 .3.2.3.3v5.5c.1.1-.1.3-.3.3z" />
      <path d="M19.3 6.4h-.2C10.4 1.7.9 6.4.8 6.4c-.2.1-.4 0-.5-.2s0-.4.2-.5c.1 0 9.9-4.9 18.9 0 .2.1.2.3.1.5 0 .2-.1.2-.2.2z" />
    </svg>
  );
};
