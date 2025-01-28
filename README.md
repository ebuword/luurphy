# Luurphy - Modern Sosyal Medya Platformu

Luurphy, Gemini AI destekli, modern ve kullanıcı dostu bir sosyal medya platformudur.

## 🚀 Özellikler

- 🎨 Modern ve duyarlı tasarım
- 🌙 Karanlık/Aydınlık tema desteği 
- 🤖 Gemini AI entegrasyonu
- ✨ Framer Motion animasyonları
- 👥 Kullanıcı profilleri ve etkileşimler
- 📱 Mobil uyumlu arayüz
- 💬 Gerçek zamanlı sohbet
- 🎥 Canlı yayın desteği
- 🔍 Gelişmiş arama özellikleri
- 📝 Gönderiler ve yorumlar sistemi

## 🛠️ Kullanılan Teknolojiler

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Google Gemini AI
- React Router v6
- FontAwesome Icons

## 📦 Kurulum

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/luurphy.git
   ```

2. Proje dizinine gidin:
   ```bash
   cd luurphy
   ```

3. Gerekli paketleri yükleyin:
   ```bash
   npm install react-router-dom @types/react-router-dom framer-motion @google/generative-ai @tailwindcss/forms @fortawesome/fontawesome-free
   ```

4. .env dosyası oluşturun:
   ```env
   REACT_APP_GEMINI_API_KEY=your_api_key_here
   ```

5. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

## 🚨 Bilinen Hatalar

- Gemini AI API anahtarı olmadan içerik üretilemiyor
- İlk yüklemede tema gecikmesi olabiliyor
- Mobil görünümde navbar düzenlemesi gerekiyor
- TypeScript tip tanımlamaları eksik
- Bazı bileşenlerde prop validasyonları eksik

## ✅ Son Tamamlananlar

- ThemeContext entegrasyonu
- Tailwind yapılandırması
- React Router yapılandırması
- Gemini AI servisi implementasyonu
- Karanlık/Aydınlık tema geçişi
- Sayfa animasyonları
- Temel bileşen yapısı

## 📝 Yapılacaklar

### Acil
- [ ] TypeScript tip tanımlamalarını tamamla
- [ ] Prop validasyonlarını ekle
- [ ] Mobil responsive tasarımı düzelt
- [ ] API hata yönetimini geliştir

### Öncelikli
- [ ] Kullanıcı kimlik doğrulama sistemi
- [ ] Gerçek zamanlı bildirim sistemi
- [ ] Gönderi paylaşma fonksiyonalitesi
- [ ] Profil düzenleme sayfası

### Gelecek Özellikler
- [ ] Çoklu dil desteği
- [ ] Dosya yükleme sistemi
- [ ] Video oynatıcı entegrasyonu
- [ ] Gelişmiş arama filtreleri

## 📁 Proje Yapısı
src/
├── components/ # Yeniden kullanılabilir bileşenler
│ ├── Navbar.tsx
│ ├── PostCard.tsx
│ └── GeminiChat.tsx
├── contexts/ # Context API dosyaları
│ └── ThemeContext.tsx
├── pages/ # Sayfa bileşenleri
│ ├── Home.tsx
│ ├── Profile.tsx
│ ├── Live.tsx
│ ├── Friends.tsx
│ ├── Posts.tsx
│ └── auth/
│ ├── Login.tsx
│ └── Register.tsx
├── services/ # API servisleri
│ └── gemini.ts
└── styles/ # Stil dosyaları
└── global.css

## 🎨 Stil Rehberi

### Tailwind CSS Kullanımı
- Karanlık/Aydınlık tema için `dark:` prefix'i kullan
- Responsive tasarım için `sm:`, `md:`, `lg:` prefix'lerini kullan
- Animasyonlar için Framer Motion tercih et

### TypeScript
- Her bileşen için interface tanımla
- Props için tip tanımlamaları kullan
- Context'ler için tip güvenliği sağla

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik: Açıklama'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- Website: [luurphy.com](https://luurphy.com)
- Email: info@luurphy.com
- Twitter: [@luurphy](https://twitter.com/luurphy)

---

⭐️ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

