# E-Ticaret UI Test Otomasyonu 🚀

Bu proje, SauceDemo e-ticaret platformu üzerinde gerçekleştirilen **Uçtan Uca (E2E)** arayüz test otomasyonunu içermektedir. Modern test mimarisi standartlarına uygun olarak tasarlanmış ve ölçeklenebilir bir yapı kurulmuştur.

## 🛠️ Kullanılan Teknolojiler
* **Framework:** CodeceptJS
* **Motor:** Playwright (Chromium)
* **Dil:** JavaScript (Node.js)
* **Mimari:** Page Object Model (POM)
* **Yaklaşım:** BDD (Behavior Driven Development) tarzı okunabilir senaryolar

## 📋 Otomatize Edilen Senaryolar
1. **Login Süreci (`login_process_test.js`):** * Geçerli kimlik bilgileriyle sisteme başarılı giriş yapılması ve anasayfa yönlendirmesinin doğrulanması.
2. **Uçtan Uca Satın Alma Süreci (`e2e_cart_process_test.js`):**
   * Kullanıcı girişi, ürünün sepete eklenmesi, sepet doğrulamasının yapılması, kargo/ödeme bilgilerinin girilmesi ve başarılı sipariş (Checkout) onayının alınması.
