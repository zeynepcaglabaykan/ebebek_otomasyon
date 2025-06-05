Feature: E-Bebek Çıkış İşlemleri
  Kullanıcı olarak e-bebek sitesinden çıkış yapabilmeliyim

  Scenario: Çıkış yapma
    Given Kullanıcı giriş yapmış durumdadır
    When "Hesabım" simgesine tıklanır
    And "Çıkış Yap" seçeneğine tıklanır
    Then Kullanıcı çıkış yapmış olmalıdır