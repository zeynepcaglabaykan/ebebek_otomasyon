# e-bebek Otomasyon Projesi

![Playwright](https://img.shields.io/badge/Playwright-2.3.0-blue)
![Cucumber](https://img.shields.io/badge/Cucumber-8.0.0-green)
![Allure](https://img.shields.io/badge/Allure-2.20.1-orange)

## Özellikler

- Page Object Pattern ile modüler yapı
- Allure ile detaylı raporlama
- Cucumber BDD yaklaşımı
- GitHub Actions CI entegrasyonu
- Multi-browser desteği (Chromium, Firefox, WebKit)

## Kurulum

### Önkoşullar
- Node.js v18+ ([nvm](https://github.com/nvm-sh/nvm) önerilir)
- Java JDK (Allure raporları için)
- Allure Commandline (global olarak yüklenmeli)

```bash
nvm install 18
nvm use 18
```

## Projeyi Klonlayın 
```bash
git clone https://github.com/kullaniciadi/e-bebek-automation.git
cd e-bebek-automation
```

## Bağımlılıkları yükleme

```bash
npm install
```

## Testleri Çalıştırma

```bash
npm test
```

## Belirli Senaryolar

```
# Sadece login testleri
npx cucumber-js features/login.feature
```

## Rapor Oluşturma

```
# Rapor oluştur
npm run report

# Raporu görüntüle
allure open allure-report
```

## Proje Yapısı

```
e-bebek-automation/
├── features/            # Senaryo tanımları (.feature dosyaları)
├── step_definitions/    # Cucumber adım tanımlamaları
├── pages/               # Page Object sınıfları
├── tests/               # Konfigürasyon ve hook dosyaları
├── allure-results/      # Test sonuçları (Allure için)
├── package.json
├── README.md
```
