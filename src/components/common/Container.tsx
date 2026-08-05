interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`max-w-7xl mx-auto px-6 md:px-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}