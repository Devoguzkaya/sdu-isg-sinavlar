export const riskCourse = {
  id: "risk",
  code: "12227ISG003",
  title: "Risk Değerlendirmesi ve Risk Yönetimi",
  instructor: "Prof. Dr. Funda CENGİZ ÇALLIOĞLU",
  examInfo: "Yüz Yüze Çoktan Seçmeli Test | 392 Sf. Ders Sunumu + Derste Çözülen Sorular",
  color: "blue",
  hex: "#2563eb",
  badge: "Pazartesi • 40 Soru (25 Test + 15 Boşluk)",
  tips: [
    "Funda Hoca derste bizzat vurguladı: 'Proaktif vs Reaktif yaklaşım', 'Tehlike vs Risk', 'Ramak Kala Olay' tanımları %100 sınavda çıkar!",
    "Risk Değerlendirmesi yenileme süreleri (2 - 4 - 6 yıl), Risk Kontrol Hiyerarşisi (KKD'nin en son adım olması) ve Risk Değerlendirme Ekibi banko sorulardır.",
    "Kantitatif ve Kalitatif yöntemler (5x5 L Tipi Matris, X Tipi Matris, Fine-Kinney, FMEA, HAZOP, FTA, ETA) arasındaki farklar sorulur."
  ],
  mcQuestions: [
    {
      q: "İşyerinde var olan ya da dışarıdan gelebilecek, çalışanı veya işyerini etkileyebilecek 'zarar veya hasar verme potansiyeli'ne ne ad verilir?",
      options: ["Risk", "Tehlike", "Ramak kala olay", "Kaza", "Önlem"],
      answer: 1,
      explanation: "6331 sayılı Kanun'a göre zarar veya hasar verme potansiyeline 'Tehlike'; tehlikeden kaynaklanacak kayıp, yaralanma ya da başka zararlı sonuç meydana gelme ihtimaline ise 'Risk' denir.",
      optionExplanations: [
        "Risk; tehlikeden kaynaklanacak kayıp, yaralanma veya zarar meydana gelme 'ihtimali ve şiddetinin' bileşkesidir.",
        "DOĞRU: İşyerinde var olan ya da dışarıdan gelebilecek, zarar veya hasar verme potansiyeline 'Tehlike' denir.",
        "Ramak kala olay; zarara uğratma potansiyeli olduğu halde şans eseri zarara uğratmayan olaydır.",
        "Kaza; istenmeyen, planlanmamış ve sonucunda yaralanma/ölüm veya maddi hasar oluşan olaydır.",
        "Önlem; tehlikeyi ortadan kaldırmak veya riski kabul edilebilir seviyeye indirmek için yapılan uygulamadır."
      ]
    },
    {
      q: "İşyerinde meydana gelen; çalışan, işyeri ya da iş ekipmanını zarara uğratma potansiyeli olduğu halde zarara uğratmayan olaya ne ad verilir?",
      options: ["İş kazası", "Meslek hastalığı", "Ramak kala olay", "Kabul edilebilir risk", "Reaktif olay"],
      answer: 2,
      explanation: "Funda Hoca'nın üzerinde durduğu tanım: Zarara uğratma potansiyeli olduğu halde şans eseri zarara/yaralanmaya yol açmayan olaya 'Ramak Kala Olay' denir ve mutlaka kayıt altına alınmalıdır.",
      optionExplanations: [
        "İş kazası; çalışanı hemen veya sonradan bedenen ya da ruhen engelli hale getiren (zararla sonuçlanan) olaydır.",
        "Meslek hastalığı; çalışanın yürütülen işin niteliğinden dolayı tekrarlanan bir sebeple uğradığı geçici veya sürekli hastalıktır.",
        "DOĞRU: Zarara uğratma potansiyeli olduğu halde yaralanma veya hasarla sonuçlanmayan (ucuz atlatılan) olaya 'Ramak Kala Olay' denir.",
        "Kabul edilebilir risk; yasal yükümlülüklere uygun, kayıp veya yaralanma oluşturmayacak düzeye indirilmiş risk seviyesidir.",
        "Reaktif olay; kaza gerçekleştikten sonra verilen tepkisel durumu ifade eder."
      ]
    },
    {
      q: "Modern İSG anlayışının temelini oluşturan; iş kazası veya meslek hastalığı henüz meydana GELMEDEN ÖNCE tehlikeleri öngörüp riskleri kaynağında kontrol altına almayı hedefleyen yaklaşım hangisidir?",
      options: [
        "Reaktif (Tepkisel) Yaklaşım",
        "Proaktif (Önleyici) Yaklaşım",
        "Pasif Yaklaşım",
        "Kaderci Yaklaşım",
        "Tazmin edici Yaklaşım"
      ],
      answer: 1,
      explanation: "Proaktif yaklaşım olay olmadan önce önlem alır; Reaktif yaklaşım ise kaza gerçekleştikten sonra tepki verir (eski yaklaşım).",
      optionExplanations: [
        "Reaktif yaklaşım; kaza veya hastalık meydana geldikten sonra inceleme yapıp önlem alan geleneksel (sonradan tepki veren) yaklaşımdır.",
        "DOĞRU: Proaktif yaklaşım; kaza olmadan önce risk değerlendirmesi yaparak tehlikeleri öngören ve kaynağında önleyen modern yaklaşımdır.",
        "Pasif yaklaşım; tehlikeler karşısında hareketsiz kalmayı ifade eder.",
        "Kaderci yaklaşım; kazaların önlenemez olduğunu savunan bilim dışı yaklaşımdır.",
        "Tazmin edici yaklaşım; sadece kaza sonrası maddi tazminat ödemeye odaklanan eski anlayıştır."
      ]
    },
    {
      q: "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği'ne göre; Çok Tehlikeli, Tehlikeli ve Az Tehlikeli sınıftaki işyerlerinde risk değerlendirmesi en geç kaç yılda bir yenilenir?",
      options: [
        "1 - 2 - 3 yıl",
        "2 - 4 - 6 yıl",
        "1 - 3 - 5 yıl",
        "3 - 5 - 7 yıl",
        "2 - 3 - 4 yıl"
      ],
      answer: 1,
      explanation: "Çok tehlikeli sınıfta 2 yılda bir, Tehlikeli sınıfta 4 yılda bir, Az tehlikeli sınıfta 6 yılda bir yenilenir.",
      optionExplanations: [
        "1 - 2 - 3 yıl Acil Durum Planlarındaki tatbikat veya eski taslak sürelerle karıştırılmaktadır; doğru süre 2-4-6 yıldır.",
        "DOĞRU: Risk değerlendirmesi Çok Tehlikeli işyerlerinde 2, Tehlikeli işyerlerinde 4, Az Tehlikeli işyerlerinde en geç 6 yılda bir yenilenir.",
        "1 - 3 - 5 yıl periyodik sağlık muayenesi süreleridir (Çok tehlikeli: 1 yıl, Tehlikeli: 3 yıl, Az tehlikeli: 5 yıl).",
        "3 - 5 - 7 yıl İSG mevzuatında yer alan bir periyot değildir.",
        "2 - 3 - 4 yıl mevzuatta bulunmayan hatalı bir sıralamadır."
      ]
    },
    {
      q: "Risklerin kontrol altına alınması aşamasında uygulanacak 'Risk Kontrol Tedbirleri Hiyerarşisi'nde EN SON başvurulması gereken yöntem aşağıdakilerden hangisidir?",
      options: [
        "Tehlikenin kaynağında yok edilmesi",
        "Tehlikelinin daha az tehlikeli olanla değiştirilmesi",
        "Toplu koruma ve mühendislik önlemleri",
        "İdari önlemler",
        "Kişisel Koruyucu Donanım kullanımı"
      ],
      answer: 4,
      explanation: "Risk kontrol hiyerarşisinde öncelik kaynağında yok etme, ikame ve toplu korumadır. Kişisel Koruyucu Donanım (KKD) her zaman EN SON çaredir.",
      optionExplanations: [
        "Eliminasyon (yok etme), hiyerarşinin 1. ve en etkili adımıdır; tehlikeyi tamamen ortadan kaldırır.",
        "İkame (yerine koyma), hiyerarşinin 2. adımıdır; tehlikeli olanı tehlikesiz/az tehlikeli olanla değiştirir.",
        "Toplu koruma ve mühendislik önlemleri (havalandırma, makine koruyucu, izolasyon), hiyerarşinin 3. adımıdır.",
        "İdari/organizasyonel önlemler (rotasyon, eğitim, uyarı levhası), hiyerarşinin 4. adımıdır.",
        "DOĞRU: Kişisel Koruyucu Donanım (KKD) tehlikeyi ortadan kaldırmaz, sadece çalışanı korur; bu nedenle EN SON başvurulacak adımdır."
      ]
    },
    {
      q: "6331 sayılı İSG Kanunu'na göre işyerinde Risk Değerlendirmesi yapılmasını sağlamak veya yaptırmak kimin asli yükümlülüğüdür?",
      options: [
        "Sadece İş Güvenliği Uzmanının",
        "İşverenin",
        "Çalışan Temsilcisinin",
        "Çalışma ve Sosyal Güvenlik Bakanlığının",
        "Sendikanın"
      ],
      answer: 1,
      explanation: "Risk değerlendirmesini yapmak veya yaptırmak doğrudan 'İşverenin' yasal yükümlülüğüdür. Uzman ve hekim bu ekipte yer alır ancak nihai sorumluluk işverendedir.",
      optionExplanations: [
        "İş güvenliği uzmanı risk değerlendirmesi ekibinin bir üyesidir ve rehberlik yapar, ancak yasal asli yükümlülük işverene aittir.",
        "DOĞRU: 6331 sayılı Kanun Madde 4 ve Madde 10'a göre işveren, risk değerlendirmesi yapmak veya yaptırmakla yükümlüdür.",
        "Çalışan temsilcisi risk değerlendirmesi ekibinde çalışanları temsilen yer alır, işveren sorumluluğu taşımaz.",
        "Bakanlık mevzuat düzenleyici ve denetleyici makam olup işyerinin risk değerlendirmesini yapmaz.",
        "Sendika çalışan haklarını gözetir, işyerinin risk değerlendirmesini yapma yükümlülüğü yoktur."
      ]
    },
    {
      q: "Aşağıdakilerden hangisi İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği'ne göre 'Risk Değerlendirmesi Ekibi'nde yer alan kişilerden biri DEĞİLDİR?",
      options: [
        "İşveren veya işveren vekili",
        "İş güvenliği uzmanı ve işyeri hekimi",
        "İşyerindeki çalışan temsilcileri",
        "İşyerindeki destek elemanları",
        "İşyerinin İnsan Kaynakları Müdürü / Bordro ve Özlük Şefi"
      ],
      answer: 4,
      explanation: "Risk değerlendirme ekibi; işveren/vekili, İSG uzmanı, işyeri hekimi, çalışan temsilcileri, destek elemanları ve işyerindeki tehlikeler konusunda bilgisi olan çalışanlardan oluşur.",
      optionExplanations: [
        "İşveren veya işveren vekili ekibin doğal başkanı ve koordinatörüdür.",
        "İş güvenliği uzmanı ve işyeri hekimi ekibin teknik ve tıbbi uzman üyeleridir.",
        "Çalışan temsilcileri saha çalışanlarının görüşlerini yansıtmak üzere ekipte zorunlu olarak yer alır.",
        "Destek elemanları (yangın, ilk yardım, arama-kurtarma görevlileri) ekipte yer alır.",
        "DOĞRU (DEĞİLDİR): İnsan Kaynakları Müdürü veya Özlük Şefi Risk Değerlendirmesi Yönetmeliği Madde 6'da sayılan zorunlu ekip üyeleri arasında yer almaz."
      ]
    },
    {
      q: "Aşağıdaki durumlardan hangisinin ortaya çıkması halinde, normal periyodik süre (2-4-6 yıl) beklenmeksizin risk değerlendirmesinin tamamen veya kısmen YENİLENMESİ gerekir?",
      options: [
        "İşyerinde iş kazası, meslek hastalığı veya ramak kala olay meydana gelmesi",
        "Üretim teknolojisi, kullanılan kimyasal madde veya iş ekipmanının değişmesi",
        "İşyerinin taşınması veya binalarda değişiklik yapılması",
        "Çalışma ortamı ölçüm ve sağlık gözetimi sonuçlarına göre gerekli görülmesi",
        "Yukarıdakilerin hepsi"
      ],
      answer: 4,
      explanation: "Yönetmeliğin 12. maddesine göre bu durumların tamamı risk değerlendirmesinin yenilenmesini gerektirir.",
      optionExplanations: [
        "İş kazası, meslek hastalığı veya ramak kala olay yaşanması mevcut tedbirlerin yetersiz olduğunu gösterir ve yenileme sebebidir.",
        "Yeni makine, teknoloji veya kimyasal girişi yeni tehlikeler doğurduğu için yenileme sebebidir.",
        "İşyerinin taşınması veya bina tadilatı fiziksel şartları değiştirdiği için yenileme sebebidir.",
        "Ortam ölçümleri ve sağlık gözetimi sonuçlarının sınırları aşması yenileme sebebidir.",
        "DOĞRU: Yukarıdaki maddelerin tamamı Yönetmelik Madde 12 uyarınca risk değerlendirmesinin derhal yenilenmesini gerektirir."
      ]
    },
    {
      q: "Boyahanede kullanılan kanserojen 'solvent bazlı boya' yerine, sağlığa zararı çok daha düşük olan 'su bazlı boya' kullanılmaya başlanması risk kontrol hiyerarşisinde hangi adıma örnektir?",
      options: [
        "Eliminasyon",
        "İkame",
        "Kişisel koruyucu donanım",
        "İdari önlem",
        "Risk transferi"
      ],
      answer: 1,
      explanation: "Tehlikeli olan madde veya prosesin, tehlikesiz ya da daha az tehlikeli olanla değiştirilmesine 'İkame (Substitution)' denir.",
      optionExplanations: [
        "Eliminasyon boyama işleminin tamamen kaldırılmasıdır; burada boyama devam etmekte ancak malzeme değiştirilmektedir.",
        "DOĞRU: Tehlikeli kimyasalın (solvent bazlı boya) daha az tehlikeli olanla (su bazlı boya) değiştirilmesi 'İkame'dir.",
        "KKD çalışana gaz maskesi vermektir; boyanın değiştirilmesi kaynağa/ortama yönelik üst düzey bir önlemdir.",
        "İdari önlem çalışma süresini kısaltmak veya uyarı levhası asmaktır.",
        "Risk transferi riskin sigorta şirketi gibi üçüncü bir tarafa devredilmesidir; İSG'de tehlikeyi azaltmaz."
      ]
    },
    {
      q: "5x5 L Tipi Matris risk değerlendirmesi yönteminde 'Risk Skoru (R)' aşağıdaki hangi iki bileşenin çarpımıyla hesaplanır?",
      options: [
        "Olasılık x Şiddet",
        "Olasılık x Maliyet",
        "Frekans x Çalışan Sayısı",
        "Şiddet x Zaman",
        "Tehlike x Önlem"
      ],
      answer: 0,
      explanation: "L Tipi 5x5 Matris yönteminde Risk = Olasılık (1-5) x Şiddet (1-5) formülüyle (1 ile 25 arasında) hesaplanır.",
      optionExplanations: [
        "DOĞRU: 5x5 L Tipi Matris yönteminde Risk Skoru = Olasılık (İhtimal: 1-5) x Şiddet (Zarar derecesi: 1-5) çarpımıyla bulunur.",
        "Maliyet finansal bir kavramdır, İSG risk skorunun temel çarpanı değildir.",
        "Frekans Fine-Kinney yönteminde 3. parametredir; L tipi matriste sadece Olasılık ve Şiddet vardır.",
        "Zaman tek başına matris çarpanı değildir.",
        "Tehlike ve önlem nitel kavramlardır, matematiksel matris çarpanları Olasılık ve Şiddettir."
      ]
    },
    {
      q: "Fine-Kinney risk analiz yönteminde risk değeri (R) hesaplanırken kullanılan üç parametre hangisidir?",
      options: [
        "Olasılık x Şiddet x Maliyet",
        "Olasılık x Frekans x Şiddet",
        "Sıcaklık x Nem x Basınç",
        "Kusur x Keşfedilebilirlik x Önem",
        "Tehlike x Zaman x Alan"
      ],
      answer: 1,
      explanation: "Fine-Kinney yönteminde Risk Değeri = İhtimal (Olasılık) x Frekans (Sıklık) x Şiddet çarpımı ile bulunur.",
      optionExplanations: [
        "Maliyet Fine-Kinney risk skoru formülünde yer almaz.",
        "DOĞRU: Fine-Kinney metodunda Risk (R) = İhtimal (Olasılık) x Frekans (Tehlikeye maruz kalma sıklığı) x Şiddet (Sonuç) çarpımıdır.",
        "Sıcaklık, nem ve basınç fiziksel ortam parametreleridir.",
        "Olasılık x Şiddet x Farkedilebilirlik (Keşfedilebilirlik) FMEA (Hata Türü ve Etkileri Analizi) yönteminin formülüdür.",
        "Zaman ve alan Fine-Kinney çarpanları değildir."
      ]
    },
    {
      q: "Yasal yükümlülüklere ve işyerinin önleme politikasına uygun, kayıp veya yaralanma oluşturmayacak düzeye indirilmiş riske mevzuatta ne ad verilir?",
      options: [
        "Sıfır risk",
        "Kabul edilebilir risk seviyesi",
        "Tolerans gösterilemez risk",
        "Mutlak tehlike",
        "Artık tehlike"
      ],
      answer: 1,
      explanation: "Yönetmelikte 'Kabul edilebilir risk seviyesi': Yasal yükümlülüklere ve işyerinin önleme politikasına uygun, kayıp veya yaralanma oluşturmayacak risk seviyesidir.",
      optionExplanations: [
        "Çalışma hayatında mutlak 'sıfır risk' diye bir kavram yoktur; hedef riski kabul edilebilir seviyeye indirmektir.",
        "DOĞRU: Mevzuattaki resmi tanımıyla kayıp veya yaralanma oluşturmayacak düzeye indirilmiş riske 'Kabul Edilebilir Risk Seviyesi' denir.",
        "Tolerans gösterilemez (kabul edilemez) risk, işin derhal durdurulmasını ve acil önlem alınmasını gerektiren en yüksek risktir.",
        "Mutlak tehlike mevzuat tanımı değildir.",
        "Artık (kalıntı) risk önlemler alındıktan sonra geriye kalan risktir; bu riskin kabul edilebilir seviyede olması gerekir."
      ]
    },
    {
      q: "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği'ne göre risk değerlendirmesi sürecinin 5 temel aşaması hangi sırayla yürütülür?",
      options: [
        "Tasarım -> Tehlikeleri tanımlama -> Riskleri belirleme ve analiz -> Risk kontrol tedbirleri -> Dokümantasyon",
        "Risk analizi -> Tehlike tanımlama -> Dokümantasyon -> Risk kontrol adımları -> Denetim",
        "Risk kontrol tedbirlerinin uygulanması -> Tehlike tanımlama -> Ramak kala bildirimi -> Dokümantasyon -> Arşivleme",
        "Dokümantasyon -> Tehlikelerin belirlenmesi -> Risk analizi -> Acil durum planı -> Faaliyet durdurma",
        "İş sağlığı gözetimi -> Tehlike analizi -> Kontrol önlemleri -> Yıllık değerlendirme raporu -> Sertifikasyon"
      ],
      answer: 0,
      explanation: "Süreç: 1) Tasarım/Planlama, 2) Tehlikelerin tanımlanması, 3) Risklerin belirlenmesi ve analizi, 4) Risk kontrol adımları, 5) Dokümantasyon (ve gerektiğinde yenileme) sırasıyla işler.",
      optionExplanations: [
        "DOĞRU: Yönetmelik Madde 7'ye göre: Tasarım -> Tehlikelerin tanımlanması -> Risklerin belirlenmesi ve analizi -> Risk kontrol adımları -> Dokümantasyon.",
        "Tehlikeler tanımlanmadan risk analizi yapılamaz; sıralama yanlıştır.",
        "Risk kontrol tedbirleri tehlike ve risk analizi yapılmadan uygulanamaz.",
        "Dokümantasyon ilk adım değil, sürecin son adımıdır.",
        "İş sağlığı gözetimi hekim faaliyetidir; risk değerlendirmesinin 5 resmi mevzuat aşaması bu şekilde sıralanmaz."
      ]
    },
    {
      q: "Heinrich'in Kaza Piramidi teorisine göre; 1 ölümlü/ağır yaralanmalı kazanın tabanında yaklaşık kaç adet güvensiz hareket / ramak kala olay yer alır?",
      options: ["10", "29", "300", "5", "1"],
      answer: 2,
      explanation: "Heinrich piramidine (1 - 29 - 300 kuralı) göre her 300 ramak kala / ucuz atlatılan olaya karşılık 29 uzuv kayıpsız/hafif yaralanma ve 1 ölümlü/ağır kaza meydana gelir.",
      optionExplanations: [
        "10 sayısı Heinrich piramidinde yer almaz.",
        "29 sayısı piramidin orta basamağındaki 'hafif yaralanmalı kazaları' temsil eder.",
        "DOĞRU: Heinrich'in 1-29-300 kuralına göre piramidin en alt tabanında 300 adet ramak kala / yaralanmasız olay bulunur.",
        "5 sayısı Heinrich'in domino taşları sayısını (5 domino taşı) ifade eder, piramit tabanını değil.",
        "1 sayısı piramidin en tepesindeki ölümlü veya ağır yaralanmalı kazayı ifade eder."
      ]
    },
    {
      q: "6331 sayılı Kanun'a göre aşağıdakilerden hangisi işyerlerinde 'Risklerden Korunma İlkeleri'nden biridir?",
      options: [
        "Toplu korunma tedbirlerine, kişisel korunma tedbirlerine göre öncelik vermek",
        "Kişisel koruyucu donanımları toplu korumaya tercih etmek",
        "İşi çalışana değil, çalışanı makineye uydurmak",
        "Risklerle en son aşamada mücadele etmek",
        "Sadece çok tehlikeli işyerlerinde önlem almak"
      ],
      answer: 0,
      explanation: "6331 sayılı Kanun Madde 5'e göre: Risklerle kaynağında mücadele etmek, işi insana uyumlu hale getirmek ve TOPLU korunma tedbirlerine KİŞİSEL korunma tedbirlerine göre öncelik vermek temel ilkedir.",
      optionExplanations: [
        "DOĞRU: 6331 sayılı Kanun Madde 5/1-ğ bendine göre toplu korunma tedbirlerine kişisel korunma tedbirlerine göre öncelik verilir.",
        "Kanunun tam tersidir; KKD hiçbir zaman toplu korumanın önüne geçemez.",
        "Ergonominin ve kanunun temel ilkesi 'çalışanı makineye değil, işi ve makineyi insana uyumlu hale getirmek'tir.",
        "Kanuna göre risklerle 'en son aşamada' değil, 'kaynağında' mücadele edilir.",
        "6331 sayılı Kanun tehlike sınıfı fark etmeksizin tüm işyerlerinde önlem alınmasını emreder."
      ]
    },
    {
      q: "5x5 L Tipi Matris yönteminde Olasılık = 5 (Çok Yüksek) ve Şiddet = 5 (Ölüm / Sürekli İş Göremezlik) olarak belirlendiğinde Risk Skoru (25) hangi risk bölgesine girer ve ne yapılmalıdır?",
      options: [
        "Kabul Edilemez (Katlanılamaz) Risk (15-25) — İş derhal durdurulur, risk kabul edilebilir seviyeye düşürülmeden işe başlanamaz",
        "Önemli Risk (9-12) — Risk azaltılıncaya kadar iş başlatılmaz, devam eden iş için acil termin planlanır",
        "Orta Düzey Risk (4-8) — Belirlenen riskleri düşürmek için önleyici tedbirler planlanır, mevcut kontroller sürdürülür",
        "Katlanılabilir Risk (2-3) — İlave kontrol sürecine ihtiyaç duyulmayabilir, periyodik izleme yapılır",
        "Önemsiz Risk (1) — Mevcut kontrol tedbirleri yeterlidir, ilave önleme gerek duyulmaz"
      ],
      answer: 0,
      explanation: "5x5 matriste 15, 16, 20 ve 25 puanlık kırmızı bölge 'Kabul Edilemez (Katlanılamaz) Risk'tir; risk kabul edilebilir düzeye indirilinceye kadar iş başlatılmaz veya devam eden iş derhal durdurulur.",
      optionExplanations: [
        "DOĞRU: 15-25 puan aralığı kırmızı (Kabul Edilemez / Katlanılamaz) bölgedir; derhal çalışma durdurulur ve acil önlem alınır.",
        "9-12 puan aralığı turuncu (Önemli Risk) bölgesidir; 25 puan bu bölgeye girmez.",
        "4-8 puan aralığı sarı (Orta Düzey Risk) bölgesidir.",
        "2-3 puan aralığı açık yeşil (Katlanılabilir Risk) bölgesidir.",
        "1 puan koyu yeşil (Önemsiz Risk) bölgesidir."
      ]
    },
    {
      q: "Hata Türü ve Etkileri Analizi (FMEA) yönteminde Risk Öncelik Sayısı (RÖS / RPN) hangi üç parametrenin çarpımıyla (1 ile 1000 arasında) hesaplanır?",
      options: [
        "Olasılık x Şiddet x Farkedilebilirlik",
        "Olasılık x Frekans x Maliyet",
        "Tehlike x Süre x Mesafe",
        "Sıcaklık x Basınç x Hacim",
        "Sadece Olasılık x Şiddet"
      ],
      answer: 0,
      explanation: "FMEA yönteminde her biri 1-10 arasında puanlanan Olasılık (İhtimal), Şiddet (Etki) ve Farkedilebilirlik (Keşfedilebilirlik) çarpılarak RÖS (1 - 1000) bulunur.",
      optionExplanations: [
        "DOĞRU: FMEA'yı diğer yöntemlerden ayıran en önemli özellik 3. çarpanın 'Farkedilebilirlik (Keşfedilebilirlik)' olmasıdır (O x Ş x F).",
        "Olasılık x Frekans x Şiddet Fine-Kinney yöntemine aittir; FMEA'da frekans yerine Farkedilebilirlik vardır.",
        "Tehlike, süre ve mesafe FMEA parametreleri değildir.",
        "Termodinamik büyüklüklerdir, risk analiziyle ilgisi yoktur.",
        "Sadece Olasılık x Şiddet 5x5 L Tipi Matris yöntemidir."
      ]
    },
    {
      q: "Özellikle kimya, petrokimya ve proses endüstrisinde boru hatları ve reaktörlerdeki akış, basınç, sıcaklık sapmalarını 'Kılavuz Kelimeler' (Az, Çok, Hiç, Ters, Başka vb.) kullanarak analiz eden ekip çalışması yöntemi hangisidir?",
      options: [
        "HAZOP",
        "L Tipi 5x5 Matris",
        "Kontrol Listesi (Checklist)",
        "JSA (İş Güvenliği Analizi)",
        "3T Yöntemi"
      ],
      answer: 0,
      explanation: "HAZOP (Hazard and Operability Study), kimya ve proses tesislerinde tasarım parametrelerindeki sapmaları 'Kılavuz Kelimeler (Guide Words: No, More, Less, Reverse...)' ile inceleyen kalitatif/disiplinlerarası yöntemdir.",
      optionExplanations: [
        "DOĞRU: Kılavuz kelimeler (Fazla basınç, Az akış, Ters akış vb.) kullanılarak proses sapmalarını inceleyen yöntem HAZOP'tur.",
        "L Tipi Matris basit sebep-sonuç değerlendirmelerinde kullanılan genel matris yöntemidir.",
        "Checklist önceden hazırlanmış Evet/Hayır sorularıyla yapılan temel tarama yöntemidir.",
        "JSA (İş Güvenliği Analizi) bir işin alt basamaklarına ayrılarak incelenmesidir.",
        "3T yöntemi matris tipi bir analiz değildir."
      ]
    },
    {
      q: "İstenmeyen bir tepe olaydan (örneğin bir patlama veya kazadan) geriye doğru giderek, bu olaya neden olabilecek alt hataları 'VE / VEYA (AND / OR)' mantık kapılarıyla tümdengelimli olarak analiz eden yöntem hangisidir?",
      options: [
        "Hata Ağacı Analizi (FTA - Fault Tree Analysis)",
        "Olay Ağacı Analizi (ETA - Event Tree Analysis)",
        "5x5 L Tipi Matris",
        "Fine-Kinney",
        "Ön Tehlike Analizi (PHA)"
      ],
      answer: 0,
      explanation: "Tepe olaydan (sonuçtan) sebeplere doğru VE/VEYA mantık kapılarıyla geriye giden tümdengelimli yöntem 'Hata Ağacı Analizi (FTA)'dır.",
      optionExplanations: [
        "DOĞRU: FTA (Hata Ağacı Analizi), gerçekleşmiş veya olası bir Tepe Olaydan (Top Event) başlayıp kök nedenlere VE/VEYA kapılarıyla inen tümdengelim yöntemidir.",
        "ETA (Olay Ağacı Analizi), başlangıçtaki bir olaydan ileriye (sonuçlara) doğru giden tümevarım yöntemidir.",
        "5x5 Matris mantık kapıları kullanmaz.",
        "Fine-Kinney Olasılık x Frekans x Şiddet puanlamasına dayanır.",
        "PHA tesisin tasarım aşamasında yapılan ön tehlike taramasıdır."
      ]
    },
    {
      q: "İşkazalarının oluşumunu 5 ardışık domino taşına (1-Sosyal çevre/Kalıtım, 2-Kişisel kusurlar, 3-Güvensiz hareket ve güvensiz durumlar, 4-Kaza, 5-Yaralanma/Zarar) benzeten ve kazaları önlemek için 3. taşın çekilmesi gerektiğini belirten araştırmacı ve oranı nedir?",
      options: [
        "H.W. Heinrich — %88 Hareket, %10 Durum, %2 Önlenemez",
        "Frank E. Bird — %80 Yönetim Kusuru, %20 Çalışan Hatası",
        "James Reason — %95 Örgütsel Hata, %5 Bireysel Kusur",
        "W. Edwards Deming — %85 Sistemik Hata, %15 Operatör Kusuru",
        "Dan Petersen — %100 Ergonomik Uyumsuzluk"
      ],
      answer: 0,
      explanation: "Heinrich'in Domino Teorisine göre kazaların %88'i insana bağlı güvensiz davranışlardan, %10'u ortama bağlı güvensiz durumlardan, %2'si ise kaçınılmaz/beklenmedik olaylardan kaynaklanır.",
      optionExplanations: [
        "DOĞRU: Heinrich Domino Teorisini ortaya koymuş ve %88 Güvensiz Hareket - %10 Güvensiz Durum - %2 Önlenemez kuralını tanımlamıştır.",
        "Frank Bird Kayıp Kontrol Piramidini (1:10:30:600) ve kaza nedenleri teorisini geliştirmiştir.",
        "James Reason İsviçre Peyniri Modelinde aktif ve gizli hataları açıklamıştır.",
        "Deming Toplam Kalite Yönetimi ve PUKÖ döngüsünü geliştirmiştir.",
        "Dan Petersen İSG yönetiminde insan faktörleri ve çalışan motivasyonu üzerine çalışmıştır."
      ]
    },
    {
      q: "Yeni kurulan bir işyerinde veya daha önce hiç risk değerlendirmesi yapılmamış bir işletmede risk değerlendirmesi çalışmasına ne zaman başlanır?",
      options: [
        "İşyerinin tasarım veya kuruluş aşamasından itibaren başlar",
        "İşyerinde ilk çalışan SGK bildirimi yapıldıktan sonraki 30 gün içinde başlar",
        "İşyerinin Tehlike Sınıfı Tebliği kapsamında tescil edilmesinden itibaren 6 ay içinde başlar",
        "İşyerinde çalışan sayısı en az 50'ye ulaşıp İSG Kurulu kurulduğu tarihten itibaren başlar",
        "Çalışma ve İş Kurumu İl Müdürlüğü'nden işletme belgesi alındıktan sonra başlar"
      ],
      answer: 0,
      explanation: "Risk Değerlendirmesi Yönetmeliği'ne göre risk değerlendirmesi işyerinin tasarım veya kuruluş aşamasında başlar; 1 çalışanı olan işyerinde dahi yapılması zorunludur.",
      optionExplanations: [
        "DOĞRU: Risk değerlendirmesi proaktif bir süreçtir; işyerinin tasarım/kuruluş aşamasında başlar ve işyeri açılır açılmaz yürürlükte olmalıdır.",
        "İlk bildirimden sonra 30 gün beklenemez; faaliyet başlamadan önce analiz hazır olmalıdır.",
        "6 aylık bir muafiyet süresi mevzuatta yoktur.",
        "50 çalışan sınırı İSG Kurulu içindir; risk değerlendirmesi 1 çalışanı olan işyerinde bile zorunludur.",
        "İşletme belgesi süreci beklenemez; tasarım aşamasından itibaren riskler tespit edilir."
      ]
    },
    {
      q: "Aşağıdakilerden hangisi çalışma ortamındaki 'Güvensiz Durumlara (Koşullara)' bir örnektir?",
      options: [
        "Çalışanın baretini takmaması",
        "Operatörün makine koruyucusunu sökerek çalışması",
        "Makinenin döner aksamında koruyucu kapağın bulunmaması veya zeminin yağlı/kaygan olması",
        "Forkliftin aşırı hızla kullanılması",
        "Yetkisiz ve ehliyetsiz personelin bakım onarım şalterine müdahale etmesi"
      ],
      answer: 2,
      explanation: "Güvensiz durum; çalışma ortamı, makine veya fiziksel şartlardaki eksikliktir (koruyucusuz makine, kaygan zemin, yetersiz aydınlatma). Diğer şıklar ise çalışanın yaptığı 'Güvensiz Hareket'tir.",
      optionExplanations: [
        "Baret takmamak çalışanın kişisel davranışına bağlı bir 'Güvensiz Hareket'tir.",
        "Mevcut koruyucuyu devre dışı bırakmak çalışanın yaptığı 'Güvensiz Hareket'tir.",
        "DOĞRU: Koruyucusu olmayan makine, kaygan zemin, bozuk topraklama veya yetersiz aydınlatma fiziksel ortama ait 'Güvensiz Durum'dur.",
        "Aşırı hız yapmak sürücünün yaptığı 'Güvensiz Hareket'tir.",
        "Yetkisiz personelin şaltere müdahalesi kişisel davranışa dayalı 'Güvensiz Hareket'tir."
      ]
    },
    {
      q: "Yapılan risk değerlendirmesi dokümanının sayfaları kimler tarafından paraflanır ve son sayfası kimler tarafından imzalanarak işyerinde saklanır?",
      options: [
        "Risk değerlendirmesi ekibinde yer alan tüm üyeler tarafından sayfaları paraflanır ve son sayfası imzalanır",
        "Yalnızca işveren veya işveren vekili tarafından imzalanması mevzuat açısından yeterlidir",
        "Sadece iş güvenliği uzmanı ve işyeri hekimi tarafından imzalanarak onaylı deftere yapıştırılır",
        "İşyeri hekimi ve çalışan temsilcisi tarafından imzalanarak İŞKUR İl Müdürlüğü'ne onaylatılır",
        "İşyerinde kurulu İSG Kurul başkanı ve kurul sekreteri tarafından imzalanır"
      ],
      answer: 0,
      explanation: "Risk değerlendirmesi dokümanının her sayfası paraflanır ve son sayfası risk değerlendirmesi ekibinde yer alan tüm üyeler tarafından imzalanarak arşivlenir.",
      optionExplanations: [
        "DOĞRU: Yönetmeliğe göre dokümanın sayfaları numaralandırılarak tüm ekip üyelerince paraflanır, son sayfası ise tüm ekip üyelerince imzalanır.",
        "Tek başına işveren imzası yeterli değildir; tüm ekibin katılımı ve imzası şarttır.",
        "Sadece uzman ve hekim imzası yeterli değildir; çalışan temsilcisi, destek elemanı ve işveren de imzalamalıdır.",
        "İŞKUR'a onaylatma prosedürü yoktur; işyerinde muhafaza edilir.",
        "İSG Kurulunun imzası değil, bizzat risk değerlendirmesi ekibi üyelerinin imzası aranır."
      ]
    },
    {
      q: "Aynı çalışma alanını birden fazla işverenin paylaşması durumunda (örneğin bir AVM, iş merkezi veya ortak şantiyede) risk değerlendirmesi nasıl yürütülür?",
      options: [
        "Her işveren kendi yürüttüğü işler için ayrı risk değerlendirmesi yapar; diğer işverenleri etkileyebilecek ortak riskler için işverenler arasında koordinasyon sağlanır",
        "Ortak alandaki tüm riskler için yalnızca çalışan sayısı en fazla olan ana işveren tek bir değerlendirme yapar",
        "Mülkiyet sahibi tek bir genel risk analizi hazırlayarak tüm kiracı işverenlere dağıtır ve kiracılar bireysel analizden muaf olur",
        "Yalnızca çok tehlikeli sınıfta yer alan işveren değerlendirme yapar; az tehlikeli sınıftaki işverenlerin katılımı aranmaz",
        "Ortak alandaki riskler yalnızca Çalışma ve Sosyal Güvenlik Bakanlığı müfettişlerince tespit edilir"
      ],
      answer: 0,
      explanation: "Yönetmelik Madde 14'e göre aynı çalışma alanını paylaşan işverenler, yürütülen işler için diğer işverenlerin yürüttüğü işleri de göz önünde bulundurarak ayrı ayrı risk değerlendirmesi gerçekleştirir ve koordinasyon sağlar.",
      optionExplanations: [
        "DOĞRU: Her işveren kendi faaliyetlerinden sorumludur; birbirlerinin çalışmalarından kaynaklanacak ortak tehlikeler için koordinasyon içinde hareket ederler.",
        "Çalışan sayısı en çok olan tek başına yapamaz; her işveren kendi işi için analiz yapmak zorundadır.",
        "Mülk sahibinin genel analizi kiracıları kendi faaliyetlerinin risk değerlendirmesinden muaf tutamaz.",
        "Tehlike sınıfı ne olursa olsun tüm işverenlerin katılımı ve koordinasyonu zorunludur.",
        "Bakanlık denetim organıdır; risk değerlendirmesini yapmak işverenlerin kendi sorumluluğudur."
      ]
    },
    {
      q: "Bir işin kendi içinde ardışık alt adımlara (görev basamaklarına) bölünerek, her bir iş adımındaki tehlikelerin ayrı ayrı belirlendiği ve kontrol önlemlerinin geliştirildiği risk analiz yöntemi hangisidir?",
      options: [
        "İş Güvenliği Analizi (JSA - Job Safety Analysis)",
        "FMEA",
        "Olay Ağacı Analizi (ETA)",
        "L Tipi Matris",
        "What-If (Olursa Ne Olur?)"
      ],
      answer: 0,
      explanation: "İş Güvenliği Analizi (JSA), belirli bir iş veya görevi adım adım alt basamaklarına ayırarak her adımdaki tehlikeleri ve güvenli çalışma yöntemlerini belirleyen görev odaklı yöntemdir.",
      optionExplanations: [
        "DOĞRU: JSA (Job Safety Analysis), işi ardışık adımlara bölerek her adımı 'Görev - Tehlike - Önlem' sırasıyla inceleyen yöntemdir.",
        "FMEA ürün veya sistem bileşenlerindeki arıza türlerini Olasılık x Şiddet x Farkedilebilirlik ile inceler.",
        "ETA başlangıç olayından sonraki güvenlik bariyerlerinin başarısına/başarısızlığına göre sonuçları dallandırır.",
        "L Tipi Matris genel 5x5 olasılık-şiddet tablosudur.",
        "What-If beyin fırtınasına dayalı 'Şöyle olursa ne olur?' sorusuyla yapılan taramadır."
      ]
    }
  ],
  fillQuestions: [
    {
      q: "Risk değerlendirmesi sürecinde tehlikeler belirlenirken çalışanların temsilcisi, işyeri hekimi ve iş güvenliği uzmanının birlikte yer aldığı kurula Risk Değerlendirmesi ________ denir.",
      answers: ["ekibi","takımı"],
      hint: "İşyerinde analizi yürüten çalışma grubu",
      explanation: "Yönetmeliğe göre risk değerlendirmesi işveren başkanlığında uzman, hekim ve çalışan temsilcisinden oluşan bir 'ekip' tarafından yürütülür."
    },
    {
      q: "Tehlikeden kaynaklanacak kayıp, yaralanma ya da başka zararlı sonuç meydana gelme ihtimaline ________ denir.",
      answers: ["risk"],
      hint: "Olasılık x Şiddet ile ifade edilen kavram",
      explanation: "Tehlikenin gerçekleşme olasılığı ve yaratacağı şiddetin bileşkesine 'Risk' denir."
    },
    {
      q: "İş kazalarının önlenmesinde sadece teknik cihaz ve koruyuculara değil; çalışanların tutum, inanç ve davranışlarına odaklanan kültüre ________ kültürü denir.",
      answers: ["güvenlik","isg"],
      hint: "Kurumun genel emniyet yaklaşımı (... kültürü)",
      explanation: "Güvenlik kültürü, işyerindeki tüm çalışanların güvenlik kurallarını içselleştirmesini ve alışkanlık haline getirmesini hedefler."
    },
    {
      q: "İş kazası oluştuktan SONRA devreye giren, sadece ceza veya tazminata odaklanan geleneksel eski yaklaşım modeline ________ (reaktif/tepkisel) yaklaşım denir.",
      answers: ["reaktif","tepkisel"],
      hint: "Olay sonrası devreye giren geleneksel yaklaşım",
      explanation: "Reaktif yaklaşım kaza olduktan sonra önlem almaya çalışır; modern İSG ise proaktiftir."
    },
    {
      q: "Risk değerlendirmesi; Çok Tehlikeli sınıfta 2 yılda bir, Tehlikeli sınıfta ________ yılda bir, Az Tehlikeli sınıfta ise 6 yılda bir yenilenir.",
      answers: ["4","dört","dort"],
      hint: "2 - ? - 6 yıl kuralı",
      explanation: "Yönetmeliğe göre yenileme periyotları Çok Tehlikeli: 2 yıl, Tehlikeli: 4 yıl, Az Tehlikeli: 6 yıldır."
    },
    {
      q: "Tehlikeli olan bir kimyasalın veya yöntemin, tehlikesiz ya da daha az tehlikeli olanıyla değiştirilmesi işlemine ________ (yerine koyma) denir.",
      answers: ["ikame"],
      hint: "Substitution karşılığı",
      explanation: "Tehlikeli madde veya prosesin daha az tehlikeli olanla değiştirilmesine İkame denir."
    },
    {
      q: "Risk kontrol hiyerarşisinde tehlikeli olan bir kimyasalın veya makinenin yerine daha az tehlikeli olanının konulması adımına ________ (yerine koyma) adı verilir.",
      answers: ["ikame","yerine koyma"],
      hint: "Tehlikeliyi zararsızla değiştirme adımı",
      explanation: "İkame (substitution), tehlikeyi tamamen yok edemiyorsak daha az zararlı olan bir alternatifle değiştirme adımıdır."
    },
    {
      q: "Risk değerlendirmesinde toplanan verilerin işyerinde çalışanların ve denetim elemanlarının incelemesine hazır şekilde saklanması gereken yasal süre en az ________ yıldır.",
      answers: ["10","on"],
      hint: "Risk değerlendirmesi evraklarının saklanma süresi",
      explanation: "İşyerinde tutulan risk analiz raporları ve periyodik ölçüm evrakları en az 10 yıl süreyle arşivde saklanmalıdır."
    },
    {
      q: "5x5 L Tipi Matris yönteminde en düşük risk skoru 1x1=1 iken, en yüksek kabul edilemez risk skoru 5x5=________'tir.",
      answers: ["25","yirmi beş","yirmi bes"],
      hint: "5x5 matrisin tepe skoru",
      explanation: "5x5 L Tipi matris 1 ile 25 arasında skor üretir; 15-25 arası katlanılamaz kırmızı risktir."
    },
    {
      q: "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği'ne göre 'Çok Tehlikeli' sınıftaki bir maden veya inşaat işyerinde risk değerlendirmesi en geç ________ yılda bir yenilenir.",
      answers: ["2","iki"],
      hint: "Çok tehlikeli sınıf yenileme periyodu (yıl)",
      explanation: "Yenileme süreleri: Çok Tehlikeli 2 yıl, Tehlikeli 4 yıl, Az Tehlikeli 6 yıldır."
    },
    {
      q: "Hata Türü ve Etkileri Analizi (FMEA) yönteminde Risk Öncelik Sayısı (RÖS); Olasılık x Şiddet x ________ çarpımıyla hesaplanır.",
      answers: ["farkedilebilirlik","keşfedilebilirlik","kesfedilebilirlik"],
      hint: "Hatanın gerçekleşmeden önce tespit edilebilme derecesi",
      explanation: "FMEA'da RÖS (1-1000) = Olasılık (1-10) x Şiddet (1-10) x Farkedilebilirlik (1-10) ile bulunur."
    },
    {
      q: "Heinrich'in Domino Teorisine göre iş kazalarının %88'i insana bağlı güvensiz ________, %10'u ise ortama bağlı güvensiz durumlardan kaynaklanır.",
      answers: ["hareketlerden","davranışlardan","hareket","davranış"],
      hint: "Çalışanın yaptığı hatalı eylem",
      explanation: "Heinrich'e göre kazaların %88'i güvensiz hareketlerden (davranışlardan), %10'u güvensiz durumlardan kaynaklanır."
    },
    {
      q: "6331 sayılı İSG Kanunu'na göre işyerinde risk değerlendirmesi yapılmış olması, işverenin işyerinde iş sağlığı ve güvenliğini sağlama ________ ortadan kaldırmaz.",
      answers: ["yükümlülüğünü","sorumluluğunu","yukumlulugunu","sorumlulugunu"],
      hint: "İşverenin devam eden hukuki mesuliyeti",
      explanation: "Risk değerlendirmesi yapılmış olması, işverenin İSG sağlama yönündeki asli hukuki ve cezai sorumluluğunu kaldırmaz."
    },
    {
      q: "Kimya ve proses endüstrisinde 'Az, Çok, Hiç, Ters' gibi kılavuz kelimeler kullanılarak sapmaların incelendiği risk analiz yönteminin kısaltması ________'tur.",
      answers: ["HAZOP","hazop"],
      hint: "Hazard and Operability Study kısaltması",
      explanation: "HAZOP, proses parametrelerindeki sapmaları kılavuz kelimelerle analiz eden yöntemdir."
    },
    {
      q: "Funda Hoca'nın belirttiği risk analiz adımlarında, belirlenen risklerin mevzuat ve şirket hedeflerine göre tolere edilip edilemeyeceğine karar verilmesine risk ________ aşaması denir.",
      answers: ["derecelendirme","puanlama","onceliklendirme","önceliklendirme"],
      hint: "Risklerin tolere edilebilirlik sıralaması",
      explanation: "Risk puanlandıktan sonra kabul edilebilirlik düzeyine göre aksiyon öncelik sırasına dizilir."
    }
  ]
};
