export const madenCourse = {
  id: "maden",
  code: "12227ISG002",
  title: "Maden İşyerlerinde İş Sağlığı ve Güvenliği",
  instructor: "Prof. Dr. Servet DEMİRDAĞ",
  examInfo: "Yüz Yüze Vize & Final (Kasım İlk Haftaları) | Çoktan Seçmeli Test + Boşluk Doldurma | 70 Sf. Ders Notu",
  color: "emerald",
  hex: "#059669",
  badge: "Pazartesi • 40 Soru (25 Test + 15 Boşluk)",
  tips: [
    "Servet Hoca sınavın hem TEST hem BOŞLUK DOLDURMA olacağını açıkça belirtti!",
    "İlk 7 hafta konusu 'Açık Ocak İşletmeciliği ve Mermer/Doğal Taş Ocakları'dır.",
    "Mermer ocaklarında elmas telin metre başına 2 tur burulması, basamak yükseklikleri (elle kazıda 3 m), açık işletmenin İSG avantajları, kavlak sökümü ve delme-patlatma güvenliği banko sorulardır."
  ],
  mcQuestions: [
    {
      q: "İş sağlığı ve güvenliği açısından 'Açık Ocak Madenciliği'nin yeraltı madenciliğine göre en büyük avantajları arasında aşağıdakilerden hangisi YER ALMAZ?",
      options: [
        "Doğal havalandırmanın yeterli olması ve grizu patlaması riskinin bulunmaması",
        "Gün ışığı ile doğal aydınlatma sağlanabilmesi",
        "Galeri tahkimatı (direk/tavan desteklemesi) gerektirmemesi",
        "İklim ve hava koşullarından (yağmur, kar, sis, don) hiçbir şekilde etkilenmemesi",
        "Büyük iş makinelerinin rahat manevra yapabilmesi"
      ],
      answer: 3,
      explanation: "Açık işletmelerde doğal havalandırma ve aydınlatma vardır, tahkimat gerekmez; ancak açık havada çalışıldığı için iklim koşullarından doğrudan etkilenir.",
      optionExplanations: [
        "Açık havada çalışıldığı için metan/karbonmonoksit birikmez ve grizu patlaması riski yoktur (avantajdır).",
        "Gündüz vardiyasında doğrudan güneş ışığı ile doğal ve güvenli aydınlatma sağlanır (avantajdır).",
        "Üstü açık olduğu için yeraltı ocaklarındaki gibi tavan çökmesine karşı tahkimat (domuzdamı, tahkimat direği) gerekmez (avantajdır).",
        "DOĞRU (YER ALMAZ): Açık ocaklar yağmur, kar, buzlanma, sis ve aşırı sıcak/soğuk gibi iklim koşullarından doğrudan olumsuz etkilenir.",
        "Geniş basamaklarda büyük ekskavatör ve kaya kamyonları rahatça çalışabilir, üretim verimi yüksektir (avantajdır)."
      ]
    },
    {
      q: "Mermer ve doğal taş ocaklarında kullanılan 'Elmas Tel Kesme Makineleri'nde, elmas telin kesim sırasında kendi ekseni etrafında dönerek elmas boncukların homojen (eşit) aşınmasını sağlamak amacıyla tel uçları birleştirilirken hangi işlem uygulanır?",
      options: [
        "Tel hiç döndürülmeden düz bağlanır",
        "Elmas tel metre başına 2 kez (tur) burularak bağlanır",
        "Tel üzerine gres yağı sürülür",
        "Tel kuru olarak soğutmadan çalıştırılır",
        "Tel her 10 dakikada bir ters yöne takılır"
      ],
      answer: 1,
      explanation: "Prof. Dr. Servet Demirdağ'ın 12 Ekim dersinde özellikle vurguladığı üzere: Elmas boncukların tek taraflı aşınıp telin kopmasını önlemek için tel bağlanırken metre başına 2 kere burulur.",
      optionExplanations: [
        "Tel düz bağlanırsa boncukların hep aynı yüzeyi kayaya sürtünür, boncuk kama şeklinde tek taraflı aşınır ve tel sıkışıp kopar.",
        "DOĞRU: Telin kesim esnasında kendi ekseni etrafında dönmesi ve boncukların dairesel/homojen aşınması için metre başına 2 tur burulur.",
        "Elmas tel kesiminde yağ kullanılmaz; yağ kaya ile boncuk arasındaki kesme sürtünmesini bozar ve mermeri kirletir.",
        "Kuru kesim yapılırsa sürtünme ısısından dolayı çelik halat ve boncuklar yanarak kısa sürede kopar.",
        "Telin yönünü sürekli değiştirmek pratik değildir ve tel ömrünü kısaltır; doğru yöntem baştan burgu vermektir."
      ]
    },
    {
      q: "Mermer ocaklarında elmas tel kesme işlemi sırasında oluşabilecek EN BÜYÜK ve ölümcül iş güvenliği riski aşağıdakilerden hangisidir?",
      options: [
        "Telin koparak yüksek hızla savrulması (kamçılama etkisi) ve kopan boncukların fırlaması",
        "Sadece gürültü oluşması",
        "Metan gazı birikmesi",
        "Karanlıkta çalışma",
        "Radyasyon yayılması"
      ],
      answer: 0,
      explanation: "Elmas tel yüksek gerilim altında dönerken koparsa 'kamçı etkisi' yaratarak üzerindeki çelik boncukları mermi gibi fırlatır.",
      optionExplanations: [
        "DOĞRU: Yüksek hız ve gerginlikle dönen elmas tel koptuğunda kamçı gibi savrulur ve elmas boncukları mermi hızıyla fırlatarak ölüme yol açar.",
        "Gürültü fiziksel bir risktir ancak mermer ocaklarındaki en ölümcül akut kaza riski tel kopması ve blok devrilmesidir.",
        "Mermer ocakları açık işletme olduğu ve kömür damarı içermediği için metan (grizu) birikmesi söz konusu değildir.",
        "Açık işletmelerde gündüz doğal ışık, gece ise projektör aydınlatması kullanılır.",
        "Elmas tel kesme mekanik bir işlemdir, radyasyon yaymaz."
      ]
    },
    {
      q: "Elmas tel kesme işleminde su kullanılmasının hem teknik hem de İSG açısından temel amacı nedir?",
      options: [
        "Mermeri boyamak",
        "Elmas teli ve boncukları soğutmak, kesim oluğundaki taş tozunu (çamuru) yıkayıp dışarı atmak ve toz çıkışını önlemek",
        "Elektrik iletkenliğini artırmak",
        "Şev açısını dikleştirmek",
        "Makinenin ağırlığını artırmak"
      ],
      answer: 1,
      explanation: "Su verilmezse sürtünme ısısından dolayı elmas boncuklar yanar, çelik halat genleşip kopar ve yoğun toz ortama yayılır.",
      optionExplanations: [
        "Suyun mermeri boyama gibi bir işlevi yoktur.",
        "DOĞRU: Su; sürtünme ısısını soğutarak tel kopmasını önler, kesim yarığındaki kırıntıları temizler ve tozu bastırır.",
        "Elektrikli makinelerde elektrik iletkenliğini artırmak istenmez, aksine kaçak riskidir.",
        "Kesim suyunun basamak şev açısıyla bir ilgisi yoktur.",
        "Su kesim hattına verilir, makine ağırlığını artırmak için kullanılmaz."
      ]
    },
    {
      q: "Açık ocak işletmelerinde elle yapılan kazı çalışmalarında (kademe/basamak oluşturmada) basamak yüksekliği en fazla kaç metre olabilir?",
      options: ["3 metre", "10 metre", "15 metre", "25 metre", "50 metre"],
      answer: 0,
      explanation: "Maden İşyerlerinde İSG Yönetmeliği'ne göre açık işletmelerde elle yapılan kazılarda kademe (basamak) yüksekliği 3 metreyi geçemez.",
      optionExplanations: [
        "DOĞRU: Elle yapılan açık ocak kazılarında göçük altında kalmayı önlemek için kademe yüksekliği azami 3 metre ile sınırlandırılmıştır.",
        "10 metre mekanize (ekskavatörle yapılan) açık ocaklarda kullanılan basamak yüksekliğidir, elle kazıda yasaktır.",
        "15 metre sağlam kayaçlarda büyük iş makineleriyle çalışılan kademe yüksekliğidir.",
        "25 metre çok yüksek kademe olup özel projelendirme gerektirir.",
        "50 metre tek bir basamak için aşırı tehlikelidir ve kademelendirme ilkesine aykırıdır."
      ]
    },
    {
      q: "Açık ocak madenlerinde kademe (basamak) şev açısı belirlenirken en kritik mühendislik ve güvenlik kriteri aşağıdakilerden hangisidir?",
      options: [
        "Kamyonların rengi",
        "Kayaç/zemin sağlamlığı, süreksizlik (çatlak/fay) durumu ve şev duraylılığı (heyelan/göçük riski)",
        "Yalnızca cevherin piyasa fiyatı",
        "Çalışan sayısı",
        "Vardiya saati"
      ],
      answer: 1,
      explanation: "Sağlam kayaçlarda şev açısı daha dik olabilirken, gevşek/çatlaklı zeminlerde şev kaymasını ve göçüğü önlemek için şev açısı yatıklaştırılır.",
      optionExplanations: [
        "Araç renginin jeomekanik tasarımla hiçbir ilgisi yoktur.",
        "DOĞRU: Şev açısı; kayacın mekanik dayanımı, tabaka eğimi, çatlak/fay yapısı ve yeraltı suyu dikkate alınarak şev kaymasını önleyecek şekilde belirlenir.",
        "Cevher fiyatı ekonomik faktördür ancak güvenliği tehlikeye atacak diklikte şev bırakılamaz.",
        "Çalışan sayısı şevin fiziksel duraylılığını değiştirmez.",
        "Vardiya saati operasyonel bir bilgidir, şev açısını belirlemez."
      ]
    },
    {
      q: "Açık işletmelerde kaya kamyonları (damperli kamyonlar) kademe kenarından döküm yaparken kamyonun şevden aşağı yuvarlanmasını önlemek için döküm sahası kenarında bulunması zorunlu yapı nedir?",
      options: [
        "Döküm yerinde kamyon tekerlek yüksekliğinin en az yarısı kadar güvenlik seti (topuk/banket) ve işaretçi",
        "Sadece plastik şerit",
        "Aydınlatma direği",
        "Su birikintisi",
        "Tahta takoz"
      ],
      answer: 0,
      explanation: "Açık ocak nakliye yolları ve döküm sahalarının uçurum kenarlarında araçların devrilmesini önleyecek yükseklikte güvenlik setleri (banket/berm) bırakılması zorunludur.",
      optionExplanations: [
        "DOĞRU: Döküm kenarında en büyük kamyonun tekerlek çapının en az yarısı yüksekliğinde toprak/kaya güvenlik seti (banket) ve manevra işaretçisi bulunmalıdır.",
        "Plastik uyarı şeridi yüzlerce tonluk kaya kamyonunu durduramaz.",
        "Aydınlatma direği gece görüşü içindir, kamyonun geri manevrada uçuruma düşmesini fiziksel olarak engellemez.",
        "Su birikintisi zemini yumuşatarak şev göçmesine ve kamyonun kaymasına yol açar.",
        "Küçük tahta takoz dev maden kamyonlarının döküm kenarında durmasını sağlayamaz."
      ]
    },
    {
      q: "Açık ocaklarda delme-patlatma işlemlerinde kullanılan ANFO patlayıcısı hangi iki maddenin karışımından oluşur?",
      options: [
        "Amonyum Nitrat + Fuel Oil (Mazot)",
        "Dinamit + Su",
        "Karbonmonoksit + Metan",
        "Kükürt + Kömür tozu",
        "Azot + Oksijen"
      ],
      answer: 0,
      explanation: "ANFO (Ammonium Nitrate - Fuel Oil), yaklaşık %94 Amonyum Nitrat ve %6 Fuel-Oil (mazot) karışımından oluşan, açık işletmelerde en yaygın kullanılan güvenli patlayıcıdır.",
      optionExplanations: [
        "DOĞRU: ANFO; %94 gözenekli Amonyum Nitrat gübresi (oksitleyici) ile %6 Fuel-Oil/Mazotun (yakıt) karıştırılmasıyla elde edilir.",
        "ANFO suya karşı hassastır (sulu deliklerde çözünür ve patlamaz); dinamit ve su karışımı değildir.",
        "Karbonmonoksit ve metan yeraltı ocaklarında oluşan tehlikeli gazlardır, patlayıcı karışımı değildir.",
        "Kükürt ve kömür tozu kara barut bileşenleridir, ANFO değildir.",
        "Azot ve oksijen soluduğumuz atmosfer havasının bileşenleridir."
      ]
    },
    {
      q: "Maden ocaklarında patlatma (ateşleme) yapılmadan önce ve sonra uygulanması gereken güvenlik kurallarından hangisi YANLIŞTIR?",
      options: [
        "Patlatma alanı çevresine nöbetçiler dikilerek girişler kapatılır",
        "Sesli siren/ikaz verilerek tüm personel güvenli sığınak veya mesafeye çekilir",
        "Ateşleme yetkili ateşleyici tarafından yapılır",
        "Patlamamış delik varsa hemen üzerine matkapla yeniden delik delinir",
        "Patlatma sonrası gaz ve toz dağılana, ateşleyici alanı kontrol edene kadar kimse sahaya giremez"
      ],
      answer: 3,
      explanation: "Patlamamış (kesik) deliklerin üzerine veya yakınına kesinlikle yeniden delik delinmez ve metal çubukla kurcalanmaz; ateşleyici gözetiminde güvenli prosedürle imha edilir.",
      optionExplanations: [
        "Taş savrulması (flyrock) tehlikesine karşı tüm girişlerin nöbetçilerle kapatılması zorunludur (doğrudur).",
        "Ateşleme öncesi siren çalınarak tüm çalışanların tehlike bölgesi dışına çıkması sağlanır (doğrudur).",
        "Patlayıcı doldurma ve ateşleme işlemleri sadece 'Ateşleyici Yeterlilik Belgesi' olan uzman personelce yapılır (doğrudur).",
        "DOĞRU (YANLIŞ UYGULAMA): Patlamamış deliğin içine veya üzerine matkap sokmak patlayıcıyı infilak ettirerek ölüme yol açar, kesinlikle yasaktır!",
        "Patlatma sonrası zehirli gazlar dağılmadan ve ateşleyici muayene yapmadan ocağa girilmez (doğrudur)."
      ]
    },
    {
      q: "Açık ocaklarda delik delme makineleri (rok/foraj) çalışırken ortaya çıkan yoğun taş tozunun çalışanlarda 'Silikozis' (pnömokonyoz) yapmasını önlemek için makinede bulunması gereken sistem nedir?",
      options: [
        "Islak delme (su enjeksiyonu) veya siklonlu toz toplama (emme) sistemi",
        "Sadece egzoz susturucusu",
        "Havalı korna",
        "Yüksek devirli fan ile tozu havaya savurma",
        "Kuru delme"
      ],
      answer: 0,
      explanation: "Delme makinelerinde tozu kaynağında bastırmak için su enjeksiyonu (ıslak delme) veya kuru toz emici filtre/siklon tertibatı kullanılması zorunludur.",
      optionExplanations: [
        "DOĞRU: Solunabilir tozu kaynağında bastırmak için suyla ıslak delme veya vakumlu siklon filtre (toz toplayıcı) kullanılır.",
        "Egzoz susturucusu motor gürültüsünü azaltır, delik ağzından çıkan taş tozunu engellemez.",
        "Havalı korna uyarı donanımıdır, toz kontrolü sağlamaz.",
        "Tozu havaya savurmak solunabilir silis tozunun tüm ocağa yayılmasına ve maruziyetin artmasına neden olur.",
        "Önlemsiz kuru delme yoğun toz bulutu oluşturarak ağır pnömokonyoz (silikozis) hastalığına yol açar."
      ]
    },
    {
      q: "Prof. Dr. Servet Demirdağ'ın dersin girişinde vurguladığı üzere, insanlığın kullandığı hammaddelerin kökeni ifade edilirken kullanılan temel madencilik mottosu nedir?",
      options: [
        "Yetiştirilemiyorsa (tarım değilse), mutlaka madencilikle çıkarılıyordur",
        "Tüm hammaddeler sentetik olarak üretilir",
        "Madencilik sadece kömür üretir",
        "Doğal taşlar madencilik sayılmaz",
        "Sanayi madencilikten bağımsızdır"
      ],
      answer: 0,
      explanation: "Servet Hoca 1. hafta dersinde: 'Eğer bir hammadde tarımla/ormancılıkla yetiştirilemiyorsa, mutlaka madencilik yoluyla yer kabuğundan çıkarılıyordur' ilkesini vurgulamıştır.",
      optionExplanations: [
        "DOĞRU: 'If it can't be grown, it has to be mined' — Yetiştirilemeyen her hammadde (metal, enerji, endüstriyel hammadde, doğal taş) madencilik ürünüdür.",
        "Sentetik malzemeler (plastik vb.) dahi petrol ve doğal gaz gibi yeraltı kaynaklarından üretilir.",
        "Madencilik; metalik madenler, endüstriyel hammaddeler, enerji hammaddeleri ve doğal taşların tamamını kapsar.",
        "Mermer, granit, traverten gibi doğal taşlar Maden Kanunu kapsamında önemli bir madencilik koludur.",
        "Sanayinin tüm temel girdileri doğrudan madenciliğe dayanır."
      ]
    },
    {
      q: "Mermer ocaklarında dağdan kesilen büyük ana kütlenin (bloğun) devrilmesi işleminde, devrilen bloğun kırılmasını önlemek ve sarsıntıyı sönümlemek için bloğun düşeceği zemine ne serilir?",
      options: [
        "Beton zemin dökülür",
        "İnce toprak / pasadan oluşan yastıklama (amortisör) yığını serilir",
        "Çelik plakalar dizilir",
        "Su havuzu yapılır",
        "Ahşap kalaslar dikey konur"
      ],
      answer: 1,
      explanation: "Yüksek ağırlıktaki ana mermer kütlesi hidrolik yastık veya kriko ile devrilirken, zemine serilen gevşek pasa/toprak yığını darbe enerjisini sönümler.",
      optionExplanations: [
        "Beton zemin sert olduğu için yüzlerce tonluk mermer bloğun çarpma anında parçalanmasına yol açar.",
        "DOĞRU: Bloğun devrileceği alana iş makineleriyle ince kırıntı/toprak/pasa serilerek darbe emici bir 'yastık' oluşturulur.",
        "Çelik plakalar darbeyi sönümlemez ve bloğun çatlamasına neden olur.",
        "Açık ocak kademesinde su havuzu yapılamaz ve su sıçraması tehlike yaratır.",
        "Dikey kalaslar devrilen kütlenin dengesiz sekmesine ve tehlikeli fırlamalara yol açar."
      ]
    },
    {
      q: "Açık ocaklarda iş makineleri ve dev kaya kamyonlarıyla ilgili yaşanan ölümlü kazaların en önemli nedenlerinden biri nedir?",
      options: [
        "Araçların çok yavaş gitmesi",
        "Büyük kamyonların geniş 'Kör Nokta' (görüş alanı dışı) bölgelerinde yaya veya küçük araç ezilmesi",
        "Lastiklerin küçük olması",
        "Kabin içinde klima bulunması",
        "Farların güçlü olması"
      ],
      answer: 1,
      explanation: "Dev maden kamyonlarının operatör kabini çok yüksekte olduğundan aracın önü, sağı ve arkası geniş kör noktalara sahiptir.",
      optionExplanations: [
        "Yavaş gitmek kaza nedeni değil, aksine ocak içi hız sınırı güvenlik önlemidir.",
        "DOĞRU: Kaya kamyonlarının (off-highway trucks) kabini metrelerce yüksekte olduğu için etrafındaki binek araçları ve yayaları göremez (kör nokta kazaları).",
        "Kaya kamyonlarının lastikleri insan boyundan büyüktür (3-4 metre çapında).",
        "Kabin kliması operatörün termal konforunu ve dikkatini koruyan olumlu bir ergonomik özelliktir.",
        "Güçlü aydınlatma gece vardiyasında görüşü artıran bir güvenlik unsurudur."
      ]
    },
    {
      q: "Patlatma yapılan açık ocaklarda patlatma sonrasında basamak yüzeylerinde ve şev aynasında askıda kalan, her an düşme tehlikesi taşıyan gevşek taş/kaya parçalarının düşürülüp temizlenmesi işlemine ne ad verilir?",
      options: ["Tahkimat", "Kavlak sökümü (Tarama)", "Sondaj", "Frenleme", "Zenginleştirme"],
      answer: 1,
      explanation: "Askıda kalan gevşek kaya parçalarına 'kavlak' denir. Çalışmaya başlamadan önce kademe üstünden aşağı doğru kavlak sökümü (tarama) yapılması zorunludur.",
      optionExplanations: [
        "Tahkimat, yeraltı galerilerinde tavanın çökmesini önlemek için yapılan destekleme sistemidir.",
        "DOĞRU: Ocak aynasında ve şevlerde asılı kalan gevşek taşlara 'kavlak', bunların levye veya ekskavatörle düşürülmesine 'kavlak sökümü (tarama)' denir.",
        "Sondaj, cevher arama veya patlatma için delik delme işlemidir.",
        "Frenleme araçların durdurulması işlemidir.",
        "Zenginleştirme (cevher hazırlama), çıkarılan tüvenan cevherin tenörünü yükseltme işlemidir."
      ]
    },
    {
      q: "Maden işyerlerinde acil durumlar, göçük, patlama ve kurtarma faaliyetleri açısından her maden ocağında görevlendirilmesi zorunlu olan teknik yönetici kimdir?",
      options: [
        "Daimi Nezaretçi (Maden Mühendisi)",
        "Muhasebe Müdürü",
        "Pazarlama Uzmanı",
        "Çevre Mühendisi",
        "Jeofizik Teknisyeni"
      ],
      answer: 0,
      explanation: "Maden mevzuatına göre maden işletmelerinde üretimin güvenli yürütülmesinden sorumlu olarak en az bir maden mühendisi 'Daimi Nezaretçi' olarak görevlendirilir.",
      optionExplanations: [
        "DOĞRU: Maden Kanunu ve ilgili yönetmelikler uyarınca maden işletmelerinde teknik ve emniyet gözetimi için maden mühendisi 'Daimi Nezaretçi' atanması zorunludur.",
        "Muhasebe müdürü mali işlerden sorumludur, ocak teknik nezaretçisi olamaz.",
        "Pazarlama uzmanı satış süreçleriyle ilgilenir.",
        "Çevre mühendisi ÇED ve atık süreçlerinde görev alır, daimi nezaretçi maden mühendisi olmak zorundadır.",
        "Jeofizik teknisyeni arama aşamasında çalışır, daimi nezaretçilik yetkisi yoktur."
      ]
    },
    {
      q: "Cevherin üzerini örten ve ekonomik değeri olmayan, cevhere ulaşmak için kazılıp alınması (dekapaj yapılması) gereken örtü tabakasına / yan taşa madencilikte ne ad verilir?",
      options: ["Tenör", "Pasa (Örtü tabakası / Dekapaj malzemesi)", "Konsantre", "Rezerv", "Filon"],
      answer: 1,
      explanation: "Ekonomik değeri olmayan yan taş ve örtü tabakasına 'Pasa' (veya dekapaj malzemesi); bu örtü tabakasının kaldırılması işlemine ise 'Dekapaj (Örtü kazısı)' denir.",
      optionExplanations: [
        "Tenör, cevher içindeki değerli metalin yüzde veya gram/ton cinsinden oranıdır.",
        "DOĞRU: Cevherin üstünü örten veya cevherle birlikte çıkan ekonomik değeri olmayan kısır kayaç/toprağa 'Pasa' denir.",
        "Konsantre, zenginleştirme tesisinden çıkan yüksek tenörlü işlenmiş üründür.",
        "Rezerv, yer altında varlığı ve miktarı belirlenmiş ekonomik cevher kütlesidir.",
        "Filon, kayaç çatlaklarını doldurmuş damar şeklindeki cevher oluşumudur."
      ]
    },
    {
      q: "Açık ocak işletmeciliğinde ekonomik sınırların belirlenmesinde kullanılan; '1 ton (veya 1 m³) cevher üretmek için kazılması gereken pasa (örtü) miktarı' oranına ne ad verilir?",
      options: [
        "Dekapaj Oranı (Örtü / Cevher Oranı - Stripping Ratio)",
        "Gözeneklilik Oranı",
        "Nem Oranı",
        "Kül Oranı",
        "Sıkışma Oranı"
      ],
      answer: 0,
      explanation: "Açık ocak tasarımında 1 birim cevher çıkarmak için alınması gereken örtü kazısı (pasa) miktarına 'Dekapaj Oranı (Örtü Kazı Oranı)' denir; bu oran çok yükselirse yeraltı işletmesine geçilir.",
      optionExplanations: [
        "DOĞRU: Dekapaj oranı (Pasa / Cevher), işletmenin açık ocak olarak mı yoksa yeraltı ocağı olarak mı çalışacağının en temel ekonomik kriteridir.",
        "Gözeneklilik (porozite) kayacın içindeki boşluk hacminin toplam hacme oranıdır.",
        "Nem oranı cevherin su içeriğini gösterir.",
        "Kül oranı kömürün yanmayan inorganik madde yüzdesini ifade eder.",
        "Sıkışma oranı zeminin mekanik oturma özelliğidir."
      ]
    },
    {
      q: "Mermer ocaklarında elmas tel kesme makinesi çalışırken operatörün ve diğer çalışanların durması gereken yer ile ilgili hangi kural DOĞRUDUR?",
      options: [
        "Operatör kesim yapan gergin telin tam karşısında (hizasında) durup teli yakından izlemelidir",
        "Makinenin koruyucu sac kapakları takılı olmalı, kesim hattı arkasına bariyer konulmalı ve telin dönüş/savrulma düzleminde kesinlikle kimse bulunmamalıdır",
        "Operatör döner volanın (kasnağın) yanında oturmalıdır",
        "Telin gerginliğini çalışırken eliyle yoklamalıdır",
        "Su kesilse bile kesime devam etmelidir"
      ],
      answer: 1,
      explanation: "Elmas tel koptuğunda dönüş düzlemi boyunca mermi gibi savrulduğu için kesim hizasında (telin karşısında) durmak ölümcüldür; kumanda panosu güvenli açıda ve mesafede konumlandırılır.",
      optionExplanations: [
        "Telin tam karşısında (hizasında) durmak, tel koptuğunda fırlayan boncukların doğrudan çalışana isabet etmesine neden olur.",
        "DOĞRU: Volan koruyucu kapakları kapalı olmalı, kesim hizasında koruyucu engel bulunmalı ve kimse telin savrulma hattında durmamalıdır.",
        "Döner volanın yanında oturmak tel kopması veya kapılma anında ölümcül kaza doğurur.",
        "Hızla dönen çelik elmas tele elle dokunmak parmak/el kopmasına yol açar.",
        "Su kesildiğinde tel aşırı ısınıp kopacağı için makine derhal durdurulmalıdır."
      ]
    },
    {
      q: "Mermer ocaklarında dağdan (ana kayadan) elmas telle arkası ve yanları kesilerek ayrılan dev mermer kütlesini yatırmak (devirmek) için kesim yarığının içine yerleştirilen ve su veya hava basıncıyla şişirilen ekipmana ne ad verilir?",
      options: [
        "Hidrolik / Pnömatik Yastık (Sac veya Kevlar Devirme Yastığı) ve Hidrolik Kriko",
        "Dinamit lokumu",
        "El arabası",
        "Manyetik tutucu",
        "Helezon konveyör"
      ],
      answer: 0,
      explanation: "Mermer bloklarının çatlamadan ana kayadan ayrılması için patlayıcı kullanılmaz; kesim yarığına çelik/kevlar 'Su veya Hava Yastıkları' ve 'Hidrolik Krikolar' yerleştirilerek blok kontrollü şekilde itilip devrilir.",
      optionExplanations: [
        "DOĞRU: Kesilen dar yarığa sokulan çelik/kevlar yastıklar yüksek basınçlı su veya hava ile şişirilerek yüzlerce tonluk bloğu çatlatmadan öne doğru iter.",
        "Mermer blok üretiminde dinamit gibi yüksek kırıcı patlayıcılar mermeri parçalayıp çatlatacağı için kullanılmaz.",
        "El arabası blok devirmede kullanılamaz.",
        "Mermer (kalsiyum karbonat) manyetik özellik taşımaz, mıknatısla çekilemez.",
        "Helezon konveyör toz ve taneli malzemeleri taşımak için kullanılır."
      ]
    },
    {
      q: "Açık ocaklarda kademe yüksekliği, kademe genişliği ve şev açısı belirlenirken aşağıdaki faktörlerden hangisi dikkate alınır?",
      options: [
        "Kullanılan iş makinelerinin (ekskavatör kepçe erişim yüksekliği, delici makine boyu, kamyon dönüş yarıçapı) boyutları ve kayaç sağlamlığı",
        "Sadece ocak sahibinin isteği",
        "Yalnızca rüzgar hızı",
        "Bölgedeki bitki örtüsü türü",
        "Mesai başlangıç saati"
      ],
      answer: 0,
      explanation: "Kademe yüksekliği ekskavatörün güvenli kazı yüksekliğine ve kayaç yapısına göre; kademe (basamak) genişliği ise kamyon ve iş makinelerinin güvenli manevra ve nakliye genişliğine göre belirlenir.",
      optionExplanations: [
        "DOĞRU: Kademe geometrisi; hem kayaç mekaniği (şev stabilitesi) hem de kullanılan ekskavatör, delici ve kamyonların teknik boyutlarına göre tasarlanır.",
        "Maden tasarımı keyfi isteğe göre değil, Maden İSG Yönetmeliği ve kaya mekaniği hesaplarına göre yapılır.",
        "Rüzgar hızı toz dağılımını etkiler ancak kademe yüksekliğini belirlemez.",
        "Bitki örtüsü dekapaj öncesi sıyrılan nebati topraktır, alt kademelerin geometrisini belirlemez.",
        "Mesai saati idari bir konudur."
      ]
    },
    {
      q: "Delme-patlatma yapılan açık ocaklarda patlatma sırasında kaya parçalarının beklenenden çok uzak mesafelere fırlayarak çalışanlara ve ekipmanlara zarar vermesi olayına ne ad verilir ve en önemli sebebi nedir?",
      options: [
        "Taş Savrulması (Flyrock) - Yetersiz sıkılama boyu, aşırı şarj (fazla patlayıcı) veya uygunsuz dilim kalınlığı",
        "Tasman (Çökme) - Az patlayıcı kullanımı",
        "Grizu - Kömür tozu",
        "Liküfaksiyon - Sıcaklık",
        "Kavitasyon - Su basıncı"
      ],
      answer: 0,
      explanation: "Açık ocak patlatmalarında en önemli kaza nedenlerinden biri 'Taş Savrulması (Flyrock)' olup; delik ağzı sıkılamasının yetersiz yapılması veya aşırı patlayıcı şarjından kaynaklanır.",
      optionExplanations: [
        "DOĞRU: Sıkılama (delik üst kısmının killi/ince malzemeyle doldurulması) yetersiz olursa patlama enerjisi delik ağzından tüfek gibi taş fırlatır (Flyrock).",
        "Tasman, yeraltı imalat boşluklarının üzerindeki yeryüzü tabakasının zamanla çökmesidir.",
        "Grizu, yeraltı kömür ocaklarında metan gazı (%4,5-15) patlamasıdır.",
        "Liküfaksiyon (sıvılaşma), deprem sırasında suya doygun kumlu zeminlerin taşıma gücünü kaybetmesidir.",
        "Kavitasyon, pompa çarklarında düşük basınç nedeniyle buhar kabarcıklarının oluşup patlamasıdır."
      ]
    },
    {
      q: "Patlatma deliklerinde patlayıcı maddenin (örneğin ANFO'nun) üzerine delik ağzına kadar olan boşluğa killi/ince kırıntılı malzeme doldurularak gazların delik ağzından kaçmasını önleyen işleme ne ad verilir?",
      options: ["Sıkılama", "Yemleme", "Tavlama", "Tahkimat", "Kavlaklama"],
      answer: 0,
      explanation: "Patlayıcı şarjının üzerine delik ağzına kadar patlayıcı olmayan ince taş kırıntısı/kil doldurulmasına 'Sıkılama' denir; enerjinin kayayı kırmaya harcanmasını sağlar ve taş savrulmasını önler.",
      optionExplanations: [
        "DOĞRU: Delik üst kısmının ince malzemeyle kapatılmasına 'Sıkılama' denir; gazların havaya kaçmasını ve taş savrulmasını önler.",
        "Yemleme, ANFO gibi duyarsız patlayıcıları ateşlemek için kapsülle birlikte kullanılan dinamit/emülsiyon kartuşudur.",
        "Tavlama, metallerin ısıl işlemle yumuşatılmasıdır.",
        "Tahkimat, yeraltı galeri desteklemesidir.",
        "Kavlaklama, askıdaki gevşek taşların temizlenmesidir."
      ]
    },
    {
      q: "Mermer ocaklarında dağdan devrilen büyük ana kütlenin (ana bloğun), nakliyeye uygun ticari ebatlı (dikdörtgen prizma) bloklara bölünmesi işlemine ne ad verilir?",
      options: [
        "Sayalama (Ebatlama / İkincil kesim)",
        "Zenginleştirme",
        "Flotasyon",
        "Sondajlama",
        "Kavurma"
      ],
      answer: 0,
      explanation: "Ocakta devrilen büyük mermer kütlesinin elmas tel veya kollu kesicilerle fabrikaya taşınabilir standart ticari bloklara (sayalara) bölünmesine 'Sayalama' denir.",
      optionExplanations: [
        "DOĞRU: Devrilen ana kütlenin kamyonlarla taşınabilecek düzgün geometrili bloklara kesilip ayrılmasına mermer terminolojisinde 'Sayalama' denir.",
        "Zenginleştirme, metalik cevherlerin tenörünü artırma işlemidir.",
        "Flotasyon (köpükle yüzdürme), ince öğütülmüş cevher minerallerini su ve kimyasallarla ayırma yöntemidir.",
        "Sondajlama, karot alarak rezerv tespiti yapma veya delik delme işlemidir.",
        "Kavurma, sülfürlü cevherlerin fırınlarda ısıtılması işlemidir."
      ]
    },
    {
      q: "Açık ocak madenlerinde nakliye yollarının (rampaların) güvenliği ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
      options: [
        "Yol eğimleri araçların fren kapasitesini aşmamalı, uçurum kenarında güvenlik seti bulunmalı ve toz kalkmasını önlemek için yollar düzenli olarak arazözle sulanmalıdır",
        "Yollar tek şeritli ve çok dik (%40 eğimli) yapılmalıdır",
        "Toz bulutu oluşması kamyonların birbirini görmesi için faydalıdır",
        "Yol kenarlarına güvenlik seti (banket) yapılmasına gerek yoktur",
        "Kamyonlar rampa aşağı vitesi boşa alarak inmelidir"
      ],
      answer: 0,
      explanation: "Ocak içi nakliye yollarında uygun eğim (%8-10 civarı), yeterli genişlik, kenar güvenlik seti (banket) ve görüşü kapatan tozu bastırmak için düzenli sulama yapılması hayati İSG kurallarıdır.",
      optionExplanations: [
        "DOĞRU: Uygun rampa eğimi, kenar güvenlik seti (banket) ve görüş kaybını/tozu önleyen arazözle sulama açık ocak nakliye güvenliğinin temelidir.",
        "%40 eğimde yüklü kaya kamyonları tırmanamaz ve inişte frenleri tutmayarak devrilir.",
        "Yoğun toz bulutu görüş mesafesini sıfıra indirerek kamyonların çarpışmasına ve uçuruma yuvarlanmasına yol açar.",
        "Güvenlik seti (banket) olmayan uçurum kenarlı ocak yolları ölümlü devrilme kazalarının baş sebebidir.",
        "Ağır tonajlı kamyonlarda vitesi boşa almak motor frenini (retarder) devre dışı bırakır ve aracın kontrolden çıkmasına neden olur."
      ]
    },
    {
      q: "Maden ocaklarında cevherden hiçbir zenginleştirme veya ayıklama işlemi yapılmadan, ocaktan çıktığı ham haliyle alınan cevhere ne ad verilir?",
      options: ["Tüvenan cevher", "Konsantre cevher", "Metal külçe", "İzabe ürünü", "Cüruf"],
      answer: 0,
      explanation: "Ocaktan kazılıp çıkarıldığı ilk ham haldeki (işlenmemiş) cevhere 'Tüvenan (Run-of-Mine / ROM) Cevher' denir.",
      optionExplanations: [
        "DOĞRU: Ocaktan üretildiği ham, elenmemiş ve zenginleştirilmemiş haldeki cevhere 'Tüvenan Cevher' adı verilir.",
        "Konsantre cevher, kırma-öğütme ve zenginleştirme tesisinden geçmiş yüksek tenörlü üründür.",
        "Metal külçe, izabe (eritme) ve rafinasyon sonrası elde edilen saf metaldir.",
        "İzabe ürünü, metalurjik fırınlarda eritme sonucu elde edilen üründür.",
        "Cüruf, metal eritme fırınlarında metalin üzerinden ayrılan erimiş atık fazdır."
      ]
    }
  ],
  fillQuestions: [
    {
      q: "Mermer ocaklarında elmas tel kesme makinesinde telin tek taraflı aşınmasını önlemek için tel uçları birleştirilirken metre başına ________ kez burulması gerekir.",
      answers: ["2", "iki"],
      hint: "Servet Hoca'nın 12 Ekim dersinde vurguladığı sayı",
      explanation: "Elmas telin kesim sırasında kendi ekseni etrafında dönerek boncukların homojen aşınması için tel metre başına 2 tur burulur."
    },
    {
      q: "Açık işletmelerde elle yapılan kazılarda basamak (kademe) yüksekliği en fazla ________ metre olabilir.",
      answers: ["3", "üç", "uc"],
      hint: "Maden İSG Yönetmeliği'ndeki sınır (metre)",
      explanation: "Maden İşyerlerinde İSG Yönetmeliği'ne göre elle yapılan açık ocak kazılarında kademe yüksekliği 3 metreyi geçemez."
    },
    {
      q: "Patlatma veya kazı sonrasında ocak aynasında ve şev yüzeyinde askıda kalan, düşme tehlikesi yaratan gevşek kaya parçalarına ________ adı verilir.",
      answers: ["kavlak"],
      hint: "Çalışma öncesi sökülmesi/taranması gereken gevşek taş",
      explanation: "Ocak aynasında veya tavanında asılı kalan gevşek taşlara 'kavlak' denir; işe başlamadan önce kavlak sökümü yapılır."
    },
    {
      q: "Açık ocak patlatmalarında en yaygın kullanılan ve Amonyum Nitrat ile Fuel-Oil (mazot) karışımından oluşan patlayıcıya ________ denir.",
      answers: ["ANFO", "anfo"],
      hint: "4 harfli patlayıcı kısaltması",
      explanation: "ANFO (%94 Amonyum Nitrat + %6 Fuel-Oil), kuru deliklerde güvenli ve ekonomik olduğu için açık ocaklarda en çok kullanılan patlayıcıdır."
    },
    {
      q: "Elmas tel kesme işleminde telin ısınarak kopmasını ve toz oluşumunu önlemek için kesim oluğuna kesintisiz olarak ________ verilmelidir.",
      answers: ["su"],
      hint: "Soğutma ve yıkama akışkanı",
      explanation: "Kesim hattına sürekli verilen su, elmas boncukları ve çelik halatı soğutur ve taş çamurunu dışarı atar."
    },
    {
      q: "Açık ocak madenlerinde doğal ________ ve doğal aydınlatma sağlandığı için yeraltı ocaklarındaki gibi grizu birikimi yaşanmaz.",
      answers: ["havalandırma", "havalandirma"],
      hint: "Temiz hava akışı",
      explanation: "Açık işletmelerin İSG açısından en büyük üstünlüğü doğal havalandırma ve doğal aydınlatmaya sahip olmasıdır."
    },
    {
      q: "Mermer ocağında elmas telin kopması durumunda boncukların mermi gibi fırlamasına ________ etkisi denir.",
      answers: ["kamçı", "kamçılama", "kamci", "kamcilama"],
      hint: "Telin savrulma hareketi",
      explanation: "Gergin elmas tel koptuğunda kamçı etkisiyle savrularak ölümcül yaralanmalara yol açabilir."
    },
    {
      q: "Maden ocaklarında delme işlemi sırasında çıkan kristal yapılı serbest silis (kuvars) tozlarının solunması sonucu akciğerlerde oluşan meslek hastalığına ________ denir.",
      answers: ["silikozis", "pnömokonyoz", "pnomokonyoz"],
      hint: "Toz hastalığı / taş ciğeri",
      explanation: "Solunabilir silis ve taş tozlarının akciğer alveollerinde birikmesiyle oluşan geri dönüşümsüz meslek hastalığı silikozisdir (pnömokonyoz)."
    },
    {
      q: "Açık işletmelerde basamak yatay düzlemi ile basamak şev yüzeyi arasındaki açıya ________ açısı denir.",
      answers: ["şev", "sev"],
      hint: "Yamaç eğim açısı",
      explanation: "Basamak yüzeyinin yatayla yaptığı açıya şev açısı denir; kayaç sağlamlığına göre belirlenir."
    },
    {
      q: "Maden işletmelerinde teknik ve emniyet yönünden nezaret görevini yürüten maden mühendisine ________ nezaretçi denir.",
      answers: ["daimi"],
      hint: "Sürekli görev yapan nezaretçi unvanı",
      explanation: "Her maden ocağında işin güvenli yürütülmesi için en az bir maden mühendisi Daimi Nezaretçi olarak görevlendirilir."
    },
    {
      q: "Cevherin üzerini örten ekonomik değeri olmayan örtü tabakasına (yan taşa) ________, bu örtü tabakasının kazılıp kaldırılması işlemine ise dekapaj denir.",
      answers: ["pasa", "örtü", "ortu"],
      hint: "Ekonomik değeri olmayan kısır taş/toprak",
      explanation: "Ekonomik değeri olmayan yan taş ve örtü malzemesine 'pasa' adı verilir."
    },
    {
      q: "Maden ocağından çıkarıldığı ham, elenmemiş ve hiçbir zenginleştirme işlemi görmemiş cevhere ________ cevher denir.",
      answers: ["tüvenan", "tuvenan"],
      hint: "Ham cevher terimi",
      explanation: "Ocaktan çıktığı ilk ham haldeki cevhere Tüvenan (ROM) cevher denir."
    },
    {
      q: "Patlatma deliklerinde patlayıcı şarjının üzerine delik ağzına kadar ince killi/kırıntılı malzeme doldurularak gazların kaçmasını ve taş savrulmasını önleme işlemine ________ denir.",
      answers: ["sıkılama", "sikilama"],
      hint: "Delik ağzının kapatılması işlemi",
      explanation: "Delik üst kısmının patlayıcı olmayan malzemeyle doldurulmasına sıkılama denir."
    },
    {
      q: "Mermer ocaklarında ana kayadan kesilerek devrilen büyük kütlenin, taşınabilir ticari boyutlu bloklara bölünmesi işlemine ________ denir.",
      answers: ["sayalama", "ebatlama"],
      hint: "Ana kütleyi bloklara ayırma işlemi",
      explanation: "Devrilen büyük mermer kütlesinin standart ticari bloklara kesilmesine sayalama adı verilir."
    },
    {
      q: "Patlatma ve kazı işlemlerinin yalnızca Ateşleyici ________ Belgesi'ne sahip yetkili personel tarafından yapılması yasal zorunluluktur.",
      answers: ["yeterlilik", "ehliyet"],
      hint: "Ateşleyicinin sahip olması gereken belge",
      explanation: "Patlayıcı madde doldurma ve ateşleme işlemleri sadece Ateşleyici Yeterlilik Belgesi bulunan kişilerce yapılabilir."
    }
  ]
};
