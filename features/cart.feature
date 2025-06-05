Feature: E-Bebek Sepet İşlemleri
  Kullanıcı olarak e-bebek sitesinde sepete ürün ekleyebilmeliyim

  Scenario: Sepete ürün ekleme
    Given Kullanıcı "bebek bezi" arama sonuçları sayfasındadır
    When Ürün listesinden ilk ürünün "Sepete Ekle" butonuna tıklanır
    Then "Ürün Sepete Eklendi" mesajı görüntülenmelidir