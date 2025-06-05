Feature: E-Bebek Login İşlemleri
  Kullanıcı olarak e-bebek sitesine giriş yapabilmeliyim

  Scenario: Geçerli bilgilerle giriş yapma
    Given Kullanıcı e-bebek login sayfasına gider
    When "E-posta ile giriş" seçeneği seçilir
    And "E-posta adresiniz" alanına "<email>" girilir
    And "Giriş Yap/Hesap Oluştur" butonuna tıklanır
    And "Şifre" alanına "<password>" girilir
    And "Giriş Yap" butonuna tıklanır
    Then Kullanıcı giriş yapmış olmalıdır

    Examples:
      | email               | password  |
      | testuser@example.com | Test1234! |