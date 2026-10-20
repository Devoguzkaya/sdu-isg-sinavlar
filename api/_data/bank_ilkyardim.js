// İlk Yardım, İşçi Sağlığı ve Meslek Hastalıkları (Doç. Dr. Mehtap SAVRAN — 4 PPTX Sunumu + 14 Ekim Ders Transkripti)
export const ilkyardimTestThemes = [
  '1. Modül: İSG Temel Kavramlar, WHO/ILO Tanımı ve Sanayi Devrimi Öncesi Tarihçe (Hipokrat, Plini, Paracelsus, Ramazzini)',
  '1. Modül: Sanayi Devrimi Sonrası İSG (Pott, Owen, Legge, Hamilton) ve Türkiye\'de İSG Tarihçesi (Dilaver Paşa, 3008, 6331)',
  '2. Modül: Sağlık Gözetimi, Toksisite, 6331 m.4/m.15 ve Uygun İşe Yerleştirme (İşe Giriş Muayenesi)',
  '2. Modül: Aralıklı Kontrol Muayeneleri (Sekonder Koruma), İşe Dönüş (21 Gün), MAC/MAK ve TLV/ESD Değerleri',
  '2. Modül: Sağlık Risklerinin Kontrol Hiyerarşisi ve Kişisel Sağlık Dosyalarının Saklanması (15 Yıl)',
  '3. Modül: İlk Yardım Temel Kavramlar, Acil Tedavi Farkı, KBK (Koruma-Bildirme-Kurtarma) ve Hayat Kurtarma Zinciri',
  '3. Modül: Vücut Sistemleri, Yaşam Bulguları (Bilinç, Solunum, Nabız, Vücut Isısı) ve ABC / İkinci Değerlendirme',
  '4. Modül: Meslek Hastalıklarına Giriş — Genel Sağlık Sorunu, İşle İlgili Hastalık (KKH, KOAH, KİSH) ve Meslek Hastalığı Ayrımı',
  '4. Modül: Yükümlülük Süresi, Maruz Kalım Süresi, A-B-C-D-E Sınıflandırması, Bisinozis ve Yetkili Tanı Hastaneleri',
  '5. Modül (14 Ekim Dersi): Kanamalar, Şok Türleri (Hipovolemik/Kardiyojenik), Turnike (İspanyol Sargısı), Kopan Uzuv ve Burun/Kulak Kanaması'
];

export const ilkyardimConceptGroups = [
  {
    groupName: '1. Modül: İSG Temel Kavramlar ve Tarihsel Gelişim (Doç. Dr. Mehtap Savran 1. PPTX)',
    items: [
      {
        opt: 'WHO ve ILO Ortak Sağlık Tanımı',
        desc: '1. PPTX Slayt 2-3: İSG sadece çalışanların fiziksel iyilik halleriyle ilgilenmez; Dünya Sağlık Örgütü (WHO) ve Uluslararası Çalışma Örgütü (ILO) tanımına göre tüm mesleklerde işçilerin bedensel, ruhsal ve sosyal iyilik durumlarını en üst düzeye ulaştırmak ve işi insana, her insanı da kendi işine uyarlamaktır.',
        q: 'Doç. Dr. Mehtap Savran\'ın 1. hafta sunumuna göre Dünya Sağlık Örgütü (WHO) ve Uluslararası Çalışma Örgütü (ILO) ortak İSG tanımının kapsamı aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Heredot ve Hipokrat',
        desc: '1. PPTX Slayt 5: Heredot ilk kez çalışanların verimli olabilmesi için yüksek enerjili besinlerle beslenmeleri gerektiğine değinmiş; Hipokrat (M.Ö. 370) ise ilk kez kurşunun zararlı etkilerinden söz ederek kurşun koliğini ve kurşun anemisini tanımlamıştır.',
        q: 'Sanayi Devrimi öncesi dönemde çalışanların verimli olması için yüksek enerjili besinlerle beslenmesi gerektiğini belirten düşünür ile tarihte ilk kez "kurşun koliği ve kurşun anemisini" tanımlayan hekim sırasıyla kimlerdir?'
      },
      {
        opt: 'Dioscorides ve Plini',
        desc: '1. PPTX Slayt 6-7: Dioscorides zehirleri bitkisel, hayvansal ve mineral kaynaklı olarak üç gruba ayırmıştır. Plini (M.S. 23-79) ise çalışma ortamındaki tehlikeli tozlara karşı çalışanların korunması amacıyla maske yerine geçmek üzere başlarına torba geçirmelerini önermiştir.',
        q: 'Antik Roma döneminde zehirleri "bitkisel, hayvansal ve mineral" kaynaklı olarak üçe ayıran bilim insanı ile tehlikeli tozlara karşı çalışanların başlarına torba (ilk maske/KKD) geçirmelerini öneren düşünür sırasıyla kimlerdir?'
      },
      {
        opt: 'Juvenal ve Paracelsus',
        desc: '1. PPTX Slayt 7-8: Juvenal demircilerde göz hastalıklarının ve ayakta durarak çalışanlarda varislerin oluştuğundan söz etmiştir. Paracelsus (1493-1541) ise Tirol maden işletmelerinde işyeri hekimi olarak çalışmış, pnömokonyozları ve "Her madde zehirdir; zehir ile ilacı ayıran dozdur" ilkesini ortaya koymuştur.',
        q: 'Demircilerde göz hastalıkları ve ayakta çalışanlarda varis geliştiğini belirten Juvenal\'in ardından, Tirol madenlerinde işyeri hekimi olarak çalışıp pnömokonyozları ve toksikolojinin temel "Doz" kavramını tanımlayan hekim kimdir?'
      },
      {
        opt: 'Georgius Agricola',
        desc: '1. PPTX Slayt 9: Georgius Agricola (1494-1555) dünyada ilk mineraloji bilginidir; "De Re Metallica" eserinde bazı zehirlerin etkilerini belirlemiş, madenlerde havalandırma ve iş kazalarına karşı koruyucu önlemler ileri sürmüştür.',
        q: 'Dünyada "ilk mineraloji bilgini" olarak kabul edilen ve madenlerdeki zehirli etkiler ile iş kazalarına karşı koruyucu önlemleri "De Re Metallica" adlı eserinde ortaya koyan bilim insanı kimdir?'
      },
      {
        opt: 'Bernardino Ramazzini',
        desc: '1. PPTX Slayt 10: Bernardino Ramazzini "De Morbis Artificum Diatriba" (Meslek Hastalıkları) kitabının yazarıdır, iş sağlığının kurucusu sayılır, iş kazalarını önlemek için koruyucu güvenlik önlemleri önermiş, hekimlere hastalarının mesleğini sormalarını öğütlemiş ve işçi sağlığında ergonomi ilkelerini açıklamıştır.',
        q: '1700 yılında yayınladığı "De Morbis Artificum Diatriba" adlı eseriyle iş sağlığının ve meslek hastalıkları biliminin kurucusu kabul edilen, ergonomi ilkelerini açıklayan ve hekimlere "Hastalarınıza ne iş yaptığını sorunuz" diyen İtalyan hekim kimdir?'
      },
      {
        opt: 'Percival Pott',
        desc: '1. PPTX Slayt 13: İngiliz cerrah Percival Pott (1714-1788), baca temizleyicilerinde skrotum (testis) kanserini tanımlayarak mesleki kanserleri tarihte ilk kez ortaya koymuştur.',
        q: 'Sanayi Devrimi döneminde baca temizleyicilerinde kurum/is maruziyetine bağlı gelişen "skrotum (testis) kanserini" tanımlayarak tarihteki ilk mesleki kanser ilişkisini ortaya koyan bilim insanı kimdir?'
      },
      {
        opt: 'Robert Owen ve İngiliz Fabrikalar Yasası',
        desc: '1. PPTX Slayt 12-15: İngiliz parlamento üyesi Anthony Ashley Cooper çalışma koşullarını düzeltmeye çalışmış; İskoçya\'da fabrika sahibi Robert Owen 10 yaşın altında kimseyi çalıştırmamış; Dr. Charles Turner Thackrah İngiltere\'de ilk meslek hastalıkları kitabını yazmış; 1833 Fabrikalar Yasası ile fabrika denetimi/müfettişliği başlamış; 1842\'de kadın ve 10 yaş altı çocukların madenlerde çalışması yasaklanmış; 1847\'de On Saat Yasası çıkarılmıştır.',
        q: 'İngiltere\'de Sanayi Devrimi sonrasında İSG mevzuatının gelişimiyle ilgili aşağıdaki tarihsel eşleştirmelerden hangisi DOĞRUDUR?'
      },
      {
        opt: 'Türkiye İSG ve Meslek Hastalıkları Tarihçesi',
        desc: '1. PPTX Slayt 23-26: Cumhuriyet döneminde 1930 Umumi Hıfzıssıhha Kanunu (İşçiler Hıfzıssıhhası ve Gayrisıhhi Müesseseler), 1936\'da ilk İş Kanunu (3008 sayılı), 1945\'te Çalışma Bakanlığı ve İşçi Sigortaları İdaresi, 1949\'da ise ilk Meslek Hastalıkları Hastanesi (İstanbul Nişantaşı; 1977 Ankara ve İstanbul, 1994 Zonguldak) kurulmuştur.',
        q: 'Doç. Dr. Mehtap Savran\'ın sunumuna göre Türkiye\'de Cumhuriyet dönemi İSG mevzuatı ve kurumlarının tarihsel gelişimiyle ilgili aşağıdakilerden hangisi DOĞRUDUR?'
      }
    ]
  },
  {
    groupName: '2. Modül: Sağlık Gözetimi, Muayeneler, MAC/TLV ve Sağlık Dosyası (Doç. Dr. Mehtap Savran 2. PPTX)',
    items: [
      {
        opt: 'Toksisite ve Maruziyet Dozu',
        desc: '2. PPTX Slayt 3: Toksisite bir kimyasalın vücudun belli bir bölgesinde yeterli konsantrasyona (doza) ulaştığı zaman oluşturduğu hasar veya zarar kapasitesidir; Maruziyet dozu ise vücut tarafından emilen ve o bölgede bulunan gerçek miktardır.',
        q: '2. Hafta Sağlık Gözetimi sunumuna göre; "bir kimyasalın vücudun belli bir bölgesinde yeterli konsantrasyona ulaştığında oluşturduğu hasar kapasitesi" ile "vücut tarafından emilen gerçek miktar" sırasıyla hangi kavramlarla ifade edilir?'
      },
      {
        opt: 'İşe Giriş Muayenesi (Primer Koruma)',
        desc: '2. PPTX Slayt 11-14: İşe giriş muayenesinin temel amacı "Uygun işe yerleştirme"dir (koruyucu sağlık hizmetleri kapsamında primer/birincil korumadır). Örneğin akciğer hastalığı olanlar tozlu ortamda, karaciğer hastalığı olanlar solventlerle, sigara içenler asbestle, kontakt dermatiti olanlar deterjanla çalıştırılmamalıdır.',
        q: 'Sağlık gözetimi kapsamında "Uygun işe yerleştirme" (Primer/Birincil koruma) ilkesine göre aşağıdaki çalışan-iş eşleştirmelerinden hangisinde çalışanın o işte çalıştırılması SAKINCALIDIR?'
      },
      {
        opt: 'Tehlikeli ve Çok Tehlikeli İşlerde Çalışma Yasakları',
        desc: '2. PPTX Slayt 15-16: Tehlikeli ve çok tehlikeli işlerde; çocuklar, 16 yaşını doldurmamış genç işçiler ve çalıştığı işle ilgili mesleki eğitim almamış işçiler kesinlikle çalıştırılamaz.',
        q: 'Sağlık Gözetimi ders sunumuna göre "Tehlikeli ve Çok Tehlikeli" sınıftaki işlerde aşağıdakilerden hangileri kesinlikle çalıştırılamaz?'
      },
      {
        opt: 'Periyodik Kontrol Muayeneleri (Sekonder Koruma)',
        desc: '2. PPTX Slayt 17-18: Aralıklı kontrol muayeneleri sağlık sorunlarını erken yakalamada (Sekonder/İkincil koruma) çok önemlidir. Kurşun ve civa ile çalışanlarda her 3 ayda bir; arsenik ve insektisitlerle çalışanlarda her 6 ayda bir yapılır.',
        q: 'Sağlık sorunlarını erken evrede yakalamayı hedefleyen (Sekonder/İkincil koruma) "Aralıklı Kontrol Muayeneleri", kurşun/civa ile çalışanlarda ve arsenik/insektisit ile çalışanlarda sırasıyla hangi sıklıkla yapılır?'
      },
      {
        opt: 'Hastalık Sonu İşe Dönüş Muayenesi',
        desc: '2. PPTX Slayt 19: Meslek hastalığı veya herhangi bir sağlık sorunu nedeniyle 21 gün işten ayrı kalmak zorunda olan işçilere, işe dönüşlerinde eski işinde çalışıp çalışamayacağını belirlemek üzere "Hastalık Sonu İşe Dönüş Muayenesi" yapılır.',
        q: 'Sağlık Gözetimi sunumuna göre; herhangi bir sağlık sorunu veya kaza nedeniyle en az kaç gün işten ayrı kalmak zorunda olan işçilere eski işine dönmeden önce "Hastalık Sonu İşe Dönüş Muayenesi" yapılmalıdır?'
      },
      {
        opt: 'MAC / MAK Değeri',
        desc: '2. PPTX Slayt 22-23: MAC (Maximum Allowable Concentration / Müsaade Edilen Azami Konsantrasyon - MAK), işyeri ortamında hiçbir zaman ulaşılmaması veya aşılmaması gereken kritik tavan düzeydir; aşılması durumunda akut toksik belirtilere yol açar.',
        q: 'İşyeri ortam analizlerinde; çalışma ortamında HİÇBİR ZAMAN ulaşılmaması veya aşılmaması gereken, aşılması durumunda akut toksik belirtilere yol açan kritik düzeye ne ad verilir?'
      },
      {
        opt: 'TLV / ESD Değeri',
        desc: '2. PPTX Slayt 24-25: TLV (Threshold Limit Value / Eşik Sınır Değer - ESD), günde 8 ve haftada 40 saat çalışma ile çalışanlara zararlı etki göstermeden çalışılabilecek ortalama konsantrasyonu ifade eder; gün içinde kısa süreli aşılması akut toksik etki oluşturmaz.',
        q: 'Günde 8 saat ve haftada 40 saatlik çalışma süresince çalışanlara zararlı etki göstermeden çalışılabilecek "ortalama konsantrasyonu" ifade eden değere ne ad verilir?'
      },
      {
        opt: 'Sağlık Riskleri Kontrol Hiyerarşisi',
        desc: '2. PPTX Slayt 26-30: Sağlık risklerinin kontrolünde en etkili yaklaşım Kaynakta Kontroldür (tehlikeli maddeyi kullanmama, azaltma, ikame/substitution, işlemi değiştirme, lokal havalandırma). İkinci adım Aradaki Yolda Kontrol (mesafeyi artırma, genel havalandırma, ayırma), son adım ise Kişisel Koruyucu ve Yönetsel uygulamalardır (rotasyon, süre kısaltma).',
        q: 'İşyerinde sağlık risklerinin kontrolünde uygulanan yaklaşımlar etkinlik sırasına göre (en etkiliden başlayarak) nasıl sıralanır?'
      },
      {
        opt: 'Kişisel Sağlık Dosyalarının Saklanma Süresi',
        desc: '2. PPTX Slayt 41: İşveren ve işyeri sağlık birimi, çalışanların kişisel sağlık dosyalarını işten ayrılma tarihinden itibaren en az 15 yıl süreyle saklamak zorundadır.',
        q: 'Sağlık gözetimi kayıtları ve çalışanların kişisel sağlık dosyaları, çalışanın işten ayrılma tarihinden itibaren en az kaç yıl süreyle saklanmak zorundadır?'
      }
    ]
  },
  {
    groupName: '3. Modül: İlk Yardım Temel Kavramlar, Yaşam Bulguları, Kanamalar ve Şok (3. PPTX + 14 Ekim Dersi)',
    items: [
      {
        opt: 'İlk Yardım ve Acil Tedavi Ayrımı',
        desc: '3. PPTX Slayt 3-5: İlk yardım; olay yerinde, tıbbi araç gereç aranmaksızın eldeki olanaklarla yapılan ilaçsız uygulamalardır. Acil tedavi ise acil tedavi ünitelerinde doktor ve sağlık personeli tarafından gerekli donanımla yapılan tıbbi müdahaledir.',
        q: 'Doç. Dr. Mehtap Savran\'ın İlk Yardım sunumuna göre "İlk Yardım" ile "Acil Tedavi" arasındaki en temel fark aşağıdakilerden hangisidir?'
      },
      {
        opt: 'KBK İlkeleri ve Hayat Kurtarma Zinciri',
        desc: '3. PPTX Slayt 7-18: İlk yardımda temel uygulamalar Koruma, Bildirme (112) ve Kurtarma (KBK)\'dır. Hayat kurtarma zincirinin 1. halkası (112\'ye haber verme) ve 2. halkası (Olay yerinde Temel Yaşam Desteği) ilk yardımcının görevidir; 3. ve 4. halkalar sağlık ekiplerinin görevidir.',
        q: 'İlk yardımın temel uygulamaları olan "KBK" kısaltmasının açılımı ve "Hayat Kurtarma Zinciri"nin ilk yardımcıya ait olan halkaları hangisinde doğru verilmiştir?'
      },
      {
        opt: 'Bilinç Değerlendirme Düzeyleri',
        desc: '3. PPTX Slayt 27: Kişinin bilinci yerinde ise tüm uyarılara cevap verir. 1. Derece bilinç kaybında sözlü ve gürültülü uyaranlara cevap verir; 2. Derece bilinç kaybında ağrılı uyaranlara cevap verir; 3. Derece bilinç kaybında (Koma) ise tüm uyaranlara karşı tepkisizdir.',
        q: 'İlk yardımda bilinç durumu değerlendirilirken; "yalnızca ağrılı uyaranlara cevap veren" hasta ile "tüm sözlü ve ağrılı uyaranlara tepkisiz olan" hasta sırasıyla kaçıncı derece bilinç kaybındadır?'
      },
      {
        opt: 'Normal Solunum ve Nabız Değerleri',
        desc: '3. PPTX Slayt 28-29: Sağlıklı bir yetişkinde dakikada solunum sayısı 12–20 (çocukta 16–22, bebekte 18–24); normal nabız sayısı ise yetişkinde 60–100/dk (çocukta 100–120/dk, bebekte 100–140/dk)\'dır. Bebeklerde nabız kol atardamarından (brakial arter) 5 saniye süreyle kontrol edilir.',
        q: 'İlk Yardım Temel Kavramlar sunumuna göre sağlıklı bir yetişkinde dakikadaki normal "Solunum Sayısı" ve "Nabız Sayısı" aralıkları kaçtır?'
      },
      {
        opt: 'Vücut Sıcaklığı Sınırları',
        desc: '3. PPTX Slayt 37: İlk yardımda vücut ısısı koltuk altından ölçülür (normali 36,5°C). 38°C üstü yüksek ateş, 41–42°C üstü ve 34,5°C altı hayati tehlike işareti, 31,0°C ve altı ise ölümcüldür.',
        q: 'İlk yardımda vücut ısısının değerlendirilmesiyle ilgili olarak; ölçüm yapılan standart bölge, normal vücut ısısı ve ölümcül kabul edilen alt sınır sıcaklık hangisinde doğru verilmiştir?'
      },
      {
        opt: 'Kılcal, Toplar ve Atardamar Kanamaları',
        desc: '14 Ekim Dersi (dk 05:00-09:30): 70 kg yetişkinde ~5-6 litre (vücut ağırlığının 1/13\'ü) kan bulunur ve %20 kan kaybı hayati tehlike yaratır. Atardamar kanaması temiz kan taşıdığı için parlak kırmızı ve kesik kesik fışkırır tarzda; toplardamar kanaması koyu kırmızı ve taşma/sızıntı şeklindedir. İlk bez kanlanınca ASLA kaldırılmaz, üzerine ikinci bez konur.',
        q: '14 Ekim dersinde işlenen Kanamalar konusuna göre; "Atardamar kanaması" ve dış kanamalarda yara üzerine konulan "ilk bezin kanlanması" durumunda yapılacak doğru uygulama nedir?'
      },
      {
        opt: 'Şok Pozisyonu ve Şok Türleri',
        desc: '14 Ekim Dersi (dk 21:30-24:10): Şok; hücrelerin ve yaşamsal organların yeterince kanlanamamasıyla gelişen akut dolaşım yetmezliğidir. Kanama, yanık ve aşırı kusma/ishalde "Hipovolemik şok", kalp yetmezliğinde "Kardiyojenik şok" gelişir. Şok pozisyonunda hasta sırtüstü düz yatırılır ve bacakları 30 cm yukarı kaldırılır.',
        q: '14 Ekim dersine göre; şiddetli kanama, ağır yanık veya aşırı sıvı kaybı sonucunda dolaşan kan hacminin (volümünün) azalmasına bağlı gelişen şok türüne ne ad verilir ve hastaya hangi pozisyon verilir?'
      },
      {
        opt: 'Turnike (Boğucu Sargı) Uygulama Kuralları',
        desc: '14 Ekim Dersi (dk 26:50-33:35): Turnike (diğer adıyla İspanyol sargısı) sadece çok sayıda yaralı varsa, yaralı zor koşullarda taşınacaksa veya uzuv kopması varsa uygulanır. Tek kemikli bölgeye (üst kol veya uyluk) uygulanır; ilk 1 saatte 15-20 dakikada bir (5-10 sn), 2. saatte ise 10 dakikada bir gevşetilir ve toplam 2 saati geçmez. Tansiyon aleti manşonuyla yapılırsa hastanın tansiyonunun 20-50 mmHg üstüne (120-250 mmHg) şişirilir.',
        q: '14 Ekim dersinde Doç. Dr. Mehtap Savran\'ın vurguladığı "Turnike (İspanyol Sargısı)" kurallarıyla ilgili aşağıdakilerden hangisi DOĞRUDUR?'
      },
      {
        opt: 'Kopan Uzuv ve Burun Kanaması İlk Yardımı',
        desc: '14 Ekim Dersi (dk 33:45-45:10): Kopan uzuv temiz kuru poşete konur, o poşet 1 ölçek su + 2 ölçek buz bulunan ikinci bir poşete konur (doğrudan buzla temas ettirilmez). Burun kanamasında baş ÖNE eğilir ve burun kanatları 5 dk sıkılır. Kulak kanamasında bilinç kapalıysa kanayan kulak üzerine yan yatırılır. İleri yaşta ağrısız idrarda kanama (hematüri) aksi ispat edilmedikçe Mesane Kanseri habercisidir.',
        q: '14 Ekim dersinde hocanın "Bugün her şeyi unutun ama bunu unutmayın" diyerek vurguladığı klinik uyarı ile kopan uzuv ve burun kanaması müdahalesi hangi seçenekte doğru verilmiştir?'
      }
    ]
  },
  {
    groupName: '4. Modül: Meslek Hastalıklarına Giriş, Yükümlülük/Maruziyet Süreleri ve Tanı Süreci (Doç. Dr. Mehtap Savran 4. PPTX)',
    items: [
      {
        opt: 'Çalışanlarda Sağlık Sorunları Dağılımı',
        desc: '4. PPTX Slayt 3-9: Çalışanlarda en sık "Genel sağlık sorunları", ikinci sıklıkta "İşle ilgili hastalıklar" (Koroner Kalp Hastalıkları - KKH, KOAH, Kas-İskelet Sistemi Hastalıkları - KİSH), en seyrek olarak ise "Meslek hastalıkları" görülür.',
        q: '4. Hafta Meslek Hastalıklarına Giriş sunumuna göre; çalışanlarda görülen sağlık sorunlarının görülme sıklığı (en sıktan en seyreğe) ve en sık görülen "İşle İlgili Hastalıklar" hangisinde doğru verilmiştir?'
      },
      {
        opt: 'Meslek Hastalığı ve İşle İlgili Hastalık Farkı',
        desc: '4. PPTX Slayt 5-14: İşle ilgili hastalıklarda yapılan iş ile hastalık arasında doğrudan/spesifik bir neden-sonuç ilişkisi yoktur; çalışma koşulları hastalığın ortaya çıkmasını kolaylaştırıcı veya ağırlaştırıcı rol oynar. Meslek hastalıklarında ise çalışma koşullarındaki etken hastalığın doğrudan ve vazgeçilmez tek nedenidir (spesifik sebep-sonuç ilişkisi vardır).',
        q: 'Hukuki ve tıbbi ayırıcı tanı açısından "Meslek Hastalığı" ile "İşle İlgili Hastalık" arasındaki en temel fark aşağıdakilerden hangisidir?'
      },
      {
        opt: 'Yükümlülük Süresi Tanımı',
        desc: '4. PPTX Slayt 12 & 32: Yükümlülük süresi; çalışanın meslek hastalığına sebep olan işinden fiilen ayrıldığı tarih ile meslek hastalığının ortaya çıktığı tarih arasında geçen en uzun süredir (işten ayrıldıktan sonra hak iddia edebilme süresidir).',
        q: 'Çalışanın meslek hastalığına sebep olan işinden fiilen ayrıldığı tarih ile meslek hastalığının ortaya çıktığı tarih arasında geçen EN UZUN süreye (işten ayrıldıktan sonra hak iddia edebilme süresine) ne ad verilir?'
      },
      {
        opt: 'Meslek Hastalıklarında Yükümlülük Süreleri',
        desc: '4. PPTX Slayt 33: Yükümlülük süreleri; Benzene bağlı lösemi -> 10 yıl, Silikozis -> 10 yıl, Bisinozis -> 3 yıl, Tozlu ortamda pnömokonyoz -> 3 yıl, Kronik kurşun zehirlenmesi -> 3 yıl, Gürültülü ortamda işitme kaybı -> 6 ay, Akut arsenik zehirlenmesi -> 1 aydır.',
        q: '4. Hafta ders sunumunda yer alan tabloya göre; "Silikozis / Benzene bağlı lösemi", "Bisinozis / Kronik kurşun zehirlenmesi" ve "Gürültülü ortamda işitme kaybı" için belirlenen Yükümlülük Süreleri sırasıyla nedir?'
      },
      {
        opt: 'Maruziyet (Maruz Kalım) Süresi Tanımı',
        desc: '4. PPTX Slayt 13 & 34: Maruz kalım (maruziyet) süresi; bir meslek hastalığının oluşabilmesi için risk faktörü ile karşılaşılması gereken EN AZ süredir. Mevzuatta yalnız iki hastalık için belirtilmiştir: Pnömokonyoz için en az 3 yıl; Gürültüye bağlı işitme kaybı için en az 2 yıl (gürültü şiddeti sürekli 85 dB\'nin üstünde ise en az 30 gün).',
        q: 'Bir meslek hastalığının oluşabilmesi için zararlı etkenle karşılaşılması gereken EN AZ süreye ne ad verilir ve mevzuatta "Pnömokonyoz" ile "Gürültüye bağlı işitme kaybı (85 dB üstü)" için bu asgari süreler kaçtır?'
      },
      {
        opt: 'Meslek Hastalıkları Listesi 5 Ana Grubu',
        desc: '4. PPTX Slayt 18 & 36: Çalışma Gücü ve Meslekte Kazanma Gücü Kaybı Oranı Tespit İşlemleri Yönetmeliğine göre meslek hastalıkları 5 grupta sınıflandırılmıştır: A Grubu (Kimyasal), B Grubu (Mesleki Deri), C Grubu (Pnömokonyozlar ve Diğer Mesleki Solunum Sistemi), D Grubu (Mesleki Bulaşıcı), E Grubu (Fizik Etkenlerle Olan Meslek Hastalıkları).',
        q: 'Mevzuatımızda 5 ana grupta (A, B, C, D, E) sınıflandırılan Meslek Hastalıkları listesinde "C Grubu" ve "E Grubu" sırasıyla hangi hastalıkları kapsar?'
      },
      {
        opt: 'Bisinozis ve Standart Akciğer Grafisi',
        desc: '4. PPTX Slayt 21-22: Belirtilerin çalışma temposuyla ilişkisi tanı koydurucudur; "Pazartesi sabahları işe gelince artan nefes darlığı" pamuk tozuna bağlı Bisinozis için tipiktir. Mesleksel akciğer hastalıklarının (pnömokonyozların) tanısında ve ILO sınıflandırmasında en etkili yöntem radyolojik "Standart Akciğer Grafisi"dir.',
        q: '4. Hafta ders sunumuna göre; "Pazartesi sabahları işe başlandığında artan tipik nefes darlığı" hangi meslek hastalığı için karakteristiktir ve mesleksel akciğer hastalıklarının sınıflandırılmasında en etkili radyolojik yöntem hangisidir?'
      },
      {
        opt: 'Meslek Hastalıkları Görülme Sıklığı ve Rücu Davası',
        desc: '4. PPTX Slayt 29-31: Meslek hastalıklarının görülme sıklığı tüm dünyada binde 4–12 iken, Türkiye\'de tanı/bildirim eksikliği nedeniyle binde 0,07 düzeyindedir. Meslek hastalığının oluşmasında işverenin önlem almada belirgin ihmali saptanırsa SGK ödediği tazminatı işverene "Rücu Davası" ile yöneltir.',
        q: 'Doç. Dr. Mehtap Savran\'ın sunumuna göre; meslek hastalıklarının dünyada ve Türkiye\'de görülme sıklığı oranları ile işverenin ihmali durumunda sigortanın ödediği tazminatı işverene yöneltmesi davası hangisinde doğru verilmiştir?'
      },
      {
        opt: 'Meslek Hastalığı Tanısına Yetkili Sağlık Kurumları',
        desc: '4. PPTX Slayt 37 & 39: Türkiye\'de yasal olarak meslek hastalığı tıbbi tanısı yalnız 3 sağlık kuruluşunda konulabilir: 1) Meslek Hastalıkları Hastaneleri (Ankara, İstanbul, Zonguldak), 2) Kamu Üniversitesi Tıp Fakültesi Hastaneleri, 3) Sağlık Bakanlığı Eğitim ve Araştırma Hastaneleri.',
        q: '4. Hafta ders sonu sorularında da vurgulandığı üzere; Türkiye\'de yasal olarak "Meslek Hastalığı Tanısı" koymaya yetkili 3 sağlık kuruluşu aşağıdakilerden hangisidir?'
      }
    ]
  }
];

export const ilkyardimExtraFill = [
  { q: 'Dünya Sağlık Örgütü (WHO) ve ILO\'ya göre İSG; tüm mesleklerde işçilerin sadece fiziksel değil, _______, ruhsal ve sosyal iyilik durumlarını en üst düzeye ulaştırmak ve sürdürmektir.', a: 'bedensel', alts: ['fiziksel'], exp: '1. PPTX Slayt 3: Bedensel, ruhsal ve sosyal iyilik hali.' },
  { q: 'M.Ö. 370 yılında kurşunun zararlı etkilerinden ilk kez söz ederek "kurşun koliği" ve "kurşun anemisi"ni tanımlayan antik çağ hekimi _______\'tır.', a: 'hipokrat', alts: ['hipokrates'], exp: '1. PPTX Slayt 5: Kurşun koliği ve anemisini ilk tanımlayan Hipokrat\'tır.' },
  { q: 'Roma döneminde zehirleri "bitkisel, hayvansal ve mineral kaynaklı" olarak üç gruba ayıran bilim insanı _______\'tir.', a: 'dioscorides', alts: ['diaskorides'], exp: '1. PPTX Slayt 6: Zehirleri 3 gruba ayıran Dioscorides\'tir.' },
  { q: 'Çalışma ortamındaki tehlikeli tozlara karşı çalışanların korunması amacıyla maske yerine geçmek üzere başlarına torba geçirmelerini öneren Romalı düşünür _______\'dir.', a: 'plini', alts: ['plinius', 'yaşlı plini'], exp: '1. PPTX Slayt 7: Toza karşı başa torba (maske) öneren Plini\'dir.' },
  { q: 'Tirol maden işletmelerinde işyeri hekimi olarak çalışan, pnömokonyozları inceleyen ve toksikolojide "Doz" kavramını ortaya koyan Alman hekim _______\'tur.', a: 'paracelsus', alts: ['paraselsus'], exp: '1. PPTX Slayt 8: Tirol madenlerinde çalışan hekim Paracelsus\'tur.' },
  { q: 'Dünyada ilk mineraloji bilgini kabul edilen ve madenlerdeki zehirler ile koruyucu önlemleri "De Re Metallica" eserinde anlatan bilim insanı Georgius _______\'dır.', a: 'agricola', alts: [], exp: '1. PPTX Slayt 9: İlk mineraloji bilgini Georgius Agricola\'dır.' },
  { q: '1700 yılında yazdığı "De Morbis Artificum Diatriba" kitabıyla iş sağlığının kurucusu kabul edilen ve hekimlere "Hastalarınıza mesleğini sorunuz" diyen İtalyan hekim Bernardino _______\'dir.', a: 'ramazzini', alts: [], exp: '1. PPTX Slayt 10: İş sağlığının babası Bernardino Ramazzini\'dir.' },
  { q: 'Sanayi Devrimi döneminde baca temizleyicilerinde kurum maruziyetine bağlı "skrotum (testis) kanserini" tanımlayan İngiliz cerrah Percival _______\'tur.', a: 'pott', alts: [], exp: '1. PPTX Slayt 13: Baca temizleyicilerinde skrotum kanserini tanımlayan Percival Pott\'tur.' },
  { q: 'Türkiye\'de ilk Meslek Hastalıkları Hastanesi 1949 yılında _______ Nişantaşı\'nda kurulmuştur (ardından 1977 Ankara ve 1994 Zonguldak).', a: 'istanbul', alts: ['i̇stanbul'], exp: '1. PPTX Slayt 26: 1949 İstanbul Nişantaşı Meslek Hastalıkları Hastanesi.' },
  { q: 'Bir kimyasalın vücudun belli bir bölgesinde yeterli konsantrasyona (doza) ulaştığı zaman oluşturduğu hasar veya zarar kapasitesine _______ denir.', a: 'toksisite', alts: ['zehirlilik'], exp: '2. PPTX Slayt 3: Hasar veya zarar kapasitesine toksisite denir.' },
  { q: 'Çalışmaya başlamadan önce kişinin niteliklerinin belirlenmesi ve bu niteliklere uyan bir işe yerleştirilmesi (uygun işe yerleştirme) amacıyla yapılan muayeneye _______ muayenesi denir.', a: 'işe giriş', alts: ['ise giris', 'başlangıç'], exp: '2. PPTX Slayt 11: Uygun işe yerleştirme amacıyla işe giriş muayenesi yapılır.' },
  { q: 'Sağlık Gözetimi ders notlarına göre akciğer hastalığı olanlar tozlu işlerde, karaciğer hastalığı olanlar solventlerle, _______ içenler ise asbestle çalışılan yerlerde çalıştırılmamalıdır.', a: 'sigara', alts: ['tütün'], exp: '2. PPTX Slayt 13: Sigara içenler asbestle çalışılan yerlerde uygun değildir.' },
  { q: 'Tehlikeli ve çok tehlikeli işlerde çocuklar, mesleki eğitim almamış işçiler ve _______ yaşını doldurmamış genç işçiler çalıştırılamaz.', a: '16', alts: ['on altı', 'onaltı'], exp: '2. PPTX Slayt 16: 16 yaşını doldurmamış genç işçiler tehlikeli ve çok tehlikeli işlerde çalıştırılamaz.' },
  { q: 'Sağlık sorunlarını erken yakalamada (sekonder koruma) yapılan aralıklı kontrol muayeneleri; kurşun ve civa ile çalışanlarda her _______ ayda bir, arsenik ile çalışanlarda 6 ayda bir yapılır.', a: '3', alts: ['üç', 'uc'], exp: '2. PPTX Slayt 18: Kurşun ve civa ile çalışanlarda her 3 ayda bir yapılır.' },
  { q: 'Herhangi bir sağlık sorunu nedeniyle _______ gün işten ayrı kalmak zorunda olan işçilere işe başlamadan önce "Hastalık Sonu İşe Dönüş Muayenesi" yapılır.', a: '21', alts: ['yirmi bir', 'yirmibir'], exp: '2. PPTX Slayt 19: 21 gün işten ayrı kalan işçilere işe dönüş muayenesi yapılır.' },
  { q: 'İşyeri ortamında hiçbir zaman ulaşılmaması veya aşılmaması gereken, aşılması durumunda akut toksik belirtilere yol açan kritik tavan düzeye _______ (Müsaade Edilen Azami Konsantrasyon) değeri denir.', a: 'mak', alts: ['mac'], exp: '2. PPTX Slayt 22-23: Hiçbir zaman aşılmaması gereken kritik düzey MAK (MAC) değeridir.' },
  { q: 'Günde 8, haftada 40 saatlik çalışmada çalışanlara zararlı etki göstermeden çalışılabilecek ortalama konsantrasyonu ifade eden değere _______ (Eşik Sınır Değer / TLV) denir.', a: 'esd', alts: ['tlv', 'eşik sınır değer'], exp: '2. PPTX Slayt 24-25: Ortalama konsantrasyon sınırına ESD (TLV) denir.' },
  { q: 'Sağlık gözetimine ait çalışanların kişisel sağlık dosyaları, işten ayrılma tarihinden itibaren en az _______ yıl süreyle saklanmak zorundadır.', a: '15', alts: ['on beş', 'onbeş'], exp: '2. PPTX Slayt 41: Kişisel sağlık dosyaları işten ayrılma tarihinden itibaren 15 yıl saklanır.' },
  { q: 'Olay yerinde, sağlık görevlileri gelinceye kadar tıbbi araç-gereç aranmaksızın eldeki olanaklarla yapılan İLAÇSIZ uygulamalara _______ denir.', a: 'ilk yardım', alts: ['ilkyardım', 'ilkyardim'], exp: '3. PPTX Slayt 3-5: İlaçsız müdahaleye ilk yardım denir.' },
  { q: 'İlk yardımda temel uygulamalar KBK harfleriyle kodlanır: _______, Bildirme (112) ve Kurtarma (Müdahale).', a: 'koruma', alts: [], exp: '3. PPTX Slayt 7: KBK = Koruma, Bildirme, Kurtarma.' },
  { q: 'Tüm sözlü ve ağrılı uyaranlara karşı hastanın hiçbir tepki vermediği 3. derece en ağır bilinç kaybı tablosuna _______ denir.', a: 'koma', alts: [], exp: '3. PPTX Slayt 27: Tüm uyaranlara tepkisiz 3. derece bilinç kaybı komadır.' },
  { q: 'Sağlıklı bir yetişkinde dakikadaki normal solunum sayısı 12–20 iken, dakikadaki normal nabız sayısı _______–100 arasındadır.', a: '60', alts: ['altmış'], exp: '3. PPTX Slayt 28-29: Yetişkin normal nabız sayısı 60-100/dk\'dır.' },
  { q: '0–1 yaş arası bebeklerde nabız değerlendirmesi en sık kolun iç yüzündeki _______ arterden (kol atardamarından) 3 parmakla 5 saniye süreyle yapılır.', a: 'brakial', alts: ['kol', 'brakiyal'], exp: '3. PPTX Slayt 35 & 46: Bebeklerde nabız brakial arterden (kol atardamarından) alınır.' },
  { q: 'İlk değerlendirme sonucu bilinci kapalı ancak solunumu ve nabzı OLAN hasta/yaralıya hava yolunun açık kalması için yan yatış şeklinde _______ pozisyonu verilir.', a: 'koma', alts: ['derlenme', 'yarı yüzükoyun yan'], exp: '3. PPTX Slayt 46: Bilinci kapalı ama solunumu/nabzı olana koma pozisyonu verilir.' },
  { q: 'Oluşmasında çalışma ortamı ve şeklinin diğer faktörlerle birlikte kolaylaştırıcı/ağırlaştırıcı rol oynadığı (KKH, KOAH, KİSH gibi) kompleks etyolojili hastalıklara _______ ilgili hastalıklar denir.', a: 'işle', alts: ['isle', 'iş ile'], exp: '4. PPTX Slayt 5-9: KKH, KOAH ve KİSH işle ilgili hastalıklardır.' },
  { q: 'Çalışanın meslek hastalığına sebep olan işinden fiilen ayrıldığı tarih ile hastalığın ortaya çıktığı tarih arasında geçen en uzun süreye _______ süresi denir.', a: 'yükümlülük', alts: ['yukumluluk'], exp: '4. PPTX Slayt 12 & 32: İşten ayrıldıktan sonra geçen en uzun süre yükümlülük süresidir.' },
  { q: 'Çalışanın zararlı etkenle karşılaşmaya başlamasıyla meslek hastalığının oluşabilmesi için geçmesi gereken en az süreye _______ (maruz kalım) süresi denir.', a: 'maruziyet', alts: ['maruz kalım', 'maruz kalma'], exp: '4. PPTX Slayt 13 & 34: En az karşılaşma süresine maruziyet (maruz kalım) süresi denir.' },
  { q: 'Mevzuatımızda Pnömokonyozun meslek hastalığı sayılabilmesi için işçinin tozlu ortamda en az _______ yıl çalışmış olması (maruz kalım süresi) şarttır.', a: '3', alts: ['üç', 'uc'], exp: '4. PPTX Slayt 34: Pnömokonyoz maruz kalım süresi en az 3 yıldır.' },
  { q: 'Pamuk tozuna maruz kalan tekstil işçilerinde "Pazartesi sabahları artan nefes darlığı" ile karakterize mesleki solunum sistemi hastalığına _______ denir.', a: 'bisinozis', alts: ['bissinozis'], exp: '4. PPTX Slayt 21: Pazartesi sabahı artan nefes darlığı Bisinozis için tipiktir.' },
  { q: 'Meslek hastalığının meydana gelmesinde işverenin önlem almada belirgin ihmali saptanırsa SGK ödediği tazminatı işverene _______ davası ile yöneltir.', a: 'rücu', alts: ['rucu'], exp: '4. PPTX Slayt 31: Sigortanın tazminatı kusurlu işverene yöneltmesi Rücu Davasıdır.' },
  { q: '14 Ekim dersine göre kalp atımlarıyla uyumlu olarak kesik kesik fışkırır tarzda ve parlak kırmızı renkte akan kanama türü _______ kanamasıdır.', a: 'atardamar', alts: ['arter', 'arteriyel'], exp: '14 Ekim dersi: Parlak kırmızı ve fışkırır tarzda kanama atardamar kanamasıdır.' },
  { q: 'Kanama, yanık veya aşırı kusma/ishal sonucu vücutta dolaşan kan/sıvı hacminin azalmasına bağlı gelişen şok tablosuna _______ şok denir.', a: 'hipovolemik', alts: [], exp: '14 Ekim dersi dk 23:34: Kan/sıvı hacmi azalmasına bağlı şok hipovolemik şoktur.' },
  { q: 'Şok pozisyonunda hasta/yaralı düz bir zemine sırtüstü yatırılır ve bacakları yaklaşık _______ cm yukarı kaldırılarak desteklenir.', a: '30', alts: ['otuz'], exp: '14 Ekim dersi dk 21:45: Şok pozisyonunda bacaklar 30 cm kaldırılır.' },
  { q: 'Turnike (İspanyol sargısı) uygulamasında alttaki dokunun kangren/nekroz olmasını önlemek için ilk 1 saatte _______ dakikada bir 5–10 saniye gevşetilir ve toplamda 2 saatten uzun tutulmaz.', a: '20', alts: ['15-20', 'yirmi'], exp: '14 Ekim dersi dk 30:37: İlk bir saatte 20 dakikada bir (ikinci saatte 10 dakikada bir) gevşetilir.' },
  { q: 'Burun kanamasında yapılan en büyük hata başı geriye eğmektir; doğrusu hastayı oturtup başını _______ doğru eğerek burun kanatlarına 5 dakika bası uygulamaktır.', a: 'öne', alts: ['one', 'ön tarafa'], exp: '14 Ekim dersi dk 42:39: Burun kanamasında baş öne eğilir.' }
];
