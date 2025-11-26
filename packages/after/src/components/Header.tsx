export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm flex justify-center">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white text-lg font-bold">
            L
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold leading-tight text-gray-900">
              Hanghae Company
            </h1>
            <p className="text-xs text-gray-500">
              Design System Migration Project
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium text-gray-700">Demo User</span>
            <span className="text-xs text-gray-500">demo@example.com</span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white text-sm font-medium">
            DU
          </div>
        </div>
      </div>
    </header>
  );
};
