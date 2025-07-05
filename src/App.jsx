export default function App() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">CodEB</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Yeni nesil yapay zekâ çözümleri ve akıllı yazılım teknolojileri geliştiriyoruz.
        </p>
        <a
          href="#contact"
          className="bg-cyan-500 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-cyan-400 transition"
        >
          Bize Ulaşın
        </a>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-4">Hakkımızda</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          Fatih Bayazıt ve Mustafa Akın Eskici tarafından kurulan CodEB, yapay zekâ teknolojileriyle 
          yazılım dünyasını yeniden şekillendirmeyi amaçlayan bir teknoloji girişimidir.
        </p>
      </section>

      <section id="services" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Yapay Zekâ Sistemleri</h3>
            <p className="text-gray-300">Tahminleme, sınıflandırma, görüntü işleme çözümleri.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Web / Mobil Yazılım</h3>
            <p className="text-gray-300">Özel uygulamalar, arayüzler ve altyapı sistemleri.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Veri Bilimi & Danışmanlık</h3>
            <p className="text-gray-300">Veriye dayalı karar destek ve eğitim hizmetleri.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-4">İletişim</h2>
        <p className="text-gray-300 mb-6">Bizimle iletişime geçmek için aşağıdaki adresi kullanabilirsiniz.</p>
        <p className="text-cyan-400 font-semibold text-lg">hello@codeb.ai</p>
      </section>
    </main>
  );
}
