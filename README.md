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

<button name="button"  onclick="location.href='https://telefon-rehberi.onrender.com'">Rehber </button>  
[![Button Example]][[Link]]  
[Link]: # '[https://telefon-rehberi.onrender.com']
[Button Example]: https://img.shields.io/badge/Title-37a779?style=for-the-badge  
style=" width: 100px; height: 100px; border-radius: 32%; background-color: gold; color: black; font-size: 150%; font-weight: 600; border-color: gold;"  
