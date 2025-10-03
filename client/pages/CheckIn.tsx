import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Wrench } from 'lucide-react';
import Layout from '@/components/Layout';

export default function CheckIn() {
  return (
    <Layout>
      <div className="min-h-screen bg-ibira-cream">
        {/* Hero Image */}
        <div className="relative h-48 bg-cover bg-center" 
             style={{ backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/22813b3402843c26fdf9175895e3571ce029cb05?width=735)' }}>
          <div className="absolute top-4 left-6">
            <Link to="/" className="flex items-center justify-center w-8 h-8 rounded-lg bg-ibira-dark/30 backdrop-blur-sm">
              <ChevronLeft className="w-5 h-5 text-ibira-cream" />
            </Link>
          </div>
        </div>

        {/* Green Accent Bar */}
        <div className="h-1 bg-ibira-green" />

        {/* Content */}
        <div className="px-5 pb-8">
          {/* Header */}
          <div className="py-6 bg-ibira-cream">
            <h1 className="text-[30px] font-abril text-ibira-dark leading-9 tracking-wide">
              Sua chegada<br />em Ibirahill
            </h1>
          </div>

          {/* Cards Container */}
          <div className="space-y-8">
            {/* Essential Items Card */}
            <div className="rounded-2xl border border-ibira-beige/30 bg-ibira-cream p-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-ibira-green/20 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-8 h-8 text-ibira-dark/80" />
                </div>
                <h3 className="text-[17px] font-light text-ibira-dark tracking-wide">
                  Itens essenciais
                </h3>
              </div>
              
              <p className="text-[14px] text-ibira-dark/70">
                Não esqueça de trazer estes itens importantes
              </p>

              <div className="rounded-2xl border border-ibira-green/30 bg-ibira-cream p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-ibira-green flex-shrink-0" />
                  <p className="text-[15px] text-ibira-dark">Documento de identidade</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-ibira-green flex-shrink-0" />
                  <p className="text-[15px] text-ibira-dark">Confirmação da reserva</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-ibira-green flex-shrink-0" />
                  <p className="text-[15px] text-ibira-dark">Carregador de celular</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-ibira-green flex-shrink-0" />
                  <p className="text-[15px] text-ibira-dark">Produtos de higiene pessoal</p>
                </div>
              </div>
            </div>

            {/* Check-in Times Card */}
            <div className="rounded-2xl border border-ibira-beige/30 bg-ibira-cream p-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-ibira-green/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-ibira-dark/80" />
                </div>
                <h3 className="text-[17px] font-light text-ibira-dark tracking-wide">
                  Horários de check-in
                </h3>
              </div>
              
              <p className="text-[14px] text-ibira-dark/70">
                Horário do Check-in
              </p>

              <div className="rounded-2xl border border-ibira-green/30 bg-gradient-to-br from-ibira-beige/30 to-ibira-green/20 p-4">
                <p className="text-[15px] text-ibira-dark">
                  <span className="text-ibira-green">Das 15:00 às 21:00</span><br />
                  Para chegadas fora deste horário,<br />
                  entre em contato conosco.
                </p>
              </div>
            </div>

            {/* Access Code Card */}
            <div className="rounded-2xl border border-ibira-beige/30 bg-ibira-cream p-4 space-y-3">
              <h3 className="text-[17px] font-light text-ibira-dark tracking-wide">
                Código de acesso
              </h3>
              
              <p className="text-[14px] text-ibira-dark/70">
                Use este código para entrar no prédio e<br />apartamento
              </p>

              <div className="rounded-2xl border border-ibira-green/30 bg-gradient-to-br from-ibira-green/20 to-ibira-beige/30 p-6 space-y-2">
                <p className="text-[35px] font-light text-ibira-green text-center tracking-widest">
                  #1234
                </p>
                <p className="text-[15px] text-ibira-dark/70 text-center">
                  Código de acesso
                </p>
              </div>
            </div>

            {/* Step by Step Instructions Card */}
            <div className="rounded-2xl border border-ibira-beige/30 bg-ibira-cream p-4 space-y-3">
              <h3 className="text-[17px] font-light text-ibira-dark tracking-wide">
                Instruções passo a passo
              </h3>
              
              <p className="text-[14px] text-ibira-dark/70">
                Siga estas etapas para acessar o apartamento
              </p>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ibira-green flex items-center justify-center flex-shrink-0">
                    <span className="text-ibira-cream text-[16px]">1</span>
                  </div>
                  <p className="text-[15px] text-ibira-dark pt-2">
                    Digite o código #1234 no portão<br />principal
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ibira-green flex items-center justify-center flex-shrink-0">
                    <span className="text-ibira-cream text-[16px]">2</span>
                  </div>
                  <p className="text-[15px] text-ibira-dark pt-2">
                    Suba para o 3º andar -<br />Apartamento 302
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ibira-green flex items-center justify-center flex-shrink-0">
                    <span className="text-ibira-cream text-[16px]">3</span>
                  </div>
                  <p className="text-[15px] text-ibira-dark pt-2">
                    Use o mesmo código na porta do<br />apartamento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
