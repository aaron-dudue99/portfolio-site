interface SplitLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export default function SplitLayout({
  leftContent,
  rightContent,
}: SplitLayoutProps) {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <div className="lg:fixed lg:top-0 lg:bottom-0 lg:left-0 lg:w-1/2 lg:flex-none lg:overflow-y-auto lg:py-0">
          {leftContent}
        </div>

        <div className="pt-24 lg:ml-[50%] lg:w-1/2 lg:py-24">
          {rightContent}
        </div>
      </div>
    </div>
  );
}
