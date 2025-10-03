import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Layout from "@/components/Layout";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-screen bg-ibira-cream">
        {/* Hero Section */}
        <div className="relative h-48 bg-gradient-to-br from-ibira-green/20 to-ibira-beige">
          <div className="absolute top-4 left-6">
            <Link
              to="/"
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-ibira-dark/30 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 text-ibira-cream" />
            </Link>
          </div>
        </div>

        <div className="h-1 bg-ibira-green" />

        <div className="px-5 py-6">
          <h1 className="text-[30px] font-abril text-ibira-dark leading-9 tracking-wide mb-4">
            {title}
          </h1>

          <div className="rounded-2xl border border-ibira-beige/30 bg-ibira-cream p-6 text-center">
            <p className="text-ibira-dark/70 text-[15px] leading-relaxed">
              {description ||
                "Esta página está sendo desenvolvida. Continue nos pedindo para preencher o conteúdo desta seção."}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
