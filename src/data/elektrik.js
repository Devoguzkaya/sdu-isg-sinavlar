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
        "Gerilimi her yönden kes - Tekrar gerilim verilmesini önle (Kilitleme/Etiketleme)",
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
        "Kazazedeyi çıplak elle çekip akımdan kurtarmak",
        "Kazazedenin üstüne su dökmek",
        "Önce kendi güvenliğini sağlayarak elektrik enerjisini (şalteri/fişi) kesmek",
        "Derhal kalp masajına başlamak (iletken üzerindeyken)",
        "Kazazedeye ağzından su içirmek"
      ],
      answer: 2,
      explanation: "Elektrik kazalarında altın kural önce kurtarıcının kendi güvenliğidir: Şalter/sigorta kapatılarak enerji kesilmeli, kesilemiyorsa kuru ve yalıtkan bir cisimle temas ayrılmalıdır.",
      optionExplanations: [
        "Kazazedeye çıplak elle dokunmak kurtarıcının da elektrik akımına kapılmasına ve ikinci bir kazazedeye dönüşmesine neden olur.",
        "Su elektriği ilettiği için hem kazazedeye hem kurtarıcıya ölümcül elektrik akımı geçişine sebep olur.",
        "DOĞRU: İlk yardımın 1. adımı 'Koruma'dır; önce şalter/fiş çekilerek enerji kesilir veya yalıtkan cisimle (kuru tahta/plastik) temas ayrılır.",
        "Kazazede halen elektrik akımı altındayken kalp masajı yapmak kurtarıcıyı da akıma kapılmasına yol açar.",
        "Elektrik çarpması vakalarında ve bilinci kapalı/yarı kapalı hastalarda ağızdan su/yiyecek verilmesi soluk borusu tıkanmasına yol açar."
      ]
    },
    {
      q: "Bir fabrikada bakım teknisyeni panoda çalışırken başka bir çalışanın şalteri yanlışlıkla kaldırması sonucu iş kazası meydana gelmiştir. Bu kazayı önlemek için uygulanması gereken temel prosedür hangisidir?",
      options: [
        "LOTO (Lockout / Tagout - Kilitleme ve Etiketleme)",
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
      options: ["24 V (veya 12-42 V arası küçük gerilim)", "110 V", "220 V", "380 V", "1000 V"],
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
        "Koruma topraklaması ve Kaçak Akım Rölesi (otomatik açma) birlikte kullanımı",
        "Sadece uyarı levhası asmak",
        "İletken kesitini inceltmek",
        "Sigorta değerini büyütmek",
        "Faz sayısını artırmak"
      ],
      answer: 0,
      explanation: "Dolaylı dokunmaya karşı metal gövdelerin topraklanması (koruma topraklaması) ve hata akımını algılayıp devreyi hızla açan Kaçak Akım Rölesi (RCD) kullanımı esastır.",
      optionExplanations: [
        "DOĞRU: Metal gövdeye kaçak olduğunda akımın toprağa akması (koruma topraklaması) ve RCD'nin devreyi milisaniyeler içinde kesmesi en etkili korumadır.",
        "Uyarı levhası sadece idari/bilgilendirici bir önlemdir; gövde kaçağını ve çarpılmayı fiziksel olarak engellemez.",
        "İletken kesitini inceltmek kablonun aşırı ısınıp yangın çıkarmasına yol açar.",
        "Sigorta değerini büyütmek hata akımında devrenin açılmasını geciktirerek tehlikeyi büyütür.",
        "Faz sayısını artırmak güç ihtiyacına yöneliktir, dolaylı dokunma koruması sağlamaz."
      ]
    },
    {
      q: "Elektrik yangınlarında (enerjili ekipman yangınları) aşağıdaki söndürücülerden hangisi KESİNLİKLE KULLANILMAMALIDIR?",
      options: [
        "Karbondioksitli (CO2) söndürücü",
        "Kuru Kimyevi Tozlu (KKT) söndürücü",
        "Su ve sulu köpük (elektriği ilettiği için)",
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
      options: ["3 ayda bir", "6 ayda bir", "Yılda 1 (1 Yıl)", "2 yılda bir", "5 yılda bir"],
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
        "Sol el - Sağ el veya Sol el - İki ayak (Göğüs/Kalp hattını doğrudan geçen yol)",
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
        "Aktif bölümlerin yalıtılması (izolasyon), muhafaza içine alınması (IP2X) ve engel/uzaklık konulması",
        "Cihazın metal gövdesinin boyanması",
        "Çalışana pamuklu iş eldiveni verilmesi",
        "Topraklama direncinin yükseltilmesi",
        "Sadece yangın tüpü bulundurulması"
      ],
      answer: 0,
      explanation: "Doğrudan dokunmaya karşı koruma; enerjili iletkenlerin yalıtılması, parmak girmeyecek (IP2X) pano/muhafaza içine alınması ve ulaşılamayacak uzaklığa konulması ile sağlanır.",
      optionExplanations: [
        "DOĞRU: Aktif enerjili kısımların izole edilmesi, kilitli pano/muhafaza içine alınması doğrudan dokunmayı fiziksel olarak engeller.",
        "Metal gövdenin boyanması yalıtım sayılmaz ve doğrudan aktif iletkene teması önlemez.",
        "Pamuklu eldiven elektriği (özellikle terli iken) iletir; elektrikte sadece TSE/EN 60903 standartlı izole eldiven kullanılır.",
        "Topraklama direncinin yükseltilmesi tehlikelidir; aksine topraklama direnci mümkün olduğunca düşük olmalıdır.",
        "Yangın tüpü yangın çıktıktan sonraki reaktif müdahale aracıdır, elektrik çarpmasını önlemez."
      ]
    },
    {
      q: "Yüksek gerilim (YG) hücrelerinde ve enerji nakil hatlarında gerilim kesildikten sonra 4. güvenlik kuralı olarak 'Topraklama ve Kısa Devre Etme' işleminin yapılmasının temel amacı nedir?",
      options: [
        "Sayacın daha az yazmasını sağlamak",
        "Hatta kalan kapasitif yükü boşaltmak, komşu hatlardan indüklenen gerilimi veya yanlışlıkla tekrar enerji verilmesi durumunda akımı toprağa akıtarak çalışanı korumak",
        "Kabloların rengini değiştirmek",
        "Trafo gücünü artırmak",
        "Aydınlatmayı güçlendirmek"
      ],
      answer: 1,
      explanation: "Topraklama ve kısa devre etme işlemi; kablolardaki statik/kapasitif yükü deşarj eder, paralel hatlardan indüklenen gerilimi sıfırlar ve hat yanlışlıkla enerjilenirse kesiciyi వెంటనే açtırarak çalışanı korur.",
      optionExplanations: [
        "Topraklama ve kısa devre güvenlik amaçlıdır, elektrik sayacı veya tüketimle ilgisi yoktur.",
        "DOĞRU: Kapasitif kalıntı yükü boşaltmak, indüksiyon gerilimini önlemek ve ters besleme/yanlış enerjilenmeye karşı tam koruma sağlamak için yapılır.",
        "Kablo rengiyle hiçbir ilgisi yoktur.",
        "Trafo gücü tasarım parametresidir; kısa devre işlemi enerji kesikken güvenlik için yapılır.",
        "Aydınlatma ile ilgisi yoktur."
      ]
    },
    {
      q: "Kaçak Akım Rölesi (RCD / Artık Akım Anahtarı) çalışma prensibi olarak devredeki hangi durumu algılayarak enerjiyi keser?",
      options: [
        "Faz iletkeninden giden akım ile nötr iletkeninden dönen akım arasındaki farkı (toprağa akan kaçak akımı)",
        "Sadece ortam sıcaklığının artışını",
        "Şebeke frekansının 50 Hz olmasını",
        "Prizdeki toplam güç tüketiminin az olmasını",
        "Faz ile nötr arasındaki gerilimin 220 V olmasını"
      ],
      answer: 0,
      explanation: "Kaçak akım rölesi içindeki toroidal akım trafosu, fazdan giren akım ile nötrden dönen akımı karşılaştırır. Fark 30 mA'i (veya 300 mA'i) aştığında toprağa/insana kaçak olduğunu anlayıp devreyi açar.",
      optionExplanations: [
        "DOĞRU: Kirchhoff akım kanununa göre fazdan giden ve nötrden dönen akım eşit olmalıdır; fark oluşursa (insan veya gövde üzerinden toprağa kaçak varsa) RCD devreyi keser.",
        "Sıcaklık artışını (aşırı yükü) algılayan eleman kaçak akım rölesi değil, termik sigortadır.",
        "50 Hz normal şebeke frekansıdır, arıza durumu değildir.",
        "Güç tüketiminin az olması normal bir işletme durumudur.",
        "220 V normal şebeke gerilimidir; RCD gerilimi değil gelen-giden akım farkını ölçer."
      ]
    },
    {
      q: "Elektrik panolarının önünde çalışırken olası kaçaklara karşı zemin yalıtımını sağlamak amacıyla pano önüne serilmesi zorunlu olan yalıtkan malzeme nedir?",
      options: [
        "Çelik sac levha",
        "Standartlara uygun Yalıtkan Paspas (İzole Halı) veya yalıtkan sehpa",
        "Islak ahşap palet",
        "Alüminyum folyo",
        "Bakır ızgara"
      ],
      answer: 1,
      explanation: "Elektrik panoları önünde operatörün üzerinden toprağa akım geçişini engellemek için pano gerilim sınıfına uygun dielektrik 'Yalıtkan Paspas (İzole Halı)' bulundurulması zorunludur.",
      optionExplanations: [
        "Çelik sac mükemmel bir iletkendir; çalışanı doğrudan toprağa irtibatlandırarak çarpılma şiddetini artırır.",
        "DOĞRU: Pano önünde ayak-toprak temas direncini sonsuza yaklaştıran standartlara uygun izole halı/yalıtkan paspas kullanılır.",
        "Islak ahşap suyu emdiği için elektrik iletkeni haline gelir ve koruma sağlamaz.",
        "Alüminyum yüksek iletkenliğe sahip bir metaldir, yalıtkan değildir.",
        "Bakır ızgara eşpotansiyel topraklama elemanıdır, yalıtkan paspas yerine geçmez."
      ]
    },
    {
      q: "Elektrik tesislerinde kullanılan 'Sigorta' (Minyatür Devre Kesici / Otomat) ile 'Kaçak Akım Rölesi' arasındaki görev farkı nedir?",
      options: [
        "Sigorta aşırı akım ve kısa devreye karşı tesisatı/kabloyu korur; Kaçak Akım Rölesi ise toprağa akan sızıntı akımlarına karşı insan hayatını ve yangını korur",
        "Sigorta insanı korur, kaçak akım rölesi sadece lambaları korur",
        "İkisi de tamamen aynı işi yapar, biri varsa diğerine gerek yoktur",
        "Sigorta sadece doğru akımda çalışır",
        "Kaçak akım rölesi kısa devrede çalışır, kaçakta çalışmaz"
      ],
      answer: 0,
      explanation: "Sigortalar (örneğin 16 A) kablonun aşırı ısınıp yanmasını ve kısa devreyi önler ancak 30 mA'lik ölümcül insan çarpılma akımında açmaz. İnsan hayatını 30 mA Kaçak Akım Rölesi korur.",
      optionExplanations: [
        "DOĞRU: Sigorta amper düzeyindeki (10A, 16A vb.) aşırı yük ve kısa devreyi keser; RCD ise miliamper (30 mA) düzeyindeki kaçak akımı keserek insanı korur.",
        "16 Amperlik (16.000 mA) bir sigorta insan vücudundan geçen 100-200 mA ölümcül akımı algılayıp kesemez.",
        "Görevleri farklı olduğu için birbirinin alternatifi değil tamamlayıcısıdır; her panoda ikisi birlikte bulunmalıdır.",
        "Sigortalar hem AC hem DC tesisatlarda kullanılır.",
        "Kaçak akım rölesinin asli görevi faz-toprak kaçağını algılamaktır."
      ]
    },
    {
      q: "Akaryakıt istasyonları, boyahaneler, un/kömür değirmenleri ve kimyasal tanker dolum tesisleri gibi patlayıcı ortam (Ex-proof) bulunan yerlerde statik elektrik birikimini önlemek için hangi teknik önlem alınır?",
      options: [
        "Tüm metal gövdelerin ve dolum hortumlarının eşpotansiyel olarak topraklanması (anti-statik topraklama kelepçesi)",
        "Çalışanlara sentetik/naylon kıyafet giydirilmesi",
        "Ortam neminin sıfıra düşürülmesi",
        "Zeminin yalıtkan plastikle kaplanması",
        "Topraklama hattının iptal edilmesi"
      ],
      answer: 0,
      explanation: "Sıvı ve toz akışı sırasında sürtünmeyle oluşan statik elektrik yükünün kıvılcım (ark) çıkararak patlama yapmasını önlemek için statik topraklama ve eşpotansiyel bağlantı yapılır.",
      optionExplanations: [
        "DOĞRU: Statik yüklerin kıvılcım oluşturmadan toprağa akması için tanker/metal aksamlar topraklama pensesiyle topraklanır.",
        "Sentetik ve yünlü kıyafetler sürtünmeyle statik elektrik üretir; bu ortamlarda %100 pamuklu/antistatik kıyafet giyilir.",
        "Kuru hava statik elektrik birikimini artırır; bağıl nemin belirli bir seviyede (%50-60) tutulması statik yükü azaltır.",
        "Tam yalıtkan zemin çalışanın üzerinde statik yük birikmesine yol açar; antistatik/iletken zemin ve antistatik ayakkabı kullanılır.",
        "Topraklamanın iptali statik yükün birikip ilk temasta patlayıcı kıvılcım çıkarmasına neden olur."
      ]
    },
    {
      q: "Elektrik panolarında gerçekleştirilen enerjili veya yakın çalışmalarda meydana gelebilecek 'Ark Patlaması (Arc Flash)' sırasında ortaya çıkan tehlikeler arasında aşağıdakilerden hangisi YER ALMAZ?",
      options: [
        "Binlerce dereceye (15.000 - 20.000 °C) ulaşan aşırı termal ısı ve ağır yanıklar",
        "Bakır/alüminyum iletkenlerin eriyip buharlaşarak yüksek basınç dalgası ve şarapnel etkisi yaratması",
        "Gözde fotokeratit (kaynak alması) ve körlüğe yol açabilen yoğun UV/ışık parlaması",
        "Yüksek şiddetli (140 dB üzeri) patlama gürültüsü",
        "Ortam sıcaklığının eksi derecelere düşerek donma yapması"
      ],
      answer: 4,
      explanation: "Ark patlaması (Arc Flash); aşırı yüksek sıcaklık, erimiş metal sıçraması, basınç şok dalgası, yoğun UV ışık ve yüksek desibelli ses patlaması oluşturur; soğuma/donma yapmaz.",
      optionExplanations: [
        "Ark merkezinde sıcaklık güneş yüzeyinden bile yüksek derecelere ulaşarak 3. derece ölümcül yanıklar oluşturur.",
        "Bakırın aniden buharlaşmasıyla hacmi 67.000 kat genleşir ve şiddetli akustik/basınç şok dalgası yaratır.",
        "Yoğun ultraviyole ve görünür ışık parlaması retinada ve korneada ağır hasar bırakır.",
        "Patlama basıncı 140-160 dB darbe gürültüsü oluşturarak kulak zarını yırtabilir.",
        "DOĞRU (YER ALMAZ): Ark patlaması dondurucu soğuk değil, binlerce derecelik aşırı ısı üretir."
      ]
    },
    {
      q: "Yüksek gerilim (YG) enerji nakil hatlarının yakınında vinç, ekskavatör veya beton pompası ile çalışırken İSG açısından uyulması gereken en kritik kural nedir?",
      options: [
        "Vinç bomunun hatta temas etmese bile ark atlama mesafesi (emniyet mesafesi) içine girmemesi ve işaretçi/gözcü bulundurulması",
        "Vinç operatörünün güneş gözlüğü takması",
        "Hattın altından hızlıca geçilmesi",
        "Vinç bomuna bez bağlanması",
        "Sadece gece saatlerinde çalışılması"
      ],
      answer: 0,
      explanation: "Yüksek gerilim hatlarında elektriğin çarpması için fiziksel temas şart değildir; emniyet (yaklaşma) mesafesine girildiğinde havadan ark atlaması gerçekleşir.",
      optionExplanations: [
        "DOĞRU: YG hatlarında gerilim kademesine göre belirlenen emniyet mesafesine (1-5 metre) yaklaşıldığında temas olmadan da ark atlar.",
        "Güneş gözlüğü yüksek gerilim ark atlamasına karşı hiçbir koruma sağlamaz.",
        "Hızlı geçmek ark atlamasını engellemez; aksine kontrolsüz bom hareketiyle hatta çarpma riskini artırır.",
        "Bez bağlamak yüksek gerilime karşı hiçbir yalıtım sağlamaz.",
        "Gece karanlığında tellerin görülmesi daha da zorlaşacağı için kaza riski çok daha fazladır."
      ]
    },
    {
      q: "Elektrik tesisatlarında 'Sıfırlama' (TN-C sisteminde gövdenin nötr hattına bağlanması) uygulaması ile ilgili güvenlik açısından hangi risk söz konusudur?",
      options: [
        "Nötr hattının kopması durumunda cihazların metal gövdelerinin doğrudan 220 V faz gerilimi altında kalması",
        "Cihazların hiç çalışmaması",
        "Topraklama direncinin sıfır olması",
        "Elektrik faturasının düşmesi",
        "Gerilimin 12 Volt'a düşmesi"
      ],
      answer: 0,
      explanation: "Klasik sıfırlamada nötr iletkeni şebekede bir yerden koparsa, fazdan gelen akım cihaz üzerinden geçip metal gövdeyi doğrudan 220 V enerjili hale getirir ve dokunan kişiyi çarpar.",
      optionExplanations: [
        "DOĞRU: Nötr hattı koptuğunda (PEN kopması) gövdeye bağlı nötr üzerinden tüm metal şasiye 220 V gerilim biner ve büyük tehlike yaratır.",
        "Cihaz çalışmaya devam edebilir veya arızada gövde enerjilenir; sıfırlamanın tehlikesi çalışmaması değil gövdeye faz binmesidir.",
        "Sıfırlama topraklama direncini sıfır yapmaz; nötr üzerinden dönüş sağlar.",
        "Tüketim faturasıyla hiçbir ilgisi yoktur.",
        "Gerilim 12 V'a düşmez, aksine arızada gövde gerilimi 220 V'a çıkar."
      ]
    },
    {
      q: "Şantiyelerde ve açık alanlarda kullanılan seyyar uzatma kabloları ve elektrikli el aletleri ile ilgili aşağıdaki uygulamalardan hangisi DOĞRUDUR?",
      options: [
        "Kabloların ek yerleri açıkta bırakılmalı ve su birikintisi içinden geçirilmelidir",
        "Fiş yapısı kırık kablolar priz deliklerine çıplak telle (kibrit çöpü sıkıştırılarak) takılmalıdır",
        "Kablolar mekanik ezilmelere ve suya karşı korunmalı (askıya alınmalı/kablo köprüsü kullanılmalı) ve 30 mA kaçak akım röleli şantiye panosundan beslenmelidir",
        "Elektrikli el aletlerinin topraklama ucu iptal edilmelidir",
        "Hasarlı kablolar sadece kağıt bantla sarılmalıdır"
      ],
      answer: 2,
      explanation: "Şantiyelerde kablolar araç ve yaya geçişlerinden, keskin kenarlardan ve sudan korunmalı; sağlam fiş-priz kullanılmalı ve mutlaka 30 mA RCD'li panodan enerji alınmalıdır.",
      optionExplanations: [
        "Açık ek yerleri ve su birikintisi şantiyelerdeki ölümlü elektrik kazalarının bir numaralı sebebidir.",
        "Fişsiz çıplak kablo uçlarını prize sokmak doğrudan dokunma ve ark patlaması/yangın sebebidir, kesinlikle yasaktır.",
        "DOĞRU: Kablolar ezilmeye ve ıslanmaya karşı askıya alınmalı/korunmalı ve 30 mA kaçak akım korumalı panodan beslenmelidir.",
        "Topraklama ucunu iptal etmek (veya çift yalıtımsız cihazı topraksız kullanmak) gövde kaçağında ölüme yol açar.",
        "Kağıt bant yalıtkan değildir ve mekanik/nem dayanımı yoktur."
      ]
    }
  ],
  fillQuestions: [
    {
      q: "İnsan hayatını korumak amacıyla kullanılan kaçak akım rölesinin (RCD) nominal açma akımı ________ mA, yangın koruma rölesinin açma akımı ise 300 mA'dir.",
      answers: ["30", "30 mA", "otuz"],
      hint: "Solunum felci eşiğinin altındaki standart değer (sayısal)",
      explanation: "30 mA kaçak akım rölesi insan vücudunda solunum felci ve ventriküler fibrilasyon oluşmadan önce devreyi keser; 300 mA ise elektrik ark yangınlarını önler."
    },
    {
      q: "Bakım ve onarım sırasında enerjinin yanlışlıkla tekrar verilmesini önlemek için kesicilerin kilitlenmesi ve uyarı kartı takılması prosedürüne ________ (Kilitleme - Etiketleme) denir.",
      answers: ["LOTO", "EKED", "loto", "eked"],
      hint: "İngilizce kısaltması (4 harf) veya Türkçe kısaltması",
      explanation: "Lockout-Tagout (LOTO) / Enerji Kesme-Etiketleme (EKED), bakım sırasında şalterin başkası tarafından kaldırılmasını fiziksel kilitle engelleyen hayati prosedürdür."
    },
    {
      q: "Elektrik akımının kalp kaslarında düzensiz titreşimlere yol açarak kan pompalama işlevini durdurması durumuna ventriküler ________ adı verilir.",
      answers: ["fibrilasyon", "fibrilasyonu"],
      hint: "Kalp şok cihazının (defibrilatör) düzelttiği ölümcül ritim bozukluğu",
      explanation: "50-100 mA üzerindeki alternatif akım kalbin elektriksel düzenini bozarak ventriküler fibrilasyona ve ölüme yol açar."
    },
    {
      q: "Alternatif akımda etkin değeri ________ Volt ve altındaki gerilimler Alçak Gerilim (AG), üzerindeki gerilimler ise Yüksek Gerilim (YG) olarak tanımlanır.",
      answers: ["1000", "1.000", "bin"],
      hint: "AG / YG sınır gerilim değeri",
      explanation: "Mevzuata göre AC'de 1000 V ve altı Alçak Gerilim (AG), 1000 V üzeri Yüksek Gerilim (YG) kabul edilir."
    },
    {
      q: "İnsanlar için alternatif akımda (AC) tehlikeli gerilim sınırı (güvenli dokunma gerilimi üst sınırı) normal kuru ortamlarda ________ Volt olarak kabul edilir.",
      answers: ["50", "elli"],
      hint: "AC tehlikeli gerilim sınırı (V)",
      explanation: "Alternatif akımda 50 V (doğru akımda 120 V) üzerindeki gerilimler insan vücudu için tehlikeli gerilim sınırıdır."
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
