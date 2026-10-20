export const riskTestThemes = [
  "6331 Sayılı Kanun, RD Yönetmeliği & Ekip Sorumlulukları",
  "Tehlike, Risk, Ramak Kala Tanımları & Köpekbalığı Örneği",
  "Risk Algılama Faktörleri, Görünür ve Görünmeyen Maliyetler",
  "Tehlike Kaynakları (Kişi, Yönetim, Bölge, Planlama, İşletme)",
  "Birey Yaklaşımı vs. Takım Yaklaşımı (Yararları & Mahzurları)",
  "Kontrol Tedbirleri Hiyerarşisi (Eliminasyon, İkame, İzolasyon, KKD)",
  "14 Temel İSG Prensibi (Sistematiklik, Toplu Koruma, Proaktiflik)",
  "Kalitatif Yöntemler (Ön Tehlike PHA, PRA Çeklist, What-If)",
  "Sistemik Yöntemler (FMEA Çeşitleri, HAZOP, FTA & ETA Ağaçları)",
  "Matrisler & Kinney Yöntemi (L Tipi, X Tipi, 3T & Frekans-Şiddet)"
];

export const riskConceptGroups = [
  {
    groupName: "6331 Kanunu, RD Yönetmeliği, Ekip ve Süreler",
    items: [
      {
        opt: "Kabul Edilebilir Risk Seviyesi",
        desc: "İSG Risk Değerlendirmesi Yönetmeliği Madde 4'e göre; yasal yükümlülüklere ve işyerinin önleme politikasına uygun, kayıp veya yaralanma oluşturmayacak düzeydeki risktir.",
        q: "İSG Risk Değerlendirmesi Yönetmeliği'ne göre 'Yasal yükümlülüklere ve işyerinin önleme politikasına uygun, kayıp veya yaralanma oluşturmayacak risk seviyesi' nasıl tanımlanır?"
      },
      {
        opt: "Önleme (Prevention)",
        desc: "İşyerinde yürütülen işlerin bütün safhalarında iş sağlığı ve güvenliği ile ilgili riskleri ortadan kaldırmak veya azaltmak için planlanan ve alınan tedbirlerin tümüdür.",
        q: "6331 sayılı Kanun ve Yönetmelikte 'İşyerinde yürütülen işlerin bütün safhalarında İSG ile ilgili riskleri ortadan kaldırmak veya azaltmak için planlanan ve alınan tedbirlerin tümü' ne olarak adlandırılır?"
      },
      {
        opt: "Ramak Kala Olay",
        desc: "İşyerinde meydana gelen; çalışan, işyeri ya da iş ekipmanını zarara uğratma potansiyeli olduğu halde zarara uğratmayan olaydır.",
        q: "İşyerinde meydana gelen; çalışan, işyeri veya iş ekipmanını zarara uğratma potansiyeli bulunduğu halde şans eseri zarara uğratmayan olaylara ne ad verilir?"
      },
      {
        opt: "Risk Değerlendirmesi Ekibi",
        desc: "İşveren/vekili koordinatörlüğünde; İGU, işyeri hekimi, çalışan temsilcileri, destek elemanları ve işyerindeki bütün birimleri temsil eden bilgi sahibi çalışanlardan oluşan kuruldur.",
        q: "Yönetmeliğe göre işverenin oluşturduğu risk değerlendirmesi ekibinde aşağıdakilerden hangisinin yer alması zorunlu DEĞİLDİR?"
      },
      {
        opt: "Tasarım veya Kuruluş Aşamasında Başlama",
        desc: "Risk Değerlendirmesi Yönetmeliği Madde 7 uyarınca, risk değerlendirmesi tüm işyerleri için henüz tasarım veya kuruluş aşamasından itibaren başlatılmak zorundadır.",
        q: "İSG Risk Değerlendirmesi Yönetmeliği Madde 7'ye göre risk değerlendirmesi çalışmaları işyerinde hangi aşamada başlatılmalıdır?"
      },
      {
        opt: "Periyodik Yenileme Süreleri (2 - 4 - 6 Yıl)",
        desc: "Risk değerlendirmesi; Çok Tehlikeli sınıfta en geç 2 yılda bir, Tehlikeli sınıfta en geç 4 yılda bir, Az Tehlikeli sınıfta ise en geç 6 yılda bir yenilenir.",
        q: "Risk değerlendirmesi periyodik yenileme süreleri işyerinin tehlike sınıfına göre (Çok Tehlikeli - Tehlikeli - Az Tehlikeli) sırasıyla en geç kaç yılda birdir?"
      },
      {
        opt: "Asıl İşveren - Alt İşveren Koordinasyonu",
        desc: "Alt işverenler yürüttükleri işlerle ilgili risk değerlendirmesini yapar, bir nüshasını asıl işverene verir; asıl işveren çalışmaları denetler ve koordine eder.",
        q: "Bir işyerinde bir veya daha fazla alt işveren (taşeron) bulunması durumunda risk değerlendirmesi süreci nasıl yürütülür?"
      },
      {
        opt: "Birden Fazla İşverenin Paylaştığı Çalışma Alanı",
        desc: "Aynı çalışma alanını birden fazla işverenin paylaşması durumunda, diğer işverenlerin işleri de dikkate alınarak ayrı ayrı RD yapılır ve karşılıklı bilgi verilir.",
        q: "Aynı çalışma alanını birden fazla işverenin paylaştığı durumlarda (iş merkezi, sanayi sitesi vb.) risk değerlendirmesi nasıl gerçekleştirilir?"
      },
      {
        opt: "İşin Durdurulması Yaptırımı (Kanun Madde 25)",
        desc: "Çok tehlikeli sınıfta yer alan maden, metal ve yapı işleri ile tehlikeli kimyasallarla çalışılan işyerlerinde risk değerlendirmesi yapılmamışsa iş durdurulur.",
        q: "6331 sayılı Kanun Madde 25'e göre çok tehlikeli sınıfta yer alan maden, metal ve inşaat işyerlerinde risk değerlendirmesi yapılmaması halinde hangi idari yaptırım uygulanır?"
      }
    ]
  },
  {
    groupName: "Tehlike, Risk, Risk Algılama ve Maliyetler",
    items: [
      {
        opt: "Tehlike (TS 18001 / OHSAS)",
        desc: "İnsanların yaralanmasına, hastalanmasına, malın/malzemenin hasar görmesine, işyeri ortamının zarar görmesine sebep olabilecek potansiyel kaynak veya durumdur.",
        q: "TS 18001 standardına göre; 'İnsanların yaralanmasına, malın hasar görmesine veya işyeri ortamının zarar görmesine sebep olabilecek kaynak veya durum' nedir?"
      },
      {
        opt: "Risk (Olasılık x Şiddet)",
        desc: "Bir tehlikeden kaynaklanan olayın ortaya çıkma olasılığı (İhtimal) ile bu olayın sebep olacağı zararın şiddetinin (etkisinin) bileşkesidir.",
        q: "Prof. Dr. Funda Cengiz Çallıoğlu'nun sunumundaki tanıma göre, tehlikeden kaynaklanacak zararın ortaya çıkma olasılığı ile şiddetinin bileşkesine ne denir?"
      },
      {
        opt: "Köpek Balığı Analojisi (Tehlike vs Risk)",
        desc: "Denizdeki köpek balığı sadece bir TEHLİKE iken, suya girip yüzmeniz halinde köpek balığının ısırma veya saldırma ihtimali RİSK oluşturur.",
        q: "Funda Hoca'nın derste anlattığı 'Deniz ve Köpek Balığı' örneğinde köpek balığının kendisi ile denizde yüzme durumu sırasıyla neyi ifade eder?"
      },
      {
        opt: "Bireysel Risk Algılamasını Etkileyen Faktörler",
        desc: "Korkutuculuk düzeyi, anlaşılabilirlik düzeyi, etkilenecek kişi sayısı, riskin ne derece önlenebileceği ve kişisel olarak kabullenilip kabullenilmediğidir.",
        q: "Aşağıdakilerden hangisi Funda Hoca'nın ders notlarında 'Bireysel Risk Algılamasını Etkileyen Faktörler' arasında sayılan hususlardan biridir?"
      },
      {
        opt: "Toplumsal Risk Algılama Faktörleri",
        desc: "Felaket potansiyeli, aşinalık (önceden bilinme), kendi kendini denetleyebilme, çocuklara etkisi, etkinin hızı (akut/kronik) ve kurumlara güvendir.",
        q: "Toplumun bir riski algılarken 'ölümlerin aynı anda toplu olması (felaket potansiyeli) veya çocukları etkilemesi' hangi kavramla açıklanır?"
      },
      {
        opt: "Görünür (Direkt) Maliyetler",
        desc: "Bir iş kazası sonrasında işverenin doğrudan cebinden çıkan tazminatlar, sigorta ödemeleri, tedavi masrafları ve mahkeme giderleridir.",
        q: "İş kazası ve meslek hastalığı sonucunda ortaya çıkan tazminatlar, sağlık giderleri ve sigorta prim artışları hangi maliyet grubuna girer?"
      },
      {
        opt: "Görünmeyen (Dolaylı / İndirekt) Maliyetler",
        desc: "Buzdağının görünmeyen kısmı gibi iş günü/gücü kaybı, bina-ürün hasarı, verim düşmesi, kötü imaj, diğer çalışanların motivasyon kaybı ve yeni işçi eğitimidir.",
        q: "Kaza sonrası işletmede yaşanan iş günü ve iş gücü kaybı, sipariş gecikmesi, verim düşüklüğü, kötü şirket imajı ve yeni işçinin eğitim maliyeti hangisidir?"
      },
      {
        opt: "Yeni İSG Yaklaşımının 5 Temel Özelliği",
        desc: "Tespit bazlı reaktif anlayış yerine risk bazlı proaktif anlayış, geniş çalışan katılımı, uzman katkısı, nitelikli eğitim ve önleme/koruma felsefesidir.",
        q: "6331 sayılı Kanun ile getirilen modern İSG yaklaşımının geleneksel eski uygulamadan en belirgin farkı aşağıdakilerden hangisidir?"
      }
    ]
  },
  {
    groupName: "Tehlike Kaynakları Sınıflandırması",
    items: [
      {
        opt: "Kişiye Bağlı Tehlike Faktörleri",
        desc: "Güvensiz çalışma yöntemi, eğitim ve bilgi noksanlığı, yaş, cinsiyet, ilgisizlik, bedenin işe uyumsuzluğu, aile düzeni ve beslenme yetersizliğidir.",
        q: "Funda Hoca'nın tehlike kaynakları sınıflandırmasında; çalışanın eğitim noksanlığı, bedenin işe uyumsuzluğu, ilgisizlik ve psikolojik durumu hangi gruba girer?"
      },
      {
        opt: "Yönetime Bağlı Tehlike Faktörleri",
        desc: "İSG politika ve hedefinin olmaması, güvenlik organizasyonu eksikliği, finansman sağlamama, uzun çalışma saatleri, vardiya düzensizliği ve rotasyon yapılmamasıdır.",
        q: "İşyerinde vardiyalı çalışmanın hatalı düzenlenmesi, rotasyon uygulanmaması, İSG hedeflerinin bulunmaması ve İSG yatırımlarına finansman ayrılmaması hangi tehlike kaynağıdır?"
      },
      {
        opt: "İşyerinin Bulunduğu Bölgeye Bağlı Faktörler",
        desc: "Heyelan, göçük, sel baskını, çığ düşmesi, deprem, çevreden gelebilecek yangınlar, meteorolojik fırtınalar, yıldırım düşmesi ve sabotaj tehlikeleridir.",
        q: "Tesisin bulunduğu coğrafyadan kaynaklanan sel baskını, heyelan, deprem, çığ düşmesi, yıldırım ve sabotaj hangi tehlike kaynağı kategorisindedir?"
      },
      {
        opt: "Hatalı veya Eksik Planlamaya Bağlı Faktörler",
        desc: "Proje dışı ilave tesis kurulması, elle veya araçla taşımanın artması, yıkıp yeniden yapmak zorunda kalınması, havalandırma ve arıtma tesisine ilave yük gelmesidir.",
        q: "Fabrika projesinde olmayan plansız ilave tesis kurulması, elle taşıma yollarının uzaması ve arıtma sistemine aşırı yük binmesi hangi tehlike kaynağına örnektir?"
      },
      {
        opt: "İşletme İçi Fiziksel ve Kimyasal Tehlikeler",
        desc: "Titreşim, gürültü, yetersiz havalandırma, aşırı ısı/nem ile toksik gazlar, organik sıvı buharları, kaynak dumanı, asit-bazlar ve kanserojen tozlardır.",
        q: "İşletme içi tehlikelerden gürültü, titreşim ve yetersiz aydınlatma 'Fiziksel'; solvent buharları, zehirli gazlar ve asitler ise hangi tehlike sınıfına girer?"
      },
      {
        opt: "İşletme İçi Mekanik Tehlikeler",
        desc: "Preslerde çift el kumanda veya fotosel olmaması, hareketli transmisyon kayışlarının koruyucusuz olması, acil durdurma butonunun bulunmaması ve dağınık ortamdır.",
        q: "Pres makinelerinde çift el kumanda tertibatının bulunmaması, makine hareketli dişli/kayış koruyucularının olmaması hangi tehlike grubundadır?"
      },
      {
        opt: "Güvensiz Davranış Örnekleri (Funda Hoca Slaytı)",
        desc: "Makine koruyucusunu devre dışı bırakma, KKD kullanmama, 3 metreden yüksek malzeme istifleme, etiketsiz kimyasalla çalışma ve elektrik kesilmeden onarım yapmadır.",
        q: "Funda Hoca'nın slaytlarında güvensiz davranışlar arasında belirtilen 'malzeme istifleme yükseklik sınırı' en fazla kaç metredir?"
      },
      {
        opt: "İşyeri Ortamından Kaynaklanan Tehlikeler",
        desc: "Kaygan ve düzensiz işyeri zemini, yetersiz geçitler ve çıkış kapıları, dar çalışma alanı, merdivenlerde korkuluk olmaması ve yetersiz sosyal tesislerdir.",
        q: "İşyerinde ara yolların dar olması, acil çıkış kapılarının yetersizliği ve merdiven kenarlarında korkuluk bulunmaması hangi tehlike sınıfındadır?"
      }
    ]
  },
  {
    groupName: "Risk Değerlendirme Yaklaşımları, Prensipleri ve Kontrol Hiyerarşisi",
    items: [
      {
        opt: "Birey Yaklaşımının Yararları ve Mahzurları",
        desc: "Yararları: Çabuk netice alınması, düşük maliyet, özgüven; Mahzurları: Yüksek teknik uzmanlık gerektirmesi, sübjektiflik ve diğer çalışanların katılım sağlayamamasıdır.",
        q: "Funda Hoca'nın dersinde karşılaştırılan risk değerlendirmesinde 'Birey Yaklaşımı'nın en belirgin MAHZURU (dezavantajı) nedir?"
      },
      {
        opt: "Takım Yaklaşımının Yararları ve Mahzurları",
        desc: "Yararları: Geniş bilgi paylaşımı, herkesi tatmin eden sonuç, sahiplenme ve işbirliği ruhu; Mahzurları: Neticenin daha geç alınması, zaman ve maliyetin yüksek olmasıdır.",
        q: "Risk değerlendirmesinde farklı disiplinlerden oluşan 'Takım Yaklaşımı'nın birey yaklaşımına göre en belirgin dezavantajı nedir?"
      },
      {
        opt: "1. Adım: Risklerin Eliminasyonu (Kaynağında Yok Etme)",
        desc: "Kontrol önlemleri hiyerarşisinin 1. basamağıdır; tehlikeli prosesin veya makinenin tamamen devreden çıkarılmasıdır (örn. koruyucusuz eski presin hurdaya ayrılması).",
        q: "Funda Hoca'nın risk kontrol hiyerarşisinde ilk sırada yer alan ve eski koruyucusuz presin kullanımdan tamamen kaldırılmasıyla örneklendirilen adım nedir?"
      },
      {
        opt: "2. Adım: Yerine Koyma (İkame / Substitüsyon)",
        desc: "Tehlikenin yok edilemediği durumda yüksek riskli maddenin az riskli olanla değiştirilmesidir (örn. çabuk alevlenen toksik solvent yerine su bazlı çözücü).",
        q: "Proses içinde kullanılan parlayıcı ve toksik bir çözücünün yerine yanıcı olmayan su bazlı bir temizleyici konulması hangi kontrol adımıdır?"
      },
      {
        opt: "3. Adım: Kontrol ve İzolasyon",
        desc: "Tehlike kaynağının kapalı kabine alınması, maruz kalan çalışan sayısının, maruziyet süresinin azaltılmasıdır (örn. kapalı boya kabini, röntgen çalışanının süresini azaltma).",
        q: "Boyahanede kapalı sistem boya kabini kurulması veya röntgen teknisyeninin günlük çalışma süresinin sınırlandırılması Funda Hoca'nın hiyerarşisinde hangi adımdır?"
      },
      {
        opt: "4. Adım: Mühendislik Kontrolü",
        desc: "Makinelerin operasyon noktası koruyucuları, fiziksel bariyerler, çift el kumanda tertibatı ve acil stop butonları gibi teknik donanımlarla koruma sağlanmasıdır.",
        q: "Makinelerin hareketli aksamlarına sabit koruyucu takılması ve preslere çift el kumanda monte edilmesi hangi kontrol basamağındadır?"
      },
      {
        opt: "5. Adım: Yönetimle İlgili (İdari) Kontroller",
        desc: "Güvenli çalışma prosedürlerinin yayınlanması, eğitimler, çalışma izin formları, işaretlemeler ve bakım talimatları gibi yönetimsel düzenlemelerdir.",
        q: "Sıcak çalışma izin formu düzenlenmesi, çalışanlara İSG eğitimi verilmesi ve güvenlik işaret levhaları asılması hangi kontrol basamağına girer?"
      },
      {
        opt: "6. Adım: Kişisel Korunma (KKD - En Son Çare)",
        desc: "Hiyerarşinin en son seçimidir; kullanımı rahatsızlık verici, denetimi zor ve tehlikeyi kaynağında yok etmede en az etkili basamaktır.",
        q: "Kontrol hiyerarşisinde diğer tüm önlemler uygulandıktan sonra EN SON SEÇİM olarak başvurulan ve denetimi en zor olan basamak hangisidir?"
      },
      {
        opt: "Koruma ve Önleme Prensibi (14 Temel Prensip)",
        desc: "İşletme safhasından önce (tasarım, imalat, montaj) alınan tedbirlere ÖNLEME; işletme safhasında (çalışma, bakım) alınan tedbirlere ise KORUMA denir.",
        q: "Funda Hoca'nın 14 Temel İSG Prensibine göre; tesisin tasarım ve montaj aşamasında alınan tedbirler ile işletme safhasındaki tedbirler sırasıyla nasıl adlandırılır?"
      },
      {
        opt: "İlave Risk Oluşturmama Prensibi",
        desc: "Seçilen ve uygulanan bir risk kontrol yönteminin, ortamda çalışanlar için kesinlikle yeni ve beklenmeyen başka bir tehlike/risk yaratmaması kuralıdır.",
        q: "Bir makineye takılan koruyucunun keskin kenarlarıyla işçiyi kesmesi veya görüşü kapatması hangi temel İSG prensibine aykırıdır?"
      }
    ]
  },
  {
    groupName: "Risk Analiz Yöntemleri (Kalitatif, Kantitatif, Matrisler ve Kinney)",
    items: [
      {
        opt: "Ön Tehlike Analizi (PHA - Preliminary Hazard Analysis)",
        desc: "Tesisin son tasarım aşamasında, daha detaylı analizlere temel oluşturan, tehlikeli olayları hızla belirleyip sıralayan kalitatif bir yöntemdir.",
        q: "Tesisin son tasarım aşamasında uygulanan, daha detaylı çalışmalara model teşkil eden ve hızla hazırlanabilen kalitatif yöntem hangisidir?"
      },
      {
        opt: "Birincil Risk Analizi Çeklist (PRA Check List)",
        desc: "Formlar ve standart soru listeleri kullanılarak tesisin veya ekipmanın eksikliklerini belirleyen, proje öncesi çevresel değerlendirme niteliğindeki yöntemdir.",
        q: "Sistemin potansiyel tehlikeli parçalarını kontrol listeleri (formlar) yardımıyla tespit eden ve proje aşaması öncesinde kullanılan yöntem nedir?"
      },
      {
        opt: "FMEA — Olası Hata Türleri ve Etkileri Analizi (ABD Ordusu 1949)",
        desc: "Sistem, Tasarım, Proses ve Servis FMEA olmak üzere 4 çeşidi olan; RÖS = Olasılık(P) x Şiddet(S) x Fark Edilebilirlik(D) (1-1000) ile skor üreten yöntemdir.",
        q: "İlk olarak Kasım 1949'da ABD Ordusunda geliştirilen, otomotiv ve uzay sanayinde yaygın kullanılan ve RÖS = P x S x D formülünü kullanan yöntem nedir?"
      },
      {
        opt: "FMEA'nın 4 Temel Çeşidi",
        desc: "1. Sistem FMEA (fonksiyon eksiklikleri), 2. Tasarım FMEA (ürün tasarımı), 3. Proses FMEA (üretim ve montaj), 4. Servis FMEA (organizasyon ve hizmet aksaklıkları).",
        q: "Funda Hoca'nın ders notlarına göre FMEA metodolojisi hangi 4 temel uygulama çeşidine ayrılır?"
      },
      {
        opt: "Hata Ağacı Analizi (FTA - Fault Tree Analysis)",
        desc: "İstenmeyen en üst olaydan (Zirve Olay) başlayarak geriye doğru mantıksal VE (AND) ile VEYA (OR) kapılarını kullanan tümdengelimli analiz tekniğidir.",
        q: "İstenmeyen bir tepe olaydan başlayıp hataların gidiş yollarını mantıksal 'VE' ve 'VEYA' kapılarıyla kök sebeplere bağlayan tümdengelim yöntemi nedir?"
      },
      {
        opt: "FTA'da 'VE' ve 'VEYA' Mantık Kapıları Kuralı",
        desc: "Bir sonucun ortaya çıkması için bağlı olayların TÜMÜNÜN birlikte gerçekleşmesi gerekiyorsa 'VE', herhangi BİRİNİN gerçekleşmesi yetiyorsa 'VEYA' kapısı kullanılır.",
        q: "Hata Ağacı Analizinde (FTA); sonucun ortaya çıkması için bağlı olaylardan sadece birinin gerçekleşmesi yeterli ise hangi mantık kapısı kullanılır?"
      },
      {
        opt: "Olay Ağacı Analizi (ETA - Event Tree Analysis)",
        desc: "Nükleer santrallerde işletilebilme analizi olarak geliştirilmiş, bir başlangıç olayından hareketle güvenlik sistemlerinin durumuna göre sonuçları dallandıran tümevarım yöntemidir.",
        q: "İlk olarak nükleer endüstri için geliştirilmiş olan, kaza öncesi ve sonrası senaryoları ileriye doğru sonuç analizine bağlayan tümevarım yöntemi nedir?"
      },
      {
        opt: "What-If (Olursa Ne Olur?) Yöntemi",
        desc: "Genel soru olan 'Olursa Ne Olur?' sorgulamasıyla başlayan, özellikle mevcut tesiste bir takım değişiklikler düşünüldüğü aşamada sıkça başvurulan yöntemdir.",
        q: "'Eğer şırınga hemşirenin eline batarsa ne olur?' gibi sorgulamalarla yürütülen ve özellikle tesiste değişiklik yapılacağı zaman uygulanan yöntem hangisidir?"
      },
      {
        opt: "HAZOP (Tehlike ve İşletilebilme Çalışması)",
        desc: "Kimya endüstrisinde basınç, sıcaklık ve akış sapmalarını 'Kılavuz Kelimeler' (Fazla, Az, Hiç, Ters) ile inceleyen, en az 5 yılda bir yenilenen ekip yöntemidir.",
        q: "Kimya endüstrisi için geliştirilen, 'Fazla, Az, Hiç, Ters' gibi anahtar kelimeler kullanan ve en az 5 yılda bir yenilenmesi gereken risk analizi yöntemi nedir?"
      },
      {
        opt: "HAZOP Çok Disiplinli Takımı",
        desc: "İşveren vekili, fabrika müdürü, İGU, proses mühendisi, otomasyon mühendisi, elektrik mühendisi ve gerekirse inşaat mühendisinden oluşan uzman gruptur.",
        q: "HAZOP çalışmasını yürüten çok disiplinli uzman takımda aşağıdakilerden hangisi yer almaz?"
      },
      {
        opt: "Kinney Yöntemi Formülü ve Değişkenleri",
        desc: "Risk Skoru = Olasılık (0,2 - 10) x Frekans (0,5 - 10) x Şiddet (1 - 100) formülüyle sayısal risk değeri hesaplayan kantitatif yöntemdir.",
        q: "Kinney yönteminde risk skoru hangi 3 temel parametrenin sayısal değerlerinin çarpımı ile hesaplanır?"
      },
      {
        opt: "Kinney Yönteminde Şiddet Puanı Kuralı",
        desc: "Şiddet puanlamasında tek ölümlü kaza için 40 PUAN, birden fazla ölümlü kaza / çevresel felaket için ise 100 PUAN verilir.",
        q: "Funda Hoca'nın belirttiği Kinney Şiddet tablosuna göre; tek kişinin öldüğü bir kaza ile birden fazla kişinin öldüğü felaketin puanı sırasıyla kaçtır?"
      },
      {
        opt: "Kinney Yönteminde Düzeltici Faaliyetlerin Etkisi",
        desc: "Alınan düzeltici önlemler şiddeti veya frekansı etkilemez; etkileyeceği TEK değişken OLASILIKTIR (örn. kemer takmak düşerse ölüm şiddetini değil, düşme olasılığını azaltır).",
        q: "Kinney metodunda yapılan düzeltici faaliyetler frekans veya şiddeti etkilemez; uygulanan kontrol önleminin etkilediği TEK değişken hangisidir?"
      },
      {
        opt: "Kinney Yönteminde 400 Puan ve Üzeri Riskler",
        desc: "Risk skoru 400'ün üzerinde çıkarsa tolerans gösterilemez kabul edilir; acil çözüm bulunmalı ve faaliyet mutlaka Genel Müdür ile paylaşılmalıdır.",
        q: "Kinney metodunda risk skoru kaç puanın üzerinde çıktığında acil çözüm üretilmeli ve durum mutlaka Genel Müdür ile paylaşılmalıdır?"
      },
      {
        opt: "L Tipi (5x5) Matris vs. X Tipi Matris Farkı",
        desc: "L Tipi matris tek analistle sebep-sonuç ilişkisini çözerken; X Tipi matris takım çalışması gerektirir, geçmiş 5 yıllık kaza verilerini ve önleme/transfer maliyetlerini kapsar.",
        q: "L Tipi 5x5 matristen farklı olarak; takım çalışması gerektiren, işletmenin son 5 yıllık kaza verilerini ve tehlike transfer maliyetlerini analiz eden yöntem nedir?"
      },
      {
        opt: "3T Metodu (Temel ve Özel Modüller)",
        desc: "A'dan E'ye kadar 5 Temel Modül (kaza, fiziksel, kimyasal, kas-iskelet, psikososyal) ve F'den O'ya kadar 10 Özel Modülden oluşan kapsamlı modüler analizdir.",
        q: "İşyerini Temel Modüller (A-E) ve Özel Modüller (F-O) olmak üzere harfli modüller halinde değerlendiren risk analizi metodu hangisidir?"
      }
    ]
  }
];

export const riskExtraFills = [
  {
    q: "6331 sayılı Kanun ve Yönetmeliğe göre; yasal yükümlülüklere ve işyerinin önleme politikasına uygun, kayıp veya yaralanma oluşturmayacak risk düzeyine kabul edilebilir _______ seviyesi denir.",
    answers: ["risk", "risk seviyesi"],
    hint: "Kabul edilebilir ... seviyesi",
    explanation: "Yönetmelik Madde 4: Kabul edilebilir risk seviyesi kayıp veya yaralanma oluşturmayacak düzeydir."
  },
  {
    q: "İşyerinde yürütülen işlerin bütün safhalarında riskleri ortadan kaldırmak veya azaltmak için planlanan ve alınan tedbirlerin tümüne _______ denir.",
    answers: ["önleme", "onleme"],
    hint: "Prevention karşılığı yasal tanım",
    explanation: "Yönetmelik Madde 4: Tedbirlerin tümü Önleme olarak tanımlanır."
  },
  {
    q: "İşyerinde meydana gelen; çalışan, işyeri ya da iş ekipmanını zarara uğratma potansiyeli olduğu halde zarara uğratmayan olaya _______ olay denir.",
    answers: ["ramak kala", "ramakkala"],
    hint: "Ucuz atlatılan olay",
    explanation: "Zarar verme potansiyeli olduğu halde zarara uğratmayan olaylara Ramak Kala Olay denir."
  },
  {
    q: "Risk değerlendirmesi tüm işyerlerinde tasarım veya _______ aşamasından başlamak üzere gerçekleştirilir.",
    answers: ["kuruluş", "kurulus"],
    hint: "Tesisin ilk inşa/açılış aşaması",
    explanation: "Yönetmelik Madde 7: Risk değerlendirmesi tasarım veya kuruluş aşamasından başlar."
  },
  {
    q: "Risk değerlendirmesi; Çok Tehlikeli sınıfta en geç 2 yılda bir, Tehlikeli sınıfta 4 yılda bir, Az Tehlikeli sınıfta ise en geç _______ yılda bir yenilenir.",
    answers: ["6", "altı", "alti"],
    hint: "Az tehlikeli sınıf periyodik yenileme yılı",
    explanation: "Az tehlikeli işyerlerinde risk değerlendirmesi en geç 6 yılda bir yenilenir."
  },
  {
    q: "Risk değerlendirmesi; Çok Tehlikeli sınıfta en geç _______ yılda bir, Tehlikeli sınıfta 4 yılda bir yenilenir.",
    answers: ["2", "iki"],
    hint: "Çok tehlikeli sınıf periyodik yenileme yılı",
    explanation: "Çok tehlikeli işyerlerinde risk değerlendirmesi en geç 2 yılda bir yenilenir."
  },
  {
    q: "Maden, metal ve yapı işleri gibi çok tehlikeli sınıfta yer alan işyerlerinde risk değerlendirmesi yapılmamış olması halinde Kanun Madde 25 gereğince işin _______ yaptırımı uygulanır.",
    answers: ["durdurulması", "durdurulmasi"],
    hint: "Faaliyetin askıya alınması / durdurulması",
    explanation: "6331 sayılı Kanun Madde 25: Çok tehlikeli sınıfta RD yoksa iş durdurulur."
  },
  {
    q: "Funda Hoca'nın köpek balığı analojisinde; denizdeki köpek balığının kendisi bir tehlike iken, suya girip yüzmeniz bir _______ oluşturur.",
    answers: ["risk"],
    hint: "Olasılık ve şiddetin bileşkesi",
    explanation: "Köpek balığı tehlikedir; suya girildiğinde ısırma ihtimali risktir."
  },
  {
    q: "Geleneksel tespit bazlı eski yaklaşım reaktif iken; risk bazlı ve önleyici tedbirlere dayanan modern İSG yaklaşımı _______ yaklaşımdır.",
    answers: ["proaktif", "önleyici"],
    hint: "Olay yaşanmadan önce tedbir alan yaklaşım",
    explanation: "Yeni İSG anlayışının temeli olaylar olmadan önce öngören Proaktif yaklaşımdır."
  },
  {
    q: "Risk değerlendirmesinde Birey Yaklaşımı çabuk netice sağlarken, en büyük mahzuru yüksek teknik _______ gerektirmesi ve tek boyutlu olmasıdır.",
    answers: ["uzmanlık", "uzmanlik"],
    hint: "Bireyin sahip olması zorunlu olan derin teknik bilgi",
    explanation: "Birey yaklaşımı derin teknik uzmanlık gerektirir ve tek boyutlu kalabilir."
  },
  {
    q: "Funda Hoca'nın kontrol önlemleri hiyerarşisinde 1. basamak, tehlikenin sistemden tamamen çıkarılması yani _______ (yok etme) adımıdır.",
    answers: ["eliminasyon", "yok etme", "elimine"],
    hint: "Kaynağında tamamen ortadan kaldırma",
    explanation: "Hiyerarşinin en etkili 1. adımı Eliminasyon (Risklerin ortadan kaldırılması) basamağıdır."
  },
  {
    q: "Tehlikeli bir kimyasalın veya prosesin daha az tehlikeli olanla değiştirilmesine _______ (yerine koyma / substitüsyon) denir.",
    answers: ["ikame", "substitüsyon", "substitusyon"],
    hint: "Yerine koyma işlemi",
    explanation: "Tehlikelinin daha az tehlikeli olanla değiştirilmesine İkame (Substitüsyon) denir."
  },
  {
    q: "Boyahanede kullanılan boyaları değiştirmek mümkün olmadığında kapalı sistem boya kabini kurulması kontrol hiyerarşisinde _______ adımına girer.",
    answers: ["izolasyon", "kontrol ve izolasyon"],
    hint: "Ortamdan ayırma / yalıtma",
    explanation: "Funda Hoca hiyerarşisinde 3. adım Kontrol ve İzolasyondur (boya kabini, röntgen süresini azaltma)."
  },
  {
    q: "Kontrol hiyerarşisinde çalışanlar için en rahatsız edici, denetimi en zor ve en son başvurulması gereken seçenek _______ (Kişisel Koruyucu Donanım) kullanımıdır.",
    answers: ["KKD", "kişisel korunma", "kisisel korunma"],
    hint: "Baret, maske, kulaklık gibi kişisel araçlar",
    explanation: "Kişisel Korunma (KKD) en son seçimdir; denetimi zor ve koruma gücü toplu korumaya göre azdır."
  },
  {
    q: "Funda Hoca'nın 14 Temel İSG Prensibine göre; tesisin tasarım ve montaj aşamasında alınan tedbirlere _______ tedbirleri denir.",
    answers: ["önleme", "onleme"],
    hint: "İşletme öncesi alınan tedbir türü",
    explanation: "İşletme safhasından önce alınan tedbirlere 'önleme', işletme safhasında alınanlara 'koruma' denir."
  },
  {
    q: "Tesisin son tasarım aşamasında uygulanan ve hızla hazırlanabilen kalitatif risk değerlendirme yöntemine Ön _______ Analizi (PHA) denir.",
    answers: ["tehlike", "Tehlike"],
    hint: "Preliminary Hazard Analysis karşılığı",
    explanation: "Ön Tehlike Analizi (PHA), son tasarım aşamasında uygulanan kalitatif yöntemdir."
  },
  {
    q: "FMEA yönteminde Risk Öncelik Sayısı (RÖS), Olasılık (P), Şiddet (S) ve Fark Edilebilirlik (D) çarpımıyla hesaplanır ve en fazla _______ puan olabilir.",
    answers: ["1000", "bin"],
    hint: "10 x 10 x 10 sonucu",
    explanation: "FMEA'da RÖS = P (1-10) x S (1-10) x D (1-10) olup maksimum 1000 puandır."
  },
  {
    q: "FMEA türlerinden üretim ve montaj prosesindeki eksiklerden doğabilecek hataları analiz eden çeşidine _______ FMEA denir.",
    answers: ["proses", "Proses"],
    hint: "Üretim hattı ve montaj süreci FMEA'sı",
    explanation: "Üretim ve montaj eksiklerini analiz eden FMEA türü Proses FMEA'dır."
  },
  {
    q: "İstenmeyen en üst zirve olaydan (Top Event) başlayarak mantıksal VE/VEYA kapılarıyla kök sebeplere inen yönteme _______ Ağacı Analizi (FTA) denir.",
    answers: ["hata", "Hata"],
    hint: "Fault Tree Analysis karşılığı",
    explanation: "Zirve olaydan nedenlere inen tümdengelimli yöntem Hata Ağacı Analizi (FTA)'dır."
  },
  {
    q: "İlk olarak nükleer endüstride geliştirilen ve bir başlangıç olayından hareketle sonuç senaryolarını dallandıran yönteme _______ Ağacı Analizi (ETA) denir.",
    answers: ["olay", "Olay"],
    hint: "Event Tree Analysis karşılığı",
    explanation: "Nükleer santraller için geliştirilen tümevarım yöntemi Olay Ağacı Analizi (ETA)'dır."
  },
  {
    q: "Mevcut tesiste bir takım değişiklikler düşünüldüğü aşamada sorgulamaya dayalı olarak uygulanan beyin fırtınası yöntemine _______ (What-If) yöntemi denir.",
    answers: ["olursa ne olur", "olursa ne olur?", "what if"],
    hint: "What-If yönteminin Türkçe karşılığı",
    explanation: "What-If (Olursa Ne Olur?) sorgulamaya dayalı kalitatif bir yöntemdir."
  },
  {
    q: "Kimya endüstrisinde basınç, sıcaklık ve akış sapmalarını 'Fazla, Az, Hiç, Ters' kılavuz kelimeleriyle inceleyen yönteme _______ analizi denir.",
    answers: ["HAZOP", "hazop"],
    hint: "Hazard and Operability kısaltması",
    explanation: "Kılavuz kelimelerle proses sapmalarını inceleyen yöntem HAZOP'tur."
  },
  {
    q: "HAZOP çalışması işletmede normal şartlarda en az _______ yılda bir defa yenilenmelidir.",
    answers: ["5", "beş", "bes"],
    hint: "HAZOP yenileme periyodu (yıl)",
    explanation: "HAZOP çalışması kaza veya proses değişikliği olmasa bile en az 5 yılda bir yenilenmelidir."
  },
  {
    q: "Kinney yönteminde Risk Skoru; Olasılık, Frekans ve _______ değerlerinin çarpımıyla hesaplanır.",
    answers: ["şiddet", "siddet"],
    hint: "Zararın büyüklüğü / derecesi",
    explanation: "Kinney yöntemi: Risk = Olasılık x Frekans x Şiddet."
  },
  {
    q: "Kinney yönteminde insan ve çevre üzerinde tek bir ölüm meydana gelmesi durumunda şiddet puanı _______ olarak alınır.",
    answers: ["40", "kırk", "kirk"],
    hint: "Birden çok ölümde 100 olan puanın tek ölüm karşılığı",
    explanation: "Kinney şiddet tablosunda tek öldürücü kaza için 40 puan, birden çok ölüm için 100 puan verilir."
  },
  {
    q: "Kinney yönteminde uygulanan düzeltici ve önleyici faaliyetler şiddet veya frekansı değiştirmez; etkilediği tek değişken _______ değeridir.",
    answers: ["olasılık", "olasilik", "şans"],
    hint: "Zararın gerçekleşme ihtimali",
    explanation: "Funda Hoca notu: Yapılan düzeltici faaliyet frekans veya şiddeti etkilemez, etkilediği tek değişken olasılıktır."
  },
  {
    q: "Kinney yönteminde risk skoru _______ puanın üzerinde çıkarsa 'Tolerans Gösterilemez Risk' kabul edilir ve acil çözüm için durum Genel Müdür ile paylaşılır.",
    answers: ["400", "dört yüz", "dort yuz"],
    hint: "En üst risk puanı eşiği",
    explanation: "Kinney yönteminde 400 puan üzeri tolerans gösterilemez risktir; derhal Genel Müdür ile paylaşılmalıdır."
  },
  {
    q: "L Tipi matris tek bir analist ile sebep-sonuç ilişkisini çözerken, takım çalışması ve geçmiş 5 yıllık kaza verilerini gerektiren matris yöntemi _______ Tipi Matristir.",
    answers: ["X", "x"],
    hint: "L harfi dışındaki çok değişkenli matris harfi",
    explanation: "Geçmiş 5 yılın verilerini ve maliyet analizini içeren yöntem X Tipi Matristir."
  },
  {
    q: "İşyerini A'dan E'ye kadar Temel Modüller ve F'den O'ya kadar Özel Modüller halinde harflerle inceleyen risk analizi metoduna _______ Metodu denir.",
    answers: ["3T", "3t"],
    hint: "3T kısaltması",
    explanation: "3T metodu Temel (A-E) ve Özel (F-O) modüllerden oluşur."
  },
  {
    q: "Funda Hoca'nın slaytlarında güvensiz davranışlar listesinde belirtilen kurala göre malzemeler en fazla _______ metreden yüksek istiflenmemelidir.",
    answers: ["3", "üç", "uc"],
    hint: "İstifleme azami yükseklik sınırı (metre)",
    explanation: "Slayt 106: '3 metreden yüksek malzeme istifleme' güvensiz davranış olarak tanımlanmıştır."
  },
  {
    q: "İşyerinde meydana gelen iş kazaları ve meslek hastalıklarının tazminat ve tedavi gibi doğrudan görünen maliyetlerinin altında buzdağı gibi yatan görünmeyen maliyetlere _______ maliyetler denir.",
    answers: ["dolaylı", "indirekt", "görünmeyen"],
    hint: "Direkt maliyetin zıttı",
    explanation: "Buzdağının altındaki iş gücü kaybı, imaj kaybı ve eğitim giderlerine Dolaylı (İndirekt) maliyetler denir."
  },
  {
    q: "Dünya Sağlık Örgütü (WHO) ve ILO tanımına göre İSG'nin amacı; işçilerin bedensel, ruhsal ve _______ iyilik durumlarını en üst düzeye ulaştırmaktır.",
    answers: ["sosyal"],
    hint: "Bedensel ve ruhsalın yanındaki 3. boyut",
    explanation: "WHO ve ILO İSG'yi bedensel, ruhsal ve sosyal iyilik durumunun sürdürülmesi olarak tanımlar."
  },
  {
    q: "6331 sayılı Kanun Madde 10 uyarınca risk değerlendirmesi yapılırken genç, yaşlı, gebe, emziren ve engelli gibi özel _______ gerektiren çalışan grupları mutlaka gözetilir.",
    answers: ["politika"],
    hint: "Özel ... gerektiren gruplar",
    explanation: "Kanun Madde 10: Özel politika gerektiren çalışan gruplarının durumu dikkate alınır."
  },
  {
    q: "Risk değerlendirmesi dokümanının her sayfası paraflanır ve son sayfası risk değerlendirmesi ekibinde yer alan tüm üyeler tarafından _______ edilir.",
    answers: ["imza", "imzalanır", "imzalanir"],
    hint: "Onaylama işlemi",
    explanation: "Dokümanın tüm sayfaları paraflanır ve son sayfası ekip üyelerince imzalanır."
  },
  {
    q: "İşletmenin bulunduğu coğrafyadan kaynaklanan sel, deprem, çığ, heyelan, fırtına ve sabotaj işyerinin bulunduğu _______ bağlı tehlike faktörleridir.",
    answers: ["bölgeye", "bolgeye", "alana"],
    hint: "Coğrafi konuma/araziye bağlı faktörler",
    explanation: "Heyelan, sel, deprem ve sabotaj 'İşyerinin bulunduğu bölgeye bağlı tehlike faktörleri'dir."
  }
];
