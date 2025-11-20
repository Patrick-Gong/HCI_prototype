function PageLayout({ children }) {
  return (
    <div className="mt-14 min-h-screen flex flex-col items-center w-[1260px] px-8 overflow-y-auto">
      {children}
    </div>
  );
}

export default PageLayout;
