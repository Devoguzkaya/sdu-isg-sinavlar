// İlk Yardım ve Acil Durum Yönetimi — 10 Ayrı Test Teması + Ek 75 Çoktan Seçmeli + 35 Boşluk Doldurma
export const ilkyardimTestThemes = [
  'İlk Yardım Temel İlkeleri, 112 ve Koruma-Bildirme-Kurtarma (KBK)',
  'Birincil ve İkincil Değerlendirme (CAB / ABC, Bilinç ve Vital Bulgular)',
  'Temel Yaşam Desteği (TYD / CPR): Yetişkin, Çocuk ve Bebek',
  'Solunum Yolu Tıkanıklıkları (Tam/Kısmi Tıkanma ve Heimlich Manevrası)',
  'Kanamalar, Turnike Uygulaması, Şok Pozisyonu ve İç Kanama',
  'Yaralanmalar, Yanıklar, Donmalar ve Sıcak Çarpması',
  'Kırık, Çıkık, Burkulmalar, Sargı ve Tespit Uygulamaları',
  'Bilinç Bozuklukları: Bayılma, Sara (Epilepsi), Diyabet, İnme ve Kalp Krizi',
  'Zehirlenmeler, Hayvan Isırıkları/Sokmaları ve Göze-Kulağa Yabancı Cisim',
  'Acil Taşıma Teknikleri (Rentek, İtfaiyeci) ve İşyerlerinde Acil Durum Yönetimi'
];

export const ilkyardimConceptGroups = [
  {
    groupName: 'İlk Yardım Temel İlkeleri ve Hayat Kurtarma Zinciri',
    items: [
      {
        opt: 'İlk yardım (İlaçsız müdahale)',
        desc: 'Herhangi bir kaza veya yaşamı tehlikeye düşüren durumda, sağlık görevlileri gelinceye kadar tıbbi araç-gereç aranmaksızın mevcut araçlarla yapılan ilaçsız uygulamadır.',
        q: 'Kaza veya yaşamı tehlikeye düşüren durumda, sağlık görevlileri yardımı sağlanıncaya kadar tıbbi araç-gereç aranmaksızın mevcut imkanlarla yapılan İLAÇSIZ uygulamaya ne ad verilir?'
      },
      {
        opt: 'Acil tedavi (Tıbbi ve ilaçlı müdahale)',
        desc: 'Acil tedavi ünitelerinde veya olay yerinde doktor ve sağlık personeli tarafından tıbbi ekipman ve ilaç kullanılarak yapılan müdahaledir.',
        q: 'Hasta veya yaralılara doktor ve sağlık personeli tarafından tıbbi malzeme ve ilaç kullanılarak yapılan profesyonel müdahaleye ne ad verilir?'
      },
      {
        opt: 'Koruma (Olay yeri güvenliği)',
        desc: 'İlk yardımın KBK (Koruma-Bildirme-Kurtarma) temel uygulamalarının ilk adımıdır; olay yerinde ikincil kazaları önlemek ve güvenli çevre oluşturmaktır.',
        q: 'İlk yardımın temel uygulamalarından (KBK) birincisi olan ve kaza sonuçlarının ağırlaşmasını/ikincil kazaları önlemek için olay yerinin değerlendirilmesini kapsayan aşama hangisidir?'
      },
      {
        opt: 'Bildirme (112 Acil Çağrı)',
        desc: 'Olay veya kaza mümkün olduğu kadar hızlı bir şekilde telefon veya diğer kişiler aracılığıyla 112 Acil Çağrı Merkezine bildirilmesidir.',
        q: 'İlk yardımın temel uygulamalarında (KBK) olay yerinin güvenliği sağlandıktan hemen sonra 112 Acil Çağrı Merkezinin aranarak gerekli bilgilerin aktarılması aşaması hangisidir?'
      },
      {
        opt: 'Kurtarma (Müdahale)',
        desc: 'Olay yerinde hasta/yaralılara hızlı ancak sakin ve bilinçli bir şekilde ilk yardım uygulanması aşamasıdır.',
        q: 'İlk yardımın temel uygulamalarında (KBK) olay yerinde hasta veya yaralılara hızlı, sakin ve öncelik sırasına göre müdahale edilmesi aşaması hangisidir?'
      },
      {
        opt: 'Hayat kurtarma zinciri 1. ve 2. halkası (İlk yardımcının görevi)',
        desc: '1. Halka: Sağlık kuruluşuna haber verme (112), 2. Halka: Olay yerinde Temel Yaşam Desteği (TYD) yapılmasıdır; bu iki halka ilk yardımcının görevidir.',
        q: 'Dört halkadan oluşan "Hayat Kurtarma Zinciri"nin hangi halkaları doğrudan ilk yardımcının sorumluluğundadır?'
      },
      {
        opt: 'Hayat kurtarma zinciri 3. ve 4. halkası (Sağlık ekibinin görevi)',
        desc: '3. Halka: Ambulans ekiplerince müdahale (Defibrilasyon/İleri yaşam), 4. Halka: Hastane acil servislerinde yapılan müdahaledir.',
        q: 'Hayat Kurtarma Zincirinin hangi halkaları profesyonel ambulans ve hastane acil servis ekiplerinin görevidir?'
      },
      {
        opt: 'Az tehlikeli işyerlerinde 20 çalışanda 1 ilk yardımcı',
        desc: 'İlk Yardım Yönetmeliğine göre az tehlikeli işyerlerinde her 20 çalışan için 1 sertifikalı ilk yardımcı bulundurulması zorunludur.',
        q: 'İlk Yardım Yönetmeliğine göre "Az Tehlikeli" sınıfta yer alan bir işyerinde kaç çalışana kadar en az 1 sertifikalı ilk yardımcı bulundurulmalıdır?'
      },
      {
        opt: 'Tehlikeli işyerlerinde 15 çalışanda 1 ilk yardımcı',
        desc: 'İlk Yardım Yönetmeliğine göre tehlikeli işyerlerinde her 15 çalışan için 1 sertifikalı ilk yardımcı bulundurulması zorunludur.',
        q: 'İlk Yardım Yönetmeliğine göre "Tehlikeli" sınıfta yer alan bir işyerinde kaç çalışana kadar en az 1 sertifikalı ilk yardımcı bulundurulmalıdır?'
      },
      {
        opt: 'Çok tehlikeli işyerlerinde 10 çalışanda 1 ilk yardımcı',
        desc: 'İlk Yardım Yönetmeliğine göre çok tehlikeli işyerlerinde her 10 çalışan için 1 sertifikalı ilk yardımcı bulundurulması zorunludur.',
        q: 'İlk Yardım Yönetmeliğine göre "Çok Tehlikeli" sınıfta yer alan bir işyerinde kaç çalışana kadar en az 1 sertifikalı ilk yardımcı bulundurulmalıdır?'
      }
    ]
  },
  {
    groupName: 'Hasta/Yaralının Değerlendirilmesi ve Temel Yaşam Desteği (TYD)',
    items: [
      {
        opt: 'Bilinç kontrolü (Yetişkinde omuzdan, bebekte ayak tabanından)',
        desc: 'Yetişkinlerde omuzlarına hafifçe dokunup "İyi misiniz?" diye sorularak, bebeklerde ise ayak tabanına hafifçe vurularak bilinç kontrolü yapılır.',
        q: 'İlk yardımda solunum ve dolaşım değerlendirmesine geçmeden önce hasta/yaralının bilinç durumu yetişkin ve bebeklerde nasıl kontrol edilir?'
      },
      {
        opt: 'Baş geri - Çene yukarı (Head tilt - Chin lift) pozisyonu',
        desc: 'Bilinci kapalı kişilerde dil kökünün geriye kaçarak soluk borusunu tıkamasını önlemek ve hava yolunu açmak için verilen pozisyondur (yetişkinde 90°, çocuk/bebekte 45°/koklama pozisyonu).',
        q: 'Bilinci kapalı hasta/yaralıda dil kökünün soluk borusunu tıkamasını engellemek ve hava yolu açıklığını (A - Airway) sağlamak için uygulanan manevra hangisidir?'
      },
      {
        opt: 'Bak - Dinle - Hisset yöntemi (10 saniye)',
        desc: 'Hava yolu açıldıktan sonra göğüs hareketlerine bakılarak, solunum sesi dinlenerek ve yanağa gelen nefes hissedilerek 10 saniye süreyle solunumun değerlendirilmesidir.',
        q: 'Hava yolu açıklığı sağlandıktan sonra hasta/yaralının solunumunun olup olmadığını (B - Breathing) 10 saniye süreyle kontrol etme yöntemi hangisidir?'
      },
      {
        opt: '30 kalp basısı / 2 suni solunum (Dakikada 100-120 bası hızı)',
        desc: 'Yetişkin, çocuk ve bebeklerin tamamında tek ilk yardımcıyla Temel Yaşam Desteği (CPR) oranı 30 kalp basısı / 2 suni solunumdur; bası hızı dakikada 100-120 olmalıdır.',
        q: 'Temel Yaşam Desteği (TYD / CPR) uygulamasında kalp masajı ile suni solunum oranı ve dakikadaki bası hızı kaç olmalıdır?'
      },
      {
        opt: 'Yetişkinlerde göğüs kemiği (sternum) 5 cm (göğüs yüksekliğinin 1/3\'ü) çöktürülür',
        desc: 'Yetişkin TYD uygulamasında iki el kenetlenerek göğüs kemiğinin alt ve üst ucunun ortasına yerleştirilir ve göğüs kemiği 5 cm (göğüs ön-arka çapının 1/3\'ü) çöktürülür.',
        q: 'Yetişkin bir hastada Temel Yaşam Desteği (kalp masajı) uygulanırken göğüs kemiği (sternum) kaç santimetre aşağı çöktürülmelidir?'
      },
      {
        opt: 'Bebeklerde (0-1 yaş) 2 parmakla 4 cm çöktürülür ve 5 kurtarıcı nefesle başlanır',
        desc: 'Bebeklerde ve çocuklarda (1-8 yaş) boğulma/hipoksi kaynaklı durmalar sık olduğu için TYD\'ye 2 (veya 5) kurtarıcı solukla başlanır; bebekte meme uçları hattının altına iki parmakla 4 cm bası yapılır.',
        q: 'Bebeklerde (0-1 yaş) Temel Yaşam Desteği uygulanırken kalp basısı nasıl ve kaç cm derinlikte yapılır?'
      },
      {
        opt: 'Koma pozisyonu (Yarı yüzükoyun-yan pozisyon / Recovery position)',
        desc: 'Bilinci kapalı ancak solunumu ve nabzı OLAN hasta/yaralının kusmuk veya dil köküyle boğulmasını önlemek için verilen yarı yüzükoyun-yan pozisyondur.',
        q: 'Bilinci kapalı ancak normal solunumu ve dolaşımı (nabzı) OLAN bir hasta/yaralıya hava yolunun kapanmaması için hangi pozisyon verilir?'
      },
      {
        opt: 'Heimlich manevrası (Karına bası uygulaması)',
        desc: 'Soluk borusunun yabancı cisimle TAM tıkanmasında (kişi konuşamaz, öksüremez, nefes alamaz, ellerini boynuna götürür) 5 sırta vuru ve 5 karına bası şeklinde uygulanan hayat kurtarıcı manevradır.',
        q: 'Solunum yolu yabancı cisimle TAM tıkanmış (konuşamayan, nefes alamayan, moraran ve ellerini boynuna götüren) bilinci açık kişiye sırta vuruların ardından uygulanan manevra hangisidir?'
      },
      {
        opt: 'Kısmi tıkanmada kişiye dokunulmaz, öksürmeye teşvik edilir',
        desc: 'Soluk borusunun kısmi tıkanmasında kişi ses çıkarabilir, nefes alabilir ve öksürebilir; bu durumda sırtına vurulmaz, olduğu pozisyonda öksürmeye teşvik edilir.',
        q: 'Boğazına yabancı cisim kaçan ancak öksürebilen, nefes alabilen ve konuşabilen (kısmi tıkanma yaşayan) bir kişiye ilk yardımcı ne yapmalıdır?'
      }
    ]
  },
  {
    groupName: 'Kanamalar, Şok, Yaralanmalar ve Yanıklar',
    items: [
      {
        opt: 'Atardamar (Arter) kanaması',
        desc: 'Temiz kan taşır; parlak açık kırmızı renklidir ve kalp atımlarıyla uyumlu olarak kesik kesik, fışkırır tarzda akar (en tehlikeli kanama türüdür).',
        q: 'Kalp atımları ile uyumlu olarak kesik kesik, fışkırır tarzda akan ve açık parlak kırmızı renkli olan en tehlikeli kanama türü hangisidir?'
      },
      {
        opt: 'Toplardamar (Ven) kanaması',
        desc: 'Kirli kan taşır; koyu kırmızı renklidir ve fışkırmadan, sürekli/sızıntı-taşma biçiminde yayarak akar.',
        q: 'Koyu kırmızı renkli olan ve fışkırmaksızın sürekli taşma biçiminde akan kanama türü hangisidir?'
      },
      {
        opt: 'Turnike (Boğucu sargı) uygulaması',
        desc: 'Uzuv kopması olan veya baskı noktalarına bası uygulanmasına rağmen durdurulamayan şiddetli atardamar kanamalarında tek kemikli bölgeye (kol/uyluk) uygulanan ve 15-20 dakikada bir 5-10 sn gevşetilen yöntemdir.',
        q: 'Uzuv kopması veya durdurulamayan şiddetli atardamar kanamalarında tek kemikli bölgeye (üst kol veya uyluk) uygulanan ve 15-20 dakikada bir 5-10 saniye gevşetilen yöntem hangisidir?'
      },
      {
        opt: 'Kopmuş uzvun taşınması (Kuru poşet içinde, buzlu su dolu ikinci torbada)',
        desc: 'Kopmuş uzuv doğrudan su veya buzla temas ettirilmez; temiz nemli bezle sarılıp su geçirmez poşete konur, bu poşet de 1 ölçek buz / 2 ölçek su bulunan ikinci bir torba içinde en geç 6 saatte hastaneye ulaştırılır.',
        q: 'İş kazası sonucu kopan bir parmak veya uzuv, doku canlılığını korumak amacıyla hastaneye nasıl nakledilmelidir?'
      },
      {
        opt: 'Şok pozisyonu (Sırtüstü yatış, bacaklar 30 cm yukarı)',
        desc: 'Dolaşım yetersizliği (şok) veya bayılma durumunda beyne ve hayati organlara kan akışını artırmak için hastanın sırtüstü yatırılıp bacaklarının 30 cm yükseltildiği pozisyondur.',
        q: 'Akut dolaşım yetmezliği (Şok) gelişen veya bayılan bir hastada beyne giden kan akışını artırmak için bacakların 30 cm yukarı kaldırıldığı pozisyona ne ad verilir?'
      },
      {
        opt: 'Delici göğüs yaralanması pozisyonu ve 3 tarafı kapalı pansuman',
        desc: 'Açık pnömotoraksı önlemek için yara üzerine 3 kenarı bantlı, 1 kenarı açık (nefes verirken hava çıkışı sağlayan) plastik/naylon kapatılır ve bilinci açıksa yarı oturur pozisyon verilir.',
        q: 'Delici göğüs yaralanmalarında akciğer sönmesini (pnömotoraks) önlemek için yara nasıl kapatılır ve hastaya hangi pozisyon verilir?'
      },
      {
        opt: 'Delici karın yaralanması pozisyonu (Sırtüstü, bacaklar karına çekilmiş)',
        desc: 'Dışarı çıkan organlar içeri sokulmaz, üzeri ılık ve nemli steril bezle örtülür; karın kaslarını gevşetmek için hasta sırtüstü yatırılıp bacakları bükülerek karına doğru çekilir.',
        q: 'Delici karın yaralanmalarında dışarı çıkan organlara nasıl müdahale edilir ve karın kaslarını gevşetmek için hangi pozisyon verilir?'
      },
      {
        opt: '2. Derece yanık (Ağrılı, içi su dolu kabarcıklar / bül)',
        desc: 'Derinin epidermis ve dermis tabakalarını etkileyen, içi su dolu kabarcıklar (bül) ve şiddetli ağrı ile karakterize yanık derecesidir (büller patlatılmaz!).',
        q: 'Deride kızarıklık, şiddetli ağrı ve içi su dolu kabarcıklar (bül) ile karakterize olan yanık derecesi hangisidir?'
      },
      {
        opt: '3. Derece yanık (Sinir uçları harap olduğu için ağrısızdır)',
        desc: 'Derinin tüm tabakalarını, kas, damar ve sinir uçlarını tahrip eden; siyah/beyaz kuru görünümde olan ve sinir uçları yandığı için AĞRI HİSSEDİLMEYEN en ağır yanık derecesidir.',
        q: 'Derinin tüm katmanlarının, kasların ve sinir uçlarının tahrip olması nedeniyle siyah/kömürleşmiş veya beyaz görünen ve AĞRI HİSSEDİLMEYEN yanık derecesi hangisidir?'
      }
    ]
  },
  {
    groupName: 'Kırık, Çıkık, Bilinç Bozuklukları, Zehirlenme ve Taşıma Teknikleri',
    items: [
      {
        opt: 'Çıkık (Eklem yüzeylerinin kalıcı olarak ayrılması)',
        desc: 'Eklem yüzeylerinin yoğun zorlanma sonucu kalıcı olarak birbirinden ayrılmasıdır; kendiliğinden normal konumuna dönemez, yerine oturtulmaya çalışılmaz.',
        q: 'Eklem yüzeylerinin zorlanma sonucu KALICI olarak birbirinden ayrılmasına ne ad verilir?'
      },
      {
        opt: 'Burkulma (Eklem yüzeylerinin anlık olarak ayrılması)',
        desc: 'Eklem yüzeylerinin zorlanma sonucu ANLIK (geçici) olarak ayrılması ve bağların zedelenmesidir; şişlik ve ağrıyı azaltmak için soğuk uygulama ve bandaj yapılır.',
        q: 'Eklem yüzeylerinin zorlanma sonucu ANLIK (geçici) olarak birbirinden ayrılması ve bağ dokusunun zedelenmesine ne ad verilir?'
      },
      {
        opt: 'Kırık tespitinde alt ve üst eklemlerin içine alınması',
        desc: 'Kırık şüphesi olan kemik tespit edilirken (atellenirken) hareketi tam önlemek için kırık bölgenin bir üst ve bir alt eklemini de içine alacak şekilde tespit yapılır.',
        q: 'Kırık tespit (atel) uygulamasında kırık kemiğin oynamasını engellemek için uygulanan temel kural nedir?'
      },
      {
        opt: 'Sara (Epilepsi) krizinde ilk yardım',
        desc: 'Kriz kendi sürecini tamamlamaya bırakılır; hasta bağlanmaz, çenesi zorla açılmaz, soğan/kolonya koklatılmaz; sadece başının altına yumuşak bir şey konularak yaralanması önlenir.',
        q: 'Sara (epilepsi) nöbeti geçiren bir hastaya yapılacak doğru ilk yardım uygulaması hangisidir?'
      },
      {
        opt: 'Hipoglisemi (Kan şekeri düşüklüğü) müdahalesi',
        desc: 'Ani terleme, titreme, hızlı nabız ve bilinç bulanıklığı görülür; hastanın bilinci açık ve yutkunabiliyorsa ağızdan şeker/şekerli su verilir (hiperglisemi olsa bile az miktarda şeker ek zarar vermez, hipoglisemide ise hayat kurtarır).',
        q: 'Diyabetli bir çalışanda ani soğuk terleme, titreme ve baş dönmesi (kan şekeri düşmesi / hipoglisemi şüphesi) görüldüğünde bilinci açıksa ne yapılmalıdır?'
      },
      {
        opt: 'Sindirim yoluyla korozif (yakıcı) madde zehirlenmesinde KUSTURULMAZ',
        desc: 'Çamaşır suyu, tuz ruhu, asit, baz veya petrol türevleri içildiğinde yemek borusunu ikinci kez yakmaması için hasta KESİNLİKLE kusturulmaz, bol su içirilerek 112 çağrılır.',
        q: 'Asit, baz, çamaşır suyu veya tiner gibi yakıcı (korozif) kimyasalların yutulmasıyla oluşan zehirlenmelerde kesinlikle yapılmaması gereken işlem nedir?'
      },
      {
        opt: 'Rentek manevrası (Araçtan çıkarma)',
        desc: 'Kaza geçirmiş bir yaralıyı, patlama/yangın tehlikesi veya solunum durması varsa, baş-boyun-gövde eksenini bozmadan omurilik hasarını önleyerek araçtan çıkarma tekniğidir.',
        q: 'Trafik veya iş makinesi kazasında yaralıyı omurilik (baş-boyun-gövde ekseni) bütünlüğünü koruyarak araç içinden dışarı çıkarma tekniğine ne ad verilir?'
      },
      {
        opt: 'İtfaiyeci yöntemi (Omuzda taşıma - Bir el boşta)',
        desc: 'Bilinci kapalı veya yürüyemeyen yaralıyı tek ilk yardımcının omuzuna alarak taşıdığı, ilk yardımcının bir kolunun merdiven trabzanını tutmak için boşta kaldığı taşıma yöntemidir.',
        q: 'Tek bir ilk yardımcının bilinci kapalı yaralıyı omuzuna alarak taşıdığı ve bir elinin serbest/boşta kalmasını sağlayan acil taşıma yöntemi hangisidir?'
      },
      {
        opt: 'Kaşık tekniği (3 ilk yardımcı ile tek taraftan sedyeye alma)',
        desc: 'Yaralıya sadece bir taraftan ulaşılabiliyorsa (duvar dibi vb.), 3 ilk yardımcının yaralının tek yanına diz çöküp aynı anda kaldırarak sedyeye alma yöntemidir.',
        q: 'Yaralıya yalnızca tek bir taraftan ulaşılabilen dar alanlarda 3 ilk yardımcının yaralıyı sedyeye almak için kullandığı teknik hangisidir?'
      },
      {
        opt: 'Köprü tekniği (4 ilk yardımcı ile bacaklar arasından sedye sürerek alma)',
        desc: 'Omurilik yaralanması şüphesinde 3 ilk yardımcının yaralının üzerine bacaklarını açarak köprü kurup yaralıyı kaldırdığı, 4. kişinin ise alttan sedyeyi sürdüğü tekniktir.',
        q: 'Yaralının bacakları arasına alınarak 3 ilk yardımcı tarafından hafifçe kaldırıldığı ve 4. ilk yardımcının alttan sedyeyi sürdüğü taşıma tekniği hangisidir?'
      }
    ]
  },
  {
    groupName: 'Acil Durum Yönetimi, Triyaj ve Tahliye Mevzuatı',
    items: [
      {
        opt: 'Söndürme, Kurtarma, Koruma ve İlk Yardım ekipleri',
        desc: 'İşyerlerinde Acil Durumlar Hakkında Yönetmeliğe göre işyerlerinde kurulması zorunlu olan 4 temel acil durum ekibidir.',
        q: 'İşyerlerinde Acil Durumlar Hakkında Yönetmeliğe göre işyerlerinde görevlendirilmesi zorunlu olan 4 acil durum ekibi hangileridir?'
      },
      {
        opt: 'Çok tehlikeli işyerlerinde 30 çalışanda 1 Söndürme ve Kurtarma, 40 çalışanda 1 Koruma',
        desc: 'Çok tehlikeli sınıfta Söndürme ve Kurtarma ekipleri için her 30 çalışana 1 kişi, Koruma ekibi için ise her 40 çalışana 1 destek elemanı görevlendirilir.',
        q: 'Çok tehlikeli sınıfta yer alan bir işyerinde Söndürme, Kurtarma ve Koruma ekiplerinde kaç çalışana kadar en az 1 destek elemanı görevlendirilmelidir?'
      },
      {
        opt: 'Tehlikeli işyerlerinde 40 çalışanda 1 Söndürme ve Kurtarma, 50 çalışanda 1 Koruma',
        desc: 'Tehlikeli sınıfta Söndürme ve Kurtarma ekipleri için her 40 çalışana 1 kişi, Koruma ekibi için ise her 50 çalışana 1 destek elemanı görevlendirilir.',
        q: 'Tehlikeli sınıfta yer alan bir işyerinde Söndürme, Kurtarma ve Koruma ekiplerinde kaç çalışana kadar en az 1 destek elemanı görevlendirilmelidir?'
      },
      {
        opt: 'Az tehlikeli işyerlerinde 50 çalışanda 1 Söndürme, Kurtarma ve Koruma',
        desc: 'Az tehlikeli sınıfta Söndürme, Kurtarma ve Koruma ekiplerinin her biri için her 50 çalışana 1 destek elemanı görevlendirilir.',
        q: 'Az tehlikeli sınıfta yer alan bir işyerinde Söndürme, Kurtarma ve Koruma ekiplerinin her biri için kaç çalışana kadar en az 1 destek elemanı görevlendirilir?'
      },
      {
        opt: 'Acil durum tatbikatı (Yılda en az 1 kez)',
        desc: 'İşyerlerinde Acil Durumlar Hakkında Yönetmeliğe göre tehlike sınıfı ayrımı olmaksızın tüm işyerlerinde yılda en az 1 defa acil durum tatbikatı yapılması zorunludur.',
        q: 'İşyerlerinde Acil Durumlar Hakkında Yönetmeliğe göre işyerlerinde acil durum tatbikatları en geç hangi periyotta yapılmalıdır?'
      },
      {
        opt: 'Acil durum planı yenileme süreleri (2, 4 ve 6 yıl)',
        desc: 'Acil durum planları çok tehlikeli işyerlerinde en geç 2 yılda bir, tehlikeli işyerlerinde 4 yılda bir, az tehlikeli işyerlerinde 6 yılda bir yenilenir.',
        q: 'İşyerlerinde hazırlanan Acil Durum Planları çok tehlikeli, tehlikeli ve az tehlikeli sınıflarda sırasıyla en geç kaç yılda bir yenilenir?'
      },
      {
        opt: 'Kırmızı kod (Triyajda 1. Öncelikli / Acil müdahale gereken ağır yaralı)',
        desc: 'Kitlesel kazalarda uygulanan START triyaj sisteminde solunum/dolaşım tehdidi olan ve hemen müdahale edilirse kurtulabilecek 1. öncelikli yaralılara Kırmızı renk kodu verilir.',
        q: 'Kitlesel kaza ve afetlerde uygulanan Triyaj (sınıflandırma) sisteminde, yaşamı tehdit eden durumu olan ve 1. öncelikle müdahale edilmesi gereken yaralılara hangi renk kodu verilir?'
      },
      {
        opt: 'Sarı, Yeşil ve Siyah triyaj kodları',
        desc: 'Sarı: 2. öncelikli (bekleyebilir ağır yaralı), Yeşil: 3. öncelikli (yürüyebilen hafif yaralı), Siyah: Hayatını kaybetmiş (eks) veya kurtarılamayacak durumdaki kişilerdir.',
        q: 'Triyaj sisteminde yürüyebilen hafif yaralılar ile hayatını kaybetmiş (eks) kişileri ifade eden renk kodları sırasıyla hangileridir?'
      }
    ]
  }
];

export const ilkyardimExtraFill = [
  { q: 'İlk yardımın 3 temel uygulaması (KBK): ____, Bildirme ve Kurtarmadır.', answers: ['Koruma'], hint: 'Olay yeri güvenliği', explanation: 'İlk adım Koruma (olay yeri güvenliği) aşamasıdır.' },
  { q: 'Çok tehlikeli sınıfta yer alan işyerlerinde her ____ çalışana kadar 1 sertifikalı ilk yardımcı bulundurulması zorunludur.', answers: ['10', 'on'], hint: 'En yüksek tehlike sınıfı oranı', explanation: 'Çok tehlikelide 10, tehlikelide 15, az tehlikelide 20 çalışana 1 ilk yardımcı.' },
  { q: 'Tehlikeli sınıfta yer alan işyerlerinde her ____ çalışana kadar 1 sertifikalı ilk yardımcı bulundurulması zorunludur.', answers: ['15', 'on beş'], hint: '10 ile 20 arası', explanation: 'Tehlikeli işyerlerinde her 15 çalışana 1 ilk yardımcı zorunludur.' },
  { q: 'Az tehlikeli sınıfta yer alan işyerlerinde her ____ çalışana kadar 1 sertifikalı ilk yardımcı bulundurulması zorunludur.', answers: ['20', 'yirmi'], hint: 'En düşük tehlike sınıfı oranı', explanation: 'Az tehlikeli işyerlerinde her 20 çalışana 1 ilk yardımcı zorunludur.' },
  { q: 'İlk yardımcı sertifikasının ve kimlik belgesinin geçerlilik süresi ____ yıldır.', answers: ['3', 'üç'], hint: 'Üç yılda bir güncelleme eğitimi', explanation: 'İlk yardımcı belgesi 3 yıl geçerlidir; süresi bitiminde güncelleme eğitimi alınır.' },
  { q: 'Bilinci kapalı hastada hava yolunu açmak için "Baş geri - ____ yukarı" pozisyonu verilir.', answers: ['Çene', 'çene'], hint: 'Dil kökünü kaldırmak için', explanation: 'Baş geri - Çene yukarı (Head tilt - Chin lift) pozisyonu.' },
  { q: 'Yetişkinlerde Baş geri - Çene yukarı pozisyonu verilirken alt çene kemiği yere ____ derece dik olacak şekilde kaldırılır.', answers: ['90', 'doksan'], hint: 'Dik açı', explanation: 'Yetişkinlerde çene kemiği yere 90 derece dik olacak şekilde baş geriye yatırılır.' },
  { q: 'Solunumun olup olmadığı "Bak - Dinle - Hisset" yöntemiyle ____ saniye süreyle kontrol edilir.', answers: ['10', 'on'], hint: 'Saniye süresi', explanation: 'Bak-Dinle-Hisset 10 saniye süreyle yapılır.' },
  { q: 'Temel Yaşam Desteğinde (TYD) kalp masajı ve suni solunum oranı ____ kalp basısı / 2 suni solunumdur.', answers: ['30', 'otuz'], hint: '30/2 oranı', explanation: 'Tüm yaş gruplarında tek kurtarıcıyla oran 30:2\'dir.' },
  { q: 'Yetişkinlerde kalp masajı sırasında göğüs kemiği (sternum) ____ cm aşağı çöktürülür.', answers: ['5', 'beş'], hint: 'Göğüs yüksekliğinin 1/3\'ü', explanation: 'Yetişkinde 5 cm, çocukta 5 cm, bebekte 4 cm çöktürülür.' },
  { q: 'Bebeklerde (0-1 yaş) kalp masajı iki parmakla göğüs kemiği ____ cm çöktürülerek yapılır.', answers: ['4', 'dört'], hint: 'Bebek bası derinliği', explanation: 'Bebeklerde 2 parmakla 4 cm derinlikte bası yapılır.' },
  { q: 'Kalp masajı dakikada ____ - 120 bası olacak hızda uygulanır.', answers: ['100', 'yüz'], hint: 'Minimum dakikadaki bası hızı', explanation: 'Kalp basısı dakikada 100-120 hızında yapılır.' },
  { q: 'Bilinci kapalı ancak solunumu ve nabzı OLAN hastaya ____ pozisyonu (yarı yüzükoyun-yan) verilir.', answers: ['Koma', 'koma'], hint: 'Recovery position', explanation: 'Solunumu olan bilinci kapalı hastaya Koma (yarı yüzükoyun-yan) pozisyonu verilir.' },
  { q: 'Soluk borusunun yabancı cisimle TAM tıkanmasında sırta vuru ve karına bası şeklinde ____ manevrası uygulanır.', answers: ['Heimlich', 'heimlich'], hint: 'Karına bası manevrası', explanation: 'Tam tıkanmada Heimlich manevrası uygulanır.' },
  { q: 'Kalp atımlarıyla uyumlu olarak fışkırır tarzda ve parlak açık kırmızı renkte akan kanama ____ kanamasıdır.', answers: ['Atardamar', 'atardamar', 'Arter'], hint: 'En tehlikeli kanama', explanation: 'Atardamar (arter) kanaması fışkırır tarzda ve parlak kırmızıdır.' },
  { q: 'Koyu kırmızı renkli ve sürekli taşma/yayılma biçiminde akan kanama ____ kanamasıdır.', answers: ['Toplardamar', 'toplardamar', 'Ven'], hint: 'Kirli kan taşıyan damar', explanation: 'Toplardamar (ven) kanaması koyu kırmızı ve taşma tarzındadır.' },
  { q: 'Turnike (boğucu sargı) uygulamasında sargı her ____ - 20 dakikada bir 5-10 saniye gevşetilir.', answers: ['15', 'on beş'], hint: 'Kangreni önleme süresi', explanation: 'Doku ölümünü önlemek için turnike 15-20 dakikada bir gevşetilir.' },
  { q: 'Kopmuş uzuv, buzlu su dolu ikinci torba içinde en geç ____ saat içinde sağlık kuruluşuna ulaştırılmalıdır.', answers: ['6', 'altı'], hint: 'Maksimum saat süresi', explanation: 'Kopmuş uzuv en geç 6 saat içinde hastaneye ulaştırılmalıdır.' },
  { q: 'Şok pozisyonunda hasta sırtüstü yatırılır ve bacakları ____ cm yukarı kaldırılır.', answers: ['30', 'otuz'], hint: 'Ayakların yükseltilme miktarı', explanation: 'Şok pozisyonunda bacaklar 30 cm yükseltilir.' },
  { q: 'Delici göğüs yaralanmalarında bilinci açık yaralıya ____ oturur pozisyon verilir.', answers: ['Yarı', 'yarı'], hint: 'Solunumu rahatlatan pozisyon', explanation: 'Göğüs yaralanmalarında ve solunum güçlüğünde yarı oturur pozisyon verilir.' },
  { q: 'Burun kanamasında baş hafifçe ____ eğilir ve burun kanatları 5 dakika sıkılır.', answers: ['Öne', 'öne'], hint: 'Geriye değil!', explanation: 'Burun kanamasında baş hafifçe öne eğilir.' },
  { q: 'İçi su dolu kabarcıklar (bül) ve şiddetli ağrı ile karakterize yanık ____. derece yanıktır.', answers: ['2', 'ikinci', 'İkinci'], hint: '1 ile 3 arası', explanation: 'Bül (su dolu kabarcık) 2. derece yanığın tipik bulgusudur.' },
  { q: 'Sinir uçlarının tahrip olması nedeniyle ağrı hissedilmeyen en ağır yanık ____. derece yanıktır.', answers: ['3', 'üçüncü', 'Üçüncü'], hint: 'Tam kat yanık', explanation: '3. derece yanıklarda sinir uçları yandığı için ağrı hissedilmez.' },
  { q: 'Kimyasal madde yanıklarında bölge bol ve tazyiksiz ____ ile en az 15-20 dakika yıkanır.', answers: ['Su', 'su'], hint: 'Temel yıkama sıvısı', explanation: 'Kimyasal yanıklarda giysiler çıkarılıp bol su ile yıkanır.' },
  { q: 'Eklem yüzeylerinin zorlanma sonucu KALICI olarak birbirinden ayrılmasına ____ denir.', answers: ['Çıkık', 'çıkık'], hint: 'Anlık ayrılma burkulmadır', explanation: 'Eklem yüzeylerinin kalıcı ayrılması çıkıktır.' },
  { q: 'Eklem yüzeylerinin zorlanma sonucu ANLIK (geçici) olarak ayrılmasına ____ denir.', answers: ['Burkulma', 'burkulma'], hint: 'Eklem bağlarının zorlanması', explanation: 'Eklem yüzeylerinin anlık ayrılması burkulmadır.' },
  { q: 'Asit, baz veya çamaşır suyu gibi yakıcı (korozif) madde içen kişi kesinlikle ____.', answers: ['Kusturulmaz', 'kusturulmaz'], hint: 'Yemek borusunu tekrar yakmamak için', explanation: 'Yakıcı madde içen hasta kesinlikle kusturulmaz.' },
  { q: 'Yaralıyı omurilik bütünlüğünü bozmadan araç içinden çıkarma manevrasına ____ manevrası denir.', answers: ['Rentek', 'rentek'], hint: 'Araçtan çıkarma tekniği', explanation: 'Araç içinden yaralı çıkarma tekniği Rentek manevrasıdır.' },
  { q: 'İşyerlerinde acil durum tatbikatları yılda en az ____ defa yapılır.', answers: ['1', 'bir'], hint: 'Yıllık zorunlu sayı', explanation: 'Acil durum tatbikatı yılda en az 1 kez yapılır.' },
  { q: 'Çok tehlikeli işyerlerinde Acil Durum Planı en geç ____ yılda bir yenilenir.', answers: ['2', 'iki'], hint: '2 - 4 - 6 kuralı', explanation: 'Çok tehlikelide 2, tehlikelide 4, az tehlikelide 6 yılda bir yenilenir.' },
  { q: 'Tehlikeli işyerlerinde Acil Durum Planı en geç ____ yılda bir yenilenir.', answers: ['4', 'dört'], hint: '2 - 4 - 6 kuralı', explanation: 'Tehlikeli işyerlerinde acil durum planı 4 yılda bir yenilenir.' },
  { q: 'Az tehlikeli işyerlerinde Acil Durum Planı en geç ____ yılda bir yenilenir.', answers: ['6', 'altı'], hint: '2 - 4 - 6 kuralı', explanation: 'Az tehlikeli işyerlerinde acil durum planı 6 yılda bir yenilenir.' },
  { q: 'Çok tehlikeli işyerlerinde Söndürme ve Kurtarma ekipleri için her ____ çalışana 1 destek elemanı görevlendirilir.', answers: ['30', 'otuz'], hint: '30 / 40 / 50 kuralı', explanation: 'Çok tehlikelide Söndürme ve Kurtarma için 30 çalışanda 1 kişi görevlendirilir.' },
  { q: 'Çok tehlikeli işyerlerinde Koruma ekibi için her ____ çalışana 1 destek elemanı görevlendirilir.', answers: ['40', 'kırk'], hint: 'Koruma ekibi oranı', explanation: 'Çok tehlikelide Koruma ekibi için 40 çalışanda 1 kişi görevlendirilir.' },
  { q: 'Triyaj uygulamasında 1. öncelikli (acil müdahale gereken ağır yaralı) hastalara ____ renk kodu verilir.', answers: ['Kırmızı', 'kırmızı'], hint: 'En acil triyaj rengi', explanation: 'Kırmızı kod birinci öncelikli acil yaralıları ifade eder.' }
];
