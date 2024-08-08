# telefon-rehberi

başlatma olarak - npm start 
web site - https://telefon-rehberi.onrender.com // 30 dakika işlem yapılmazsa tekrar açılması 30-60 saniye arasında olabiliyor ramdan tasarruf amaçlı

```c++
int main() {
    // Pencere boyutlarını ve özelliklerini belirleyin
    webview::webview w(true, nullptr);
    w.set_title("Telefon Rehberi");
    w.set_size(800, 800, WEBVIEW_HINT_NONE);
    
    // Web sitesini yükleyin
    w.navigate("https://telefon-rehberi.onrender.com");
    
    // Uygulamayı çalıştırın
    w.run();
    
    return 0;
}

```
webview aktarılırken bu kod sayesinde okunmasını sağlanacak aynı zamanda başka bir cihazdan rehber düzenlenebilir olmasını sağlayacak.



