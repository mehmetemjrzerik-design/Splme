import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* React Compiler artık experimental dışına taşındı */
  reactCompiler: true,
  
  /* Eğer v0'dan gelen başka özel ayarların varsa buraya ekleyebilirsin */
  /* Örneğin görseller için uzak domain izinleri vb. */
};

export default nextConfig;