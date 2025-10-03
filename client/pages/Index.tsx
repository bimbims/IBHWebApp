import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const menuItems = [
  {
    title: "Sua chegada",
    path: "/check-in",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/eede3f677014a562467dbdd68e3405934bd845e9?width=318",
  },
  {
    title: "Regras da casa",
    path: "/regras",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/bfabc3ac1360a6e4ef271b9cabebc5d6466c441e?width=318",
  },
  {
    title: "Como chegar",
    path: "/como-chegar",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/a0a77daa7bc5518090071008a656ebc56f5bf086?width=318",
  },
  {
    title: "Guias",
    path: "/guias",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/4f056e9602fa37391930c83f9bbe670cab6e1951?width=318",
  },
  {
    title: "Delivery",
    path: "/delivery",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/50fa517affe664790c25758a5aafd54484867efd?width=318",
  },
  {
    title: "Check-out",
    path: "/check-out",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/37e00be64999e819c9185575e1a23862a61d3864?width=318",
  },
];

export default function Index() {
  return (
    <Layout>
      <div className="px-4 pt-6 pb-8">
        {/* Welcome Card */}
        <div className="bg-ibira-dark rounded-2xl p-5 mb-6 text-white">
          <p className="text-ibira-green text-[17px] font-light tracking-wide mb-1">
            Bem-vindo(a), Marina Silva
          </p>
          <p className="text-white text-[17px] font-light">
            Casa Galeria - 4 hospedes
          </p>
          <p className="text-white text-[17px] font-light">
            13/09/25 - 15/09/25
          </p>
        </div>

        {/* Menu Grid */}
        <div className="flex flex-col gap-4">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-4">
            {menuItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundBlendMode: "multiply",
                    backgroundColor: "#F0EFEC",
                  }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-ibira-cream/20" />
                  <div className="absolute top-6 right-8 w-1 h-1 rounded-full bg-ibira-cream/20" />
                  <div className="absolute bottom-8 left-4 w-3 h-3 rounded-full bg-ibira-cream/20" />
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full bg-ibira-cream/20" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-[#E1DFD2]/80 backdrop-blur-sm rounded-b-2xl">
                  <h3
                    className="text-ibira-dark text-center py-3 px-6 font-avenir text-[20px] tracking-wide"
                    style={{
                      textShadow:
                        "0 -1px 0.7px rgba(0,0,0,0.25), 0 3px 3.1px rgba(0,0,0,0.26)",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-4">
            {menuItems.slice(2, 4).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundBlendMode: "multiply",
                    backgroundColor: "#F0EFEC",
                  }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-ibira-cream/20" />
                  <div className="absolute top-6 right-8 w-1 h-1 rounded-full bg-ibira-cream/20" />
                  <div className="absolute bottom-8 left-4 w-3 h-3 rounded-full bg-ibira-cream/20" />
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full bg-ibira-cream/20" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-[#E1DFD2]/80 backdrop-blur-sm rounded-b-2xl">
                  <h3
                    className="text-ibira-dark text-center py-3 px-6 font-avenir text-[20px] tracking-wide"
                    style={{
                      textShadow:
                        "0 -1px 0.7px rgba(0,0,0,0.25), 0 3px 3.1px rgba(0,0,0,0.26)",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-2 gap-4">
            {menuItems.slice(4, 6).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundBlendMode: "multiply",
                    backgroundColor: "#F0EFEC",
                  }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-ibira-cream/20" />
                  <div className="absolute top-6 right-8 w-1 h-1 rounded-full bg-ibira-cream/20" />
                  <div className="absolute bottom-8 left-4 w-3 h-3 rounded-full bg-ibira-cream/20" />
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full bg-ibira-cream/20" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-[#E1DFD2]/80 backdrop-blur-sm rounded-b-2xl">
                  <h3
                    className="text-ibira-dark text-center py-3 px-6 font-avenir text-[20px] tracking-wide"
                    style={{
                      textShadow:
                        "0 -1px 0.7px rgba(0,0,0,0.25), 0 3px 3.1px rgba(0,0,0,0.26)",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
