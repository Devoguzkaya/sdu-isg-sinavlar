export const elektrikCourse = {
  id: "elektrik",
  code: "12227ISG001",
  title: "Elektrik İşlerinde İş Sağlığı ve Güvenliği",
  instructor: "Prof. Dr. Mert ŞEKERCİ (Resmi: Merhum Prof. Dr. Seyfettin ÇAKMAK)",
  examInfo: "Vize %50 | Final %50 | Ödev YOK | Isparta'da Yüz Yüze 25 Soruluk Test (Vaka + Temel İSG)",
  color: "amber",
  hex: "#d97706",
  badge: "Perşembe • 40 Soru (25 Test + 15 Boşluk)",
  tips: [
    "Hoca mühendislik pano hesabı değil, sahada elektrikçiyle aynı dili konuşabilmeyi ve kaza vaka analizini (OSHA/NIOSH) ölçüyor.",
    "Akımın insan vücuduna etkilerinde mA eşikleri (1 mA algılama, 5 mA irkilme, 10-15 mA tutma, 30 mA solunum felci/KAR, 50-100 mA fibrilasyon) kesin sınav sorusudur.",
    "5 Temel Güvenlik Kuralı sırası, LOTO (Kilitleme-Etiketleme), Adım/Dokunma gerilimi ve Ark 플래ş (Arc Flash) korunma ilkeleri mutlaka bilinmelidir."
  ],
  mcQuestions: [
    {
      q: "Alternatif akımın (50 Hz) insan vücudu üzerindeki etkileri dikkate alındığında, kişinin iletkeni elinden bırakamadığı 'tutma (let-go) eşiği' yaklaşık kaç mA seviyesinde başlar?",
      options: ["0,5 - 1 mA", "1 - 3 mA", "10 - 15 mA", "100 - 200 mA", "500 - 1000 mA"],
      answer: 2,
      explanation: "10-15 mA seviyesinde kol ve el kaslarında istemsiz kasılma (tetani) başlar ve kişi enerjili iletkeni elinden bırakamaz (tutma eşiği).",
      optionExplanations: [
        "Algılama (hissetme) eşiğidir; parmak ucunda sadece çok hafif bir karıncalanma hissedilir, tehlike yaratmaz.",
        "Hafif uyuşma ve irkilme eşiğidir; kas kontrolü kaybolmaz, kişi elini iletkenden rahatça çekebilir.",
        "DOĞRU: Tutma (bırakamama / let-go) eşiğidir; kaslarda istemsiz kasılma (tetani) başlar ve kişi iletkeni bırakamaz.",
        "Kalpte ventriküler fibrilasyon (ölümcül ritim bozukluğu) ve solunum durması oluşturan ölümcül akım bölgesidir.",
        "Kalp kasının tamamen kasılması (kardiyak arrest), ağır iç organ tahribatı ve derin doku/deri yanıkları oluşur."
      ]
    },
    {
      q: "Ev ve işyerlerinde hayat koruma (insan koruma) amacıyla kullanılan Kaçak Akım Rölesinin (RCD) nominal açma akımı ve yangın koruma eşiği sırasıyla aşağıdakilerden hangisidir?",
      options: ["10 mA - 100 mA", "30 mA - 300 mA", "50 mA - 500 mA", "100 mA - 30 mA", "300 mA - 1000 mA"],
      answer: 1,
      explanation: "30 mA solunum felci sınırının altında insan hayatını korumak için; 300 mA ise izolasyon hatalarından kaynaklı ark ve elektrik yangınlarını önlemek için kullanılır.",
      optionExplanations: [
        "10 mA sadece çok özel ıslak hacim/laboratuvar cihazlarında kullanılır; 100 mA standart yangın koruma eşiği değildir.",
        "DOĞRU: 30 mA insan hayatını (fibrilasyon/solunum felci öncesi) koruma eşiği, 300 mA ise elektrik yangını koruma eşiğidir.",
        "50 mA solunum felci sınırını aştığı için hayat koruma rölesi olarak kullanılamaz.",
        "Değerler ters verilmiştir; 100 mA insan koruma için çok yüksek, 30 mA ise yangın değil hayat korumadır.",
        "300 mA yangın korumadır (insan korumaz); 1000 mA (1 A) ise ana şebeke/endüstriyel selektif kaçak akım değeridir."
      ]
    },
    {
      q: "Elektrik tesislerinde gerilimsiz çalışmaya başlamadan önce uygulanması gereken '5 Temel Güvenlik Kuralı'nın ilk iki adımı aşağıdakilerden hangisinde doğru sırayla verilmiştir?",
      options: [
        "Topraklama yap - Çalışma alanını sınırla",
        "Gerilimi her yönden kes - Tekrar gerilim verilmesini önle",
        "Gerilimsizliği kontrol et - Enerjiyi kes",
        "Kısa devre et - Gerilimi kes",
        "KKD giy - Topraklama yap"
      ],
      answer: 1,
      explanation: "5 Temel Güvenlik Kuralı sırasıyla: 1) Enerjiyi her yönden kes, 2) Tekrar verilmesini önle (LOTO), 3) Gerilimsizliği kontrol et, 4) Toprakla ve kısa devre et, 5) Yakındaki gerilimli bölümleri izole et / alanı sınırla.",
      optionExplanations: [
        "Topraklama 4. adımdır, çalışma alanını sınırlama ise 5. (son) adımdır; enerji kesilmeden topraklama yapılamaz.",
        "DOĞRU: 1. adım enerjinin her yönden kesilmesi, 2. adım ise kesicinin kilitlenip etiketlenerek (LOTO) tekrar enerjilenmesinin önlenmesidir.",
        "Sıralama yanlıştır; önce enerji kesilir (1. adım) ve kilitlenir (2. adım), ardından gerilimsizlik kontrol edilir (3. adım).",
        "Enerji kesilmeden kısa devre yapmak büyük ark patlamasına yol açar; kısa devre ve topraklama 4. adımdır.",
        "KKD kullanımı genel hazırlıktır; 5 temel güvenlik kuralının ilk iki teknik adımı enerji kesme ve kilitlemedir."
      ]
    },
    {
      q: "Elektrik çarpmalarında kalpte 'Ventriküler Fibrilasyon' (kalp kaslarının düzensiz titreşerek kan pompalayamaması) riskinin en yüksek olduğu tehlikeli akım türü ve frekans aralığı hangisidir?",
      options: [
        "Doğru Akım (DC)",
        "50 - 60 Hz şebeke frekanslı Alternatif Akım (AC)",
        "10.000 Hz üzeri yüksek frekanslı akım",
        "Statik elektrik deşarjı",
        "12 V doğru akım"
      ],
      answer: 1,
      explanation: "50-60 Hz şebeke frekanslı AC akım, kalbin sinüs düğümü çalışma ritmiyle çakıştığı için doğru akıma (DC) kıyasla 3-4 kat daha tehlikelidir ve ventriküler fibrilasyona yol açar.",
      optionExplanations: [
        "Doğru akım (DC) tek yönlü aktığı için kaslarda tek seferlik kasılma ve elektroliz/yanık yapar; fibrilasyon riski AC'den 3-4 kat düşüktür.",
        "DOĞRU: 50-60 Hz AC akım saniyede 100-120 kez yön değiştirerek kalbin elektriksel uyarı sistemini bozar ve ventriküler fibrilasyon yapar.",
        "Yüksek frekanslı akımlar (deri etkisi / skin effect nedeniyle) iç organlara girmeden deri yüzeyinden akar; tıpta koter cihazlarında kullanılır.",
        "Statik elektrik yüksek voltajlı ancak çok düşük akımlı ve mikro-saniyelik deşarjdır; irkilme yapar veya parlayıcı ortamda yangın çıkarır.",
        "12 V doğru akım tehlikeli gerilim sınırının (120 V DC) çok altındadır, sağlam deriyi geçip fibrilasyon yapamaz."
      ]
    },
    {
      q: "Ohm Kanunu'na (I = V / R) göre, 220 V şebeke gerilimine temas eden bir çalışanın eli ıslak olduğunda vücut direnci 1.000 Ohm'a düşerse vücudundan geçen akım kaç mA olur ve sonucu nedir?",
      options: [
        "2,2 mA - Sadece hafif karıncalanma",
        "22 mA - Kas kasılması",
        "220 mA - Ventriküler fibrilasyon ve ölümcül kalp durması",
        "0,22 mA - Hissedilmez",
        "2200 mA - Sadece deri yanığı"
      ],
      answer: 2,
      explanation: "I = 220 V / 1000 Ohm = 0,22 A = 220 mA. 50-100 mA üzeri akımlar kalpte ventriküler fibrilasyon oluşturarak ölümcül sonuç doğurur.",
      optionExplanations: [
        "2,2 mA oluşması için vücut direncinin 100.000 Ohm (tamamen kuru ve nasırlı deri + yalıtkan ayakkabı) olması gerekir.",
        "22 mA oluşması için toplam direncin 10.000 Ohm olması gerekir; 1.000 Ohm dirençte akım 10 kat daha yüksektir.",
        "DOĞRU: I = 220 / 1000 = 0,22 Amper = 220 mA. Bu değer 50 mA fibrilasyon eşiğini aşarak ölümcül kalp durmasına yol açar.",
        "0,22 mA algılama eşiğinin bile altındadır; hesaplamada Amper'den miliAmper'e (x1000) geçiş hatası yapılmıştır.",
        "2200 mA (2,2 A) direncin 100 Ohm'a düştüğü durumdur ve sadece deri yanığı değil, ani ölüm doğurur."
      ]
    },
    {
      q: "Yüksek gerilim (YG) hatlarında koparak yere düşen enerjili bir iletkenin yakınında bulunan kişinin, iki ayağı arasındaki potansiyel farkından dolayı maruz kaldığı tehlikeli gerilime ne ad verilir?",
      options: ["Dokunma gerilimi", "Adım gerilimi", "İndüksiyon gerilimi", "Kaçak gerilim", "Faz-faz gerilimi"],
      answer: 1,
      explanation: "Toprağa yayılan akımın oluşturduğu eş potansiyel halkaları arasında iki ayak açıklığı (yaklaşık 80 cm) mesafede oluşan gerilim farkına 'Adım Gerilimi' denir.",
      optionExplanations: [
        "Dokunma gerilimi, kişinin eliyle arızalı metal gövdeye/direğe dokunurken el ile ayakları arasında oluşan potansiyel farkıdır.",
        "DOĞRU: Toprağa yayılan hata akımının oluşturduğu potansiyel konisinde kişinin iki ayağı arasındaki (~80 cm) gerilim farkına Adım Gerilimi denir.",
        "İndüksiyon gerilimi, enerjili yüksek gerilim hattına paralel uzanan enerjisiz bir hatta manyetik alan etkisiyle oluşan gerilimdir.",
        "Kaçak gerilim, yalıtım hatası nedeniyle tesisatın gövdesinde oluşan istenmeyen sızıntı gerilimidir.",
        "Faz-faz gerilimi (hat gerilimi), iki ayrı faz iletkeni arasındaki (AG'de 380/400 V) şebeke gerilimidir."
      ]
    },
    {
      q: "Elektrik akımına kapılmış bir kazazedeye müdahale ederken ilk yardımcının yapması gereken İLK işlem aşağıdakilerden hangisidir?",
      options: [
        "Kazazedeyi korumasız elinden veya kolundan tutarak hızla akım bölgesinden çekmek",
        "İletken profil veya metal çubuk ile kazazedenin üzerindeki kabloyu kenara itmek",
        "Önce kendi güvenliğini sağlayarak elektrik enerjisini (şalteri/fişi) kesmek veya kuru yalıtkan cisimle teması ayırmak",
        "Enerji kesilmeden doğrudan solunum ve nabız kontrolü için kazazedenin üzerine eğilmek",
        "Kazazedenin altına ıslak branda sererek vücut direncini topraklamak"
      ],
      answer: 2,
      explanation: "Elektrik kazalarında altın kural önce kurtarıcının kendi güvenliğidir: Şalter/sigorta kapatılarak enerji kesilmeli, kesilemiyorsa kuru ve dielektrik yalıtkan bir cisimle temas ayrılmalıdır.",
      optionExplanations: [
        "Kazazedeye korumasız elle temas etmek, kurtarıcının üzerinden de akım geçmesine ve ikinci bir kaza oluşmasına neden olur.",
        "İletken metal çubuk elektriği doğrudan kurtarıcıya ileterek her iki kişinin de çarpılmasına yol açar.",
        "DOĞRU: İlk yardımın 1. adımı 'Koruma'dır; önce şalter/fiş çekilerek enerji kesilir veya yalıtkan cisimle (kuru tahta/plastik) temas ayrılır.",
        "Kazazede halen enerjili iletkenle temas halindeyken üzerine eğilmek ve dokunmak ölümcül elektrik akımına kapılmaya yol açar.",
        "Islak branda iletkenliği artırarak elektrik devresini kurtarıcı üzerinden tamamlar ve durumu daha da ölümcül hale getirir."
      ]
    },
    {
      q: "Bir fabrikada bakım teknisyeni panoda çalışırken başka bir çalışanın şalteri yanlışlıkla kaldırması sonucu iş kazası meydana gelmiştir. Bu kazayı önlemek için uygulanması gereken temel prosedür hangisidir?",
      options: [
        "LOTO (Kilitleme ve Etiketleme)",
        "Termal kamera ile ölçüm",
        "Paratoner tesisatı kurulumu",
        "Aydınlatma şiddetinin artırılması",
        "Antistatik ayakkabı kullanımı"
      ],
      answer: 0,
      explanation: "LOTO (Kilitleme-Etiketleme / EKED) prosedüründe bakım yapan her personel kesiciyi kendi kişisel asma kilidiyle kilitler ve etiketler; işi bitmeden kimse enerjiyi devreye alamaz.",
      optionExplanations: [
        "DOĞRU: LOTO (EKED) sisteminde enerji kesildikten sonra şalter kişisel asma kilitle kilitlenir ve etiketlenir; anahtar sadece bakım personelindedir.",
        "Termal kamera panodaki aşırı ısınan gevşek bağlantıları tespit eder, şalterin başkası tarafından kaldırılmasını engellemez.",
        "Paratoner binayı yıldırım düşmesine karşı korur, pano içi bakım güvenliğiyle ilgisi yoktur.",
        "Aydınlatma görüşü iyileştirir ancak enerjinin habersiz devreye alınmasını (beklenmedik enerjilenmeyi) önlemez.",
        "Antistatik ayakkabı statik elektrik yükünü toprağa aktarır, şebeke gerilimi altında şalter açılmasına karşı korumaz."
      ]
    },
    {
      q: "İSG mevzuatına göre alçak gerilim (AG) ve yüksek gerilim (YG) sınırı alternatif akımda (AC) kaç Volt kabul edilir?",
      options: ["42 V", "50 V", "220 V", "1000 V", "36.000 V"],
      answer: 3,
      explanation: "Etkin değeri 1000 Volt ve altındaki gerilimler Alçak Gerilim (AG), 1000 Volt'un üzerindeki gerilimler ise Yüksek Gerilim (YG) olarak sınıflandırılır.",
      optionExplanations: [
        "42 V dar ve iletken ortamlarda kullanılan küçük gerilim (güvenlik gerilimi) değeridir.",
        "50 V alternatif akımda insan vücudu için tehlikeli dokunma gerilimi sınırıdır, AG/YG sınırı değildir.",
        "220 V (230 V) ev ve işyerlerinde kullanılan standart tek fazlı (faz-nötr) alçak gerilim değeridir.",
        "DOĞRU: Mevzuata göre etkin değeri 1000 V ve altı Alçak Gerilim (AG), 1000 V üstü Yüksek Gerilim (YG) olarak tanımlanır.",
        "36.000 V (36 kV) Türkiye'de şehir içi orta/yüksek gerilim dağıtım şebekelerinde yaygın kullanılan YG değeridir."
      ]
    },
    {
      q: "İnsan vücudunun iç direnci ve deri direnci ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
      options: [
        "Islak deri direnci kuru deri direncinden çok daha yüksektir",
        "Gerilim (Volt) arttıkça derinin yalıtkanlık direnci delinir ve toplam vücut direnci düşer",
        "Temas yüzeyi büyüdükçe vücut direnci artar",
        "Akımın geçiş süresi uzadıkça deri direnci artar",
        "İnsan vücudu direnci her koşulda sabit 100.000 Ohm'dur"
      ],
      answer: 1,
      explanation: "Gerilim yükseldikçe (özellikle 50 V üzerinde), nem/ter arttıkça ve temas süresi uzadıkça derinin koruyucu direnci kırılır ve vücut iç direncine (500-1000 Ohm) kadar düşer.",
      optionExplanations: [
        "Tam tersine; ıslak/terli deride direnç 10-20 kat düşerek 1.000 Ohm ve altına iner.",
        "DOĞRU: Uygulanan gerilim arttıkça derinin dielektrik (yalıtkan) tabakası delinir ve toplam vücut direnci hızla düşer.",
        "Temas yüzeyi (kesit alanı) büyüdükçe direnç azalır (R = ρ.L/A) ve vücuttan geçen akım artar.",
        "Akımın geçiş süresi uzadıkça deride yanık ve terleme oluştuğu için deri direnci hızla düşer.",
        "Vücut direnci sabit değildir; nem, voltaj, temas yüzeyi ve süreye göre 500 Ohm ile 100.000 Ohm arasında değişir."
      ]
    },
    {
      q: "Çok iletkenli dar ve nemli yerlerde (kazan içi, metal tank içi vb.) çalışırken el aletleri ve taşınabilir aydınlatmalarda kullanılması gereken 'Çok Düşük Güvenlik Gerilimi' (SELV) alternatif akımda en fazla kaç Volt olmalıdır?",
      options: ["24 V", "110 V", "220 V", "380 V", "1000 V"],
      answer: 0,
      explanation: "İnsanda tehlikeli dokunma gerilimi sınırı AC'de 50 V (dar/ıslak metal ortamlarda 24 V - 42 V küçük gerilim), DC'de 120 V olarak kabul edilir.",
      optionExplanations: [
        "DOĞRU: Kazan içi ve ıslak/metal dar hacimlerde vücut direnci çok düştüğü için 24 V (en fazla 42 V) küçük güvenlik gerilimi kullanılır.",
        "110 V tehlikeli gerilim sınırının (50 V AC) iki katından fazladır; ıslak metal tank içinde ölümcüldür.",
        "220 V şebeke gerilimidir; dar ve iletken kazan içinde doğrudan ölümcül fibrilasyona yol açar.",
        "380 V üç fazlı sanayi gerilimidir; taşınabilir aydınlatmada kesinlikle kullanılamaz.",
        "1000 V alçak gerilim üst sınırıdır; çok ağır ölümcül tehlike taşır."
      ]
    },
    {
      q: "Elektrik tesislerinde 'Dolaylı Dokunma' (normalde gerilim altında olmayan metal gövdenin yalıtım hatası sonucu enerjilenmesi) riskine karşı alınan en temel koruma önlemi hangisidir?",
      options: [
        "Koruma topraklaması ve Kaçak Akım Rölesi (RCD) ile beslemenin otomatik kesilmesi",
        "Aktif faz iletkenlerinin en az IP2X standardında koruyucu muhafaza içine alınması",
        "Gerilimli çıplak baraların erişilemeyecek yükseklik veya mesafeye yerleştirilmesi",
        "Besleme hattındaki aşırı akım sigorta anma akımının yükseltilmesi",
        "Enerjili bölümlerin etrafına dielektrik yalıtkan paravan ve koruyucu engel konulması"
      ],
      answer: 0,
      explanation: "Dolaylı dokunmaya karşı en etkili önlem; metal gövdelerin koruma topraklama iletkenine bağlanması ve hata akımında devreyi milisaniyeler içinde açan Kaçak Akım Rölesi (RCD) kullanımıdır.",
      optionExplanations: [
        "DOĞRU: Yalıtım hatasında gövdeye kaçan akım toprağa iletilir ve RCD devreyi milisaniyeler içinde açarak dokunma gerilimini tehlikesiz seviyede sınırlar.",
        "Aktif faz iletkenlerinin IP2X muhafazaya alınması doğrudan dokunmaya karşı koruma önlemidir.",
        "Çıplak baraların ulaşılamayacak mesafeye konulması doğrudan dokunmaya karşı koruma önlemidir.",
        "Sigorta değerini yükseltmek aşırı akım ve yangın riskini artırır; küçük gövde kaçaklarını zaten algılayamaz.",
        "Enerjili kısımların etrafına paravan konulması doğrudan dokunmayı engellemeye yöneliktir."
      ]
    },
    {
      q: "Elektrik yangınlarında (enerjili ekipman yangınları) aşağıdaki söndürücülerden hangisi KESİNLİKLE KULLANILMAMALIDIR?",
      options: [
        "Karbondioksitli (CO2) söndürücü",
        "Kuru Kimyevi Tozlu (KKT) söndürücü",
        "Su ve sulu köpük",
        "Halokarbon gazlı söndürücü",
        "FM-200 gazlı sistem"
      ],
      answer: 2,
      explanation: "Enerji kesilmeden elektrik yangınlarına su veya sulu köpük ile müdahale etmek, suyun iletkenliği nedeniyle müdahale eden kişinin elektrik akımına kapılmasına yol açar.",
      optionExplanations: [
        "CO2 gazı elektriği iletmez ve kalıntı bırakmadığı için elektrik panosu yangınlarında en ideal söndürücüdür.",
        "Kuru Kimyevi Toz (KKT) elektriği iletmez, enerjili yangınlarda güvenle kullanılabilir (ancak elektronik kartlarda toz kalıntısı bırakır).",
        "DOĞRU: Su ve sulu köpük elektriği ilettiği için enerjili ekipmana sıkıldığında müdahale eden kişiyi elektriğe çarpar.",
        "Halokarbon gazlı temiz söndürücüler elektriği iletmez ve hassas elektrik/bilgi işlem odalarında kullanılır.",
        "FM-200 otomatik gazlı söndürme sistemi pano ve sunucu odalarında elektrik yangınları için standarttır."
      ]
    },
    {
      q: "Elektrik tesislerinde topraklama ölçümleri ve paratoner (yıldırımdan korunma) tesisatı periyodik kontrolleri İş Ekipmanları Yönetmeliği'ne göre azami hangi periyotta yapılmalıdır?",
      options: ["3 ayda bir", "6 ayda bir", "Yılda 1 kez", "2 yılda bir", "5 yılda bir"],
      answer: 2,
      explanation: "Elektrik tesisatı, topraklama tesisatı, paratoner ve akümülatör/transformatör periyodik kontrolleri standartlarda aksi belirtilmedikçe yılda en az 1 kez yetkili elektrik mühendisi/teknikeri tarafından yapılır.",
      optionExplanations: [
        "3 aylık periyot iskeleler veya bazı geçici şantiye ekipmanları içindir; elektrik tesisatı için zorunlu süre 1 yıldır.",
        "6 aylık periyot yapı iskeleleri vb. içindir; topraklama ve paratoner kontrol periyodu 1 yıldır.",
        "DOĞRU: Elektrik tesisatı, topraklama ve paratoner tesisatı kontrolleri yılda en az 1 kez (1 yıl) yapılır.",
        "2 yıl çok tehlikeli sınıfta risk değerlendirmesi yenileme süresidir; elektrik periyodik kontrolü 1 yılı aşamaz.",
        "5 yıl binaların enerji kimlik veya bazı statik denetimlerinde geçerlidir; elektrik için çok uzundur."
      ]
    },
    {
      q: "Kalp üzerinden geçen elektrik akımında hangi temas yolu kalp kasından geçen akım oranı (kalp faktörü) açısından EN TEHLİKELİ yollardan biridir?",
      options: [
        "Sağ ayak - Sol ayak",
        "Sol el - Sağ el veya Sol el - İki ayak",
        "Sağ el parmak ucu - Sağ dirsek",
        "Sol diz - Sol ayak bileği",
        "Sadece sağ elin dış yüzeyi"
      ],
      answer: 1,
      explanation: "Sol el - ayaklar veya elden ele geçen akım doğrudan göğüs kafesini ve kalp eksenini katettiği için ventriküler fibrilasyon riski en yüksek akım yoludur.",
      optionExplanations: [
        "Sağ ayak - sol ayak (adım gerilimi yolu) kalpten uzakta alt ekstremiteden geçtiği için kalp faktörü (~0,04) çok daha düşüktür.",
        "DOĞRU: Sol el - sağ el veya sol el - ayaklar arası yol doğrudan kalbin üzerinden geçtiği için fibrilasyon riski en yüksektir.",
        "Akım sadece sağ ön koldan geçer, göğüs kafesine uğramadığı için yerel yanık/kasılma yapar.",
        "Akım sadece alt bacakta kalır, kalp üzerinden geçmez.",
        "Lokal temas sadece deri yanığı oluşturur, kalp eksenini kesmez."
      ]
    },
    {
      q: "Aşağıdakilerden hangisi elektrikte 'Doğrudan Dokunma'ya (normal işletme şartlarında gerilim altında bulunan aktif kısımlara temasa) karşı alınan koruma önlemlerinden biridir?",
      options: [
        "Aktif bölümlerin yalıtılması, en az IP2X muhafaza içine alınması ve engel konulması",
        "Cihaz metal gövdelerinin koruma topraklama barasına bağlanması",
        "Metal gövdeler arasında potansiyel dengeleyici eşpotansiyel kuşaklama yapılması",
        "Besleme hattına 300 mA yangın koruma rölesi konularak gövde kaçağının beklenmesi",
        "Elektrik motoru gövdesinin nötr hattına irtibatlandırılması (Sıfırlama)"
      ],
      answer: 0,
      explanation: "Doğrudan dokunmaya karşı koruma; enerjili iletkenlerin yalıtılması, parmak girmeyecek (IP2X) pano/muhafaza içine alınması ve ulaşılamayacak uzaklığa konulması ile sağlanır.",
      optionExplanations: [
        "DOĞRU: Aktif enerjili kısımların izole edilmesi, kilitli pano/muhafaza içine alınması doğrudan dokunmayı fiziksel olarak engeller.",
        "Metal gövdelerin koruma topraklamasına bağlanması 'dolaylı dokunmaya' karşı bir önlemdir.",
        "Eşpotansiyel kuşaklama adımla dokunma gerilimlerini eşitleyen dolaylı dokunma korumasıdır.",
        "300 mA röle dolaylı dokunma ve yangın koruma içindir, doğrudan temas anında insanı koruyamaz.",
        "Sıfırlama dolaylı dokunma için geçmişte kullanılan güvensiz bir yöntemdir; doğrudan dokunmayı önlemez."
      ]
    },
    {
      q: "Yüksek gerilim (YG) hücrelerinde ve enerji nakil hatlarında gerilim kesildikten sonra 4. güvenlik kuralı olarak 'Topraklama ve Kısa Devre Etme' işleminin yapılmasının temel amacı nedir?",
      options: [
        "Şebekenin güç faktörünü (Cos φ) düzelterek reaktif enerji akışını dengelemek",
        "Hatta kalan kapasitif artık yükü boşaltmak, paralel hatlardan indüklenen gerilimi ve olası ters beslemede kısa devre akımını toprağa akıtarak koruma rölelerini açtırmak",
        "Transformatör sargılarındaki artık mıknatisiyeti yok ederek boşta çalışma kayıplarını gidermek",
        "Faz-toprak empedansını artırarak şebekedeki harmonik gerilim dalgalanmalarını sınırlamak",
        "Yalnızca nötr hattındaki 3. harmonik akımları filtrelemek"
      ],
      answer: 1,
      explanation: "Topraklama ve kısa devre etme işlemi; kablolardaki statik/kapasitif yükü deşarj eder, paralel hatlardan indüklenen gerilimi sıfırlar ve hat yanlışlıkla enerjilenirse kesiciyi hemen açtırarak çalışanı korur.",
      optionExplanations: [
        "Cos φ düzeltmesi kompanzasyon sistemlerinin görevidir; iş güvenliği topraklamasıyla ilgisi yoktur.",
        "DOĞRU: Kapasitif kalıntı yükü boşaltmak, indüksiyon gerilimini önlemek ve ters besleme/yanlış enerjilenmeye karşı tam koruma sağlamak için yapılır.",
        "Sargılardaki artık mıknatisiyetin güvenlik topraklaması ve kısa devre işlemiyle ilgisi yoktur.",
        "Empedans artırılmaz; aksine arıza akımını güvenle toprağa akıtacak düşük dirençli yol oluşturulur.",
        "Harmonik filtreleme güç kalitesi konusudur; can güvenliği kuralı değildir."
      ]
    },
    {
      q: "Kaçak Akım Rölesi (RCD / Artık Akım Anahtarı) çalışma prensibi olarak devredeki hangi durumu algılayarak enerjiyi keser?",
      options: [
        "Faz iletkeninden giden akım ile nötr iletkeninden dönen akım arasındaki vektörel farkı (toroid akım trafosu ile)",
        "Devreden geçen toplam akımın sigorta anma değerini (In) aşmasını",
        "Faz ile nötr arasındaki gerilim düşümünün %3 yönetmelik limitini aşmasını",
        "Kısa devre anında oluşan elektromanyetik alanın bimetal şeridi bükmesini",
        "Şebeke frekansının 50 Hz nominal değerinden sapma miktarını"
      ],
      answer: 0,
      explanation: "Kaçak akım rölesi içindeki toroidal akım trafosu, fazdan giren akım ile nötrden dönen akımı karşılaştırır. Vektörel fark 30 mA'i (veya 300 mA'i) aştığında toprağa/insana kaçak olduğunu anlayıp devreyi açar.",
      optionExplanations: [
        "DOĞRU: Kirchhoff akım kanununa göre fazdan giden ve nötrden dönen akım vektörel toplamı sıfır olmalıdır; kaçak varsa toroid transformatör dengesizliği algılayarak devreyi keser.",
        "Toplam akımın anma değerini aşması aşırı yüktür ve otomatik sigortanın (MCB) görevidir.",
        "Gerilim düşümü kablo kesiti seçimiyle ilgilidir; RCD voltaj düşümünü değil artık akımı algılar.",
        "Bimetal şerit termik sigortalarda ısınmayla aşırı akımı keser; RCD çalışma prensibi değildir.",
        "Frekans sapması frekans koruma rölelerinin görevidir; kaçak akım algılamasıyla ilgisi yoktur."
      ]
    },
    {
      q: "Elektrik panolarının önünde çalışırken olası kaçaklara karşı zemin yalıtımını sağlamak amacıyla pano önüne serilmesi zorunlu olan yalıtkan malzeme nedir?",
      options: [
        "Galvanizli çelik topraklama sacı",
        "TS EN 61111 standartlarına uygun dielektrik Yalıtkan Paspas (İzole Halı) veya yalıtkan platform",
        "Emprenye edilmiş nem tutucu ahşap ızgara",
        "Statik yük boşaltıcı iletken vinil rulo",
        "Eşpotansiyel bakır örgülü ızgara"
      ],
      answer: 1,
      explanation: "Elektrik panoları önünde operatörün üzerinden toprağa akım geçişini engellemek için pano gerilim sınıfına uygun dielektrik 'Yalıtkan Paspas (TS EN 61111)' bulundurulması zorunludur.",
      optionExplanations: [
        "Galvaniz sac mükemmel bir iletkendir; çalışanı doğrudan toprağa irtibatlandırarak çarpılma şiddetini artırır.",
        "DOĞRU: Pano önünde ayak-toprak temas direncini sonsuza yaklaştıran standartlara uygun izole halı/yalıtkan paspas kullanılır.",
        "Ahşap ızgaralar nem ve kir tuttuğunda iletken hale gelir; yüksek dielektrik dayanım garantisi vermez.",
        "İletken zemin kaplamaları statik yük boşaltımı içindir, şebeke geriliminde çalışan için ölümcül iletkenlik oluşturur.",
        "Bakır ızgara potansiyel eşitleme içindir; zemin yalıtımı sağlamaz."
      ]
    },
    {
      q: "Elektrik tesislerinde kullanılan 'Sigorta' (Minyatür Devre Kesici / Otomat) ile 'Kaçak Akım Rölesi' arasındaki görev farkı nedir?",
      options: [
        "Sigorta aşırı akım ve kısa devreye karşı kablo/tesisatı korur; Kaçak Akım Rölesi ise toprağa sızan artık akımları algılayarak insan hayatını ve yangını korur",
        "Sigorta doğrudan dokunmada insanı korur; Kaçak akım rölesi ise sadece trafo yıldız noktasını korur",
        "Sigorta gövdeye kaçak olduğunda devreyi milisaniyede açar; Kaçak akım rölesi ise sadece metalik kısa devre akımını keser",
        "Kaçak akım rölesi kabloların aşırı yükte ısınmasını önler; Sigorta ise doğrudan insan kalbini ventriküler fibrilasyondan korur",
        "İkisi tamamen aynı işlevi görür; panoda otomatik sigorta varsa kaçak akım rölesi kullanılması mevzuatta ihtiyaridir"
      ],
      answer: 0,
      explanation: "Sigortalar (örneğin 16 A) kablonun aşırı ısınıp yanmasını ve kısa devreyi önler ancak 30 mA'lik ölümcül insan çarpılma akımında açmaz. İnsan hayatını 30 mA Kaçak Akım Rölesi korur.",
      optionExplanations: [
        "DOĞRU: Sigorta amper düzeyindeki (10A, 16A vb.) aşırı yük ve kısa devreyi keser; RCD ise miliamper (30 mA) düzeyindeki kaçak akımı keserek insanı korur.",
        "Sigortanın doğrudan dokunmada insanı koruduğu iddiası yanlıştır; 16 Amperlik sigorta 30 mA'de devreyi açamaz.",
        "Gövde kaçağında milisaniyede devreyi açan eleman sigorta değil kaçak akım rölesidir.",
        "Ters verilmiştir; kablo aşırı ısınmasını sigorta önler, kalbi ventriküler fibrilasyondan 30 mA RCD korur.",
        "İki ekipmanın koruma prensipleri tamamen farklıdır ve panolarda her ikisinin de bulunması zorunludur."
      ]
    },
    {
      q: "Akaryakıt istasyonları, boyahaneler, un/kömür değirmenleri ve kimyasal tanker dolum tesisleri gibi patlayıcı ortam (Ex-proof) bulunan yerlerde statik elektrik birikimini önlemek için hangi teknik önlem alınır?",
      options: [
        "Tüm metal aksamın, boru hatlarının ve dolum aparatlarının eşpotansiyel baraya topraklanması ve antistatik ekipman kullanımı",
        "Statik elektrik deşarjını hızlandırmak için ortam bağıl neminin %20'nin altına düşürülmesi",
        "Boru hatlarındaki akışkan transfer hızının sürtünmeyi önlemesi amacıyla en az 10 m/s üzerine çıkarılması",
        "Metal dolum tabancasının tanker gövdesinden kauçuk contalarla elektriksel olarak izole edilmesi",
        "Çalışanlara sürtünmeyle kıvılcım çıkarmaması için %100 sentetik polyester kıyafetler giydirilmesi"
      ],
      answer: 0,
      explanation: "Sıvı ve toz akışı sırasında sürtünmeyle oluşan statik elektrik yükünün kıvılcım çıkararak patlama yapmasını önlemek için statik topraklama, eşpotansiyel bağlama ve antistatik malzeme kullanımı şarttır.",
      optionExplanations: [
        "DOĞRU: Statik yüklerin kıvılcım oluşturmadan toprağa akması için tanker/metal aksamlar topraklanır ve antistatik donanım kullanılır.",
        "Havanın kurutulması (%20 altı bağıl nem) statik yük birikimini katlayarak patlama riskini artırır; nem %50-60 civarında tutulmalıdır.",
        "Akışkan hızı arttıkça boru cidarındaki sürtünme ve statik yük üretimi katlanarak artar; akış hızları standart limitlerde sınırlandırılmalıdır.",
        "İzole etmek yük birikimine neden olur; aksine tabanca ile tanker gövdesi elektriksel olarak köprülenmelidir.",
        "Sentetik polyester kıyafetler en yüksek triboelektrik (sürtünme) statik yükü üretir; patlayıcı ortamda kesinlikle yasaktır."
      ]
    },
    {
      q: "Elektrik panolarında gerçekleştirilen enerjili veya yakın çalışmalarda meydana gelebilecek 'Ark Patlaması (Arc Flash)' sırasında ortaya çıkan tehlikeler arasında aşağıdakilerden hangisi YER ALMAZ?",
      options: [
        "15.000 - 20.000 °C'ye ulaşan plazma ark sıcaklığı ve ölümcül termal yanıklar",
        "Bakır ve metallerin anında buharlaşarak binlerce kat genleşmesiyle oluşan şiddetli basınç dalgası (Arc Blast)",
        "Yoğun ultraviyole (UV) ve parlama ışını nedeniyle gözde fotokeratit ve kalıcı retina hasarı",
        "140-165 dB seviyesine ulaşan patlama şok dalgasıyla kulak zarı yırtılması ve akciğer blast travması",
        "Ortamdaki ark iyonizasyonunun şebeke gerilimini tüketerek çevredeki transformatör yağlarında donma ve kristalleşme oluşturması"
      ],
      answer: 4,
      explanation: "Ark patlaması (Arc Flash); aşırı yüksek sıcaklık (20.000 °C), erimiş metal sıçraması, basınç şok dalgası, yoğun UV ışık ve yüksek desibelli darbe gürültüsü oluşturur; soğuma veya donma oluşturmaz.",
      optionExplanations: [
        "Ark merkezinde sıcaklık güneş yüzeyinden bile yüksek derecelere (20.000 °C) ulaşarak 3. ve 4. derece ölümcül yanıklar oluşturur.",
        "Bakırın aniden katıdan gaza geçip buharlaşmasıyla hacmi 67.000 kat genleşir ve yıkıcı basınç şok dalgası yaratır.",
        "Yoğun ultraviyole ve görünür ışık parlaması retinada ve korneada kalıcı körlüğe varan hasar bırakır.",
        "Patlama basıncı 140-165 dB darbe gürültüsü oluşturarak kulak zarını yırtabilir.",
        "DOĞRU (YER ALMAZ): Ark patlaması dondurucu soğuk ve kristalleşme değil, binlerce derecelik plazma ateşi ve aşırı termal radyasyon üretir."
      ]
    },
    {
      q: "Yüksek gerilim (YG) enerji nakil hatlarının yakınında vinç, ekskavatör veya beton pompası ile çalışırken İSG açısından uyulması gereken en kritik kural nedir?",
      options: [
        "Vinç bomu ile iletkenler arasında gerilime uygun emniyet mesafesi (en az 3-5 m) korunmalı ve işaretçi nezaretinde çalışılmalıdır",
        "Vinç gövdesi seyyar bir bakır iletkenle havai hattın faz tellerinden birine bağlanarak potansiyel eşitlenmelidir",
        "Vinç bomunun yüksekliği hat seviyesini aştığında hatta enerji kesilmeden yalnızca vinç lastiklerine izole kılıf takılması yeterlidir",
        "Hat altından geçişlerde bom yere paralel indirilse dahi emniyet mesafesi kuralı aranmaz",
        "Rüzgarlı havalarda hat tellerinin salınım miktarı dikkate alınmaksızın yalnızca statik dikey mesafe esas alınmalıdır"
      ],
      answer: 0,
      explanation: "Yüksek gerilim hatlarında elektriğin çarpması için fiziksel temas şart değildir; emniyet (yaklaşma) mesafesine girildiğinde havadan ark atlaması gerçekleşir. Bu nedenle gerilime uygun yaklaşma mesafesi ve işaretçi zorunludur.",
      optionExplanations: [
        "DOĞRU: YG hatlarında gerilim kademesine göre belirlenen emniyet mesafesine (en az 3-5 metre) yaklaşıldığında temas olmadan da ark atlar; işaretçi kılavuzluğu zorunludur.",
        "Vinç gövdesini faz teline bağlamak vinci doğrudan enerjilendirerek operatörü ve çevredeki herkesi anında öldürür.",
        "Lastik kılıfı yüksek gerilim ark atlamasına karşı koruma sağlamaz; kritik olan hatta emniyet mesafesinin korunması veya hattın enerjisinin kestirilmesidir.",
        "Bom yatayda olsa bile hat telleriyle arasındaki yaklaşma emniyet mesafesi kuralı her zaman geçerlidir.",
        "Rüzgarlı havalarda tellerin salınımı yaklaşma mesafesini daraltır; salınım mutlaka hesaba katılmalıdır."
      ]
    },
    {
      q: "Elektrik tesisatlarında 'Sıfırlama' (TN-C sisteminde gövdenin nötr hattına bağlanması) uygulaması ile ilgili güvenlik açısından hangi risk söz konusudur?",
      options: [
        "Nötr hattının kopması veya temassızlığı durumunda cihazların metal gövdelerine doğrudan faz gerilimi binerek ölümcül şok yaratması",
        "Sıfırlama yapılan devrede aşırı akım sigortasının kısa devrede hiçbir zaman atmaması",
        "Dağıtım transformatörünün yıldız noktasında aşırı ısınma oluşturarak şebeke frekansını bozması",
        "Nötr hattındaki akımın faz iletkeninden ters yönde akarak sayacın ters dönmesine yol açması",
        "Kaçak akım rölelerinin sıfırlama yapılan hatlarda hassasiyetini kaybederek hiç açma yapamaması"
      ],
      answer: 0,
      explanation: "Klasik sıfırlamada (PEN ayrılmamış TN-C), nötr iletkeni şebekede bir yerden koptuğunda fazdan gelen akım cihaz yükü üzerinden geçerek bağlı olduğu tüm metal gövdeleri doğrudan 220 V faz gerilimine maruz bırakır.",
      optionExplanations: [
        "DOĞRU: Nötr hattı koptuğunda (PEN kopması) gövdeye bağlı nötr üzerinden tüm metal şasiye 220 V gerilim biner ve dokunan herkes için ölümcül şok yaratır.",
        "Sigorta metalik kısa devre anında atabilir; sıfırlamanın asıl ölümcül riski nötr kopması durumundaki gövde gerilimidir.",
        "Frekans şebeke alternatörünün devir sayısıyla belirlenir; sıfırlamayla frekans bozulmaz.",
        "Sayaç yönü veya tüketim sıfırlamanın temel güvenlik riski değildir.",
        "Sıfırlama yapılan devrede RCD nötr-toprak birleşimi nedeniyle dengesizlik algılayıp tutmaz; ancak asıl hayati tehlike nötr kopmasındaki gövde gerilimidir."
      ]
    },
    {
      q: "Şantiyelerde ve açık alanlarda kullanılan seyyar uzatma kabloları ve elektrikli el aletleri ile ilgili aşağıdaki uygulamalardan hangisi DOĞRUDUR?",
      options: [
        "Şantiye koşullarında hafif hizmet tipi PVC kılıflı (H05VV-F) kablolar doğrudan zemin üzerinden geçirilerek 300 mA yangın koruma rölesine bağlanmalıdır",
        "Kablo boyu 20 metreyi aştığında topraklama hattı iptal edilerek pano nötr barası üzerinden sıfırlama yapılmalıdır",
        "Açık alan ve şantiyelerde ağır mekanik ve neme dayanıklı (H07RN-F kauçuk kılıflı) kablolar kullanılmalı, askıya alınmalı veya kablo köprüsüyle korunarak 30 mA RCD'den beslenmelidir",
        "Çift yalıtımlı (Sınıf II) el aletleri kullanıldığında uzatma kablosunun koruma topraklamasız (iki iletkenli) seçilmesi mevzuata uygundur",
        "Araç geçiş güzergahlarında kablolar zemine serilip üzerine kalas veya çakıl dökülerek mekanik koruma sağlanmalıdır"
      ],
      answer: 2,
      explanation: "Şantiyelerde seyyar kablolar ağır mekanik darbelere ve suya dayanıklı H07RN-F kauçuk kılıflı olmalı, zemin üzerinde ezilmeye terk edilmemeli (askıya alınmalı veya kablo rampasıyla korunmalı) ve mutlaka 30 mA hayat koruma kaçak akım rölesinden beslenmelidir.",
      optionExplanations: [
        "PVC kılıflı (H05VV-F) hafif kablolar şantiye mekanik şartlarına uygun değildir; zemin üzerinden korumasız geçirilemez ve can güvenliği için 30 mA röle zorunludur.",
        "Topraklama hiçbir zaman iptal edilemez ve şantiye panolarında seyyar hatlar üzerinden sıfırlama yapılması kesinlikle yasaktır.",
        "DOĞRU: Ağır hizmet kauçuk kılıflı (H07RN-F) kablolar tercih edilmeli, havadan askıya alınmalı veya araç geçişlerinde koruyucu köprü kullanılmalı ve 30 mA RCD devrede olmalıdır.",
        "El aletinin kendisi Sınıf II olsa bile, şantiyedeki seyyar priz kombinasyon kutularına giden uzatma kabloları topraklama iletkenli (3 damarlı) olmak zorundadır.",
        "Kalas veya çakıl dökmek kabloyu araç ağırlığının ezici basıncından korumaz, aksine taş batmasına ve ezilmeye yol açar; özel kablo koruma köprüleri (rampaları) kullanılmalıdır."
      ]
    }
  ],
  fillQuestions: [
    {
    q: "M.Ö. 6. yüzyılda kehribarın kumaşa sürtüldüğünde samanları çektiğini keşfederek elektrik tarihinin başlangıcı kabul edilen Antik Yunan filozofu ________'tir.",
    answers: ["thales", "tales"],
    hint: "Kehribar sürtünme elektriğini ilk gözlemleyen Miletli filozof",
    explanation: "Miletli Thales, kehribarın (Yunanca elektron) sürtünme elektriği özelliğini keşfeden ilk düşünürdür."
  },
    {
    q: "1753 yılında St. Petersburg'da paratoner deneyi yaparken başına top yıldırım isabet etmesi sonucu hayatını kaybeden tarihteki ilk elektrik kurbanı bilim insanı Georg Wilhelm ________'dir.",
    answers: ["richmann", "rihman"],
    hint: "Tarihteki ilk elektrik kurbanı bilim insanı",
    explanation: "Georg Wilhelm Richmann, yıldırım deneyi sırasında top yıldırım çarpması sonucu hayatını kaybeden ilk bilim insanıdır."
  },
    {
    q: "Türkiye'de elektrik enerjisiyle aydınlatılan ilk yerleşim yeri 1902 yılında Berdan Çayı üzerine kurulan hidroelektrik santraliyle Mersin'in ________ ilçesidir.",
    answers: ["tarsus"],
    hint: "Türkiye'de ilk elektriğin geldiği ilçe (Mersin)",
    explanation: "1902 yılında Tarsus'ta Berdan Çayı üzerinde kurulan su değirmeni santraliyle Türkiye'de ilk elektrik enerjisi üretilmiştir."
  },
    {
    q: "Elektrik akımının bir iletken veya insan dokusu üzerinden geçerken elektrik enerjisini ısı enerjisine dönüştürmesi olayına ________ kanunu (ısınma prensibi) denir.",
    answers: ["joule", "jul"],
    hint: "Isınma kanunu (Q = I²·R·t)",
    explanation: "Joule kanununa göre iletkenden geçen akımın karesi, direnç ve zamanın çarpımı kadar ısı açığa çıkar."
  },
    {
    q: "1831 yılında elektromanyetik indüksiyon prensibini bularak modern jeneratörlerin temelini atan ve elektrostatik zırhlama kafesini icat eden İngiliz fizikçi Michael ________'dır.",
    answers: ["faraday"],
    hint: "İndüksiyon ve kafes korumasını bulan fizikçi",
    explanation: "Michael Faraday elektromanyetik indüksiyonu ve iletken kafeslerle elektrostatik korumayı bulan fizikçidir."
  },
    {
      q: "Yere düşen yüksek gerilim hattı çevresinde toprağa yayılan akım nedeniyle kişinin iki ayağı arasında oluşan potansiyel farkına ________ gerilimi denir.",
      answers: ["adım", "adim"],
      hint: "Bölgeden ayakları birleştirerek uzaklaşmayı gerektiren gerilim türü",
      explanation: "Toprağa yayılan akımın oluşturduğu eşpotansiyel halkalar arasında iki ayak açıklığında oluşan gerilim farkına Adım Gerilimi denir."
    },
    {
      q: "Alternatif akımda yaklaşık 10-15 mA seviyesinde kasların kasılarak kişinin enerjili iletkeni elinden bırakamadığı akım değerine ________ eşiği denir.",
      answers: ["tutma", "bırakamama", "birakamama"],
      hint: "Let-go threshold karşılığı",
      explanation: "10-15 mA seviyesinde el ve kol kaslarında tetanik kasılma başladığı için kişi iletkeni bırakamaz; buna tutma (bırakamama) eşiği denir."
    },
    {
      q: "Gerilimsiz çalışmada 5 Temel Güvenlik Kuralının 1. adımı 'Enerjiyi her yönden kesmek', 3. adımı ise kontrol kalemi/dedektör ile ________ kontrol etmektir.",
      answers: ["gerilimsizliği", "gerilimsizligi", "enerjisizliği"],
      hint: "Ortada gerilim olup olmadığının teyidi",
      explanation: "Enerji kesilip kilitlendikten sonra 3. adımda çift kutuplu gerilim dedektörü ile gerilimsizlik mutlaka kontrol edilmelidir."
    },
    {
      q: "Normalde gerilim altında bulunmayan metal gövdelerin (pano gövdesi, makine şasisi) yalıtım hatası sonucu enerjilenmesiyle oluşan temasa ________ dokunma denir.",
      answers: ["dolaylı", "dolayli"],
      hint: "Doğrudan dokunmanın zıttı olan temas türü",
      explanation: "Aktif iletkene temasa 'doğrudan dokunma', arıza sonucu enerjilenen metal gövdeye temasa ise 'dolaylı dokunma' denir."
    },
    {
      q: "Ohm Kanunu'na göre bir devreden geçen elektrik akımı (I), uygulanan gerilim (V) ile doğru orantılı, ________ (R) ile ters orantılıdır.",
      answers: ["direnç", "direnc"],
      hint: "Birimi Ohm olan büyüklük",
      explanation: "I = V / R bağıntısına göre vücut direnci (R) düştükçe (ıslak el vb.) vücuttan geçen akım (I) tehlikeli şekilde artar."
    },
    {
      q: "Elektrik tesislerinde izolasyon hatalarından kaynaklanan arkları ve elektrik yangınlarını önlemek için kullanılan yangın koruma kaçak akım rölesinin açma akımı ________ mA'dir.",
      answers: ["300", "üç yüz", "uc yuz"],
      hint: "Yangın koruma eşiği (mA)",
      explanation: "300 mA kaçak akım rölesi ana panolarda izolasyon kaçaklarının ısınarak yangın çıkarmasını önlemek için kullanılır."
    },
    {
      q: "Elektrik tesisatı, topraklama tesisatı ve paratoner (yıldırımdan korunma) tesisatının periyodik kontrolleri yılda en az ________ kez yapılmalıdır.",
      answers: ["1", "bir"],
      hint: "Yıllık kontrol sayısı",
      explanation: "İş Ekipmanları Yönetmeliği'ne göre elektrik, topraklama ve paratoner kontrolleri azami 1 yıl periyotla yapılır."
    },
    {
      q: "Kazan içi, metal tank içi gibi çok iletken ve dar yerlerde kullanılan el lambalarında ________ Volt (veya azami 42 V) küçük güvenlik gerilimi kullanılmalıdır.",
      answers: ["24", "42", "yirmi dört"],
      hint: "Kazan içi güvenli aydınlatma gerilimi (V)",
      explanation: "İletken dar hacimlerde 24 V (en fazla 42 V) güvenlik transformatörlü küçük gerilim kullanılması zorunludur."
    },
    {
      q: "Enerjili elektrik panoları ve ekipmanlarında çıkan yangınlarda elektriği ilettiği için kesinlikle ________ kullanılmamalıdır.",
      answers: ["su", "köpük", "kopuk"],
      hint: "İletken sıvı söndürücü",
      explanation: "Su elektriği ilettiği için enerjili elektrik yangınlarında CO2 veya KKT kullanılır, su kesinlikle kullanılmaz."
    },
    {
      q: "Elektrik panolarının önünde çalışırken yer ile teması izole etmek amacıyla zemine standartlara uygun yalıtkan ________ serilmelidir.",
      answers: ["paspas", "halı", "hali"],
      hint: "Pano önü zemin yalıtım malzemesi",
      explanation: "Pano önlerinde operatörün toprağa akım tamamlamasını önlemek için dielektrik yalıtkan paspas (izole halı) bulundurulur."
    }
  ]
};
