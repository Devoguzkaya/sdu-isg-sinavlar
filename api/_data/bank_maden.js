// Maden İşyerlerinde İş Sağlığı ve Güvenliği (Prof. Dr. Servet DEMİRDAĞ — 70 Sayfalık Ders Kitapçığı PDF)
export const madenTestThemes = [
  '1. Bölüm: Maden Kanunu 5 Grup Sınıflandırması, Madenciliğin Aşamaları ve Rezerv Türleri',
  '1. Bölüm: Madencilik Terimleri I (Tüvenan, Konsantre, Tenör, Dekapaj, Pasa, Fenni Nezaretçi, Lağım, Baca, Bür)',
  '1. Bölüm: Madencilik Terimleri II (Desandre, Varagel, Freno, Skip, Kafes, Tumba, Konverjans, Tarama, Tasman, Otooksidasyon)',
  '2. Bölüm: Açık Ocak İşletmeciliği Avantajları, Basamak Geometrisi (Yükseklik, Genişlik, Şev Açısı, Genel Şev Açısı)',
  '2. Bölüm: Şev Duraylılığı (Stabilitesi) Faktörleri, Kavlak Kontrolü ve Şev Güvenlik Önlemleri',
  '2. Bölüm: Delik Delme, Delik Geometrisi (Dilim Kalınlığı, Tırnak Payı) ve Patlayıcı Maddelerin Özellikleri',
  '2. Bölüm: Ticari Patlayıcılar (Kara Barut, Dinamit, ANFO [%6 Mazot], Slurry), Sıkılama (1/3) ve Seri/Paralel Ateşleme (50 Delik)',
  '2. Bölüm: Patlatma Tehlikeleri (%20 Kırma Enerjisi, 10 m Telsiz, 750 m Siren, 20-30 cm Paralel Delik) ve Kazı-Yükleme Makineleri',
  '2. Bölüm: Açık Ocak Nakliyat ve Trafik Güvenliği (40/20/10 km/h Hız, 10° Eğim, 30 m Ekskavatör, 50 m Takip, 75 cm Bant)',
  '5. & 6. & 7. Bölüm: Mermer Ocakları (90° Dik Basamak, Elmas Tel 36-40 m/sn, Titano/Hava Yastığı, Sayalama), Taş Ocakları ve Mevzuat'
];

export const madenConceptGroups = [
  {
    groupName: '1. Bölüm: Maden Grupları, Rezervler ve Temel Madencilik Terimleri (Prof. Dr. Servet Demirdağ Ders Notu)',
    items: [
      {
        opt: 'Maden Kanunu 5 Grup: I. Grup (Kum/çakıl/kil), II. Grup (IIa: Kalker/Granit agrega, IIb: Mermer/Traverten blok taş), III. Grup (Tuzlar/CO2/H2S), IV. Grup (Endüstriyel/Enerji/Metalik/Radyoaktif), V. Grup (Elmas/Yakut/Zümrüt)',
        desc: 'Ders Kitapçığı Sayfa 1: Maden Yasası madenleri 5 ana gruba ayırır. Taş ocakları (agrega/mıcır) IIa grubunda, blok mermer ve traverten ocakları IIb grubunda; kömür (turba, linyit, taşkömürü, antrasit), bor ve metalik madenler IV. grupta; kıymetli taşlar V. grupta yer alır.',
        q: 'Prof. Dr. Servet Demirdağ\'ın ders kitapçığına göre Maden Kanunu\'ndaki 5 ana maden grubu sınıflandırmasında "Agrega/mıcır taş ocakları (IIa) ve Blok mermer/traverten (IIb)" ile "Linyit/Taşkömürü/Bor/Metalik madenler" sırasıyla kaçıncı gruplarda yer alır?'
      },
      {
        opt: 'Görünür Rezerv (±%5 ila ±%20 hata), Muhtemel Rezerv (±%20–40 hata) ve Mümkün Rezerv (±%50\'nin üzerinde hata sınırı)',
        desc: 'Ders Kitapçığı Sayfa 4: Boyutları ve tenörü belirlenmiş kesin üretilebilir cevher kütlesine "Görünür rezerv" (hata sınırı çok iyi bilinen yataklarda ±%5, genellikle ±%20); hata sınırı ±%20-40 olana "Muhtemel rezerv"; hata sınırı ±%50\'nin üzerinde olana ise "Mümkün rezerv" denir.',
        q: 'Maden ders kitapçığına göre; boyutları ve tenörü belirlenmiş üretilebilir kesin cevher kütlesine ne ad verilir ve pratikte hata sınırı yüzde kaç olarak kabul edilir?'
      },
      {
        opt: 'Tüvenan (Zenginleştirilmemiş ham cevher), Konsantre (Zenginleştirilmiş cevher), Tenör (Faydalı mineral yüzdesi) ve Pasa (İşe yaramaz taş)',
        desc: 'Ders Kitapçığı Sayfa 5-6: Ocaktan çıkarılan ve pasayı da içeren zenginleştirilmemiş ham cevhere "Tüvenan"; zenginleştirilerek faydalı mineral yüzdesi artırılmış cevhere "Konsantre"; cevherin içerdiği faydalı mineralin ağırlıkça yüzdesine "Tenör"; ekonomik değeri olmayan işe yaramaz taşa ise "Pasa" denir.',
        q: 'Ocakta üretilen, pasayı da içeren zenginleştirilmemiş durumdaki ham cevhere ve cevherin içerdiği faydalı mineralin ağırlık cinsinden yüzdesine sırasıyla ne ad verilir?'
      },
      {
        opt: 'Dekapaj / Örtü Kazısı (Açık işletmede cevherin üzerini kaplayan örtü tabakasının kazılarak uzaklaştırılması)',
        desc: 'Ders Kitapçığı Sayfa 3 & 6: Açık işletmecilikte öncelikle cevherin üzerini kaplayan işe yaramaz örtü tabakası kazılarak uzaklaştırılır ve cevherin üstü açılır; bu işleme "Örtü kazısı" veya "Dekapaj" adı verilir.',
        q: 'Açık maden işletmeciliğinde cevher üretimine geçmeden önce cevherin üzerini kaplayan örtü tabakasının kazılarak uzaklaştırılması ve cevherin üstünün açılması işlemine ne ad verilir?'
      },
      {
        opt: 'Lağım (Taş içinde sürülen galeri / patlayıcı deliği), Baca (Damar içinde açılan galeri), Bür/Fere (Yeryüzüne çıkmayan iki kat arası iç kuyu) ve Desandre (Meyilli galeri)',
        desc: 'Ders Kitapçığı Sayfa 3-5: Taş içerisinde sürülen galeriye (veya patlayıcı deliğine) "Lağım", cevher/damar içinde açılmış galeriye "Baca", yeraltında iki kat arasında açılmış ve yeryüzüne uzanmayan tali kuyulara "Bür (Fere / Kör kuyu)", aşağıdan yukarıya nakliyat için sürülen eğimli galeriye ise "Desandre" denir.',
        q: 'Madencilik terminolojisinde; "taş içerisinde sürülen galeri (veya patlayıcı deliği)", "damar içerisinde açılan galeri" ve "yeryüzüyle bağlantısı olmayan iki kat arasındaki iç kuyu" sırasıyla hangi terimlerle ifade edilir?'
      },
      {
        opt: 'Martoperfaratör (Basınçlı havayla lağım deliği delen makine), Martopikör (Basınçlı havalı kazı tabancası) ve Jumbo (Çoklu delik delme arabası)',
        desc: 'Ders Kitapçığı Sayfa 4-5: Basınçlı hava ile çalışan ve delici ucu döverek lağım deliği delen makineye "Martoperfaratör", basınçlı havalı kazı/taş sökme tabancasına "Martopikör", üzerinde birden fazla martoperfaratör bulunan delik delme arabasına ise "Jumbo" denir.',
        q: 'Galeri sürme ve delik delme işlerinde randımanı artırmak amacıyla üzerinde bir veya birden fazla martoperfaratör bulunan delik delme arabalarına ne ad verilir?'
      },
      {
        opt: 'Varagel (Eğimli yolda dolu vagon inerken boş vagonu yukarı çeken sistem), Freno (Varagel taşıma sistemi), Tumba (360° dönen vagon boşaltma beşiği) ve Skip (Sadece cevher taşıyan kuyu silosu)',
        desc: 'Ders Kitapçığı Sayfa 4-6 & 39: Eğimli yolda yerçekiminden yararlanarak dolu vagon aşağı inerken boş vagonu yukarı çeken yola "Varagel" (üzerindeki taşıma sistemine "Freno"), vagonları 360° ters-yüz ederek boşaltan beşiğe "Tumba", dikey kuyuda insan taşınmayan sadece cevher taşıyan çelik siloya ise "Skip" (insan/vagon taşıyana "Kafes") denir.',
        q: 'Maden nakliyat terimlerinden; "vagonların yüklerini boşaltmak için 360° dönebilen beşik sistemi" ile "dikey kuyularda insan taşınmasına izin verilmeyen, yalnızca cevher çekilen çelik silo" sırasıyla hangileridir?'
      },
      {
        opt: 'Konverjans (Galerilerin basınçla kesit daralması), Tarama (Daralan galerinin sökülüp yeniden genişletilmesi) ve Tasman/Sübsidans (Göçmenin yeryüzüne yansıyıp araziyi alçaltması)',
        desc: 'Ders Kitapçığı Sayfa 4-5: Yeraltı galerilerinin arazi basıncıyla kesitinin daralmasına "Konverjans"; konverjansa uğrayan galerinin eski kesitine kavuşturulmasına "Tarama"; göçme hareketinin yeryüzüne kadar yansıyarak arazi alçalmasına yol açmasına ise "Tasman (Sübsidans)" denir.',
        q: 'Yeraltında açılan galerilerin arazi basıncı etkisiyle zamanla kesitinin daralmasına (% olarak ifade edilir) ve bu daralan galerinin yeniden eski kesitine kavuşturulması işlemine sırasıyla ne ad verilir?'
      },
      {
        opt: 'Otooksidasyon (Kömürün oksijen alarak ısı/CO çıkarması -> Kendiliğinden yanma) ve Degajman (Metan/CO2 gazlarının ani püskürmesi)',
        desc: 'Ders Kitapçığı Sayfa 3 & 5: Kömürdeki karbonun havadaki oksijenle birleşerek ısı ve CO açığa çıkardığı ekzotermik reaksiyona "Otooksidasyon" (ısı dağıtılamazsa "Kendiliğinden yanma"); jeolojik yapı nedeniyle metan ve CO2 gazlarının kömürle birlikte çalışılan yere ani püskürmesine ise "Degajman" denir.',
        q: 'Kömürün ana yapısını oluşturan karbonun (C) hava ile temas ettiğinde bünyesine oksijen alarak CO, CO2 ve ısı açığa çıkarması olayına (kendiliğinden yanmanın başlangıcına) ne ad verilir?'
      }
    ]
  },
  {
    groupName: '2. Bölüm: Açık Ocak İşletmeciliği, Basamak Geometrisi ve Şev Duraylılığı',
    items: [
      {
        opt: 'Açık Ocak Tipleri (Çukur tip, Yamaç tipi, Tepe tip) ve İş Güvenliği Avantajları (Tavan göçüğü, tahkimat, grizu/toz patlaması ve yapay havalandırma sorunu yoktur)',
        desc: 'Ders Kitapçığı Sayfa 6-7: Açık ocaklar topoğrafyaya göre Çukur tip, Yamaç tipi ve Tepe tip olarak üçe ayrılır. Yeraltı ocaklarına göre tavan göçüğü yoktur, tahkimat gerekmez, gaz/toz patlaması ve ani püskürme olmaz, sadece geceleri aydınlatılır ve kaza/meslek hastalığı riski çok daha düşüktür.',
        q: 'Prof. Dr. Servet Demirdağ\'ın ders notlarına göre açık maden işletmelerinin yeraltı maden işletmelerine kıyasla iş güvenliği açısından sağladığı avantajlarla ilgili aşağıdakilerden hangisi DOĞRUDUR?'
      },
      {
        opt: 'Basamak Geometrisi Elemanları (Basamak yüksekliği, Basamak genişliği, Şev açısı ve Genel şev açısı)',
        desc: 'Ders Kitapçığı Sayfa 8: Açık ocaklardaki en temel yapı basamaklardır. Basamak geometrisinin 4 temel elemanı: Basamak yüksekliği, Basamak genişliği, Şev açısı ve Genel şev açısıdır.',
        q: 'Açık ocaklarda hem çalışma verimini hem de iş güvenliğini doğrudan etkileyen "Basamak Geometrisi"nin 4 temel elemanı aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Basamak Yüksekliği ve Şev Açısı (Heyelan ve devrilme riskini belirleyen en kritik iki parametredir; değerleri arttıkça risk artar)',
        desc: 'Ders Kitapçığı Sayfa 8: Basamağın devrilmeden ve heyelana uğramadan kendisini ayakta tutabilmesi için en önemli iki parametre "basamak yüksekliği" ve "şev açısı"dır. Bu iki değer ne kadar fazla (dik ve yüksek) olursa heyelan riski o kadar artar.',
        q: 'Açık işletmelerde basamağın devrilmeden ve heyelana uğramadan kendisini ayakta tutabilmesi için en önemli iki geometrik parametre hangileridir?'
      },
      {
        opt: 'Şev Açısı (Kar arzusu ile güvenlik çelişir: Şev açısı yatıklaştırıldıkça güvenlik artar ancak dekapaj miktarı ve üretim maliyeti yükselir)',
        desc: 'Ders Kitapçığı Sayfa 8: İki basamağı birleştiren eğik yüzeye "şev" (kazı yapıldığı için "arın"), yatayla yaptığı açıya "şev açısı" denir. Şev açısı ne kadar yatık (düşük) seçilirse heyelan riski o kadar azalır ve güvenlik artar; ancak yapılması gereken dekapaj miktarı ve maliyet artar (kar arzusu ile güvenlik gereksinimi çelişir).',
        q: 'Açık ocaklarda "Şev Açısı"nın yatık (düşük açılı) seçilmesinin iş güvenliği ve işletme ekonomisi üzerindeki etkisi nedir?'
      },
      {
        opt: 'Genel Şev Açısı (Tüm basamakların uç noktalarından geçen hayali doğrunun yatayla yaptığı açıdır — Hafriyat miktarının hesaplanmasında baz alınır)',
        desc: 'Ders Kitapçığı Sayfa 9: Genel şev açısı; tüm basamakların uç noktalarından geçen hayali (sanal) doğrunun yatayla yaptığı açıdır ve yapılacak toplam hafriyat miktarının hesaplanmasında baz alınan sanal bir değerdir.',
        q: 'Açık maden işletmelerinde "tüm basamakların uç noktalarından geçen hayali (sanal) doğrunun yatayla yaptığı açı" olarak tanımlanan ve toplam hafriyat miktarının hesaplanmasında baz alınan parametre hangisidir?'
      },
      {
        opt: 'Şev Duraylılığına (Stabilitesine) Etki Eden 4 Faktör: 1) Şev/basamak geometrisi, 2) Jeolojik/yapısal özellikler, 3) Yeraltı suyu, 4) Malzeme özellikleri (Kohezyon, içsel sürtünme açısı, yoğunluk)',
        desc: 'Ders Kitapçığı Sayfa 9: Şevin akmadan ve heyelana uğramadan kendisini ayakta tutabilmesi özelliğine "şev duraylılığı" denir. Etkileyen 4 faktör: Şev geometrisi, malzemenin jeolojik/yapısal özellikleri, yeraltı suyu ve malzeme özellikleridir (kohezyon, içsel sürtünme açısı, yoğunluk).',
        q: 'Açık ocaklarda en önemli iş güvenliği riski olan şev kaymalarını önlemek için değerlendirilen "Şev Duraylılığı (Stabilitesi)" üzerinde etkili olan 4 ana faktör hangileridir?'
      },
      {
        opt: 'Zemin Hazırlamada İlk İş (Tarıma elverişli nebati toprağın sıyrılarak işletme terk edildiğinde en üste serilmek üzere stoklanması ve ilk basamak için yarma açılması)',
        desc: 'Ders Kitapçığı Sayfa 9: Açık işletmede zemin hazırlamada ilk iş, tarıma elverişli toprağın sıyırılarak kaldırılması ve rezerv bitip işletme terk edildikten sonra doğaya yeniden kazandırma sırasında en üste sermek üzere uygun yerlerde stoklanmasıdır; ardından ilk basamak için "yarma" açılır.',
        q: 'Açık maden işletmeciliğinde "Zemin Hazırlama" aşamasında yapılması gereken İLK işlem aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Şev Aynaları Güvenlik Önlemleri (Kademelerin askıya alınarak/altı oyularak kazılması kesinlikle yasaktır; kademe diplerinde dinlenilmez; yağış ve ateşleme sonrası kavlak sökümü yapılır)',
        desc: 'Ders Kitapçığı Sayfa 17: Şevlerde çatlaklar ekstansometre ve fotogrametri ile izlenir; kademelerin askıya alınarak kazı yapılması kesinlikle yasaktır; kademe diplerinde işçilerin dinlenmesi/yemek yemesi engellenir; ateşleme ve aşırı yağış/kar sonrasında işe başlamadan önce "kavlak (çatlak) kontrolü ve sökümü" yapılır.',
        q: 'Açık ocaklarda şev aynaları ve basamak alt kısımlarında alınacak güvenlik önlemleriyle ilgili aşağıdakilerden hangisi DOĞRUDUR?'
      }
    ]
  },
  {
    groupName: '2. Bölüm: Delme-Patlatma Teknolojisi, Patlayıcılar ve Açık Ocak Nakliyat Güvenliği',
    items: [
      {
        opt: 'Patlama Fiziği (Hacminin 500–600 katı gaza dönüşür, 3800°C sıcaklık, 2–24 GPa detonasyon basıncı; kayacın parçalanmasında en etkin rolü GAZ BASINCI oynar, enerjinin %20\'si kırmada kullanılır)',
        desc: 'Ders Kitapçığı Sayfa 10 & 14: Patlayıcı ateşlendiğinde hacminin 500-600 katı gaza dönüşür, sıcaklık 3800°C\'ye çıkar, detonasyon hızı 1640-7600 m/sn, detonasyon basıncı 2-24 GPa\'dır. Şok dalgaları detonasyon basıncının %5-15\'i kadardır ve radyal çatlak açar; bu çatlaklara sızan "Gaz basıncı" kayacın parçalanmasında en etkin rolü oynar. Toplam enerjinin sadece %20\'si kayanın kırılmasında kullanılır (%80\'i atık enerjidir).',
        q: 'Prof. Dr. Servet Demirdağ\'ın ders kitapçığına göre; patlayıcı maddenin ateşlenmesiyle gelişen olaylarda kayacın parçalanmasında en etkin rolü hangi basınç oynar ve toplam patlama enerjisinin yüzde kaçı kayanın kırılmasında kullanılır?'
      },
      {
        opt: 'Kara Barut (%72 Potasyum nitrat + %16 Kömür tozu + %12 Kükürt; parçalama özelliği az olup itici etki yapar; emniyetli fitil yanma hızı ~1 m/sn\'dir)',
        desc: 'Ders Kitapçığı Sayfa 11: Kara barut bileşiminde %72 potasyum nitrat, %16 kömür tozu ve %12 kükürt bulunan en basit patlayıcıdır; parçalama özelliği az olup itici etki yapar. Emniyetli fitillerin içindeki karabarutun yanma hızı yaklaşık 1 m/sn civarındadır.',
        q: 'Bileşiminde %72 potasyum nitrat, %16 kömür tozu ve %12 kükürt bulunan, parçalama özelliği az olup itici etki yapan patlayıcı madde ve emniyetli fitilin yanma hızı hangisinde doğru verilmiştir?'
      },
      {
        opt: 'ANFO (Toz Amonyum Nitrat + %6 Mazot karışımıdır; açık ocaklarda ana patlayıcıdır, suya dayanıksızdır, ilk ateşlemesi yemleyici dinamit + kapsülle yapılır)',
        desc: 'Ders Kitapçığı Sayfa 11-12: ANFO toz halindeki teknik amonyum nitrat içine %6 mazot (fuel-oil) karıştırılmasıyla elde edilir ve açık işletmelerde ana patlayıcıdır. Duyarlılığı düşük olduğu için doğrudan kapsülle patlamaz; delik tabanına konan yemleyici bir dinamit kartuşu ve kapsül (manyeto -> kapsül -> dinamit -> ANFO zinciri) ile patlatılır. Sulu ortamlarda ise Slurry (AN + TNT) kullanılır.',
        q: 'Açık maden işletmelerinde ana patlayıcı olarak kullanılan "ANFO"nun bileşimi ve ateşleme zinciri sırası aşağıdakilerden hangisinde doğru verilmiştir?'
      },
      {
        opt: 'Sıkılama (Deliğin kalan üst 1/3\'lük kısmının delik kırıntılarıyla doldurulması) ve Delik Geometrisi (Delik eğimi, Delik çapı, Dilim kalınlığı, Delikler arası uzaklık, Tırnak payı)',
        desc: 'Ders Kitapçığı Sayfa 12 & 14: Patlayıcı deliğe şarj edildikten sonra deliğin kalan 1/3\'lük üst kısmı kırıntılarla doldurulur; buna "Sıkılama" denir (gazların ve alevin delik dışına kaçmasını önler). Basamaktaki delik geometrisi elemanları ise: Delik eğimi, delik çapı, dilim kalınlığı, delikler arası uzaklık ve tırnak payıdır.',
        q: 'Ateşleme deliğine ANFO doldurulduktan sonra deliğin üst kısmında kalan ne kadarlık bölüm "Sıkılama" amacıyla kırıntılarla doldurulur ve bunun temel amacı nedir?'
      },
      {
        opt: 'Seri Bağlantı (50\'den az delik için kullanılır; bir tel koparsa devre tamamlanmaz ve hiçbir delik patlamaz) vs Paralel Bağlantı (50\'den fazla delik için; kopuk delik patlamaz, diğerleri patlar -> Kazı sırasında kaza riski!)',
        desc: 'Ders Kitapçığı Sayfa 13: 50\'den az sayıda delik patlatılacaksa "Seri bağlantı" kullanılır; avantajı bağlantıda bir kopukluk olursa devrenin tamamlanmaması ve hiçbir deliğin patlamamasıdır. 50\'den fazla delikte "Paralel bağlantı" uygulanır; sakıncası bazı deliklerde kopukluk olursa diğerlerinin patlayıp o deliğin patlamaması ve kazı-yükleme sırasında kazaya yol açmasıdır.',
        q: 'Ders kitapçığına göre; patlatmada "Seri Bağlantı" ile "Paralel Bağlantı" arasındaki delik sayısı sınırı (50 delik) ve güvenlik farkı aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Patlatma Güvenlik Kuralları (Donmuş/sızıntılı dinamit çözülse bile kullanılmaz; 10 m yakında cep telefonu/telsiz kapatılır; 750 m duyulan siren çalınır; patlamamış deliğin 20-30 cm yanına paralel delik açılır)',
        desc: 'Ders Kitapçığı Sayfa 16-17: Donmuş dinamitler sonradan çözülse bile kesinlikle kullanılmaz. Patlatma sahasının 10 m yakınına kadar cep telefonu ve telsizler kapatılır, antistatik/pamuklu giysi giyilir, atım öncesi en az 750 m\'den duyulabilecek siren çalınır. Sığ deliklerde patlamamış patlayıcı su/basınçlı hava ile çıkarılır; mümkün değilse 20–30 cm yanından paralel bir delik delinip ateşlenir.',
        q: 'Prof. Dr. Servet Demirdağ\'ın ders kitapçığında yer alan patlatma güvenliği kurallarına göre aşağıdaki sayısal kriterlerden hangisi DOĞRUDUR?'
      },
      {
        opt: 'Kazı-Yükleme Sınıflandırması: Kazı Makineleri (Ripper, Dozer, Dragline), Kazı-Yükleme Makineleri (Kepçeli, Kovalı, Hidrolik Ekskavatör) ve Yükleme Makineleri (Loder, Traktör)',
        desc: 'Ders Kitapçığı Sayfa 15: Açık ocak makineleri 3 gruba ayrılır: 1) Sadece Kazı makineleri: Ripper, Dozer, Dragline; 2) Kazı-Yükleme makineleri: Kepçeli ekskavatör, Kovalı ekskavatör, Hidrolik ekskavatör; 3) Yükleme makineleri: Loder, Traktör.',
        q: 'Ders kitapçığı Sayfa 15\'teki tabloya göre açık ocaklarda kullanılan makinelerden hangileri "Kazı Makineleri", hangileri "Kazı-Yükleme Makineleri" ve hangileri "Yükleme Makineleri" grubunda yer alır?'
      },
      {
        opt: 'Açık Ocak Trafik Kuralları (Hız: Nakliye yolunda 40 km/h, rampa/ocak içinde 20 km/h, kritik yerde 10 km/h; Yol eğimi maks. 10°; Ekskavatöre yaklaşma 30 m; Kamyon takip mesafesi 50 m; Kavşakta öncelik SOLDAN gelenindir)',
        desc: 'Ders Kitapçığı Sayfa 15-16: Ocak içi yol eğimi en fazla 10° olmalı, iki araç genişliğine ek her iki yanda en az 1\'er m emniyet mesafesi bırakılmalıdır. Hız sınırları: Nakliye yolunda maks. 40 km/h, ocak rampalarında ve ocak içi yollarda 20 km/h, kritik yerlerde 10 km/h. Çalışan ekskavatöre 30 m\'den fazla yaklaşılmaz, kamyon takip mesafesi en az 50 m\'dir, işaretsiz kavşakta öncelik soldan gelenindir, yamaçta yamaca dik park edilir.',
        q: 'Açık ocaklarda yol, nakliyat ve trafik güvenliği kurallarına göre; "Nakliye yolu / Ocak içi rampa / Kritik yer hız sınırları", "Çalışan ekskavatöre yaklaşma mesafesi" ve "Kamyon takip mesafesi" kaçtır?'
      },
      {
        opt: 'Bantlı Konveyör Güvenliği (Her iki yanında 75 cm açık alan bulunmalı, tambur/motor koruyucu içine alınmalı, hat boyunca durdurma teli ve kırmızı mantar acil durdurma düğmesi olmalı)',
        desc: 'Ders Kitapçığı Sayfa 16: Bantlı konveyörlerin üzerine çıkılmaz, çalışırken altından/üstünden geçilmez; bantların her iki yanında 75 cm genişliğinde açık geçit alanı bulunmalı, hat boyunca durdurma teli ve kırmızı mantar başlı acil durdurma düğmeleri yer almalıdır.',
        q: 'Açık işletmelerde ve kırma-eleme tesislerinde kullanılan "Bantlı Konveyörler"in her iki yanında en az kaç cm genişliğinde açık alan bulundurulmalıdır?'
      }
    ]
  },
  {
    groupName: '5., 6. ve 7. Bölüm: Mermer Ocakları, Taş Ocakları ve Maden Mevzuatı',
    items: [
      {
        opt: 'Mermer Ocaklarının Diğer Açık Ocaklardan 2 Temel Farkı: 1) Basamakların şev açısı 90°\'dir (diktir), 2) Mermer parçalanmadan dikdörtgen prizma bloklar halinde kesilir (patlayıcı kullanılmaz)',
        desc: 'Ders Kitapçığı Sayfa 33: Kesilip boyutlandırılıp cilalanabilen ve piyasada satılabilen taşlara genel olarak "mermer" denir. Mermer ocaklarının diğer açık ocaklardan iki temel farkı vardır: Basamakların şev açısı 90°\'dir (diktir) ve patlayıcı madde kullanılmadan mermer bloklar halinde kesilir.',
        q: 'Ders kitapçığı 5. Bölüm\'e göre; ülkemizde tamamıyla açık ocak biçiminde işletilen "Mermer Ocakları"nın diğer açık maden ocaklarından iki temel farkı nedir?'
      },
      {
        opt: 'Elmas Tel Kesme Aşamaları (Yatay/düşey deliklerin delinip çakıştırılması -> Elmas telin sarılması -> Döndürülerek kesim -> Bloğun titano/hava-su yastığıyla devrilmesi -> Sayalama [küçük bloklara bölme])',
        desc: 'Ders Kitapçığı Sayfa 33-35: Elmas tel kesmede düşey ve yatay delikler delinip uçları birleştirilir, elmas boncuklu tel geçirilip volana sarılır. Kesilen blok "titano, hava yastığı, su yastığı veya kepçeli iş makineleri" ile devrilir. Devrilen ana bloğun daha küçük bloklara bölünmesi işlemine "Sayalama" denir.',
        q: 'Mermer ocaklarında elmas tel ile kesilerek ana kütleden ayrılan büyük mermer bloğun devrilmesinde hangi ekipmanlar kullanılır ve devrilen bloğun daha küçük bloklara bölünmesi işlemine ne ad verilir?'
      },
      {
        opt: 'Elmas Tel Kesme Güvenlik Kriterleri (Ray uzunluğu kesilecek yüzeyden %10 fazla olmalı; Makine aynadan en az 3 m uzağa kurulmalı; Tel hızı 36–40 m/sn; Homojen aşınma için tele burgu verilmeli; İlk 5–10 dk fazla yük verilmemeli; 30 m yakınına ilgisiz kişiler yaklaşmamalı)',
        desc: 'Ders Kitapçığı Sayfa 36: Elmas tel kesmede; ray uzunluğu kesilecek uzun yüzeyden %10 daha fazla olmalı, makine aynadan en az 3 m uzağa yerleştirilmeli, kumanda tablosu tel hizasında olmamalı, uygun tel hızı 36–40 m/sn olmalı, telin homojen aşınması için tele burgu verilmeli, ilk 5–10 dk tele fazla yük bindirilmemeli ve makinenin 30 m yakınına ilgisiz kişiler yaklaşmamalıdır.',
        q: 'Mermer ocaklarında "Elmas Tel Kesme Makinesi" ile güvenli çalışma kurallarına göre aşağıdaki sayısal değerlerden hangisi DOĞRUDUR?'
      },
      {
        opt: 'Kollu Kesici / Jet-Belt (Tel yerine üzerinde sinterize elmas bulunan özel bir kayış ve 360° dönebilen kesici kol ile ray üzerinde hareket ederek mermer kesen makine)',
        desc: 'Ders Kitapçığı Sayfa 35: Kollu kesicilerde (Jet-belt ve zincirli makineler) tel yerine, üzerinde sinterize elmas bulunan özel bir kayış ve 360° dönebilen kesici kol bulunur; zincirli ağaç kesme makinelerine benzer ve ray üzerinde hareket eder.',
        q: 'Mermer ocaklarında tel yerine üzerinde sinterize elmas bulunan özel bir kayışın döndüğü ve kesici kolunun 360° dönebildiği raylı blok kesme makinesine ne ad verilir?'
      },
      {
        opt: 'Taş Ocakları ve Kırma-Eleme Tesisleri (Maden Kanunu IIa grubu ruhsatla işletilir; sert kayaç patlatmayla kırılıp kırma-eleme tesisinde agrega/mıcır yapılır; silo içine düşme, konveyör yangını ve yoğun silis tozu/gürültü riski vardır)',
        desc: 'Ders Kitapçığı Sayfa 37: Taş ocakları inşaat sektörüne kum-çakıl-agrega sağlayan ve Maden Kanunu IIa grubu ruhsatla çalışan sahalardır. Kırma-eleme tesislerinde toz, gürültü, hareketli ekipmanlara kaptırma, silo içine düşme ve bantlı konveyör yangınları en önemli risklerdir.',
        q: 'İnşaat sektörüne agrega ve mıcır sağlamak üzere Maden Kanunu "IIa Grubu" ruhsatla işletilen taş ocakları ve kırma-eleme tesislerindeki karakteristik risklerle ilgili aşağıdakilerden hangisi DOĞRUDUR?'
      },
      {
        opt: 'Daimi Nezaretçi (Maden Mühendisi) ve A Sınıfı İş Güvenliği Uzmanı + Sağlık ve Güvenlik Dokümanı (Çalışmaya başlamadan önce hazırlanır) + Yılda En Az 1 Defa Acil Durum Tatbikatı',
        desc: 'Ders Kitapçığı Sayfa 38-40: Maden işletmelerinde üretim, maden mühendisi olan bir "Daimi Nezaretçi"nin denetiminde yapılır ve ayrıca "A Sınıfı İş Güvenliği Uzmanı" görevlendirilir. İşveren çalışmaya başlanılmadan önce "Sağlık ve Güvenlik Dokümanı" hazırlar ve yılda en az 1 defa acil durum tatbikatı yapılır.',
        q: 'Ders kitapçığı 7. Bölüm (Mevzuat) hükümlerine göre; maden işletmelerinde üretimin denetiminden sorumlu mühendis unvanı, hazırlanması zorunlu temel doküman ve acil durum tatbikat sıklığı hangisinde doğru verilmiştir?'
      },
      {
        opt: 'Maden Havalandırma ve Gaz Sınırları (Hava hızı en az 0,5 m/s; H2S emniyet sınırı 20 ppm [%0,002]; Metan %1\'de ateşleme yapılmaz, %1,5\'te elektrik kesilir, %2\'de ocak tahliye edilir; 50 km yarıçapta ortak kurtarma istasyonu)',
        desc: 'Ders Kitapçığı Sayfa 27-29 & 52-61: Ocak havasında H2S emniyet sınırı 20 ppm (%0,002)\'dir. Hava hızı her halde 0,5 m/s\'den az olamaz. Metan oranı %1 veya daha çok olan kısımlarda ateşleme yapılmaz, %1,5\'te elektrik enerjisi kesilir, %2\'de çalışanlar tahliye edilir. Yarıçapı en çok 50 km olan alan içindeki madenler ortak kurtarma istasyonu kurabilir. Hayat hattı üzerinde konik gösterge ve 6 adet reflektör şerit bulunur.',
        q: 'Maden ders kitapçığındaki havalandırma ve mevzuat hükümlerine göre; yeraltı ocaklarında "en az hava hızı", "Hidrojen Sülfür (H2S) emniyet sınırı" ve "ateşlemenin yasaklandığı metan (CH4) sınırı" sırasıyla nedir?'
      }
    ]
  }
];

export const madenExtraFill = [
  { q: 'Maden Kanunu\'na göre mermer, traverten, granit gibi blok olarak üretilen taşlar _______ (IIb) grubu madenler içinde yer alır.', a: '2. grup', alts: ['2', 'ikinci grup', 'iib', 'ii. grup'], exp: 'Ders Kitapçığı Sayfa 1: Blok mermer ve doğal taşlar 2. grup (IIb) madenlerdir.' },
  { q: 'Boyutları ve tenörü belirlenmiş üretilebilir kesin cevher kütlesine _______ rezerv denir ve hata sınırı genellikle ±%20 (iyi bilinen yataklarda ±%5) kabul edilir.', a: 'görünür', alts: ['gorunur'], exp: 'Ders Kitapçığı Sayfa 4: Kesin cevher kütlesine görünür rezerv denir.' },
  { q: 'Ocakta üretilen, pasayı da içeren ve henüz zenginleştirilmemiş durumdaki ham cevhere _______ cevher denir.', a: 'tüvenan', alts: ['tuvenan'], exp: 'Ders Kitapçığı Sayfa 5: Zenginleştirilmemiş ham cevhere tüvenan denir.' },
  { q: 'Cevherin içerdiği faydalı mineralin ağırlık cinsinden yüzdesine _______ adı verilir.', a: 'tenör', alts: ['tenor'], exp: 'Ders Kitapçığı Sayfa 6: Faydalı mineralin ağırlıkça yüzdesine tenör denir.' },
  { q: 'Açık işletmecilikte cevherin üzerini kaplayan işe yaramaz örtü tabakasının kazılarak uzaklaştırılması ve cevherin üstünün açılması işlemine _______ (örtü kazısı) denir.', a: 'dekapaj', alts: ['örtü kazısı'], exp: 'Ders Kitapçığı Sayfa 6: Örtü tabakasının kazılmasına dekapaj denir.' },
  { q: 'Taş içerisinde sürülen galeriye veya patlayıcı madde doldurmak için delinen deliğe _______ adı verilir.', a: 'lağım', alts: ['lagim'], exp: 'Ders Kitapçığı Sayfa 5 & 39: Taş içinde sürülen galeriye veya patlayıcı deliğine lağım denir.' },
  { q: 'Yeraltında iki kat arasında açılmış ve yeryüzüne kadar uzanmayan (yerüstüyle bağlantısı olmayan) tali iç kuyulara _______ (fere) denir.', a: 'bür', alts: ['bur', 'fere', 'kör kuyu'], exp: 'Ders Kitapçığı Sayfa 3 & 38: Yerüstüyle bağlantısı olmayan kuyuya bür (fere) denir.' },
  { q: 'Üzerinde bir veya birden fazla martoperfaratör bulunan yüksek randımanlı delik delme arabalarına _______ denir.', a: 'jumbo', alts: [], exp: 'Ders Kitapçığı Sayfa 4: Çoklu delik delme arabasına jumbo denir.' },
  { q: 'Yeraltında açılan galerilerin arazi basıncı etkisiyle zamanla kesitinin daralmasına _______ denir ve % olarak ifade edilir.', a: 'konverjans', alts: [], exp: 'Ders Kitapçığı Sayfa 4: Galeri kesit daralmasına konverjans denir.' },
  { q: 'Cevher veya pasa yüklü vagonların yüklerini boşaltabilmeleri için 360° dönebilen beşik gibi tesislere _______ denir.', a: 'tumba', alts: [], exp: 'Ders Kitapçığı Sayfa 5: 360 derece dönerek vagon boşaltan tesise tumba denir.' },
  { q: 'Eğimli düzey üzerinde yerçekiminden yararlanarak dolu araba aşağı inerken boş arabanın yukarı çıkmasını sağlayan halatlı ve frenli taşıma yerine _______ denir.', a: 'varagel', alts: [], exp: 'Ders Kitapçığı Sayfa 6 & 39: Karşılıklı ağırlık esasına göre çalışan eğimli taşıma yoluna varagel denir.' },
  { q: 'Açık ocaklarda tüm basamakların uç noktalarından geçen hayali (sanal) doğrunun yatayla yaptığı açıya _______ şev açısı denir ve hafriyat hesabında baz alınır.', a: 'genel', alts: [], exp: 'Ders Kitapçığı Sayfa 9: Tüm basamak uçlarından geçen sanal doğrunun açısı genel şev açısıdır.' },
  { q: 'Açık işletmelerde zemin hazırlamada ilk iş, tarıma elverişli üst toprağın sıyrılarak stoklanması ve ardından ilk basamağın düzenlenmesi için bir _______ açılmasıdır.', a: 'yarma', alts: [], exp: 'Ders Kitapçığı Sayfa 9: İlk basamağın düzenlenmesi için bir yarma açılır.' },
  { q: 'Patlayıcı madde ateşlendiğinde oluşan çatlaklara sızarak kayacın parçalanmasında EN ETKİN rolü oynayan basınç _______ basıncıdır.', a: 'gaz', alts: [], exp: 'Ders Kitapçığı Sayfa 10: Kayacın parçalanmasında en etkin rolü gaz basıncı oynar.' },
  { q: 'Patlayıcı maddenin oluşabilmesi/patlayabilmesi için gerekli minimum enerji gereksinimine _______ adı verilir.', a: 'duyarlılık', alts: ['duyarlilik', 'hassasiyet'], exp: 'Ders Kitapçığı Sayfa 11: Patlama için gerekli minimum enerjiye duyarlılık denir.' },
  { q: 'Açık işletmelerde ana patlayıcı olarak kullanılan ANFO, toz halindeki teknik amonyum nitrat içine %_______ oranında mazot (fuel-oil) karıştırılmasıyla elde edilir.', a: '6', alts: ['altı', 'alti'], exp: 'Ders Kitapçığı Sayfa 11: ANFO = Amonyum nitrat + %6 mazot.' },
  { q: 'Ateşleme deliğine patlayıcı doldurulduktan sonra deliğin kalan üst 1/3\'lük kısmının kırıntılarla doldurulması işlemine _______ denir.', a: 'sıkılama', alts: ['sikilama'], exp: 'Ders Kitapçığı Sayfa 12 & 39: Deliğin üst 1/3 boşluğunun doldurulmasına sıkılama denir.' },
  { q: 'Çoklu delik patlatmalarında _______ adetten az sayıda delik patlatılacaksa, kopukluk halinde hiçbir deliğin patlamaması avantajı nedeniyle "Seri bağlantı" kullanılır.', a: '50', alts: ['elli'], exp: 'Ders Kitapçığı Sayfa 13: 50\'den az sayıda delik patlatılacaksa seri bağlantı kullanılır.' },
  { q: 'Ateşleme sırasında patlayıcı maddenin toplam kimyasal enerjisinin sadece %_______\'si kayanın kırılmasında kullanılır, geri kalan %80\'i atık enerjidir.', a: '20', alts: ['yirmi'], exp: 'Ders Kitapçığı Sayfa 14: Toplam enerjinin sadece %20\'si kayanın kırılmasında kullanılır.' },
  { q: 'Açık ocaklarda nakliye yolunda maksimum hız sınırı _______ km/h, ocak rampalarında ve ocak içi yollarda 20 km/h, kritik yerlerde ise 10 km/h\'dir.', a: '40', alts: ['kırk', 'kirk'], exp: 'Ders Kitapçığı Sayfa 16: Nakliye yolunda maksimum hız 40 km/h\'dir.' },
  { q: 'Açık ocaklarda çalışmakta olan bir ekskavatöre veya hareketli iş makinesine hiçbir araç veya ekipman _______ metreden fazla yaklaşmamalıdır.', a: '30', alts: ['otuz'], exp: 'Ders Kitapçığı Sayfa 16: Çalışan ekskavatöre 30 metreden fazla yaklaşılmaz.' },
  { q: 'Açık ocak yollarında bir kamyonun arkasından giden araç en az _______ metrelik bir emniyet takip mesafesi bırakmalıdır.', a: '50', alts: ['elli'], exp: 'Ders Kitapçığı Sayfa 16: Kamyon takip mesafesi en az 50 metredir.' },
  { q: 'Açık ocaklarda yol işareti olmayan kavşaklarda geçiş önceliği _______ gelen aracındır.', a: 'soldan', alts: ['sol taraftan'], exp: 'Ders Kitapçığı Sayfa 16: Yol işareti olmayan kavşaklarda öncelik soldan gelenindir.' },
  { q: 'Bantlı konveyörlerin her iki yanında bakım ve güvenli geçiş için en az _______ cm genişliğinde açık alan bulunmalıdır.', a: '75', alts: ['yetmiş beş', 'yetmis bes'], exp: 'Ders Kitapçığı Sayfa 16: Bantların her iki yanında 75 cm genişliğinde açık alan bulunmalıdır.' },
  { q: 'Elektrikli kapsüllerin erken ateşlenmesini önlemek için patlatma sahasının _______ metre yakınına kadar cep telefonu ve telsizler kapatılmalıdır.', a: '10', alts: ['on'], exp: 'Ders Kitapçığı Sayfa 17: Patlatma sahasının 10 m yakınına kadar cep telefonu ve telsizler kapatılır.' },
  { q: 'Açık ocaklarda patlatma yapılmadan önce en az _______ metreden duyulabilecek uyarıcı siren sesi çalınmalıdır.', a: '750', alts: ['yedi yüz elli', 'yediyüzelli'], exp: 'Ders Kitapçığı Sayfa 17: Patlatma öncesinde en az 750 m\'den duyulabilecek siren çalınmalıdır.' },
  { q: 'Patlamamış bir lağım deliğindeki patlayıcı su veya basınçlı havayla çıkarılamıyorsa, deliğin _______ cm yanından paralel bir delik delinip doldurularak ateşlenir.', a: '20-30', alts: ['20', '30', 'yirmi', 'otuz'], exp: 'Ders Kitapçığı Sayfa 12 & 17: Patlamamış deliğin 20-30 cm yanından paralel delik delinir.' },
  { q: 'Ateşlemeden ve aşırı yağıştan sonra işe başlamadan önce şev yüzeyinde ana kütleden ayrılmış düşebilecek taşların temizlenmesi için _______ (çatlak) kontrolü ve sökümü yapılmalıdır.', a: 'kavlak', alts: ['çatlak', 'catlak'], exp: 'Ders Kitapçığı Sayfa 17 & 38: Şev yüzeyinde kavlak (çatlak) kontrolü ve sökümü yapılır.' },
  { q: 'Mermer ocaklarının diğer açık ocaklardan en temel geometrik farkı, basamakların şev açısının _______ derece (dik) olması ve patlayıcı kullanılmamasıdır.', a: '90', alts: ['doksan'], exp: 'Ders Kitapçığı Sayfa 33: Mermer ocaklarında basamakların şev açısı 90 derecedir (diktir).' },
  { q: 'Mermer ocaklarında ana kütleden kesilerek devrilen büyük bloğun daha küçük bloklara bölünmesi işlemine _______ adı verilir.', a: 'sayalama', alts: ['ebatlama'], exp: 'Ders Kitapçığı Sayfa 33: Devrilen bloğun daha küçük bloklara bölünmesine sayalama denir.' },
  { q: 'Mermer ocaklarında yüzeyleri elmas telle kesilen bloğun devrilmesinde _______, hava yastığı, su yastığı veya kepçeli iş makineleri kullanılır.', a: 'titano', alts: [], exp: 'Ders Kitapçığı Sayfa 35: Blok devirmede titano, hava yastığı veya su yastığı kullanılır.' },
  { q: 'Elmas tel kesme makinesi aynadan en az _______ metre uzağa yerleştirilmeli ve ray uzunluğu kesilecek yüzeyden %10 daha fazla olmalıdır.', a: '3', alts: ['üç', 'uc'], exp: 'Ders Kitapçığı Sayfa 36: Makine aynadan en az 3 m uzağa yerleştirilmelidir.' },
  { q: 'Elmas tel kesme işleminde uygun tel hızı _______ m/sn olmalı ve telin homojen aşınması için tele burgu verilmelidir.', a: '36-40', alts: ['36', '40', '36 - 40'], exp: 'Ders Kitapçığı Sayfa 36: Uygun elmas tel hızı 36-40 m/sn\'dir.' },
  { q: 'Maden işletmelerinde üretim, maden mühendisi olan bir _______ nezaretçinin denetiminde yapılır ve iş güvenliği uzmanının A sınıfı olması gerekir.', a: 'daimi', alts: ['fenni', 'teknik'], exp: 'Ders Kitapçığı Sayfa 38: Üretim maden mühendisi olan daimi (fenni) nezaretçi denetiminde yapılır.' },
  { q: 'Maden İşyerlerinde İSG Yönetmeliğine göre işveren çalışmaya başlanılmadan önce _______ ve Güvenlik Dokümanı hazırlanmasını sağlar ve yılda en az 1 defa acil durum tatbikatı yapılır.', a: 'sağlık', alts: ['saglik'], exp: 'Ders Kitapçığı Sayfa 40: Sağlık ve Güvenlik Dokümanı çalışmaya başlanılmadan önce hazırlanır.' }
];
