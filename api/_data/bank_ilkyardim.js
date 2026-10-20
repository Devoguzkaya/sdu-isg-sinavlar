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
    groupName: '1. Modül: İSG ve Tıp Tarihinin Öncü Bilim İnsanları',
    items: [
      {
        opt: 'Bergamalı Galen',
        desc: '1. PPTX Slayt 5: Antik Roma gladyatörlerinin hekimi olan Bergamalı Galen, maden ocaklarındaki bakır sülfat dumanı ve asit buharlarının çalışanların akciğerlerine verdiği zararları ilk kez tanımlayan hekimdir.',
        q: 'Antik çağda gladyatör hekimliği yapan, maden ocaklarındaki asit ve bakır sülfat buharlarının çalışanların solunum yollarına zararlarını inceleyen hekim kimdir?'
      },
      {
        opt: 'Hipokrat',
        desc: '1. PPTX Slayt 5: Hipokrat (M.Ö. 370) tarihte ilk kez kurşunun zararlı etkilerinden söz ederek kurşun koliğini ve kurşun anemisini tanımlayan hekimdir.',
        q: 'M.Ö. 370 yılında kurşunun zararlı etkilerinden ilk kez söz ederek "kurşun koliği" ve "kurşun anemisi" klinik tablosunu tanımlayan antik hekim kimdir?'
      },
      {
        opt: 'Dioscorides',
        desc: '1. PPTX Slayt 6: Dioscorides zehirleri bitkisel, hayvansal ve mineral kaynaklı olmak üzere üç gruba ayırarak toksikolojinin temellerini atan hekimdir.',
        q: 'Antik Roma döneminde zehirleri ilk kez "bitkisel, hayvansal ve mineral" kaynaklı olarak üç ana sınıfa ayıran bilim insanı kimdir?'
      },
      {
        opt: 'Büyük Plinius (Plini)',
        desc: '1. PPTX Slayt 7: Plini (M.S. 23-79) çalışma ortamındaki tehlikeli tozlara karşı çalışanların korunması amacıyla maske yerine başlarına torba geçirmelerini önermiştir.',
        q: 'Çalışma ortamındaki tehlikeli tozlara karşı çalışanların başlarına torba (tarihteki ilk maske/KKD) geçirmelerini öneren Romalı düşünür kimdir?'
      },
      {
        opt: 'Paracelsus',
        desc: '1. PPTX Slayt 8: Paracelsus Tirol madenlerinde işyeri hekimi olarak çalışmış, pnömokonyozları incelemiş ve toksikolojinin "zehir ile ilacı ayıran dozdur" temel ilkesini ortaya koymuştur.',
        q: 'Tirol madenlerinde işyeri hekimliği yaparak madencilerin meslek hastalıklarını inceleyen ve "Her madde zehirdir; zehir ile ilacı ayıran dozdur" ilkesini ortaya koyan hekim kimdir?'
      },
      {
        opt: 'Georgius Agricola',
        desc: '1. PPTX Slayt 9: İlk mineraloji bilgini sayılan Agricola, "De Re Metallica" eserinde madenlerdeki zehirli gazları ve havalandırma önlemlerini açıklamıştır.',
        q: 'Dünyada ilk mineraloji bilgini kabul edilen ve madencilikteki zehirli etkiler ile havalandırma önlemlerini "De Re Metallica" adlı eserinde toplayan bilim insanı kimdir?'
      },
      {
        opt: 'Bernardino Ramazzini',
        desc: '1. PPTX Slayt 10: Ramazzini "De Morbis Artificum Diatriba" kitabının yazarıdır, iş sağlığının kurucusu sayılır ve hekimlere "Hastalarınıza ne iş yaptığını sorunuz" tavsiyesinde bulunmuştur.',
        q: '1700 yılında yayınladığı "De Morbis Artificum Diatriba" eseriyle iş sağlığının kurucusu kabul edilen ve hekimlere "Hastalarınıza ne iş yaptığını sorunuz" diyen İtalyan hekim kimdir?'
      },
      {
        opt: 'Percival Pott',
        desc: '1. PPTX Slayt 13: İngiliz cerrah Percival Pott, baca temizleyicilerinde is/kurum maruziyetine bağlı skrotum (testis) kanserini tanımlayarak ilk mesleki kanser ilişkisini ortaya koymuştur.',
        q: 'Sanayi Devrimi döneminde baca temizleyicilerinde kurum maruziyetine bağlı skrotum kanserini tanımlayarak tarihte ilk kez bir kanser türünü mesleki maruziyetle ilişkilendiren cerrah kimdir?'
      }
    ]
  },
  {
    groupName: '2. Modül: Sağlık Gözetimi ve Tıbbi Muayene Türleri',
    items: [
      {
        opt: 'İşe Giriş Muayenesi (Primer Koruma)',
        desc: 'Çalışanın fiziksel ve ruhsal özelliklerinin işin gerektirdiği niteliklerle eşleştirilmesini (uygun işe yerleştirme) amaçlayan birincil koruma muayenesidir.',
        q: 'Çalışanın sağlık durumunun yapacağı işin risklerine uygun olup olmadığını belirlemek ve "uygun işe yerleştirmeyi" sağlamak amacıyla yapılan birincil (primer) koruma muayenesi hangisidir?'
      },
      {
        opt: 'Aralıklı (Periyodik) Kontrol Muayenesi',
        desc: 'Çalışma ortamındaki zararlı faktörlerin neden olabileceği sağlık bozulmalarını erken evrede yakalamayı amaçlayan sekonder (ikincil) koruma muayenesidir.',
        q: 'Çalışma ortamındaki fiziksel, kimyasal ve biyolojik risklerin çalışan üzerinde oluşturabileceği etkileri henüz klinik belirti vermeden "erken evrede yakalamak" amacıyla yapılan muayene hangisidir?'
      },
      {
        opt: 'Hastalık Sonu İşe Dönüş Muayenesi',
        desc: 'Herhangi bir sağlık sorunu veya kaza nedeniyle en az 21 gün işten uzak kalan çalışanların eski işine dönmeden önce yapılan değerlendirme muayenesidir.',
        q: 'Sağlık Gözetimi mevzuatına göre; sağlık sorunu nedeniyle en az 21 gün işten ayrı kalmak zorunda kalan işçilere işbaşı yapmadan önce uygulanan muayene türü hangisidir?'
      },
      {
        opt: 'İş Değişikliği Muayenesi',
        desc: 'İşyerinde mevcut görevinden farklı risk profiline ve çalışma ortamına sahip başka bir işe nakledilen çalışana yapılan değerlendirme muayenesidir.',
        q: 'İşyerinde mevcut görevinden farklı fiziksel veya kimyasal risk faktörleri içeren başka bir bölüme nakledilecek personele yapılması zorunlu olan muayene türü hangisidir?'
      },
      {
        opt: 'Erken Ayrılma ve Maluliyet Muayenesi',
        desc: 'Meslek hastalığı veya iş kazası neticesinde meslekte kazanma gücünü kaybedenlerin kayıp oranını tespit etmek amacıyla yetkili kurullarca yapılan muayenedir.',
        q: 'Çalışanın meslekte kazanma gücünü hangi oranda kaybettiğini (%10, %60 vb.) tespit etmek amacıyla yetkili sağlık kurullarınca gerçekleştirilen resmi muayene hangisidir?'
      }
    ]
  },
  {
    groupName: '2. Modül: Toksikolojik Maruziyet Sınırları ve Eşik Değerler',
    items: [
      {
        opt: 'MAK / MAC (Müsaade Edilen Azami Konsantrasyon)',
        desc: 'İşyeri ortam havasında hiçbir zaman ulaşılmaması ve aşılmaması gereken, aşılması halinde akut toksik semptomlara yol açan tavan sınır konsantrasyondur.',
        q: 'İşyeri ortam analizlerinde; çalışma süresi boyunca HİÇBİR ZAMAN ulaşılmaması veya aşılmaması gereken, aşıldığında akut zehirlenmeye yol açan tavan değer hangisidir?'
      },
      {
        opt: 'ESD / TLV (Eşik Sınır Değer)',
        desc: 'Günde 8 saat ve haftada 40 saatlik çalışma süresince çalışanların sağlığına zarar vermeden tolere edilebilen ortalama konsantrasyondur.',
        q: 'Günde 8 saat ve haftada 40 saatlik standart çalışma periyodunda çalışanlarda zararlı etki yaratmadan çalışılabilecek "ortalama konsantrasyonu" ifade eden değer hangisidir?'
      },
      {
        opt: 'STEL (Kısa Süreli Maruziyet Sınırı)',
        desc: 'Vardiya boyunca herhangi bir anda 15 dakikayı geçmeyen ve günde en fazla 4 defa tekrarlanabilen kısa süreli tepe maruziyet sınırıdır.',
        q: 'Çalışma ortamında herhangi bir anda 15 dakikalık süreyi aşmaması gereken ve gün içinde en fazla 4 kez tekrarlanabilen tepe maruziyet sınır değeri hangisidir?'
      },
      {
        opt: 'TWA (Zaman Ağırlıklı Ortalama)',
        desc: '8 saatlik bir çalışma vardiyası süresince maruz kalınan tüm konsantrasyonların zaman ağırlıklı aritmetik ortalamasıdır.',
        q: '8 saatlik bir çalışma günü boyunca farklı zaman dilimlerinde ölçülen hava konsantrasyonlarının sürelerle çarpılıp toplam süreye bölünmesiyle bulunan ortalama değer hangisidir?'
      },
      {
        opt: 'LD50 (Ölümcül Doz 50)',
        desc: 'Bir kimyasalın deney hayvanları grubunun %50\'sinin ölümüne yol açan, ağız, deri veya enjeksiyon yoluyla verilen miligram/kilogram cinsinden dozudur.',
        q: 'Toksikolojide bir kimyasal maddenin test edilen deney popülasyonunun %50\'sinin ölümüne neden olan ve mg/kg olarak ifade edilen dozu hangisidir?'
      },
      {
        opt: 'LC50 (Ölümcül Konsantrasyon 50)',
        desc: 'Belirli bir süre boyunca solunduğunda test edilen deney hayvanlarının %50\'sinin ölümüne neden olan havadaki kimyasal konsantrasyondur (ppm veya mg/m³).',
        q: 'Hava yoluyla solunan toksik gaz veya buharların deney hayvanlarının %50\'sinin ölümüne yol açan havadaki hacimsel konsantrasyonu hangisidir?'
      }
    ]
  },
  {
    groupName: '3. Modül: Bilinç Değerlendirme ve Yaşam Bulguları',
    items: [
      {
        opt: '1. Derece Bilinç Kaybı',
        desc: 'Sözlü, gürültülü ve sesli uyarılara cevap verebilen, hafif konfüzyon ve uykuya meyil ile seyreden bilinç düzeyi.',
        q: 'İlk yardımda bilinç düzeyi değerlendirilirken; "yalnızca sesli ve sözlü uyarılara cevap veren" hasta kaçıncı derece bilinç kaybındadır?'
      },
      {
        opt: '2. Derece Bilinç Kaybı',
        desc: 'Sözlü uyarılara hiçbir yanıt vermeyip sadece ağrılı uyarılara (omuz sıkma vb.) yanıt veren bilinç düzeyi.',
        q: 'İlk yardımda sözlü uyarılara cevap vermeyen, ancak omzundan sıkıldığında ağrılı uyarana tepki veren bir kazazede kaçıncı derece bilinç kaybındadır?'
      },
      {
        opt: '3. Derece Bilinç Kaybı (Koma)',
        desc: 'Sözlü ve ağrılı tüm uyarılara tamamen tepkisiz olan en derin ve hayati risk taşıyan bilinç kaybı tablosudur.',
        q: 'İlk yardımda sözlü ve ağrılı tüm uyarılara karşı tamamen tepkisiz olan en ağır bilinç kaybı (Koma tablosu) kaçıncı derece bilinç kaybı olarak tanımlanır?'
      },
      {
        opt: 'Hipotermi (< 34.5°C)',
        desc: 'Vücut sıcaklığının 34.5°C\'nin altına düşmesiyle yaşamsal fonksiyonların yavaşladığı, 31°C altında ise ölümcül olan vücut soğuması durumu.',
        q: 'İlk yardımda vücut çekirdek sıcaklığının 34,5°C altına düşmesi ve 31°C altında ölümcül sonuçlar doğurması tablosu nasıl adlandırılır?'
      },
      {
        opt: 'Normal Vücut Sıcaklığı (36.5°C)',
        desc: 'Koltuk altından ölçülen sağlıklı ve dengeli normotermik vücut sıcaklığı değeri.',
        q: 'İlk yardım standartlarında koltuk altından ölçülen sağlıklı bir yetişkinin normal vücut ısısı referans değeri kaçtır?'
      },
      {
        opt: 'Hipertermi / Yüksek Ateş (> 38.0°C)',
        desc: 'Vücut sıcaklığının 38.0°C üzerine çıkması; 41-42°C üzerine ulaştığında ise enzimlerin denatüre olarak hayati tehlike oluşturduğu durumdur.',
        q: 'İlk yardımda vücut sıcaklığının 38,0°C\'nin üzerine çıkması ve 41-42°C\'yi aştığında beyin hasarı ve ölüm riski yaratması tablosu hangisidir?'
      }
    ]
  },
  {
    groupName: '3. Modül: Dolaşım Yetmezliği ve Akut Şok Türleri',
    items: [
      {
        opt: 'Hipovolemik Şok',
        desc: 'Şiddetli dış/iç kanama, ağır yanık veya aşırı sıvı kaybı (dehidratasyon) nedeniyle dolaşımdaki kan hacminin yetersiz kalmasıyla gelişen şok.',
        q: 'Şiddetli kanama, geniş yanıklar veya aşırı kusma/ishal sonucunda vücuttaki sıvı ve kan hacminin (volümünün) azalmasına bağlı gelişen şok türü hangisidir?'
      },
      {
        opt: 'Kardiyojenik Şok',
        desc: 'Kalp krizinde miyokard dokusunun hasar görmesi sonucu kalbin dokulara yeterli kan pompalayamamasıyla gelişen şok türüdür.',
        q: 'Kalp kasının enfarktüs veya yetmezlik nedeniyle vücudun ihtiyaç duyduğu debide kan pompalayamaması sonucu ortaya çıkan şok türü hangisidir?'
      },
      {
        opt: 'Anafilaktik Şok',
        desc: 'Alerjen madde, ilaç veya böcek sokması sonucu aşırı histamin salınımıyla periferik damarların aniden genişlemesiyle oluşan şiddetli alerjik şok.',
        q: 'Arı sokması, antibiyotik veya yabancı protein maruziyeti sonucu yaygın damar genişlemesi ve hava yolu ödemiyle seyreden şiddetli alerjik şok türü hangisidir?'
      },
      {
        opt: 'Septik Şok',
        desc: 'Ağır bakteriyel enfeksiyonlarda kana karışan toksinlerin tüm damar yatağını genişletmesi ve tansiyonu düşürmesiyle gelişen şok türüdür.',
        q: 'Ağır bakteriyel enfeksiyonlar sonucu kana karışan mikroorganizma toksinlerinin dolaşım sistemini çökertmesiyle meydana gelen şok türü hangisidir?'
      },
      {
        opt: 'Nörojenik Şok',
        desc: 'Omurilik travması veya sinir sistemi hasarı sonucu vazomotor kontrolün kaybolmasıyla kanın genişleyen damarlarda göllenmesiyle oluşan şok.',
        q: 'Omurilik yaralanmaları veya merkezi sinir sistemi travmaları neticesinde damar tonusunun kaybolması ve kanın alt ekstremitelerde göllenmesiyle gelişen şok hangisidir?'
      }
    ]
  },
  {
    groupName: '3. Modül: Kanama Çeşitleri ve Damar Özellikleri',
    items: [
      {
        opt: 'Atardamar (Arteriyel) Kanaması',
        desc: 'Kalp atımlarıyla uyumlu kesik kesik ve fışkırır tarzda, temiz oksijenli kan taşıdığı için parlak kırmızı renkte olan en tehlikeli kanama türüdür.',
        q: '14 Ekim dersine göre; kalp atımlarıyla senkronize kesik kesik fışkıran ve açık parlak kırmızı renkte hızla boşalan kanama türü hangisidir?'
      },
      {
        opt: 'Toplardamar (Venöz) Kanaması',
        desc: 'Kirli kan taşıdığı için koyu kırmızı renkte olan, fışkırmadan sürekli bir sızıntı veya taşma şeklinde yavaşça akan kanama türüdür.',
        q: 'Koyu kırmızı renkte olan, fışkırma göstermeksizin sürekli akıntı ve taşma şeklinde seyreden kanama türü hangisidir?'
      },
      {
        opt: 'Kılcal Damar (Kapiller) Kanaması',
        desc: 'Yüzeysel deri sıyrıklarında görülen, küçük damlacıklar halinde sızan ve genellikle pıhtılaşma mekanizmasıyla kendiliğinden duran kanama.',
        q: 'Küçük kabarcıklar ve damlacıklar şeklinde sızan, basıncı en düşük olan ve genellikle kendiliğinden duran kanama türü hangisidir?'
      },
      {
        opt: 'İç Kanama',
        desc: 'Dışarıdan kan görülmeyen ancak kafatası, göğüs veya karın boşluğuna kan toplanmasıyla hızla şok tablosu geliştiren sinsi kanama türü.',
        q: 'Dışarıya açık bir yara olmaksızın vücut boşluklarına veya organ içine kan birikmesiyle seyreden ve hipotansiyonla şoka götüren kanama türü hangisidir?'
      },
      {
        opt: 'Doğal Deliklerden Olan Kanama',
        desc: 'Kulak, burun, ağız, anüs veya ürogenital yoldan kaynaklanan ve iç organ hasarının veya kafa tabanı kırığının habercisi olan kanamalardır.',
        q: 'Kulak, burun, anüs gibi organlardan gelen ve kafa tabanı kırığı ya da iç organ yaralanmasını işaret edebilen kanamalara ne ad verilir?'
      }
    ]
  },
  {
    groupName: '4. Modül: Meslek Hastalıkları Yasal Süreleri ve Standartları',
    items: [
      {
        opt: 'Yükümlülük Süresi',
        desc: 'Çalışanın meslek hastalığına sebep olan işinden fiilen ayrıldığı tarih ile meslek hastalığının ortaya çıktığı tarih arasında geçen en uzun süredir.',
        q: 'Çalışanın meslek hastalığına neden olan işinden fiilen ayrıldığı tarih ile meslek hastalığının ortaya çıktığı tarih arasında geçen EN UZUN yasal süreye ne ad verilir?'
      },
      {
        opt: 'Maruziyet (Maruz Kalım) Süresi',
        desc: 'Bir meslek hastalığının klinik olarak ortaya çıkabilmesi için zararlı etkenle karşılaşılması gereken asgari (en az) karşılaşma süresidir.',
        q: 'Bir meslek hastalığının meydana gelebilmesi için zararlı risk faktörü ile karşılaşılması gereken EN AZ (asgari) süreye ne ad verilir?'
      },
      {
        opt: 'Pnömokonyoz Maruziyet Süresi (3 Yıl)',
        desc: 'Mevzuatta bir solunum yolu hastalığının tozlu ortamda meslek hastalığı sayılabilmesi için şart koşulan asgari 3 yıllık çalışma süresidir.',
        q: 'Mevzuatımıza göre bir çalışanda Pnömokonyozun meslek hastalığı kabul edilebilmesi için tozlu ortamda en az kaç yıl fiilen çalışmış olması şarttır?'
      },
      {
        opt: 'Gürültüye Bağlı İşitme Kaybı Maruziyet Süresi (2 Yıl)',
        desc: 'Gürültülü ortamda işitme kaybının meslek hastalığı sayılabilmesi için aranan asgari 2 yıl (85 dB üstünde sürekli ise 30 gün) süredir.',
        q: 'Gürültülü işlerde işitme kaybının meslek hastalığı sayılabilmesi için mevzuatta aranan genel asgari maruziyet süresi (ve 85 dB üstü istisnası) nedir?'
      },
      {
        opt: 'Silikozis ve Lösemi Yükümlülük Süresi (10 Yıl)',
        desc: 'Silis tozu ve benzene maruz kalan çalışanların işten ayrıldıktan sonra meslek hastalığı hak iddia edebileceği 10 yıllık yükümlülük süresidir.',
        q: 'Ders notlarındaki tabloya göre; silis tozuna bağlı Silikozis ve benzene bağlı Lösemi için belirlenen yasal Yükümlülük Süresi kaç yıldır?'
      },
      {
        opt: 'Gürültüye Bağlı İşitme Kaybı Yükümlülük Süresi (6 Ay)',
        desc: 'Gürültülü iş yerinden ayrıldıktan sonra işitme kaybı iddiasıyla SGK\'ya başvurulabilecek azami 6 aylık yasal yükümlülük süresidir.',
        q: 'Gürültülü ortamda çalışan bir işçinin işinden ayrıldıktan sonra gürültüye bağlı işitme kaybı için hak iddia edebileceği azami Yükümlülük Süresi nedir?'
      }
    ]
  },
  {
    groupName: '4. Modül: Meslek Hastalıkları Yasal Listesi 5 Ana Grubu',
    items: [
      {
        opt: 'A Grubu: Kimyasal Maddelerle Olan Meslek Hastalıkları',
        desc: 'Ağır metaller (kurşun, civa, arsenik), organik solventler, gazlar ve kimyasalların yol açtığı meslek hastalıkları grubudur.',
        q: 'Mevzuatımızdaki Meslek Hastalıkları Listesinde kurşun, cıva, arsenik ve solvent zehirlenmelerini içeren "A Grubu" hangi etkenleri kapsar?'
      },
      {
        opt: 'B Grubu: Mesleki Deri Hastalıkları',
        desc: 'Deri kanserleri, mesleki temas dermatiti, egzama ve derideki kimyasal/fiziksel lezyonları kapsayan meslek hastalıkları grubudur.',
        q: 'Meslek Hastalıkları Listesinde yer alan ve mesleki temas dermatiti, egzama ve deri kanserlerini kapsayan grup hangisidir?'
      },
      {
        opt: 'C Grubu: Pnömokonyozlar ve Solunum Sistemi Hastalıkları',
        desc: 'Silikozis, asbestozis, kömür işçisi pnömokonyozu ve bisinozis gibi mesleksel akciğer hastalıklarını içeren gruptur.',
        q: 'Meslek Hastalıkları Listesinde Silikozis, Asbestozis ve Bisinozis gibi mesleki akciğer hastalıklarını kapsayan "C Grubu" hangisidir?'
      },
      {
        opt: 'D Grubu: Mesleki Bulaşıcı Hastalıklar',
        desc: 'Sağlık çalışanları ve hayvancılık işlerinde görülen viral hepatit, tüberküloz, şarbon, bruselloz gibi enfeksiyonları kapsayan gruptur.',
        q: 'Sağlık personeli ve hayvancılık çalışanlarında görülen viral hepatit, tüberküloz, şarbon ve bruselloz gibi hastalıklar hangi meslek hastalığı grubundadır?'
      },
      {
        opt: 'E Grubu: Fizik Etkenlerle Olan Meslek Hastalıkları',
        desc: 'Gürültüye bağlı işitme kaybı, el-kol/tüm vücut titreşimi, dekompresyon (vurgun), iyonlaştırıcı radyasyon hastalıklarını kapsayan gruptur.',
        q: 'Meslek Hastalıkları Listesinde gürültüye bağlı işitme kaybı, titreşim bozuklukları ve termal radyasyon hastalıklarını kapsayan grup hangisidir?'
      }
    ]
  },
  {
    groupName: '4. Modül: Meslek Hastalığı Tanı Yetkisi ve Yasal Kurumlar',
    items: [
      {
        opt: 'Meslek Hastalıkları Hastaneleri',
        desc: 'Ankara, İstanbul ve Zonguldak\'ta faaliyet gösteren ve meslek hastalığı tanısı koymaya yetkili özel dal kamu hastaneleridir.',
        q: 'Türkiye\'de Ankara, İstanbul ve Zonguldak\'ta faaliyet gösteren ve meslek hastalıkları konusunda uzmanlaşmış yetkili sağlık kuruluşu hangisidir?'
      },
      {
        opt: 'Üniversite Tıp Fakültesi Hastaneleri',
        desc: 'Mevzuata göre Türkiye\'de yasal olarak meslek hastalığı tıbbi tanısı koymaya yetkili kamu üniversite hastaneleridir.',
        q: 'Mevzuatımızda Meslek Hastalıkları Hastaneleri dışında meslek hastalığı tıbbi tanısı koymaya yasal olarak yetkili kılınan kamu yükseköğretim kurumları hangileridir?'
      },
      {
        opt: 'Sağlık Bakanlığı Eğitim ve Araştırma Hastaneleri',
        desc: 'Sağlık Bakanlığı\'na bağlı olarak meslek hastalığı tıbbi raporu ve tanısı düzenleme yetkisine sahip kamu hastaneleridir.',
        q: 'Sağlık Bakanlığı bünyesinde bulunan ve meslek hastalığı tanısı koymaya yasal yetkisi olan üçüncü basamak kamu hastaneleri hangileridir?'
      },
      {
        opt: 'Sosyal Güvenlik Yüksek Sağlık Kurulu',
        desc: 'Meslek hastalığı tıbbi tanısı veya meslekte kazanma gücü kayıp oranına yapılan itirazları inceleyip nihai karara bağlayan en üst kuruldur.',
        q: 'Meslek hastalığı tespitine ve iş göremezlik derecesine yapılan itirazları inceleyerek nihai karara bağlayan Sosyal Güvenlik Kurumu üst kurulu hangisidir?'
      },
      {
        opt: 'SGK Rücu Davası',
        desc: 'İşverenin İSG önlemlerini almaması veya ağır ihmali durumunda SGK\'nın işçiye ödediği tazminatı işverenden tahsil etmek için açtığı davadır.',
        q: 'İşverenin önlem alma yükümlülüğünü ihlal etmesi durumunda SGK\'nın mağdur işçiye ödediği tedavi ve iş göremezlik bedellerini işverene rücu ettiği dava hangisidir?'
      }
    ]
  }
];

export const ilkyardimExtraFill = [
  { q: 'Dünya Sağlık Örgütü (WHO) ve ILO\'ya göre İSG; tüm mesleklerde işçilerin sadece fiziksel değil, _______, ruhsal ve sosyal iyilik durumlarını en üst düzeye ulaştırmak ve sürdürmektir.', a: 'bedensel', alts: ['fiziksel'], exp: '1. PPTX Slayt 3: Bedensel, ruhsal ve sosyal iyilik hali.' },
  { q: 'M.Ö. 370 yılında kurşunun zararlı etkilerinden ilk kez söz ederek "kurşun koliği" ve "kurşun anemisi"ni tanımlayan antik çağ hekimi ______\'tır.', a: 'hipokrat', alts: ['hipokrates'], exp: '1. PPTX Slayt 5: Kurşun koliği ve anemisini ilk tanımlayan Hipokrat\'tır.' },
  { q: 'Roma döneminde zehirleri "bitkisel, hayvansal ve mineral kaynaklı" olarak üç gruba ayıran bilim insanı ______\'tir.', a: 'dioscorides', alts: ['diaskorides'], exp: '1. PPTX Slayt 6: Zehirleri 3 gruba ayıran Dioscorides\'tir.' },
  { q: 'Çalışma ortamındaki tehlikeli tozlara karşı çalışanların korunması amacıyla maske yerine geçmek üzere başlarına torba geçirmelerini öneren Romalı düşünür ______\'dir.', a: 'plini', alts: ['plinius', 'yaşlı plini'], exp: '1. PPTX Slayt 7: Toza karşı başa torba (maske) öneren Plini\'dir.' },
  { q: 'Tirol maden işletmelerinde işyeri hekimi olarak çalışan, pnömokonyozları inceleyen ve toksikolojide "Doz" kavramını ortaya koyan Alman hekim ______\'tur.', a: 'paracelsus', alts: ['paraselsus'], exp: '1. PPTX Slayt 8: Tirol madenlerinde çalışan hekim Paracelsus\'tur.' },
  { q: 'Dünyada ilk mineraloji bilgini kabul edilen ve madenlerdeki zehirler ile koruyucu önlemleri "De Re Metallica" eserinde anlatan bilim insanı Georgius ______\'dır.', a: 'agricola', alts: [], exp: '1. PPTX Slayt 9: İlk mineraloji bilgini Georgius Agricola\'dır.' },
  { q: '1700 yılında yazdığı "De Morbis Artificum Diatriba" kitabıyla iş sağlığının kurucusu kabul edilen ve hekimlere "Hastalarınıza mesleğini sorunuz" diyen İtalyan hekim Bernardino ______\'dir.', a: 'ramazzini', alts: [], exp: '1. PPTX Slayt 10: İş sağlığının babası Bernardino Ramazzini\'dir.' },
  { q: 'Sanayi Devrimi döneminde baca temizleyicilerinde kurum maruziyetine bağlı "skrotum (testis) kanserini" tanımlayan İngiliz cerrah Percival ______\'tur.', a: 'pott', alts: [], exp: '1. PPTX Slayt 13: Baca temizleyicilerinde skrotum kanserini tanımlayan Percival Pott\'tur.' },
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
