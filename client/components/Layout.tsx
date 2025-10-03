import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, MessageCircle, Wifi, Bookmark } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-ibira-cream flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-ibira-beige/30">
        <div className="max-w-md mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/76a6741f584b3cc56f698c8611634d69213b7360?width=400"
              alt="Ibirahill"
              className="h-12"
            />
          </Link>
          <button className="p-2 hover:bg-ibira-beige/20 rounded-lg transition-colors">
            <Bookmark className="w-6 h-6 text-ibira-dark" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto">{children}</main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 z-50 bg-ibira-cream/95 backdrop-blur-md border-t border-ibira-beige/30">
        <div className="max-w-md mx-auto px-8 py-2 flex items-center justify-around gap-11">
          <Link
            to="/"
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
              location.pathname === "/"
                ? "text-ibira-dark"
                : "text-ibira-dark/60"
            }`}
          >
            <Home
              className="w-6 h-6"
              strokeWidth={location.pathname === "/" ? 2 : 1.5}
            />
            <span className="text-xs font-medium">Início</span>
          </Link>

          <a
            href="https://wa.me/5511999998888"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors text-gray-500"
          >
            <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-xs font-medium">Whatsapp</span>
          </a>

          <button className="flex flex-col items-center gap-1 py-2 px-5 rounded-lg transition-colors text-ibira-dark/60">
            <Wifi className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-xs font-medium">Wifi</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
