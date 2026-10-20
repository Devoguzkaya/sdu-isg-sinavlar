// Fiziksel ve Kimyasal Risk Unsurları (Dr. Öğr. Üyesi Dicle ÖZDEMİR KÜÇÜKÇAPRAZ — Bölüm 1 Vize PDF [159 Syf] & Bölüm 2 PDF)
export const fkruTestThemes = [
  'Bölüm 1: Temel İSG Kavramları (İşyeri, İşveren, Tehlike, Risk, Ramak Kala, 6331 ve 5510 m.14) ve Risk Kontrol Hiyerarşisi',
  'Bölüm 1: İşyeri Risk Unsurları Sınıflandırması (Fiziksel, Kimyasal, Biyolojik, Ergonomik ve Psikososyal Riskler)',
  'Bölüm 1: Sesin Fiziksel Özellikleri (Dalga Boyu, 20°C Hava 340 m/s - Su 1410 m/s, Subsonik/Ultrasonik, 0-140 dB)',
  'Bölüm 1: Gürültü Yönetmeliği (80/85/87 dB(A), 112/140/200 Pa Tepe Değeri, +3 dB Kuralı, 4000-4500 Hz ve KKD Azaltma Tablosu)',
  'Bölüm 1: Titreşim Yönetmeliği (El-Kol: 2,5 ve 5,0 m/s², Bütün Vücut: 0,5 ve 1,15 m/s², Denizde >1 Hz, <2 Hz Hareket Hastalığı)',
  'Bölüm 1: Basınç Risk Etmeni (4,5 N/cm², Akut 3 Gün / Kronik 10 Yıl Yükümlülük, Dalgıç Odası 40 m³ Hava, 22 m Derinlik ve 5 Saat)',
  'Bölüm 1: Termal Konfor (Sıcaklık, Nem %30-80 [Higrometre/Psikrometre], Hava Hızı 0,3-0,5 m/s [Anemometre], Radyant Isı [Glob])',
  'Bölüm 1: Aydınlatma (400-700 nm, Lüks = Lümen/m², Lüksmetre, Direkt/Endirekt, 1/10 Pencere Oranı, %80-90 Göz Algısı)',
  'Bölüm 1 (14 Ekim Dersi): Radyasyon (Alfa 5 cm, Beta, Nötron, Gama/X, Kızılötesi Katarakt, Surveymetre/Dozimetre) ve Ergonomi Farkları',
  'Bölüm 2: Kimyasal Maddeler Yönetmeliği (20/10/2023 Güncel RG: 30 cm Solunum Bölgesi, TWA/STEL, Biyolojik Sınır Değer, MGBF/GBF)'
];

export const fkruConceptGroups = [
  {
    groupName: 'Bölüm 1: Temel Kavramlar, İşyeri Risk Sınıflandırması ve Gürültü Fizik/Mevzuatı (Dicle Hoca Bölüm 1 PDF)',
    items: [
      {
        opt: 'Ramak Kala Olay',
        desc: 'Bölüm 1 PDF Slayt 14-15: ILO\'ya göre İş Kazası planlanmamış ve beklenmeyen bir olay sonucu sakatlanmaya ve zarara neden olan durumdur. Ramak Kala Olay ise kişilere, işyerinin fiziki bütünlüğüne veya ekipmanlara zarar verme potansiyeli olduğu halde zarar vermeyen olaylardır ve iş kazalarının habercisidir.',
        q: 'Dr. Öğr. Üyesi Dicle Özdemir Küçükçapraz\'ın Bölüm 1 sunumuna göre; "kişilere, işyerinin fiziki bütünlüğüne veya ekipmanlara zarar verme potansiyeli olduğu halde zarar vermeyen ve iş kazalarının habercisi olan olaylar" nasıl tanımlanır?'
      },
      {
        opt: 'Psikososyal Riskler ve Biyolojik Riskler',
        desc: 'Bölüm 1 PDF Slayt 45-51: Yapılan işin gerekleri işçinin bilgi/becerisiyle çatıştığında (nicel aşırı yük, nitel düşük yük) ve sosyal destek yetersizliğinde "Psikososyal riskler" oluşur. Biyolojik risklerde ise enfeksiyon zincirinin son halkası "Duyarlı (Çalışan)"dır (tarım, sağlık ve laboratuvar çalışanları en yoğun risk grubudur).',
        q: 'Bölüm 1 ders notlarına göre; "nicel aşırı yük ve nitel düşük yük" hangi risk grubuna girer ve biyolojik risklerde "enfeksiyon zincirinin son halkası" nedir?'
      },
      {
        opt: 'Sesin Yayılma Hızı ve Frekans Türleri',
        desc: 'Bölüm 1 PDF Slayt 57-64: Ses maddesel ortamda boyuna yayılan sıkışma-genleşme dalgasıdır (boşlukta yayılmaz). 20°C havada hızı 340 m/sn, 20°C suda hızı 1410 m/sn\'dir. Frekansı 20 Hz\'den düşük seslere "Subsonik", 20 Hz–20 kHz arasına "İşitilebilen ses", 20 kHz\'den büyüklere ise "Ultrasonik ses" denir.',
        q: 'Bölüm 1 ders sunumuna göre; sesin 20°C havada ve 20°C sudaki yayılma hızları ile frekansı 20 Hz\'den düşük olan seslere verilen ad hangisinde doğru verilmiştir?'
      },
      {
        opt: 'Gürültü Eylem ve Sınır Değerleri',
        desc: 'Bölüm 1 PDF Slayt 22 & 68: Çalışanların Gürültü ile İlgili Risklerden Korunmalarına Dair Yönetmeliğe göre; En düşük maruziyet eylem değeri 80 dB(A) (Ptepe = 112 Pa / 135 dB(C)), En yüksek maruziyet eylem değeri 85 dB(A) (Ptepe = 140 Pa / 137 dB(C)), Maruziyet sınır değeri ise 87 dB(A) (Ptepe = 200 Pa / 140 dB(C))\'dir.',
        q: 'Dicle Hoca\'nın Bölüm 1 (Slayt 22) ders notlarına göre Gürültü Yönetmeliğindeki "En Düşük Eylem", "En Yüksek Eylem" ve "Maruziyet Sınır" değerleri hem dB(A) hem de Tepe Ses Basıncı (Pa / dB(C)) cinsinden hangisinde doğru verilmiştir?'
      },
      {
        opt: 'Kulak Koruyucu Donanım Etkisi Kuralı',
        desc: 'Bölüm 1 PDF Slayt 22: Maruziyet sınır değerleri (87 dB) uygulanırken çalışanın kullandığı kişisel kulak koruyucu donanımların koruyucu etkisi dikkate alınır; ancak maruziyet eylem değerlerinde (80 ve 85 dB) kulak koruyucularının etkisi dikkate alınmaz.',
        q: 'Gürültü Yönetmeliğine göre çalışanların gürültü maruziyeti değerlendirilirken "kişisel kulak koruyucu donanımların (KKD) koruyucu etkisi" hangi değerlerin uygulanmasında dikkate alınır, hangilerinde alınmaz?'
      },
      {
        opt: 'Zararlı Gürültü Tespiti ve Ses Kaynağı Toplamı',
        desc: 'Bölüm 1 PDF Slayt 67 & 69: Bir işyerinde 1 metre uzaklıktaki bir kişiyle konuşmak için sesi yükseltmek gerekiyorsa o işyerinde zararlı düzeyde gürültü var demektir. Aynı iki gürültü kaynağının bulunduğu ortamda toplam gürültü düzeyi = Birinci Ses Kaynağı + 3 dB\'dir.',
        q: 'Bölüm 1 sunumuna göre; bir işyerinde ölçüm cihazı olmadan zararlı düzeyde gürültü olduğunun pratik göstergesi olan konuşma mesafesi ve özdeş iki ses kaynağının birlikte çalışması durumunda gürültü artış miktarı nedir?'
      },
      {
        opt: 'İşitme Kaybı Frekans Eşiği',
        desc: 'Bölüm 1 PDF Slayt 65 & 74: İşitme eşiği 0 dB, ağrı eşiği 140 dB\'dir. Günlük konuşma frekansı 500–2000 Hz aralığı iken, gürültüye bağlı işitme kayıplarında odyometride İLK etkilenen frekans aralığı 4000–4500 Hz aralığıdır (akustik çentik).',
        q: 'Bölüm 1 Slayt 74\'e göre; insanlarda günlük konuşma frekansı aralığı ile gürültüye bağlı işitme kayıplarında İLK etkilenen frekans aralığı sırasıyla hangileridir?'
      },
      {
        opt: 'KKD Gürültü Azaltma Seviyeleri',
        desc: 'Bölüm 1 PDF Slayt 80: Gürültüden korunmada kullanılan malzemelerin ses azaltma düzeyleri: Pamuk 5–16 dB, Parafinli pamuk 20–35 dB, Kulak tıkacı 20–45 dB, Kulaklık 12–48 dB\'dir.',
        q: 'Bölüm 1 Slayt 80\'deki tabloya göre gürültüden korunmada kullanılan "Pamuk, Parafinli pamuk, Kulak tıkacı ve Kulaklık" malzemelerinin sağladığı desibel (dB) azaltma aralıkları hangisinde doğru verilmiştir?'
      }
    ]
  },
  {
    groupName: 'Bölüm 1: Titreşim, Basınç ve Termal Konfor Risk Etmenleri',
    items: [
      {
        opt: 'El-Kol Titreşimi Eylem ve Sınır Değerleri',
        desc: 'Bölüm 1 PDF Slayt 34 & 87: El-kol titreşiminde 8 saatlik A(8) günlük maruziyet eylem değeri 2,5 m/s², sınır değer 5,0 m/s²\'dir. Çift elle kullanılan aygıtlarda ölçümler her el için ayrı ayrı yapılır ve her iki eldeki en yüksek değer esas alınır.',
        q: 'Titreşim Yönetmeliği ve Bölüm 1 Slayt 34\'e göre; "El-Kol Titreşimi" sınır/eylem değerleri ve çift elle kullanılan makinelerde ölçüm değerlendirme kuralı nedir?'
      },
      {
        opt: 'Bütün Vücut Titreşimi Eylem ve Sınır Değerleri',
        desc: 'Bölüm 1 PDF Slayt 35, 41 & 88: Bütün vücut titreşiminde 8 saatlik A(8) günlük maruziyet eylem değeri 0,5 m/s², sınır değer 1,15 m/s²\'dir. Deniz taşımacılığında 1 Hz\'in üzerindeki titreşimler değerlendirmeye alınır.',
        q: 'Bütün vücut titreşimiyle ilgili olarak 8 saatlik günlük maruziyet eylem/sınır değerleri ve deniz taşımacılığında değerlendirmeye alınan frekans alt sınırı nedir?'
      },
      {
        opt: 'Düşük Frekanslı Titreşim ve Ölçümü',
        desc: 'Bölüm 1 PDF Slayt 89 & 91: Frekansı 2 Hz\'den küçük (f < 2 Hz) çok düşük frekanslı titreşimler otomobil, uçak, gemi seyahatlerinde merkezi sinir sistemi şikayetlerine (bulantı, kusma, soğuk ter) yol açar. İşçi sağlığı açısından titreşim frekans bantlarına ayrılarak "vibrasyon detektörü" ile ölçülür.',
        q: 'Bölüm 1 Slayt 89\'a göre; otomobil, uçak ve gemi gibi araçlarla seyahat sırasında merkezi sinir sistemini etkileyerek bulantı, kusma ve soğuk terlemeye yol açan titreşimlerin frekans aralığı nedir?'
      },
      {
        opt: 'Yüksek Basınçta Çalışma ve Süre Sınırı',
        desc: 'Bölüm 1 PDF Slayt 93-94: Basınç birim alana yapılan kuvvettir (Bar veya N/m²), barometre ile ölçülür. Normalde 4,5 N/cm² kadar basınç değişimi rahatsızlık hissi dışında sağlık sorunu yaratmaz. Basınç değişikliği nedeniyle görülen akut olaylarda yükümlülük süresi 3 gün, diğer olaylarda ise 10 yıldır.',
        q: 'Bölüm 1 Slayt 94\'e göre; organizmada sağlık sorunu yaratmayan normal basınç değişimi sınırı ile basınç değişikliğine bağlı "akut olaylarda" ve "diğer (kronik) olaylarda" yükümlülük süreleri sırasıyla nedir?'
      },
      {
        opt: 'Dalgıç Odası ve Sualtı Dalış Kuralları',
        desc: 'Bölüm 1 PDF Slayt 96: Dalgıç odalarında kişi başına saatte en az 40 m³ hava sağlanacak ve havadaki karbondioksit (CO2) miktarı %0,1\'i geçmeyecektir. Bir dalgıç 22 metreden fazla derinliğe bir günde iki defadan fazla dalamaz ve bu iki dalma arasında en az 5 saat geçmelidir.',
        q: 'Bölüm 1 Slayt 96\'da yer alan yüksek basınç (dalgıçlık) kurallarına göre; dalgıç odalarında kişi başına saatlik temiz hava miktarı, maksimum derinlik sınırı (günde en fazla 2 dalış için) ve iki dalış arasındaki asgari bekleme süresi nedir?'
      },
      {
        opt: 'Termal Konfor Faktörleri',
        desc: 'Bölüm 1 PDF Slayt 100-108: Termal konforu etkileyen 4 çevresel faktör: Hava sıcaklığı, Radyant sıcaklık, Hava hızı ve Nemdir. Termal konforu etkileyen 2 kişisel faktör ise: Giyim izolasyonu ve İş hızı / metabolik ısıdır (art러스 fiziksel aktivite ve yaş/boy/kilo/cinsiyet).',
        q: 'İşyerinde termal konforu etkileyen 4 çevresel faktörün yanı sıra, Bölüm 1 Slayt 107-108\'de tanımlanan 2 temel "Kişisel Faktör" aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Bağıl Nem ve Ölçüm Yöntemi',
        desc: 'Bölüm 1 PDF Slayt 105-106 & 113: Mutlak nem 1 m³ havadaki su buharı miktarıdır; bağıl nem ise aynı sıcaklıkta doymuş havadaki mutlak nemin yüzdesidir (sıcaklık arttıkça bağıl nem azalır). Bir işyerinde bağıl nem %30–80 (ideal %40–70) olmalı ve Higrometre ya da Psikrometre ile ölçülmelidir.',
        q: 'Bölüm 1 Slayt 106 ve 113\'e göre; bir işyerinde bağıl nem yüzde kaç aralığında olmalıdır, hangi cihazlarla ölçülür ve ortam sıcaklığı arttıkça bağıl nem nasıl değişir?'
      },
      {
        opt: 'Hava Akım Hızı ve Radyant Isı',
        desc: 'Bölüm 1 PDF Slayt 103-104 & 113: İşyerinde hava akım hızı saniyede 0,3–0,5 metreyi (m/sn) aşmamalıdır (aşarsa ısı stresi/cereyan oluşturur) ve "Anemometre" ile ölçülür. Radyant ısı ise "Glob Termometre" ile ölçülür.',
        q: 'Bölüm 1 Slayt 113\'e göre; işyerinde termal konforun bozulmaması için "Hava Akım Hızı" saniyede kaç metreyi aşmamalıdır ve "Hava Akım Hızı / Radyant Isı" sırasıyla hangi cihazlarla ölçülür?'
      }
    ]
  },
  {
    groupName: 'Bölüm 1: Aydınlatma, Radyasyon, Ergonomi ve Bölüm 2: Kimyasal Risk Unsurları',
    items: [
      {
        opt: 'Görünür Işık ve Aydınlatma Türleri',
        desc: 'Bölüm 1 PDF Slayt 116-121: Görünür ışık elektromanyetik spektrumun 400–700 nanometre (nm) aralığındadır. Işık çalışılan bölgeye doğrudan geliyorsa "Direkt", başka bir yüzeye çarpıp geliyorsa "Endirekt", sadece çalışılan bölgeyi aydınlatıyorsa "Lokal (Yarı direkt)" aydınlatma denir.',
        q: 'Bölüm 1 Slayt 116 ve 118\'e göre; insan gözünün algılayabildiği görünür ışığın dalga boyu aralığı (nm) ile ışığın başka bir yüzeye çarpıp yansıyarak çalışma alanına gelmesiyle oluşan aydınlatma türü nedir?'
      },
      {
        opt: 'İşyeri Aydınlatma Kriterleri',
        desc: 'Bölüm 1 PDF Slayt 123-130: İşyeri taban yüzeyinin en az 1/10\'u oranında ışık alacak pencereler olmalıdır. İnsanın enformasyon algılamasının %80 ile %90\'ı göz kanalıyla gerçekleşir. Pencerelerde ışık geçirme katsayısı %30\'dan fazla olan açık renk perdeler kullanılır. Aydınlatma şiddeti birimi Lüks (Işık akısı / toplam alan), ölçen alet Lüksmetredir.',
        q: 'Bölüm 1 Aydınlatma ders notlarına göre; işyeri pencerelerinin taban yüzeyine en az oranı, insan algılamasının yüzde kaçının gözle gerçekleştiği ve aydınlatma ölçüm birimi/cihazı hangisinde doğru verilmiştir?'
      },
      {
        opt: 'Alfa Parçacıklarının Zırhlanması',
        desc: 'Bölüm 1 PDF Slayt 138 (ve 14 Ekim dersi): Alfa ışınları ağır parçacıklar olup havada yaklaşık 5 cm\'lik mesafedeki bir kağıt tabakasını veya alüminyum levhayı geçemezler; dıştan önemli tehlike yaratmazlar ancak solundukları veya yutuldukları takdirde hücreler üzerinde çok zararlıdırlar.',
        q: '14 Ekim dersinde ve Bölüm 1 Slayt 138\'de işlenen radyasyon türlerinden; "ağır parçacık yapısı nedeniyle havada yaklaşık 5 cm gidebilen ve bir kağıt tabakasını bile geçemeyen, ancak solunduğunda veya yutulduğunda iç dokulara çok zararlı olan" ışın hangisidir?'
      },
      {
        opt: 'İnfrared vs İyonlaştırıcı Işınlar',
        desc: 'Bölüm 1 PDF Slayt 137-138: İyonlaştırıcı olmayan Kızılötesi (infrared) ışınlar vücuda kolayca girip aşırı ısı verir, deri yanıkları ve gözde "katarakt" meydana getirir; mikrodalga ve RF dokuları ısıtır. İyonlaştırıcı Gama ve X-ışınları ise vücuda derinlemesine girerek hücreleri tahrip eder.',
        q: 'Bölüm 1 Slayt 138\'e göre; vücudun açık kısımlarını ısıtarak deri yanıklarına ve özellikle gözde "Katarakt" hastalığına yol açan ışın türü ile dokulara derinlemesine nüfuz eden elektromanyetik ışınlar hangileridir?'
      },
      {
        opt: 'Radyasyon Ölçüm Cihazları',
        desc: 'Bölüm 1 PDF Slayt 139: Dıştan etki yapan ışınlar için parsiyel global dozimetri, iç kontaminasyonun ölçülmesi için ise "total veya parsiyel beden spektrometresi" yapılır. 1) Doz Hızı Ölçerler (Surveymetreler): Ortamdaki anlık radyasyon doz hızını ölçer, 2) Kontaminasyon monitörleri, 3) Dozimetreler: Belli bir zaman aralığındaki toplam radyasyon dozunu ölçer.',
        q: 'Bölüm 1 Slayt 139\'a göre; "bulunduğu yerdeki anlık radyasyon doz hızını ölçen cihaz", "belli bir zaman aralığındaki toplam radyasyon dozunu ölçen cihaz" ve "iç kontaminasyonu ölçen yöntem" sırasıyla hangileridir?'
      },
      {
        opt: 'Ergonomi ve Fiziksel Risk Tanımı',
        desc: 'Bölüm 1 PDF Slayt 143-144 (ve Çalışma Sorularında vurgulanan soru): Ergonomi ve fiziksel risk kavramları birbirine yakın ancak farklıdır; ergonomi insanların işleriyle etkileşimlerini, üretkenliklerini ve konforlarını artırmak için işyeri tasarımıyla ilgilenirken, fiziksel risk çalışanların maruz kaldığı fiziksel faktörlerin sağlık/güvenlik risklerine odaklanır.',
        q: 'Bölüm 1 sonu çalışma sorularında da yer aldığı üzere; "Ergonomi" kavramı ile "Fiziksel Risk" kavramı arasındaki temel fark aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Solunum Bölgesi Tanımı ve Yönetmeliği',
        desc: 'Bölüm 2 PDF Slayt 3-5: 20/10/2023 tarihli ve 32345 sayılı Resmi Gazete ile güncellenen Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmeliğe göre "Solunum bölgesi"; merkezi, kişinin kulaklarını birleştiren çizginin orta noktası olan 30 cm yarıçaplı kürenin, başın ön kısmında kalan yarısıdır.',
        q: 'Bölüm 2 Slayt 3-5\'te yer alan (20/10/2023 güncel değişiklikli) Kimyasal Maddeler Yönetmeliğine göre "Solunum Bölgesi"nin yasal tanımı aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Çok Kolay Alevlenir Madde ve Kurşun İzlemesi',
        desc: 'Bölüm 2 PDF Slayt 17 & 51: 0°C\'den düşük parlama noktası ve 35°C\'den düşük kaynama noktasına sahip sıvı hâldeki maddeler "Çok kolay alevlenir madde" olarak tanımlanır. Kurşun ve iyonik kurşun bileşiklerinde biyolojik izleme, absorbsiyon spektrometri veya eşdeğer yöntemle kanda kurşun seviyesinin (PbB) ölçülmesini kapsar.',
        q: 'Bölüm 2 ders notlarına göre; "0°C\'den düşük parlama noktası ve 35°C\'den düşük kaynama noktasına sahip sıvı maddeler" hangi tehlike sınıfına girer?'
      },
      {
        opt: 'MGBF ve Tehlike Kodları',
        desc: 'Bölüm 2 PDF Slayt 121-133: MGBF (GBF), kimyasal madde üreten/ithal eden firmaların hazırlamak zorunda olduğu yasal iletişim formudur. Formdaki H kodları (Hazard statements) maddenin tehlike/zararlılık ifadelerini gösterir. Çevre dostu, sürdürülebilir ve insan sağlığına daha az zarar veren kimyasal alternatiflerin tasarımına ise "Yeşil Kimya" denir.',
        q: 'Bölüm 2 Slayt 125 ve 133\'e göre; Malzeme Güvenlik Bilgi Formu\'nda (MGBF/GBF) maddenin tehlike sınıflarını belirten kod harfi ile çevre dostu/sürdürülebilir kimyasal tasarım yaklaşımına verilen ad nedir?'
      }
    ]
  }
];

export const fkruExtraFill = [
  { q: 'Kişilere, işyerinin fiziki bütünlüğüne veya ekipmanlara zarar verme potansiyeli olduğu halde zarar vermeyen ve iş kazalarının habercisi olan olaylara _______ olay denir.', a: 'ramak kala', alts: ['ramakkala'], exp: 'Bölüm 1 Slayt 15: Zarar verme potansiyeli olduğu halde zarar vermeyen olaylara ramak kala olay denir.' },
  { q: 'Yapılan işin gerekleri işçinin bilgi ve becerisiyle çatıştığında (nicel aşırı yük, nitel düşük yük) ve sosyal destek yetersiz olduğunda ortaya çıkan risklere _______ risk unsurları denir.', a: 'psikososyal', alts: ['psiko-sosyal'], exp: 'Bölüm 1 Slayt 45: Nicel aşırı yük ve nitel düşük yük psikososyal risk unsurlarıdır.' },
  { q: 'Biyolojik risk etmenlerinde enfeksiyon zincirinin son halkası, kişisel savunma mekanizmaları veya stres/beslenme yetersizliği nedeniyle etkilenen _______ (çalışan) halkasıdır.', a: 'duyarlı', alts: ['duyarli', 'konakçı', 'çalışan'], exp: 'Bölüm 1 Slayt 50: Enfeksiyon zincirinin son halkası Duyarlı (Çalışan)\'dır.' },
  { q: 'Sesin 20°C sıcaklıktaki havada yayılma hızı _______ m/sn iken, 20°C sudaki yayılma hızı 1410 m/sn\'dir.', a: '340', alts: ['üç yüz kırk'], exp: 'Bölüm 1 Slayt 59: 20°C havada sesin hızı 340 m/sn\'dir.' },
  { q: 'Frekansı 20 Hz\'den düşük olan seslere _______ sesler, 20 Hz ile 20 kHz arasına işitilebilen sesler, 20 kHz\'den yüksek olanlara ise ultrasonik sesler denir.', a: 'subsonik', alts: ['infrasonik'], exp: 'Bölüm 1 Slayt 64: 20 Hz altı sesler subsonik seslerdir.' },
  { q: 'İnsan kulağı için işitme eşiği 0 dB iken, ağrı eşiği düzeyindeki ses şiddeti _______ dB\'dir.', a: '140', alts: ['yüz kırk'], exp: 'Bölüm 1 Slayt 65: İşitme eşiği 0 dB, ağrı eşiği 140 dB\'dir.' },
  { q: 'Bir işyerinde _______ metre uzaklıktaki bir kişiyle konuşmak için sesi yükseltmek gerekiyorsa, o işyerinde zararlı düzeyde gürültü var demektir.', a: '1', alts: ['bir'], exp: 'Bölüm 1 Slayt 67: 1 metre uzaklıktaki kişiyle konuşmak için sesi yükseltmek gerekiyorsa zararlı gürültü vardır.' },
  { q: 'Gürültü Yönetmeliğine göre En Düşük Maruziyet Eylem Değeri 80 dB(A), En Yüksek Maruziyet Eylem Değeri 85 dB(A) ve Maruziyet Sınır Değeri _______ dB(A)\'dır.', a: '87', alts: ['seksen yedi'], exp: 'Bölüm 1 Slayt 22 & 68: Maruziyet sınır değeri 87 dB(A)\'dır.' },
  { q: 'Gürültü Yönetmeliğine göre çalışanın kullandığı kişisel kulak koruyucu donanımların (KKD) koruyucu etkisi sadece maruziyet _______ değerleri (87 dB) uygulanırken dikkate alınır; eylem değerlerinde dikkate alınmaz.', a: 'sınır', alts: ['sinir'], exp: 'Bölüm 1 Slayt 22: KKD koruyucu etkisi maruziyet sınır değerlerinde dikkate alınır.' },
  { q: 'Aynı (özdeş) iki gürültü kaynağının bulunduğu bir ortamda toplam gürültü düzeyi, birinci ses kaynağının düzeyine +_______ dB eklenerek bulunur.', a: '3', alts: ['üç', 'uc'], exp: 'Bölüm 1 Slayt 69: Toplam Gürültü Düzeyi = Birinci Ses Kaynağı + 3 dB.' },
  { q: 'İnsanlarda günlük konuşma frekansı 500–2000 Hz aralığı iken, gürültüye bağlı işitme kayıplarında ilk etkilenen frekans aralığı _______ Hz aralığıdır.', a: '4000-4500', alts: ['4000', '4500', '4000 - 4500'], exp: 'Bölüm 1 Slayt 74: İşitme kayıplarında ilk etkilenen frekans aralığı 4000-4500 Hz\'dir.' },
  { q: 'El-kol titreşiminde 8 saatlik günlük maruziyet eylem değeri 2,5 m/s² iken, maruziyet sınır değeri _______ m/s²\'dir.', a: '5', alts: ['5,0', '5.0', 'beş'], exp: 'Titreşim Yönetmeliği: El-kol titreşimi sınır değeri 5,0 m/s²\'dir.' },
  { q: 'Bütün vücut titreşiminde 8 saatlik günlük maruziyet eylem değeri 0,5 m/s² iken, maruziyet sınır değeri _______ m/s²\'dir.', a: '1,15', alts: ['1.15'], exp: 'Titreşim Yönetmeliği: Bütün vücut titreşimi sınır değeri 1,15 m/s²\'dir.' },
  { q: 'Titreşim Yönetmeliğinin özel koşullarına göre deniz taşımacılığında _______ Hz\'in üzerindeki titreşimler değerlendirmeye alınır.', a: '1', alts: ['bir'], exp: 'Bölüm 1 Slayt 35 & 41: Deniz taşımacılığında 1 Hz\'in üzerindeki titreşimler değerlendirilir.' },
  { q: 'Otomobil, uçak ve gemi seyahatlerinde merkezi sinir sistemini etkileyerek bulantı, kusma ve soğuk terlemeye yol açan çok düşük frekanslı titreşimler frekansı _______ Hz\'den küçük olan titreşimlerdir.', a: '2', alts: ['iki'], exp: 'Bölüm 1 Slayt 89: Çok düşük frekanslı titreşimler (f < 2 Hz) hareket hastalığına yol açar.' },
  { q: 'İşçi sağlığı bakımından önemli olan mekanik titreşim, frekans bantlarına ayrılarak _______ detektörü ile ölçülür.', a: 'vibrasyon', alts: ['titreşim', 'ivmeölçer'], exp: 'Bölüm 1 Slayt 91: Titreşim vibrasyon detektörü ile ölçülür.' },
  { q: 'Bölüm 1 Slayt 94\'e göre normalde _______ N/cm² kadar basınç değişimi organizmada rahatsızlık hissi dışında sağlık sorunu yaratmaz.', a: '4,5', alts: ['4.5'], exp: 'Bölüm 1 Slayt 94: Normalde 4,5 N/cm² kadar basınç değişimi sağlık sorunu yaratmaz.' },
  { q: 'Basınç değişikliği nedeniyle görülen akut olaylarda yükümlülük süresi _______ gün, diğer (kronik) olaylarda ise yükümlülük süresi 10 yıldır.', a: '3', alts: ['üç', 'uc'], exp: 'Bölüm 1 Slayt 94: Akut olaylarda yükümlülük süresi 3 gün, diğer olaylarda 10 yıldır.' },
  { q: 'Dalgıç odalarında kişi başına saatte en az _______ m³ hava sağlanmalı ve havadaki karbondioksit (CO2) miktarı %0,1\'i geçmemelidir.', a: '40', alts: ['kırk', 'kirk'], exp: 'Bölüm 1 Slayt 96: Dalgıç odalarında kişi başına saatte en az 40 m³ hava sağlanmalıdır.' },
  { q: 'Bir dalgıç _______ metreden fazla derinliğe bir günde iki defadan fazla dalamaz ve bu iki dalma arasında en az 5 saat geçmelidir.', a: '22', alts: ['yirmi iki'], exp: 'Bölüm 1 Slayt 96: 22 metreden fazla derinliğe günde iki defadan fazla dalınamaz.' },
  { q: '1 m³ havadaki su buharı miktarına mutlak nem; aynı sıcaklıkta doymuş havadaki mutlak nemin yüzdesine ise _______ nem denir ve sıcaklık arttıkça bu oran azalır.', a: 'bağıl', alts: ['bagil', 'nispi'], exp: 'Bölüm 1 Slayt 106: Bağıl nem sıcaklık arttıkça azalır.' },
  { q: 'Bir işyerinde bağıl nem %30–80 aralığında olmalı ve ortamdaki nem _______ ya da Psikrometre ile ölçülmelidir.', a: 'higrometre', alts: [], exp: 'Bölüm 1 Slayt 113: Ortamdaki nem Higrometre ya da Psikrometre ile ölçülür.' },
  { q: 'İşyerinde termal konforun bozulmaması ve ısı stresi oluşmaması için hava akım hızı saniyede _______ metreyi (m/sn) aşmamalıdır.', a: '0,3-0,5', alts: ['0,5', '0.5', '0,3', '0.3-0.5'], exp: 'Bölüm 1 Slayt 113: Hava akım hızı saniyede 0,3-0,5 metreyi aşmamalıdır.' },
  { q: 'Termal konforda hava akım hızı Anemometre ile ölçülürken, ılık/sıcak yüzeylerden yayılan radyant ısı _______ termometre ile ölçülür.', a: 'glob', alts: ['glop', 'kara küre'], exp: 'Bölüm 1 Slayt 113: Radyant ısı Glop (Glob) termometre ile ölçülür.' },
  { q: 'İnsanların vücutlarının ısı dengesini koruyamadıkları aşırı sıcak veya aşırı soğuk termal bölgeye _______ bölgesi denir.', a: 'bunalım', alts: ['bunalim'], exp: 'Bölüm 1 Slayt 110: Termal konfor sınırları dışındaki bölgeye bunalım bölgesi denir.' },
  { q: 'Elektromanyetik spektrumun insan gözü tarafından algılanabilen kısmı olan görünür ışık genellikle _______ nanometre (nm) dalga boyu aralığındadır.', a: '400-700', alts: ['400 - 700'], exp: 'Bölüm 1 Slayt 116: Görünür ışık 400-700 nm aralığındadır.' },
  { q: 'Işık çalışılan bölgeye doğrudan geliyorsa direkt aydınlatma, başka bir yüzeye çarpıp yansıyarak geliyorsa _______ (dolaylı) aydınlatma denir.', a: 'endirekt', alts: ['dolaylı'], exp: 'Bölüm 1 Slayt 118 & 121: Başka yüzeye çarpıp geliyorsa endirekt aydınlatmadır.' },
  { q: 'İşyerlerinde doğal aydınlatma için pencerelerin işyeri taban yüzeyinin en az _______ oranında ışık almasını sağlayacak büyüklükte olması şarttır.', a: '1/10', alts: ['%10', 'onda bir'], exp: 'Bölüm 1 Slayt 123: İşyeri taban yüzeyinin en az 1/10\'u oranında pencere olmalıdır.' },
  { q: 'İnsanın bilgi (enformasyon) algılamasında en önemli duyu organı göz olup, bütün algılamanın %_______ ile %90\'ı göz kanalıyla gerçekleşir.', a: '80', alts: ['seksen', '80-90'], exp: 'Bölüm 1 Slayt 124: Algılamanın %80 ile %90\'ı göz kanalıyla gerçekleşir.' },
  { q: 'Birim yüzeye düşen ışık akısına (Işık akısı / toplam alan) aydınlatma şiddeti denir; birimi _______ (Lux) ve ölçüm aleti Lüksmetredir.', a: 'lüks', alts: ['lüx', 'lux', 'luks'], exp: 'Bölüm 1 Slayt 129: Aydınlatma şiddeti birimi Lüks (Lüx), ölçen alet Lüksmetredir.' },
  { q: 'Havada yaklaşık 5 cm gidebilen ve bir kağıt tabakasını veya alüminyum levhayı geçemeyen, ancak solunduğunda veya yutulduğunda hücrelere çok zararlı olan ağır parçacık radyasyonu _______ ışınlarıdır.', a: 'alfa', alts: ['alpha'], exp: 'Bölüm 1 Slayt 138: Kağıt tabakasını geçemeyen ağır parçacık alfa ışınlarıdır.' },
  { q: 'Radyasyon tespitinde bulunduğu yerdeki anlık radyasyon doz hızını ölçen cihazlara _______ (doz hızı ölçer), belli bir zaman aralığındaki toplam dozu ölçenlere ise dozimetre denir.', a: 'surveymetre', alts: ['surveymetreler'], exp: 'Bölüm 1 Slayt 139: Doz hızı ölçerlere surveymetre denir.' },
  { q: 'Kimyasal Maddeler Yönetmeliğine göre merkezi, kişinin kulaklarını birleştiren çizginin orta noktası olan _______ cm yarıçaplı kürenin başın ön kısmında kalan yarısına "Solunum bölgesi" denir.', a: '30', alts: ['otuz'], exp: 'Bölüm 2 Slayt 5: Solunum bölgesi 30 cm yarıçaplı kürenin başın ön kısmında kalan yarısıdır.' },
  { q: '0°C\'den düşük parlama noktası ve 35°C\'den düşük kaynama noktasına sahip sıvı hâldeki kimyasallar _______ kolay alevlenir madde olarak sınıflandırılır.', a: 'çok', alts: ['cok'], exp: 'Bölüm 2 Slayt 51: Parlama noktası <0°C ve kaynama noktası <35°C olanlar çok kolay alevlenir maddedir.' },
  { q: 'Çevre dostu, sürdürülebilir ve insan sağlığına daha az zarar veren kimyasal maddelerin ve süreçlerin tasarlanmasına _______ kimya denir.', a: 'yeşil', alts: ['yesil'], exp: 'Bölüm 2 Slayt 133: Çevre dostu sürdürülebilir kimya yaklaşımına Yeşil Kimya denir.' }
];
