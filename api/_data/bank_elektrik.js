export const elektrikTestThemes = [
  "Elektrik Tarihçesi, Öncü Deneyler & İlk Kazalar (Thales, Franklin, Richmann, Tarsus)",
  "Elektriğin 3 Temel Özelliği & 5 Tehlike Sınıfı (Çarpma, Ark, Yangın, Patlama, İkincil)",
  "Kaza İstatistikleri (Van Otopsisi, ESFI) & Güvenlik Kültürü (Reason, Heinrich, Bird)",
  "Akımın İnsan Biyolojisine Etkileri & mA Eşikleri (Algılama, Tutma, Fibrilasyon)",
  "Ohm Kanunu, Vücut Direnci & Dokunma/Adım Gerilimi Dinamikleri",
  "5 Temel Güvenlik Kuralı & LOTO (EKED) Saha Uygulamaları",
  "Kaçak Akım Röleleri (30 mA / 300 mA), Sigortalar & Selektivite",
  "Topraklama Şebeke Tipleri (TT, TN-S, TN-C, IT) & Eşpotansiyel Kuşaklama",
  "Yüksek Gerilim Tesisleri, Kesici/Ayırıcı Ayrımı & Ark Patlaması (Arc Flash)",
  "Genel Vize Simülasyonu: Şantiye Güvenliği, İzole KKD & OSHA/NIOSH Vaka Analizi"
];

export const elektrikConceptGroups = [
  {
    groupName: "Elektrik Tarihçesi, Öncü Bilim İnsanları ve İlk Kazalar",
    items: [
      {
        opt: "Thales",
        desc: "M.Ö. 6. yüzyılda kehribarın kumaşa sürtüldüğünde saman ve tüy gibi hafif cisimleri çektiğini gözlemleyen ve elektrik tarihinin başlangıcı kabul edilen filozoftur.",
        q: "Kehribarın sürtünmeyle hafif cisimleri çektiğini keşfederek elektriğin temellerini atan ve 'elektron' sözcüğünün kökenini oluşturan Antik Yunan filozofu kimdir?"
      },
      {
        opt: "William Gilbert",
        desc: "Dünyanın kendisinin dev bir mıknatıs olduğunu açıklayan, kehribar benzeri çekim yapan maddeler için Latince 'electricus' sözcüğünü türeten hekim ve fizikçidir.",
        q: "1600 yılında yayımladığı 'De Magnete' adlı eseriyle kehribar benzeri maddeleri tanımlamak için 'electricus' terimini ilk kez kullanan bilim insanı kimdir?"
      },
      {
        opt: "Stephen Gray",
        desc: "Elektriksel yükün ipek iplerle uzağa taşınabildiğini kanıtlayan, maddeleri iletken ve yalıtkan olarak ayıran ve insan vücudunun iletkenliğini ilk kez gösteren İngiliz bilim insanıdır.",
        q: "1729 yılında elektriğin maddeler üzerinden aktarılabildiğini keşfederek iletken ve yalıtkan ayrımını yapan, insan vücudunun da iletken olduğunu gösteren bilim insanı kimdir?"
      },
      {
        opt: "Leyden Şişesi",
        desc: "Elektrik yükünü cam şişe içindeki ve dışındaki metal tabakalar arasında depolayabilen, devre kesildikten sonra bile artık yük/şok tehlikesi barındıran ilk elektrik depolama aracıdır.",
        q: "1745-1746 yıllarında icat edilen, elektriği depolayabilen ilk kapasitör sayılan ve kaynak kesilse dahi sert şok tehlikesini ilk kez ortaya koyan düzenek nedir?"
      },
      {
        opt: "Jean-Antoine Nollet",
        desc: "Elektriğin anlık yayılım hızını ve insan bedenindeki iletimini kanıtlamak için 180 askeri birbirine el ele bağlayıp toplu elektrik şoku uygulayan Abbé Nollet lakaplı fizikçidir.",
        q: "1746 yılında 180 kraliyet muhafızını el ele tutuşturup Leyden şişesiyle şok vererek akımın anlık geçişini ve insan vücudundaki iletimi test eden Fransız fizikçi kimdir?"
      },
      {
        opt: "Benjamin Franklin",
        desc: "Elektrik akımında artı ve eksi yük kavramlarını ortaya atan, yıldırımın elektrik olduğunu fırtınalı havada uçurtma deneyiyle gösterip paratoneri icat eden Amerikalı bilim insanıdır.",
        q: "1750'de elektrikle canlıları öldürmeye çalışırken kazara kendisi çarpılan, 1752'de uçurtma deneyiyle yıldırımın elektrik olduğunu kanıtlayan bilim insanı kimdir?"
      },
      {
        opt: "Georg Wilhelm Richmann",
        desc: "St. Petersburg'da yıldırımın gücünü ölçmek için kurduğu yalıtımsız düzenekte deney yaparken başına isabet eden elektrik deşarjıyla hayatını kaybeden ilk bilim insanıdır.",
        q: "1753 yılında St. Petersburg'da fırtına sırasında paratoner deneyi yaparken top yıldırımının çarpması sonucu hayatını kaybeden tarihteki ilk elektrik kurbanı bilim insanı kimdir?"
      },
      {
        opt: "Tarsus Berdan Çayı Santrali",
        desc: "1902 yılında Berdan Çayı üzerindeki un değirmenine bağlanan 2 kW su türbini (dinamo) ile sarı pirinç telli hat üzerinden elektrik üretilip ilk cadde aydınlatması yapılan yerdir.",
        q: "Türkiye'de modern elektrik üretiminin başlangıcı kabul edilen; 1902 yılında bir un değirmenine bağlı 2 kW'lık su türbini/dinamo ile elektrik üretilen ilk yerleşim yeri neresidir?"
      },
      {
        opt: "Birincil ve İkincil Kaynak Analizi",
        desc: "Kaza tutanaklarında ve teknik iddialarda bilginin resmi arşive mi, anıya mı yoksa kulaktan dolma ikincil aktarıma mı dayandığını sorgulayan bilimsel İSG değerlendirme yöntemidir.",
        q: "Prof. Dr. Mert Şekerci'nin derste işlediği; kaza tutanakları ve teknik iddialarda bilginin arşive mi yoksa anıya mı dayandığını sorgulayan akademik İSG becerisi nedir?"
      }
    ]
  },
  {
    groupName: "Elektriğin Doğası, 3 Temel Özelliği ve 5 Zarar Verme Yolu",
    items: [
      {
        opt: "Duyularla Algılanamama",
        desc: "Elektrik akımının kokusu, rengi veya çıplak gözle görünen bir formu olmadığı için iletkende gerilim olup olmadığının sadece ölçüm aletiyle anlaşılabilmesi özelliğidir.",
        q: "Elektriğin en tehlikeli fiziksel özelliği olan; duyularla varlığının önceden algılanamaması ve enerjili tel ile enerjisiz telin aynı görünmesi durumunu tanımlayan özellik hangisidir?"
      },
      {
        opt: "Elektrikçi Olmayanların Maruziyeti",
        desc: "Elektrik riskinin yalnızca elektrikçileri değil; havai hatlara yaklaşan boyacı, ağaç budamacı, vinç operatörü ve inşaat işçisi gibi tüm meslekleri tehdit etmesi kuralıdır.",
        q: "Elektrik kazalarında hayatını kaybedenlerin %70'inden fazlasının boyacı, ağaç budamacı, vinç operatörü gibi elektrikçi olmayan mesleklerden olmasını özetleyen temel prensip nedir?"
      },
      {
        opt: "Sayıca Az Olmasına Rağmen Ağır ve Ölümcül Sonuçlar Doğurması",
        desc: "Kaza frekansı toplam kazaların %1-2'si kadar düşük olmakla birlikte, kazazedede kalıcı sakatlık, ampütasyon veya ölüm oranının genel kaza ortalamalarından katbekat yüksek olmasıdır.",
        q: "Elektrik kazalarının genel iş kazaları istatistiklerindeki payı küçük olmasına rağmen, sonuçlarının diğer kaza türlerine göre en belirgin ayırt edici niteliği nedir?"
      },
      {
        opt: "Elektrik Çarpması ve Şoku",
        desc: "Vücuttan geçen elektrik akımının biyolojik dokularda kas kilitlenmesi, solunum durması (asfiksi) ve kalpte ölümcül ventriküler fibrilasyon yapması tablosudur.",
        q: "Elektrik akımının vücut dokularından geçerken sinir ve kas sistemini felç etmesi, diyaframı kilitlemesi veya kalbi durdurması ile tanımlanan birinci tehlike sınıfı nedir?"
      },
      {
        opt: "Elektrik Arkı ve Termal Yanıklar",
        desc: "Hava boşluğundan geçen akımın 15.000 - 20.000 °C termal ısı enerjisi, erimiş metal sıçraması ve derin doku joule yanıkları oluşturduğu ark patlaması tehlikesidir.",
        q: "Elektrik devrelerinde hava aralığının iyonize olarak binlerce derecelik sıcaklık, erimiş metal sıçraması ve UV ışınımı yayması ile oluşan tehlike sınıfı nedir?"
      },
      {
        opt: "Elektrik Kaynaklı Yangınlar",
        desc: "Elektrik tesisatındaki aşırı akım, gevşek temas direnci veya 300 mA üzerindeki kaçak akımların yanıcı malzemeleri tutuşturarak oluşturduğu yangın tehlikesidir.",
        q: "Kabloların kapasitesinden fazla yüklenmesi, klemenslerdeki gevşek temas direncinin aşırı ısınması veya ark parlaması sonucu binalarda ortaya çıkan tehlike sınıfı hangisidir?"
      },
      {
        opt: "Elektriksel Patlamalar",
        desc: "Patlayıcı gaz/toz ortamlarında elektrik kıvılcımının patlama zinciri başlatması veya arkın bakırı aniden buharlaştırarak yarattığı şiddetli akustik basınç dalgasıdır.",
        q: "Elektriksel kıvılcımın yanıcı gaz, buhar veya toz bulunan ortamlarda ortamı ateşlemesi ya da arkın havayı genleştirerek şok dalgası yaratması hangi tehlike sınıfıdır?"
      },
      {
        opt: "İkincil Kazalar (Düşme/Çarpma)",
        desc: "Elektrik akımının kendisi doğrudan öldürmese bile, refleks kas kasılması sonucu çalışanın dengesini kaybederek yüksekten düşmesi veya elindeki aleti fırlatmasıdır.",
        q: "Elektrik akımına maruz kalan bir çalışanın ölümcül olmayan küçük bir şok (1-5 mA) almasıyla refleks olarak irkilip iskeleden düşmesi hangi tehlike sınıfıdır?"
      }
    ]
  },
  {
    groupName: "Kaza İstatistikleri, Rakamlar ve Güvenlik Kültürü Modelleri",
    items: [
      {
        opt: "Van Otopsi Araştırması",
        desc: "Elektrik ölümlerinin %80'inin sanılanın aksine yüksek gerilim değil, ev ve şantiyelerdeki alçak gerilim (220-380 V) çarpılmalarından kaynaklandığını gösteren araştırmadır.",
        q: "Türkiye'de Van bölgesinde yapılan adli tıp ve otopsi çalışmalarında, elektrik kaynaklı ölümlerin yaklaşık yüzde kaçının ALÇAK GERİLİM (AG - 220V/380V) ile ilişkili olduğu tespit edilmiştir?"
      },
      {
        opt: "ESFI Araştırması",
        desc: "Elektrik kaynaklı işyeri ölümlerinin %70'inden fazlasının elektrikçi olmayan çalışanlarda (boyacı, ağaç budama, vinç, inşaat) gerçekleştiğini belgeleyen çalışmadır.",
        q: "Uluslararası Elektrik Güvenliği Vakfı (ESFI) kaza verilerine göre; elektrik kaynaklı işyeri ölümlerinin yüzde kaçı elektrikçi olmayan çalışanlarda gerçekleşmektedir?"
      },
      {
        opt: "Enerji Nakil Hattı İşçileri Kaza Riski",
        desc: "Yüksekte çalışma ve yüksek gerilimin birleştiği enerji nakil hatları bakım işçilerinin ölüm riskinin tüm sektörler genel kaza ortalamasının 55 katına ulaştığını gösteren orandır.",
        q: "İSG istatistiklerine göre yüksek gerilim enerji nakil hatlarının kurulum, bakım ve onarımında çalışan işçilerin ölüm riski, genel kaza ortalamasının yaklaşık kaç katıdır?"
      },
      {
        opt: "100.000 Çalışan Yılı Oranı",
        desc: "Farklı büyüklükteki sektörler ve ülkeler arasında elektrik kaza sıklığını adil karşılaştırabilmek için verilerin yıllık 100.000 çalışan başına standardize edildiği istatistiki orandır.",
        q: "OSHA, BLS ve SGK gibi resmi kurumların farklı büyüklükteki sektörler ve ülkeler arasında elektrik kaza sıklığını adil karşılaştırabilmek için kullandığı standart referans taban nedir?"
      },
      {
        opt: "James Reason İsviçre Peyniri Modeli",
        desc: "Yönetim, bakım, denetim, koruma röleleri ve KKD gibi savunma katmanlarındaki aktif hatalar ile gizli koşulların aynı hatta hizalanması sonucu kazanın oluştuğunu açıklayan modeldir.",
        q: "Bir kazanın tek bir çalışanın anlık hatasıyla değil; yönetim, bakım, denetim ve koruma rölelerindeki boşlukların üst üste gelmesiyle oluştuğunu açıklayan kaza modeli nedir?"
      },
      {
        opt: "Aktif Hata ve Gizli Koşul",
        desc: "Çalışanın anlık dikkatsizliği veya yanlış hamlesi aktif hata iken; panoda 30 mA RCD bulunmaması veya periyodik kontrolün yapılmaması önceden var olan gizli koşullardır.",
        q: "İsviçre Peyniri Modeli'ne göre teknisyenin panoda faz kalemini yanlış kullanması 'Aktif Hata' ise, panoda 30 mA RCD takılmamış olması ve periyodik bakım yapılmaması neyi ifade eder?"
      },
      {
        opt: "Heinrich Kaza Piramidi",
        desc: "Her 1 ölümlü/ağır kazanın altında 29 uzuv kayıplı/hafif kaza ve 300 ramak kala olayının bulunduğunu, ölümleri önlemenin yolunun ramak kalaları sıfırlamak olduğunu savunan modeldir.",
        q: "İSG teorisinde her 1 ölümlü veya ağır kazanın altında 29 hafif kaza ve 300 ramak kala olayı bulunduğunu ortaya koyan model nedir?"
      },
      {
        opt: "Frank Bird Kaza Piramidi",
        desc: "1,7 milyon endüstriyel kaza analizine dayanarak 1 ağır kaza, 10 hafif kaza, 30 maddi hasarlı kaza ve 600 ramak kala oranını ortaya koyan kaza piramididir.",
        q: "1,7 milyon endüstriyel kaza analizine dayanarak 1 ağır kaza - 10 hafif kaza - 30 hasarlı olay - 600 ramak kala oranını ortaya koyan kaza modeli hangisidir?"
      },
      {
        opt: "Kaza Buzdağı Modeli",
        desc: "Elektrik kazalarında buzdağının su üstündeki kısmı doğrudan tedavi ve tazminat iken, su altındaki kısmı iş durması, ekipman hasarı ve itibar kaybı gibi 4-10 kat büyük dolaylı maliyetlerdir.",
        q: "Elektrik kazalarında buzdağının su üstündeki görünen kısmı doğrudan tedavi ve tazminat maliyetleri iken, su altındaki çok daha büyük görünmeyen kısmı neyi temsil eder?"
      },
      {
        opt: "Ramak Kala Olay",
        desc: "İşyerinde meydana gelen, çalışanı veya ekipmanı zarara uğratma potansiyeli olduğu halde zarara uğratmayan tehlikeli olaydır (örneğin kablo soyulmasının çarpılma olmadan fark edilmesi).",
        q: "6331 sayılı İSG Kanunu'na göre; işyerinde meydana gelen, çalışanı veya ekipmanı zarara uğratma potansiyeli olduğu halde zarara uğratmayan olaylara ne ad verilir?"
      }
    ]
  },
  {
    groupName: "Akım Eşikleri ve Fizyolojik Etkiler",
    items: [
      {
        opt: "0,5 - 1 mA",
        desc: "Alternatif akımda parmak ucunda veya dilde çok hafif karıncalanma olarak hissedilen ilk algılama eşiğidir.",
        q: "50 Hz alternatif akımda insan vücudunda elektrik akımının ilk kez hafif bir karıncalanma şeklinde hissedildiği 'Algılama Eşiği' hangi aralıktadır?"
      },
      {
        opt: "1 - 5 mA",
        desc: "Kas kontrolünün kaybolmadığı, kişinin elini rahatça çekebildiği ancak hafif kramp ve irkilme yaratan akım aralığıdır.",
        q: "Elektrik akımına temas eden bir kişide kasların henüz kilitlenmediği ve elini kendi iradesiyle çekebildiği, ancak refleks olarak sıçrama/irkilme yaşadığı akım aralığı hangisidir?"
      },
      {
        opt: "10 - 15 mA",
        desc: "Kol ve el kaslarında istemsiz tetanik kasılma başlatarak kişinin enerjili iletkeni avucundan bırakamadığı kritik eşiktir.",
        q: "Elektrik kazalarında kişinin 'elektriğe yapışıp kalmasına' yol açan, ön kol kaslarının istemsiz kasılmasıyla iletkenin elden bırakılamadığı eşik hangisidir?"
      },
      {
        opt: "20 - 30 mA",
        desc: "Kasılmanın göğüs kafesi ve diyafram kaslarına yayılarak nefes almayı durdurduğu (asfiksi) ve hayat koruma rölesinin (30 mA) üst sınırını oluşturan değerdir.",
        q: "Akımın göğüs kafesi ve diyafram kaslarını kasarak solunum felcine yol açtığı ve hayat koruma kaçak akım rölesinin açma sınırına karşılık gelen değer hangisidir?"
      },
      {
        opt: "50 - 100 mA",
        desc: "Kalbin elektriksel iletim sisteminin bozularak kalp kaslarının düzensiz titreşmeye başladığı ve kan pompalayamadığı ölümcül eşiktir.",
        q: "Elektrik çarpmalarında kalp kaslarının senkronize kasılmasını bozarak 'Ventriküler Fibrilasyon' başlatan ölümcül akım eşiği aşağıdakilerden hangisidir?"
      },
      {
        opt: "1000 mA (1 A) ve üzeri",
        desc: "Kalp kasının tamamen kasıldığı, sinir merkezlerinin tahrip olduğu ve iç organlar ile deride derin joule yanıklarının oluştuğu çok yüksek akım değeridir.",
        q: "Vücuttan geçen akımın 1 Amper (1000 mA) ve üzerine çıkması durumunda ortaya çıkan en belirgin patolojik tablo hangisidir?"
      },
      {
        opt: "Doğru Akımda (DC) 60 - 70 mA",
        desc: "Doğru akımda yön değişimi olmadığı için tutma (bırakamama) eşiği AC'ye göre yaklaşık 4-5 kat daha yüksek olup 60-70 mA seviyesindedir.",
        q: "Doğru akım (DC) kaynaklarında alternatif akıma göre kas kilitlenmesi daha yüksek akımlarda görülür; DC için tutma eşiği yaklaşık hangi seviyededir?"
      },
      {
        opt: "Kalp Faktörü",
        desc: "Akımın vücuda giriş ve çıkış noktalarına göre kalpten geçen bağıl akım oranını ifade eder; sol elden girip ayaklardan çıkan yolda referans 1,0 kabul edilir.",
        q: "IEC standartlarına göre akımın vücutta izlediği yola bağlı olarak kalp üzerinden geçen tehlike katsayısını tanımlayan ve sol el-ayak yolunda 1,0 alınan parametre nedir?"
      },
      {
        opt: "Joule Isısı Prensibi",
        desc: "Elektrik akımının vücut direnci üzerinden geçerken oluşturduğu termal yanık enerjisini ifade eden fiziksel bağıntıdır.",
        q: "Elektrik çarpmalarında özellikle akımın giriş ve çıkış noktalarında oluşan derin doku ve kemik yanıklarının şiddetini belirleyen fiziksel yasa hangisidir?"
      },
      {
        opt: "Elektroliz Etkisi",
        desc: "Doğru akımın kan plazması ve hücre sıvılarındaki iyonları kutuplara ayrıştırarak kimyasal doku bozulması ve gaz embolisi yapmasıdır.",
        q: "Doğru akımın (DC) insan vücudundan uzun süreli geçişinde kan ve hücre sıvılarında iyon ayrışmasına yol açarak oluşturduğu kimyasal etki nedir?"
      }
    ]
  },
  {
    groupName: "Gerilim Sınıfları, Şebeke Tipleri (TT, TN, IT) ve Koruma Röleleri",
    items: [
      {
        opt: "50 V AC",
        desc: "Normal kuru ortamlarda alternatif akımda insan vücudu için kabul edilen güvenli dokunma gerilimi üst sınırıdır.",
        q: "İSG mevzuatı ve standartlarına göre normal kuru çalışma ortamlarında alternatif akım (AC) için 'Tehlikeli Gerilim Sınırı' kaç Volt kabul edilir?"
      },
      {
        opt: "120 V DC",
        desc: "Doğru akımda (DC) dalgalanmasız gerilim için insan vücudunda kabul edilen güvenli dokunma gerilimi üst sınırıdır.",
        q: "Doğru akım (DC) sistemlerinde insan sağlığı açısından kabul edilen güvenli dokunma gerilimi üst sınırı kaç Volttur?"
      },
      {
        opt: "24 V",
        desc: "Metal tank, kazan içi ve ıslak dar hacimlerde taşınabilir el lambaları ve aletlerde kullanılan çok düşük güvenlik gerilimidir (SELV).",
        q: "Buhar kazanı içi veya metal tank gibi dar ve iletken yerlerde kullanılan seyyar aydınlatma lambalarında uygulanması gereken güvenlik gerilimi nedir?"
      },
      {
        opt: "42 V",
        desc: "Yalıtım transformatörü üzerinden beslenen küçük gerilimli el aletlerinde izin verilen üst güvenlik gerilimidir.",
        q: "Güvenlik transformatörü kullanılarak elde edilen 'Küçük Gerilim' uygulamalarında standart üst sınır kaç Volttur?"
      },
      {
        opt: "230 V",
        desc: "Türkiye'de ev ve ofis prizlerinde bulunan tek fazlı (bir faz ile nötr arası) standart alçak gerilim etkin değeridir.",
        q: "Türkiye elektrik dağıtım şebekesinde tek fazlı prizlerde (Faz - Nötr arasında) bulunan standart alternatif gerilim değeri nedir?"
      },
      {
        opt: "400 V / 380 V",
        desc: "Üç fazlı (trifaze) sanayi şebekesinde iki faz iletkeni arasındaki (hat gerilimi) standart alçak gerilim değeridir.",
        q: "Sanayi tesislerinde üç fazlı (trifaze) motor ve makineleri besleyen şebekede iki faz iletkeni arasındaki gerilim değeri nedir?"
      },
      {
        opt: "1000 V AC / 1500 V DC",
        desc: "Etkin değeri bu sınırda ve altında olanlar Alçak Gerilim (AG), üzerinde olanlar ise Yüksek Gerilim (YG) olarak tanımlanır.",
        q: "Elektrik Kuvvetli Akım Tesisleri Yönetmeliği'ne göre Alçak Gerilim (AG) ile Yüksek Gerilim (YG) arasındaki sınır değer AC'de nedir?"
      },
      {
        opt: "500 - 1000 Ohm",
        desc: "Derinin ıslak, terli veya yüksek voltajla delinmiş olduğu durumda kan ve iç dokuların gösterdiği minimum toplam vücut direncidir.",
        q: "Derinin koruyucu dış tabakasının ıslaklık veya gerilim delinmesi nedeniyle devre dışı kaldığı durumda insan vücudunun iç direnci yaklaşık kaç Ohm mertebesindedir?"
      },
      {
        opt: "30 mA Kaçak Akım Rölesi",
        desc: "İnsan vücudundan geçen kaçak akım 30 mA seviyesine ulaştığında devreyi milisaniyeler içinde keserek solunum felci ve fibrilasyonu önleyen röledir.",
        q: "Ev ve işyerlerinde priz devrelerine takılarak insanı doğrudan ve dolaylı dokunmaya karşı koruyan hayat koruma kaçak akım rölesi eşiği nedir?"
      },
      {
        opt: "300 mA Kaçak Akım Rölesi",
        desc: "Ana dağıtım panolarına takılarak izolasyon kaçağının ark çıkarıp elektrik yangını başlatmasını önleyen koruma rölesidir.",
        q: "Tesislerde ana panolara monte edilen ve kablo izolasyon kaçaklarının ısınarak yangın çıkarmasını önleyen yangın koruma kaçak akım rölesi eşiği nedir?"
      },
      {
        opt: "TT Şebeke Sistemi",
        desc: "Trafo nötr noktasının doğrudan topraklandığı, cihazların metal gövdelerinin ise yerel koruma topraklayıcısına bağlandığı sistemdir.",
        q: "Ev ve işyerlerinde yaygın kullanılan; trafo nötrünün topraklandığı ve tüketici cihaz gövdelerinin ayrı bir koruma topraklamasına bağlandığı şebeke tipi hangisidir?"
      },
      {
        opt: "TN-S Şebeke Sistemi",
        desc: "Şebeke boyunca Nötr (N) ve Koruma (PE) iletkenlerinin birbirinden tamamen ayrı iki hat olarak çekildiği en güvenli TN sistemidir.",
        q: "Trafo merkezinden itibaren Nötr (N) iletkeni ile Koruma (PE) topraklama iletkeninin tüm tesisat boyunca ayrı ayrı çekildiği güvenli şebeke sistemi hangisidir?"
      },
      {
        opt: "TN-C Şebeke Sistemi",
        desc: "Nötr ve koruma iletkeninin PEN adı altında tek bir iletkende birleştirildiği; PEN hattı koparsa tüm cihaz gövdelerine faz gerilimi binen tehlikeli sistemdir.",
        q: "Nötr ve koruma fonksiyonlarının tek bir iletkende (PEN) birleştirildiği ve hat kopmasında tüm metal gövdelerin enerjilenmesi tehlikesi taşıyan sistem hangisidir?"
      },
      {
        opt: "IT Şebeke Sistemi",
        desc: "Trafo yıldız noktasının topraktan izole edildiği, ilk faz-gövde hatasında enerjinin kesilmeyip izolasyon izleme cihazının alarm verdiği kesintisiz sistemdir.",
        q: "Hastane ameliyathaneleri, yoğun bakım üniteleri ve maden ocakları gibi ilk yalıtım hatasında elektriğin kesilmemesi gereken hayati yerlerde kullanılan şebeke tipi hangisidir?"
      }
    ]
  },
  {
    groupName: "5 Temel Güvenlik Kuralı, LOTO (EKED) ve Yüksek Gerilim Güvenliği",
    items: [
      {
        opt: "1. Kural: Gerilimi Her Yönden Kesmek",
        desc: "Çalışılacak tesisat bölümünü besleyen tüm faz ve nötr kaynaklarının görünür şekilde ana şalter ve ayırıcılardan ayrılmasıdır.",
        q: "Elektrik tesislerinde gerilimsiz çalışmaya başlarken uygulanan '5 Temel Güvenlik Kuralı'nın BİRİNCİ adımı aşağıdakilerden hangisidir?"
      },
      {
        opt: "2. Kural: Tekrar Gerilim Verilmesini Önlemek",
        desc: "Açılan şalter ve ayırıcıların kişisel asma kilitlerle kilitlenmesi ve üzerine 'Çalışma Var, Enerjiyi Açma' uyarı kartı takılmasıdır.",
        q: "Gerilimsiz çalışmada 5 Temel Güvenlik Kuralı'nın İKİNCİ adımı olan ve habersiz enerjilenmeyi fiziksel kilitle engelleyen uygulama hangisidir?"
      },
      {
        opt: "3. Kural: Gerilimsizliği Kontrol Etmek",
        desc: "Çalışılacak iletkenlerde enerji kalmadığının kalibrasyonlu çift kutuplu gerilim dedektörü ile doğrulanmasıdır.",
        q: "Enerji kesilip şalter kilitlendikten sonra 5 Temel Güvenlik Kuralı'nın ÜÇÜNCÜ adımı olarak sahada mutlaka yapılması gereken işlem nedir?"
      },
      {
        opt: "4. Kural: Topraklama ve Kısa Devre Yapmak",
        desc: "Kapasitif kalıntı yükleri boşaltmak ve indüksiyon/ters besleme riskine karşı önce toprak ucunu toprağa, sonra faz uçlarını iletkenlere bağlama kuralıdır.",
        q: "Gerilimsizlik doğrulandıktan sonra kapasitif kalıntı yükleri boşaltmak ve ters beslemeye karşı çalışanı korumak için uygulanan DÖRDÜNCÜ kural nedir?"
      },
      {
        opt: "5. Kural: Çalışma Alanını Sınırlamak ve Gerilimli Bölümleri İzole Etmek",
        desc: "Komşu enerjili hücre ve baraların yalıtkan paravanlarla örtülmesi ve çalışma sahasının şerit/levhalarla güvenlik altına alınmasıdır.",
        q: "5 Temel Güvenlik Kuralı'nın BEŞİNCİ (son) adımı olarak çalışma bölgesinin çevresindeki enerjili kısımlara karşı alınan önlem nedir?"
      },
      {
        opt: "Çoklu Kilitleme Çoklayıcısı (Hasp)",
        desc: "Aynı makine veya panoda birden fazla teknisyen çalışırken her çalışanın kendi asma kilidini aynı şaltere takabilmesini sağlayan aparatır.",
        q: "Bir elektrik panosunda birden fazla bakım personeli çalışırken şalterin son kişi işini bitirmeden açılmasını önleyen çok delikli LOTO aparatı nedir?"
      },
      {
        opt: "Dokunma Gerilimi",
        desc: "Yalıtım hatası bulunan bir makine gövdesine veya direğe elle dokunan kişinin eli ile bastığı zemin arasında oluşan gerilim farkıdır.",
        q: "Arızalı bir elektrik direğine veya makine gövdesine eliyle temas eden çalışanın eli ile ayakları arasında oluşan potansiyel farkına ne ad verilir?"
      },
      {
        opt: "Adım Gerilimi",
        desc: "Toprağa yayılan akımın oluşturduğu potansiyel konisinde kişinin iki ayağı (yaklaşık 1 adım / 80 cm) arasında oluşan potansiyel farkıdır.",
        q: "Yere düşen bir yüksek gerilim iletkeninin yakınında bulunan kişinin, iki ayağı arasındaki potansiyel farkından dolayı maruz kaldığı gerilime ne ad verilir?"
      },
      {
        opt: "İndüksiyon Gerilimi",
        desc: "Enerjisi kesilmiş bir yüksek gerilim hattında, yanındaki paralel enerjili hattan kaynaklanan manyetik alan nedeniyle oluşan tehlikeli gerilimdir.",
        q: "Şalteri kapatılarak enerjisi kesilmiş bir enerji nakil hattında, yakınından geçen başka bir enerjili hattın manyetik alanı sebebiyle oluşan tehlikeli gerilim nedir?"
      },
      {
        opt: "Kapasitif Boşalma",
        desc: "Enerjisi kesilen kompanzasyon kondansatörleri ve uzun yeraltı kablolarının içinde depolanmış kalan elektrik yükünün dokunan kişiye boşalmasıdır.",
        q: "Enerji tamamen kesildiği halde kompanzasyon panolarındaki kondansatörlerde veya uzun kablolarda birikmiş kalarak çarpılmaya yol açan tehlike nedir?"
      },
      {
        opt: "Ayırıcı (Seksiyoner)",
        desc: "Devreyi gözle görünür şekilde ayıran ancak ark söndürme hücresi olmadığı için KESİNLİKLE YÜK ALTINDA AÇILMAMASI gereken YG elemanıdır.",
        q: "Yüksek gerilim tesislerinde devrenin açık olduğunu gözle görmeye yarayan, ancak kesici açılmadan yük altında açılırsa büyük ark patlaması yapan eleman nedir?"
      },
      {
        opt: "Kesici (Disjonktör)",
        desc: "Yüksek gerilim devrelerini hem normal yük altında hem de kısa devre arızası anında arkı özel hücrede söndürerek güvenle kesebilen elemandır.",
        q: "Yüksek gerilim trafo merkezlerinde devreyi yük altında ve kısa devre anında oluşan arkı söndürerek kesen eleman nedir?"
      },
      {
        opt: "Ark Koruyucu Termal Kıyafet",
        desc: "Ark patlaması (Arc Flash) sırasında ortaya çıkan yüksek termal ısı enerjisine karşı çalışanı yanıklardan koruyan alev almaz özel KKD'dir.",
        q: "Yüksek enerjili elektrik panolarında manevra yaparken olası bir 'Ark Patlaması' ısısına karşı giyilen ve koruma düzeyi cal/cm² ile ölçülen KKD nedir?"
      },
      {
        opt: "Dielektrik İzole Eldiven",
        desc: "Üzerinde Sınıf 00 (500 V)'dan Sınıf 4 (36.000 V)'e kadar dayanım sınıfı yazılı olan ve her kullanım öncesi hava üflenerek delik kontrolü yapılan eldivendir.",
        q: "Elektrik işlerinde kullanılan, gerilim seviyesine göre Sınıf 00'dan Sınıf 4'e kadar ayrılan ve kullanmadan önce delik kontrolü yapılan KKD nedir?"
      }
    ]
  },
  {
    groupName: "Şantiye Pano Güvenliği, Ekipman ve Saha Standartları",
    items: [
      {
        opt: "Kablo Köprüsü ve Havadan Askıya Alma",
        desc: "Şantiye sahasında seyyar kabloların iş makineleri altında ezilmesini ve su birikintisi içinde kalmasını önlemek için uygulanan fiziksel koruma yöntemidir.",
        q: "İnşaat şantiyelerinde geçici uzatma kablolarının araç geçiş yollarında ezilerek yalıtımının soyulmasını önlemek için hangi yöntem uygulanmalıdır?"
      },
      {
        opt: "IP2X Koruma Derecesi",
        desc: "Elektrik panolarında 12,5 mm çapındaki parmak veya cisimlerin enerjili aktif baralara temas etmesini fiziksel olarak engelleyen asgari muhafaza kodudur.",
        q: "Alçak gerilim elektrik panolarında enerjili aktif bölümlere insan parmağının girmesini önleyen uluslararası muhafaza koruma kodu nedir?"
      },
      {
        opt: "IP65 / IP67 Şantiye Panosu",
        desc: "Açık hava şantiyelerinde yağmur ve toza karşı sızdırmazlık sağlayan, içinde 30 mA RCD ve sigortalar bulunan kapaklı kombinasyon priz panosudur.",
        q: "Açık hava şantiyelerinde yağmur suyunun ve inşaat tozunun pano içine girerek kısa devre yapmasını engelleyen dış ortam pano standardı hangisidir?"
      },
      {
        opt: "Termal Kamera ile Kestirimci Bakım Kontrolü",
        desc: "Elektrik panolarında gevşek klemens bağlantılarını ve dengesiz aşırı yüklenmeleri enerjiyi kesmeden kızılötesi sıcaklık artışıyla tespit eden yöntemdir.",
        q: "Elektrik panolarında enerjiyi kesmeden gevşek bağlantı noktalarındaki aşırı ısınmaları yangın çıkmadan önce tespit eden kestirimci bakım yöntemi nedir?"
      },
      {
        opt: "Yalıtım (İzolasyon) Transformatörü",
        desc: "Primer ve sekonder sargıları birbirinden tamamen ayrılmış olan ve çıkış hattının toprakla elektriksel bağını kopararak tek tele dokunmada çarpılmayı önleyen trafodur.",
        q: "Şebeke gerilimini 1:1 aktarırken çıkış hattının toprakla olan bağını kopararak tek iletkene dokunmada çarpılmayı önleyen trafo türü nedir?"
      },
      {
        opt: "Parafudr",
        desc: "Yıldırım düşmesi veya şebeke darbeleri sonucu oluşan anlık yüksek gerilim piklerini toprağa deşarj ederek iç tesisatı koruyan elemandır.",
        q: "Enerji hatlarına yıldırım düşmesi sonucu tesisata gelen binlerce voltluk aşırı gerilim darbelerini toprağa akıtarak panoyu koruyan eleman nedir?"
      },
      {
        opt: "Ayakları Birbirine Bitiştirerek Sıçrama veya Sürüyerek Uzaklaşma",
        desc: "Kopmuş bir yüksek gerilim iletkeninin düştüğü bölgeden Adım Gerilimine kapılmadan güvenli şekilde çıkabilmek için uygulanan hareket tekniğidir.",
        q: "Yüksek gerilim hattının kopup yere düştüğü tehlike çemberi içinde kalan bir çalışan, adım gerilimine maruz kalmamak için bölgeden nasıl çıkmalıdır?"
      },
      {
        opt: "Akü Şarj Odalarında Hidrojen (H2) Gazı Tahliyesi",
        desc: "UPS ve forklift akülerinin şarjı sırasında açığa çıkan ve havada %4 oranında patlayıcı olan hidrojen gazının tavanda birikmesini önleyen ex-proof havalandırmadır.",
        q: "Akü şarj odalarında şarj esnasında açığa çıkarak patlama riski yaratan gaz ve alınması gereken önlem nedir?"
      },
      {
        opt: "Acil Durum Enerji Kesme (EPO) Butonu",
        desc: "Laboratuvar, pano odası veya atölyelerde elektrik çarpması ya da yangın anında tüm enerjiyi dışarıdan tek hamlede kesen mantar başlı butondur.",
        q: "Elektrik test laboratuvarları ve atölye çıkışlarında acil bir çarpılma veya yangın anında tüm elektriği tek hamlede kesen buton nedir?"
      },
      {
        opt: "Meger Test Cihazı",
        desc: "Topraklama tesisatının yayılma direncini (Ohm) ve kabloların yalıtkanlık direncini (MegaOhm) periyodik kontrollerde ölçen test cihazıdır.",
        q: "Elektrik tesislerinde yıllık periyodik kontrollerde topraklama geçiş direncini ve kablo yalıtkanlık direncini ölçmek için kullanılan cihazın adı nedir?"
      }
    ]
  }
];

export const elektrikExtraFills = [
  {
    q: "Kehribarın sürtünmeyle kumaş ve saman parçalarını çektiğini keşfederek elektriğin temellerini atan Antik Yunan filozofu ________'tir.",
    answers: ["thales", "tales"],
    hint: "M.Ö. 600'lerde yaşamış Miletli filozof",
    explanation: "Thales, kehribarın (Yunanca elektron) sürtünme elektriği özelliğini keşfeden ilk düşünürdür."
  },
  {
    q: "1600 yılında yayımladığı 'De Magnete' adlı eserinde kehribar benzeri çekim yapan maddeler için ilk kez ________ (Latincesi electricus) terimini William Gilbert türetmiştir.",
    answers: ["elektrik", "electricus"],
    hint: "Gilbert'ın türettiği terim",
    explanation: "William Gilbert kehribardan türeterek 'electricus' (elektrik) sözcüğünü literatüre kazandırmıştır."
  },
  {
    q: "1729 yılında elektriğin maddeler üzerinden aktarılabildiğini bularak iletken ve yalıtkan ayrımını yapan bilim insanı Stephen ________'dir.",
    answers: ["gray", "grey"],
    hint: "İngiliz bilim insanının soyadı",
    explanation: "Stephen Gray elektrik yükünün iletkenlerle taşınabildiğini ve insan vücudunun iletken olduğunu kanıtlamıştır."
  },
  {
    q: "1745-1746'da icat edilen, elektriği depolayan ilk kapasitör sayılan ve kaynak kesilse bile artık yük tehlikesi barındıran düzeneğe ________ Şişesi denir.",
    answers: ["leyden"],
    hint: "Hollanda'daki üniversite şehrinin adını taşıyan şişe",
    explanation: "Leyden Şişesi ilk elektrik kapasitörüdür; enerji depolayarak kaynak kesildikten sonra bile sert şok verir."
  },
  {
    q: "1746 yılında 180 kraliyet muhafızını el ele tutuşturup Leyden şişesiyle aynı anda elektrik şoku vererek akımın hızını test eden fizikçi Abbé ________'tir.",
    answers: ["nollet", "nolet"],
    hint: "180 muhafıza toplu şok veren Fransız fizikçi",
    explanation: "Jean-Antoine Nollet 180 askere el ele tutuşturup toplu elektrik şoku deneyi yapmıştır."
  },
  {
    q: "1753 yılında St. Petersburg'da fırtınada paratoner deneyi yaparken top yıldırımının çarpması sonucu hayatını kaybeden ilk bilim insanı Georg Wilhelm ________'dır.",
    answers: ["richmann", "rihman", "rikman"],
    hint: "Yıldırım deneyinde ölen fizikçinin soyadı",
    explanation: "Georg Wilhelm Richmann, tarihe elektrik deneyi sırasında hayatını kaybeden ilk bilim insanı olarak geçmiştir."
  },
  {
    q: "Türkiye'de modern elektrik üretiminin başlangıcı; 1902 yılında Berdan Çayı un değirmenine bağlı 2 kW su türbiniyle Mersin'in ________ ilçesinde gerçekleşmiştir.",
    answers: ["tarsus"],
    hint: "Berdan Çayı'nın geçtiği tarihi ilçe",
    explanation: "Türkiye'de ilk elektrik 1902'de Tarsus'ta un değirmenine bağlanan 2 kW dinamo ile üretilmiştir."
  },
  {
    q: "Van'da yapılan adli tıp otopsi araştırmasına göre elektrik kaynaklı iş kazası ölümlerinin yaklaşık %________'i ALÇAK GERİLİM (220-380 V) kaynaklıdır.",
    answers: ["80", "seksen"],
    hint: "Yüzde seksen oranı (sayısal)",
    explanation: "Otopsi çalışmaları elektrik ölümlerinin %80'inin alçak gerilimden kaynaklandığını kanıtlamaktadır."
  },
  {
    q: "ESFI araştırmasına göre işyerlerinde elektrik çarpması sonucu hayatını kaybedenlerin %________'inden fazlası elektrikçi OLMAYAN çalışanlardır.",
    answers: ["70", "yetmiş", "yetmis"],
    hint: "Yüzde yetmiş oranı (sayısal)",
    explanation: "Elektrik ölümlerinin %70'inden fazlası boyacı, ağaç budama, vinç operatörü ve inşaat işçileridir."
  },
  {
    q: "Yüksek gerilim enerji nakil hatlarında bakım ve onarım yapan işçilerin ölüm riski, tüm sektörler genel iş kazası ortalamasının yaklaşık ________ katıdır.",
    answers: ["55", "elli beş", "ellibes"],
    hint: "50'den büyük katsayı (sayısal)",
    explanation: "Enerji nakil hattı çalışanlarının ölüm riski genel kaza ortalamasının 55 katına ulaşmaktadır."
  },
  {
    q: "Farklı sektörlerin ve ülkelerin elektrik kaza risklerini adil karşılaştırabilmek için veriler yıllık ________ çalışan yılı başına standardize edilir.",
    answers: ["100000", "100.000", "yüz bin", "yuz bin"],
    hint: "Yüz bin çalışan tabanı",
    explanation: "OSHA ve SGK istatistiklerinde kaza sıklık ve ağırlık oranları 100.000 çalışan yılı bazında hesaplanır."
  },
  {
    q: "Bir kazanın tek bir hatayla değil, savunma katmanlarındaki boşlukların üst üste gelmesiyle oluştuğunu açıklayan modele James Reason'ın İsviçre ________ Modeli denir.",
    answers: ["peyniri", "peynir"],
    hint: "Delikli İsviçre yiyeceği modeli",
    explanation: "Reason İsviçre Peyniri Modeli aktif hatalar ile gizli koşulların kesişmesini açıklar."
  },
  {
    q: "İsviçre Peyniri Modeli'nde çalışanın sahadaki anlık dikkatsizliğine 'aktif hata' denirken, panoda RCD olmaması veya bakım yapılmamasına ________ koşul denir.",
    answers: ["gizli"],
    hint: "Sistemde önceden var olan sinsi koşul",
    explanation: "Yönetimsel ve teknik eksiklikler sistemde önceden beri var olan 'gizli koşullar'dır."
  },
  {
    q: "Heinrich kaza piramidine göre her 1 ölümlü veya ağır kazanın tabanında ________ adet ramak kala (hasarsız tehlikeli olay) yer alır.",
    answers: ["300", "üç yüz", "uc yuz"],
    hint: "1 - 29 - ... piramidinin taban sayısı",
    explanation: "Heinrich piramidinde 1 ağır kaza, 29 hafif kaza ve 300 ramak kala ilişkisi vardır."
  },
  {
    q: "1,7 milyon endüstriyel kaza analizine dayanan Frank ________ kaza piramidinde oran 1 - 10 - 30 - 600 olarak tanımlanmıştır.",
    answers: ["bird"],
    hint: "İngilizce 'kuş' anlamına gelen araştırmacı soyadı",
    explanation: "Frank Bird kaza piramidi 1.7 milyon kazayı inceleyerek 600 ramak kalayı belirlemiştir."
  },
  {
    q: "Alternatif akımda parmak ucunda hafif karıncalanma olarak hissedilen yaklaşık 0,5 - 1 mA değerine ________ eşiği denir.",
    answers: ["algılama", "algilama", "hissetme"],
    hint: "İlk hissetme sınırı",
    explanation: "0,5 - 1 mA AC akım insan vücudunda ilk hissedilen Algılama Eşiğidir."
  },
  {
    q: "Alternatif akımda 10 - 15 mA seviyesinde ön kol kaslarının kasılarak iletkenin elden bırakılamadığı sınıra ________ eşiği denir.",
    answers: ["tutma", "bırakamama", "birakamama"],
    hint: "Let-go eşiğinin Türkçesi",
    explanation: "10-15 mA tutma (bırakamama / let-go) eşiği olup kas kilitlenmesine yol açar."
  },
  {
    q: "Akımın 20 - 30 mA seviyesinde diyafram kaslarını kilitleyerek nefes almayı durdurması sonucu gelişen oksijensizliğe bağlı boğulmaya ________ denir.",
    answers: ["asfiksi", "boğulma", "bogulma"],
    hint: "Solunum durması tıbbi terimi",
    explanation: "Solunum kaslarının kasılması asfiksiye (oksijensiz kalarak boğulmaya) neden olur."
  },
  {
    q: "Elektrik çarpmasında kalbin elektriksel ritminin bozularak kan pompalayamaması durumuna ventriküler ________ adı verilir.",
    answers: ["fibrilasyon", "fibrilasyonu"],
    hint: "Ölümcül kalp ritim bozukluğu",
    explanation: "50-100 mA akım ventriküler fibrilasyon oluşturarak ölüme neden olur."
  },
  {
    q: "Ev ve işyerlerinde insan hayatını solunum felci ve fibrilasyondan koruyan kaçak akım rölesinin nominal açma akımı ________ mA'dir.",
    answers: ["30", "otuz"],
    hint: "Hayat koruma kaçak akım eşiği (mA)",
    explanation: "30 mA kaçak akım rölesi insan hayatını doğrudan korumak için zorunludur."
  },
  {
    q: "Ana elektrik panolarında izolasyon hatalarından kaynaklı yangınları önlemek için kullanılan kaçak akım rölesinin eşiği ________ mA'dir.",
    answers: ["300", "üç yüz", "uc yuz"],
    hint: "Yangın koruma kaçak akım eşiği (mA)",
    explanation: "300 mA kaçak akım rölesi elektrik ark yangınlarını önlemek için kullanılır."
  },
  {
    q: "Normal kuru ortamlarda alternatif akım (AC) için insan vücudunda kabul edilen tehlikeli gerilim sınırı ________ Volt'tur.",
    answers: ["50", "elli"],
    hint: "AC tehlikeli gerilim sınırı (V)",
    explanation: "Alternatif akımda tehlikeli dokunma gerilimi sınırı 50 Volt'tur."
  },
  {
    q: "Doğru akımda (DC) dalgalanmasız gerilim için kabul edilen tehlikeli dokunma gerilimi üst sınırı ________ Volt'tur.",
    answers: ["120", "yüz yirmi", "yuzyirmi"],
    hint: "DC tehlikeli gerilim sınırı (V)",
    explanation: "Doğru akımda güvenli gerilim üst sınırı 120 Volt'tur."
  },
  {
    q: "Kazan içi veya metal tank gibi dar ve iletken hacimlerde kullanılan seyyar lambalarda azami ________ Volt güvenlik gerilimi uygulanmalıdır.",
    answers: ["24", "yirmi dört", "yirmidort"],
    hint: "Kazan içi küçük gerilim (V)",
    explanation: "Dar iletken kazan içlerinde güvenlik gerilimi 24 Volt (en fazla 42 V) olmalıdır."
  },
  {
    q: "Mevzuata göre etkin değeri ________ Volt ve altındaki gerilimler Alçak Gerilim (AG), üzerindekiler ise Yüksek Gerilim (YG) kabul edilir.",
    answers: ["1000", "1.000", "bin"],
    hint: "AG ile YG arasındaki sınır (V)",
    explanation: "AC'de 1000 V ve altı Alçak Gerilim (AG), 1000 V üzeri Yüksek Gerilim (YG)'dir."
  },
  {
    q: "Gerilimsiz çalışmada 5 Temel Güvenlik Kuralının 2. adımı; şalteri kilitleyip etiketleyerek tekrar gerilim verilmesini ________ (LOTO/EKED) adımıdır.",
    answers: ["önlemek", "onlemek", "engellemek"],
    hint: "Şalteri asma kilitle kitleme amacı",
    explanation: "2. kural şalterin başkası tarafından habersiz açılmasını önlemektir."
  },
  {
    q: "Gerilimsiz çalışmada 5 Temel Güvenlik Kuralının 4. adımı: Tesisatı topraklamak ve ________ devre etmektir.",
    answers: ["kısa", "kisa"],
    hint: "Topraklama ile birlikte yapılan işlem",
    explanation: "4. adım çalışma sahasını topraklamak ve kısa devre etmektir."
  },
  {
    q: "Yüksek gerilim trafo merkezlerinde devreyi gözle görülür şekilde ayıran ancak yük altında KESİNLİKLE açılmaması gereken elemana ________ (seksiyoner) denir.",
    answers: ["ayırıcı", "ayirici", "seksiyoner"],
    hint: "Kesici açıldıktan sonra açılan YG elemanı",
    explanation: "Ayırıcı yüksüz devreyi ayırır; yük altında açılırsa büyük ark patlaması oluşturur."
  },
  {
    q: "Yüksek gerilim devrelerini hem yük altında hem de kısa devre anında arkı söndürerek güvenle kesebilen elemana ________ (disjonktör) denir.",
    answers: ["kesici", "disjonktör", "disjonktor"],
    hint: "Yük altında açma yapabilen YG elemanı",
    explanation: "Kesici (disjonktör) ark söndürme hücresiyle yük ve kısa devre akımını keser."
  },
  {
    q: "Yere düşen yüksek gerilim hattı çevresinde kişinin iki ayağı arasındaki gerilim farkından dolayı maruz kaldığı gerilime ________ gerilimi denir.",
    answers: ["adım", "adim"],
    hint: "Ayakları birleştirerek uzaklaşmayı gerektiren gerilim",
    explanation: "Adım gerilimi toprağa yayılan akımın iki ayak arasında oluşturduğu potansiyel farktır."
  },
  {
    q: "Elektrik ark patlamasına (Arc Flash) karşı kullanılan koruyucu elbiselerin termal koruma kapasitesi cal/________ birimiyle ifade edilir.",
    answers: ["cm2", "cm²"],
    hint: "Santimetrekare başına düşen kalori enerjisi",
    explanation: "Ark koruyucu KKD'lerin ATPV değeri cal/cm² birimiyle ölçülür."
  },
  {
    q: "İzole elektrikçi eldivenleri her kullanım öncesinde içine ________ üflenerek/şişirilerek delik kontrolünden geçirilmelidir.",
    answers: ["hava"],
    hint: "Şişirme için kullanılan gaz",
    explanation: "Dielektrik eldivenler mikroskobik deliklere karşı hava ile şişirilerek test edilir."
  },
  {
    q: "Trafo nötrü topraktan izole edilen ve hastane ameliyathaneleri ile madenlerde ilk hatada enerjiyi kesmeyen şebeke tipi ________ şebekedir.",
    answers: ["IT", "it"],
    hint: "İzole nötr harf kodu",
    explanation: "IT şebekede trafo nötrü yalıtılmıştır ve ilk faz-gövde hatasında elektrik kesilmez."
  },
  {
    q: "Topraklama yayılma direncini ve kablo yalıtkanlık direncini ölçmek için kullanılan cihaza toprak ________ (veya Megger) denir.",
    answers: ["megeri", "meger", "meggeri", "megger"],
    hint: "Topraklama ölçüm aleti",
    explanation: "Topraklama geçiş direnci ve yalıtkanlık Meger cihazı ile test edilir."
  },
  {
    q: "Patlayıcı gaz, buhar veya toz bulunan ortamlarda kıvılcım sızdırmayan özel korumalı elektrik tesisatına ________ (veya ATEX) tesisat denir.",
    answers: ["ex-proof", "exproof", "ex"],
    hint: "Patlamaya karşı korumalı elektrik cihazı",
    explanation: "Patlayıcı ortamlarda ark ve yüzey sıcaklığı sızdırmayan Ex-Proof ekipmanlar kullanılır."
  }
];
