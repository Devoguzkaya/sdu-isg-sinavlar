export const elektrikTestThemes = [
  "Akımın İnsan Vücuduna Etkileri & mA Eşikleri",
  "Ohm Kanunu, Vücut Direnci & Çarpılma Vakaları",
  "5 Temel Güvenlik Kuralı & LOTO (EKED) Uygulamaları",
  "Kaçak Akım Rölesi (30/300 mA) & Koruma Elemanları",
  "Doğrudan / Dolaylı Dokunma & Topraklama Sistemleri",
  "Yüksek Gerilim, Adım ve Dokunma Gerilimi",
  "Ark Patlaması (Arc Flash) & Statik Elektrik",
  "Elektrik Yangınları & Şantiye Pano Güvenliği",
  "İzole KKD, El Aletleri & Periyodik Kontroller",
  "Genel Karma Vize Simülasyonu (OSHA / NIOSH Vakaları)"
];

export const elektrikConceptGroups = [
  {
    groupName: "Akım Eşikleri ve Fizyolojik Etkiler",
    items: [
      {
        opt: "0,5 - 1 mA (Algılama Eşiği)",
        desc: "Alternatif akımda parmak ucunda veya dilde çok hafif karıncalanma olarak hissedilen ilk algılama eşiğidir.",
        q: "50 Hz alternatif akımda insan vücudunda elektrik akımının ilk kez hafif bir karıncalanma şeklinde hissedildiği 'Algılama Eşiği' hangi aralıktadır?"
      },
      {
        opt: "1 - 5 mA (İrkilme ve Uyuşma Eşiği)",
        desc: "Kas kontrolünün kaybolmadığı, kişinin elini rahatça çekebildiği ancak hafif kramp ve irkilme yaratan akım aralığıdır.",
        q: "Elektrik akımına temas eden bir kişide kasların henüz kilitlenmediği ve elini kendi iradesiyle çekebildiği, ancak refleks olarak sıçrama/irkilme yaşadığı akım aralığı hangisidir?"
      },
      {
        opt: "10 - 15 mA (Tutma / Bırakamama Eşiği)",
        desc: "Kol ve el kaslarında istemsiz tetanik kasılma başlatarak kişinin enerjili iletkeni avucundan bırakamadığı kritik eşiktir.",
        q: "Elektrik kazalarında kişinin 'elektriğe yapışıp kalmasına' yol açan, ön kol kaslarının istemsiz kasılmasıyla iletkenin elden bırakılamadığı eşik hangisidir?"
      },
      {
        opt: "20 - 30 mA (Solunum Kasları Felci Eşiği)",
        desc: "Kasılmanın göğüs kafesi ve diyafram kaslarına yayılarak nefes almayı durdurduğu (asfiksi) ve hayat koruma rölesinin (30 mA) üst sınırını oluşturan değerdir.",
        q: "Akımın göğüs kafesi ve diyafram kaslarını kasarak solunum felcine yol açtığı ve hayat koruma kaçak akım rölesinin açma sınırına karşılık gelen değer hangisidir?"
      },
      {
        opt: "50 - 100 mA (Ventriküler Fibrilasyon Eşiği)",
        desc: "Kalbin elektriksel iletim sisteminin bozularak kalp kaslarının düzensiz titreşmeye başladığı ve kan pompalayamadığı ölümcül eşiktir.",
        q: "Elektrik çarpmalarında kalp kaslarının senkronize kasılmasını bozarak 'Ventriküler Fibrilasyon' başlatan ölümcül akım eşiği aşağıdakilerden hangisidir?"
      },
      {
        opt: "1000 mA (1 A) ve üzeri (Kardiyak Arrest & Ağır Yanık)",
        desc: "Kalp kasının tamamen kasıldığı, sinir merkezlerinin tahrip olduğu ve iç organlar ile deride derin joule yanıklarının oluştuğu çok yüksek akım değeridir.",
        q: "Vücuttan geçen akımın 1 Amper (1000 mA) ve üzerine çıkması durumunda ortaya çıkan en belirgin patolojik tablo hangisidir?"
      },
      {
        opt: "Doğru Akımda (DC) 60 - 70 mA Tutma Eşiği",
        desc: "Doğru akımda yön değişimi olmadığı için tutma (bırakamama) eşiği AC'ye göre yaklaşık 4-5 kat daha yüksek olup 60-70 mA seviyesindedir.",
        q: "Doğru akım (DC) kaynaklarında alternatif akıma göre kas kilitlenmesi daha yüksek akımlarda görülür; DC için tutma eşiği yaklaşık hangi seviyededir?"
      },
      {
        opt: "Kalp Faktörü (Sol El - İki Ayak = 1,0)",
        desc: "Akımın vücuda giriş ve çıkış noktalarına göre kalpten geçen bağıl akım oranını ifade eder; sol elden girip ayaklardan çıkan yolda referans 1,0 kabul edilir.",
        q: "IEC standartlarına göre akımın vücutta izlediği yola bağlı olarak kalp üzerinden geçen tehlike katsayısını tanımlayan ve sol el-ayak yolunda 1,0 alınan parametre nedir?"
      },
      {
        opt: "Joule Isısı (Q = I² . R . t)",
        desc: "Elektrik akımının vücut direnci üzerinden geçerken oluşturduğu termal yanık enerjisini ifade eden fiziksel bağıntıdır.",
        q: "Elektrik çarpmalarında özellikle akımın giriş ve çıkış noktalarında oluşan derin doku ve kemik yanıklarının şiddetini belirleyen fiziksel yasa hangisidir?"
      },
      {
        opt: "Elektroliz Etkisi (Doğru Akım - DC)",
        desc: "Doğru akımın kan plazması ve hücre sıvılarındaki iyonları kutuplara ayrıştırarak kimyasal doku bozulması ve gaz embolisi yapmasıdır.",
        q: "Doğru akımın (DC) insan vücudundan uzun süreli geçişinde kan ve hücre sıvılarında iyon ayrışmasına yol açarak oluşturduğu kimyasal etki nedir?"
      }
    ]
  },
  {
    groupName: "Gerilim Sınıfları, Direnç ve Ohm Kanunu",
    items: [
      {
        opt: "50 V AC (Alternatif Akım Tehlikeli Gerilim Sınırı)",
        desc: "Normal kuru ortamlarda alternatif akımda insan vücudu için kabul edilen güvenli dokunma gerilimi üst sınırıdır (tehlikeli gerilim başlangıcıdır).",
        q: "İSG mevzuatı ve standartlarına göre normal kuru çalışma ortamlarında alternatif akım (AC) için 'Tehlikeli Gerilim Sınırı' kaç Volt kabul edilir?"
      },
      {
        opt: "120 V DC (Doğru Akım Tehlikeli Gerilim Sınırı)",
        desc: "Doğru akımda (DC) dalgalanmasız gerilim için insan vücudunda kabul edilen güvenli dokunma gerilimi üst sınırıdır.",
        q: "Doğru akım (DC) sistemlerinde insan sağlığı açısından kabul edilen güvenli dokunma gerilimi üst sınırı (tehlikeli gerilim sınırı) kaç Volttur?"
      },
      {
        opt: "24 V (Kazan İçi / Dar İletken Ortam Güvenlik Gerilimi)",
        desc: "Metal tank, kazan içi ve ıslak dar hacimlerde taşınabilir el lambaları ve aletlerde kullanılan çok düşük güvenlik gerilimidir (SELV).",
        q: "Buhar kazanı içi veya metal tank gibi dar ve iletken yerlerde kullanılan seyyar aydınlatma lambalarında uygulanması gereken güvenlik gerilimi nedir?"
      },
      {
        opt: "42 V (Çok Düşük Güvenlik Gerilimi Üst Sınırı)",
        desc: "Yalıtım transformatörü (güvenlik trafosu) üzerinden beslenen küçük gerilimli el aletlerinde izin verilen üst güvenlik gerilimidir.",
        q: "Güvenlik transformatörü kullanılarak elde edilen 'Küçük Gerilim (Çok Düşük Güvenlik Gerilimi)' uygulamalarında standart üst sınır kaç Volttur?"
      },
      {
        opt: "230 V (Şebeke Faz - Nötr Alçak Gerilimi)",
        desc: "Türkiye'de ev ve ofis prizlerinde bulunan tek fazlı (bir faz ile nötr arası) standart alçak gerilim etkin değeridir.",
        q: "Türkiye elektrik dağıtım şebekesinde tek fazlı prizlerde (Faz - Nötr arasında) bulunan standart alternatif gerilim değeri nedir?"
      },
      {
        opt: "400 V / 380 V (Şebeke Faz - Faz Sanayi Gerilimi)",
        desc: "Üç fazlı (trifaze) sanayi şebekesinde iki faz iletkeni arasındaki (hat gerilimi) standart alçak gerilim değeridir.",
        q: "Sanayi tesislerinde üç fazlı (trifaze) motor ve makineleri besleyen şebekede iki faz iletkeni arasındaki (Faz - Faz) gerilim değeri nedir?"
      },
      {
        opt: "1000 V AC / 1500 V DC (Alçak Gerilim - Yüksek Gerilim Sınırı)",
        desc: "Etkin değeri bu sınırda ve altında olanlar Alçak Gerilim (AG), üzerinde olanlar ise Yüksek Gerilim (YG) olarak tanımlanır.",
        q: "Elektrik Kuvvetli Akım Tesisleri Yönetmeliği'ne göre Alçak Gerilim (AG) ile Yüksek Gerilim (YG) arasındaki sınır değer AC ve DC'de nedir?"
      },
      {
        opt: "500 - 1000 Ohm (İnsan Vücudu İç Direnci / Islak Deri Direnci)",
        desc: "Derinin ıslak, terli veya yüksek voltajla delinmiş olduğu durumda kan ve iç dokuların gösterdiği minimum toplam vücut direncidir.",
        q: "Derinin koruyucu dış tabakasının ıslaklık veya yüksek gerilim nedeniyle devre dışı kaldığı durumda insan vücudunun iç direnci yaklaşık kaç Ohm mertebesindedir?"
      },
      {
        opt: "50.000 - 100.000 Ohm (Kuru ve Nasırlı Dış Deri Direnci)",
        desc: "Tamamen kuru, sağlam ve kalın/nasırlı üst deri (epidermis) tabakasının düşük gerilim altında gösterdiği yüksek yalıtım direncidir.",
        q: "Tamamen kuru ve çatlağı olmayan nasırlı bir el derisinin düşük gerilim altında gösterdiği başlangıç temas direnci hangi mertebededir?"
      },
      {
        opt: "34,5 kV (34.500 V) Orta/Yüksek Gerilim Dağıtım Şebekesi",
        desc: "Türkiye'de şehirler içi ve organize sanayi bölgelerinde trafo merkezlerine enerji taşıyan en yaygın yüksek (orta) gerilim seviyesidir.",
        q: "Türkiye'de sanayi tesislerindeki özel trafolara ve şehir içi dağıtım trafolarına enerji getiren en yaygın Yüksek (Orta) Gerilim seviyesi hangisidir?"
      }
    ]
  },
  {
    groupName: "5 Temel Güvenlik Kuralı, LOTO ve Koruma Yöntemleri",
    items: [
      {
        opt: "1. Kural: Gerilimi Her Yönden Kesmek",
        desc: "Çalışılacak tesisat bölümünü besleyen tüm faz ve nötr kaynaklarının (şebeke, jeneratör, UPS, kompanzasyon) görünür şekilde ayrılmasıdır.",
        q: "Elektrik tesislerinde gerilimsiz çalışmaya başlarken uygulanan '5 Temel Güvenlik Kuralı'nın BİRİNCİ adımı aşağıdakilerden hangisidir?"
      },
      {
        opt: "2. Kural: Tekrar Gerilim Verilmesini Önlemek (LOTO / EKED)",
        desc: "Açılan şalter ve ayırıcıların kişisel asma kilitlerle kilitlenmesi ve üzerine 'Çalışma Var, Enerjiyi Açma' uyarı etiketi asılmasıdır.",
        q: "Gerilimsiz çalışmada 5 Temel Güvenlik Kuralı'nın İKİNCİ adımı olan ve habersiz enerjilenmeyi fiziksel olarak engelleyen uygulama hangisidir?"
      },
      {
        opt: "3. Kural: Gerilimsizliği Kontrol Etmek",
        desc: "Çalışılacak iletkenlerde enerji kalmadığının kalibrasyonlu çift kutuplu gerilim dedektörü veya ölçü aleti ile doğrulanmasıdır.",
        q: "Enerji kesilip şalter kilitlendikten sonra 5 Temel Güvenlik Kuralı'nın ÜÇÜNCÜ adımı olarak sahada mutlaka yapılması gereken işlem nedir?"
      },
      {
        opt: "4. Kural: Topraklama ve Kısa Devre Yapmak",
        desc: "Kapasitif yükleri boşaltmak ve indüksiyon/ters besleme riskine karşı önce topraklama ucu toprağa, sonra faz uçları iletkenlere bağlanarak yapılan korumadır.",
        q: "Gerilimsizlik doğrulandıktan sonra kapasitif kalıntı yükleri boşaltmak ve ters beslemeye karşı çalışanı korumak için uygulanan DÖRDÜNCÜ kural nedir?"
      },
      {
        opt: "5. Kural: Çalışma Alanını Sınırlamak ve Gerilimli Bölümleri İzole Etmek",
        desc: "Komşu enerjili hücre ve baraların yalıtkan paravanlarla örtülmesi ve çalışma sahasının şerit/levhalarla güvenlik altına alınmasıdır.",
        q: "5 Temel Güvenlik Kuralı'nın BEŞİNCİ (son) adımı olarak çalışma bölgesinin çevresindeki enerjili kısımlara karşı alınan önlem nedir?"
      },
      {
        opt: "Çoklu Kilitleme Çoklayıcısı (LOTO Hasp / Kilit Kıskacı)",
        desc: "Aynı makine veya panoda birden fazla teknisyen çalışırken her çalışanın kendi kişisel asma kilidini aynı şaltere takabilmesini sağlayan aparatır.",
        q: "Bir elektrik panosunda aynı anda 4 farklı bakım personeli çalışırken şalterin son kişi işini bitirmeden açılmasını önleyen çok delikli LOTO aparatı nedir?"
      },
      {
        opt: "Koruma Topraklaması",
        desc: "Normalde gerilim altında olmayan metal gövdelerin (makine şasisi, pano gövdesi) dolaylı dokunmaya karşı toprakla irtibatlandırılmasıdır.",
        q: "Yalıtım hatası sonucu makine veya pano metal gövdesine faz teması olduğunda çalışanı dolaylı dokunmaya karşı koruyan topraklama türü hangisidir?"
      },
      {
        opt: "İşletme Topraklaması",
        desc: "Trafo yıldız (nötr) noktasının şebekenin düzgün çalışması için doğrudan veya empedans üzerinden toprağa bağlanmasıdır.",
        q: "Güç transformatörlerinin yıldız (nötr) noktasının elektrik şebekesinin kararlı çalışması amacıyla toprağa bağlanmasına ne ad verilir?"
      },
      {
        opt: "Fonksiyon (Koruma + İşletme / Yıldırım) Topraklaması",
        desc: "İletişim tesisleri, otomasyon sistemleri ve paratonerlerin beklenen işlevi güvenli yerine getirmesi için yapılan özel topraklamadır.",
        q: "Zayıf akım, haberleşme, PLC otomasyon sistemleri veya yıldırımdan korunma tesislerinin işlevini yerine getirmesi için yapılan topraklama türü nedir?"
      },
      {
        opt: "Eşpotansiyel Kuşaklama (Potansiyel Dengeleme)",
        desc: "Bina içindeki tüm metal boruların (su, doğalgaz, kalorifer), çelik konstrüksiyonun ve topraklama barasının birbirine bağlanarak aralarındaki gerilim farkının sıfırlanmasıdır.",
        q: "Bir tesis içindeki tüm metal tesisat boruları, yapı çelikleri ve koruma iletkenlerinin ana topraklama barasında birleştirilerek gerilim farklarının yok edilmesine ne denir?"
      }
    ]
  },
  {
    groupName: "Topraklama Şebeke Tipleri (TN, TT, IT) ve Ekipman Güvenliği",
    items: [
      {
        opt: "TT Şebeke Sistemi",
        desc: "Trafo nötr noktasının doğrudan topraklandığı, cihazların metal gövdelerinin ise işletme topraklamasından bağımsız ayrı bir yerel topraklayıcıya bağlandığı sistemdir.",
        q: "Ev ve işyerlerinde yaygın kullanılan; trafo nötrünün topraklandığı ve tüketici cihaz gövdelerinin ayrı bir koruma topraklamasına bağlandığı şebeke tipi hangisidir?"
      },
      {
        opt: "TN-S Şebeke Sistemi",
        desc: "Şebeke boyunca Nötr (N) ve Koruma (PE) iletkenlerinin birbirinden tamamen ayrı iki iletken olarak çekildiği en güvenli TN sistemidir.",
        q: "Trafo merkezinden itibaren Nötr (N) iletkeni ile Koruma (PE) topraklama iletkeninin tüm tesisat boyunca ayrı ayrı çekildiği güvenli şebeke sistemi hangisidir?"
      },
      {
        opt: "TN-C Şebeke Sistemi (Klasik Sıfırlama)",
        desc: "Nötr ve koruma iletkeninin PEN adı altında tek bir iletkende birleştirildiği; PEN koparsa cihaz gövdelerine 230 V faz binmesi riski taşıyan sistemdir.",
        q: "Nötr ve koruma fonksiyonlarının tek bir iletkende (PEN) birleştirildiği ve hat kopmasında tüm metal gövdelerin enerjilenmesi tehlikesi taşıyan sistem hangisidir?"
      },
      {
        opt: "IT Şebeke Sistemi (İzole Nötr / Hastane Ameliyathane Sistemi)",
        desc: "Trafo yıldız noktasının topraktan yalıtıldığı (izole edildiği), ilk faz-gövde hatasında enerjinin kesilmeyip izolasyon izleme cihazının alarm verdiği kesintisiz sistemdir.",
        q: "Hastane ameliyathaneleri, yoğun bakım üniteleri ve maden ocakları gibi ilk yalıtım hatasında elektriğin kesilmemesi gereken hayati yerlerde kullanılan şebeke tipi hangisidir?"
      },
      {
        opt: "Çift Yalıtımlı (Sınıf II - İç İçe İki Kare Sembollü) Cihaz",
        desc: "Temel yalıtıma ek olarak takviyeli dış yalıtıma sahip olan ve koruma topraklaması (topraklı fiş) gerektirmeyen elektrikli el aleti sınıfıdır.",
        q: "Üzerinde 'iç içe geçmiş iki kare' sembolü bulunan ve güvenli yapısı nedeniyle topraklama iletkenine bağlanması gerekmeyen el aleti sınıfı hangisidir?"
      },
      {
        opt: "IP2X Koruma Derecesi (Parmak Temasına Karşı Koruma)",
        desc: "Elektrik panolarında 12,5 mm çapındaki parmak veya benzeri cisimlerin enerjili baralara temas etmesini engelleyen asgari muhafaza koruma sınıfıdır.",
        q: "Alçak gerilim elektrik panolarında enerjili aktif bölümlere insan parmağının (>12,5 mm) girmesini önleyen uluslararası muhafaza koruma kodu nedir?"
      },
      {
        opt: "Sarı - Yeşil Çizgili İletken (PE Koruma Topraklama İletkeni)",
        desc: "Uluslararası standartlara göre yalnızca koruma topraklaması (PE) hattında kullanılması zorunlu olan ve başka amaçla kullanılamayan kablo rengidir.",
        q: "Elektrik İç Tesisleri Yönetmeliği'ne göre koruma topraklaması (PE) iletkeninin yalıtkan dış kılıf rengi standart olarak ne olmalıdır?"
      },
      {
        opt: "Açık Mavi İletken (Nötr - N İletkeni)",
        desc: "Elektrik tesisatlarında nötr (N) hattını göstermek için kullanılan standart kablo yalıtım rengidir.",
        q: "Elektrik panolarında ve bina içi tesisatlarda 'Nötr (N)' iletkenini tanımlamak için kullanılan standart kablo rengi aşağıdakilerden hangisidir?"
      },
      {
        opt: "Meger (Toprak Megeri / Topraklama Direnci Ölçüm Cihazı)",
        desc: "Topraklama tesisatının yayılma direncini (Ohm) ve kabloların izolasyon (yalıtkanlık) direncini (MegaOhm) ölçmek için kullanılan özel test cihazıdır.",
        q: "Elektrik tesislerinde yıllık periyodik kontrollerde topraklama geçiş direncini ve kablo yalıtkanlık direncini ölçmek için kullanılan cihazın adı nedir?"
      },
      {
        opt: "Faraday Kafesi ve Paratoner (Yıldırımdan Korunma)",
        desc: "Binaları ve patlayıcı tesisleri doğrudan yıldırım düşmesine karşı koruyarak yıldırım akımını bina dışından toprağa güvenle aktaran dış yıldırımdan korunma sistemidir.",
        q: "Yapıları ve yanıcı/patlayıcı madde depolarını yıldırım deşarjına karşı çatıdaki yakalama uçları, iniş iletkenleri ve topraklama ağıyla koruyan kafes sistemine ne denir?"
      }
    ]
  },
  {
    groupName: "Yüksek Gerilim, Ark Patlaması, KKD ve İlk Yardım",
    items: [
      {
        opt: "Dokunma Gerilimi",
        desc: "Yalıtım hatası bulunan bir makine gövdesine veya direğe elle dokunan kişinin eli ile bastığı zemin (ayakları) arasında oluşan gerilim farkıdır.",
        q: "Arızalı bir elektrik direğine veya makine gövdesine eliyle temas eden çalışanın eli ile ayakları arasında oluşan potansiyel farkına ne ad verilir?"
      },
      {
        opt: "İndüksiyon Gerilimi (Elektromanyetik Endüklenme)",
        desc: "Enerjisi kesilmiş bir yüksek gerilim hattında, yanındaki paralel enerjili hattan kaynaklanan manyetik alan nedeniyle oluşan tehlikeli gerilimdir.",
        q: "Şalteri kapatılarak enerjisi kesilmiş bir enerji nakil hattında, yakınından geçen başka bir enerjili hattın manyetik alanı sebebiyle oluşan tehlikeli gerilim nedir?"
      },
      {
        opt: "Kapasitif Boşalma (Artık Yük Deşarjı)",
        desc: "Enerjisi kesilen kompanzasyon kondansatörleri ve uzun yeraltı yüksek gerilim kablolarının içinde depolanmış kalan elektrik yükünün dokunan kişiye boşalmasıdır.",
        q: "Enerji tamamen kesildiği halde kompanzasyon panolarındaki kondansatörlerde veya uzun yeraltı kablolarında birikmiş kalarak çarpılmaya yol açan tehlike nedir?"
      },
      {
        opt: "Ark Koruyucu Termal Kıyafet (cal/cm² ATPV Değerli Elbise)",
        desc: "Ark patlaması (Arc Flash) sırasında ortaya çıkan yüksek termal ısı enerjisine (cal/cm²) karşı çalışanı yanıklardan koruyan alev almaz özel KKD'dir.",
        q: "Yüksek enerjili elektrik panolarında manevra yaparken olası bir 'Ark Patlaması (Arc Flash)' ısısına karşı giyilen ve koruma düzeyi cal/cm² ile ölçülen KKD nedir?"
      },
      {
        opt: "Dielektrik İzole Eldiven (EN 60903 - Sınıflandırılmış)",
        desc: "Üzerinde Sınıf 00 (500 V)'dan Sınıf 4 (36.000 V)'e kadar dayanım gerilimi yazılı olan ve her kullanım öncesi şişirilerek hava kaçağı kontrol edilen yalıtkan eldivendir.",
        q: "Elektrik işlerinde kullanılan, gerilim seviyesine göre Sınıf 00'dan Sınıf 4'e kadar ayrılan ve kullanmadan önce delik kontrolü yapılması zorunlu olan KKD nedir?"
      },
      {
        opt: "Yüksek Gerilim İzole Manevra Istakası (Stanga)",
        desc: "Yüksek gerilim hücrelerinde ayırıcı açma-kapama, sigorta değiştirme ve topraklama takma işlemlerini güvenli mesafeden yapmayı sağlayan fiberglas yalıtkan çubuktur.",
        q: "Yüksek gerilim (YG) trafo merkezlerinde enerjili veya yakın bölümlerde uzaktan güvenli manevra ve kontrol yapmayı sağlayan yalıtkan çubuğa ne ad verilir?"
      },
      {
        opt: "Ayırıcı (Seksiyoner) — Yüksüz Devre Açma Elemanı",
        desc: "Devreyi gözle görünür şekilde ayıran ancak ark söndürme hücresi olmadığı için KESİNLİKLE YÜK ALTINDA AÇILMAMASI gereken yüksek gerilim elemanıdır.",
        q: "Yüksek gerilim tesislerinde devrenin açık olduğunu gözle görmeye yarayan, ancak önce kesici (disjonktör) açılmadan yük altında açılırsa büyük ark patlaması yapan eleman nedir?"
      },
      {
        opt: "Kesici (Disjonktör) — Yük ve Kısa Devre Açma Elemanı",
        desc: "Yüksek gerilim devrelerini hem normal yük altında hem de kısa devre arızası anında arkı söndürerek güvenle açıp kapatabilen devre elemanıdır.",
        q: "Yüksek gerilim trafo merkezlerinde devreyi yük altında ve kısa devre anında oluşan arkı özel hücrede (SF6 gazlı, vakumlu vb.) söndürerek kesen eleman nedir?"
      },
      {
        opt: "Otomatik Eksternal Defibrilatör (OED / Şok Cihazı)",
        desc: "Elektrik çarpması sonucu kalpte gelişen ventriküler fibrilasyonu kontrollü elektrik şoku vererek normal sinüs ritmine döndüren ilk yardım cihazıdır.",
        q: "Elektrik çarpmasına bağlı gelişen ölümcül 'Ventriküler Fibrilasyon' tablosunu geri döndürmek için temel yaşam desteğinde kullanılan elektro-şok cihazı nedir?"
      },
      {
        opt: "Ex-Proof (Patlamaya Karşı Korumalı - ATEX) Elektrik Ekipmanı",
        desc: "Metan, solvent buharı, akaryakıt veya yanıcı toz bulunan patlayıcı ortamlarda kıvılcım ve yüzey sıcaklığını sızdırmayacak şekilde üretilmiş özel elektrik tesisatıdır.",
        q: "Boyahane, akaryakıt tesisi veya kömür madeni gibi patlayıcı gaz/toz bulunan ortamlarda ark ve kıvılcımın dışarı sızmasını önleyen özel elektrik ekipmanı hangisidir?"
      }
    ]
  },
  {
    groupName: "Saha Uygulamaları, Şantiye ve Bakım Güvenliği",
    items: [
      {
        opt: "Kablo Köprüsü ve Havadan Askıya Alma",
        desc: "Şantiye sahasında seyyar kabloların iş makineleri altında ezilmesini ve su birikintisi içinde kalmasını önlemek için uygulanan fiziksel koruma yöntemidir.",
        q: "İnşaat şantiyelerinde geçici uzatma kablolarının araç geçiş yollarında ezilerek yalıtımının soyulmasını önlemek için hangi yöntem uygulanmalıdır?"
      },
      {
        opt: "IP65 / IP67 Su ve Toz Geçirmez Kombinasyon Priz Panosu",
        desc: "Açık hava şantiyelerinde yağmur, çamur ve toza karşı tam sızdırmazlık sağlayan, içinde 30 mA RCD ve sigortalar bulunan kapaklı şantiye panosudur.",
        q: "Açık hava şantiyelerinde yağmur suyunun ve inşaat tozunun pano içine girerek kısa devre/kaçak yapmasını engelleyen dış ortam pano standardı hangisidir?"
      },
      {
        opt: "Termal Kamera ile Kestirimci Bakım (Periyodik Kontroller)",
        desc: "Elektrik panolarında gevşek klemens bağlantılarını ve dengesiz faz yüklenmelerini yangın çıkmadan önce kızılötesi sıcaklık artışıyla tespit eden yöntemdir.",
        q: "Elektrik panolarında enerjiyi kesmeden gevşek bağlantı noktalarındaki aşırı ısınmaları (sıcak noktaları) yangın çıkmadan önce tespit eden bakım yöntemi nedir?"
      },
      {
        opt: "Yalıtım (İzolasyon) Transformatörü",
        desc: "Primer (giriş) ve sekonder (çıkış) sargıları birbirinden elektriksel olarak tamamen ayrılmış olan ve sekonder ucun toprağa göre potansiyel oluşturmasını engelleyen trafodur.",
        q: "Şebeke gerilimini 1:1 oranında aktarırken çıkış hattının toprakla olan elektriksel bağını kopararak tek iletkene dokunmada çarpılmayı önleyen trafo türü nedir?"
      },
      {
        opt: "Parafudr (Aşırı Gerilim Sönümleyici / Surge Arrester)",
        desc: "Yıldırım düşmesi veya şebeke manevraları sonucu oluşan anlık yüksek gerilim darbelerini toprağa deşarj ederek iç tesisatı ve cihazları koruyan elemandır.",
        q: "Enerji nakil hatlarına yıldırım düşmesi sonucu tesisata gelen binlerce voltluk aşırı gerilim darbelerini toprağa akıtarak panoyu koruyan eleman nedir?"
      },
      {
        opt: "Kuru Tahta, Plastik veya İzole Halat (Kurtarma Aracı)",
        desc: "Enerjinin şalterden hemen kesilemediği acil bir elektrik çarpması vakasında, kazazedeyi iletkenden ayırmak için kullanılan yalıtkan malzemedir.",
        q: "Elektrik akımına kapılmış bir kişiyi kurtarırken şaltere ulaşılamıyorsa, kazazedeyi enerjili kablodan ayırmak için aşağıdakilerden hangisi kullanılmalıdır?"
      },
      {
        opt: "Ayakları Birbirine Bitiştirerek Sıçrama veya Sürüyerek Uzaklaşma",
        desc: "Kopmuş bir yüksek gerilim iletkeninin düştüğü bölgeden 'Adım Gerilimi'ne kapılmadan güvenli şekilde çıkabilmek için uygulanması gereken hareket tekniğidir.",
        q: "Yüksek gerilim hattının kopup yere düştüğü 20 metrelik tehlike çemberi içinde kalan bir çalışan, adım gerilimine maruz kalmamak için bölgeden nasıl çıkmalıdır?"
      },
      {
        opt: "Trafo Odası Kapılarının Dışarıya Doğru Açılması ve Kilitli Tutulması",
        desc: "İçeride olası bir ark veya patlama anında personelin panikle kaçabilmesi için kapının dışa açılması ve yetkisiz kişilerin girmemesi için kilitli olması kuralıdır.",
        q: "Yüksek gerilim trafo ve pano odalarının kapıları acil kaçış güvenliği açısından hangi yöne açılmalı ve nasıl tutulmalıdır?"
      },
      {
        opt: "Akü Şarj Odalarında Hidrojen (H2) Gazı Havalandırması",
        desc: "Kurşun-asit akümülatörlerin şarjı sırasında açığa çıkan ve %4 oranında patlayıcı olan hidrojen gazının tavanda birikmesini önleyen ex-proof cebri havalandırmadır.",
        q: "Kesintisiz güç kaynağı (UPS) ve forklift akü şarj odalarında şarj esnasında açığa çıkarak patlama riski yaratan gaz ve alınması gereken önlem nedir?"
      },
      {
        opt: "Yetkili Elektrikçi (EKAT Belgeli / Mesleki Yeterlilik Belgeli Personel)",
        desc: "Mevzuata göre elektrik tesislerinde bakım, onarım ve manevra işlemlerini yapmaya yetkili, gerilim kademesine uygun eğitim ve belgesi olan uzman personeldir.",
        q: "İSG mevzuatına göre işyerlerinde elektrik panolarına müdahale, arıza onarımı ve yüksek gerilim manevraları yalnızca kimler tarafından yapılabilir?"
      }
    ]
  },
  {
    groupName: "Ek Elektriksel Güvenlik ve Kaza Analizi Prensipleri",
    items: [
      {
        opt: "C Sınıfı / Elektrik (E) Yangınları",
        desc: "Enerjili elektrik tesisatı, pano, motor ve trafolarda meydana gelen; müdahalede önce enerjinin kesilmesi ve CO2 / KKT kullanılması gereken yangınlardır.",
        q: "Yangın sınıflandırmasında enerjili elektrik panoları, kablolar ve elektronik cihazlarda çıkan yangınlar hangi kapsamda değerlendirilir?"
      },
      {
        opt: "Kaçak Akım Rölesi 'TEST (T)' Butonu Kontrolü",
        desc: "Kaçak akım rölesinin mekanik açma mekanizmasının yapışıp bozulmadığını doğrulamak için ayda bir kez üzerindeki T butonuna basılarak yapılan kontroldür.",
        q: "Panolardaki 30 mA kaçak akım rölesinin arıza anında gerçekten atıp atmayacağını kullanıcıların ayda bir kez kendi kendine kontrol etmesini sağlayan parça nedir?"
      },
      {
        opt: "Selektivite (Seçicilik) İlkesi",
        desc: "Bir elektrik arızasında tüm fabrikanın enerjisinin kesilmesi yerine yalnızca arızalı linyeye en yakın koruma elemanının (sigorta/RCD) devreyi açması prensibidir.",
        q: "Elektrik koruma sistemlerinde arıza olduğunda ana panonun değil, sadece arızanın olduğu en uç noktadaki sigorta veya rölenin açması ilkesine ne ad verilir?"
      },
      {
        opt: "Gecikmeli (S Tipi / Selektif) 300 mA Yangın Rölesi",
        desc: "Alt panolardaki 30 mA rölelerle aynı anda atmaması için kısa süreli gecikmeyle çalışan ana pano yangın koruma kaçak akım rölesidir.",
        q: "Ana dağıtım panosundaki 300 mA yangın koruma rölesinin, tali panodaki 30 mA hayat koruma rölesinden önce açmasını engellemek için kullanılan röle tipi nedir?"
      },
      {
        opt: "Temas Süresinin Kısaltılması (IEC 60364 - En Fazla 0,4 sn / 0,2 sn)",
        desc: "230 V alternatif akım devrelerinde dolaylı dokunma hatası oluştuğunda koruma elemanının fibrilasyon başlamadan devreyi en geç 0,4 saniyede kesmesi şartıdır.",
        q: "IEC 60364 standardına göre 230 V AC son kullanıcı priz devrelerinde bir gövde kaçağı oluştuğunda otomatik açma süresi en fazla kaç saniye olmalıdır?"
      },
      {
        opt: "Seyyar El Aletlerinde Gövde ve Kablo Giriş Rekoru Kontrolü",
        desc: "Avuç taşlama ve matkap gibi el aletlerinde kablonun gövdeye girdiği boyun kısmındaki bükülme koruyucusunun sağlam olmasını gerektiren kontroldür.",
        q: "Taşınabilir elektrikli el aletlerinde faz iletkeninin soyularak kullanıcının eline temas etmesi en sık hangi noktadaki hasardan kaynaklanır?"
      },
      {
        opt: "Jeneratör Enversör (Transfer) Şalteri Koruması",
        desc: "Şebeke elektriği kesildiğinde devreye giren jeneratörün, şebeke hattına ters enerji basarak dışarıda çalışan hat bakım işçisini çarpmasını önleyen kilitlemeli şalterdir.",
        q: "Fabrikadaki yedek jeneratör çalıştığında, enerjinin ana şebekeye geri basılarak sokaktaki trafo/hat işçisini elektriğe çarpmasını engelleyen zorunlu şalter nedir?"
      },
      {
        opt: "Hava Hattı Emniyet (Yaklaşma) Mesafesi (154 kV için en az 3 - 5 metre)",
        desc: "Yüksek gerilim iletkenlerine fiziksel temas olmasa dahi havadan ark atlamaması için iş makineleri ve vinçlerin girmemesi gereken asgari güvenlik mesafesidir.",
        q: "154 kV yüksek gerilim enerji nakil hatlarının altında çalışan vinç ve ekskavatörlerin, havadan ark atlamasını önlemek için koruyacağı emniyet mesafesi nedir?"
      },
      {
        opt: "İzole Tabanlı (Dielektrik - Metal İçermeyen) İş Ayakkabısı",
        desc: "Elektrikçilerin kullandığı, burun koruyucusu çelik yerine kompozit olan ve tabanı toprağa elektrik akımı geçişini engelleyen özel yalıtkan iş ayakkabısıdır.",
        q: "Elektrik bakım teknisyenlerinin giydiği iş ayakkabılarında standart çelik burunlu antistatik ayakkabılardan farklı olarak hangi özellik aranır?"
      },
      {
        opt: "Ark Koruyucu Polikarbonat Yüz Siperi",
        desc: "Pano manevralarında yüzü ve gözleri ark patlamasının UV ışınımından, erimiş metal damlacıklarından ve termal ısı dalgasından koruyan KKD'dir.",
        q: "Elektrik panolarında şalter açma-kapama ve ölçü aletiyle test sırasında yüz ve gözleri ark parlaması ile erimiş metal sıçramasından koruyan KKD nedir?"
      },
      {
        opt: "İki Kutuplu Gerilim Dedektörü (Faz Kalemi Yerine Güvenli Ölçüm)",
        desc: "Tek uçlu neon kontrol kalemleri eldiven veya yalıtkan zeminde yanıltıcı olabildiği için gerilimsizliği kesin doğrulayan profesyonel test cihazıdır.",
        q: "Profesyonel İSG uygulamalarında tek uçlu basit kontrol kalemi yerine 'Gerilimsizliği Kontrol Etme' adımında neden iki kutuplu gerilim dedektörü tercih edilir?"
      },
      {
        opt: "Topraklama Levhası / Çubuğu ve Bakır İletken (En az 16 mm²)",
        desc: "Mekanik dayanım ve iletkenlik açısından koruma topraklaması ana bağlantı hatlarında kullanılan standart bakır iletken ve elektrot yapısıdır.",
        q: "Topraklama tesisatlarında mekanik kopmalara karşı koruma sağlamak amacıyla toprağa gömülen bakır topraklama iletkenlerinde aranan temel yapısal özellik nedir?"
      },
      {
        opt: "Kompanzasyon Panosu Deşarj Direnci",
        desc: "Şalter kapatıldığında kondansatörlerin içinde kalan tehlikeli gerilimi 1 dakika içinde 50 V'un altına düşürerek bakım personelini koruyan dirençtir.",
        q: "Kompanzasyon panolarında enerji kesildikten sonra kondansatörlerin üzerinde kalan tehlikeli yükü otomatik olarak boşaltan güvenlik elemanı nedir?"
      },
      {
        opt: "Elektrikli Kaynak Makinesi Boşta Çalışma Gerilimi Sınırlandırıcısı",
        desc: "Elektrik ark kaynak makinelerinde kaynak yapılmadığı (boşta) anlarda pense ucundaki gerilimi güvenli seviyeye düşürerek kaynakçının çarpılmasını önleyen devredir.",
        q: "Dar ve nemli alanlarda yapılan elektrik ark kaynağında, kaynakçının elektrot değiştirirken boşta çalışma gerilimine kapılmasını önleyen güvenlik donanımı nedir?"
      },
      {
        opt: "Acil Durum Enerji Kesme (EPO - Emergency Power Off) Butonu",
        desc: "Laboratuvar, pano odası veya üretim hattında elektrik çarpması ya da yangın anında tüm enerjiyi dışarıdan tek tuşla kesen acil durdurma butonudur.",
        q: "Elektrik test laboratuvarları, bilgi işlem merkezleri ve atölye çıkışlarında acil bir çarpılma veya yangın anında tüm elektriği tek hamlede kesen buton nedir?"
      }
    ]
  }
];

export const elektrikExtraFills = [
  {
    q: "Alternatif akımda parmak ucunda hafif karıncalanma olarak hissedilen yaklaşık 0,5 - 1 mA değerine ________ eşiği denir.",
    answers: ["algılama", "algilama", "hissetme"],
    hint: "İlk hissetme sınırı",
    explanation: "0,5 - 1 mA AC akım insan vücudunda ilk hissedilen Algılama Eşiğidir."
  },
  {
    q: "Doğru akımda (DC) insanlar için tehlikeli gerilim sınırı (güvenli dokunma gerilimi üst sınırı) ________ Volt kabul edilir.",
    answers: ["120", "yüz yirmi", "yüzyirmi"],
    hint: "AC'de 50 V olan sınırın DC karşılığı",
    explanation: "Tehlikeli gerilim sınırı AC'de 50 V, doğru akımda (DC) ise 120 V'tur."
  },
  {
    q: "Gerilimsiz çalışmada 5 Temel Güvenlik Kuralının 4. adımı: Tesisatı ________ ve kısa devre etmektir.",
    answers: ["topraklama", "topraklamak"],
    hint: "Kapasitif yükü ve indüksiyonu toprağa akıtma işlemi",
    explanation: "4. güvenlik kuralı çalışma yerinin topraklanması ve kısa devre edilmesidir."
  },
  {
    q: "Normal işletme şartlarında gerilim altında bulunan aktif kısımlara (çıplak faz barasına/kabloya) temas edilmesine ________ dokunma denir.",
    answers: ["doğrudan", "dogrudan"],
    hint: "Dolaylı dokunmanın zıttı",
    explanation: "Enerjili aktif iletkene temasa Doğrudan Dokunma denir."
  },
  {
    q: "Üzerinde 'iç içe geçmiş iki kare' sembolü bulunan ve topraklama ucu gerektirmeyen el aletlerine ________ yalıtımlı (Sınıf II) cihaz denir.",
    answers: ["çift", "cift"],
    hint: "İki kat izolasyonlu cihaz",
    explanation: "Sınıf II cihazlar Çift Yalıtımlı olup koruma topraklaması gerektirmez."
  },
  {
    q: "Elektrik tesisatlarında koruma topraklaması (PE) iletkeninin dış kılıf rengi standart olarak ________ - yeşil çizgilidir.",
    answers: ["sarı", "sari"],
    hint: "Yeşil ile birlikte kullanılan topraklama kablosu rengi",
    explanation: "Koruma topraklaması (PE) iletkeni uluslararası standartta Sarı-Yeşil renklidir."
  },
  {
    q: "Elektrik tesisatlarında Nötr (N) iletkeninin standart yalıtım kılıf rengi açık ________'dir.",
    answers: ["mavi"],
    hint: "Nötr kablosu rengi",
    explanation: "Nötr iletkeni standart olarak açık mavi renkte seçilir."
  },
  {
    q: "Hastane ameliyathaneleri ve maden ocakları gibi ilk yalıtım hatasında enerjinin kesilmemesi gereken yerlerde ________ tipi (izole nötrlü) şebeke kullanılır.",
    answers: ["IT", "it"],
    hint: "TT ve TN dışındaki 2 harfli şebeke tipi",
    explanation: "IT şebeke sisteminde trafo nötrü topraktan izoledir ve ilk hatada enerji kesilmez."
  },
  {
    q: "Binaları doğrudan yıldırım düşmesine karşı korumak için çatıya kurulan yakalama ucu ve iniş iletkenli sisteme ________ (yıldırımsavar) tesisatı denir.",
    answers: ["paratoner"],
    hint: "Yıldırımdan korunma sistemi",
    explanation: "Paratoner tesisatı yıldırım akımını bina dışından toprağa deşarj eder."
  },
  {
    q: "Topraklama tesisatının yayılma direncini ve kabloların yalıtkanlık direncini ölçmek için kullanılan cihaza ________ denir.",
    answers: ["meger", "megger"],
    hint: "Topraklama ölçüm cihazı",
    explanation: "Topraklama ve izolasyon direnci Meger cihazı ile ölçülür."
  },
  {
    q: "Yüksek gerilim tesislerinde devreyi gözle görünür şekilde ayıran ancak KESİNLİKLE yük altında açılmaması gereken elemana ________ (seksiyoner) denir.",
    answers: ["ayırıcı", "ayirici", "seksiyoner"],
    hint: "Önce kesici açıldıktan sonra açılan YG elemanı",
    explanation: "Ayırıcı (seksiyoner) yüksüz devreyi ayırır; yük altında açılırsa büyük ark patlaması oluşur."
  },
  {
    q: "Yüksek gerilim devrelerini hem yük altında hem de kısa devre anında arkı söndürerek güvenle açabilen elemana ________ (disjonktör) denir.",
    answers: ["kesici", "disjonktör", "disjonktor"],
    hint: "Yük altında açma yapabilen YG elemanı",
    explanation: "Kesici (disjonktör), ark söndürme hücresi sayesinde yük ve kısa devre akımını kesebilir."
  },
  {
    q: "Elektrik panolarında gevşek bağlantılardan kaynaklanan aşırı ısınmaları enerjiyi kesmeden kızılötesi görüntüleme ile tespit eden cihaza ________ kamera denir.",
    answers: ["termal", "kızılötesi", "kizilotesi"],
    hint: "Sıcaklık haritası çıkaran kamera",
    explanation: "Termal kamera panolardaki ısınan gevşek bağlantıları yangın çıkmadan tespit eder."
  },
  {
    q: "Patlayıcı gaz, buhar veya toz bulunan ortamlarda kıvılcım sızdırmayan özel elektrik ekipmanlarına ________ (veya ATEX) ekipman denir.",
    answers: ["ex-proof", "exproof", "ex"],
    hint: "Explosion proof kısaltması",
    explanation: "Patlayıcı ortamlarda Ex-Proof (ATEX uyumlu) elektrik ekipmanları kullanılır."
  },
  {
    q: "Elektrik çarpması sonucu kalpte oluşan ventriküler fibrilasyonu elektro-şok vererek normal ritme döndüren ilk yardım cihazına ________ (OED) denir.",
    answers: ["defibrilatör", "defibrilator", "şok cihazı"],
    hint: "Kalp şok cihazı",
    explanation: "Ventriküler fibrilasyonun tek kesin tedavisi Defibrilatör (OED) ile erken elektro-şoktur."
  },
  {
    q: "Elektrik akımının vücut direnci üzerinden geçerken oluşturduğu ısı enerjisi (Q = I².R.t) nedeniyle meydana gelen yanıklara ________ yanığı (veya elektrik yanığı) denir.",
    answers: ["joule", "ark"],
    hint: "I².R.t ısısının fizikteki adı",
    explanation: "Akımın vücut iç direncinden geçerken ürettiği I².R.t ısısı derin Joule yanıkları oluşturur."
  },
  {
    q: "Bir tesis içindeki tüm metal boruların, çelik yapıların ve topraklama hatlarının birbirine bağlanarak aralarındaki potansiyel farkının sıfırlanmasına ________ kuşaklama denir.",
    answers: ["eşpotansiyel", "espotansiyel"],
    hint: "Potansiyel dengeleme",
    explanation: "Eşpotansiyel kuşaklama bina içi metal aksamlar arasında tehlikeli gerilim farkı oluşmasını önler."
  },
  {
    q: "Şebeke kesildiğinde devreye giren jeneratörün ana şebekeye ters enerji basmasını önleyen kilitlemeli şaltere ________ (transfer) şalteri denir.",
    answers: ["enversör", "enversor", "transfer"],
    hint: "Şebeke-jeneratör yön değiştirici şalter",
    explanation: "Enversör (transfer) şalteri şebeke ile jeneratörün çakışmasını ve ters beslemeyi önler."
  },
  {
    q: "Akü şarj odalarında şarj sırasında açığa çıkan ve tavanda biriktiğinde patlama tehlikesi yaratan yanıcı gaz ________ gazıdır.",
    answers: ["hidrojen", "H2"],
    hint: "En hafif patlayıcı gaz",
    explanation: "Akü şarjı sırasında suyun elektrolizi ile patlayıcı Hidrojen (H2) gazı açığa çıkar."
  },
  {
    q: "Kompanzasyon panolarında şalter kapatıldıktan sonra dahi içinde elektrik yükü depolamaya devam eden devre elemanına ________ denir.",
    answers: ["kondansatör", "kondansator", "kapasitör"],
    hint: "Reaktif güç kompanzasyonunda yük depolayan eleman",
    explanation: "Kondansatörler enerji kesilse bile üzerinde tehlikeli gerilim tutar; deşarj edilmeden dokunulmaz."
  },
  {
    q: "Yüksek gerilim hücrelerinde uzaktan güvenli manevra ve sigorta değişimi yapmayı sağlayan fiberglas yalıtkan çubuğa izole ________ (stanga) denir.",
    answers: ["ıstaka", "istaka", "stanga"],
    hint: "Yalıtkan manevra çubuğu",
    explanation: "YG hücrelerinde güvenli mesafeden işlem yapmak için izole manevra ıstakası (stanga) kullanılır."
  },
  {
    q: "Üç fazlı (trifaze) alçak gerilim sanayi şebekesinde iki faz iletkeni arasındaki (Faz - Faz) gerilim etkin değeri ________ (veya 400) Volttur.",
    answers: ["380", "400"],
    hint: "Trifaze sanayi gerilimi (V)",
    explanation: "Türkiye'de Faz-Nötr arası 220/230 V, Faz-Faz arası ise 380/400 V'tur."
  },
  {
    q: "Alçak gerilim panolarında parmak temasını (>12,5 mm) engelleyen asgari muhafaza koruma sınıfı kodu ________'tir.",
    answers: ["IP2X", "ip2x", "IP20"],
    hint: "IP ile başlayan parmak koruma kodu",
    explanation: "IP2X koruma derecesi parmakların enerjili baralara temasını fiziksel olarak engeller."
  },
  {
    q: "Klasik sıfırlama yapılan ________-C şebeke sisteminde PEN iletkeni koparsa cihazların metal gövdelerine doğrudan faz gerilimi biner.",
    answers: ["TN", "tn"],
    hint: "Nötr ve korumanın birleşik olduğu şebeke harf kodu",
    explanation: "TN-C şebekede PEN hattının kopması metal gövdeleri enerjilendirdiği için tehlikelidir."
  },
  {
    q: "Kaçak akım rölesinin mekanik olarak sağlam çalışıp çalışmadığını doğrulamak için üzerindeki ________ butonuna ayda bir kez basılmalıdır.",
    answers: ["test", "T"],
    hint: "Röle üzerindeki kontrol tuşu",
    explanation: "Röle üzerindeki Test (T) butonu yapay bir kaçak oluşturarak mekanizmanın çalıştığını doğrular."
  },
  {
    q: "Elektrik işlerinde kullanılan dielektrik izole eldivenler her kullanımdan önce içine ________ üflenerek/şişirilerek delik ve çatlak kontrolünden geçirilir.",
    answers: ["hava"],
    hint: "Delik kontrolü için eldiveni şişirmede kullanılan şey",
    explanation: "İzole eldivenlerde iğne deliği kadar kaçak bile ölümcül olacağından kullanım öncesi hava ile şişirilerek kontrol edilir."
  },
  {
    q: "Trafo yıldız (nötr) noktasının şebekenin normal çalışması için toprağa bağlanmasına ________ topraklaması denir.",
    answers: ["işletme", "isletme"],
    hint: "Koruma topraklamasından farklı olarak trafo nötrüne yapılan topraklama",
    explanation: "Trafo nötr noktasının topraklanmasına İşletme Topraklaması, metal gövdelerin topraklanmasına Koruma Topraklaması denir."
  },
  {
    q: "Bir elektrik arızasında tüm tesisin enerjisinin kesilmesi yerine yalnızca arızalı noktaya en yakın sigortanın açması prensibine ________ (seçicilik) denir.",
    answers: ["selektivite", "seçicilik", "secicilik"],
    hint: "Kademeli açma / seçicilik terimi",
    explanation: "Selektivite ilkesi arızanın sadece ilgili linyede izole edilmesini sağlar."
  },
  {
    q: "Yıldırım veya şebeke darbelerinden kaynaklanan anlık aşırı gerilimleri toprağa deşarj ederek panoyu koruyan elemana ________ denir.",
    answers: ["parafudr"],
    hint: "Aşırı gerilim sönümleyici",
    explanation: "Parafudr, iç yıldırımlık olarak aşırı gerilim darbelerini toprağa akıtır."
  },
  {
    q: "Yüksek gerilim panolarında ark patlaması (Arc Flash) riskine karşı giyilen koruyucu kıyafetlerin termal dayanım kapasitesi cal/________ birimiyle ölçülür.",
    answers: ["cm2", "cm²"],
    hint: "Santimetrekare başına düşen kalori enerjisi",
    explanation: "Ark koruyucu kıyafetlerin ATPV termal koruma değeri cal/cm² birimiyle ifade edilir."
  },
  {
    q: "Elektrik ark kaynağında kaynak yapılmadığı anlarda pense ucundaki gerilimi güvenli değere düşüren donanıma ________ çalışma gerilimi sınırlandırıcısı denir.",
    answers: ["boşta", "bosta"],
    hint: "Yüksüz / kaynak yapılmayan durum",
    explanation: "Boşta çalışma gerilimi düşürücü tertibat kaynakçıyı elektrik çarpmasından korur."
  },
  {
    q: "Trafo ve yüksek gerilim pano odalarının kapıları acil durumda personelin kolayca kaçabilmesi için ________ doğru açılmalıdır.",
    answers: ["dışarıya", "disariya", "dışa", "disa"],
    hint: "İçeriye değil hangi yöne?",
    explanation: "Acil kaçış kapıları ve trafo odası kapıları her zaman dışarıya doğru açılır."
  },
  {
    q: "50-60 Hz alternatif akım, doğru akıma (DC) kıyasla kalp ritmini bozma açısından yaklaşık 3-4 kat daha ________ kabul edilir.",
    answers: ["tehlikeli", "riskli"],
    hint: "Fibrilasyon riski açısından durumu",
    explanation: "50 Hz AC akım kalbin sinüs düğümü frekansıyla çakıştığı için DC'den 3-4 kat daha tehlikelidir."
  },
  {
    q: "Akaryakıt tankerlerinin dolum ve boşaltımı sırasında statik elektrik kıvılcımını önlemek için tanker gövdesi topraklama ________ ile topraklanır.",
    answers: ["pensesi", "kelepçesi", "kablosu"],
    hint: "Tankere tutturulan anti-statik bağlantı aparatı",
    explanation: "Dolum öncesi statik topraklama pensesi/kelepçesi bağlanarak kıvılcım riski sıfırlanır."
  },
  {
    q: "İnsan vücudunda uygulanan gerilim (Volt) yükseldikçe ve temas süresi uzadıkça derinin yalıtkanlık direnci delinir ve toplam vücut direnci ________.",
    answers: ["düşer", "duser", "azalır", "azalir"],
    hint: "Artar mı, düşer mi?",
    explanation: "Gerilim ve nem arttıkça deri direnci kırılır ve toplam vücut direnci hızla düşer."
  }
];
