# JavaScript Homework 10

Vite ile hazırlanmış geri sayım zamanlayıcısı ve Promise üreteci.

## Çalıştırma

```sh
npm install
npm run dev
```

```sh
npm run format:check
npm run build
npm run preview
```

## Görevler

- `src/01-timer.html`: flatpickr ile gelecek tarih seçimi, iziToast ile geçmiş tarih uyarısı ve saniyede bir güncellenen geri sayım. Başlatıldıktan sonra tarih ve Start düğmesi kilitlenir. Yeni bir geri sayım için sayfa yenilenmelidir.
- `src/02-snackbar.html`: seçilen süre sonunda resolve/reject olan Promise ve iziToast bildirimi. Form gönderildikten sonra sıfırlanır; birden fazla bildirim bağımsız olarak planlanabilir.

## Teslim bağlantıları

- Kaynak: <https://github.com/kazimchdr-star/goit-js-hw-10>
- GitHub Pages hedefi: <https://kazimchdr-star.github.io/goit-js-hw-10/>

Pages bağlantısı, dosyalar GitHub'a gönderilip depo ayarlarındaki **Pages → Source → GitHub Actions** seçildikten ve deploy iş akışı başarıyla tamamlandıktan sonra çalışır.
