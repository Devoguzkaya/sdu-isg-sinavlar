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
    "groupName": "Maden Rezerv ve Cevher Sınıflandırma Terimleri",
    "items": [
      {
        "opt": "Görünür Rezerv",
        "desc": "Boyutları, tenörü ve sürekliliği belirlenmiş, kesin üretilebilir cevher kütlesidir (hata sınırı ±%5 ile ±%20 arasındadır).",
        "q": "Maden ders kitapçığına göre; boyutları ve tenörü kesin belirlenmiş, hata payı en düşük (±%5-20) üretilebilir cevher kütlesine ne ad verilir?"
      },
      {
        "opt": "Muhtemel Rezerv",
        "desc": "Arama verileri ve jeolojik süreklilikle tahmin edilen, hata sınırı ±%20 ile ±%40 arasında kabul edilen cevher kütlesidir.",
        "q": "Maden yatağında boyutları ve tenörü belirli aralıklarla saptanmış, hata payı ±%20-40 arasında olan rezerv sınıfı hangisidir?"
      },
      {
        "opt": "Mümkün Rezerv",
        "desc": "Jeolojik benzerlik ve kısıtlı verilerle varlığı öngörülen, hata sınırı ±%50'nin üzerinde olan tahmini cevher kütlesidir.",
        "q": "Henüz yeterli arama ve sondaj verisi bulunmayan, hata sınırı %50'nin üzerinde olan rezerv sınıfı aşağıdakilerden hangisidir?"
      },
      {
        "opt": "Tüvenan (Ham Cevher)",
        "desc": "Ocaktan doğrudan çıkarılan, pasayı da içeren ve henüz zenginleştirme işlemine tabi tutulmamış ham cevherdir.",
        "q": "Ocaktan çıkarılan, pasayı da içeren ve henüz hiçbir zenginleştirme işlemine tabi tutulmamış ham cevhere ne ad verilir?"
      },
      {
        "opt": "Konsantre",
        "desc": "Tüvenan cevherin zenginleştirme tesisinde işlenerek ekonomik değeri olan faydalı mineral oranının artırılmış durumudur.",
        "q": "Zenginleştirme tesislerinde işlenerek içindeki faydalı mineral oranı artırılmış nihai cevhere ne ad verilir?"
      },
      {
        "opt": "Tenör",
        "desc": "Cevherin içerdiği faydalı mineral miktarının toplam cevher ağırlığına olan yüzdesidir.",
        "q": "Cevherin içerdiği ekonomik değeri olan faydalı mineralin ağırlıkça yüzdesine madencilikte ne ad verilir?"
      },
      {
        "opt": "Pasa (Atık Kayaç)",
        "desc": "Cevher yatağının içinde veya çevresinde bulunan, ekonomik değeri olmayan ve kazılarak uzaklaştırılan işe yaramaz taş/topraktır.",
        "q": "Cevher üretimi sırasında çıkan, ekonomik değeri bulunmayan ve döküm sahasına taşınan artık kayaç kütlesine ne ad verilir?"
      },
      {
        "opt": "Dekapaj (Örtü Kazısı)",
        "desc": "Açık maden işletmelerinde cevhere ulaşabilmek için üzerindeki işe yaramaz örtü tabakasının kazılarak kaldırılması işlemidir.",
        "q": "Açık işletmecilikte cevher üretimine geçebilmek için cevherin üzerini örten tabakanın kazılıp taşınması işlemine ne ad verilir?"
      }
    ]
  },
  {
    "groupName": "Yeraltı Maden Galerileri ve Kuyuları",
    "items": [
      {
        "opt": "Lağım",
        "desc": "Yeraltında taş içerisinde sürülen galeriye veya patlayıcı madde doldurmak amacıyla delinen deliklere verilen addır.",
        "q": "Madencilik terminolojisinde taş içerisinde sürülen galeriye veya patlayıcı doldurmak için delinen deliklere ne ad verilir?"
      },
      {
        "opt": "Baca",
        "desc": "Doğrudan cevher kütlesi veya kömür damarı içinde açılan ve ilerletilen yeraltı galerisidir.",
        "q": "Yeraltı madenciliğinde doğrudan cevher kütlesi veya kömür damarı içerisinde sürülen galeriye ne ad verilir?"
      },
      {
        "opt": "Bür (Fere / Kör Kuyu)",
        "desc": "Yeraltında iki kat arasında açılmış, yeryüzüne kadar uzanmayan yerüstü bağlantısız tali iç kuyudur.",
        "q": "Yeraltında iki ayrı kat arasında bağlantı sağlayan ancak yeryüzüyle doğrudan bağlantısı olmayan iç kuyuya ne ad verilir?"
      },
      {
        "opt": "Desandre",
        "desc": "Yeraltında yukarıdan aşağıya veya aşağıdan yukarıya taşıma yapmak üzere eğimli olarak sürülen galeridir.",
        "q": "Yeraltında katlar arasında malzeme ve cevher nakliyatı amacıyla eğimli olarak açılan galeri türü nedir?"
      },
      {
        "opt": "Ana Kuyu",
        "desc": "Yeryüzünden yeraltındaki ana galerilere dikey olarak açılan, insan ve cevher taşınan ana şafttır.",
        "q": "Yeryüzünden yeraltındaki ana katlara dikey doğrultuda inen, havalandırma ve ana nakliyatın yapıldığı düşey açıklık nedir?"
      }
    ]
  },
  {
    "groupName": "Maden Kazı, Delme ve Nakliyat Ekipmanları",
    "items": [
      {
        "opt": "Martoperfaratör",
        "desc": "Basınçlı hava ile çalışan, delici çubuğu hem döndürüp hem döverek sert taşta lağım deliği delen el delicisidir.",
        "q": "Basınçlı hava ile çalışan ve delici ucunu döverek sert kayada lağım deliği delen el makinesine ne ad verilir?"
      },
      {
        "opt": "Martopikör",
        "desc": "Basınçlı hava ile çalışan, dönme hareketi yapmaksızın sadece darbeleyerek kömür ve yumuşak kayaç söken kazıcı tabancadır.",
        "q": "Dönme hareketi olmaksızın sadece darbeli vuruş yaparak kömür ve yumuşak taş sökmekte kullanılan pnömatik alet nedir?"
      },
      {
        "opt": "Jumbo",
        "desc": "Üzerinde birden fazla martoperfaratör kolu bulunan, galeri delme randımanını artıran paletli veya tekerlekli arabadır.",
        "q": "Yeraltı galeri sürme işlerinde delme hızını artırmak amacıyla üzerinde bir veya birden fazla martoperfaratör bulunan makineye ne ad verilir?"
      },
      {
        "opt": "Skip",
        "desc": "Dikey kuyularda insan taşınması kesinlikle yasak olan, yalnızca cevher ve pasa çekmekte kullanılan çelik hazneli silodur.",
        "q": "Dikey maden kuyularında insan taşınmasına izin verilmeyen, yalnızca cevher nakliyatında kullanılan çelik silo kabinine ne ad verilir?"
      },
      {
        "opt": "Kafes",
        "desc": "Dikey kuyularda çalışanları ve vagonları güvenle yer altına indirip yukarı çıkaran çok katlı asansör kabinidir.",
        "q": "Dikey kuyularda personelin ve vagonların katlar arasında taşınmasını sağlayan asansör kabinine ne ad verilir?"
      },
      {
        "opt": "Tumba",
        "desc": "Cevher dolu maden vagonlarını raydan çıkarmadan 360 derece döndürerek içini tek hamlede boşaltan beşik düzeneğidir.",
        "q": "Maden vagonlarının yüklerini boşaltmak için vagonu 360° ters-yüz ederek deviren mekanik beşik sistemine ne ad verilir?"
      },
      {
        "opt": "Varagel",
        "desc": "Eğimli yolda yerçekiminden yararlanarak dolu vagon aşağı inerken boş vagonu yukarı çeken fren tertibatlı nakliyat yoludur.",
        "q": "Eğimli maden yollarında dolu vagonun yerçekimiyle inerken boş vagonu yukarı çektiği mekanik nakliyat sistemine ne ad verilir?"
      }
    ]
  },
  {
    "groupName": "Maden Jeomekaniği, Deformasyon ve Gaz Olayları",
    "items": [
      {
        "opt": "Konverjans",
        "desc": "Yeraltında açılan galerilerin arazi basıncı etkisiyle tavan, taban ve yan duvarlardan içeri doğru daralması hareketidir.",
        "q": "Yeraltında açılan galerilerin arazi basıncı etkisiyle zamanla kesitinin daralması (% olarak ifade edilir) olayına ne ad verilir?"
      },
      {
        "opt": "Tarama",
        "desc": "Arazi basıncıyla daralmış (konverjansa uğramış) bir galerinin kesitini yeniden açarak eski ölçülerine getirme işlemidir.",
        "q": "Konverjans nedeniyle daralmış olan yeraltı galerisinin yeniden kazılarak orijinal kesitine kavuşturulması işlemine ne ad verilir?"
      },
      {
        "opt": "Tasman (Sübsidans)",
        "desc": "Yeraltındaki kazı boşluklarının göçmesi sonucu yer kabuğu hareketinin yüzeye ulaşarak arazide çöküntü ve yarıklar oluşturmasıdır.",
        "q": "Yeraltında oluşan göçüklerin yeryüzüne kadar ulaşarak zemin yüzeyinde çökme ve yarıklar oluşturması olayına ne ad verilir?"
      },
      {
        "opt": "Otooksidasyon",
        "desc": "Kömürün hava ile temasında oksijeni emerek CO, CO2 gazları ve ısı açığa çıkarmasıyla başlayan kendiliğinden yanma reaksiyonudur.",
        "q": "Kömürün ana yapısını oluşturan karbonun oksijenle reaksiyona girerek ısı ve gaz üretmesiyle başlayan kendiliğinden yanma olayına ne ad verilir?"
      },
      {
        "opt": "Degajman",
        "desc": "Jeolojik sıkışma altındaki metan ve CO2 gazlarının parçalanan kömürle birlikte çalışma alanına büyük bir basınçla aniden püskürmesidir.",
        "q": "Yeraltı ocaklarında metan veya karbondioksit gazlarının parçalanan kömür tozuyla birlikte galeriye patlarcasına ani püskürmesine ne ad verilir?"
      }
    ]
  },
  {
    "groupName": "Açık Ocak Basamak Geometrisi ve Şev Duraylılığı",
    "items": [
      {
        "opt": "Basamak Yüksekliği",
        "desc": "Bir basamağın tabanı ile üst düzlüğü arasındaki düşey mesafedir; iş makinesinin kazı yüksekliği ile şev stabilitesine göre belirlenir.",
        "q": "Açık ocaklarda basamağın devrilmeden durabilmesinde en kritik iki geometrik elemandan biri olan düşey mesafeye ne ad verilir?"
      },
      {
        "opt": "Basamak Genişliği",
        "desc": "Basamak üzerinde iş makinelerinin ve kamyonların emniyetle çalışıp manevra yapabilmesi için gereken yatay düzlük mesafesidir.",
        "q": "Açık işletmelerde kazı ve nakliye makinelerinin güvenle hareket edebilmesi için basamak üstünde bırakılan yatay düzlüğe ne ad verilir?"
      },
      {
        "opt": "Şev Açısı",
        "desc": "İki basamağı birleştiren eğik kazı yüzeyinin (aynanın) yatay düzlemle yaptığı eğim açısıdır.",
        "q": "Basamak aynasının yatay düzlemle yaptığı eğim açısına açık maden işletmeciliğinde ne ad verilir?"
      },
      {
        "opt": "Genel Şev Açısı",
        "desc": "Tüm basamakların en dış uç noktalarından geçen sanal doğrunun yatayla yaptığı açı olup toplam dekapaj hesabında kullanılır.",
        "q": "Tüm basamakların uç noktalarından geçen hayali doğrunun yatayla yaptığı açıya ne ad verilir?"
      },
      {
        "opt": "Şev Duraylılığı (Stabilitesi)",
        "desc": "Şevin kaymadan, akmadan ve heyelana uğramadan kendi kendini ayakta tutabilme mekanik dengesidir.",
        "q": "Açık ocaklarda basamak yüzeyinin heyelan veya kayma olmaksızın dengede kalabilme özelliğine ne ad verilir?"
      },
      {
        "opt": "Kavlak Sökümü",
        "desc": "Ateşleme ve yağış sonrasında basamak aynasında askıda kalan gevşek taşların levyelerle düşürülerek temizlenmesi işlemidir.",
        "q": "Ateşleme sonrasında şev aynasında askıda kalıp düşme riski yaratan taşların güvenle temizlenmesi işlemine ne ad verilir?"
      }
    ]
  },
  {
    "groupName": "Delme-Patlatma Teknolojisi ve Patlayıcı Türleri",
    "items": [
      {
        "opt": "ANFO",
        "desc": "Teknik amonyum nitrat tanecikleri içine ağırlıkça %6 mazot (fuel-oil) karıştırılarak hazırlanan açık ocak ana patlayıcısıdır.",
        "q": "Açık maden işletmelerinde ana patlayıcı olarak kullanılan ve amonyum nitrat içine %6 mazot katılarak hazırlanan patlayıcı hangisidir?"
      },
      {
        "opt": "Kara Barut",
        "desc": "Bileşiminde %72 güherçile (KNO3), %16 kömür tozu ve %12 kükürt bulunan, itici etkisi yüksek fakat parçalama hızı düşük patlayıcıdır.",
        "q": "Bileşiminde %72 potasyum nitrat, %16 kömür tozu ve %12 kükürt bulunan ve itici etkisiyle bilinen patlayıcı madde hangisidir?"
      },
      {
        "opt": "Dinamit",
        "desc": "Nitrogliserin esaslı, patlama hızı ve duyarlılığı çok yüksek olan, ANFO'yu ateşlemede yemleyici kartuş olarak kullanılan patlayıcıdır.",
        "q": "Duyarlılığı düşük olan ANFO deliklerinde tabana yerleştirilerek yemleyici patlatıcı olarak kullanılan yüksek enerjili patlayıcı nedir?"
      },
      {
        "opt": "Slurry (Su Jeli Patlayıcı)",
        "desc": "Amonyum nitrat, alüminyum tozu ve su jeli içeren, ıslak ve sulu lağım deliklerinde suya dayanıklılığı nedeniyle tercih edilen patlayıcıdır.",
        "q": "Su dolu lağım deliklerinde ANFO'nun ıslanıp bozulmasını önlemek için kullanılan suya dayanıklı kimyasal patlayıcı türü hangisidir?"
      },
      {
        "opt": "Sıkılama",
        "desc": "Patlayıcı doldurulduktan sonra deliğin üst 1/3'lük boşluğunun kırıntı ve kille doldurularak gazın dışarı kaçmasını önleyen işlemdir.",
        "q": "Lağım deliğine patlayıcı şarj edildikten sonra üst 1/3 boşluğun kırıntılarla doldurulması işlemine ne ad verilir?"
      },
      {
        "opt": "Emniyetli Fitil",
        "desc": "İçinde ince bir karabarut kanalı bulunan ve yanma hızı yaklaşık 1 m/s olan ateşleme iletim kordonudur.",
        "q": "İçindeki karabarutun yanma hızı yaklaşık 1 m/sn olan ve fitilli ateşlemede kullanılan kordonun adı nedir?"
      }
    ]
  },
  {
    "groupName": "Açık Ocak Nakliyat, Trafik Güvenliği ve İş Makineleri",
    "items": [
      {
        "opt": "Nakliye Yolunda Maksimum 40 km/h Hız Sınırı",
        "desc": "Açık işletmelerde ana nakliye yollarında kamyon ve iş makinelerinin aşmaması gereken standart üst hız limitidir.",
        "q": "Açık maden işletmelerinde ana nakliye yollarında kamyonlar için uygulanan azami hız sınırı kaç km/h'dir?"
      },
      {
        "opt": "Ocak İçi Rampalarda 20 km/h Hız Sınırı",
        "desc": "Ocak içi basamak bağlantı rampalarında yüklü ve boş kamyonların güvenle seyredebileceği azami hız limitidir.",
        "q": "Açık ocak içi rampa yollarında araçların uyması gereken azami hız sınırı kaç km/h'dir?"
      },
      {
        "opt": "Kritik Yerlerde 10 km/h Hız Sınırı",
        "desc": "Döküm sahası yaklaşımı, kantar girişi, kavşaklar ve dar manevra noktalarında uyulması zorunlu hız sınırıdır.",
        "q": "Ocak içinde döküm sahası girişi, dar virajlar ve kantar gibi kritik yerlerdeki hız sınırı kaçtır?"
      },
      {
        "opt": "Ekskavatöre 30 Metre Emniyet Mesafesi",
        "desc": "Çalışmakta olan bir ekskavatör veya yükleyicinin dönüş dairesi ve kör noktaları sebebiyle korunması gereken yaklaşma sınırıdır.",
        "q": "Açık ocaklarda çalışmakta olan bir ekskavatöre diğer araçların veya yayaların en az kaç metreden fazla yaklaşmaması gerekir?"
      },
      {
        "opt": "Kamyonlar Arası 50 Metre Takip Mesafesi",
        "desc": "Ağır kaya kamyonlarının seyir halinde fren mesafesi ve toz engeli nedeniyle aralarında bırakması gereken asgari mesafedir.",
        "q": "Açık ocak nakliye yollarında seyreden kaya kamyonları arasında bırakılması zorunlu asgari takip mesafesi kaç metredir?"
      },
      {
        "opt": "Bantlı Konveyör Yanlarında 75 cm Açık Alan",
        "desc": "Konveyör hattı boyunca bakım, gözetim ve acil müdahale amacıyla her iki tarafta bırakılması zorunlu koridor genişliğidir.",
        "q": "Bantlı konveyörlerin her iki yanında güvenli geçiş ve bakım için bırakılması gereken asgari açık koridor genişliği nedir?"
      }
    ]
  },
  {
    "groupName": "Mermer Ocakları, Taş Ocakları ve Mevzuat",
    "items": [
      {
        "opt": "90° Dik Basamak Şev Açısı",
        "desc": "Mermer ocaklarında blokların düzgün kesilebilmesi için basamak şev açısının klasik ocakların aksine 90 derece dik olması kuralıdır.",
        "q": "Mermer ocaklarının diğer açık ocaklardan en temel geometrik farkı basamak şev açısının kaç derece olmasıdır?"
      },
      {
        "opt": "Elmas Tel Kesme Makinesi (36-40 m/s Hız)",
        "desc": "Mermer blokların ana kayadan çatlatılmadan kesilmesi için kullanılan ve tel hızı 36-40 m/s olan kesme sistemidir.",
        "q": "Mermer ocaklarında blok kesiminde kullanılan elmas telin güvenli ve verimli çalışma hızı aralığı nedir?"
      },
      {
        "opt": "Titano ve Hava/Su Yastığı Sistemi",
        "desc": "Elmas telle dört tarafı kesilen dev mermer kütlesinin arkasından itilerek pasa yatağına devrilmesini sağlayan düzenektir.",
        "q": "Mermer ocaklarında kesimi tamamlanan ana bloğun pasa yastığına devrilmesinde hangi hidrolik/pnömatik ekipmanlar kullanılır?"
      },
      {
        "opt": "Sayalama",
        "desc": "Ana kayadan kesilip devrilen dev mermer kütlesinin kamyona yüklenebilecek ebatlarda daha küçük bloklara bölünmesi işlemidir.",
        "q": "Mermer ocaklarında ana kütleden kesilerek devrilen büyük bloğun küçük parçalara bölünmesi işlemine ne ad verilir?"
      },
      {
        "opt": "Kollu Kesici (Jet-Belt)",
        "desc": "Elmas tel yerine sinterize elmaslı kayışın döndüğü, 360° dönebilen kesici kola sahip raylı mermer kesme makinesidir.",
        "q": "Mermer ocaklarında tel yerine döner kollu elmas kayış kullanan ve 360° dönebilen kesme makinesine ne ad verilir?"
      },
      {
        "opt": "Daimi Nezaretçi (Maden Mühendisi)",
        "desc": "Maden Kanunu gereğince sahada üretimin fenni nezaret ve denetiminden sorumlu olan maden mühendisidir.",
        "q": "Maden işletmelerinde üretimin teknik nezaret ve denetiminden sorumlu, kanunen atanması zorunlu maden mühendisi unvanı nedir?"
      },
      {
        "opt": "Sağlık ve Güvenlik Dokümanı",
        "desc": "İşverenin maden sahasında çalışmaya başlanılmadan önce hazırlamakla yükümlü olduğu temel iş güvenliği belgesidir.",
        "q": "Maden İşyerlerinde İSG Yönetmeliğine göre işverenin çalışmaya başlanmadan önce hazırlamakla yükümlü olduğu temel dokümanın adı nedir?"
      }
    ]
  }
];

export const madenExtraFill = [
    {
      q: "Maden Kanunu'na göre mermer, traverten, granit gibi blok olarak üretilen taşlar _______ (IIb) grubu madenler içinde yer alır.",
      answers: ["2. grup","2","ikinci grup","iib","ii. grup"],
      hint: "Ders Kitapçığı Sayfa 1: Blok mermer ve doğal ",
      explanation: "Ders Kitapçığı Sayfa 1: Blok mermer ve doğal taşlar 2. grup (IIb) madenlerdir."
    },
    {
      q: "Boyutları ve tenörü belirlenmiş üretilebilir kesin cevher kütlesine _______ rezerv denir ve hata sınırı genellikle ±%20 (iyi bilinen yataklarda ±%5) kabul edilir.",
      answers: ["görünür","gorunur"],
      hint: "Ders Kitapçığı Sayfa 4: Kesin cevher kütlesin",
      explanation: "Ders Kitapçığı Sayfa 4: Kesin cevher kütlesine görünür rezerv denir."
    },
    {
      q: "Ocakta üretilen, pasayı da içeren ve henüz zenginleştirilmemiş durumdaki ham cevhere _______ cevher denir.",
      answers: ["tüvenan","tuvenan"],
      hint: "Ders Kitapçığı Sayfa 5: Zenginleştirilmemiş h",
      explanation: "Ders Kitapçığı Sayfa 5: Zenginleştirilmemiş ham cevhere tüvenan denir."
    },
    {
      q: "Yeraltı galerilerinde tavan ve yan duvarlardaki çatlaklı kaya bloklarını ana kütleye sabitlemek için delik içine kimyasal reçine veya harçla yerleştirilen çelik çubuklara kaya ________ (ankraj) denir.",
      answers: ["saplaması","civata","cıvatası","bulonu"],
      hint: "Kaya tahkimat çubuğu (kaya ...)",
      explanation: "Kaya saplamaları (kaya bulonları), gevşek kaya katmanlarını ana sağlam kayaya bağlayarak tavan göçmelerini önler."
    },
    {
      q: "Kömür madenlerinde kömür tozu patlamalarını ve zincirleme alev ilerlemesini önlemek amacıyla galerilere püskürtülen ve yanmayan toza ________ tozu denir.",
      answers: ["taş","kireç"],
      hint: "Grizu ve kömür tozu zincirini kesen toz",
      explanation: "Taş tozu serpme uygulaması (en az %80 yanmayan madde oranı), kömür tozu patlamalarının yayılmasını engeller."
    },
    {
      q: "Taş içerisinde sürülen galeriye veya patlayıcı madde doldurmak için delinen deliğe _______ adı verilir.",
      answers: ["lağım","lagim"],
      hint: "Ders Kitapçığı Sayfa 5 & 39: Taş içinde sürül",
      explanation: "Ders Kitapçığı Sayfa 5 & 39: Taş içinde sürülen galeriye veya patlayıcı deliğine lağım denir."
    },
    {
      q: "Yeraltında iki kat arasında açılmış ve yeryüzüne kadar uzanmayan (yerüstüyle bağlantısı olmayan) tali iç kuyulara _______ (fere) denir.",
      answers: ["bür","bur","fere","kör kuyu"],
      hint: "Ders Kitapçığı Sayfa 3 & 38: Yerüstüyle bağla",
      explanation: "Ders Kitapçığı Sayfa 3 & 38: Yerüstüyle bağlantısı olmayan kuyuya bür (fere) denir."
    },
    {
      q: "Maden ocaklarında zehirli karbonmonoksit (CO) gazı için izin verilen 8 saatlik azami çalışma ortamı maruziyet sınır değeri ________ ppm'dir.",
      answers: ["50","elli"],
      hint: "CO gazı yasal sınır konsantrasyonu (ppm)",
      explanation: "Karbonmonoksit renksiz ve kokusuz ölümcül bir gaz olup yasal ortam maruziyet üst sınırı 50 ppm'dir."
    },
    {
      q: "Varagel ve desandre gibi eğimli maden nakliyat yollarında vagonların aşırı hızlanmasını ve kaçmasını önleyen mekanik fren tertibatına ________ denir.",
      answers: ["freno"],
      hint: "Servet Hoca'nın slaytındaki eğimli yol freni",
      explanation: "Freno, varagel hatlarında yüklü iniş hızını kontrol altında tutan el veya hidrolik kumandalı fren sistemidir."
    },
    {
      q: "Yeraltı kömür ocaklarında metan gazının havayla yaptığı en şiddetli ve tahripkar patlama konsantrasyon oranı yüzde ________'tir.",
      answers: ["9.5","9,5"],
      hint: "Maksimum grizu şiddeti yüzdesi",
      explanation: "Metan %4-15 arasında patlar; ancak en tam ve şiddetli patlama stokiometrik oran olan %9.5'te meydana gelir."
    },
    {
      q: "Eğimli düzey üzerinde yerçekiminden yararlanarak dolu araba aşağı inerken boş arabanın yukarı çıkmasını sağlayan halatlı ve frenli taşıma yerine _______ denir.",
      answers: ["varagel"],
      hint: "Ders Kitapçığı Sayfa 6 & 39: Karşılıklı ağırl",
      explanation: "Ders Kitapçığı Sayfa 6 & 39: Karşılıklı ağırlık esasına göre çalışan eğimli taşıma yoluna varagel denir."
    },
    {
      q: "Mermer ocaklarında ana kayadan tel kesmeyle ayrılan devasa monoblok kütleleri tabana kontrollü devirmek için arkasına yerleştirilen su/hava basınçlı metal yastıklara ________ yastığı denir.",
      answers: ["titano","hava","devirme"],
      hint: "Servet Hoca'nın slaytındaki İtalyan patenti yastık",
      explanation: "Titano veya çelik hava yastıkları, bloğu emniyetle basamak tabanındaki pasa yatağına devirmek için kullanılır."
    },
    {
      q: "Açık işletmelerde zemin hazırlamada ilk iş, tarıma elverişli üst toprağın sıyrılarak stoklanması ve ardından ilk basamağın düzenlenmesi için bir _______ açılmasıdır.",
      answers: ["yarma"],
      hint: "Ders Kitapçığı Sayfa 9: İlk basamağın düzenle",
      explanation: "Ders Kitapçığı Sayfa 9: İlk basamağın düzenlenmesi için bir yarma açılır."
    },
    {
      q: "Patlayıcı madde ateşlendiğinde oluşan çatlaklara sızarak kayacın parçalanmasında EN ETKİN rolü oynayan basınç _______ basıncıdır.",
      answers: ["gaz"],
      hint: "Ders Kitapçığı Sayfa 10: Kayacın parçalanması",
      explanation: "Ders Kitapçığı Sayfa 10: Kayacın parçalanmasında en etkin rolü gaz basıncı oynar."
    },
    {
      q: "Patlayıcı maddenin oluşabilmesi/patlayabilmesi için gerekli minimum enerji gereksinimine _______ adı verilir.",
      answers: ["duyarlılık","duyarlilik","hassasiyet"],
      hint: "Ders Kitapçığı Sayfa 11: Patlama için gerekli",
      explanation: "Ders Kitapçığı Sayfa 11: Patlama için gerekli minimum enerjiye duyarlılık denir."
    },
    {
      q: "Açık işletmelerde ana patlayıcı olarak kullanılan ANFO, toz halindeki teknik amonyum nitrat içine %_______ oranında mazot (fuel-oil) karıştırılmasıyla elde edilir.",
      answers: ["6","altı","alti"],
      hint: "Ders Kitapçığı Sayfa 11: ANFO = Amonyum nitra",
      explanation: "Ders Kitapçığı Sayfa 11: ANFO = Amonyum nitrat + %6 mazot."
    },
    {
      q: "Açık ocak kamyon nakliyat yollarının uçurum tarafındaki kenarlarına yapılan güvenlik seddesinin yüksekliği, kullanılan en büyük kamyon tekerleği çapının en az ________ kadar olmalıdır.",
      answers: ["yarısı","1/2","%50"],
      hint: "Kamyon tekerlek çapı oranı",
      explanation: "Maden güvenliği kurallarına göre yol kenar koruma seddeleri en az kamyon teker çapının yarısı (h/2) yüksekliğinde inşa edilmelidir."
    },
    {
      q: "Çoklu delik patlatmalarında _______ adetten az sayıda delik patlatılacaksa, kopukluk halinde hiçbir deliğin patlamaması avantajı nedeniyle \"Seri bağlantı\" kullanılır.",
      answers: ["50","elli"],
      hint: "Ders Kitapçığı Sayfa 13: 50'den az sayıda del",
      explanation: "Ders Kitapçığı Sayfa 13: 50'den az sayıda delik patlatılacaksa seri bağlantı kullanılır."
    },
    {
      q: "Ateşleme sırasında patlayıcı maddenin toplam kimyasal enerjisinin sadece %_______'si kayanın kırılmasında kullanılır, geri kalan %80'i atık enerjidir.",
      answers: ["20","yirmi"],
      hint: "Ders Kitapçığı Sayfa 14: Toplam enerjinin sad",
      explanation: "Ders Kitapçığı Sayfa 14: Toplam enerjinin sadece %20'si kayanın kırılmasında kullanılır."
    },
    {
      q: "Açık ocaklarda nakliye yolunda maksimum hız sınırı _______ km/h, ocak rampalarında ve ocak içi yollarda 20 km/h, kritik yerlerde ise 10 km/h'dir.",
      answers: ["40","kırk","kirk"],
      hint: "Ders Kitapçığı Sayfa 16: Nakliye yolunda maks",
      explanation: "Ders Kitapçığı Sayfa 16: Nakliye yolunda maksimum hız 40 km/h'dir."
    },
    {
      q: "Açık ocaklarda çalışmakta olan bir ekskavatöre veya hareketli iş makinesine hiçbir araç veya ekipman _______ metreden fazla yaklaşmamalıdır.",
      answers: ["30","otuz"],
      hint: "Ders Kitapçığı Sayfa 16: Çalışan ekskavatöre ",
      explanation: "Ders Kitapçığı Sayfa 16: Çalışan ekskavatöre 30 metreden fazla yaklaşılmaz."
    },
    {
      q: "Açık ocak yollarında bir kamyonun arkasından giden araç en az _______ metrelik bir emniyet takip mesafesi bırakmalıdır.",
      answers: ["50","elli"],
      hint: "Ders Kitapçığı Sayfa 16: Kamyon takip mesafes",
      explanation: "Ders Kitapçığı Sayfa 16: Kamyon takip mesafesi en az 50 metredir."
    },
    {
      q: "Açık ocaklarda yol işareti olmayan kavşaklarda geçiş önceliği _______ gelen aracındır.",
      answers: ["soldan","sol taraftan"],
      hint: "Ders Kitapçığı Sayfa 16: Yol işareti olmayan ",
      explanation: "Ders Kitapçığı Sayfa 16: Yol işareti olmayan kavşaklarda öncelik soldan gelenindir."
    },
    {
      q: "Bantlı konveyörlerin her iki yanında bakım ve güvenli geçiş için en az _______ cm genişliğinde açık alan bulunmalıdır.",
      answers: ["75","yetmiş beş","yetmis bes"],
      hint: "Ders Kitapçığı Sayfa 16: Bantların her iki ya",
      explanation: "Ders Kitapçığı Sayfa 16: Bantların her iki yanında 75 cm genişliğinde açık alan bulunmalıdır."
    },
    {
      q: "Elektrikli kapsüllerin erken ateşlenmesini önlemek için patlatma sahasının _______ metre yakınına kadar cep telefonu ve telsizler kapatılmalıdır.",
      answers: ["10","on"],
      hint: "Ders Kitapçığı Sayfa 17: Patlatma sahasının 1",
      explanation: "Ders Kitapçığı Sayfa 17: Patlatma sahasının 10 m yakınına kadar cep telefonu ve telsizler kapatılır."
    },
    {
      q: "Açık ocaklarda patlatma yapılmadan önce en az _______ metreden duyulabilecek uyarıcı siren sesi çalınmalıdır.",
      answers: ["750","yedi yüz elli","yediyüzelli"],
      hint: "Ders Kitapçığı Sayfa 17: Patlatma öncesinde e",
      explanation: "Ders Kitapçığı Sayfa 17: Patlatma öncesinde en az 750 m'den duyulabilecek siren çalınmalıdır."
    },
    {
      q: "Patlamamış bir lağım deliğindeki patlayıcı su veya basınçlı havayla çıkarılamıyorsa, deliğin _______ cm yanından paralel bir delik delinip doldurularak ateşlenir.",
      answers: ["20-30","20","30","yirmi","otuz"],
      hint: "Ders Kitapçığı Sayfa 12 & 17: Patlamamış deli",
      explanation: "Ders Kitapçığı Sayfa 12 & 17: Patlamamış deliğin 20-30 cm yanından paralel delik delinir."
    },
    {
      q: "Ateşlemeden ve aşırı yağıştan sonra işe başlamadan önce şev yüzeyinde ana kütleden ayrılmış düşebilecek taşların temizlenmesi için _______ (çatlak) kontrolü ve sökümü yapılmalıdır.",
      answers: ["kavlak","çatlak","catlak"],
      hint: "Ders Kitapçığı Sayfa 17 & 38: Şev yüzeyinde k",
      explanation: "Ders Kitapçığı Sayfa 17 & 38: Şev yüzeyinde kavlak (çatlak) kontrolü ve sökümü yapılır."
    },
    {
      q: "Mermer ocaklarının diğer açık ocaklardan en temel geometrik farkı, basamakların şev açısının _______ derece (dik) olması ve patlayıcı kullanılmamasıdır.",
      answers: ["90","doksan"],
      hint: "Ders Kitapçığı Sayfa 33: Mermer ocaklarında b",
      explanation: "Ders Kitapçığı Sayfa 33: Mermer ocaklarında basamakların şev açısı 90 derecedir (diktir)."
    },
    {
      q: "Mermer ocaklarında ana kütleden kesilerek devrilen büyük bloğun daha küçük bloklara bölünmesi işlemine _______ adı verilir.",
      answers: ["sayalama","ebatlama"],
      hint: "Ders Kitapçığı Sayfa 33: Devrilen bloğun daha",
      explanation: "Ders Kitapçığı Sayfa 33: Devrilen bloğun daha küçük bloklara bölünmesine sayalama denir."
    },
    {
      q: "Mermer ocaklarında yüzeyleri elmas telle kesilen bloğun devrilmesinde _______, hava yastığı, su yastığı veya kepçeli iş makineleri kullanılır.",
      answers: ["titano"],
      hint: "Ders Kitapçığı Sayfa 35: Blok devirmede titan",
      explanation: "Ders Kitapçığı Sayfa 35: Blok devirmede titano, hava yastığı veya su yastığı kullanılır."
    },
    {
      q: "Elmas tel kesme makinesi aynadan en az _______ metre uzağa yerleştirilmeli ve ray uzunluğu kesilecek yüzeyden %10 daha fazla olmalıdır.",
      answers: ["3","üç","uc"],
      hint: "Ders Kitapçığı Sayfa 36: Makine aynadan en az",
      explanation: "Ders Kitapçığı Sayfa 36: Makine aynadan en az 3 m uzağa yerleştirilmelidir."
    },
    {
      q: "Elmas tel kesme işleminde uygun tel hızı _______ m/sn olmalı ve telin homojen aşınması için tele burgu verilmelidir.",
      answers: ["36-40","36","40","36 - 40"],
      hint: "Ders Kitapçığı Sayfa 36: Uygun elmas tel hızı",
      explanation: "Ders Kitapçığı Sayfa 36: Uygun elmas tel hızı 36-40 m/sn'dir."
    },
    {
      q: "Maden işletmelerinde üretim, maden mühendisi olan bir _______ nezaretçinin denetiminde yapılır ve iş güvenliği uzmanının A sınıfı olması gerekir.",
      answers: ["daimi","fenni","teknik"],
      hint: "Ders Kitapçığı Sayfa 38: Üretim maden mühendi",
      explanation: "Ders Kitapçığı Sayfa 38: Üretim maden mühendisi olan daimi (fenni) nezaretçi denetiminde yapılır."
    },
    {
      q: "Maden İşyerlerinde İSG Yönetmeliğine göre işveren çalışmaya başlanılmadan önce _______ ve Güvenlik Dokümanı hazırlanmasını sağlar ve yılda en az 1 defa acil durum tatbikatı yapılır.",
      answers: ["sağlık","saglik"],
      hint: "Ders Kitapçığı Sayfa 40: Sağlık ve Güvenlik D",
      explanation: "Ders Kitapçığı Sayfa 40: Sağlık ve Güvenlik Dokümanı çalışmaya başlanılmadan önce hazırlanır."
    }
];
