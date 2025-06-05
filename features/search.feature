Feature: E-Bebek Arama İşlemleri
  Kullanıcı olarak e-bebek sitesinde arama yapabilmeliyim

  Scenario: Bebek bezi arama
    Given Kullanıcı e-bebek ana sayfasındadır
    When Arama çubuğuna "bebek bezi" yazılır
    And Enter tuşuna basılır
    Then "bebek bezi" arama sonuçları görüntülenmelidir