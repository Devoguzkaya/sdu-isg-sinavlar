// Makine, Teçhizat ve Enerji Sistemlerinde İş Güvenliği (Prof. Dr. İbrahim ÜÇGÜL — 1-5. Hafta Orijinal Ders Sunumları)
export const makineTestThemes = [
  '1. Hafta: Sistem, Makine, Tesisat, Cihaz Kavramları ve Motorların Sınıflandırılması',
  '1. Hafta: İş Makineleri, Tesisat Türleri (Isıtma/Soğutma/Buhar), Ölçme ve SI Birimleri',
  '2. Hafta: Malzeme Bilimi, Madde, Element, Bileşik, Karışım ve Maddenin Halleri',
  '2. Hafta: Atomik Yapı, Atomlar Arası Bağlar (İyonik, Kovalent, Metalik, Van der Waals)',
  '2. Hafta: Mühendislik Malzemeleri (Metal, Seramik, Polimer, Kompozit), Deformasyon, Kırılma ve Muayene',
  '3. Hafta: Çözülemeyen Bağlama Elemanları (Lehim, Kaynak, Perçin ve Yapıştırıcı Bağlantılar)',
  '3. Hafta: Çözülebilen Bağlama Elemanları (Cıvata-Somun, Vida, Kama, Sıkı/Konik Geçme, Pim ve Perno)',
  '4. Hafta: Güç ve Hareket İletim Elemanları (Dişli Çarklar, Sürtünmeli Çarklar, Kayış-Kasnak ve Zincirler)',
  '5. Hafta: İmalat Yöntemleri — Döküm Teknolojisi (Model, Maça, Yolluk, Kum/Kokil/Basınçlı/Savurma Döküm)',
  '5. Hafta: Plastik Şekil Verme (Haddeleme, Dövme, Ekstrüzyon), Toz Metalurjisi ve Kaynak Yöntemleri'
];

export const makineConceptGroups = [
  {
    groupName: '1. Hafta: Sistem, Makine ve Tesisat Hiyerarşisi',
    items: [
      {
        opt: 'Makina',
        desc: '1. Hafta ders sunumuna göre; herhangi bir enerji türünü başka bir enerjiye dönüştürmek, belli bir güçten yararlanarak bir işi yapmak veya etki oluşturmak için çeşitli mekanik parçalardan oluşan düzenekler bütününe "Makina" denir.',
        q: 'Prof. Dr. İbrahim Üçgül\'ün ders notlarına göre; "Herhangi bir enerji türünü başka bir enerjiye dönüştürmek, belli bir güçten yararlanarak bir işi yapmak veya etki oluşturmak için çeşitli mekanik parçalardan oluşan düzenekler bütününe" ne ad verilir?'
      },
      {
        opt: 'Sistem',
        desc: 'İnsanın gücünü veya sezgilerini artıran araç ve gereçlere "Sistem" denir. Sistem; makina, tesisat ve cihaz olmak üzere üç ana gruba ayrılır.',
        q: 'İnsanın gücünü veya sezgilerini artıran araç ve gereçlerin genel adı olan ve "Makina, Tesisat, Cihaz" olmak üzere üç ana gruba ayrılan üst kavram hangisidir?'
      },
      {
        opt: 'Tesisat',
        desc: '1. Hafta sunumuna göre; malzeme çeviren, ileten veya biriktiren sistemlere "Tesisat" (buhar, ısıtma, soğutma, sıhhi tesisat vb.) denir.',
        q: 'Sistem sınıflandırmasında "Malzeme çeviren, ileten veya biriktiren sistemler" (buhar tesisatı, sıhhi tesisat, ısıtma-soğutma tesisatı vb.) hangi kavramla tanımlanır?'
      },
      {
        opt: 'Cihaz',
        desc: 'İnsanların bilgilerini, sezgilerini veya düşünce kapasitelerini artırmak, olayları gözlemek, denetlemek, yönlendirmek ve yönetmek amacıyla kullanılan sistemlere "Cihaz" denir.',
        q: 'İnsanların bilgilerini ve sezgilerini artırmak, olayları gözlemek ve denetlemek amacıyla kullanılan sistemlere (haberleşme, röntgen, ölçüm aygıtları vb.) ne ad verilir?'
      },
      {
        opt: 'Motorlar',
        desc: 'Makinalar enerji dönüştürücü olarak motorlar ve iş makinaları diye ikiye ayrılır. Motorlar; ısı, hidrolik, pnömatik veya elektrik enerjisini mekanik enerjiye çeviren makinelerdir.',
        q: 'Enerji dönüştürücü makinalar sınıflandırmasında; ısı, hidrolik veya elektrik gibi aldığı enerjiyi doğrudan "mekanik enerjiye" çeviren makinalara ne ad verilir?'
      },
      {
        opt: 'İş Makinaları',
        desc: 'İş makinaları; motordan aldığı mekanik enerjiyi yararlı işe dönüştüren makinelerdir (takım tezgahları, pompalar, vinçler, maden makineleri vb.).',
        q: 'Motordan aldığı mekanik enerjiyi yararlı işe dönüştüren makinalara (takım tezgahları, tekstil/maden makineleri, vinç, pompa, kompresör vb.) ne ad verilir?'
      }
    ]
  },
  {
    groupName: '1. Hafta: Termodinamik Tesisat ve Soğutma Çevrimi Elemanları',
    items: [
      {
        opt: 'Evaporatör (Buharlaştırıcı)',
        desc: 'Soğutma çevriminde soğutulacak ortamdan ısı çekerek soğutucu akışkanın sıvı fazdan buhar fazına geçmesini sağlayan ısı değiştirici elemandır.',
        q: 'Buhar sıkıştırmalı mekanik soğutma çevriminde, soğutulmak istenen ortamdan ısıyı çekerek akışkanın buharlaşmasını sağlayan temel çevrim elemanı hangisidir?'
      },
      {
        opt: 'Kompresör',
        desc: 'Evaporatörden gelen düşük basınç ve sıcaklıktaki doymuş buharı emerek mekanik güç yardımıyla yüksek basınç ve sıcaklığa sıkıştıran elemandır.',
        q: 'Soğutma tesisatında evaporatörden çıkan gaz hâlindeki soğutucu akışkanı emip basınç ve sıcaklığını yükselterek yoğuşturucuya basan eleman hangisidir?'
      },
      {
        opt: 'Kondanser (Yoğuşturucu)',
        desc: 'Kompresörden gelen kızgın ve yüksek basınçlı buhardan dış ortama (hava veya su) ısı atarak akışkanı yoğuşturan (sıvılaştıran) elemandır.',
        q: 'Soğutma tesisatında kompresörden gelen yüksek basınç ve sıcaklıktaki soğutucu akışkanın ısısını dış çevreye atarak akışkanı sıvı fazına dönüştüren eleman hangisidir?'
      },
      {
        opt: 'Kısılma (Genleşme) Vanası',
        desc: 'Yoğuşturucudan çıkan yüksek basınçlı sıvı akışkanın basıncını evaporatör basıncına düşürerek sıcaklığını aniden düşüren elemandır.',
        q: 'Soğutma tesisatında kondanserden çıkan yüksek basınçlı sıvı akışkanın basıncını düşürerek sıcaklığının düşmesini ve buharlaştırıcıya sevkini sağlayan eleman hangisidir?'
      },
      {
        opt: 'Ekonomizer',
        desc: 'Isı geri kazanımı amacıyla baca gazlarının veya ara kademelerin artık ısısını kullanarak besleme suyunu veya akışkanı önceden ısıtan elemandır.',
        q: 'Kazan ve termik tesisatlarda baca gazlarının artık ısısını kullanarak besleme suyunu ısıtan ve tesisat verimini artıran yardımcı ısı değiştirici eleman hangisidir?'
      },
      {
        opt: 'Kolektör (Dağıtıcı/Toplayıcı)',
        desc: 'Buhar veya su tesisatlarında ana hattan gelen akışkanı çoklu boru hatlarına dengeli dağıtan veya dönen akışkanı toplayan boru haznesidir.',
        q: 'Bina ve endüstriyel tesisatlarda akışkanı farklı hatlara düzenli dağıtmak veya dönüş hatlarını ana hatta toplamak amacıyla kullanılan hazneye ne ad verilir?'
      }
    ]
  },
  {
    groupName: '1. Hafta: Basınç, Boyut ve Devir Ölçüm Aletleri',
    items: [
      {
        opt: 'Manometre',
        desc: 'Kapalı kaplardaki veya boru tesisatlarındaki akışkan basıncını (efektif basınç) ölçmek için kullanılan göstergedir.',
        q: 'Kazan, kompresör tankı ve boru hatları gibi kapalı kaplardaki akışkanın basıncını ölçmede kullanılan cihaz hangisidir?'
      },
      {
        opt: 'Barometre',
        desc: 'Açık hava (atmosfer) basıncını ölçmek için kullanılan göstergedir.',
        q: 'Meteorolojik gözlemlerde ve açık ortamda atmosfer basıncını ölçmek amacıyla kullanılan cihaz aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Kumpas',
        desc: 'İş parçalarının iç çap, dış çap, derinlik ve kademe boyutlarını 0.1, 0.05 veya 0.02 mm hassasiyetle ölçen alettir.',
        q: 'Makine imalatında parçaların iç çap, dış çap ve derinlik ölçülerini sürgülü cetvel ve verniyer yardımıyla hassas ölçen alet hangisidir?'
      },
      {
        opt: 'Mikrometre',
        desc: 'Vidalı mil mekanizmasıyla kumpasa göre çok daha yüksek hassasiyette (0.01 mm veya 0.001 mm) kalınlık ve çap ölçümü yapan alettir.',
        q: 'Hassas talaşlı imalatta parça çapı ve sac kalınlığı gibi ölçüleri 0.01 mm ve altı hassasiyetle ölçebilen vidalı ölçme aleti hangisidir?'
      },
      {
        opt: 'Takometre',
        desc: 'Dönen miller, makine kasnakları ve motor şaftlarının dakikadaki devir sayısını (RPM) ölçen alettir.',
        q: 'Dönen miller, elektrik motorları ve türbinlerin açısal hızını veya birim zamandaki devir sayısını (RPM) ölçen cihaz hangisidir?'
      },
      {
        opt: 'Dinamometre',
        desc: 'Kuvvet veya motorların mil çıkışındaki tork (döndürme momenti) değerlerini ölçmek için kullanılan mekanik veya elektriksel cihazdır.',
        q: 'Bir motordan veya makine milinden elde edilen tork (döndürme momenti) ve mekanik kuvvet büyüklüğünü ölçen cihaz hangisidir?'
      }
    ]
  },
  {
    groupName: '1. Hafta: SI Birim Sistemi Standartları',
    items: [
      {
        opt: 'Watt (J/s)',
        desc: 'SI birim sisteminde birim zamanda yapılan iş veya aktarılan enerji miktarı olan Güç birimidir.',
        q: 'SI birim sisteminde birim zamanda yapılan iş veya aktarılan enerji olarak tanımlanan "Güç" büyüklüğünün birimi hangisidir?'
      },
      {
        opt: 'Joule (N·m)',
        desc: 'SI birim sisteminde bir newtonluk kuvvetin bir metrelik yolda yaptığı iş veya enerji birimidir.',
        q: 'SI birim sisteminde mekanik iş, kinetik/potansiyel enerji ve ısı miktarının standart türetilmiş birimi hangisidir?'
      },
      {
        opt: 'Pascal (N/m²)',
        desc: 'SI birim sisteminde bir metrekarelik alana dik olarak etki eden bir newtonluk kuvvetle oluşan Basınç ve Gerilme birimidir.',
        q: 'SI birim sisteminde birim alana düşen dik kuvvet olarak tanımlanan "Basınç ve Mekanik Gerilme" birimi hangisidir?'
      },
      {
        opt: 'Newton (kg·m/s²)',
        desc: 'Bir kilogramlık kütleye 1 m/s² ivme kazandıran Kuvvet birimidir.',
        q: 'Dinamik prensiplerine göre 1 kg kütleli bir cisme 1 m/s² ivme kazandırmak için gereken "Kuvvet" büyüklüğünün SI birimi nedir?'
      },
      {
        opt: 'Kelvin (K)',
        desc: 'SI birim sistemindeki 7 temel ana büyüklükten biri olan termodinamik Sıcaklık birimidir.',
        q: 'SI birim sisteminde yer alan 7 temel (türetilmemiş) büyüklükten biri olan standart "Termodinamik Sıcaklık" birimi hangisidir?'
      },
      {
        opt: 'Hertz (1/s)',
        desc: 'Periyodik dalga ve titreşim hareketlerinde saniyedeki titreşim sayısını ifade eden Frekans birimidir.',
        q: 'Titreşim, ses ve alternatif akım frekansını ifade eden ve saniyedeki periyot sayısı (1/s) anlamına gelen SI birimi hangisidir?'
      }
    ]
  },
  {
    groupName: '2. Hafta: Atomik Bağ Türleri ve Kimyasal Yapılar',
    items: [
      {
        opt: 'İyonik Bağ',
        desc: 'Metaller ile ametaller arasında elektron alışverişiyle oluşan, yüksek ergime noktasına sahip, sert ve kırılgan olan ancak katı hâlde elektriği iletmeyen güçlü birincil bağdır.',
        q: 'Metaller ile ametaller arasında elektron alışverişiyle oluşan, ergime noktası yüksek ancak katı hâlde elektriği iletmeyen kimyasal bağ türü hangisidir?'
      },
      {
        opt: 'Kovalent Bağ',
        desc: 'Ametal atomlarının değerlik elektronlarını ortaklaşa kullanmasıyla oluşan ve yöne bağlı son derece güçlü birincil bağdır (elmas, polimer zincirleri vb.).',
        q: 'Atomların değerlik elektronlarını ortaklaşa kullanmasıyla oluşan ve elmas gibi malzemelerde çok yüksek sertlik sağlayan yöne bağlı birincil bağ hangisidir?'
      },
      {
        opt: 'Metalik Bağ',
        desc: 'Pozitif metal iyonları ile aralarındaki serbest elektron denizi (gazı) çekimiyle oluşan, yüksek elektrik ve ısı iletkenliği sağlayan bağdır.',
        q: 'Pozitif yüklü iyonlar ile serbest elektron bulutu arasında kurulan ve malzemeye yüksek plastik şekil alma ile yüksek elektrik iletkenliği kazandıran bağ türü hangisidir?'
      },
      {
        opt: 'Van der Waals Bağı',
        desc: 'Moleküller veya atom grupları arasında zayıf elektrostatik çekim kuvvetleriyle oluşan ikincil fiziksel bağ türüdür.',
        q: 'Moleküller veya doymuş atom gruplarını zayıf elektrostatik dipol çekimlerle birbirine bağlayan ikincil bağ türü aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Hidrojen Bağı',
        desc: 'Hidrojen atomunun flor, oksijen veya azot gibi yüksek elektronegatif atomlarla oluşturduğu özel ve kuvvetli bir ikincil bağ türüdür.',
        q: 'Elektronegatifliği yüksek atomlara bağlı hidrojenin diğer komşu moleküllerle kurduğu, suyun kaynama noktasını yükselten ikincil bağ türü hangisidir?'
      }
    ]
  },
  {
    groupName: '2. Hafta: Mühendislik Malzeme Sınıfları',
    items: [
      {
        opt: 'Metaller ve Metalik Alaşımlar',
        desc: 'Kristal yapılı, serbest elektronlar sayesinde yüksek elektrik ve ısı iletkenliğine, sünekliğe ve tokluğa sahip inorganik malzemelerdir.',
        q: 'Kristal kafes yapısına sahip, yüksek elektrik ve ısıl iletkenliği, plastik şekil verilebilirliği ve tokluğu ile bilinen temel mühendislik malzeme grubu hangisidir?'
      },
      {
        opt: 'Seramikler ve Camlar',
        desc: 'Metal ile ametal bileşiklerinden oluşan, ergime noktası çok yüksek, kimyasal ve ısıl kararlılığı yüksek ancak çekmeye karşı kırılgan inorganik malzemelerdir.',
        q: 'İnorganik bileşiklerden oluşan, ergime sıcaklığı ve korozyon direnci çok yüksek, basma dayanımı iyi ancak çekmeye karşı son derece kırılgan ve yalıtkan malzeme sınıfı hangisidir?'
      },
      {
        opt: 'Polimer Malzemeler',
        desc: 'Karbon ve hidrojen esaslı büyük moleküllü organik bileşiklerden oluşan, hafif, korozyona dayanıklı, elektriksel yalıtkan ancak düşük sıcaklık dayanımlı malzemelerdir.',
        q: 'Karbon ve hidrojen esaslı makromoleküllerden oluşan, hafif, kimyasal etkilere dayanıklı ve iyi bir elektrik yalıtkanı olan ancak yüksek sıcaklığa dayanamayan malzeme sınıfı hangisidir?'
      },
      {
        opt: 'Kompozit Malzemeler',
        desc: 'İki veya daha fazla malzemenin makroskopik düzeyde birleştirilmesiyle üstün mekanik özellikler elde edilen karma malzemelerdir (kerpiç, fiberglas, CFRP).',
        q: 'Birbirinin zayıf yönlerini telafi etmek amacıyla iki veya daha fazla farklı malzemenin makroskopik düzeyde birleştirilmesiyle üretilen (kerpiç, karbon elyaf takviyeli polimer vb.) malzeme sınıfı hangisidir?'
      },
      {
        opt: 'Yarıiletken Malzemeler',
        desc: 'Elektrik iletkenliği metaller ile yalıtkanlar arasında bulunan ve elektronik devre elemanlarının temelini oluşturan malzemelerdir (Si, Ge, GaAs).',
        q: 'Elektrik iletkenliği yalıtkanlar ile iletkenler arasında yer alan ve diyot, transistör, mikroçip üretiminde kullanılan malzeme grubu hangisidir?'
      }
    ]
  },
  {
    groupName: '2. Hafta: Deformasyon, Kırılma ve Malzeme Muayenesi',
    items: [
      {
        opt: 'Elastik Deformasyon',
        desc: 'Uygulanan gerilme ortadan kalktığında malzemenin eski boyut ve geometrisine tamamen geri döndüğü geçici şekil değişimidir.',
        q: 'Malzemeye uygulanan dış yük ortadan kaldırıldığında atomların orijinal konumuna döndüğü ve kalıcı hasar bırakmayan geçici şekil değişimine ne ad verilir?'
      },
      {
        opt: 'Plastik Deformasyon',
        desc: 'Elastiklik sınırı (akma sınırı) aşıldığında malzemenin kristal kafesindeki dislokasyon hareketiyle meydana gelen geri dönüşsüz kalıcı şekil değişimidir.',
        q: 'Malzemenin akma sınırının aşılmasıyla meydana gelen ve kuvvet kaldırılsa dahi geri dönmeyen kalıcı şekil değişimine ne ad verilir?'
      },
      {
        opt: 'Gevrek Kırılma',
        desc: 'Gözle görülür plastik deformasyon olmadan, düşük toklukla ve akma gerilmesinden küçük gerilmelerde çatlağın çok hızlı ilerlemesiyle ani oluşan kırılmadır.',
        q: 'Özellikle düşük sıcaklıklarda çok az veya hiç plastik deformasyon göstermeden, düşük toklukla ve akma sınırından düşük gerilmelerde aniden gerçekleşen kırılma türü hangisidir?'
      },
      {
        opt: 'Sünek Kırılma',
        desc: 'Kırılma öncesinde yüksek plastik deformasyon, boyun verme ve koni-çanak morfolojisi sergileyen, yüksek enerji yutan kırılma türüdür.',
        q: 'Kopma öncesinde belirgin boyun verme ve yüksek plastik deformasyon sergileyen, parçalanması için yüksek enerji gerektiren güvenli kırılma türü hangisidir?'
      },
      {
        opt: 'Yorulma (Fatigue) Hasarı',
        desc: 'Statik akma gerilmesinden çok daha küçük dinamik ve tekrarlı yükler altında mikroskobik çatlakların ilerleyerek aniden kopmaya yol açmasıdır.',
        q: 'Malzemenin statik çekme dayanımının altındaki değişken veya tekrarlı gerilmeler altında zamanla çatlak ilerlemesiyle aniden kopması olayına ne ad verilir?'
      },
      {
        opt: 'Tahribatsız Muayene (NDT)',
        desc: 'Parçanın mekanik bütünlüğüne ve kullanım amacına zarar vermeden iç bünye ve yüzey süreksizliklerini tespit eden yöntemlerdir (Radyografi, Ultrasonik, Manyetik, Sıvı penetrant vb.).',
        q: 'Hayati makine veya uçak parçalarının fiziki yapısına hiçbir zarar vermeden iç ve yüzey kusurlarını tespit etmeye yarayan yöntem grubuna ne ad verilir?'
      }
    ]
  },
  {
    groupName: '3. Hafta: Çözülemeyen (Sökülemeyen) Bağlama Elemanları',
    items: [
      {
        opt: 'Kaynak Bağlantısı',
        desc: 'Birleştirilecek metal parçaların ısı veya basınç etkisiyle yerel olarak eritilerek veya plastik kıvama getirilerek süreklilik sağlayacak biçimde birleştirilmesidir.',
        q: 'Malzemelerin ısı veya basınç yardımıyla atomik süreklilik sağlayacak şekilde birleştirildiği, sökülürken parçanın tahrip olduğu en yaygın çözülemeyen bağlantı yöntemi hangisidir?'
      },
      {
        opt: 'Lehimleme Bağlantısı',
        desc: 'Ana parçalar ergitilmeden, ana metallerden daha düşük sıcaklıkta ergiyen ilave tel yardımıyla kristal yapı bozulmadan yapılan birleştirmedir.',
        q: 'Birleştirilecek metal parçaların ergitilmeden, kendilerinden daha düşük sıcaklıkta ergiyen ilave bir dolgu metaliyle birleştirildiği ve ana malzemenin kristal yapısının değişmediği yöntem hangisidir?'
      },
      {
        opt: 'Perçin Bağlantısı',
        desc: 'Birleşme yerinde ergime ve ısıl gerilme oluşturmayan, rijit olmadığı için dinamik ve titreşimli yüklere dayanıklı olan, farklı malzemeleri de bağlayabilen çözülemeyen elemandır.',
        q: 'Birleşme bölgesinde ısıl gerilme oluşturmayan, elastik yapısıyla titreşimleri sönümleyen ve uçak gövdelerinde metal-deri/kompozit birleştirmelerinde kullanılan çözülemeyen eleman hangisidir?'
      },
      {
        opt: 'Yapıştırıcı Bağlantılar',
        desc: 'Ana malzemede delik veya çentik açılmadığından kesit zayıflaması yapmayan, korozyon sızdırmazlığı sağlayan fakat 80-120°C üzerinde zayıflayan adhezyon bağlantısıdır.',
        q: 'Ana malzemede cıvata veya perçin gibi delik açılmasını gerektirmediği için kesit zayıflatmayan, ancak 80°C-120°C üzerindeki sıcaklıklarda mukavemeti belirgin azalan bağlantı türü hangisidir?'
      },
      {
        opt: 'Sıkı Geçme (Pres) Bağlantısı',
        desc: 'Mil dış çapının delik çapından büyük imal edilip presle veya sıcaklık farkıyla geçirilmesi sonucu yüzeyler arası yüksek sürtünmeyle çözülemez moment ileten bağlantıdır.',
        q: 'Mil çapının delik çapından büyük seçilmesiyle montaj sonrasında arayüzde oluşan yüksek basınç ve sürtünme sayesinde ilave parça olmadan moment ileten çözülemeyen bağlantı hangisidir?'
      }
    ]
  },
  {
    groupName: '3. Hafta: Çözülebilen Bağlama Elemanları',
    items: [
      {
        opt: 'Cıvata ve Somun Bağlantısı',
        desc: 'Dış vida (cıvata) ve iç vida (somun) yardımıyla parçalara hasar vermeden istenildiği kadar sökülüp takılabilen en temel çözülebilen bağlama elemanıdır.',
        q: 'Makine parçalarına ve elemanın kendisine hasar vermeden defalarca sökülüp takılabilen, dış vida ve iç vida çiftinden oluşan temel çözülebilen bağlama elemanı hangisidir?'
      },
      {
        opt: 'Boyuna ve Enine Kamalar',
        desc: 'Mil ile göbek arasında moment iletmek amacıyla mil eksenine paralel (boyuna/feder) veya dik (enine) yerleştirilen prizmatik elemanlardır.',
        q: 'Mil ile kasnak veya dişli göbeği arasında moment iletmek amacıyla mil eksenine paralel veya dik olarak açılan kanala yerleştirilen çözülebilen eleman hangisidir?'
      },
      {
        opt: 'Pim Bağlantıları',
        desc: 'Parçaları birbirine bağlamanın yanı sıra hassas merkezleme ve aşırı yük durumunda kırılarak diğer pahalı parçaları koruyan emniyet sigortası görevi gören elemanlardır.',
        q: 'Çözülebilen bağlantılarda iki parçanın birbirine göre hassas konumlandırılmasını sağlayan ve aşırı kesme yükünde kırılarak emniyet sigortası işlevi gören eleman hangisidir?'
      },
      {
        opt: 'Perno Bağlantıları',
        desc: 'Çatal ve mafsallı birleştirmelerde iki parçanın eksenel doğrultuda birbirine göre serbestçe dönmesine izin veren silindirik bağlama elemanıdır.',
        q: 'Makine mafsallarında ve çatal bağlantılarında, birleştirilen parçaların birbirine göre serbestçe dönme hareketi yapmasına izin veren silindirik bağlama elemanı hangisidir?'
      },
      {
        opt: 'Konik Geçme Bağlantısı',
        desc: 'Konik mil ucunun konik delikli göbeğe eksenel somun kuvvetiyle sıkıştırılmasıyla oluşan radyal temas basıncıyla çalışan sökülebilir bağlantıdır.',
        q: 'Konik yüzeylerin eksenel bir kuvvetle birbirine bastırılmasıyla oluşan radyal temas sürtünmesi sayesinde yüksek moment ileten çözülebilen bağlantı hangisidir?'
      },
      {
        opt: 'Setskur (Ayar Vidası)',
        desc: 'Başsız yapıda, ucu göbekteki mile basarak hafif torkların iletilmesini veya parçaların eksenel kaymasını önleyen tespit vidasıdır.',
        q: 'Genellikle kafa kısmı bulunmayan ve mil üzerindeki bir bileziğin veya kasnağın eksenel olarak kaymasını önlemek için sıkılan tespit vidasına ne ad verilir?'
      }
    ]
  },
  {
    groupName: '4. Hafta: Güç ve Hareket İletim Mekanizmaları',
    items: [
      {
        opt: 'Alın Dişli Çarklar (Düz/Helisel)',
        desc: 'Eksenleri birbirine paralel olan miller arasında kayma olmaksızın pozitif ve sabit çevrim oranıyla güç ve hareket ileten dişli grubudur.',
        q: 'Birbirine paralel iki mil arasında kayma olmaksızın sabit çevrim oranı ve yüksek mekanik verimle güç ve hareket ileten dişli çark türü hangisidir?'
      },
      {
        opt: 'Konik Dişli Çarklar',
        desc: 'Eksenleri bir noktada kesişen (genellikle 90 derece dik açı oluşturan) miller arasında hareket ileten konik geometrili dişlilerdir.',
        q: 'Eksenleri birbiriyle kesişen (genellikle 90 derecelik açı yapan) miller arasında güç ve hareket iletimi sağlayan dişli çark türü hangisidir?'
      },
      {
        opt: 'Kremayer ve Pinyon Dişli',
        desc: 'Diş sayısı ve yarıçapı sonsuz olan düz bir çubuk dişli ile pinyon dişlinin çalışması sonucu dairesel dönme hareketini doğrusal öteleme hareketine çeviren mekanizmadır.',
        q: 'Dairesel dönme hareketini düzgün doğrusal öteleme hareketine çevirmek için silindirik dişliyle birlikte çalışan düz çubuk dişli mekanizması hangisidir?'
      },
      {
        opt: 'Kayış-Kasnak Mekanizması',
        desc: 'Büyük eksen mesafelerinde elastik kayışla çalışan, darbeleri sönümleyen ancak %1-2 kısmi kayma nedeniyle sabit çevrim oranı sağlayamayan mekanizmadır.',
        q: 'Elastik yapısı sayesinde ani darbeleri ve titreşimleri sönümleyen, ancak %1-2 oranındaki kısmi kayma sebebiyle kesin ve sabit bir çevrim oranı sağlayamayan mekanizma hangisidir?'
      },
      {
        opt: 'Zincir Mekanizması',
        desc: 'Orta eksen mesafelerinde kayma yapmadan (%96-98 verimle) şekil bağıyla güç ileten, yüksek sıcaklıklarda çalışabilen fakat yağlama gerektiren mekanizmadır.',
        q: 'Kayış-kasnak mekanizmasının aksine kayma yapmadan pozitif şekil bağıyla güç ileten, yüksek sıcaklıklarda çalışabilen fakat periyodik yağlama gerektiren mekanizma hangisidir?'
      },
      {
        opt: 'Sürtünmeli Çarklar',
        desc: 'Birbirine bastırılan iki çarkın yüzeyleri arasındaki sürtünmeyle sessiz ve kademesiz hareket ileten ancak aşırı yükte kayan mekanizmadır.',
        q: 'Birbirine bastırılan çarkların yüzey sürtünmesiyle güç ileten, sessiz çalışan ancak yüksek yük altında kayma yapabilen mekanizma hangisidir?'
      }
    ]
  },
  {
    groupName: '5. Hafta: Döküm Teknolojisi ve Kalıplama Elemanları',
    items: [
      {
        opt: 'Model',
        desc: 'Dökülecek parçanın kalıp içinde boşluğunu oluşturmak amacıyla ahşap, metal veya plastikten yapılan ve katılaşma büzülmesi için çekme payı eklenen kopyadır.',
        q: 'Döküm teknolojisinde, kalıp kumu içinde parçanın dış geometrisine uygun boşluk oluşturmak için kullanılan ve çekme payı verilen parça kopyasına ne ad verilir?'
      },
      {
        opt: 'Maça',
        desc: 'Döküm parçalarının içi boş veya delik çıkması istenen kısımlarını oluşturmak için kumdan imal edilip kalıp boşluğuna yerleştirilen özel gövdedir.',
        q: 'Döküm parçalarında oyuk, delik veya kanal gibi iç boşlukların elde edilmesi amacıyla kalıp boşluğuna yerleştirilen kum gövdeye ne ad verilir?'
      },
      {
        opt: 'Yolluk ve Besleyici',
        desc: 'Ergimiş metalin kalıp boşluğuna türbülanssız dolmasını sağlayan kanal sistemine yolluk; katılaşma sırasındaki hacimsel büzülmeyi sıvı metalle besleyen hazneye besleyici denir.',
        q: 'Dökümde ergimiş metalin kalıp boşluğuna düzgünce akmasını sağlayan kanal sistemi ile katılaşma büzülmesini telafi eden ek rezerv haznesi hangisidir?'
      },
      {
        opt: 'Kum Kalıba Döküm',
        desc: 'Kalıbın refrakter kum ve bağlayıcılarla tek seferlik üretildiği, hemen hemen tüm metallere uygulanabilen en yaygın ve ekonomik geleneksel döküm yöntemidir.',
        q: 'Her döküm sonrasında kalıbın bozularak parçanın çıkarıldığı, hemen hemen tüm metallerin dökümüne uygun en yaygın geleneksel döküm yöntemi hangisidir?'
      },
      {
        opt: 'Kokil (Metal Kalıp) Döküm',
        desc: 'Kalıbın çelik veya dökme demirden kalıcı olarak yapıldığı, erimiş metalin yerçekimi etkisiyle doldurulduğu seri döküm yöntemidir.',
        q: 'Kalıp malzemesi olarak refrakter kum yerine defalarca kullanılabilen çelik veya dökme demir metal kalıpların kullanıldığı seri döküm yöntemi hangisidir?'
      },
      {
        opt: 'Savurma (Merkezkaç) Döküm',
        desc: 'Kendi ekseni etrafında hızla dönen kalıba dökülen metalin merkezkaç kuvvetiyle kalıp cidarına yayılmasıyla maçasız dikişsiz boru ve silindir üretilen yöntemdir.',
        q: 'Ergimiş metalin hızla dönen bir kalıba dökülerek merkezkaç kuvveti etkisiyle kalıp cidarına yapışmasıyla maça kullanmadan dikişsiz silindirik parça üreten döküm yöntemi hangisidir?'
      }
    ]
  },
  {
    groupName: '5. Hafta: Plastik Şekil Verme ve Kaynak İmalat Yöntemleri',
    items: [
      {
        opt: 'Haddeleme',
        desc: 'Kütle şekillendirme yöntemlerinden olup malzemenin birbirine zıt yönde dönen iki merdane arasından geçirilerek kesitinin daraltılması ve boyunun uzatılması işlemidir.',
        q: 'Malzemenin birbirine zıt yönde dönen iki silindirik merdane arasından geçirilerek kesitinin küçültülüp boyunun uzatıldığı (sac, ray, profil üretimi) plastik şekil verme yöntemi hangisidir?'
      },
      {
        opt: 'Dövme',
        desc: 'Isıtılmış metal kütüğün açık veya kapalı kalıplar arasında pres veya çekiç darbeleriyle plastik deformasyona uğratılarak tokluğu yüksek parçalar üretilmesidir.',
        q: 'Kalıp boşluğunda çekiç veya pres darbeleriyle malzemenin plastik deformasyona zorlanarak yüksek mekanik tokluğa sahip krank mili, biyel kolu vb. üretildiği yöntem hangisidir?'
      },
      {
        opt: 'Ekstrüzyon',
        desc: 'Kovan içerisindeki ısıtılmış metal kütüğün bir ıstampa yardımıyla dar bir kalıp ağzından zorla geçirilerek sabit en kesitli uzun profiller elde edilmesidir.',
        q: 'Isıtılmış metal kütüğün hidrolik pres yardımıyla kalıp açıklığından itilerek çıkarılması suretiyle alüminyum profil ve boru gibi sabit kesitli parçaların üretildiği yöntem hangisidir?'
      },
      {
        opt: 'Toz Metalurjisi (Sinterleme)',
        desc: 'İnce metal tozlarının kalıpta yüksek basınçla preslenmesi ve ardından ana metalin ergime sıcaklığının altındaki fırında partiküllerin kaynaşması (sinterleme) ile parça üretilmesidir.',
        q: 'Metal tozlarının kalıpta preslendikten sonra ergime sıcaklığının altındaki bir sıcaklıkta ısıl işleme tabi tutularak atomik difüzyonla birbirine kaynaması (sinterleme) esasına dayanan yöntem hangisidir?'
      },
      {
        opt: 'TIG (Argon) Kaynağı',
        desc: 'Erime noktası çok yüksek olan Tungsten elektrot ile iş parçası arasında ark oluşturan ve erimeyen elektrot kullanan gaz altı kaynak yöntemidir.',
        q: 'Kaynak esnasında erimeyen "Tungsten" elektrot ve koruyucu asal gaz (argon) kullanılarak yapılan hassas gaz altı kaynak yöntemi hangisidir?'
      },
      {
        opt: 'Sürtünme (Katı Hâl) Kaynağı',
        desc: 'Birleştirilecek parçalardan birinin döndürülerek diğerine basınçla sürtünmesi sonucu açığa çıkan sürtünme ısısıyla eritme olmaksızın yapılan katı hâl birleştirme yöntemidir.',
        q: 'Parçaların birbirine sürtünmesiyle oluşan mekanik ısı ve ardından uygulanan dövme basıncı ile ana metaller eritilmeden yapılan katı hâl kaynak yöntemi hangisidir?'
      }
    ]
  }
];

export const makineExtraFill = [
  { q: 'Herhangi bir enerji türünü başka bir enerjiye dönüştürmek veya belli bir güçten yararlanarak bir işi yapmak için çeşitli mekanik parçalardan oluşan düzenekler bütününe _______ denir.', a: 'makina', alts: ['makine'], exp: '1. Hafta ders sunumu ve örnek soru 1: Bu düzenekler bütününe makina denir.' },
  { q: 'İnsanın gücünü veya sezgilerini artıran araç ve gereçlere _______ denir ve bu kavram makina, tesisat ve cihaz olmak üzere üç gruba ayrılır.', a: 'sistem', alts: [], exp: '1. Hafta ders sunumu: Sistem; makina, tesisat ve cihaz olmak üzere üçe ayrılır.' },
  { q: 'Sistem sınıflandırmasında malzeme çeviren, ileten veya biriktiren sistemlere (buhar, ısıtma, soğutma, sıhhi vb.) _______ adı verilir.', a: 'tesisat', alts: [], exp: 'Malzeme çeviren, ileten veya biriktiren sistemlere tesisat denir.' },
  { q: 'İnsanların bilgilerini ve sezgilerini artırmak, olayları gözlemek, denetlemek ve ölçmek amacıyla kullanılan sistemlere _______ denir.', a: 'cihaz', alts: [], exp: 'Haberleşme, röntgen, ölçüm aletleri gibi sistemlere cihaz denir.' },
  { q: 'Enerji dönüştürücü makinalardan; ısı, hidrolik veya elektrik enerjisini mekanik enerjiye çeviren makinalara _______ denir.', a: 'motor', alts: ['motorlar', 'kuvvet makinesi'], exp: 'Motorlar aldığı enerjiyi mekanik enerjiye çeviren makinalardır.' },
  { q: 'Motordan aldığı mekanik enerjiyi yararlı işe dönüştüren makinalara (takım tezgahları, vinçler, pompalar vb.) _______ makinaları denir.', a: 'iş', alts: ['is', 'iş makinası', 'iş makinesi'], exp: 'Mekanik enerjiyi yararlı işe dönüştüren makinalara iş makinaları denir.' },
  { q: 'Soğutma tesisatının dört temel elemanı: Kompresör, yoğuşturucu (kondanser), kısılma vanası ve _______ (evaporatör) elemanıdır.', a: 'buharlaştırıcı', alts: ['buharlastirici', 'evaporatör'], exp: '1. Hafta örnek soru 3: Kompresör, yoğuşturucu, kısılma vanası ve buharlaştırıcı.' },
  { q: 'Kapalı kaplardaki basıncı ölçen cihazlara _______, açık hava (atmosfer) basıncını ölçen cihazlara ise barometre denir.', a: 'manometre', alts: [], exp: '1. Hafta örnek soru 4: Basınç ölçüm cihazı manometredir.' },
  { q: 'SI birim sisteminde iş veya enerjinin birim zamandaki değişimi olan Güç birimi _______ (Watt) olarak ifade edilir.', a: 'j/s', alts: ['watt', 'joule/saniye'], exp: '1. Hafta örnek soru 6: Güç birimi J/s (Watt) veya kW / BG\'dir.' },
  { q: 'Maddelerin mevcut durma hâlini ya da hareket konumunu koruma eğilimine _______ denir ve büyüklüğü kütle ile doğru orantılıdır.', a: 'eylemsizlik', alts: ['atalet'], exp: '2. Hafta Malzeme Bilgisi: Eylemsizlik maddenin kütlesiyle orantılıdır.' },
  { q: 'Katı hâldeki bir maddenin sıvı hâle geçmeden doğrudan gaz hâline geçmesine _______ adı verilir.', a: 'süblimleşme', alts: ['sublimlesme'], exp: 'Katıdan doğrudan gaza geçiş süblimleşmedir.' },
  { q: 'Atom çekirdeğinde yer alan proton ve nötron sayılarının toplamı o atomun _______ numarasını verir.', a: 'kütle', alts: ['kutle'], exp: 'Proton + Nötron sayısı = Kütle numarasıdır.' },
  { q: 'Metaller ile ametaller arasında elektron alışverişiyle oluşan, yüksek ergime noktasına sahip, sert ve kırılgan olan ancak katı hâlde elektriği iletmeyen bağ türüne _______ bağ denir.', a: 'iyonik', alts: [], exp: '2. Hafta örnek soru 3: İyonik bağ katı hâlde elektriği iletmez.' },
  { q: 'Moleküller veya atom gruplarını zayıf elektrostatik çekimlerle birbirine bağlayan ikincil bağ türüne _______ bağı denir.', a: 'van der waals', alts: ['vanderwaals', 'van der wals'], exp: '2. Hafta örnek soru 4: Zayıf elektrostatik ikincil bağ Van der Waals bağıdır.' },
  { q: 'Cam, fayans, porselen, oksitler ve karbürler gibi yüksek ergime sıcaklığına ve yüksek ısıl/kimyasal kararlılığa sahip ancak kırılgan ve yalıtkan olan inorganik malzemelere _______ denir.', a: 'seramik', alts: ['seramikler'], exp: 'Seramikler yüksek ısıl/kimyasal kararlılığa sahip ancak kırılgan malzemelerdir.' },
  { q: 'İki ya da daha fazla malzemenin makroskopik düzeyde birleştirilmesiyle elde edilen malzemelere _______ malzeme denir; tarihteki en eski ve basit örneği çamur ve samandan yapılan kerpiçtir.', a: 'kompozit', alts: ['karma'], exp: 'Çamur ve samandan oluşan kerpiç en basit kompozit malzemedir.' },
  { q: 'Uygulanan kuvvet ortadan kalktığında malzemenin eski boyutuna geri döndüğü geçici şekil değişimine _______ deformasyon denir.', a: 'elastik', alts: ['esnek'], exp: 'Kuvvet kalkınca geri dönen şekil değişimi elastik deformasyondur.' },
  { q: 'Uygulanan gerilmenin elastiklik sınırını aşması sonucunda malzemede meydana gelen kalıcı şekil değişimine _______ deformasyon denir.', a: 'plastik', alts: ['kalıcı'], exp: 'Kalıcı şekil değişimine plastik deformasyon denir.' },
  { q: 'Çok az veya hiç plastik deformasyon olmadan, düşük toklukla ve akma gerilmesinden küçük gerilmelerde çatlağın hızla ilerlemesiyle oluşan tehlikeli kırılma türüne _______ kırılma denir.', a: 'gevrek', alts: [], exp: '2. Hafta örnek soru 5: Gevrek kırılma akma gerilmesinden küçük gerilmelerde ani oluşur.' },
  { q: 'Servis altındaki parçaların fiziki yapısına hiçbir zarar vermeden iç bünye ve dış yüzey süreksizliklerini tespit etmeye yarayan yöntemlere _______ muayene yöntemleri denir.', a: 'tahribatsız', alts: ['tahribatsiz', 'ndt'], exp: 'Parçaya zarar vermeden yapılan kontrole tahribatsız muayene denir.' },
  { q: 'Sökülürken tahrip olduğu için tekrar kullanılamayan perçin, lehim, kaynak ve yapıştırıcı gibi elemanlara _______ bağlama elemanları denir.', a: 'çözülemeyen', alts: ['cozulemeyen', 'sökülemeyen'], exp: '3. Hafta: Perçin, lehim, kaynak ve yapıştırıcı çözülemeyen bağlama elemanlarıdır.' },
  { q: 'İki metal parçanın kendilerinden daha düşük sıcaklıkta ergiyen ilave bir metal alaşımı yardımıyla ana metaller ergitilmeden birleştirilmesi işlemine _______ denir.', a: 'lehimleme', alts: ['lehim'], exp: 'Ana metal ergimeden düşük sıcaklıkta ergiyen ilave metalle yapılan birleştirme lehimlemedir.' },
  { q: 'Aynı veya farklı iki malzemenin metalik olmayan bir ara malzeme (zamk) ile adhezyon ve kohezyon kuvvetleri sayesinde çözülemeyecek şekilde birleştirilmesine _______ bağlantısı denir.', a: 'yapıştırıcı', alts: ['yapistirici', 'yapıştırma'], exp: 'Zamk ile yapılan birleştirme yapıştırıcı bağlantısıdır.' },
  { q: 'Vida bağlantılarında dış vidaya cıvata, iç vidaya ise _______ adı verilir.', a: 'somun', alts: [], exp: 'Cıvata dış vida, somun iç vidadır.' },
  { q: 'Mil ile göbek arasında moment iletmek amacıyla kullanılan ve mil eksenine paralel (boyuna/feder) veya dik (enine) monte edilen prizmatik elemanlara _______ denir.', a: 'kama', alts: ['kamalar', 'feder'], exp: 'Mil-göbek arasında şekil veya kuvvet bağı kuran prizmatik eleman kamadır.' },
  { q: 'Milin dış çapının göbeğin delik çapından biraz büyük işlenerek basınçla veya ısıtma/soğutma ile monte edildiği çözülebilen bağlantıya _______ geçme denir.', a: 'sıkı', alts: ['siki', 'pres'], exp: 'Çap farkı ve yüzey basıncıyla moment ileten bağlantı sıkı geçmedir.' },
  { q: 'Dönme-dönme hareket iletim mekanizmalarında döndüren elemanın hızının döndürülen elemanın hızına oranına _______ oranı denir.', a: 'çevrim', alts: ['cevrim', 'iletim'], exp: '4. Hafta: Dönme-dönme elemanlarının en önemli özelliği çevrim oranıdır.' },
  { q: 'Eksenleri kesişen iki mil arasında hareket ileten dişlilere _______ dişli, dönme hareketini doğrusal harekete çeviren düz çubuk dişliye ise kremayer dişli denir.', a: 'konik', alts: [], exp: 'Kesişen eksenli dişliler konik dişlilerdir.' },
  { q: 'Elastik bir kayış yardımıyla kasnaklar arasında hareket ileten, darbeleri sönümleyen ancak %1-%2 oranında kısmi kayma yapan mekanizmaya _______ mekanizması denir.', a: 'kayış-kasnak', alts: ['kayis-kasnak', 'kayış kasnak'], exp: '4. Hafta: Kayış-kasnak mekanizmasında %1-2 kısmi kayma vardır.' },
  { q: 'Dökümde kalıp boşluğunu oluşturmak için kullanılan ve katılaşma sırasındaki hacimsel büzülmeyi karşılamak üzere boyutlarına "çekme payı" eklenen kopyaya _______ denir.', a: 'model', alts: [], exp: '5. Hafta: Kalıp boşluğunu oluşturan parçaya model denir.' },
  { q: 'Döküm parçalarının boş (delik veya oyuk) çıkması istenen iç kısımlarını oluşturmak için kalıp içine yerleştirilen kumdan yapılmış özel parçaya _______ denir.', a: 'maça', alts: ['maca'], exp: '5. Hafta: İç boşlukları oluşturmak için kumdan yapılan parçaya maça denir.' },
  { q: 'Kalıp malzemesi olarak kum yerine çelik veya dökme demir gibi metal kalıpların kullanıldığı döküm yöntemine _______ döküm denir.', a: 'kokil', alts: ['metal kalıba'], exp: '5. Hafta: Metal kalıba döküm yöntemine kokil döküm adı verilir.' },
  { q: 'Parçaların birbirine zıt yönde dönen iki merdane arasından geçirilerek kesitinin daraltılıp boyunun uzatıldığı plastik şekil verme yöntemine _______ denir.', a: 'haddeleme', alts: [], exp: '5. Hafta: İki merdane arasından geçirerek şekillendirme haddelemedir.' },
  { q: 'Metal tozlarının kalıpta yüksek basınçla (300-800 MPa) preslendikten sonra ergime sıcaklığının altında fırınlanarak mukavemet kazandırılması işlemine _______ denir.', a: 'sinterleme', alts: ['toz metalurjisi'], exp: '5. Hafta: Preslenen toz parçaların ısıl işlemle bağlanması sinterlemedir.' },
  { q: 'Argon (TIG) kaynağında erime noktası çok yüksek olduğu için kaynak esnasında erimeyen _______ elektrot kullanılır.', a: 'tungsten', alts: ['wolfram'], exp: '5. Hafta: Argon (TIG) kaynağında erimeyen Tungsten elektrot kullanılır.' }
];
