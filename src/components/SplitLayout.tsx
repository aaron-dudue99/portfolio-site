interface SplitLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export default function SplitLayout({
  leftContent,
  rightContent,
}: SplitLayoutProps) {
  return (
    <div className="mx-auto min-h-screen max-w-[1200px] px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 lg:items-start">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          {leftContent}
        </div>

        <div className="pt-24 lg:w-1/2 lg:py-24">
          {rightContent}
        </div>
      </div>
    </div>
  );
}
