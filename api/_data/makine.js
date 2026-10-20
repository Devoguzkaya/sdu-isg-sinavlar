export const makineCourse = {
  id: "makine",
  code: "12227ISG005",
  title: "Makine, Teçhizat ve Enerji Sistemlerinde İş Güvenliği",
  instructor: "Prof. Dr. İbrahim ÜÇGÜL",
  examInfo: "Yüz Yüze Çoktan Seçmeli Test | Makine-Teçhizat-Cihaz Tanımları + SI Birimleri + İmalat/Malzeme",
  color: "indigo",
  hex: "#4f46e5",
  badge: "Salı • 40 Soru (25 Test + 15 Boşluk)",
  tips: [
    "İbrahim Hoca derste bizzat söyledi: 'Makine, Teçhizat, Cihaz, Motor ve İş Makinesi arasındaki tanım farkları test sınavında tekrar tekrar karşınıza gelir!'",
    "SI Birim Sistemi (Kuvvet: Newton, Basınç: Pascal, Enerji: Joule, Güç: Watt) ve malzeme mekanik özellikleri (akma, çekme, gevreklik, yorulma, sünme) çok önemlidir.",
    "13 Ekim (5. hafta) dersinde işlenen 'Talaşlı İmalat ve Taşlama Tezgahları Güvenliği' (zımpara taşı, mesnet açıklığı 3 mm) ve 6. hafta sunumu vize kapsamındadır."
  ],
  mcQuestions: [
    {
      q: "Prof. Dr. İbrahim Üçgül'ün ders tanımlarına göre; 'Herhangi bir enerji türünü başka bir enerjiye dönüştürerek, bir kuvvet uygulayarak belirli bir iş yapan sabit ve hareketli parçalardan oluşan düzenekler topluluğu' aşağıdakilerden hangisidir?",
      options: ["Teçhizat", "Cihaz", "Makine", "Tesisat", "Enstrüman"],
      answer: 2,
      explanation: "İbrahim Hoca'nın temel tanımı: Enerjiyi başka bir enerjiye dönüştürerek belirli bir iş yapan mekanik düzeneklere 'Makine' denir.",
      optionExplanations: [
        "Teçhizat; malzemeyi ileten, biriktiren, depolayan boru hattı ve tank gibi düzeneklerdir.",
        "Cihaz; insanların bilgi, duyu ve sezgilerini artıran ölçme, kontrol ve muayene sistemleridir.",
        "DOĞRU: Herhangi bir enerjiyi başka bir enerjiye dönüştürerek kuvvet uygulayan ve iş yapan düzeneklere 'Makine' denir.",
        "Tesisat; bina veya işletmedeki boru, kablo ve kanal ağlarının genel adıdır (teçhizat kapsamında değerlendirilir).",
        "Enstrüman; hassas ölçüm ve gösterge aletidir (cihaz grubuna girer)."
      ]
    },
    {
      q: "Malzemeyi çeviren, ileten, biriktiren, depolayan boru hatları, su tesisatları, tanklar ve konveyör bantlar gibi sistemlere mühendislik terminolojisinde ne ad verilir?",
      options: ["Cihaz", "Teçhizat (Tesisat)", "Motor", "Sensör", "Türbin"],
      answer: 1,
      explanation: "Malzemeyi ileten, biriktiren, depolayan sistemler 'Teçhizat / Tesisat' olarak tanımlanır.",
      optionExplanations: [
        "Cihaz; ölçme, muayene ve kontrol işlevi gören aygıtlardır (manometre, röntgen cihazı vb.).",
        "DOĞRU: Malzemeyi ileten, biriktiren ve depolayan boru hatları, tanklar ve tesisatlara 'Teçhizat' denir.",
        "Motor; ısı, elektrik veya kimyasal enerjiyi mekanik enerjiye dönüştüren kuvvet makinesidir.",
        "Sensör; fiziksel büyüklükleri (sıcaklık, basınç, ışık) algılayıp elektrik sinyaline çeviren algılayıcıdır.",
        "Türbin; akışkan enerjisini (su, buhar, gaz) dönme mekanik enerjisine çeviren kuvvet makinesidir."
      ]
    },
    {
      q: "İnsanların bilgi, duyu ve sezgilerini artıran; ölçme, kontrol, muayene veya haberleşme amacıyla kullanılan düzeneklere (röntgen aleti, manometre, termometre vb.) ne ad verilir?",
      options: ["Cihaz (Aygıt)", "İş makinesi", "Motor", "Teçhizat", "Kompresör"],
      answer: 0,
      explanation: "İnsanların bilgi ve sezgilerini artıran kontrol ve ölçme sistemlerine 'Cihaz' adı verilir.",
      optionExplanations: [
        "DOĞRU: İnsanların duyu, bilgi ve sezgilerini artıran ölçme, kontrol ve muayene düzeneklerine 'Cihaz' denir.",
        "İş makinesi; motordan aldığı mekanik enerjiyi kazma, kaldırma, şekillendirme gibi yararlı işe dönüştüren makinedir.",
        "Motor; enerjiyi mekanik enerjiye çeviren kuvvet makinesidir.",
        "Teçhizat; malzemeyi depolayan ve ileten tesisat sistemleridir.",
        "Kompresör; mekanik enerji harcayarak havayı veya gazları sıkıştıran (basıncını artıran) makinedir."
      ]
    },
    {
      q: "Enerji dönüşümü açısından 'Motor' ile 'İş Makinesi' arasındaki temel fark aşağıdakilerden hangisinde doğru verilmiştir?",
      options: [
        "Motor mekanik enerjiyi ısıya çevirir; İş makinesi elektrik üretir",
        "Motor ısı, elektrik veya hidrolik enerjiyi MEKANİK enerjiye çevirir; İş makinesi ise motordan aldığı mekanik enerjiyi YARARLI İŞE dönüştürür",
        "İkisi de tamamen aynıdır",
        "Motor sadece insan gücüyle çalışır",
        "İş makinesi enerji tüketmez"
      ],
      answer: 1,
      explanation: "İbrahim Hoca'nın sınav sorusu olarak vurguladığı ayrım: Motor çeşitli enerjileri mekanik enerjiye çevirir; İş makinesi ise bu mekanik enerjiyi yararlı işe dönüştürür.",
      optionExplanations: [
        "Mekanik enerjiyi elektriğe çeviren makineye 'Jeneratör (Alternatör)' denir; motorun görevi mekanik enerji üretmektir.",
        "DOĞRU: Motor (kuvvet makinesi) elektrik/ısı enerjisini mekanik enerjiye çevirir; İş makinesi ise bu mekanik enerjiyi kullanarak yararlı iş (kazı, kesme, taşıma) yapar.",
        "Görevleri birbirini tamamlar ancak enerji dönüşüm yönleri farklıdır.",
        "Motorlar elektrik, içten yanmalı yakıt, hidrolik veya pnömatik enerjiyle çalışır.",
        "Termodinamik kanunlarına göre enerji tüketmeden iş yapan makine (devridaim makinesi) olamaz."
      ]
    },
    {
      q: "Uluslararası Birim Sistemi'nde (SI) 'Basınç' ve 'Mekanik Gerilme' birimi olan Pascal (Pa) aşağıdakilerden hangisine eşittir?",
      options: [
        "1 Pa = 1 N / m² (Metrekareye düşen Newton kuvveti)",
        "1 Pa = 1 N . m (Joule)",
        "1 Pa = 1 J / s (Watt)",
        "1 Pa = 1 kg . m",
        "1 Pa = 100 Bar"
      ],
      answer: 0,
      explanation: "Basınç birim yüzeye dik etkiyen kuvvettir: P = F / A -> 1 Pascal = 1 Newton / m². Ayrıca 1 Bar = 100.000 Pa (10⁵ Pa) = 0,1 MPa'dır.",
      optionExplanations: [
        "DOĞRU: Basınç ve mekanik gerilme (σ = F / A), birim alana (m²) etki eden dik kuvvettir (Newton); 1 Pa = 1 N/m².",
        "1 N . m = 1 Joule (J) olup 'İş, Enerji ve Isı' birimidir (veya moment birimi N.m'dir).",
        "1 J / s = 1 Watt (W) olup birim zamanda yapılan işi yani 'Güç' birimini ifade eder.",
        "1 kg . m/s² = 1 Newton (Kuvvet) birimidir; kg.m tek başına basınç değildir.",
        "Tam tersine 1 Bar = 100.000 Pa (10⁵ Pa) değerindedir; 1 Pa çok küçük bir basınçtır."
      ]
    },
    {
      q: "Malzemelerin değişken (tekrarlı/periyodik) yükler altında, malzemenin çekme dayanımından ve hatta akma sınırından bile daha düşük gerilmelerde zamanla çatlayarak kırılması olayına ne ad verilir?",
      options: ["Sünme (Creep)", "Yorulma (Fatigue)", "Sertleşme", "Tokluk", "Plastik şişme"],
      answer: 1,
      explanation: "Dinamik ve tekrarlı yükler altında dönen millerde, vinç halatlarında ve makine parçalarında oluşan en tehlikeli kırılma türü 'Yorulma (Fatigue)' kırılmasıdır.",
      optionExplanations: [
        "Sünme (Creep); sabit yük ve YÜKSEK SICAKLIK altında malzemenin zamanla yavaş yavaş uzamasıdır.",
        "DOĞRU: Tekrarlı/dinamik gerilmeler altında akma sınırının bile altındaki yüklerde oluşan sinsi çatlama ve kırılmaya 'Yorulma (Fatigue)' denir.",
        "Sertleşme (deformasyon sertleşmesi); soğuk şekil verme sırasında malzemenin mukavemetinin artıp sünekliğinin azalmasıdır.",
        "Tokluk; malzemenin kırılıncaya kadar soğurduğu (absorbe ettiği) toplam enerji miktarıdır.",
        "Plastik şişme standart bir malzeme kırılma mekanizması değildir."
      ]
    },
    {
      q: "Malzemenin yüksek sıcaklık ve sabit yük altında zamanla yavaş yavaş kalıcı şekil değiştirmesi (uzaması) olayına (örneğin buhar kazanı borularında) ne ad verilir?",
      options: ["Sünme (Creep)", "Gevreklik", "Elastikiyet", "Çentik darbe", "Burkulma"],
      answer: 0,
      explanation: "Sabit gerilme ve yüksek sıcaklık altında zamanla oluşan kalıcı deformasyona 'Sünme (Creep)' denir.",
      optionExplanations: [
        "DOĞRU: Yüksek sıcaklıkta (ergime sıcaklığının %40'ı üzerinde) sabit yük altında zamanla oluşan kalıcı uzamaya 'Sünme (Creep)' denir.",
        "Gevreklik; malzemenin plastik şekil değiştirmeden aniden kırılma özelliğidir.",
        "Elastikiyet (Esneklik); kuvvet kaldırıldığında malzemenin ilk boyutlarına geri dönme özelliğidir.",
        "Çentik darbe (Charpy testi); malzemenin darbe enerjisine karşı tokluğunu ölçen deneydir.",
        "Burkulma (Flambaj); ince uzun kolonların veya basma çubuklarının eksenel basma yükü altında yana doğru eğilmesidir."
      ]
    },
    {
      q: "13 Ekim dersinde işlenen 'Taşlama Tezgahları (Zımpara Taşı)' güvenliği ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
      options: [
        "Taşlama taşının üzerinde izin verilen maksimum devir sayısı (veya çevresel hız) yazılı olmalı ve bu hız kesinlikle aşılmamalıdır",
        "Taşı yerine takmadan önce çatlak kontrolü için ahşap tokmakla 'tınlama (ses) testi' yapılmalıdır",
        "İş parçası dayama mesnedi ile taş arasındaki açıklık en fazla 3 mm olmalıdır",
        "Taşlama taşının yan yüzeyleri ile ağır taşlama yapılmalı ve koruyucu kapak sökülmelidir",
        "Çalışırken mutlaka koruyucu gözlük / yüz siperi kullanılmalıdır"
      ],
      answer: 3,
      explanation: "Zımpara taşlarının yan yüzeyleriyle taşlama yapmak taşın kırılıp patlamasına yol açar; koruyucu kapak kesinlikle sökülmez ve mesnet açıklığı 3 mm'yi geçmemelidir.",
      optionExplanations: [
        "Taşın etiketindeki azami devir hızı aşılırsa merkezkaç kuvvetiyle taş patlar (doğru kuraldır).",
        "Montaj öncesi ahşap tokmakla vurularak yapılan 'tınlama testi' ile iç çatlak olup olmadığı kontrol edilir (doğru kuraldır).",
        "İş parçasının taş ile mesnet arasına sıkışıp taşı patlatmaması için açıklık azami 3 mm olmalıdır (doğru kuraldır).",
        "DOĞRU (YANLIŞ UYGULAMA): Taşın yan yüzeyi yanal baskıya dayanıksızdır, kırılıp patlar; ayrıca koruyucu kapak asla sökülemez!",
        "Fırlayan kıvılcım ve çapaklara karşı gözlük/yüz siperi kullanımı zorunludur (doğru kuraldır)."
      ]
    },
    {
      q: "Birbirine zıt yönde dönen iki silindir, dişli çark veya kayış-kasnak arasına el veya elbisenin kapılması mekanik tehlikelerden hangisine girer?",
      options: [
        "İçeri çekilme / Kapma (Kıstırma noktası)",
        "Yüksek sıcaklık",
        "Elektrik çarpması",
        "Radyasyon",
        "Kimyasal yanık"
      ],
      answer: 0,
      explanation: "Birlikte dönen merdaneler, dişliler ve kayış-kasnak giriş noktaları 'İçeri çekilme ve kapma (in-running nip point)' tehlikesi oluşturur ve sabit koruyucu içine alınmalıdır.",
      optionExplanations: [
        "DOĞRU: İki döner merdane, dişli çark veya kayış-kasnak giriş bölgesi tipik 'İçeri çekilme / Kapma (Kıstırma noktası)' mekanik tehlikesidir.",
        "Yüksek sıcaklık termal bir tehlikedir, mekanik kapma tehlikesi değildir.",
        "Elektrik çarpması elektriksel tehlikedir.",
        "Radyasyon fiziksel/ışıma tehlikesidir.",
        "Kimyasal yanık tehlikeli madde maruziyetidir."
      ]
    },
    {
      q: "Pres tezgahlarında operatörün iki elini birden aynı anda butonlara basmaya zorlayarak ellerin tehlikeli kalıp bölgesine girmesini engelleyen koruma tertibatı hangisidir?",
      options: [
        "Çift El Kumanda Tertibatı",
        "Ayak pedalı",
        "Sabit çit",
        "Acil durdurma halatı",
        "Sınır anahtarı"
      ],
      answer: 0,
      explanation: "Çift el kumanda tertibatı, operatörün her iki elini de aynı anda (eşzamanlı) basılı tutmasını gerektirerek ellerin pres kalıbı altında kalmasını önler.",
      optionExplanations: [
        "DOĞRU: Çift el kumanda tertibatı, iki butona 0,5 saniye eşzamanlılık içinde iki elle basılmasını zorunlu kılarak elleri kalıp dışına çeker.",
        "Ayak pedalı elleri serbest bıraktığı için (fotosel/ışık perdesi yoksa) elin kalıp altında kalmasına yol açan en tehlikeli kumandadır.",
        "Sabit çit malzeme besleme ağzını tamamen kapatırsa parça konulamaz; açık kalıp preslerde çift el kumanda veya ışık perdesi kullanılır.",
        "Acil durdurma halatı konveyör bantlar boyunca acil duruş için kullanılır.",
        "Sınır anahtarı (limit switch) hareket mesafesini sınırlar, tek başına iki eli meşgul etmez."
      ]
    },
    {
      q: "Talaşlı imalatta (torna, freze, matkap tezgahlarında) döner aksama sahip makinelerde çalışırken aşağıdaki davranışlardan hangisi KESİNLİKLE YASAKTIR?",
      options: [
        "Eldiven kullanmak, bol kıyafet giymek, sarkık kravat/takı takmak ve uzun saçı açık bırakmak",
        "Koruyucu gözlük takmak",
        "Çıkan uzun talaşları talaş kancası ile temizlemek",
        "İş parçasını aynaya sağlam bağlamak",
        "Ayna anahtarını tezgah üzerinde bırakmamak"
      ],
      answer: 0,
      explanation: "Torna ve matkap gibi döner tezgahlarda eldiven giymek veya bol elbise/takı/açık saç bulundurmak, döner parçaya sarılarak uzuv kopmasına yol açacağı için kesinlikle yasaktır!",
      optionExplanations: [
        "DOĞRU: Döner aynalı ve milli tezgahlarda eldiven lifleri döner parçaya kapılarak elin ve kolun kopmasına neden olur; eldiven ve bol kıyafet kesinlikle yasaktır!",
        "Sıçrayan sıcak metal talaşlarına karşı koruyucu gözlük takmak zorunludur.",
        "Keskin şerit talaşlar çıplak elle değil, özel 'talaş kancası' veya fırça ile temizlenmelidir.",
        "İş parçasının fırlamaması için torna aynasına sağlam bağlanması zorunludur.",
        "Torna ayna anahtarının ayna üzerinde unutulması, tezgah çalıştığında anahtarın mermi gibi fırlamasına yol açacağından üzerinde bırakılmaması doğrudur."
      ]
    },
    {
      q: "Buhar kazanları, kompresör hava tankları ve otoklavlar gibi 'Basınçlı Kapların' hidrostatik testlerinde (su basıncı testinde), standartlarda aksi belirtilmedikçe test basıncı işletme basıncının kaç katı uygulanır?",
      options: ["1 katı", "1,5 katı", "3 katı", "5 katı", "10 katı"],
      answer: 1,
      explanation: "İş Ekipmanları Yönetmeliği'ne göre basınçlı kaplarda hidrostatik test basıncı, işletme basıncının 1,5 katı olarak uygulanır ve periyodik kontrolü yılda 1 kez yapılır.",
      optionExplanations: [
        "1 katı normal çalışma (işletme) basıncıdır; emniyet katsayısını test etmek için yeterli değildir.",
        "DOĞRU: İş Ekipmanları Yönetmeliği uyarınca basınçlı kapların hidrostatik testleri işletme basıncının 1,5 katı su basıncıyla yapılır.",
        "3 katı basınç kabın akma sınırını aşarak kalıcı deformasyona uğramasına yol açabilir.",
        "5 katı tekstil sapanlar/sentetik halatlar gibi bazı kaldırma aksesuarlarının güvenlik katsayısıdır.",
        "10 katı basınçlı kap testlerinde uygulanmaz."
      ]
    },
    {
      q: "Aşağıdakilerden hangisi malzemelerin sertliğini ölçmek için kullanılan deney yöntemlerinden biridir?",
      options: [
        "Brinell, Vickers ve Rockwell sertlik ölçme yöntemleri",
        "Pitot tüpü yöntemi",
        "Odyometri yöntemi",
        "Anemometre yöntemi",
        "Lüksmetre yöntemi"
      ],
      answer: 0,
      explanation: "Metalik malzemelerin batmaya/çizilmeye karşı direnci olan sertlik; Brinell (HB), Vickers (HV) ve Rockwell (HRC/HRB) yöntemleriyle ölçülür.",
      optionExplanations: [
        "DOĞRU: Brinell (bilye uç), Vickers (elmas piramit uç) ve Rockwell (elmas koni/bilye uç) standart malzeme sertlik ölçüm yöntemleridir.",
        "Pitot tüpü akışkanların (hava/gaz/sıvı) akış hızını ve dinamik basıncını ölçer.",
        "Odyometri insanın işitme eşiklerini ölçen tıbbi testtir.",
        "Anemometre hava akım (rüzgar) hızını ölçen cihazdır.",
        "Lüksmetre aydınlatma şiddetini ölçen cihazdır."
      ]
    },
    {
      q: "Bir makine üzerinde bulunan 'Acil Durdurma Butonu' (Emergency Stop) hangi renk kombinasyonuna sahip olmalı ve nasıl çalışmalıdır?",
      options: [
        "Sarı zemin üzerine kırmızı mantar başlıklı olmalı; basıldığında kilitlenmeli ve kendiliğinden (çekilip/döndürülmeden) devreye girmemelidir",
        "Yeşil renkli ve düz olmalı",
        "Mavi zemin üzerine beyaz olmalı",
        "Sadece anahtarlı şalter olmalı",
        "Elimizi çektiğimiz anda makineyi tekrar otomatik çalıştırmalı"
      ],
      answer: 0,
      explanation: "Acil durdurma butonları sarı zemin üzerinde kırmızı mantar başlıklıdır. Basıldığında kilitli kalır; kurtarıldığında bile makineyi doğrudan başlatmaz.",
      optionExplanations: [
        "DOĞRU: EN ISO 13850 standardına göre sarı taban üzerinde kırmızı mantar başlıklı olmalı, basılınca kilitlenmeli ve resetlendiğinde makineyi kendiliğinden başlatmamalıdır.",
        "Yeşil renkli butonlar makineyi 'Başlatma (Start / On)' butonlarıdır.",
        "Mavi renk zorunlu eylem veya reset işlevleri için kullanılır, acil durdurma rengi değildir.",
        "Acil anda anahtar aramak zaman kaybettirir; avuç içiyle hızla vurulabilen mantar başlı buton olmalıdır.",
        "El çekildiğinde makinenin tekrar çalışması kazazedeyi yeniden tehlikeye sokar; mutlaka kilitli kalmalıdır."
      ]
    },
    {
      q: "Plastik şekil değiştirme (uzama) göstermeden aniden kırılan malzemelere (örneğin dökme demir, cam, seramik) ne ad verilir?",
      options: ["Sünek (Ductile) malzeme", "Gevrek (Brittle) malzeme", "Elastomer malzeme", "Polimer malzeme", "Yumuşak çelik"],
      answer: 1,
      explanation: "Plastik deformasyon (akma ve boyun verme) göstermeden aniden kırılan malzemelere 'Gevrek malzeme'; kırılmadan önce yüksek oranda uzama gösterenlere ise 'Sünek malzeme' denir.",
      optionExplanations: [
        "Sünek (Ductile) malzemeler (yumuşak çelik, bakır, alüminyum) kırılmadan önce belirgin plastik uzama ve boyun verme göstererek uyarı verir.",
        "DOĞRU: Elastik sınır aşıldığında plastik uzama göstermeden aniden kırılan malzemelere (dökme demir, cam, seramik, sertleştirilmiş çelik) 'Gevrek Malzeme' denir.",
        "Elastomer (kauçuk/lastik) çok yüksek elastik uzama gösteren polimer türüdür.",
        "Polimer plastik malzemelerin genel adıdır.",
        "Yumuşak (düşük karbonlu) çelik tipik bir sünek malzemedir."
      ]
    },
    {
      q: "Uluslararası Birim Sistemi'nde (SI) 7 temel birimden biri olan 'Termodinamik Sıcaklık' birimi aşağıdakilerden hangisidir?",
      options: ["Santigrat (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Joule (J)", "Kalori (cal)"],
      answer: 2,
      explanation: "SI uluslararası birim sisteminde temel sıcaklık birimi Santigrat (°C) değil, mutlak sıcaklık birimi olan 'Kelvin (K)'dir (T(K) = T(°C) + 273,15).",
      optionExplanations: [
        "Santigrat (°C) günlük hayatta ve mühendislikte yaygın kullanılır ancak SI sisteminin 7 temel biriminden biri Kelvin'dir.",
        "Fahrenheit (°F) Anglosakson (ABD) birim sisteminde kullanılan sıcaklık birimidir.",
        "DOĞRU: SI birim sisteminde 7 temel büyüklükten biri olan termodinamik sıcaklığın birimi 'Kelvin (K)'dir.",
        "Joule (J) ısı ve enerji birimidir, sıcaklık birimi değildir.",
        "Kalori (cal) SI dışı eski ısı enerjisi birimidir (1 cal ≈ 4,184 Joule)."
      ]
    },
    {
      q: "Bir malzemeye uygulanan çekme kuvveti kaldırıldığında, malzemenin kalıcı şekil değiştirmeye uğramadan ilk boyutlarına tamamen geri dönebildiği en yüksek gerilme sınırına (ve kalıcı uzamanın başladığı sınıra) ne ad verilir?",
      options: [
        "Elastik Sınır / Akma Dayanımı (Yield Strength - Re)",
        "Kopma Uzaması",
        "Sünme Sınırı",
        "Yorulma Sınırı",
        "Sertlik Değeri"
      ],
      answer: 0,
      explanation: "Hooke Kanunu'nun (σ = E . ε) geçerli olduğu elastik bölgenin bittiği ve kalıcı (plastik) şekil değiştirmenin başladığı gerilme değerine 'Akma Dayanımı (Akma Sınırı)' denir.",
      optionExplanations: [
        "DOĞRU: Elastik davranışın sona erip kalıcı (plastik) deformasyonun başladığı kritik gerilme noktasına 'Akma Dayanımı (Elastik Sınır)' denir.",
        "Kopma uzaması malzemenin kırıldığı andaki yüzde uzama oranıdır.",
        "Sünme sınırı yüksek sıcaklıkta zamana bağlı uzama direncidir.",
        "Yorulma sınırı tekrarlı yüklerde sonsuz çevrime dayanılan gerilmedir.",
        "Sertlik yüzeye batmaya karşı dirençtir."
      ]
    },
    {
      q: "Makine tasarımında bir parçanın emniyetle taşıyabileceği 'Emniyet Gerilmesi (σ_em)' hesaplanırken, malzemenin Akma (veya Kopma) Dayanımının hangi değere bölünmesi gerekir?",
      options: [
        "Emniyet Katsayısına (Güvenlik Katsayısı - S > 1)",
        "Sıfıra",
        "Ortam sıcaklığına",
        "Makinenin rengine",
        "Çalışma saatine"
      ],
      answer: 0,
      explanation: "Mühendislikte parçaların kırılmaması için Emniyet Gerilmesi = Akma Dayanımı / Emniyet Katsayısı (σ_em = σ_akma / S) formülüyle hesaplanır.",
      optionExplanations: [
        "DOĞRU: Malzemenin akma veya kopma sınırının 1'den büyük bir 'Emniyet Katsayısına (S)' bölünmesiyle güvenli çalışma gerilmesi bulunur.",
        "Bir sayının sıfıra bölünmesi tanımsızdır (sonsuz).",
        "Ortam sıcaklığı doğrudan bölünen bir katsayı değildir.",
        "Rengin mukavemet hesabıyla ilgisi yoktur.",
        "Çalışma saati yorulma çevrim sayısını etkiler, doğrudan statik emniyet gerilmesi böleni değildir."
      ]
    },
    {
      q: "Vinç, caraskal, forklift ve transpalet gibi 'Kaldırma ve İletme Ekipmanları'nın periyodik kontrollerinde uygulanan 'Statik Yük Testi' ve 'Dinamik Yük Testi' katsayıları standartlarda aksi belirtilmedikçe sırasıyla beyan yükünün kaç katıdır?",
      options: [
        "Statik test: 1,25 katı — Dinamik test: 1,1 katı",
        "Statik test: 1,5 katı — Dinamik test: 2 katı",
        "Statik test: 0,5 katı — Dinamik test: 0,8 katı",
        "Statik test: 3 katı — Dinamik test: 5 katı",
        "Statik test: 1 katı — Dinamik test: 1 katı"
      ],
      answer: 0,
      explanation: "İş Ekipmanları Yönetmeliği'ne göre kaldırma araçlarında genel kural olarak Statik test katsayısı 1,25 (insan gücüyle çalışanlarda 1,5), Dinamik test katsayısı ise 1,1'dir ve kontrol periyodu yılda 1 kezdir.",
      optionExplanations: [
        "DOĞRU: Kaldırma ve iletme ekipmanlarında beyan edilen maksimum yükün 1,25 katı ile Statik Test, 1,1 katı ile Dinamik Test yapılır (periyot: 1 yıl).",
        "1,5 katı basınçlı kapların hidrostatik test katsayısıdır.",
        "1'in altındaki katsayılar maksimum kapasiteyi test edemez.",
        "3 ve 5 katı yükler vincin şasisini ve bomunu kalıcı olarak eğer/devirir.",
        "Tam 1 katı normal işletme yüküdür, aşırı yük emniyetini doğrulamaz."
      ]
    },
    {
      q: "Oksijen tüpleri ve oksijen regülatörleri/valfleri ile çalışırken aşağıdaki maddelerden hangisiyle temas etmesi şiddetli patlama ve yangına yol açacağı için KESİNLİKLE YASAKTIR?",
      options: [
        "Yağ, gres yağı ve yağlı el/eldiven/üstübü",
        "Hava",
        "Kuru bez",
        "Sabunlu su (kaçak kontrolü için)",
        "Metal anahtar"
      ],
      answer: 0,
      explanation: "Yüksek basınçlı saf oksijen, hidrokarbon bazlı yağ ve gres ile temas ettiğinde kıvılcıma gerek kalmadan kendiliğinden şiddetle tutuşup patlar!",
      optionExplanations: [
        "DOĞRU: Basınçlı oksijen tüpü valflerine yağlı elle, yağlı eldivenle dokunmak veya gres sürmek ani oksidasyon patlamasına yol açar; kesinlikle yasaktır!",
        "Normal atmosfer havası zaten %21 oksijen içerir, patlama yapmaz.",
        "Temiz ve yağsız kuru bez tehlike oluşturmaz.",
        "Gaz kaçak kontrolü çakmakla değil, yağsız sabunlu su köpüğü ile yapılır.",
        "Uygun ağızlı anahtar valf bağlantısında kullanılır (ancak bakır/pirinç kıvılcım çıkarmayan aletler tercih edilir)."
      ]
    },
    {
      q: "Oksi-asetilen kaynak işlerinde kullanılan gaz tüplerinin standart dış gövde renk kodları (TS EN 1089-3) aşağıdakilerden hangisinde doğru verilmiştir?",
      options: [
        "Oksijen tüpü: Mavi — Asetilen tüpü: Sarı (veya kestane/bordo omuz)",
        "Oksijen tüpü: Kırmızı — Asetilen tüpü: Yeşil",
        "Oksijen tüpü: Siyah — Asetilen tüpü: Beyaz",
        "Her iki tüp de gri renklidir",
        "Oksijen tüpü: Sarı — Asetilen tüpü: Mavi"
      ],
      answer: 0,
      explanation: "Sanayide Oksijen tüpleri Mavi (omuz beyaz), yanıcı Asetilen tüpleri ise Sarı (omuz kestane/bordo), Argon tüpleri Açık Mavi/Koyu Yeşil, Azot tüpleri Yeşil/Siyah renktedir.",
      optionExplanations: [
        "DOĞRU: Oksijen tüpleri Mavi, Asetilen tüpleri ise Sarı (omuz kısmı kestane/bordo) renkle tanımlanır.",
        "Kırmızı renk yangın söndürme tüpleri ve hidrojen gibi yanıcı gaz omuzlarında kullanılır; oksijen yeşili tıbbi değil teknik kodda mavidir.",
        "Siyah omuz azot (nitrojen) tüplerinde kullanılır.",
        "Gri renk karbondioksit (CO2) gibi boğucu gaz omuzlarında kullanılır.",
        "Renkler ters verilmiştir; sarı asetilen, mavi oksijendir."
      ]
    },
    {
      q: "Oksi-gaz (oksi-asetilen) kaynak ve kesme sistemlerinde alevin hortum içinden geriye doğru yürüyerek tüpe ulaşmasını ve tüpün patlamasını önleyen zorunlu emniyet elemanı nedir?",
      options: [
        "Alev Geri Tepme Emniyet Valfi (Çekvalf + Alev Tutucu)",
        "Su sayacı",
        "Termometre",
        "Susturucu",
        "Tahliye musluğu"
      ],
      answer: 0,
      explanation: "Üfleçte ve regülatör çıkışında hem gazın geri kaçmasını hem de alevin tüpe yürümesini engelleyen 'Alev Geri Tepme Emniyet Valfi (Flashback Arrestor)' bulunması zorunludur.",
      optionExplanations: [
        "DOĞRU: Alev geri tepme emniyet valfi, geri tepen alevi sinterlenmiş metal filtreyle söndürür ve gaz akışını keserek tüp patlamasını önler.",
        "Su sayacı su debisi ölçer, gaz kaynak sisteminde bulunmaz.",
        "Termometre sıcaklık ölçer, alevi durduramaz.",
        "Susturucu pnömatik egzoz gürültüsünü azaltır.",
        "Tahliye musluğu sıvı kaplarında kullanılır."
      ]
    },
    {
      q: "Makine koruyucularının sahip olması gereken temel özellikler arasında aşağıdakilerden hangisi YER ALMAZ?",
      options: [
        "Tehlikeli bölgeye ulaşımı engellemeli ve kendi başına yeni bir tehlike (keskin kenar, kıstırma) oluşturmamalıdır",
        "Üretimi ve görüşü engellememeli, kolayca devre dışı bırakılamamalıdır (kilitli/ara kilitli olmalı)",
        "Fırlayabilecek parçalara ve darbelere karşı yeterli mekanik dayanıma sahip olmalıdır",
        "Operatörün işi hızlandırması için tek parmakla kolayca sökülüp iptal edilebilmelidir",
        "Bakım ve yağlama işlemlerine mümkün olduğunca koruyucuyu sökmeden izin vermelidir"
      ],
      answer: 3,
      explanation: "Makine Koruyucuları Yönetmeliği'ne göre koruyucular özel bir alet (anahtar) kullanılmadan kolayca sökülememeli ve kolayca devre dışı (köprüleme/iptal) bırakılamamalıdır.",
      optionExplanations: [
        "Koruyucu tehlikeli noktaya erişimi kesmeli ve kendisi kesici/batıcı ek tehlike yaratmamalıdır (doğru özelliktir).",
        "Üretimi zorlaştıran koruyucuyu işçi sökmeye çalışır; bu nedenle ergonomik olmalı ve kolayca iptal edilememelidir (doğru özelliktir).",
        "Kopan kayış veya fırlayan parçayı tutabilecek sağlamlıkta olmalıdır (doğru özelliktir).",
        "DOĞRU (YER ALMAZ): Makine koruyucuları el ile kolayca sökülüp iptal edilememeli; sabit koruyucular ancak özel aletle sökülebilmeli, hareketli koruyucular ise kilitlemeli (switch'li) olmalıdır!",
        "Koruyucu üzerinde güvenli yağlama kanalları bulunması ideal tasarımdır (doğru özelliktir)."
      ]
    },
    {
      q: "Malzemelerin içerisindeki gizli çatlakları, kaynak dikişi hatalarını veya döküm boşluklarını malzemeye hiçbir zarar vermeden tespit etmek için kullanılan yöntemlere genel olarak ne ad verilir?",
      options: [
        "Tahribatsız Muayene Yöntemleri (NDT: Ultrasonik, Radyografik, Manyetik Parçacık, Penetrant)",
        "Çekme deneyi (Parçayı koparana kadar çekme)",
        "Çentik darbe deneyi (Parçayı kırma)",
        "Eğme ve kırma deneyi",
        "Kimyasal eritme deneyi"
      ],
      answer: 0,
      explanation: "Parçaya zarar vermeden yapılan röntgen (radyografi), ultrasonik ses dalgası, sıvı penetrant ve manyetik parçacık testlerine 'Tahribatsız Muayene (Non-Destructive Testing - NDT)' denir.",
      optionExplanations: [
        "DOĞRU: İş parçasını bozmadan/kırmadan iç ve yüzey kusurlarını bulan yöntemlere Tahribatsız Muayene (NDT) denir.",
        "Çekme deneyi numuneyi koparana kadar yüklediği için 'Tahribatlı Muayene' yöntemidir.",
        "Çentik darbe deneyi (Charpy) numuneyi çekiçle kırdığı için 'Tahribatlı Muayene'dir.",
        "Eğme-kırma deneyi malzemeyi deforme ettiği için tahribatlıdır.",
        "Kimyasal eritme malzemeyi yok eder."
      ]
    },
    {
      q: "Bir kuvvetin (Newton) bir cisme uygulanarak cismi kendi doğrultusunda belirli bir yol (metre) boyunca hareket ettirmesiyle ortaya çıkan büyüklüğe (W = F . x) ve birim zamanda yapılan işe (P = W / t) sırasıyla ne ad verilir?",
      options: [
        "İş / Enerji (Joule = N.m) — Güç (Watt = Joule/saniye)",
        "Basınç (Pascal) — Hız (m/s)",
        "İvme (m/s²) — Kütle (kg)",
        "Frekans (Hertz) — Direnç (Ohm)",
        "Debi (m³/s) — Yoğunluk (kg/m³)"
      ],
      answer: 0,
      explanation: "Kuvvet x Yol = İş/Enerji (birimi Joule = N.m); Birim zamanda yapılan iş (İş / Zaman) ise Güçtür (birimi Watt = J/s).",
      optionExplanations: [
        "DOĞRU: W = F . x bağıntısı İŞ ve ENERJİyi verir (1 Joule = 1 N.m); P = W / t ise GÜCÜ verir (1 Watt = 1 Joule / s).",
        "Basınç Kuvvet / Alan (N/m² = Pa), Hız ise Yol / Zaman (m/s) büyüklüğüdür.",
        "İvme hız değişimi (m/s²), kütle ise madde miktarıdır (kg).",
        "Frekans saniyedeki titreşim sayısı (Hz), direnç ise elektrik akımına zorluktur (Ohm).",
        "Debi birim zamandaki akışkan hacmi, yoğunluk ise birim hacimdeki kütledir."
      ]
    }
  ],
  fillQuestions: [
    {
      q: "Herhangi bir enerji türünü başka bir enerjiye dönüştürerek belirli bir iş yapan mekanik düzeneklere ________ denir.",
      answers: ["makine", "makina"],
      hint: "İbrahim Hoca'nın 1. temel tanımı",
      explanation: "Enerjiyi başka bir enerjiye dönüştürerek kuvvet uygulayan ve iş yapan düzeneklere Makine denir."
    },
    {
      q: "Malzemeyi çeviren, ileten, biriktiren ve depolayan boru hattı, tank gibi sistemlere ________ (veya tesisat) denir.",
      answers: ["teçhizat", "techizat"],
      hint: "İbrahim Hoca'nın 2. temel tanımı",
      explanation: "Malzemeyi ileten, biriktiren ve depolayan sistemler Teçhizat olarak tanımlanır."
    },
    {
      q: "İnsanların bilgi ve sezgilerini artıran kontrol, ölçme ve muayene düzeneklerine ________ denir.",
      answers: ["cihaz", "aygıt", "aygit"],
      hint: "İbrahim Hoca'nın 3. temel tanımı",
      explanation: "Ölçme, kontrol ve muayene amacıyla insan duyularını/bilgisini artıran düzeneklere Cihaz denir."
    },
    {
      q: "Isı, elektrik veya hidrolik enerjiyi mekanik enerjiye çeviren makinelere ________ denir.",
      answers: ["motor"],
      hint: "İş makinesine mekanik enerji veren sistem",
      explanation: "Çeşitli enerji türlerini mekanik enerjiye çeviren kuvvet makinelerine Motor denir."
    },
    {
      q: "Taşlama tezgahlarında iş parçası dayama mesnedi ile zımpara taşı arasındaki açıklık en fazla ________ mm olmalıdır.",
      answers: ["3", "üç", "uc"],
      hint: "13 Ekim dersinde vurgulanan mesnet mesafesi (mm)",
      explanation: "Parçanın taş ile mesnet arasına sıkışıp taşı patlatmaması için açıklık azami 3 mm olmalıdır."
    },
    {
      q: "Malzemelerin tekrarlı ve değişken yükler altında akma sınırının altındaki gerilmelerde dahi zamanla çatlayıp kırılmasına ________ (fatigue) denir.",
      answers: ["yorulma"],
      hint: "Tekrarlı yük kırılması",
      explanation: "Dinamik/tekrarlı yükler altında oluşan çatlama ve kırılma olayına Yorulma (Fatigue) denir."
    },
    {
      q: "Torna ve matkap gibi döner tezgahlarda elin kapılma/sarılma tehlikesi nedeniyle ________ giyilmesi kesinlikle yasaktır.",
      answers: ["eldiven"],
      hint: "Ele takılan ve döner aksamda yasak olan KKD",
      explanation: "Döner milli tezgahlarda eldiven lifleri parçaya sarılarak uzuv kopmasına yol açtığı için eldiven kullanımı yasaktır."
    },
    {
      q: "SI birim sisteminde birim yüzeye dik etkiyen kuvvetin (N/m²) yani basıncın birimi ________'dır.",
      answers: ["Pascal", "pascal", "Pa"],
      hint: "1 N/m² karşılığı birim",
      explanation: "SI sisteminde basınç ve mekanik gerilme birimi Pascal (Pa = N/m²)'dır."
    },
    {
      q: "Basınçlı kapların hidrostatik testlerinde test basıncı, aksi belirtilmedikçe işletme basıncının ________ katı olarak uygulanır.",
      answers: ["1,5", "1.5", "bir buçuk"],
      hint: "Standart hidrostatik test katsayısı",
      explanation: "Basınçlı kaplarda hidrostatik test basıncı işletme basıncının 1,5 katıdır."
    },
    {
      q: "Kalıcı plastik şekil değiştirme göstermeden aniden kırılan malzemelere (cam, dökme demir vb.) ________ malzeme denir.",
      answers: ["gevrek"],
      hint: "Sünek malzemenin zıttı",
      explanation: "Plastik uzama göstermeden aniden kırılan malzemelere Gevrek malzeme denir."
    },
    {
      q: "Malzemelerin yüksek sıcaklık ve sabit yük altında zamanla yavaş yavaş kalıcı olarak uzaması olayına ________ (creep) denir.",
      answers: ["sünme", "sunme"],
      hint: "Yüksek sıcaklıkta zamana bağlı uzama",
      explanation: "Sabit yük ve yüksek sıcaklık altında zamanla oluşan kalıcı deformasyona Sünme (Creep) denir."
    },
    {
      q: "SI birim sisteminde birim zamanda yapılan işin (Joule / saniye) yani Gücün birimi ________'tır.",
      answers: ["Watt", "watt", "W"],
      hint: "J/s karşılığı güç birimi",
      explanation: "Birim zamanda yapılan iş güçtür ve SI birimi Watt (1 W = 1 J/s)'tır."
    },
    {
      q: "Oksijen tüplerinin valf ve regülatörlerine kendiliğinden patlama riski nedeniyle kesinlikle ________ (veya gres) sürülmemelidir.",
      answers: ["yağ", "yag", "gres"],
      hint: "Oksijenle temas ettiğinde patlayan madde",
      explanation: "Basınçlı saf oksijen yağ ve gres ile temas ettiğinde şiddetli patlama meydana gelir."
    },
    {
      q: "Oksi-asetilen kaynak sistemlerinde alevin hortumdan tüpe yürümesini önlemek için alev ________ tepme emniyet valfi kullanılır.",
      answers: ["geri"],
      hint: "Alevin ters yönde yürümesini ifade eden kelime",
      explanation: "Tüp patlamalarını önlemek için üfleç ve regülatörde Alev Geri Tepme Emniyet Valfi kullanılır."
    },
    {
      q: "Kaldırma ve iletme ekipmanlarının (vinç, forklift vb.) periyodik kontrollerinde statik yük testi katsayısı genel kural olarak beyan yükünün ________ katıdır.",
      answers: ["1,25", "1.25"],
      hint: "Dinamik testte 1,1 olan katsayının statik testteki karşılığı",
      explanation: "Kaldırma ekipmanlarında statik yük testi beyan yükünün 1,25 katı, dinamik test ise 1,1 katı ile yapılır."
    }
  ]
};
