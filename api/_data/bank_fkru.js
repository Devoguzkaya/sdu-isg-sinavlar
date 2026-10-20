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
    "groupName": "İşyeri Risk Unsurları ve Temel Tanımlar",
    "items": [
      {
        "opt": "Fiziksel Risk Unsurları",
        "desc": "İşyerinde gürültü, titreşim, termal konfor şartları, aydınlatma, basınç ve radyasyon gibi fiziksel faktörlerden kaynaklanan risklerdir.",
        "q": "Gürültü, titreşim, termal konfor (sıcaklık-nem-hava akımı), aydınlatma ve radyasyon hangi temel risk unsuru sınıfına girer?"
      },
      {
        "opt": "Kimyasal Risk Unsurları",
        "desc": "İşyeri ortamındaki toz, gaz, buhar, duman, sis ve kimyasal çözücülerin solunması veya temasıyla oluşan risklerdir.",
        "q": "Ortamda bulunan kurşun dumanı, asit buharları, solventler, silis tozu ve boğucu gazlar hangi temel risk unsuru grubundadır?"
      },
      {
        "opt": "Biyolojik Risk Unsurları",
        "desc": "Çalışanın mikroorganizmalara, bakterilere, virüslere, mantarlara ve parazitlere maruz kalmasıyla ortaya çıkan risklerdir.",
        "q": "Hastanelerde veya atık tesislerinde çalışanların kan yoluyla bulaşan virüslere, şarbon bakterisine veya tüberküloza maruziyeti hangi risk sınıfıdır?"
      },
      {
        "opt": "Psikososyal Risk Unsurları",
        "desc": "İş yükü, nicel aşırı yük veya nitel düşük yük, mobbing, vardiyalı çalışma, rol çatışması ve iş güvencesizliğinden doğan risklerdir.",
        "q": "Bölüm 1 ders notlarına göre; işyerinde çalışan üzerindeki \"nicel aşırı yük, nitel düşük yük, mobbing ve vardiya stresi\" hangi risk grubuna girer?"
      },
      {
        "opt": "Ergonomik Risk Unsurları",
        "desc": "İşin ve makinelerin insan anatomik ve fizyolojik yapısına uymaması, ağır kaldırma, tekrarlamalı zorlanmalar ve uygunsuz duruş riskleridir.",
        "q": "Sürekli eğilerek ağır yük kaldırma, montaj bandında sürekli tekrarlayan el bileği hareketleri ve uygunsuz oturma hangi risk grubudur?"
      },
      {
        "opt": "Ramak Kala Olay",
        "desc": "İşyerinde meydana gelen; çalışan, işyeri ya da iş ekipmanını zarara uğratma potansiyeli olduğu halde zarara uğratmayan tehlikeli olaydır.",
        "q": "Dr. Öğr. Üyesi Dicle Özdemir Küçükçapraz'ın Bölüm 1 sunumuna göre; 'zarara uğratma potansiyeli olduğu halde kazaya yol açmayan ucuz atlatılmış olay' nedir?"
      }
    ]
  },
  {
    "groupName": "Gürültü ve Titreşim Yasal Eşik Değerleri",
    "items": [
      {
        "opt": "Gürültü En Düşük Maruziyet Eylem Değeri: 80 dB(A)",
        "desc": "İşverenin çalışanlara kulak koruyucu donanımları hazır bulundurmak zorunda olduğu gürültü eşik değeridir.",
        "q": "Gürültü Yönetmeliği'ne göre işverenin kulak koruyucu donanımı hazır bulundurmak zorunda olduğu \"En Düşük Maruziyet Eylem Değeri\" kaç dB(A)'dir?"
      },
      {
        "opt": "Gürültü En Yüksek Maruziyet Eylem Değeri: 85 dB(A)",
        "desc": "Çalışanların kulak koruyucu donanım kullanmasının zorunlu hale geldiği ve işitme koruma alanı ilan edilen gürültü eşik değeridir.",
        "q": "Çalışanların kulak koruyucu donanımı fiilen kullanmasının zorunlu olduğu \"En Yüksek Maruziyet Eylem Değeri\" kaç dB(A)'dir?"
      },
      {
        "opt": "Gürültü Maruziyet Sınır Değeri: 87 dB(A)",
        "desc": "Kulak koruyucunun azaltma etkisi hesaba katıldıktan sonra bile çalışanın kulağına ulaşan gürültünün kesinlikle aşamayacağı üst sınırdır.",
        "q": "Kulak koruyucu donanımın etkisi dikkate alınarak çalışanın maruz kalmasına izin verilen yasal \"Maruziyet Sınır Değeri\" kaç dB(A)'dir?"
      },
      {
        "opt": "El-Kol Titreşimi: 2,5 m/s² (Eylem) ve 5,0 m/s² (Sınır)",
        "desc": "Sekiz saatlik çalışma süresi için El-Kol Titreşimi günlük maruziyet eylem değeri 2,5 m/s², sınır değeri ise 5,0 m/s²'dir.",
        "q": "Titreşim Yönetmeliği'ne göre 8 saatlik çalışma için \"El-Kol Titreşimi\" Günlük Maruziyet Eylem Değeri ve Sınır Değeri sırasıyla kaçtır?"
      },
      {
        "opt": "Bütün Vücut Titreşimi: 0,5 m/s² (Eylem) ve 1,15 m/s² (Sınır)",
        "desc": "Sekiz saatlik çalışma süresi için Bütün Vücut Titreşimi günlük maruziyet eylem değeri 0,5 m/s², sınır değeri ise 1,15 m/s²'dir.",
        "q": "Titreşim Yönetmeliği'ne göre 8 saatlik çalışma için \"Bütün Vücut Titreşimi\" Günlük Maruziyet Eylem Değeri ve Sınır Değeri sırasıyla kaçtır?"
      },
      {
        "opt": "Ses Enerjisinin İki Katına Çıkması (+3 dB Kuralı)",
        "desc": "Logaritmik desibel skalasında gürültü kaynağının iki katına çıkması (örn. iki özdeş makinenin yan yana çalışması) toplam gürültüyü tam 3 dB artırır.",
        "q": "Aynı gürültü seviyesine sahip iki özdeş makine yan yana çalıştırıldığında toplam gürültü seviyesindeki artış kuralı nedir?"
      }
    ]
  },
  {
    "groupName": "Ses Fiziği, Frekans Aralıkları ve İşitme Eşikleri",
    "items": [
      {
        "opt": "20 Hz - 20.000 Hz",
        "desc": "Sağlıklı bir genç insan kulağının algılayabildiği işitilebilir ses frekansı aralığıdır.",
        "q": "Fiziksel olarak insan kulağının duyabildiği ses frekansı aralığı aşağıdakilerden hangisidir?"
      },
      {
        "opt": "250 Hz - 4000 Hz",
        "desc": "İnsanların günlük konuşma seslerinin ve konuşma anlaşılabilirliğinin yoğunlaştığı frekans aralığıdır.",
        "q": "Bölüm 1 Slayt 74'e göre; insanlarda günlük normal konuşma frekansı aralığı hangi banttadır?"
      },
      {
        "opt": "4000 Hz - 4500 Hz (Akustik Çentik)",
        "desc": "Endüstriyel gürültüye maruz kalan çalışanlarda işitme kaybının ilk olarak başladığı ve odyometride V şeklinde düşüş gösteren frekanstır.",
        "q": "Sürekli yüksek gürültüye maruz kalan bir çalışanda işitme kaybının ilk olarak başladığı karakteristik frekans eşiği (akustik çentik) nedir?"
      },
      {
        "opt": "20°C Havada 340 m/s — 20°C Suda 1410 m/s",
        "desc": "Ses dalgalarının normal oda sıcaklığındaki havada ve su ortamındaki yayılma hızlarıdır.",
        "q": "Bölüm 1 ders notlarına göre; ses dalgalarının 20°C havada ve 20°C sudaki yayılma hızları sırasıyla yaklaşık kaç m/s'dir?"
      },
      {
        "opt": "0 dB(A) İşitme Eşiği — 140 dB(A) Ağrı Eşiği",
        "desc": "İnsan kulağının duyabildiği en zayıf ses 0 dB(A) iken; kulak zarında yırtılma ve şiddetli mekanik ağrı başlatan sınır 140 dB(A)'dır.",
        "q": "İnsan kulağının algılayabildiği en alt ses şiddeti (işitme eşiği) ile kulakta fiziksel ağrı başlatan üst sınır sırasıyla kaçtır?"
      },
      {
        "opt": "İnfrasonik (<20 Hz) ve Ultrasonik (>20.000 Hz)",
        "desc": "20 Hz'den düşük frekanslı sesler infrasonik (ses altı), 20.000 Hz'den yüksek sesler ise ultrasonik (ses üstü) olarak adlandırılır.",
        "q": "Frekansı 20 Hz'in altında kalan ses dalgaları ile 20.000 Hz'in üzerinde olan ses dalgaları sırasıyla nasıl adlandırılır?"
      }
    ]
  },
  {
    "groupName": "Termal Konfor ve Basınç Standartları",
    "items": [
      {
        "opt": "%30 - %80 Bağıl Nem (Optimum: %45 - %60)",
        "desc": "İşyerlerinde termal konforun bozulmaması için bağıl nem %30-80 arasında tutulmalı, ideal seviye %45-60 olmalıdır.",
        "q": "Bölüm 1 Slayt 106 ve 113'e göre; işyerlerinde termal konfor açısından bağıl nem oranı hangi aralıkta bulunmalıdır?"
      },
      {
        "opt": "0,3 - 0,5 m/s Hava Akım Hızı",
        "desc": "İşyerlerinde çalışanlarda cereyan hissi ve üşüme yaratmadan uygun hava sirkülasyonu sağlayan hava hızı sınırıdır.",
        "q": "İşyerinde termal konforun bozulmaması ve cereyan hissi oluşmaması için hava akım hızı hangi aralıkta olmalıdır?"
      },
      {
        "opt": "4,5 N/cm² Basınç Sınırı",
        "desc": "Organizmada sağlık sorunu ve emboli riski yaratmayan izin verilen en yüksek çalışma basınç fazlalığıdır.",
        "q": "Bölüm 1 Slayt 94'e göre; insan organizmasında sağlık sorunu yaratmayan normal basınçtan yüksek azami çalışma basıncı nedir?"
      },
      {
        "opt": "Kişi Başı En Az 40 m³ Hava Hacmi (Dalgıç Odası)",
        "desc": "Dalgıç odalarında veya basınçlı keson odalarında çalışan her bir kişi için sağlanması gereken asgari temiz hava hacmidir.",
        "q": "Sualtı dalgıç odalarında ve basınçlı keson odalarında çalışan kişi başına sağlanması gereken asgari hava hacmi nedir?"
      },
      {
        "opt": "22 Metreden Derinde Günde En Çok 5 Saat",
        "desc": "Dalgıçlık ve yüksek basınç yönetmeliğine göre 22 metreden daha derin sualtı çalışmalarında günlük izin verilen en uzun çalışma süresidir.",
        "q": "Dalgıçlık mevzuatına göre sualtında 22 metreden daha derinlerde günlük çalışma süresi en fazla kaç saat olabilir?"
      },
      {
        "opt": "Dekompresyon Hastalığı (Vurgun)",
        "desc": "Yüksek basınçtan ani normal basınca çıkıldığında kanda erimiş halde bulunan azot (N2) gazının baloncuklar oluşturarak damarları tıkamasıdır.",
        "q": "Dalgıçların veya keson işçilerinin su yüzeyine aniden çıkması durumunda kanda erimiş azotun gaz kabarcığına dönüşerek damarları tıkaması tablosu nedir?"
      }
    ]
  },
  {
    "groupName": "Aydınlatma ve Radyasyon Fiziği",
    "items": [
      {
        "opt": "400 - 700 nm (0,4 - 0,7 mikron)",
        "desc": "İnsan gözünün algılayabildiği optik görünür ışık tayfının dalga boyu sınırlarıdır.",
        "q": "Bölüm 1 Slayt 116'ya göre; insan gözünün retina tabakası tarafından algılanabilen görünür ışığın dalga boyu aralığı nedir?"
      },
      {
        "opt": "En Az 1/10 Pencere / Taban Oranı",
        "desc": "Doğal aydınlatmanın yeterli olabilmesi için işyeri pencerelerinin toplam ışık alan yüzeyinin taban alanına oranı en az 1/10 olmalıdır.",
        "q": "Bölüm 1 ders notlarına göre; işyeri pencerelerinin taban yüzeyine oranı en az kaç olmalıdır?"
      },
      {
        "opt": "Alfa: Bir Yaprak Kağıt / Hava — Beta: Alüminyum Levha",
        "desc": "Ağır yüklü alfa parçacıkları birkaç cm hava veya kağıtla durdurulurken; beta parçacıkları pleksiglas veya alüminyum levhayla zırhlanır.",
        "q": "Radyasyon fiziğine göre \"Alfa parçacıkları\" ile \"Beta parçacıkları\"nın zırhlanmasında kullanılan koruyucu materyaller hangisinde doğru verilmiştir?"
      },
      {
        "opt": "Gama/X-Işını: Kurşun/Çelik — Nötron: Parafin/Su/Beton",
        "desc": "Yüksek enerjili fotonlar kurşun/çelikle durdurulurken; kütleli nötronlar hafif atomlu hidrojen zengini parafin, su veya betonla yavaşlatılır.",
        "q": "Yüksek enerjili \"Gama/X-ışınları\" ile yüksüz \"Nötron radyasyonu\"nun zırhlanmasında kullanılan malzemeler sırasıyla hangileridir?"
      },
      {
        "opt": "İyonlaştırıcı Radyasyon (Alfa, Beta, Gama, X, Nötron)",
        "desc": "Maddeden geçerken atomlardan elektron kopararak iyon çiftleri oluşturan ve DNA kırıklarına yol açabilen yüksek enerjili radyasyondur.",
        "q": "Atomlardan elektron kopararak kimyasal bağları koparma enerjisine sahip olan radyasyon sınıfı aşağıdakilerden hangisidir?"
      },
      {
        "opt": "İyonlaştırıcı Olmayan Radyasyon (İnfrared, UV, Radyo, Lazer)",
        "desc": "Foton enerjisi atomlardan elektron koparmaya yetmeyen, genellikle sadece termal ısıtma etkisi yapan elektromanyetik dalgalardır.",
        "q": "Kızılötesi (IR), mikrodalga, radyo frekans ve lazer gibi moleküler düzeyde iyonlaşma oluşturmayan ışınım türü hangisidir?"
      }
    ]
  },
  {
    "groupName": "Fiziksel Risk Ölçüm Cihazları ve Parametreleri",
    "items": [
      {
        "opt": "Kişisel Radyasyon Dozimetresi (TLD/Film)",
        "desc": "Radyasyonla çalışan personelin vücuduna takılarak maruz kaldığı kümülatif toplam dozu (mSv) kaydeden cihazdır.",
        "q": "Radyasyon görevlilerinin yakalarına takarak belirli periyotlarda ne kadar kümülatif radyasyon dozu aldıklarını ölçen cihaz nedir?"
      },
      {
        "opt": "Surveymetre (Radyasyon Alan Monitörü)",
        "desc": "Radyasyonlu ortamda anlık radyasyon doz hızını (µSv/h) ve sızıntıyı canlı olarak ölçüp gösteren el cihazıdır.",
        "q": "Radyasyon alanlarında anlık doz hızını ölçerek tehlike sınırını veya radyasyon sızıntısını anında tespit eden dedektör nedir?"
      },
      {
        "opt": "Lüksmetre",
        "desc": "Çalışma masası veya işyerinde aydınlatma şiddetini birim alana düşen ışık akısı (Lüks = Lümen/m²) cinsinden ölçen alettir.",
        "q": "İşyerlerinde aydınlatma düzeyinin mevzuata uygunluğunu (Lüks cinsinden) ölçmek için kullanılan cihazın adı nedir?"
      },
      {
        "opt": "Higrometre ve Psikrometre",
        "desc": "İşyeri ortamındaki havanın bağıl nem yüzdesini (% Rh) kuru ve ıslak hazneli termometre prensibiyle ölçen cihazdır.",
        "q": "İşyeri termal konfor ölçümlerinde ortamın bağıl nem oranını ölçen cihazın adı nedir?"
      },
      {
        "opt": "Anemometre",
        "desc": "Hava kanallarında veya işyeri ortamında hava akım hızını (m/s) pervaneli veya sıcak telli probla ölçen alettir.",
        "q": "İşyerlerinde hava akım hızını (m/sn) ve havalandırma kanallarındaki hava debisini ölçen alet hangisidir?"
      },
      {
        "opt": "Glob Termometre",
        "desc": "Ortamdaki kızılötesi ışınım kaynaklarından (fırın, kazan, akkor metal) yayılan radyant ısıyı siyah küre içinde ölçen cihazdır.",
        "q": "Dökümhane veya fırın gibi sıcak çalışma ortamlarında yüzeylerden yayılan radyant ısıyı ölçen küre tipi termometre nedir?"
      },
      {
        "opt": "Gürültü Dozimetresi ve Ses Ölçer (Sonometre)",
        "desc": "İşyerinde anlık ses basınç düzeyini (dB) veya vardiya boyunca çalışanın maruz kaldığı eşdeğer gürültü dozunu ölçen cihazdır.",
        "q": "Çalışanın vardiya boyunca kulağının maruz kaldığı gürültü miktarını kaydeden ve Leq hesabı yapan cihaz nedir?"
      }
    ]
  },
  {
    "groupName": "Kimyasal Maddeler, Maruziyet Limitleri ve Güvenlik Bilgi Formu",
    "items": [
      {
        "opt": "Solunum Bölgesi (30 cm Yarıçaplı Küre)",
        "desc": "20/10/2023 güncel mevzuata göre; çalışanın burnunu ve ağzını merkez alan 30 cm yarıçaplı küre şeklindeki alandır.",
        "q": "Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmeliğe göre \"Solunum Bölgesi\" tanımı nedir?"
      },
      {
        "opt": "TWA (Zaman Ağırlıklı Ortalama)",
        "desc": "Sekiz saatlik bir çalışma vardiyasında çalışanın maruz kalmasına izin verilen zaman ağırlıklı ortalama konsantrasyondur.",
        "q": "Günde 8 saatlik referans çalışma süresi için belirlenen zaman ağırlıklı ortalama kimyasal maruziyet sınır değerine ne ad verilir?"
      },
      {
        "opt": "STEL (Kısa Süreli Maruziyet Sınırı)",
        "desc": "Başka bir süre belirtilmedikçe 15 dakikalık sürede aşılmaması gereken kimyasal maruziyet tavan sınır değeridir.",
        "q": "Çalışanın 15 dakikalık süre boyunca maruz kalabileceği ve aşılmaması gereken kısa süreli sınır değer kısaltması nedir?"
      },
      {
        "opt": "Çok Kolay Alevlenir Madde",
        "desc": "Parlama noktası 0°C'nin altında ve kaynama noktası 35°C'nin altında olan sıvı haldeki maddeler ile normal sıcaklık ve basınçta havada alevlenebilen gazlardır.",
        "q": "Parlama noktası 0°C'den düşük ve kaynama noktası 35°C'den düşük olan kimyasal maddeler nasıl sınıflandırılır?"
      },
      {
        "opt": "Kolay Alevlenir Madde",
        "desc": "Parlama noktası 21°C'nin altında olan ve oda sıcaklığında alev alabilen yanıcı sıvı maddelerdir.",
        "q": "Parlama noktası 21°C'nin altında olan ve ortam sıcaklığında kolayca tutuşabilen kimyasallar hangi sınıftadır?"
      },
      {
        "opt": "Malzeme Güvenlik Bilgi Formu (16 Standart Başlık)",
        "desc": "Kimyasalın tehlikeleri, ilk yardım, yangın önlemleri ve KKD bilgilerini içeren 16 ana başlıktan oluşan resmi teknik belgedir.",
        "q": "Mevzuatımıza göre kimyasal maddelerin piyasaya arzında hazırlanan Güvenlik Bilgi Formu (GBF/MGBF) zorunlu olarak kaç standart ana başlıktan oluşur?"
      },
      {
        "opt": "H Kodları (Tehlike) ve P Kodları (Önlem)",
        "desc": "GHS ve SEA Yönetmeliği gereğince kimyasalın tehlikelerini H (Hazard) kodları, alınacak tedbirleri ise P (Precaution) kodları gösterir.",
        "q": "Kimyasal etiketlerinde kimyasalın fiziksel ve sağlık risklerini belirten kodlar ile alınması gereken önlemleri belirten kodlar sırasıyla hangileridir?"
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
