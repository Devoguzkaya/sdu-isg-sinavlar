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
    groupName: '1. Hafta: Sistem, Makine, Tesisat, Cihaz, Ölçme ve SI Birimleri (Prof. Dr. İbrahim Üçgül Sunumu)',
    items: [
      {
        opt: 'Makina (Enerji dönüştürerek iş veya etki oluşturan mekanik düzenek)',
        desc: '1. Hafta ders sunumuna göre; herhangi bir enerji türünü başka bir enerjiye dönüştürmek, belli bir güçten yararlanarak bir işi yapmak veya etki oluşturmak için çeşitli mekanik parçalardan oluşan düzenekler bütününe "Makina" denir.',
        q: 'Prof. Dr. İbrahim Üçgül\'ün 1. hafta ders notlarına göre; "Herhangi bir enerji türünü başka bir enerjiye dönüştürmek, belli bir güçten yararlanarak bir işi yapmak veya etki oluşturmak için çeşitli mekanik parçalardan oluşan düzenekler bütününe" ne ad verilir?'
      },
      {
        opt: 'Sistem (Makina, Tesisat ve Cihaz olmak üzere 3 gruba ayrılır)',
        desc: 'İnsanın gücünü veya sezgilerini artıran araç ve gereçlere "Sistem" denir. Sistem; makina, tesisat ve cihaz olmak üzere üç ana gruba ayrılır.',
        q: 'İnsanın gücünü veya sezgilerini artıran araç ve gereçlerin genel adı olan ve "Makina, Tesisat, Cihaz" olmak üzere üç ana gruba ayrılan kavram hangisidir?'
      },
      {
        opt: 'Tesisat (Malzeme çeviren, ileten veya biriktiren sistemler)',
        desc: '1. Hafta sunumuna göre; malzeme çeviren, ileten veya biriktiren sistemlere "Tesisat" (buhar, ısıtma, soğutma, sıhhi, klima tesisatları vb.) denir.',
        q: 'Sistem sınıflandırmasında "Malzeme çeviren, ileten veya biriktiren sistemler" (buhar tesisatı, sıhhi tesisat, ısıtma-soğutma tesisatı vb.) hangi kavramla tanımlanır?'
      },
      {
        opt: 'Cihaz (İnsanların bilgilerini ve sezgilerini artıran, gözleme/denetleme yapan sistemler)',
        desc: 'İnsanların bilgilerini, sezgilerini veya düşünce kapasitelerini artırmak, olayları gözlemek, denetlemek, yönlendirmek ve yönetmek amacıyla kullanılan sistemlere "Cihaz" (röntgen, haberleşme, ölçme cihazları vb.) denir.',
        q: 'İnsanların bilgilerini ve sezgilerini artırmak, olayları gözlemek ve denetlemek amacıyla kullanılan sistemlere (haberleşme cihazları, röntgen cihazları, ölçüm aletleri vb.) ne ad verilir?'
      },
      {
        opt: 'Motorlar (Aldığı ısı, hidrolik veya elektrik enerjisini mekanik enerjiye çeviren makinalar)',
        desc: 'Makinalar enerji dönüştürücü olarak motorlar ve iş makinaları diye ikiye ayrılır. Motorlar; ısı, hidrolik, elektrik vb. aldığı enerjiyi mekanik enerjiye çeviren makinalardır.',
        q: 'Enerji dönüştürücü makinalar sınıflandırmasında; ısı, hidrolik, pnömatik veya elektrik gibi aldığı enerjiyi "mekanik enerjiye" çeviren makinalara ne ad verilir?'
      },
      {
        opt: 'İş Makinaları (Aldığı mekanik enerjiyi yararlı işe dönüştüren makinalar)',
        desc: 'İş makinaları; motordan aldığı mekanik enerjiyi yararlı işe dönüştüren makinalardır (takım tezgahları, tekstil/ziraat/maden makinaları, kaldırma-iletme makinaları, taşıtlar, akışkan makinaları).',
        q: 'Motordan aldığı mekanik enerjiyi yararlı işe dönüştüren makinalara (takım tezgahları, tekstil/maden makinaları, vinç, pompa, kompresör vb.) ne ad verilir?'
      },
      {
        opt: 'Kompresör, yoğuşturucu (kondanser), kısılma vanası ve buharlaştırıcı (evaporatör)',
        desc: '1. Hafta örnek sorularında da vurgulandığı üzere bir soğutma tesisatının 4 temel elemanı: Kompresör, yoğuşturucu, kısılma vanası ve buharlaştırıcıdır.',
        q: '1. Hafta ders sonu örnek sorularında da yer aldığı üzere, gıda ve ortam soğutmada kullanılan bir "Soğutma Tesisatının" 4 temel elemanı aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Basınç: Manometre (Atmosfer basıncı: Barometre) / Boyut: Kumpas ve Mikrometre',
        desc: 'Kapalı kaplardaki basıncı ölçen cihazlara manometre, atmosfer basıncını ölçen cihazlara barometre, hassas boyut ölçen cihazlara ise kumpas, mikrometre, mastar ve komparatör denir.',
        q: 'Ölçme tekniğinde kapalı sistem basıncını, atmosfer basıncını ve hassas parça boyutlarını ölçmek için kullanılan cihaz eşleştirmelerinden hangisi doğrudur?'
      },
      {
        opt: 'Güç birimi: J/s (Watt) — Temel büyüklükler: Uzunluk (m), Kütle (kg), Zaman (s), Akım (A), Sıcaklık (K), Işık (cd), Madde (mol)',
        desc: '1. Hafta örnek sorularında vurgulandığı üzere SI birim sisteminde 7 temel büyüklük vardır (Uzunluk ana boyuttur; hız, ivme, alan, kuvvet türetilmiştir) ve güç birimi J/s (Watt)\'tır.',
        q: '1. Hafta ders sonu sorularına göre SI birim sisteminde aşağıdakilerden hangisi "Güç" birimidir ve hangisi 7 temel (ana) büyüklükten biridir?'
      }
    ]
  },
  {
    groupName: '2. Hafta: Malzeme Bilgisi, Atomik Bağlar, Deformasyon ve Muayene Yöntemleri',
    items: [
      {
        opt: 'Eylemsizlik (Maddenin mevcut durma veya hareket konumunu koruma eğilimi — Kütleyle orantılıdır)',
        desc: '2. Hafta Malzeme Bilgisi sunumuna göre; bütün maddeler mevcut konumunu (durma hâlini ya da hareketini) koruma eğilimi olan bir "eylemsizlik" barındırır ve büyüklüğü maddenin kütlesiyle orantılıdır.',
        q: 'Malzeme Bilgisi ders notlarına göre; bir maddenin mevcut konumunu (durma hâlini ya da hareketini) koruma eğilimine ne ad verilir ve bu büyüklük ne ile doğru orantılıdır?'
      },
      {
        opt: 'Katı (Kristal ve Amorf), Sıvı (Moleküler), Gaz (Atom) ve Plazma (İyon kavramı)',
        desc: 'Maddenin 4 hâli: Katı hâlde kristal ve amorf kavramı, sıvı hâlde moleküler kavram, gaz hâlinde atom kavramı, plazma hâlinde ise iyon kavramı söz konusudur.',
        q: 'Maddenin 4 hâli incelendiğinde; "Kristal/Amorf" kavramı ile "İyon" kavramı sırasıyla maddenin hangi hâllerinde söz konusudur?'
      },
      {
        opt: 'İyonik Bağ (Metal-ametal elektron alışverişi, sert/kırılgan, katı hâlde elektriği İLETMEZ)',
        desc: '2. Hafta örnek soru 3\'te vurgulandığı üzere; iyonik bağ metaller ile ametaller arasında elektron alışverişiyle oluşur, ergime noktası yüksektir, sert ve kırılgandır; ancak KATI hâlde elektriği iletmez (sadece ergimiş veya çözelti hâlinde iletir).',
        q: '2. Hafta ders sonu sorularına göre; metaller ile ametaller arasında elektron alışverişiyle oluşan "İyonik Bağ" yapısıyla ilgili hangi özellik gözlenmez / dikkat edilmelidir?'
      },
      {
        opt: 'Van der Waals Bağı (Moleküller veya atom gruplarını zayıf elektrostatik çekimle bağlayan ikincil bağ)',
        desc: '2. Hafta örnek soru 4\'te sorulduğu üzere; moleküller veya atom gruplarını zayıf elektrostatik çekimlerle birbirine bağlayan ikincil bağ türü Van der Waals bağıdır.',
        q: 'Moleküller veya atom gruplarını zayıf elektrostatik çekimlerle birbirine bağlayan ikincil bağ türü aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Seramikler ve Cam (Kimyasal ve ısıl kararlılığı çok yüksek, ergime sıcaklığı yüksek, kırılgan ve yalıtkan)',
        desc: '2. Hafta örnek soru 1\'de sorulduğu üzere; cam, porselen, Al2O3, SiO2 gibi seramik malzemeler kimyasal ve ısıl kararlılığı çok yüksek, korozyona dirençli, yalıtkan ancak kırılgan malzemelerdir.',
        q: '2. Hafta ders sonu sorularına göre; inorganik bileşiklerden oluşan, ergime sıcaklığı ile kimyasal ve ısıl kararlılığı çok yüksek ancak kırılgan olan malzeme grubu (ve örneği) hangisidir?'
      },
      {
        opt: 'Polimer malzemeler (Hafif, korozyon dayanımı yüksek, yalıtkan, çekme dayanımı ve sıcaklık direnci düşük)',
        desc: '2. Hafta örnek soru 2\'de vurgulandığı üzere; polimerler (termoset, termoplastik, elastomer) hafif, elektrik yalıtkanı ve korozyon direnci bakımından çok iyi malzemelerdir.',
        q: 'Karbon ve hidrojen esaslı büyük moleküllü organik bileşiklerden oluşan, hafif ve korozyon direnci bakımından çok iyi olan ancak yüksek sıcaklıklara uygun olmayan malzeme grubu hangisidir?'
      },
      {
        opt: 'Kompozit Malzemeler (En basit ve eski örneği çamur ve samanın karıştırılmasıyla yapılan Kerpiçtir)',
        desc: 'İki ya da daha fazla malzemenin makroskopik düzeyde birleştirilmesiyle elde edilen malzemelere kompozit denir; insanlık tarihinin bilinen en basit kompozit yapı malzemesi kerpiçtir (çamur + saman).',
        q: 'İki veya daha fazla farklı malzemenin makroskopik düzeyde birleştirilmesiyle oluşturulan "Kompozit Malzemelerin" Anadolu\'da da yaygın kullanılan en basit ve en eski tarihsel örneği nedir?'
      },
      {
        opt: 'Gevrek Kırılma (Plastik deformasyon çok az/yok, tokluk düşük, akma gerilmesinden küçük gerilmede ani oluşur)',
        desc: '2. Hafta örnek soru 5\'te sorulduğu üzere; gevrek kırılmada çok az veya hiç plastik deformasyon olmaz, tokluk düşüktür, kırılma akma gerilmesinden küçük gerilmelerde özellikle kış aylarında ani oluşur. Sünek kırılmada ise koni-çanak yüzeyi ve yüksek plastik deformasyon görülür.',
        q: 'Malzemelerde kırılma türleri karşılaştırıldığında "Gevrek Kırılma" tipinde görülen karakteristik durum aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Tahribatsız Muayene (Malzemenin fiziki yapısına zarar vermeden iç ve dış süreksizlikleri tespit eder)',
        desc: 'Tahribatlı muayene (çekme, basma, eğilme, darbe/tokluk, sertlik) malzemede kalıcı şekil değişimi/kırılma yaratırken; tahribatsız muayene parçaya zarar vermeden iç bünye ve yüzey çatlaklarını/süreksizliklerini tespit eder.',
        q: 'Özellikle uçak yapı elemanları gibi servis altında olan hayati parçaların fiziki yapısına hiçbir zarar vermeden iç bünye ve dış yüzey süreksizliklerinin tespit edilmesini sağlayan yöntem hangisidir?'
      }
    ]
  },
  {
    groupName: '3. Hafta: Çözülemeyen ve Çözülebilen Bağlama Elemanları',
    items: [
      {
        opt: 'Çözülemeyen Bağlama Elemanları (Perçin, Lehim, Kaynak ve Yapıştırıcı bağlantılar)',
        desc: '3. Hafta sunumuna göre; çözülürken tahrip olduğu için tekrar kullanılamayan, makine elemanlarını şekil veya maddesel bağla birleştiren elemanlar: Perçin, Lehim, Kaynak ve Yapıştırıcıdır.',
        q: 'Makine elemanlarını şekil veya maddesel bağla birbirine bağlayan ve sökülürken tahrip olduğu için tekrar kullanılamayan "Çözülemeyen Bağlama Elemanları" grubu hangisidir?'
      },
      {
        opt: 'Lehimleme (Ana metaller ergimez, 400°C altında yumuşak lehim, 400°C üstünde sert lehim, kristal yapı bozulmaz)',
        desc: 'Lehimleme; iki metal parçanın kendilerinden daha düşük sıcaklıkta ergiyen ilave bir malzeme (lehim) yardımıyla bağlanmasıdır. Ana malzeme ergimediği için kristal yapı değişmez, ince parçalar yanmaz; ancak yüksek sıcaklık ve yüksek mukavemet gerektiren yerlere uygun değildir.',
        q: 'Birleştirilecek metal parçaların ergitilmeden, kendilerinden daha düşük sıcaklıkta ergiyen ilave bir tel/malzeme ile birleştirildiği ve ana metalin kristal yapısının değişmediği bağlama yöntemi hangisidir?'
      },
      {
        opt: 'Perçin Bağlantısı (Rijit olmadığı için titreşimlere dayanıklıdır, ergime ve ısıl iç gerilme oluşturmaz)',
        desc: 'Perçin bağlantıları; kaynakta olduğu gibi ergime sebebiyle kristal yapı değişimi ve ısıl iç gerilmeler oluşturmaz, rijit olmadığı için titreşimli yüklere dayanıklıdır ve metal ile deri/plastik/tekstil gibi farklı malzemeleri bağlayabilir.',
        q: 'Birleşme yerinde ergime ve ısıl iç gerilme oluşturmayan, rijit olmadığı için titreşimlere karşı dayanıklı olan ve uçak gövdeleri ile metal-deri/plastik birleştirmelerinde kullanılan çözülemeyen eleman hangisidir?'
      },
      {
        opt: 'Yapıştırıcı (Zamk) Bağlantılar (Adhezyon ve kohezyon kuvveti; delik/çentik açılmadığı için kesit zayıflamaz)',
        desc: 'Yapıştırma bağlantısında ana malzemede delik veya çentik açılmadığından kesit zayıflamaz, korozyona karşı korur ve sönümleme sağlar; ancak yaşlanma görülür ve 80°C–120°C üzerinde mukavemeti düşer.',
        q: 'Ana malzemede delik veya çentik açılmadığı için kesit zayıflamasına yol açmayan, adhezyon ve kohezyon kuvvetlerine dayanan ancak 80°C–120°C üzerindeki sıcaklıklarda mukavemeti düşen bağlantı türü hangisidir?'
      },
      {
        opt: 'Çözülebilen Bağlama Elemanları (Cıvata-Somun, Mil-Göbek, Kama, Sıkı/Sıkma/Konik Geçme, Pim ve Perno)',
        desc: 'Bağlanan parçalar ve bağlama elemanı hasar görmeden istenildiği kadar sökülüp takılabilen elemanlar çözülebilen bağlama elemanlarıdır.',
        q: 'Bağlanan parçalara ve bağlama elemanına zarar vermeden istenildiği kadar sökülüp tekrar takılabilen "Çözülebilen Bağlama Elemanları" arasında aşağıdakilerden hangisi yer alır?'
      },
      {
        opt: 'Cıvata (Dış vida) ve Somun (İç vida) — Helis profiline göre: Üçgen, Trapez, Testere, Yuvarlak ve Kare vida',
        desc: 'Cıvata dış vida, somun iç vidadır. Vidalar profiline göre üçgen, trapez, testere, yuvarlak ve kare vida; helis yönüne göre sağ ve sol vida olarak sınıflandırılır. Dezavantajı merkezleme kalitesinin olmaması ve çentik tesiriyle kopabilmesidir.',
        q: 'Çözülebilen bağlama elemanlarından olan vidaların diş profiline göre sınıflandırılmasında aşağıdakilerden hangileri yer alır?'
      },
      {
        opt: 'Boyuna ve Enine Kamalar (Mil ile göbek arasında kuvvet veya şekil bağıyla moment ileten elemanlar)',
        desc: 'Kamalar mil ile göbek arasında moment ileten prizmatik elemanlardır. Mil eksenine dik (radyal) monte edilenlere "Enine kama", mil eksenine paralel monte edilenlere "Boyuna kama / Uygu kaması (Feder)" denir.',
        q: 'Mil ile göbek arasında kuvvet veya şekil bağıyla moment ileten; mil eksenine paralel (boyuna/feder) veya dik (enine) olarak monte edilen prizmatik bağlama elemanı hangisidir?'
      },
      {
        opt: 'Sıkı Geçme Bağlantısı (Mil dış çapının göbek delik çapından biraz büyük seçilerek basınçla/ısıtma-soğutmayla takılması)',
        desc: 'Sıkı geçmede başlangıçta milin dış çapı göbeğin delik çapından biraz büyüktür; preslenerek veya göbek ısıtılıp/mil soğutularak takılır ve oluşan yüzey basıncı/sürtünme ile moment iletilir.',
        q: 'Başlangıçta milin dış çapının göbeğin delik çapından biraz büyük seçildiği ve montaj sonrası yüzeyler arasında oluşan basınç/sürtünme sayesinde ilave eleman olmadan moment iletilen bağlantı hangisidir?'
      },
      {
        opt: 'Pim ve Perno Bağlantıları (Pimler merkezleme ve emniyet elemanı görevi de görür; pernolar mafsallı/hareketli bağlantı sağlar)',
        desc: 'Pimler (silindirik, konik, çentikli) bağlama yanında merkezleme ve aşırı yükte kesilerek emniyet elemanı görevi üstlenir; pernolar ise çatal/mafsal bağlantılarında parçaların birbirine göre dönmesine izin verir.',
        q: 'Çözülebilen bağlama elemanları içinde bağlama görevinin yanı sıra "merkezleme" ve aşırı yükte kırılarak "emniyet elemanı" görevini de üstlenen eleman hangisidir?'
      }
    ]
  },
  {
    groupName: '4. Hafta: Güç ve Hareket İletim Elemanları ve 5. Hafta: İmalat Yöntemleri',
    items: [
      {
        opt: 'Güç ve Hareket İletim Elemanları (Dişli çarklar, Sürtünmeli çarklar, Kayış-Kasnak ve Zincirler — Sıkı geçme bağlama elemanıdır)',
        desc: '4. Hafta örnek soru 1\'de sorulduğu üzere; motor ile iş makinası arasında güç ve hareket ileten 4 temel mekanizma: Dişli çarklar, Zincirler, Kayış-Kasnak ve Sürtünmeli çarklardır (Sıkı geçme ise bağlama elemanıdır).',
        q: '4. Hafta ders sonu sorularında da sorulduğu üzere; aşağıdakilerden hangisi motor ile iş makinası arasında güç ve hareket iletiminde kullanılan mekanizmalardan biri DEĞİLDİR?'
      },
      {
        opt: 'Alın Dişli (Paralel eksenli), Konik Dişli (Kesişen eksenli) ve Kremayer/Çubuk Dişli (Dönme hareketini doğrusal harekete çeviren)',
        desc: 'Eksenleri paralel olan dişlilere alın dişli (düz/helisel), eksenleri kesişenlere konik dişli, diş sayısı sonsuza götürülerek dönme hareketini doğrusal harekete çeviren doğru şeklindeki dişliye ise kremayer (çubuk) dişli denir.',
        q: 'Dişli çark mekanizmalarında dişlilerden birinin yarıçapı/diş sayısı sonsuza götürülerek düz bir çubuk hâlini alan ve dönme hareketini doğrusal harekete çeviren dişli türü hangisidir?'
      },
      {
        opt: 'Kayış-Kasnak Mekanizması (Elastik yapısıyla darbeleri sönümler, ucuzdur, aşırı yükte kayarak emniyet sağlar; ancak %1-2 kayma vardır)',
        desc: '4. Hafta örnek soru 2\'de vurgulandığı üzere; kayış-kasnak mekanizmaları darbeleri sönümler, sessiz ve ucuzdur, büyük eksen aralıklarında güç iletir; ancak %1-%2 kısmi kayma nedeniyle tam/sabit çevrim oranı sağlayamaz.',
        q: 'Elastik yapısı sayesinde darbeleri sönümleyen, aşırı yükte kayarak sistemi koruyan ancak %1–%2 oranında kısmi kayma nedeniyle sabit bir çevrim oranı sağlayamayan hareket iletim mekanizması hangisidir?'
      },
      {
        opt: 'Zincir Mekanizması (Kayma olmaz, verimi %96-98\'dir, yüksek sıcaklıkta çalışabilir; Gal, Fleyer, Burçlu ve Makaralı tipleri vardır)',
        desc: 'Zincir mekanizmalarında kayma olmaz, verim %96–98 civarındadır ve fırın gibi sıcak ortamlarda çalışabilir; ancak yağlama gerektirir ve kayışa göre pahalıdır.',
        q: 'Kayış-kasnak sistemlerinin aksine kayma olmadan sabit çevrim oranıyla (%96–%98 verimle) güç ileten, yüksek sıcaklıklarda çalışabilen ancak düzenli yağlama gerektiren mekanizma hangisidir?'
      },
      {
        opt: 'Dökümde Model (Çekme payı verilir), Maça (İç boşlukları oluşturur) ve Yolluk/Çıkıcı (Sıvı metali iletir ve büzülme boşluğunu besler)',
        desc: '5. Hafta İmalat Yöntemleri sunumuna göre; dökümde kalıp boşluğunu oluşturmak için "Model" (katılaşma büzülmesi için çekme payı verilir), parçanın boş çıkması istenen iç kısımları için kumdan yapılan "Maça", sıvı metalin kalıbı sakin doldurması ve çekme boşluklarını beslemesi için "Yolluk ve Besleyici/Çıkıcı" kullanılır.',
        q: '5. Hafta Döküm Teknolojisi ders notlarına göre; döküm parçalarının boş (delik/oyuk) çıkması istenen iç kısımlarında kullanılan ve genellikle kumdan imal edilen özel parçaya ne ad verilir?'
      },
      {
        opt: 'Kokil Döküm (Metal kalıba döküm) ve Savurma / Merkezkaç Döküm (Dönen kalıpta boru/silindirik parça dökümü)',
        desc: 'Kalıp malzemesi olarak çelik veya dökme demir kullanılan yönteme "Kokil (Metal kalıba) Döküm", dönen bir kalıpta merkezkaç kuvvet etkisiyle maçasız boru ve silindirik parça üretilen yönteme ise "Savurma (Merkezkaç) Döküm" denir.',
        q: 'Ergimiş metalin kendi ekseni etrafında hızla dönen bir kalıba dökülerek merkezkaç kuvveti etkisiyle şekillendirildiği ve özellikle dikişsiz boru/burç üretiminde kullanılan döküm yöntemi hangisidir?'
      },
      {
        opt: 'Plastik Şekil Verme: Haddeleme (Merdaneler arası), Dövme (Çekiç/presle basma) ve Ekstrüzyon (Kalıptan iterek profil çıkarma)',
        desc: 'Kütle şekillendirme yöntemlerinden Haddeleme zıt dönen iki merdane arasından geçirme, Dövme çekiç/presle darbe/basma uygulama, Ekstrüzyon ise ısıtılmış kütüğü bir kalıp açıklığından iterek sabit kesitli uzun profil/boru üretme işlemidir.',
        q: 'Plastik şekil verme yöntemlerinden; parçaların birbirine zıt yönde dönen iki merdane arasından geçirilerek kesitinin daraltılıp boyunun uzatılması (slab, kütük, sac, ray üretimi) işlemine ne ad verilir?'
      },
      {
        opt: 'Toz Metalurjisi (Toz üretimi -> Karıştırma -> 300-800 MPa Presleme -> Erime noktası altında Sinterleme)',
        desc: 'Toz metalurjisi; metal tozlarının üretilmesi, karıştırılması, kalıpta 300–800 MPa basınçla preslenmesi (yeşil/ham parça) ve ana metalin ergime sıcaklığının altındaki bir sıcaklıkta fırında ısıtılarak partiküllerin birbirine kaynaması (Sinterleme) aşamalarından oluşur.',
        q: 'Toz metalurjisi yönteminde kalıpta preslenerek şekillendirilmiş gözenekli toz parçaların, ergime sıcaklığının altındaki bir sıcaklıkta ısıl işleme tabi tutularak mukavemet kazanması aşamasına ne ad verilir?'
      },
      {
        opt: 'Ergitmeli Kaynak (Oksi-gaz, Elektrik Ark, TIG/Argon [erimeyen Tungsten elektrot], MIG/MAG, Tozaltı) ve Katı Hâl Kaynağı (Sürtünme, Ultrasonik, Difüzyon, Patlama)',
        desc: '5. Hafta sunumuna göre; TIG (Argon) kaynağında erimeyen Tungsten elektrot kullanılır. Sürtünme, Ultrasonik, Difüzyon ve Patlama kaynağı ise ergitmesiz (katı hâl) kaynak yöntemleridir.',
        q: '5. Hafta Kaynak Yöntemleri ders notlarına göre; erime noktası çok yüksek olduğu için kaynak sırasında ERİMEYEN "Tungsten" elektrodun ve koruyucu soy gazın kullanıldığı kaynak yöntemi hangisidir?'
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
