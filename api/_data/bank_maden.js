export const madenTestThemes = [
  "Madenciliğe Giriş & Temel Kavramlar (Tüvenan, Tenör, Pasa)",
  "Açık Ocak vs. Yeraltı İşletmeciliği İSG Karşılaştırması",
  "Basamak Geometrisi, Şev Açısı & Kavlak Sökümü",
  "Mermer Ocaklarında Elmas Tel Kesme Teknolojisi",
  "Mermer Blok Devirme, Yastıklama & Sayalama",
  "Delme-Patlatma Güvenliği, ANFO & Sıkılama",
  "Açık Ocak Nakliye Yolları, Kaya Kamyonları & Kör Nokta",
  "Madenlerde Toz Kontrolü, Silikozis & Gürültü/Titreşim",
  "Maden Mevzuatı, Daimi Nezaretçi & Acil Durumlar",
  "Genel Karma Vize Simülasyonu (Servet Hoca 70 Sf. Notu)"
];

export const madenConceptGroups = [
  {
    groupName: "Temel Madencilik Kavramları",
    items: [
      {
        opt: "Tüvenan Cevher (Run-of-Mine / ROM)",
        desc: "Maden ocağından kazılıp çıkarıldığı ilk ham haliyle, henüz hiçbir kırma-eleme veya zenginleştirme işlemi görmemiş cevherdir.",
        q: "Maden ocağından üretildiği ham haliyle alınan ve henüz hiçbir zenginleştirme işlemine tabi tutulmamış cevhere ne ad verilir?"
      },
      {
        opt: "Tenör (Cevher Zenginlik Derecesi)",
        desc: "Cevherin içerisinde bulunan değerli metal veya mineralin yüzde (%) ya da gram/ton (ppm) cinsinden miktar/oranıdır.",
        q: "Bir maden yatağından çıkarılan cevherin içindeki değerli metal oranını (% veya gr/ton olarak) ifade eden kavram hangisidir?"
      },
      {
        opt: "Konsantre Cevher",
        desc: "Tüvenan cevherin kırma, öğütme ve zenginleştirme (flotasyon, gravite vb.) işlemlerinden geçirilerek tenörünün yükseltilmiş ticari halidir.",
        q: "Cevher hazırlama ve zenginleştirme tesislerinde işlenerek içerisindeki değerli mineral oranı yükseltilmiş ürüne ne ad verilir?"
      },
      {
        opt: "Pasa (Örtü Tabakası / Kısır Kayaç)",
        desc: "Cevherin üzerini örten veya cevherle birlikte kazılan ancak ekonomik değeri olmadığı için pasa döküm sahasına atılan yan taştır.",
        q: "Maden ocaklarında cevhere ulaşmak için kazılan ve ekonomik değeri bulunmayan örtü tabakası veya yan taşa ne ad verilir?"
      },
      {
        opt: "Dekapaj (Örtü Kazısı / Stripping)",
        desc: "Açık ocak işletmelerinde cevher yatağının üzerindeki ekonomik değeri olmayan örtü tabakasının (pasanın) kazılıp kaldırılması işlemidir.",
        q: "Açık işletmelerde asıl cevher kütlesine ulaşabilmek amacıyla üzerindeki örtü tabakasının kazılıp taşınması işlemine ne ad verilir?"
      },
      {
        opt: "Dekapaj Oranı (Örtü / Cevher Oranı)",
        desc: "Açık ocakta 1 ton (veya 1 m³) cevher üretmek için kazılması gereken pasa miktarını gösteren ve açık/yeraltı tercihini belirleyen ekonomik orandır.",
        q: "Bir maden yatağının açık ocak yöntemiyle mi yoksa yeraltı yöntemiyle mi işletileceğine karar verirken kullanılan 'Pasa / Cevher' oranına ne denir?"
      },
      {
        opt: "Görünür (Kesin) Rezerv",
        desc: "Sondaj, yarma ve galerilerle üç boyutlu sınırları, tonajı ve tenörü yüksek doğrulukla belirlenmiş ekonomik maden kütlesidir.",
        q: "Boyutları, miktarı ve tenörü sondaj çalışmalarıyla üç boyutlu olarak kesin şekilde tespit edilmiş ekonomik cevher varlığına ne ad verilir?"
      },
      {
        opt: "Muhtemel ve Mümkün Rezerv",
        desc: "Jeolojik veriler ve sınırlı sondajlarla varlığı öngörülen ancak sınırları henüz tam kesinleşmemiş cevher potansiyelidir.",
        q: "Henüz sınırlı sayıda sondaj ve jeolojik gözlemle tahmin edilen, kesinliği görünür rezerve göre daha düşük olan rezerv sınıfı hangisidir?"
      },
      {
        opt: "Cevher Hazırlama ve Zenginleştirme",
        desc: "Ocaktan çıkan tüvenan cevherin kimyasal yapısı değiştirilmeden fiziksel/fizikokimyasal yöntemlerle değerli minerallerin yan taştan ayrılmasıdır.",
        q: "Tüvenan cevherin kırma, öğütme, eleme ve flotasyon gibi yöntemlerle ekonomik değerinin artırılması süreçlerinin bütününe ne denir?"
      },
      {
        opt: "Rödovans Sözleşmesi",
        desc: "Ruhsat sahibinin maden işletme hakkını ton başına belirli bir pay (kira) karşılığında üçüncü bir gerçek/tüzel kişiye devrettiği sözleşmedir.",
        q: "Maden ruhsat sahibinin, sahadaki işletme faaliyetini üretilen cevher üzerinden pay alarak başka bir işletmeciye devretmesi usulüne ne denir?"
      }
    ]
  },
  {
    groupName: "Açık Ocak Geometrisi ve Şev Güvenliği",
    items: [
      {
        opt: "Basamak (Kademe) Yüksekliği",
        desc: "Açık ocakta bir basamağın alt taban düzlemi (topuğu) ile üst düzlemi arasındaki düşey mesafedir (elle kazıda en fazla 3 m).",
        q: "Açık ocak işletmelerinde basamak alt düzlemi ile üst düzlemi arasındaki düşey uzaklığa ne ad verilir?"
      },
      {
        opt: "Basamak (Kademe) Genişliği",
        desc: "Üzerinde delici makinelerin, ekskavatörlerin ve kaya kamyonlarının güvenli çalışma ve manevra yaptığı yatay düzlem genişliğidir.",
        q: "Açık işletmelerde iş makineleri ve kamyonların üzerinde güvenle manevra yapabilmesi için bırakılan yatay basamak mesafesine ne denir?"
      },
      {
        opt: "Basamak Şev Açısı",
        desc: "Tek bir basamağın eğimli yüzeyi (şev aynası) ile yatay düzlem arasında kalan ve kayaç sağlamlığına göre belirlenen açıdır.",
        q: "Bir kademenin eğimli aynası (yüzeyi) ile yatay taban düzlemi arasındaki eğim açısına ne ad verilir?"
      },
      {
        opt: "Genel Şev Açısı",
        desc: "Açık ocağın en alt basamak topuğundan en üst basamak kenarına çizilen hayali doğru ile yatay düzlem arasındaki toplam eğim açısıdır.",
        q: "Açık ocağın en derin taban noktasından en üst kademe sınırına çekilen çizginin yatayla yaptığı ve tüm ocağın duraylılığını belirleyen açı nedir?"
      },
      {
        opt: "Basamak Topuğu ve Basamak Başı (Kreti)",
        desc: "Basamak şev yüzeyinin alt yatay düzlemle birleştiği alt köşeye 'Topuk', üst yatay düzlemle birleştiği üst kenara ise 'Basamak Başı (Kret)' denir.",
        q: "Açık ocak basamak geometrisinde eğimli şev yüzeyinin tabanla birleştiği alt noktaya ve üst düzlemle birleştiği üst kenara sırasıyla ne denir?"
      },
      {
        opt: "Kavlak (Askıda Kalan Gevşek Kaya) ve Kavlak Sökümü",
        desc: "Patlatma veya yağış sonrası şev yüzeyinde asılı kalarak düşme tehlikesi yaratan gevşek taşların yukarıdan aşağıya doğru düşürülüp temizlenmesidir.",
        q: "Açık ocak aynalarında patlatma ve iklim etkisiyle çatlayıp askıda kalan taşların çalışma öncesi levye veya makineyle temizlenmesi işlemine ne denir?"
      },
      {
        opt: "Dairesel (Rotasyonel) ve Düzlemsel Şev Kayması",
        desc: "Zayıf/killi zeminlerde kaşık biçiminde dairesel, tabakalı/faylı kayaçlarda ise süreksizlik düzlemi boyunca gelişen tehlikeli heyelan/göçük türüdür.",
        q: "Açık ocak şevlerinde tabaka eğiminin ocak içine doğru olduğu süreksizlik yüzeyleri boyunca kaya kütlesinin kayarak göçmesine ne ad verilir?"
      },
      {
        opt: "Güvenlik Seti (Banket / Berm)",
        desc: "Nakliye yollarının ve döküm sahalarının uçurum kenarlarında kamyonların aşağı uçmasını önlemek için bırakılan koruyucu toprak/kaya seddidir.",
        q: "Açık ocak nakliye rampalarının ve pasa döküm yerlerinin şev kenarlarında kamyon tekerlek yarıçapı yüksekliğinde bırakılan koruyucu sete ne denir?"
      },
      {
        opt: "Hidrolik Ekskavatör ve Yükleyici (Loder) Kazısı",
        desc: "Gevşetilmiş cevher veya pasanın basamak aynasından kazılıp kaya kamyonlarına yüklendiği temel açık ocak mekanize kazı işlemidir.",
        q: "Açık ocaklarda patlatma ile gevşetilen malzemenin kamyonlara yüklenmesinde kullanılan en temel kazı-yükleme iş makineleri hangileridir?"
      },
      {
        opt: "Drenaj Kanalları ve Çevre Hendekleri (Su Kontrolü)",
        desc: "Yağmur ve yeraltı sularının şev çatlaklarına girerek gözenek suyu basıncını artırmasını ve şev kayması yapmasını önleyen su uzaklaştırma sistemidir.",
        q: "Açık ocaklarda yüzey ve yağmur sularının basamak şevlerine sızarak heyelan/göçük oluşturmasını engellemek için ocak çevresine yapılan yapı nedir?"
      }
    ]
  },
  {
    groupName: "Mermer ve Doğal Taş Ocaklarında İSG (Servet Hoca Özel)",
    items: [
      {
        opt: "Elmas Telin Metre Başına 2 Tur Burulması",
        desc: "Elmas tel kesme makinesinde telin kendi ekseni etrafında dönerek elmas boncukların tek taraflı (konik) aşınıp kopmasını önleyen zorunlu uygulamadır.",
        q: "Prof. Dr. Servet Demirdağ'ın dersinde vurguladığı üzere, mermer ocaklarında elmas telin eşit aşınması için tel uçları birleştirilirken hangi işlem yapılır?"
      },
      {
        opt: "Sürekli Soğutma Suyu Verilmesi",
        desc: "Elmas tel kesiminde çelik halatın ve boncukların sürtünme ısısıyla yanıp kopmasını önleyen ve kesim oluğundaki mermer çamurunu yıkayan işlemdir.",
        q: "Mermer ocaklarında elmas tel kesme işlemi sırasında telin aşırı ısınıp kopmasını ve toz oluşumunu önlemek için uygulanması zorunlu işlem nedir?"
      },
      {
        opt: "Kamçılama Etkisi (Tel Kopması ve Boncuk Fırlaması)",
        desc: "Yüksek gerilimle dönen elmas telin kopması halinde uçlarının yüksek hızla savrularak üzerindeki çelik boncukları mermi gibi fırlatması tehlikesidir.",
        q: "Elmas tel kesme makinelerinde kesim hizasında durulmasını yasaklayan ve tel koptuğunda ölümcül yaralanmaya yol açan fiziksel tehlike nedir?"
      },
      {
        opt: "Hidrolik ve Pnömatik Devirme Yastıkları (Sac / Kevlar Yastık)",
        desc: "Ana kayadan elmas telle kesilen dev mermer kütlesini çatlatmadan öne doğru itip devirmek için kesim yarığına yerleştirilen basınçlı yastıklardır.",
        q: "Mermer ocaklarında kesilen büyük ana bloğu patlayıcı kullanmadan, kütleyi çatlatmadan ana kayadan ayırıp devirmek için yarığa konulan ekipman nedir?"
      },
      {
        opt: "Pasa / İnce Toprak Yastıklama Yığını (Amortisör Yatak)",
        desc: "Ana kayadan devrilen yüzlerce tonluk mermer bloğun yere çarpma anında kırılmasını ve sarsıntıyı önlemek için altına serilen gevşek toprak yığınıdır.",
        q: "Mermer ocağında devrilecek ana kütlenin yere düştüğünde parçalanmasını önlemek amacıyla devrilme tabanına önceden serilen malzeme nedir?"
      },
      {
        opt: "Sayalama (Ebatlama / Ticari Blok Kesimi)",
        desc: "Ocak tabanına devrilmiş büyük mermer kütlesinin fabrikaya nakledilebilecek düzgün dikdörtgen prizma (ticari blok) boyutlarına bölünmesi işlemidir.",
        q: "Devrilen büyük mermer kütlesinin elmas tel veya kollu kesici ile kamyonların taşıyabileceği standart ticari bloklara bölünmesine ne ad verilir?"
      },
      {
        opt: "Kollu Kesici (Zincirli Taş Kesme Makinesi)",
        desc: "Mermer ocaklarında elmas telin yanı sıra özellikle taban ve dikey kesimlerde kullanılan, elmas uçlu zincir/lama ile çalışan kesim makinesidir.",
        q: "Doğal taş ve mermer ocaklarında elmas tel kesme makinesi dışında, elmas dişli uzun bir pala/zincir yardımıyla susuz veya az sulu kesim yapan makine nedir?"
      },
      {
        opt: "Döner Volan (Kasnak) Koruyucu Sac Kapağı",
        desc: "Elmas tel kesme makinesinde teli çeviren büyük kasnağın (volanın) etrafını kapatan ve tel koptuğunda ilk savrulmayı tutan zorunlu makine koruyucusudur.",
        q: "Elmas tel kesme makinesinin üzerinde bulunan ve teli tahrik eden döner kasnağın etrafını sararak tel fırlamasını sınırlayan koruyucu parça nedir?"
      },
      {
        opt: "Sayalama / Kesim Hattı Arkası Koruyucu Bariyer (Siper)",
        desc: "Elmas telin çalıştığı düzlemin arkasına yerleştirilen, tel koptuğunda fırlayan boncukları durduran ağır sac/ahşap/lastik güvenlik perdesidir.",
        q: "Mermer ocağında çalışan diğer işçileri elmas tel kopması durumunda fırlayacak boncuklardan korumak için kesim hattı arkasına konulan engel nedir?"
      },
      {
        opt: "Kör Deliklerin (Yatay ve Düşey Deliklerin) Çakıştırılması",
        desc: "Dağdaki mermer bloğun arkasından elmas teli geçirebilmek için biri yatay diğeri düşey delinen iki sondaj deliğinin kaya içinde birbirini kesmesidir.",
        q: "Mermer ocağında ana kayanın içinden elmas teli geçirip halka yapabilmek amacıyla yatay ve düşey delinen iki deliğin uç uca birleştirilmesine ne denir?"
      }
    ]
  },
  {
    groupName: "Delme - Patlatma ve Patlayıcı Güvenliği",
    items: [
      {
        opt: "ANFO (%94 Amonyum Nitrat + %6 Fuel-Oil)",
        desc: "Açık ocak kuru delik patlatmalarında en yaygın kullanılan, darbeye karşı güvenli ancak suya dayanıksız (higroskopik) patlayıcı karışımıdır.",
        q: "Açık işletmelerde kuru deliklerde en çok tercih edilen ve gözenekli Amonyum Nitrat ile Fuel-Oil (mazot) karışımından oluşan patlayıcı nedir?"
      },
      {
        opt: "Yemleme (Kapsüle Duyarlı Dinamit / Emülsiyon Kartuşu)",
        desc: "Tek başına kapsülle patlamayan ANFO gibi duyarsız patlayıcı kolonunu ateşlemek için delik tabanına yerleştirilen yüksek hızlı patlayıcı kartuştur.",
        q: "ANFO gibi kapsüle duyarsız patlayıcıları ateşleyebilmek amacıyla içerisine kapsül yerleştirilerek delik dibine konulan patlayıcıya ne ad verilir?"
      },
      {
        opt: "Sıkılama (Delik Ağzı Dolgusu)",
        desc: "Patlayıcı şarjının üzerine delik ağzına kadar killi/ince taş kırıntısı doldurularak patlama gazlarının havaya kaçmasını ve taş savrulmasını önleyen işlemdir.",
        q: "Patlatma deliklerinde patlayıcı maddenin üst kısmında kalan boşluğun patlayıcı olmayan ince malzemeyle doldurulması işlemine ne ad verilir?"
      },
      {
        opt: "Taş Savrulması (Flyrock)",
        desc: "Yetersiz sıkılama boyu veya aşırı patlayıcı şarjı nedeniyle kaya parçalarının patlatma sahasından yüzlerce metre uzağa mermi gibi fırlamasıdır.",
        q: "Açık ocak patlatmalarında yetersiz sıkılama veya hatalı delik tasarımı sonucu kaya parçalarının beklenenden çok uzağa fırlaması tehlikesine ne denir?"
      },
      {
        opt: "Gecikmeli Kapsül (Milisaniye Gecikmeli Ateşleme)",
        desc: "Deliklerin aynı anda değil milisaniye aralıklarla sırayla patlatılmasını sağlayarak yer sarsıntısını (vibrasyonu) düşüren ve kırmayı iyileştiren kapsüldür.",
        q: "Açık ocak patlatmalarında çevredeki binalara giden yer sarsıntısını (vibrasyonu) ve hava şokunu azaltmak için deliklerin sırayla ateşlenmesini sağlayan eleman nedir?"
      },
      {
        opt: "Dilim Kalınlığı (Burden - En Az Direnç Hattı)",
        desc: "Patlatma deliğinin basamak şev yüzeyine (serbest yüzeye) olan dik mesafesidir; çok az olursa taş savrulması, çok fazla olursa patlamama/sarsıntı yapar.",
        q: "Açık ocak basamak patlatmalarında delik ekseni ile basamak aynası (serbest yüzey) arasındaki en kısa dik mesafeye ne ad verilir?"
      },
      {
        opt: "Delikler Arası Mesafe (Spacing)",
        desc: "Aynı sıradaki komşu iki patlatma deliği arasındaki yatay mesafedir (genellikle dilim kalınlığının 1,1 - 1,4 katı seçilir).",
        q: "Basamak üzerinde aynı sırada delinen yan yana iki patlatma deliği arasındaki yatay uzaklığa patlatma tasarımında ne ad verilir?"
      },
      {
        opt: "Kesik (Patlamamış) Delik İmha Prosedürü",
        desc: "Patlamamış deliklerin kesinlikle kurcalanmaması ve üzerine matkap vurulmaması; ateşleyici gözetiminde suyla yıkanarak veya yeni yemlemeyle imha edilmesidir.",
        q: "Patlatma sonrasında sahada patlamamış (kesik) bir delik tespit edildiğinde uygulanması gereken güvenli prosedür nedir?"
      },
      {
        opt: "Elektrikli Kapsüllerde Yıldırım ve Telsiz Frekansı Tehlikesi",
        desc: "Fırtınalı/yıldırımlı havalarda veya güçlü telsiz vericilerinin yakınında kaçak akımlarla elektrikli kapsüllerin kendiliğinden erken patlaması riskidir.",
        q: "Elektrikli kapsül kullanılan patlatma sahalarında fırtınalı havalarda çalışmanın durdurulmasının ve telsizlerin kapatılmasının temel nedeni nedir?"
      },
      {
        opt: "Ateşleyici Yeterlilik Belgesi ve Emniyet Nöbetçileri",
        desc: "Patlayıcı doldurma/ateşleme işleminin yalnızca belgeli ateşleyici tarafından yapılması ve siren çalınarak tüm girişlerin nöbetçilerle kapatılmasıdır.",
        q: "Maden ocaklarında patlatma hazırlığı ve ateşleme işlemi yalnızca kim tarafından yapılabilir ve saha güvenliği nasıl sağlanır?"
      }
    ]
  },
  {
    groupName: "Madenlerde İSG Riskleri, Makineler ve Mevzuat",
    items: [
      {
        opt: "Islak Delme (Su Enjeksiyonu) ve Siklonlu Toz Emme Sistemi",
        desc: "Delik delme makinelerinde (rok/foraj) çıkan kristal silis tozunu kaynağında bastırarak çalışanları silikozis hastalığından koruyan sistemdir.",
        q: "Açık ocak delik delme makinelerinde (rok) çalışan operatör ve işçileri pnömokonyoz (silikozis) hastalığından korumak için makinede hangi sistem bulunur?"
      },
      {
        opt: "Kaya Kamyonu Kör Nokta (Görüş Alanı Dışı) Ezilme Riski",
        desc: "Dev maden kamyonlarının kabini çok yüksekte olduğu için kamyonun ön, yan ve arkasındaki küçük araçların/yayaların görünmemesi sonucu oluşan kaza riskidir.",
        q: "Açık ocaklarda yüksek tonajlı kaya kamyonlarının binek araçları veya yayaları ezmesiyle sonuçlanan ölümlü kazaların en temel ergonomik/fiziksel nedeni nedir?"
      },
      {
        opt: "ROPS (Devrilmeye Karşı Koruyucu Yapı) ve FOPS (Düşen Cisimlere Karşı Koruyucu Yapı)",
        desc: "İş makinelerinin şevden devrilmesi halinde kabinin ezilmesini önleyen (ROPS) ve yukarıdan düşen taşlara karşı operatörü koruyan (FOPS) çelik kabin yapısıdır.",
        q: "Maden iş makinelerinde aracın devrilmesi durumunda operatörü koruyan çelik kafes sistemi ile düşen kayalara karşı tavan koruma sisteminin kısaltmaları nedir?"
      },
      {
        opt: "Daimi Nezaretçi (Maden Mühendisi)",
        desc: "Maden Kanunu gereği her maden işletmesinde teknik ve emniyet kurallarına uygun çalışmayı sürekli denetlemek üzere atanan maden mühendisidir.",
        q: "Maden işletmelerinde faaliyetlerin teknik ve güvenlik kurallarına uygun yürütülmesinden sorumlu olarak görevlendirilen maden mühendisine ne ad verilir?"
      },
      {
        opt: "Teknik Nezaretçi",
        desc: "Maden sahasındaki faaliyetleri periyodik olarak denetleyen ve deftere kaydeden maden mühendisi unvanıdır.",
        q: "Maden mevzuatında işletmedeki teknik faaliyetlerin projeye uygunluğunu denetleyen mühendislik görev tanımları arasında yer alan kavram nedir?"
      },
      {
        opt: "Arazöz ile Ocak İçi Nakliye Yollarının Sulanması",
        desc: "Kamyon tekerleklerinin kaldırdığı yoğun tozun görüş mesafesini kapatmasını ve toz maruziyetini önlemek için yolların düzenli ıslatılmasıdır.",
        q: "Açık ocaklarda ağır kamyon trafiğinin oluşturduğu toz bulutunu ve görüş kaybını önlemek için nakliye yollarında hangi işlem düzenli olarak yapılır?"
      },
      {
        opt: "Geri Vites Sesli/Işıklı İkaz Sistemi ve Arka Kamera",
        desc: "Gürültülü maden sahasında iş makineleri geri manevra yaparken arkadaki personeli uyaran ve operatöre görüş sağlayan zorunlu güvenlik donanımıdır.",
        q: "Açık ocak iş makinelerinde geri manevra kazalarını önlemek amacıyla araç üzerinde bulunması zorunlu olan ikaz ve görüş donanımı nedir?"
      },
      {
        opt: "Silikozis (Kristal Yapılı Serbest Silis / Kuvars Tozu Hastalığı)",
        desc: "Taş, granit, kuvars ve maden ocaklarında 0,5 - 5 mikron boyutundaki solunabilir silis tozlarının akciğerde birikmesiyle oluşan meslek hastalığıdır.",
        q: "Maden ve taş ocaklarında solunabilir boyuttaki (0,5-5 mikron) serbest kristal silis tozlarının akciğer alveollerinde birikmesiyle oluşan meslek hastalığı nedir?"
      },
      {
        opt: "Solunabilir Toz Boyutu (0,5 - 5 Mikron Arası Partiküller)",
        desc: "Üst solunum yollarında tutulamayıp doğrudan akciğer alveollerine (hava keseciklerine) kadar ulaşabilen ve pnömokonyoz yapan tehlikeli toz boyutudur.",
        q: "Maden işyerlerinde burun ve bronşlarda tutulamayarak doğrudan akciğerlerin en uç noktası olan alveollere kadar ulaşabilen tehlikeli toz boyutu hangi aralıktadır?"
      },
      {
        opt: "Grizu (%4,5 - %15 Metan + Hava Karışımı Patlaması)",
        desc: "Yeraltı kömür ocaklarında metan (CH4) gazının havayla %4,5 ile %15 oranında karışarak kıvılcımla patlamasıdır; açık ocaklarda görülmez.",
        q: "Yeraltı kömür madenlerinde en büyük patlama riskini oluşturan, ancak açık ocak madenlerinde doğal havalandırma sayesinde görülmeyen gaz patlaması nedir?"
      },
      {
        opt: "Şev Duraylılık (Stabilite) Analizi ve Çatlak Haritalaması",
        desc: "Açık ocak basamaklarında kayaç içindeki fay, tabaka ve eklem takımlarının ölçülerek kayma riskinin önceden hesaplanması çalışmasıdır.",
        q: "Açık ocak madenlerinde kademe göçüklerini ve heyelanları önceden tahmin edip önlemek için yapılan jeoteknik mühendislik çalışmasına ne ad verilir?"
      },
      {
        opt: "Yüksekten Düşmeyi Önleyici Korkuluk ve Emniyet Kemeri",
        desc: "Yüksek basamak başlarında (kret kenarlarında) çalışan sondaj ve kavlak sökümü personelinin uçurumdan düşmesini önleyen koruma tedbiridir.",
        q: "Açık ocaklarda dik basamak kenarlarında (şev üstünde) delik delme veya kontrol yapan personelin aşağı düşmesini önlemek için hangi tedbir alınır?"
      },
      {
        opt: "Maden İşyerlerinde Sağlık ve Güvenlik Dokümanı (SGD)",
        desc: "Maden İşyerlerinde İSG Yönetmeliği uyarınca işverenin hazırlamak ve güncel tutmak zorunda olduğu, maden ocağına özel kapsamlı risk değerlendirme dokümanıdır.",
        q: "Maden İşyerlerinde İSG Yönetmeliği'ne göre maden işverenlerinin işyerindeki riskleri ve alınan önlemleri belgelediği özel dokümana ne ad verilir?"
      },
      {
        opt: "Patlayıcı Madde Deposu (Bina Tipi veya Gömme Tipi Korunaklı Depo)",
        desc: "Maden ocaklarında dinamit, ANFO ve kapsüllerin birbirinden ayrı bölmelerde, yıldırıma ve izinsiz girişe karşı korunaklı olarak saklandığı depodur.",
        q: "Maden işletmelerinde patlayıcı maddeler ile ateşleyici kapsüllerin güvenlik kuralları gereği birbirinden ayrı bölmelerde saklandığı özel yapı nedir?"
      },
      {
        opt: "Basamak Yüksekliğinin Mekanize Kazıda Ekskavatör Boyunu Aşmaması",
        desc: "İş makinesiyle yapılan kazılarda basamak aynasının üst kısmından kepçe/kabin üzerine kaya devrilmesini önleyen temel boyut kuralıdır.",
        q: "Mekanize açık ocaklarda ekskavatörle kazı yapılırken basamak yüksekliğinin ekskavatörün erişim yüksekliğine göre sınırlandırılmasının nedeni nedir?"
      }
    ]
  }
];

export const madenExtraFills = [
  {
    q: "Bir cevherin içerisinde bulunan değerli metal veya mineralin yüzde (%) ya da gr/ton cinsinden oranına ________ denir.",
    answers: ["tenör", "tenor"],
    hint: "Cevherin zenginlik derecesi",
    explanation: "Cevher içindeki değerli metal yüzdesine Tenör denir."
  },
  {
    q: "Açık ocaklarda cevherin üzerindeki ekonomik değeri olmayan örtü tabakasının (pasanın) kazılıp kaldırılması işlemine ________ (örtü kazısı) denir.",
    answers: ["dekapaj"],
    hint: "Stripping / örtü kazısı terimi",
    explanation: "Cevher üzerindeki pasanın kaldırılması işlemine Dekapaj denir."
  },
  {
    q: "Açık ocakta 1 ton cevher üretmek için kazılması gereken pasa miktarına ________ oranı (Örtü/Cevher oranı) denir.",
    answers: ["dekapaj"],
    hint: "Açık ocak ekonomik sınırını belirleyen oran",
    explanation: "Dekapaj oranı (Pasa/Cevher), işletmenin açık ocak olarak çalışıp çalışamayacağını belirler."
  },
  {
    q: "Sondaj ve galerilerle üç boyutlu sınırları, tonajı ve tenörü kesin olarak belirlenmiş cevher kütlesine ________ (kesin) rezerv denir.",
    answers: ["görünür", "gorunur"],
    hint: "Muhtemel ve mümkün rezervin üstündeki en kesin rezerv",
    explanation: "Üç boyutuyla kesin olarak hesaplanmış rezerve Görünür Rezerv denir."
  },
  {
    q: "Tüvenan cevherin kırma, öğütme ve zenginleştirme işlemlerinden geçirilerek tenörünün yükseltilmiş haline ________ cevher denir.",
    answers: ["konsantre"],
    hint: "Zenginleştirilmiş cevher ürünü",
    explanation: "Zenginleştirme tesisinden çıkan yüksek tenörlü ürüne Konsantre denir."
  },
  {
    q: "Açık ocak nakliye yollarının ve döküm sahalarının uçurum kenarlarında kamyonların devrilmesini önlemek için bırakılan koruyucu sete ________ (güvenlik seti) denir.",
    answers: ["banket", "berm", "topuk"],
    hint: "Kamyon tekerlek yarıçapı yüksekliğinde bırakılan kenar seti",
    explanation: "Döküm ve nakliye kenarlarında araçların uçmasını önleyen güvenlik setine Banket (Berm) denir."
  },
  {
    q: "Açık ocak patlatmalarında yetersiz sıkılama veya aşırı şarj nedeniyle taş parçalarının çok uzak mesafelere fırlaması olayına taş ________ (flyrock) denir.",
    answers: ["savrulması", "savrulmasi", "fırlaması"],
    hint: "Flyrock karşılığı",
    explanation: "Patlatmada kaya parçalarının tehlikeli şekilde uzağa fırlamasına Taş Savrulması (Flyrock) denir."
  },
  {
    q: "ANFO gibi kapsüle duyarsız patlayıcıları ateşlemek için içerisine kapsül yerleştirilerek delik dibine konulan dinamit/emülsiyon kartuşuna ________ denir.",
    answers: ["yemleme"],
    hint: "Ana patlayıcıyı ateşleyen ilk kartuş",
    explanation: "Duyarsız patlayıcıyı patlatmak için kullanılan kapsüllü kartuşa Yemleme denir."
  },
  {
    q: "Mermer ocaklarında ana kayadan kesilen dev kütleyi çatlatmadan devirmek için kesim yarığına su veya hava ile şişirilen devirme ________ yerleştirilir.",
    answers: ["yastığı", "yastigi", "yastıkları"],
    hint: "Sac veya kevlar şişirme ekipmanı",
    explanation: "Mermer bloklarını çatlatmadan devirmek için hidrolik/pnömatik Devirme Yastıkları kullanılır."
  },
  {
    q: "Mermer ocağında devrilen ana bloğun yere çarpma anında kırılmasını önlemek için zemine ince pasa/topraktan ________ yığını serilir.",
    answers: ["yastıklama", "yastiklama", "yastık"],
    hint: "Darbeyi sönümleyen toprak yatak",
    explanation: "Devrilen bloğun kırılmaması için zemine pasa/toprak Yastıklama serilir."
  },
  {
    q: "Maden iş makinelerinde aracın devrilmesi halinde operatör kabininin ezilmesini önleyen çelik koruyucu yapıya ________ denir.",
    answers: ["ROPS", "rops"],
    hint: "Roll-Over Protective Structure kısaltması",
    explanation: "ROPS devrilmeye karşı, FOPS ise düşen cisimlere karşı kabin koruyucu yapısıdır."
  },
  {
    q: "Maden iş makinelerinde yukarıdan düşen kaya ve cisimlere karşı operatör kabinini koruyan tavan yapısına ________ denir.",
    answers: ["FOPS", "fops"],
    hint: "Falling Object Protective Structure kısaltması",
    explanation: "FOPS (Falling Object Protective Structure), düşen taşlara karşı kabini korur."
  },
  {
    q: "Maden İşyerlerinde İSG Yönetmeliği'ne göre işverenin hazırlamak zorunda olduğu kapsamlı risk değerlendirme ve güvenlik belgesine Sağlık ve Güvenlik ________ denir.",
    answers: ["dokümanı", "dokumani", "belgesi"],
    hint: "SGD kısaltmasındaki D harfi",
    explanation: "Maden işyerlerinde hazırlanan özel risk değerlendirme belgesine Sağlık ve Güvenlik Dokümanı (SGD) denir."
  },
  {
    q: "Doğrudan akciğer alveollerine kadar ulaşarak pnömokonyoz yapabilen solunabilir tozların tane boyutu 0,5 ile ________ mikron arasındadır.",
    answers: ["5", "beş", "bes"],
    hint: "Solunabilir toz üst mikron sınırı",
    explanation: "0,5 - 5 mikron arasındaki tozlar alveollere kadar ulaştığı için solunabilir tehlikeli tozdur."
  },
  {
    q: "Delik delme makinelerinde (rok/foraj) toz çıkışını kaynağında önlemek için ________ delme (su enjeksiyonu) veya toz toplama siklonu kullanılır.",
    answers: ["ıslak", "islak", "sulu"],
    hint: "Kuru delmenin zıttı olan güvenli yöntem",
    explanation: "Tozu bastırmak için su enjeksiyonlu Islak Delme yöntemi uygulanır."
  },
  {
    q: "Ruhsat sahibinin maden sahasını ton başına pay karşılığında başka bir işletmeciye kiralaması sözleşmesine ________ denir.",
    answers: ["rödovans", "rodovans"],
    hint: "Madencilikteki işletme hakkı kiralama usulü",
    explanation: "Maden sahalarının pay karşılığı işletmeye verilmesine Rödovans denir."
  },
  {
    q: "Açık ocak basamak patlatmalarında deliklerin aynı anda değil milisaniye aralıklarla patlatılmasını sağlayarak sarsıntıyı azaltan kapsüllere ________ kapsül denir.",
    answers: ["gecikmeli"],
    hint: "Anında patlamayan, kademeli ateşleme kapsülü",
    explanation: "Gecikmeli kapsüller yer sarsıntısını (vibrasyonu) azaltır ve kırma verimini artırır."
  },
  {
    q: "Patlatma sonrasında patlamamış (kesik) deliklerin üzerine veya yakınına kesinlikle yeniden delik ________.",
    answers: ["delinmez", "açılmaz", "acilmaz"],
    hint: "Kesik deliğe matkapla yapılması yasak olan işlem",
    explanation: "Patlamamış deliklerin üzerine kesinlikle yeniden delik delinmez ve metal çubukla kurcalanmaz."
  },
  {
    q: "Büyük kaya kamyonlarının operatör kabini yüksekte olduğu için aracın yakın çevresindeki görülmez alanlara ________ nokta denir.",
    answers: ["kör", "kor"],
    hint: "Aynadan ve camdan görülemeyen tehlikeli bölge",
    explanation: "Dev maden kamyonlarının etrafındaki görünmeyen bölgelere Kör Nokta denir."
  },
  {
    q: "Açık ocak nakliye yollarında kamyonların kaldırdığı tozu bastırmak için yollar düzenli olarak ________ aracıyla sulanır.",
    answers: ["arazöz", "arazoz", "su tankeri"],
    hint: "Sulama kamyonunun adı",
    explanation: "Ocak içi yollar toz kalkmasını önlemek için Arazöz ile düzenli sulanır."
  },
  {
    q: "Patlatma deliğinin basamak şev yüzeyine (serbest yüzeye) olan en kısa dik mesafesine ________ kalınlığı (burden) denir.",
    answers: ["dilim"],
    hint: "Delik ile serbest ayna arası mesafe",
    explanation: "Delik ile basamak aynası arasındaki dik mesafeye Dilim Kalınlığı denir."
  },
  {
    q: "Elektrikli kapsüllerin kullanıldığı patlatma sahalarında erken ateşleme tehlikesi nedeniyle ________ havalarda patlatma yapılmaz ve telsizler kapatılır.",
    answers: ["fırtınalı", "firtinali", "yıldırımlı", "yildirimli"],
    hint: "Şimşek/yıldırım riski olan hava durumu",
    explanation: "Yıldırımlı ve fırtınalı havalarda kaçak akımlar elektrikli kapsülü kendiliğinden patlatabilir."
  },
  {
    q: "Patlayıcı madde depolarında dinamit/ANFO gibi patlayıcılar ile ateşleyici ________ kesinlikle aynı bölmede bir arada depolanamaz.",
    answers: ["kapsüller", "kapsuller", "kapsül"],
    hint: "Patlayıcıyı ateşleyen hassas eleman",
    explanation: "Patlayıcı maddeler ile kapsüller ayrı bölmelerde veya ayrı depolarda saklanmak zorundadır."
  },
  {
    q: "Prof. Dr. Servet Demirdağ'ın vurguladığı madencilik ilkesine göre: 'Bir hammadde tarımla ________, mutlaka madencilikle çıkarılıyordur.'",
    answers: ["yetiştirilemiyorsa", "yetistirilemiyorsa", "üretilemiyorsa"],
    hint: "Toprakta bitki gibi büyütülememe durumu",
    explanation: "'Yetiştirilemiyorsa madencilikle çıkarılıyordur' madenciliğin temel mottosudur."
  },
  {
    q: "Mermer ocaklarında elmas tel kesme makinesinin döner kasnağı (volanı) üzerinde tel fırlamasını önleyen koruyucu ________ mutlaka kapalı olmalıdır.",
    answers: ["kapak", "sac", "muhafaza"],
    hint: "Kasnağın etrafını kapatan koruyucu",
    explanation: "Döner volan üzerindeki koruyucu sac kapak kapalı olmadan makine çalıştırılmaz."
  },
  {
    q: "Açık ocaklarda yüzey ve yağmur sularının şevlere sızarak göçük yapmasını önlemek için ocak etrafına ________ (su tahliye) kanalları açılır.",
    answers: ["drenaj", "çevre", "cevre"],
    hint: "Su uzaklaştırma kanalı",
    explanation: "Şev duraylılığını korumak için yüzey suları drenaj kanallarıyla uzaklaştırılır."
  },
  {
    q: "Açık ocak basamak geometrisinde şev yüzeyinin alt yatay düzlemle birleştiği alt köşeye basamak ________ denir.",
    answers: ["topuğu", "topugu", "topuk"],
    hint: "Basamağın alt dibi",
    explanation: "Basamağın alt köşesine basamak topuğu, üst kenarına basamak başı (kret) denir."
  },
  {
    q: "Yeraltı kömür ocaklarının en büyük riski olan ancak açık ocaklarda doğal havalandırma sayesinde oluşmayan metan-hava patlamasına ________ denir.",
    answers: ["grizu"],
    hint: "%4,5-15 metan patlaması",
    explanation: "Metan gazının havayla oluşturduğu patlayıcı karışıma Grizu denir."
  },
  {
    q: "Mermer ocaklarında elmas teli dağın içinden geçirebilmek için delinen yatay ve düşey iki kör sondaj deliğinin kaya içinde ________ sağlanır.",
    answers: ["çakışması", "cakismasi", "birleşmesi"],
    hint: "İki deliğin uç uca kesişmesi",
    explanation: "Yatay ve düşey deliklerin kaya içinde çakıştırılmasıyla elmas tel geçirilir."
  },
  {
    q: "Maden ocaklarında patlatma yapılmadan önce sesli ________ çalınarak tüm personelin güvenli bölgeye çekilmesi sağlanır.",
    answers: ["siren", "ikaz", "uyarı"],
    hint: "Sesli uyarı sistemi",
    explanation: "Ateşleme öncesi sesli siren/ikaz verilmesi ve nöbetçi dikilmesi zorunludur."
  },
  {
    q: "Açık işletmelerde iş makineleri geri manevra yaparken çevredeki işçileri uyarmak için geri vites ________ ikaz sistemi çalışır durumda olmalıdır.",
    answers: ["sesli", "ışıklı", "sesli ve ışıklı"],
    hint: "Duyulabilir ve görülebilir uyarı",
    explanation: "İş makinelerinde geri vites sesli ve ışıklı ikaz tertibatı bulunması zorunludur."
  },
  {
    q: "ANFO patlayıcısı suya karşı hassas olduğu için ________ deliklerde doğrudan kullanılamaz (suya dayanıklı emülsiyon/jelatinli patlayıcı kullanılır).",
    answers: ["sulu", "ıslak", "islak"],
    hint: "İçinde su bulunan delik",
    explanation: "Amonyum nitrat suda çözündüğü için ANFO sulu deliklerde plastik kılıfsız kullanılamaz."
  },
  {
    q: "Mermer ocaklarında ana kütleyi keserken elmas telin yanı sıra elmas dişli zincire sahip ________ kesici makineler de kullanılır.",
    answers: ["kollu", "zincirli"],
    hint: "Uzun bir kol/pala ile kesim yapan makine",
    explanation: "Mermer ocaklarında elmas tel ve Kollu Kesici makineler yaygın kullanılır."
  },
  {
    q: "Açık ocaklarda tabakalı ve çatlaklı zeminlerde şev kaymasını önlemek için basamak şev açısı daha ________ (düşük eğimli) seçilir.",
    answers: ["yatık", "yatik", "düşük", "az"],
    hint: "Dik açının zıttı",
    explanation: "Zayıf ve çatlaklı zeminlerde göçüğü önlemek için şev açısı yatıklaştırılır."
  },
  {
    q: "Elmas tel kesme makinesi çalışırken operatör ve işçilerin telin dönüş/savrulma ________ (karşısında) durması kesinlikle yasaktır.",
    answers: ["hizasında", "hizasinda", "düzleminde"],
    hint: "Telin tam karşısı / doğrultusu",
    explanation: "Tel koptuğunda dönüş hizası boyunca savrulduğu için bu doğrultuda kimse durmamalıdır."
  }
];
