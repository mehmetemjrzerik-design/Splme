import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Turbopack veya React Compiler ayarları varsa burada false yapın */
  experimental: {
    // reactCompiler: false, // Eğer hata devam ederse bunu ekleyin
  }
};

export default nextConfig;
