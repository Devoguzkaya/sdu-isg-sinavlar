// Makine ve Tezgahlarda İSG — 10 Ayrı Test Teması + Ek 75 Çoktan Seçmeli + 35 Boşluk Doldurma
export const makineTestThemes = [
  'Makine Emniyeti Yönetmeliği (2006/42/AT) ve CE Uygunluk İşaretlemesi',
  'Mekanik Tehlikeler: Ezilme, Makaslama, Kapma, Sürüklenme ve Fırlama',
  'Makine Koruyucuları: Sabit, Hareketli, Ayarlanabilir ve Kilitlemeli Koruyucular',
  'Algılama ve Emniyet Tertibatları: Çift El Kumanda, Fotoelektrik Perde, Acil Durdurma',
  'Talaşlı İmalat Tezgahları: Torna, Freze, Matkap ve Taşlama (Zımpara) Taşları',
  'Preslerde (Eksantrik ve Hidrolik) ve Metal İşleme Makinelerinde Güvenlik',
  'Ağaç İşleme Makineleri: Daire Testere, Şerit Testere ve Planya Güvenliği',
  'Kaynak İşlerinde İSG: Gazaltı, Elektrik Ark ve Oksi-Asetilen Kaynağı',
  'Kaldırma ve İletme Ekipmanları: Vinçler, Forkliftler, Halatlar ve Periyodik Kontrol',
  'Basınçlı Kaplar, Kazanlar, Kompresörler ve Bakım-Onarımda EKED (LOTO)'
];

export const makineConceptGroups = [
  {
    groupName: 'Makine Emniyeti Yönetmeliği, Mekanik Tehlikeler ve Koruyucu Türleri',
    items: [
      {
        opt: '2006/42/AT Makine Emniyeti Yönetmeliği ve CE İşareti',
        desc: 'Makinelerin piyasaya arz edilmeden önce temel sağlık ve güvenlik kurallarına uygun olduğunu, teknik dosyasının hazırlandığını ve AB Uygunluk Beyanı ile CE işareti taşıdığını düzenleyen yönetmeliktir.',
        q: 'Makinelerin tasarım ve imalat aşamasında temel sağlık ve güvenlik gerekliliklerini karşıladığını gösteren "CE" uygunluk işaretlemesi hangi yönetmelik kapsamında zorunludur?'
      },
      {
        opt: 'Sabit koruyucular (Sadece alet/anahtarla sökülebilen)',
        desc: 'Kayış-kasnak, dişli ve kaplin gibi işlem sırasında erişim gerektirmeyen tehlikeli hareketli parçaları kapatan; yalnızca özel el aleti (anahtar/tornavida) ile açılabilen ve söküldüğünde bağlantı elemanları üzerinde kalan koruyuculardır.',
        q: 'Normal çalışma sırasında erişim gerektirmeyen kayış-kasnak ve dişli çark gibi aktarma organlarında kullanılan, yalnızca alet (anahtar) yardımıyla sökülebilen en sade koruyucu türü hangisidir?'
      },
      {
        opt: 'Ara kilitlemeli (İnterloklu) hareketli koruyucu',
        desc: 'Koruyucu kapak açıldığında makinenin tehlikeli hareketini otomatik olarak durduran ve kapak kapatılmadıkça makinenin çalışmasına izin vermeyen koruyucu türüdür.',
        q: 'Açıldığında makinenin tehlikeli fonksiyonlarını otomatik olarak durduran ve kapatılıncaya kadar makinenin tekrar çalışmasını engelleyen koruyucu türü hangisidir?'
      },
      {
        opt: 'Kilitli ara kilitlemeli koruyucu (Atalet durana kadar açılmayan)',
        desc: 'Santrifüj, planya veya büyük volanlı makinelerde durdurma komutu verilse bile tehlikeli dönme hareketi (atalet) tamamen sıfırlanana kadar kapağın açılmasını mekanik/elektromanyetik olarak kilitleyen koruyucudur.',
        q: 'Makineye durdurma komutu verildikten sonra bile atalet (devam eden dönme hareketi) tamamen duruncaya kadar kapağın açılmasını engelleyen koruyucu türü hangisidir?'
      },
      {
        opt: 'Kendi kendine ayarlanan (Otomatik) koruyucu',
        desc: 'Daire testere veya planya tezgahlarında iş parçasının ilerlemesiyle birlikte yalnızca parçanın geçeceği kadar açılan ve parça geçtikten sonra yay/ağırlık etkisiyle kendiliğinden eski kapalı konumuna dönen koruyucudur.',
        q: 'İş parçasının kendi hareketiyle yalnızca parçanın geçmesine izin verecek kadar açılan ve işlem bittiğinde otomatik olarak kapalı konuma dönen koruyucu türü hangisidir?'
      },
      {
        opt: 'Çift el kumanda tertibatı (Eşzamanlılık <= 0,5 saniye)',
        desc: 'Operatörün her iki elini de tehlike bölgesinden uzak tutmak için iki butona aynı anda (en fazla 0,5 saniye farkla) basmasını zorunlu kılan; bir el çekildiğinde presi/makineyi anında durduran tertibattır.',
        q: 'Özellikle preslerde operatörün ellerini operasyon noktasından uzak tutmak için her iki elin aynı anda (en fazla 0,5 saniye zaman farkıyla) iki ayrı butona basmasını gerektiren emniyet tertibatı hangisidir?'
      },
      {
        opt: 'Fotoelektrik (Işık) perdesi (ESPE / AOPD)',
        desc: 'Tehlike bölgesinin önüne kızılötesi ışık demeti (perde) oluşturan; el veya vücut uzvu ışık demetini kestiği anda makineyi durduran elektro-duyarlı koruyucu donanımdır.',
        q: 'Operasyon noktası önüne görünmez kızılötesi ışık huzmeleri oluşturarak operatörün eli tehlike bölgesine girdiğinde ışık demetinin kesilmesiyle makineyi anında durduran tertibat hangisidir?'
      },
      {
        opt: 'Acil durdurma (E-Stop) butonu (Sarı zemin üzerine Kırmızı mantar başlı)',
        desc: 'Tehlike anında makineyi en kısa sürede durduran, sarı zemin üzerinde kırmızı mantar başlıklı, basıldığında kilitli kalan ve sıfırlanması (reset) makineyi doğrudan tekrar başlatmayan emniyet elemanıdır.',
        q: 'Makinelerde sarı zemin üzerine kırmızı mantar başlıklı olarak tasarlanan, basıldığında kilitli kalan ve kilidi açıldığında makineyi kendiliğinden tekrar çalıştırmayan tertibat hangisidir?'
      },
      {
        opt: 'Operasyon noktası (Point of operation)',
        desc: 'Makinede kesme, delme, bükme, şekillendirme veya talaş kaldırma işleminin bizzat gerçekleştiği ve iş kazalarının en yoğun yaşandığı tehlikeli bölgedir.',
        q: 'Makine ve tezgahlarda malzeme üzerinde kesme, delme, bükme veya şekillendirme işleminin doğrudan yapıldığı bölgeye ne ad verilir?'
      }
    ]
  },
  {
    groupName: 'Talaşlı İmalat, Zımpara Taşı, Presler ve Ağaç İşleme Tezgahları',
    items: [
      {
        opt: 'Zımpara taşı mesnet (dayama) açıklığı en fazla 3 mm olmalıdır',
        desc: 'Seyyar veya sabit taşlama (zımpara) tezgahlarında iş parçasının taş ile mesnet arasına sıkışıp taşı patlatmasını önlemek için taş ile dayama (mesnet) arasındaki açıklık en fazla 3 mm olacak şekilde ayarlanır.',
        q: 'Zımpara taşı (taşlama) tezgahlarında iş parçasının araya sıkışarak taşı kırmasını önlemek için taş ile iş parçası dayama mesnedi arasındaki mesafe en fazla kaç mm olmalıdır?'
      },
      {
        opt: 'Zımpara taşı göz koruyucu siperi ve üst açıklık (<= 6 mm)',
        desc: 'Zımpara taşı tezgahlarında taşın üst kısmındaki ayarlanabilir dil (talaş saptırıcı) ile taş arasındaki açıklık en fazla 6 mm olmalı, dayama mesnedi ise taş merkezinin (ekseninin) biraz üzerinde veya hizasında olmalıdır.',
        q: 'Zımpara taşı tezgahında taşın üst kısmında bulunan ayarlanabilir koruyucu dil ile taş arasındaki açıklık en fazla kaç mm olmalıdır?'
      },
      {
        opt: 'Çınlama (Ses) testi ve azami devir sayısı (RPM) kontrolü',
        desc: 'Zımpara taşları tezgaha takılmadan önce çatlak kontrolü için tahta tokmakla tıklatılarak "çınlama testi" yapılır; sağlam taş berrak metalik ses verir, çatlak taş tok/boğuk ses çıkarır.',
        q: 'Zımpara taşları tezgaha monte edilmeden önce gözle görülmeyen kılcal çatlakların tespiti için ahşap tokmakla vurularak yapılan kontrole ne ad verilir?'
      },
      {
        opt: 'Torna ve matkap tezgahlarında ELDİVEN KULLANILMAZ ve aynada anahtar unutulmaz',
        desc: 'Dönen ayna, mil ve matkap ucu eldiveni kaparak uzuv kopmasına yol açacağından döner tezgahlarda kesinlikle eldiven giyilmez, bol kıyafet giyilmez ve torna aynası üzerinde ayna anahtarı bırakılmaz.',
        q: 'Torna, freze ve sütunlu matkap gibi yüksek hızla dönen talaşlı imalat tezgahlarında kapma/sürüklenme tehlikesine karşı kesinlikle uyulması gereken temel kural nedir?'
      },
      {
        opt: 'Daire testerede Yarma Bıçağı (Ayırma kaması / Riving knife)',
        desc: 'Ahşap daire testere tezgahlarında kesilen kerestenin testere arka dişlerini sıkıştırarak operatöre doğru şiddetle geri fırlamasını (kickback / geri tepme) önleyen, testere bıçağının hemen arkasındaki kavisli metal parçadır.',
        q: 'Daire testere tezgahlarında kesilen ahşap parçanın testereyi sıkıştırarak operatöre doğru geri tepmesini (fırlamasını) önlemek amacıyla testerenin hemen arkasına takılan güvenlik elemanı hangisidir?'
      },
      {
        opt: 'İtme çubuğu (Push stick) ve geri tepme tırnakları',
        desc: 'Daire testere ve planya tezgahlarında küçük/dar parçalar işlenirken ellerin bıçağa yaklaşmasını önlemek için kullanılan yardımcı el aletidir.',
        q: 'Ağaç işleme (daire testere ve planya) tezgahlarında kesimin son aşamasında veya dar parçalar işlenirken operatörün elinin bıçağa temasını önlemek için kullanılan yardımcı aparat nedir?'
      },
      {
        opt: 'Eksantrik (Mekanik) preslerde tam devir kavraması yerine Kısmi Devir (Friksiyon) kavraması',
        desc: 'Tam devirli (mekanik kamalı) preslerde harekete geçen koç başlığı kurs tamamlanmadan durdurulamadığı için ışık perdesi kullanılamaz; bu nedenle her noktada durabilen friksiyon (hidrolik/pnömatik) kavramalı presler tercih edilir.',
        q: 'Pres tezgahlarında ışık perdesi (fotoelektrik koruyucu) kullanılabilmesi ve koç başlığının strokun (kursun) herhangi bir noktasında anında durdurulabilmesi için pres hangi tip kavrama sistemine sahip olmalıdır?'
      }
    ]
  },
  {
    groupName: 'Kaynak İşlerinde İSG ve Basınçlı Gaz Tüpleri',
    items: [
      {
        opt: 'Asetilen tüpü (Sarı renkli - RAL 1018) ve Bakır (%65-70 üzeri) yasağı',
        desc: 'Asetilen tüpleri sarı renklidir; asetilen gazı saf bakır veya %65-70\'ten fazla bakır içeren alaşımlarla temas ettiğinde patlayıcı "bakır asetilenür" oluşturduğu için bakır boru/rekor kullanımı kesinlikle yasaktır.',
        q: 'Oksi-asetilen kaynağında kullanılan sarı renkli Asetilen tüplerinin valf, manometre ve boru tesisatında patlayıcı bileşik oluşturduğu için hangi metalin (%65-70 üzeri alaşımı) kullanılması kesinlikle yasaktır?'
      },
      {
        opt: 'Oksijen tüpü (Mavi renkli - RAL 5012) ve Yağ/Gres yasağı',
        desc: 'Oksijen tüpleri mavi renklidir; basınçlı saf oksijen sıvı yağ veya gres ile temas ettiğinde kıvılcım olmadan kendiliğinden şiddetle patladığı için oksijen manometresi ve valflerine kesinlikle yağlı elle/bezle dokunulmaz.',
        q: 'Mavi renkli basınçlı Oksijen tüplerinin valf ve manometrelerinin hangi madde ile teması kıvılcım olmaksızın ani ve şiddetli patlamaya neden olur?'
      },
      {
        opt: 'Alev geri tepme emniyet valfi (Flashback arrestor)',
        desc: 'Oksi-gaz kaynağında şaloma ucundan geri tepen alevin ve gaz akışının hortumdan geçerek tüpe ulaşmasını ve tüpü patlatmasını önleyen, regülatör çıkışı ve şaloma girişine takılan emniyet valfidir.',
        q: 'Oksi-asetilen veya oksi-LPG kaynak sistemlerinde alevin hortum içinden tüpe doğru ilerleyerek tüpün patlamasını önlemek amacıyla manometre çıkışına ve şaloma girişine takılan zorunlu emniyet donanımı hangisidir?'
      },
      {
        opt: 'Asetilen tüplerinin maksimum çalışma/dolum basıncı (1,5 bar / tüp içi aseton-gözenekli madde)',
        desc: 'Serbest asetilen gazı 1,5 bar (150 kPa) basıncın üzerinde kararsızlaşıp patlayabildiği için tüp içinde gözenekli maddeye emdirilmiş aseton içinde çözünmüş halde depolanır ve dik konumda kullanılır.',
        q: 'Asetilen gazı serbest halde kaç bar basıncın üzerinde kendiliğinden ayrışarak patlama tehlikesi gösterdiği için tüp içinde aseton emdirilmiş gözenekli kitlede depolanır?'
      },
      {
        opt: 'Elektrik ark kaynağında boşta çalışma gerilimi ve UV/IR radyasyon',
        desc: 'Ark kaynağında oluşan morötesi (UV) ışınlar gözde "kaynak alması / fotokeratit" ve cilt yanığına, kızılötesi (IR) ışınlar ise katarakta yol açar; ayrıca kapalı/iletken alanlarda doğru akım (DC) veya düşük boşta çalışma gerilimli makineler kullanılır.',
        q: 'Elektrik ark ve gazaltı kaynağında ortaya çıkan ve kaynakçının gözünde "kaynak alması (fotokeratit)" ile uzun vadede katarakt oluşumuna neden olan fiziksel risk etmeni hangisidir?'
      },
      {
        opt: 'TIG (Argon) ve MIG/MAG (Gazaltı) kaynağında Ozon, CO ve Boğucu Gaz riski',
        desc: 'Gazaltı kaynağında koruyucu gaz olarak kullanılan Argon ve CO2 havadan ağır olduğu için kapalı/çukur alanlarda oksijeni süpürerek boğulmaya, UV ışınlarının havadaki oksijeni parçalaması ise zehirli Ozon (O3) gazı oluşumuna yol açar.',
        q: 'Kapalı alanlarda yapılan TIG (Argon) veya MIG/MAG gazaltı kaynağında koruyucu gazın ortam havasını süpürmesi ve UV ışınlarının oksijeni etkilemesiyle oluşan iki temel kimyasal risk nedir?'
      }
    ]
  },
  {
    groupName: 'Kaldırma-İletme Ekipmanları, Basınçlı Kaplar ve Periyodik Kontroller',
    items: [
      {
        opt: 'Kaldırma ekipmanları periyodik kontrol süresi (Yılda en az 1 kez)',
        desc: 'İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliğine göre vinç, caraskal, forklift, transpalet ve yük asansörleri standartlarda süre belirtilmemişse yılda en az 1 kez kontrol edilir.',
        q: 'İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliğine göre kaldırma ve iletme ekipmanlarının (vinç, forklift, caraskal) azami periyodik kontrol süresi nedir?'
      },
      {
        opt: 'Kaldırma araçlarında Statik deney (1,25 katı) ve Dinamik deney (1,1 katı)',
        desc: 'Kaldırma ve iletme ekipmanlarının periyodik kontrolünde beyan edilen azami yükün 1,25 katı ile statik yük testi (10 dk askıda tutma), 1,1 katı ile dinamik yük testi uygulanır.',
        q: 'Vinç ve diğer kaldırma araçlarının periyodik muayenelerinde uygulanan "Statik yük deneyi" ve "Dinamik yük deneyi" katsayıları beyan edilen azami yükün sırasıyla kaç katıdır?'
      },
      {
        opt: 'İnsan kaldırmak için kullanılan ekipmanlarda güvenlik katsayısı (Halat: 2 katı, Zincir/Kanca: 10-14)',
        desc: 'Çelik tel halatların genel güvenlik katsayısı 5, zincirlerin 4, tekstil halatların 7 iken; insan taşımada kullanılan ekipmanlarda bu katsayılar genel kural olarak iki katına çıkarılır.',
        q: 'Kaldırma işlemlerinde kullanılan çelik tel halatlar ve kaldırma zincirleri için standart güvenlik (emniyet) katsayıları sırasıyla en az kaç olmalıdır?'
      },
      {
        opt: 'Kanca emniyet mandalı ve tambur üzerinde en az 2-3 sarım halat kalması',
        desc: 'Vinç kancalarında sapanın kancadan kurtulmasını önleyen "emniyet mandalı" bulunmalı ve kanca en alt seviyeye indiğinde bile tambur üzerinde en az 2 tam sarım halat kalmalıdır.',
        q: 'Vinçlerde yük kancası en alt çalışma seviyesine indirildiğinde bile halatın tamburdan kurtulmaması için tambur üzerinde en az kaç tam sarım halat kalmalıdır?'
      },
      {
        opt: 'Basınçlı kaplarda Hidrostatik test basıncı (İşletme basıncının 1,5 katı)',
        desc: 'Buhar kazanları, kompresör hava tankları ve otoklav gibi basınçlı kapların yılda en az 1 kez yapılan periyodik kontrolünde işletme basıncının 1,5 katı ile su kullanılarak hidrostatik test yapılır.',
        q: 'Basınçlı kapların (buhar kazanı, hava tankı vb.) yılda en az 1 kez yapılan periyodik muayenesinde uygulanan "Hidrostatik Test" basıncı, işletme basıncının kaç katıdır?'
      },
      {
        opt: 'Kompresör hava tanklarının patlamaya dayanıklı ayrı bölmede bulunması',
        desc: 'Seyyar veya sabit kompresörlerin tehlike anında çalışanlara zarar vermemesi için patlamaya dayanıklı ayrı bir bölmede veya çalışanlardan en az 10 metre uzakta/korugan içinde yerleştirilmesi gerekir.',
        q: 'Sabit kompresörlerin depoları (hava tankları) patlama riskine karşı işyerinde nasıl konumlandırılmalıdır?'
      }
    ]
  }
];

export const makineExtraFill = [
  { q: 'Makinelerin temel sağlık ve güvenlik kurallarına uygunluğunu gösteren uygunluk işareti ____ işaretidir.', answers: ['CE', 'ce'], hint: 'Avrupa uygunluk işareti', explanation: '2006/42/AT Makine Emniyeti Yönetmeliğine göre CE işareti zorunludur.' },
  { q: 'Makine üzerinde kesme, delme, bükme ve şekillendirme işleminin bizzat yapıldığı yere ____ noktası denir.', answers: ['Operasyon', 'operasyon'], hint: 'İşlemin gerçekleştiği nokta', explanation: 'Malzemenin işlendiği bölgeye operasyon noktası denir.' },
  { q: 'Yalnızca özel bir el aleti (anahtar/tornavida) yardımıyla açılabilen veya sökülebilen koruyuculara ____ koruyucu denir.', answers: ['Sabit', 'sabit'], hint: 'Hareketli olmayan koruyucu', explanation: 'Kayış-kasnak gibi bölgelerde kullanılan koruyucular sabit koruyuculardır.' },
  { q: 'Kapak açıldığında makineyi otomatik olarak durduran koruyuculara ara ____ (interloklu) koruyucu denir.', answers: ['Kilitlemeli', 'kilitlemeli'], hint: 'İnterlok sistemi', explanation: 'Ara kilitlemeli koruyucular kapak açılınca enerjiyi keser.' },
  { q: 'Çift el kumanda tertibatında iki butona basma arasındaki eşzamanlılık süresi en fazla ____ saniye olmalıdır.', answers: ['0,5', '0.5', 'yarım'], hint: 'Yarım saniye', explanation: 'EN ISO 13851 standardına göre iki butona en fazla 0,5 sn farkla basılmalıdır.' },
  { q: 'Acil durdurma (E-Stop) butonları ____ zemin üzerine kırmızı mantar başlıklı olmalıdır.', answers: ['Sarı', 'sarı'], hint: 'Kontrast uyarı rengi', explanation: 'Acil durdurma butonları sarı zemin üzerine kırmızı renktedir.' },
  { q: 'Zımpara taşı tezgahında taş ile dayama (mesnet) arasındaki açıklık en fazla ____ mm olmalıdır.', answers: ['3', 'üç'], hint: 'Parça sıkışmasını önleyen mesafe', explanation: 'Zımpara taşı ile mesnet arası en fazla 3 mm olmalıdır.' },
  { q: 'Zımpara taşı tezgahında taşın üst kısmındaki ayarlanabilir koruyucu dil ile taş arası açıklık en fazla ____ mm olmalıdır.', answers: ['6', 'altı'], hint: 'Üst siper açıklığı', explanation: 'Üst koruyucu dil ile taş arasındaki mesafe en fazla 6 mm olmalıdır.' },
  { q: 'Zımpara taşlarında kılcal çatlak kontrolü için montaj öncesi tahta tokmakla vurularak ____ testi yapılır.', answers: ['Çınlama', 'çınlama', 'Ses'], hint: 'Akustik çatlak kontrolü', explanation: 'Sağlam taş çınlama (metalik) sesi verir, çatlak taş tok ses çıkarır.' },
  { q: 'Torna, freze ve matkap gibi döner tezgahlarda kapma tehlikesi nedeniyle kesinlikle ____ kullanılmaz.', answers: ['Eldiven', 'eldiven'], hint: 'El KKD yasağı', explanation: 'Döner tezgahlarda eldiven kapma ve uzuv kopması riski yaratır.' },
  { q: 'Daire testere tezgahında kesilen parçanın geri tepmesini (fırlamasını) önlemek için testerenin arkasına ____ bıçağı (ayırma kaması) takılır.', answers: ['Yarma', 'yarma', 'Ayırma'], hint: 'Riving knife', explanation: 'Yarma bıçağı (ayırma kaması) ahşabın testereyi sıkıştırmasını önler.' },
  { q: 'Daire testere ve planya tezgahlarında dar parçaları sürerken elleri korumak için ____ çubuğu kullanılır.', answers: ['İtme', 'itme'], hint: 'Push stick', explanation: 'Küçük parçalar itme çubuğu (push stick) ile bıçağa sürülür.' },
  { q: 'Oksi-asetilen kaynağında kullanılan Asetilen tüplerinin dış gövde rengi ____ renktir.', answers: ['Sarı', 'sarı'], hint: 'RAL 1018', explanation: 'Asetilen tüpleri sarı, oksijen tüpleri mavi renklidir.' },
  { q: 'Oksi-asetilen kaynağında kullanılan Oksijen tüplerinin dış gövde rengi ____ renktir.', answers: ['Mavi', 'mavi'], hint: 'RAL 5012', explanation: 'Oksijen tüpleri mavi renklidir.' },
  { q: 'Yanıcı bir gaz olan Hidrojen tüplerinin dış gövde rengi ____ renktir.', answers: ['Kırmızı', 'kırmızı'], hint: 'RAL 3000', explanation: 'Hidrojen tüpleri kırmızı, Azot tüpleri yeşil, Argon açık mavidir.' },
  { q: 'Asetilen gazı, patlayıcı "bakır asetilenür" oluşturduğu için ____ (%65-70 üzeri) boru ve rekorlarla temas ettirilmez.', answers: ['Bakır', 'bakır'], hint: 'Kızıl iletken metal', explanation: 'Asetilen tesisatında saf bakır ve %70 üstü bakır alaşımı kullanılmaz.' },
  { q: 'Basınçlı saf oksijen valf ve manometreleri, patlama tehlikesi nedeniyle kesinlikle ____ ve gres ile temas ettirilmemelidir.', answers: ['Yağ', 'yağ'], hint: 'Kayganlaştırıcı madde', explanation: 'Oksijen ile yağ/gres teması kendiliğinden patlamaya yol açar.' },
  { q: 'Oksi-gaz kaynağında alevin tüpe yürümesini önlemek için hortum/regülatör hattına ____ geri tepme emniyet valfi takılır.', answers: ['Alev', 'alev'], hint: 'Flashback arrestor', explanation: 'Alev geri tepme emniyet valfi tüp patlamasını önler.' },
  { q: 'Asetilen gazının serbest halde çalışma basıncı ____ barı geçmemelidir.', answers: ['1,5', '1.5'], hint: 'Bir buçuk bar', explanation: 'Asetilen 1,5 bar üzerinde kararsızlaşıp patlama riski taşır.' },
  { q: 'Elektrik ark kaynağında gözleri UV ve IR ışınlarından korumak için uygun kararma dereceli (DIN) kaynak ____ kullanılır.', answers: ['Maskesi', 'maskesi'], hint: 'Yüz ve göz koruyucu', explanation: 'Ark kaynağında UV/IR radyasyonuna karşı kaynak maskesi kullanılır.' },
  { q: 'Kaldırma ve iletme ekipmanlarının (vinç, forklift, caraskal) periyodik kontrol süresi yılda en az ____ defadır.', answers: ['1', 'bir'], hint: 'Yıllık muayene', explanation: 'Kaldırma ve iletme ekipmanları yılda en az 1 kez kontrol edilir.' },
  { q: 'Kaldırma araçlarının statik yük deneyinde deney yükü, beyan edilen azami yükün en az ____ katı olmalıdır.', answers: ['1,25', '1.25'], hint: 'Yüzde 25 fazlası', explanation: 'Statik deney 1,25 katı, dinamik deney 1,1 katı yükle yapılır.' },
  { q: 'Kaldırma araçlarının dinamik yük deneyinde deney yükü, beyan edilen azami yükün en az ____ katı olmalıdır.', answers: ['1,1', '1.1'], hint: 'Yüzde 10 fazlası', explanation: 'Dinamik yük deneyi azami yükün 1,1 katı ile yapılır.' },
  { q: 'Vinç kancası en alt seviyeye indiğinde tambur üzerinde en az ____ tam sarım halat kalmalıdır.', answers: ['2', 'iki'], hint: 'Halatın kurtulmaması için', explanation: 'Tambur üzerinde en az 2 tam sarım halat kalmalıdır.' },
  { q: 'Kaldırma işlemlerinde kullanılan çelik tel halatların güvenlik katsayısı en az ____ olmalıdır.', answers: ['5', 'beş'], hint: 'Zincirde 4, tel halatta 5', explanation: 'Çelik tel halatların güvenlik katsayısı en az 5\'tir.' },
  { q: 'Kaldırma işlemlerinde kullanılan zincirlerin güvenlik katsayısı en az ____ olmalıdır.', answers: ['4', 'dört'], hint: 'Tel halatta 5, zincirde 4', explanation: 'Kaldırma zincirlerinin güvenlik katsayısı en az 4\'tür.' },
  { q: 'Basınçlı kapların (kazan, hava tankı) periyodik kontrol süresi standartta aksi belirtilmedikçe yılda en az ____ defadır.', answers: ['1', 'bir'], hint: 'Yıllık periyot', explanation: 'Basınçlı kaplar yılda en az 1 kez kontrol edilir.' },
  { q: 'Basınçlı kapların hidrostatik test basıncı, işletme basıncının ____ katıdır.', answers: ['1,5', '1.5'], hint: 'Bir buçuk katı', explanation: 'Hidrostatik test işletme basıncının 1,5 katı ile yapılır.' },
  { q: 'Forkliftlerde yük taşırken çatallar yerden yaklaşık ____ - 20 cm yukarıda tutulmalıdır.', answers: ['15', 'on beş'], hint: 'Devrilmeyi önleyen yükseklik', explanation: 'Forklift çatalları sürüş esnasında yerden 15-20 cm yukarıda taşınır.' },
  { q: 'Forklift operatörünün devrilme anında ezilmesini önlemek için kabinde ROPS/FOPS ve emniyet ____ bulunması zorunludur.', answers: ['Kemeri', 'kemeri'], hint: 'Kabin dışına fırlamayı önler', explanation: 'Forklift devrilmelerinde emniyet kemeri operatörün kabin altında kalmasını önler.' },
  { q: 'Makine bakım ve onarımında beklenmedik çalışmayı önlemek için uygulanan prosedür ____ (Etiketle - Kilitle - Emniyete Al - Dene) sistemidir.', answers: ['EKED', 'LOTO', 'eked'], hint: 'Lockout - Tagout', explanation: 'EKED (LOTO) bakım sırasında tüm enerji kaynaklarını kilitler.' },
  { q: 'Buhar kazanlarında aşırı basınç artışına karşı birbirinden bağımsız en az ____ adet emniyet ventili (subabı) bulunmalıdır.', answers: ['2', 'iki'], hint: 'Yedekli güvenlik', explanation: 'Buhar kazanlarında en az 2 adet emniyet ventili ve 2 adet su seviye göstergesi bulunur.' },
  { q: 'Taşınabilir gaz tüpleri her zaman ____ konumda ve devrilmeye karşı zincir/kelepçe ile sabitlenerek kullanılmalıdır.', answers: ['Dik', 'dik'], hint: 'Yatay değil!', explanation: 'Basınçlı gaz tüpleri dik konumda sabitlenerek depolanır ve kullanılır.' },
  { q: 'Şerit testere tezgahlarında testere şeridinin sadece ____ yapılan kısmı açıkta bırakılır, diğer tüm kısımlar koruyucu içine alınır.', answers: ['Kesim', 'kesim', 'işlem'], hint: 'Operasyon bölgesi', explanation: 'Şerit testerenin kesim bölgesi dışındaki tüm kasnak ve şerit boyu kapalı olmalıdır.' },
  { q: 'Kaldırma operasyonlarında yükün altında veya tehlikeli salınım alanında ____ bulunması kesinlikle yasaktır.', answers: ['İnsan', 'insan', 'çalışan'], hint: 'Askıdaki yük kuralı', explanation: 'Askıdaki yükün altında hiçbir zaman çalışan bulundurulmaz.' }
];
