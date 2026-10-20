export const fkruCourse = {
  id: "fkru",
  code: "12227ISG006",
  title: "Fiziksel ve Kimyasal Risk Unsurları",
  instructor: "Dr. Öğr. Üyesi Dicle ÖZDEMİR KÜÇÜKÇAPRAZ",
  examInfo: "Vize: %80-90 Ödev + %10-20 Yüz Yüze Test | Geçme Notu: 70 | Fiziksel Risk Etmenleri + Radyasyon",
  color: "teal",
  hex: "#0d9488",
  badge: "Çarşamba • 40 Soru (25 Test + 15 Boşluk)",
  tips: [
    "Dicle Hoca vizede Fiziksel Risk Etmenleri (Gürültü, Titreşim, Termal Konfor, Aydınlatma, Basınç ve 14 Ekim'de işlenen Radyasyon) konularından sorumluluk verdi.",
    "Gürültü (80 - 85 - 87 dB) ve Titreşim (El-kol: 2,5 ve 5 m/s²; Bütün vücut: 0,5 ve 1,15 m/s²) yönetmelik sınır değerleri %100 sınav sorusudur!",
    "14 Ekim'de işlenen İyonlaştırıcı Radyasyon (Alfa, Beta, Gama, X-ışını), ALARA prensibi (Zaman-Mesafe-Zırhlama) ve doz limitleri (20 mSv / 50 mSv) çok taze ve kritiktir."
  ],
  mcQuestions: [
    {
      q: "Çalışanların Gürültü ile İlgili Risklerden Korunmalarına Dair Yönetmelik'e göre; En Düşük Maruziyet Eylem Değeri, En Yüksek Maruziyet Eylem Değeri ve Maruziyet Sınır Değeri sırasıyla kaç dB(A)'dır?",
      options: [
        "75 dB(A) - 80 dB(A) - 85 dB(A)",
        "80 dB(A) - 85 dB(A) - 87 dB(A)",
        "80 dB(A) - 87 dB(A) - 90 dB(A)",
        "85 dB(A) - 90 dB(A) - 95 dB(A)",
        "70 dB(A) - 80 dB(A) - 85 dB(A)"
      ],
      answer: 1,
      explanation: "En düşük maruziyet eylem değeri: 80 dB(A) (kulak koruyucu hazır bulundurulur), En yüksek maruziyet eylem değeri: 85 dB(A) (kulak koruyucu takılması zorunludur), Maruziyet sınır değeri: 87 dB(A).",
      optionExplanations: [
        "75 dB(A) yönetmelikte yer alan bir eylem değeri değildir; sınır değer de 85 değil 87 dB(A)'dır.",
        "DOĞRU: Yönetmeliğe göre En Düşük Eylem: 80 dB(A), En Yüksek Eylem: 85 dB(A) ve Maruziyet Sınır Değeri: 87 dB(A)'dır.",
        "En yüksek eylem değeri 87 değil 85 dB(A); sınır değer ise 90 değil 87 dB(A)'dır.",
        "85-90-95 dB(A) eski mevzuat/OSHA değerleri olup yürürlükteki yönetmeliğe göre yanlıştır.",
        "70 dB(A) eylem değeri değildir; gürültü eylem değerleri 80 dB(A) ile başlar."
      ]
    },
    {
      q: "İşyerinde günlük gürültü maruziyet düzeyi kaç dB(A)'ya ulaştığında veya aştığında çalışanların kulak koruyucu donanımları (kulaklık/tıkaç) kullanması YASAL OLARAK ZORUNLUDUR?",
      options: ["70 dB(A)", "80 dB(A)", "85 dB(A)", "87 dB(A)", "90 dB(A)"],
      answer: 2,
      explanation: "80 dB(A)'da işveren kulak koruyucuyu hazır bulundurur; 85 dB(A) (en yüksek maruziyet eylem değeri) ve üzerinde ise çalışanın kulak koruyucuyu kullanması zorunludur.",
      optionExplanations: [
        "70 dB(A) normal ofis/konuşma üstü gürültü olup kulak koruyucu zorunluluğu yoktur.",
        "80 dB(A) (En düşük maruziyet eylem değeri) düzeyinde işveren kulak koruyucuyu 'hazır bulundurur' ancak takılması henüz zorunlu değildir.",
        "DOĞRU: 85 dB(A) (En yüksek maruziyet eylem değeri) seviyesine ulaşıldığında kulak koruyucu donanım kullanılması ZORUNLUDUR.",
        "87 dB(A) kulak koruyucunun sağladığı azaltma da dikkate alınarak kulağa ulaşan sesin asla aşmaması gereken 'Maruziyet Sınır Değeri'dir.",
        "90 dB(A) zorunlu kullanım sınırının (85 dB) çok üzerindedir."
      ]
    },
    {
      q: "Logaritmik ses ölçeğine göre; her ikisi de 85 dB(A) gürültü yayan iki özdeş makine aynı anda çalıştırıldığında ortamın toplam gürültü düzeyi kaç dB(A) olur?",
      options: ["170 dB(A)", "88 dB(A)", "85 dB(A)", "95 dB(A)", "100 dB(A)"],
      answer: 1,
      explanation: "Desibel logaritmik bir ölçektir. Eşit şiddetteki iki ses kaynağının toplamı gürültüyü ikiye katlamaz, yalnızca +3 dB artırır: 85 + 3 = 88 dB(A).",
      optionExplanations: [
        "Desibel doğrusal (aritmetik) toplanmaz; 85 + 85 = 170 dB yapmak en sık düşülen sınav tuzağıdır!",
        "DOĞRU: Logaritmik ölçekte eşit iki gürültü kaynağı birleştiğinde ses basıncı seviyesi +3 dB artar (85 + 3 = 88 dB).",
        "İki makine aynı anda çalıştığında ses enerjisi iki katına çıktığı için 85 dB olarak sabit kalmaz, +3 dB artar.",
        "95 dB olması için (+10 dB artış) aynı anda 10 adet 85 dB'lik makinenin çalışması gerekir.",
        "100 dB (+15 dB artış) yaklaşık 32 adet özdeş makinenin aynı anda çalışmasına karşılık gelir."
      ]
    },
    {
      q: "Çalışanların Titreşimle İlgili Risklerden Korunmalarına Dair Yönetmelik'e göre 'El-Kol Titreşimi' için 8 saatlik günlük maruziyet eylem değeri ve maruziyet sınır değeri sırasıyla nedir?",
      options: [
        "0,5 m/s² ve 1,15 m/s²",
        "2,5 m/s² ve 5,0 m/s²",
        "1,0 m/s² ve 2,0 m/s²",
        "5,0 m/s² ve 10,0 m/s²",
        "0,25 m/s² ve 0,5 m/s²"
      ],
      answer: 1,
      explanation: "El-kol titreşiminde günlük maruziyet eylem değeri 2,5 m/s², maruziyet sınır değeri 5,0 m/s²'dir. (0,5 ve 1,15 m/s² değerleri Bütün Vücut titreşimi içindir).",
      optionExplanations: [
        "0,5 m/s² (eylem) ve 1,15 m/s² (sınır) değerleri El-Kol için değil, 'Bütün Vücut Titreşimi' (traktör, iş makinesi vb.) için geçerlidir!",
        "DOĞRU: El-Kol titreşiminde 8 saatlik günlük maruziyet eylem değeri 2,5 m/s², maruziyet sınır değeri ise 5,0 m/s²'dir.",
        "1,0 ve 2,0 m/s² yönetmelikte yer alan değerler değildir.",
        "5,0 m/s² eylem değil sınır değerdir; 10,0 m/s² yönetmelik sınırının iki katıdır.",
        "0,25 m/s² yönetmelikte yer almaz."
      ]
    },
    {
      q: "Kırıcı, delici ve motorlu testere gibi el-kol titreşimine yol açan aletleri uzun yıllar kullanan çalışanlarda parmak uçlarındaki kılcal damarların büzülmesiyle beyazlaşma ve his kaybı yapan meslek hastalığı hangisidir?",
      options: [
        "Beyaz Parmak Hastalığı (Raynaud Fenomeni)",
        "Karpal Tünel Sendromu",
        "Silikozis",
        "Vurgun (Dekompresyon)",
        "Katarakt"
      ],
      answer: 0,
      explanation: "El-kol titreşimi özellikle soğuk ortamla birleştiğinde damar ve sinir hasarı yaparak 'Beyaz Parmak Hastalığı (Titreşime bağlı Raynaud Fenomeni)' oluşturur.",
      optionExplanations: [
        "DOĞRU: El-kol titreşimi ve soğuk maruziyeti parmak kılcal damarlarında vazospazm (büzülme) yaparak 'Beyaz Parmak Hastalığı (Raynaud Fenomeni)'ne yol açar.",
        "Karpal Tünel Sendromu el bileğindeki median sinirin tekrarlayan bükme hareketleriyle sıkışmasıdır (klavye, montaj işçileri vb.).",
        "Silikozis kristal silis tozu solunmasıyla oluşan akciğer hastalığıdır.",
        "Vurgun yüksek basınçtan normal basınca hızlı çıkışta kanda azot kabarcığı oluşmasıdır.",
        "Katarakt kızılötesi (IR) veya iyonlaştırıcı radyasyon maruziyetiyle göz merceğinin saydamlığını kaybetmesidir."
      ]
    },
    {
      q: "İşyeri ortamında 'Termal Konfor' şartlarını belirleyen 4 temel fiziksel faktör aşağıdakilerden hangisinde bir arada verilmiştir?",
      options: [
        "Hava sıcaklığı, Bağıl nem, Hava akım hızı, Termal radyasyon (Radyant ısı)",
        "Gürültü, Aydınlatma, Toz, Basınç",
        "Sadece termometre sıcaklığı ve rakım",
        "Oksijen oranı ve karbondioksit oranı",
        "Titreşim ve rüzgar yönü"
      ],
      answer: 0,
      explanation: "Termal konforun 4 bileşeni: Hava sıcaklığı (kuru termometre), Nem (higrometre), Hava akım hızı (anemometre) ve Radyant ısıdır (glob termometre).",
      optionExplanations: [
        "DOĞRU: Termal konforu belirleyen 4 çevresel faktör; Hava sıcaklığı, Bağıl nem, Hava akım hızı ve Radyant ısıdır (kişisel faktörler ise giysi yalıtımı ve metabolik ısıdır).",
        "Gürültü, aydınlatma, toz ve basınç diğer fiziksel/kimyasal risk etmenleridir, termal konfor bileşeni değildir.",
        "Rakım atmosfer basıncını etkiler; tek başına kuru termometre sıcaklığı termal konforu ölçmeye yetmez.",
        "Oksijen ve CO2 oranı iç ortam hava kalitesi / kimyasal boğucu gaz parametreleridir.",
        "Titreşim mekanik bir risk etmenidir."
      ]
    },
    {
      q: "Termal konfor ölçümlerinde 'Radyant Isıyı' (ışıma ısısını) ölçmek için kullanılan siyah küreli ölçüm cihazı ve sıcak ortam stres indeksi kısaltması nedir?",
      options: [
        "Glob Termometre - WBGT (Islak Hazne Küre Sıcaklığı) İndeksi",
        "Odyometre - dB İndeksi",
        "Lüksmetre - Lümen İndeksi",
        "Barometre - Pascal İndeksi",
        "Dozimetre - Sievert İndeksi"
      ],
      answer: 0,
      explanation: "Radyant ısı 'Glob Termometre' ile ölçülür; sıcak çalışma ortamlarının termal stres değerlendirmesinde WBGT (Wet Bulb Globe Temperature) indeksi kullanılır.",
      optionExplanations: [
        "DOĞRU: Mat siyah bakır küreli 'Glob Termometre' radyant (ışıma) ısısını ölçer ve WBGT ısı stresi indeksinin hesaplanmasında kullanılır.",
        "Odyometre işitme kaybını ölçen tıbbi cihazdır.",
        "Lüksmetre aydınlatma şiddetini ölçer.",
        "Barometre açık hava (atmosfer) basıncını ölçer.",
        "Dozimetre radyasyon veya kişisel gürültü dozunu ölçer."
      ]
    },
    {
      q: "14 Ekim dersinde işlenen 'Radyasyon' konusuna göre; aşağıdakilerden hangisi atomdan elektron koparma gücüne sahip 'İyonlaştırıcı Radyasyon' türlerinden biri DEĞİLDİR?",
      options: [
        "Alfa (α) parçacıkları",
        "Beta (β) parçacıkları",
        "Gama (γ) ve X-ışınları",
        "Kızılötesi (Infrared - IR) ve Radyo dalgaları",
        "Nötron radyasyonu"
      ],
      answer: 3,
      explanation: "Alfa, Beta, Gama, X-ışınları ve Nötronlar 'İyonlaştırıcı' radyasyondur. UV, Görünür ışık, Kızılötesi (IR), Mikrodalga ve Radyo dalgaları ise 'İyonlaştırıcı Olmayan' radyasyondur.",
      optionExplanations: [
        "Alfa (α) parçacıkları (2 proton + 2 nötron / Helyum çekirdeği) yüksek iyonlaştırma gücüne sahip parçacık radyasyonudur.",
        "Beta (β) parçacıkları (yüksek enerjili elektron/pozitron) iyonlaştırıcı parçacık radyasyonudur.",
        "Gama (γ) ve X-ışınları çok yüksek frekanslı ve kısa dalga boylu iyonlaştırıcı elektromanyetik radyasyondur.",
        "DOĞRU (DEĞİLDİR): Kızılötesi (IR), görünür ışık, mikrodalga ve radyo dalgalarının foton enerjisi atomdan elektron koparmaya yetmez; 'İyonlaştırıcı Olmayan Radyasyon'dur.",
        "Nötron radyasyonu yüksüz parçacık olup yüksek nüfuziyetli dolaylı iyonlaştırıcı radyasyondur."
      ]
    },
    {
      q: "İyonlaştırıcı radyasyon türlerinden kütle ve yükü büyük olduğu için kağıt tabakası veya deri tarafından bile durdurulabilen, ancak solunduğunda veya yutulduğunda iç organlarda çok ağır hasar yapan radyasyon türü hangisidir?",
      options: [
        "Alfa (α) radyasyonu",
        "Gama (γ) radyasyonu",
        "X-ışınları",
        "Radyo dalgaları",
        "Mikrodalga"
      ],
      answer: 0,
      explanation: "Alfa parçacıkları bir kağıt yaprağı ile durdurulabilir (dış maruziyette deriyi geçemez), ancak radon gazı veya radyoaktif toz olarak solunduğunda (iç maruziyette) iyonlaştırma gücü en yüksek ve en tehlikeli olanıdır.",
      optionExplanations: [
        "DOĞRU: Alfa (α) parçacıkları ağır ve +2 yüklü olduğu için kağıt veya ölü deri tabakasıyla durdurulur; fakat solunduğunda iç dokularda en yıkıcı biyolojik hasarı (Q=20) yapar.",
        "Gama (γ) ışınları yüksüz elektromanyetik dalga olduğu için kağıt ve alüminyumu kolayca geçer; ancak kalın kurşun veya beton duvarla durdurulabilir.",
        "X-ışınları yüksek nüfuziyetlidir, kurşun önlük/paravan ile zırhlanır.",
        "Radyo dalgaları iyonlaştırıcı değildir.",
        "Mikrodalga iyonlaştırıcı değildir, dokularda su moleküllerini titreştirerek sadece ısınma (termal etki) yapar."
      ]
    },
    {
      q: "Radyasyondan korunmada ALARA (makul ölçüde ulaşılabilecek en düşük düzey) prensibinin 3 temel dış radyasyon korunma kuralı nedir?",
      options: [
        "Zamanı kısaltmak - Mesafeyi artırmak - Zırhlama (engel) kullanmak",
        "Süreyi uzatmak - Kaynağa yaklaşmak - Maske takmak",
        "Sıcaklığı artırmak - Havalandırma açmak - Kulaklık takmak",
        "Topraklama yapmak - Sigorta takmak - Eldiven giymek",
        "Işığı kapatmak - Su içmek - Dinlenmek"
      ],
      answer: 0,
      explanation: "Dicle Hoca'nın 14 Ekim dersinde vurguladığı 3 altın kural: 1) Zaman (maruziyet süresini azalt), 2) Mesafe (uzaklığın karesiyle radyasyon şiddeti azalır - ters kare kanunu), 3) Zırhlama (kurşun/beton bariyer).",
      optionExplanations: [
        "DOĞRU: Dış radyasyon maruziyetinden korunmanın 3 temel fiziksel ilkesi: Zaman (azalt), Mesafe (artır - ters kare yasası) ve Zırhlama (kurşun/beton engel kullan).",
        "Süreyi uzatmak ve kaynağa yaklaşmak alınan radyasyon dozunu katlanarak artırır.",
        "Sıcaklık ve kulaklık radyasyona karşı hiçbir koruma sağlamaz.",
        "Topraklama ve sigorta elektrik güvenliği önlemleridir.",
        "Işığı kapatmak radyoaktif kaynağın ışımasını durdurmaz."
      ]
    },
    {
      q: "Radyasyon Güvenliği Yönetmeliği'ne göre radyasyon görevlileri için yıllık etkin doz sınırı (ardışık 5 yılın ortalaması) ve tek bir yılda aşılamayacak maksimum doz sınırı kaç mSv (miliSievert)'tir?",
      options: [
        "Yıllık ortalama 20 mSv / Tek yılda en fazla 50 mSv",
        "Yıllık ortalama 100 mSv / Tek yılda 500 mSv",
        "Yıllık ortalama 1 mSv / Tek yılda 5 mSv",
        "Yıllık ortalama 500 mSv / Tek yılda 1000 mSv",
        "Sınır yoktur"
      ],
      answer: 0,
      explanation: "Radyasyon görevlileri için ardışık 5 yılın ortalaması 20 mSv/yıl, herhangi bir tek yılda ise en fazla 50 mSv'tir. Toplum üyesi (halk) için sınır yılda 1 mSv'tir.",
      optionExplanations: [
        "DOĞRU: Radyasyon görevlileri için ardışık 5 yıl ortalaması 20 mSv/yıl (5 yılda toplam 100 mSv), tek bir yılda azami 50 mSv; sivil halk için ise yılda 1 mSv'tir.",
        "100 mSv tek yıllık değil, 5 yıllık toplam üst limittir; 500 mSv ise el-ayak/cilt eşdeğer doz sınırıdır.",
        "1 mSv ve 5 mSv değerleri radyasyon görevlileri için değil, 'Toplum Üyesi (Halk)' için geçerli sınır değerlerdir.",
        "500-1000 mSv akut radyasyon sendromu başlatabilecek tehlikeli yüksek dozlardır.",
        "İyonlaştırıcı radyasyonda stokastik (kanser/genetik) etkiler nedeniyle sıkı yasal doz sınırları vardır."
      ]
    },
    {
      q: "Dalgıçlarda, sünger avcılarında ve yüksek basınçlı tünel (keson) işçilerinde; yüksek basınçtan normal basınca hızla çıkıldığında kanda erimiş olan hangi gazın kabarcık oluşturması sonucu 'Vurgun (Dekompresyon hastalığı)' meydana gelir?",
      options: [
        "Azot (Nitrojen - N2) gazı",
        "Karbonmonoksit gazı",
        "Metan gazı",
        "Klor gazı",
        "Helyum gazı"
      ],
      answer: 0,
      explanation: "Yüksek basınç altında dokularda ve kanda çözünen 'Azot (N2)' gazı, basınç hızla düşürüldüğünde gaz kabarcıklarına dönüşerek damarları tıkar ve vurgun (dekompresyon) hastalığına yol açar.",
      optionExplanations: [
        "DOĞRU: Solunan havanın %78'ini oluşturan Azot (N2) gazı yüksek basınçta kanda çözünür; hızlı çıkışta tıpkı gazoz kapağı açıldığında çıkan kabarcıklar gibi damar içinde kabarcıklaşarak vurgun yapar.",
        "Karbonmonoksit (CO) eksik yanma sonucu oluşan ve hemoglobine bağlanan kimyasal boğucu gazdır.",
        "Metan (CH4) basit boğucu ve patlayıcı (grizu) gazdır.",
        "Klor (Cl2) solunum yollarını tahriş eden (irritan) zehirli bir gazdır.",
        "Helyum tam tersine çok derin dalışlarda azot narkozunu ve vurgunu azaltmak için oksijenle karıştırılarak (Heliox) kullanılan soy gazdır."
      ]
    },
    {
      q: "Atölyelerde floresan lambaların titreşim frekansı ile torna/testerelerin dönüş frekansının çakışması sonucu, hızla dönen makine parçasının 'duruyormuş veya çok yavaş dönüyormuş gibi' algılanması tehlikesine ne ad verilir?",
      options: [
        "Stroboskopik etki",
        "Kamaşma etkisi",
        "Termal etki",
        "Akustik travma",
        "Rezonans"
      ],
      answer: 0,
      explanation: "Aydınlatmada alternatif akım frekansıyla döner makine hızının çakışması sonucu oluşan tehlikeli optik yanılsamaya 'Stroboskopik Etki' denir; lambaları farklı fazlara bağlayarak önlenir.",
      optionExplanations: [
        "DOĞRU: Işığın 50 Hz titreşimi ile döner parçanın devir sayısının senkronize olması sonucu parçanın duruyormuş gibi görünmesine 'Stroboskopik Etki' denir.",
        "Kamaşma etkisi; aşırı parlak ışık kaynağının doğrudan göze gelmesi veya parlak yüzeyden yansımasıyla oluşan geçici görme bozukluğudur.",
        "Termal etki ısı kaynaklı etkidir.",
        "Akustik travma ani ve çok yüksek ses (patlama) sonucu oluşan işitme hasarıdır.",
        "Rezonans mekanik titreşim frekanslarının çakışarak genliğin büyümesidir."
      ]
    },
    {
      q: "Aydınlatma şiddetinin ölçü birimi ve ölçüm yapılan cihaz aşağıdakilerden hangisinde doğru verilmiştir?",
      options: [
        "Lüks (Lux) - Lüksmetre",
        "Desibel - Dozimetre",
        "Sievert - Geiger sayacı",
        "m/s² - Akselerometre",
        "Bar - Manometre"
      ],
      answer: 0,
      explanation: "Birim yüzeye düşen ışık akısına 'Aydınlatma Şiddeti' denir, birimi Lüks (Lux = Lümen/m²)'tür ve Lüksmetre ile ölçülür.",
      optionExplanations: [
        "DOĞRU: Aydınlatma şiddeti birimi Lüks (1 Lux = 1 Lümen / m²) olup işyerlerinde 'Lüksmetre' ile ölçülür.",
        "Desibel (dB) ses basınç düzeyi birimidir ve sonometre/gürültü dozimetresi ile ölçülür.",
        "Sievert (Sv) radyasyon etkin/eşdeğer doz birimidir.",
        "m/s² ivme (titreşim şiddeti) birimidir ve akselerometre (ivmeölçer) ile ölçülür.",
        "Bar kapalı kap basıncı birimidir ve manometre ile ölçülür."
      ]
    },
    {
      q: "Dr. Öğr. Üyesi Dicle Özdemir Küçükçapraz'ın dersinde vize notunun %80-90'ını oluşturacağını belirttiği ödevin temel konusu ve geçme notu kriteri nedir?",
      options: [
        "Fiziksel risk unsurları kapsamında yaşanmış/potansiyel bir iş kazası haberinin vaka analizi ('Sen olsan ne yapardın?') - Geçme notu ortalaması en az 70",
        "Kimyasal laboratuvar deneyi - Geçme notu 50",
        "Sadece makale çevirisi - Geçme notu 60",
        "Ödev yoktur",
        "Elektrik panosu çizimi - Geçme notu 45"
      ],
      answer: 0,
      explanation: "Dicle Hoca 16 Eylül dersinde vize ödevinin fiziksel risk unsurları üzerinden bir haber/vaka analizi olacağını, sisteme yükleneceğini ve lisansüstü geçme notunun 70 olduğunu vurgulamıştır.",
      optionExplanations: [
        "DOĞRU: Dicle Hoca vizenin %80-90'ının fiziksel risk unsurlarıyla ilgili bir haber/vaka analizi ödevi olacağını ve lisansüstü geçme barajının 70 puan olduğunu açıklamıştır.",
        "Kimyasal risk unsurları final döneminin konusudur ve geçme notu 50 değil 70'tir.",
        "Makale çevirisi değil, iş kazası haberi üzerinden İSG analizi istenmektedir.",
        "Bu derste vize ağırlıklı olarak ödev üzerinden değerlendirilmektedir.",
        "Elektrik panosu çizimi ve 45 geçme notu yanlıştır."
      ]
    },
    {
      q: "Çalışanların Titreşimle İlgili Risklerden Korunmalarına Dair Yönetmelik'e göre; traktör, ekskavatör, kamyon ve iş makinesi operatörlerinin maruz kaldığı 'Bütün Vücut Titreşimi' için 8 saatlik günlük maruziyet eylem değeri ve sınır değeri sırasıyla kaç m/s²'dir?",
      options: [
        "0,5 m/s² (Eylem Değeri) ve 1,15 m/s² (Sınır Değeri)",
        "2,5 m/s² ve 5,0 m/s²",
        "1,0 m/s² ve 3,0 m/s²",
        "5,0 m/s² ve 10,0 m/s²",
        "80 m/s² ve 85 m/s²"
      ],
      answer: 0,
      explanation: "Bütün vücut titreşiminde 8 saatlik günlük maruziyet eylem değeri 0,5 m/s², maruziyet sınır değeri ise 1,15 m/s²'dir.",
      optionExplanations: [
        "DOĞRU: Bütün vücut titreşiminde günlük maruziyet eylem değeri 0,5 m/s² ve maruziyet sınır değeri 1,15 m/s²'dir.",
        "2,5 m/s² ve 5,0 m/s² değerleri Bütün Vücut için değil, 'El-Kol Titreşimi' içindir!",
        "1,0 ve 3,0 m/s² yönetmelikte bulunmayan değerlerdir.",
        "5,0 ve 10,0 m/s² bütün vücut için aşırı yüksek değerlerdir.",
        "80 ve 85 değerleri dB(A) cinsinden gürültü eylem değerleridir."
      ]
    },
    {
      q: "Gürültüye bağlı mesleki işitme kaybı (NİHL) ilk olarak iç kulaktaki Corti organında hangi frekans (Hz) bölgesinde başlar ve odyogramda 'Akustik Çentik' olarak görülür?",
      options: [
        "4000 Hz (4 kHz) tiz ses frekansında",
        "100 Hz bas ses frekansında",
        "20 Hz alt sınırda",
        "500 Hz konuşma frekansında",
        "50.000 Hz ultrasonik bölgede"
      ],
      answer: 0,
      explanation: "Kronik gürültü maruziyetine bağlı işitme kaybı tipik olarak 4000 Hz (4 kHz) frekansında başlar ('4000 Hz çentiği'). Bu aşamada kişi günlük konuşmaları (500-2000 Hz) hala duyabildiği için kaybın farkına varmaz.",
      optionExplanations: [
        "DOĞRU: İç kulak (koklea) anatomisi nedeniyle gürültü hasarı ilk olarak 4000 Hz (4 kHz) frekansında başlar ve odyometride tipik V şeklinde çentik oluşturur.",
        "100 Hz kalın (bas) ses frekansıdır; gürültüye bağlı işitme kaybı bas seslerde değil tiz seslerde (3000-6000 Hz) başlar.",
        "20 Hz insan kulağının duyabildiği en alt frekans sınırıdır.",
        "500-2000 Hz günlük konuşma frekans aralığıdır; maruziyet devam ederse kayıp 4000 Hz'den bu bölgeye yayılır.",
        "Insan kulağı sadece 20 Hz ile 20.000 Hz (20 kHz) arasını duyabilir; 50.000 Hz ultrasoniktir."
      ]
    },
    {
      q: "Genç ve sağlıklı bir insan kulağının işitebildiği ses frekansı aralığı (İşitme Frekans Bandı) aşağıdakilerden hangisidir?",
      options: [
        "20 Hz ile 20.000 Hz (20 kHz) arası",
        "0 Hz ile 5 Hz arası",
        "50.000 Hz ile 100.000 Hz arası",
        "1 dB ile 10 dB arası",
        "100 kHz ile 1 MHz arası"
      ],
      answer: 0,
      explanation: "İnsan kulağı 20 Hz ile 20.000 Hz (20 kHz) arasındaki ses dalgalarını duyabilir. 20 Hz altına 'İnfrasonik (Ses altı)', 20.000 Hz üstüne ise 'Ultrasonik (Ses üstü)' denir.",
      optionExplanations: [
        "DOĞRU: İnsan kulağının duyabildiği frekans aralığı 20 Hz (en kalın/bas) ile 20.000 Hz (en ince/tiz) arasıdır.",
        "20 Hz'in altındaki seslere 'İnfrasonik' sesler denir, insan kulağı tarafından işitilemez.",
        "20.000 Hz'in üzerindeki seslere 'Ultrasonik' sesler denir, insan kulağı tarafından işitilemez.",
        "Desibel (dB) frekans değil, ses basınç düzeyi (şiddet) birimidir.",
        "100 kHz - 1 MHz radyo/ultrason frekanslarıdır."
      ]
    },
    {
      q: "Termal konfor ölçümlerinde havadaki 'Bağıl Nemi' ve 'Hava Akım Hızını' ölçmek için kullanılan cihazlar sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?",
      options: [
        "Nem: Higrometre (veya Psikrometre) — Hava Akım Hızı: Anemometre",
        "Nem: Barometre — Hava Akım Hızı: Lüksmetre",
        "Nem: Anemometre — Hava Akım Hızı: Glob termometre",
        "Nem: Dozimetre — Hava Akım Hızı: Odyometre",
        "Nem: Manometre — Hava Akım Hızı: Takometre"
      ],
      answer: 0,
      explanation: "Havadaki nem 'Higrometre / Psikrometre' ile; hava akım hızı (esinti/rüzgar hızı) ise 'Anemometre' ile ölçülür.",
      optionExplanations: [
        "DOĞRU: Bağıl nem Higrometre (veya ıslak-kuru hazneli Psikrometre) ile, hava akım hızı ise Anemometre ile ölçülür.",
        "Barometre atmosfer basıncını, Lüksmetre ise aydınlatma şiddetini ölçer.",
        "Anemometre nemi değil hava hızını; Glob termometre ise radyant ısıyı ölçer.",
        "Dozimetre radyasyon/gürültü dozunu, odyometre işitmeyi ölçer.",
        "Manometre kapalı kap basıncını, takometre ise motor/mil devir sayısını (RPM) ölçer."
      ]
    },
    {
      q: "İyonlaştırıcı radyasyon türlerinden 'Beta (β) parçacıkları' ve 'Nötron radyasyonu' için en uygun zırhlama malzemeleri sırasıyla hangileridir?",
      options: [
        "Beta için: Alüminyum veya Pleksiglas levha — Nötron için: Su, Parafin veya Beton",
        "Her ikisi için sadece ince kağıt",
        "Sadece pamuklu kumaş",
        "Zırhlamaya gerek yoktur",
        "Sadece tahta çit"
      ],
      answer: 0,
      explanation: "Alfa kağıtla; Beta alüminyum veya pleksiglas/plastik levhalarla; Gama ve X-ışınları kurşun/çelik/betonla; Nötronlar ise su, parafin ve polietilen gibi hidrojen atomu zengin malzemelerle yavaşlatılıp zırhlanır.",
      optionExplanations: [
        "DOĞRU: Beta parçacıkları birkaç mm'lik alüminyum veya pleksiglas ile durdurulur; yüksüz nötronlar ise kendi kütlesine yakın hidrojen atomu içeren su, parafin veya polietilen ile zırhlanır.",
        "İnce kağıt yalnızca Alfa (α) parçacıklarını durdurabilir; Beta ve Nötron kağıdı kolayca geçer.",
        "Pamuklu kumaş radyasyon zırhlaması sağlamaz (sadece radyoaktif toz bulaşmasını/kontaminasyonu önler).",
        "İyonlaştırıcı radyasyonda zırhlama ALARA'nın 3 temel ayağından biridir.",
        "Tahta çit radyasyonu durduramaz."
      ]
    },
    {
      q: "14 Ekim dersinde işlenen 'İyonlaştırıcı Radyasyonun Biyolojik Etkileri' kapsamında; belirli bir eşik doz aşılınca ortaya çıkan ve doz arttıkça şiddeti artan (cilt kızarıklığı/eritem, katarakt, kısırlık gibi) etkilere ne ad verilir?",
      options: [
        "Deterministik Etkiler",
        "Stokastik Etkiler",
        "Akustik Etkiler",
        "Mekanik Etkiler",
        "Psikolojik Etkiler"
      ],
      answer: 0,
      explanation: "Radyasyonun belirli bir eşik dozun üzerinde kesin olarak ortaya çıkan ve dozla şiddeti artan etkilerine 'Deterministik Etkiler' (katarakt, eritem, akut radyasyon sendromu); eşik dozu olmayan ve olasılığa bağlı gelişen kanser/kalıtsal etkilere ise 'Stokastik Etkiler' denir.",
      optionExplanations: [
        "DOĞRU: Belirli bir eşik dozun aşılmasıyla çok sayıda hücrenin ölmesi sonucu ortaya çıkan (katarakt, cilt yanığı, kısırlık) etkilere 'Deterministik Etkiler' denir.",
        "Stokastik (tesadüfi/olasılıksal) etkilerde eşik doz yoktur; en küçük dozda bile DNA mutasyonuyla yıllar sonra kanser veya kalıtsal bozukluk çıkma 'olasılığı' vardır.",
        "Akustik etkiler ses ve gürültü kaynaklıdır.",
        "Mekanik etkiler darbe ve titreşim kaynaklıdır.",
        "Psikolojik etkiler radyasyonun hücresel biyolojik sınıflandırması değildir."
      ]
    },
    {
      q: "Elektrik ark kaynağı veya oksijen kaynağı yapan çalışanlarda, koruyucu kaynak maskesi kullanılmadığında hangi 'İyonlaştırıcı Olmayan Radyasyon' türüne maruziyet sonucu gözde 'Fotokeratit (Kaynak Alması)' ve deride güneş yanığı benzeri eritem oluşur?",
      options: [
        "Ultraviyole (UV) ışınları",
        "Alfa parçacıkları",
        "Radyo dalgaları",
        "Nötron ışınları",
        "Ses dalgaları"
      ],
      answer: 0,
      explanation: "Kaynak arkı yoğun miktarda Ultraviyole (UV) ve Kızılötesi (IR) ışın yayar. UV ışınları korneada 'kaynak alması (fotokeratit / konjonktivit)' yaparken, IR ışınları uzun vadede göz merceğinde 'katarakt' oluşturur.",
      optionExplanations: [
        "DOĞRU: Kaynak arkından yayılan yoğun UV (morötesi) ışınları kornea epitelini yakarak şiddetli ağrılı 'kaynak alması (fotokeratit)' tablosuna yol açar.",
        "Alfa parçacıkları radyoaktif çekirdek bozunmasıyla çıkar, elektrik ark kaynağında oluşmaz.",
        "Radyo dalgaları düşük enerjilidir, kaynak alması yapmaz.",
        "Nötron ışınları nükleer reaktörlerde oluşur.",
        "Ses dalgaları mekanik dalgalardır, elektromanyetik ışıma değildir."
      ]
    },
    {
      q: "Radyasyon kaynaklarıyla çalışan personelin (röntgen teknisyeni, nükleer tıp çalışanı, endüstriyel radyografi uzmanı) maruz kaldığı kişisel radyasyon dozunu takip etmek için yakasına/üzerine taktığı ölçüm cihazına ne ad verilir?",
      options: [
        "Kişisel Radyasyon Dozimetresi",
        "Anemometre",
        "Higrometre",
        "Lüksmetre",
        "Spirometre"
      ],
      answer: 0,
      explanation: "Radyasyon görevlilerinin aylık/yıllık kümülatif dozlarını izlemek için TLD (Termolüminesans), OSL veya Film Dozimetre kullanılması yasal zorunluluktur.",
      optionExplanations: [
        "DOĞRU: Radyasyon görevlilerinin aldığı kişisel etkin dozu ölçüp kayıt altına alan yakalık cihaza 'Dozimetre (TLD/Film/OSL)' denir.",
        "Anemometre rüzgar/hava akım hızını ölçer.",
        "Higrometre ortam nemini ölçer.",
        "Lüksmetre aydınlatma şiddetini ölçer.",
        "Spirometre solunum fonksiyon testinde akciğer kapasitesini ölçer."
      ]
    },
    {
      q: "Yüksek irtifada (dağcılık, yüksek rakımlı şantiyeler, kabin basıncı düşen uçaklar) çalışanlarda atmosfer basıncının düşmesine bağlı olarak gelişen en temel fizyolojik tehlike nedir?",
      options: [
        "Havadaki oksijen kısmi basıncının düşmesi sonucu dokuların oksijensiz kalması (Hipoksi)",
        "Kanda azot miktarının aşırı artması",
        "Kulak zarının aşırı dış basınçla içe çökmesi",
        "Gürültü seviyesinin artması",
        "Radyant ısının artması"
      ],
      answer: 0,
      explanation: "Yüksek rakımlara çıkıldıkça atmosfer basıncı ve dolayısıyla oksijenin kısmi basıncı düşer; alveollerden kana geçen oksijen azaldığı için 'Hipoksi (oksijen yetersizliği)' gelişir.",
      optionExplanations: [
        "DOĞRU: Düşük atmosfer basıncında (yüksek irtifada) oksijen kısmi basıncı düştüğü için kanda ve dokularda oksijen yetersizliği (Hipoksi) oluşur.",
        "Kanda azot çözünmesi düşük basınçta değil, dalgıçlardaki 'yüksek basınç' (hiperbarik) ortamında olur.",
        "Dış basıncın artması alçalmada/dalışta görülür; yükselmede orta kulak iç basıncı yüksek kalır.",
        "Rakım artışıyla gürültünün doğrudan ilgisi yoktur.",
        "Yüksek irtifada hava sıcaklığı her 100 metrede yaklaşık 0,65 °C düşer (soğur)."
      ]
    },
    {
      q: "Radyasyon Güvenliği Yönetmeliği'ne göre; 18 yaşını doldurmamış olanların radyasyon kaynağı ile çalışması ve hamileliği belirlenmiş kadın çalışanların radyasyonlu alanlarda çalıştırılması ile ilgili kural nedir?",
      options: [
        "18 yaşından küçükler radyasyon işlerinde çalıştırılamaz; hamileler fetüs dozu 1 mSv'i aşmayacak şekilde görevlendirilir, emzirenler açık kaynaklarda çalışamaz",
        "16 yaşından itibaren herkes tam zamanlı radyasyon görevlisi olabilir",
        "Hamile çalışanlar yılda 50 mSv doz alabilir",
        "Emziren kadınlar açık radyoaktif kaynaklarla çalışmaya devam eder",
        "Yaş veya gebelik sınırı yoktur"
      ],
      answer: 0,
      explanation: "14 Ekim dersinde vurgulandığı üzere: 18 yaş altı kişiler radyasyon uygulamalarında çalıştırılamaz (sadece 16-18 yaş arası stajyer/öğrenciler için yılda 6 mSv sınırı vardır); gebelerde doğacak çocuk (fetüs) toplum üyesi kabul edilerek gebelik süresince 1 mSv'i aşmayacak şekilde radyasyonsuz/düşük riskli birime alınır.",
      optionExplanations: [
        "DOĞRU: 18 yaş altı radyasyon görevlisi olamaz; gebelerde fetüs dozu 1 mSv ile sınırlıdır ve emziren çalışanlar iç kontaminasyon riski taşıyan nükleer tıp/açık kaynak işlerinde çalıştırılamaz.",
        "16-18 yaş arası kişiler radyasyon görevlisi olamaz (yalnızca eğitim/staj amacıyla 6 mSv sınırıyla denetimli gözlem yapabilir).",
        "50 mSv gebe olmayan yetişkin radyasyon görevlisinin tek yıllık üst sınırıdır; fetüs için çok tehlikelidir (teratojenik etki).",
        "Anne sütüyle bebeğe radyoaktif izotop geçebileceği için emziren anneler açık radyoaktif maddelerle çalıştırılamaz.",
        "Radyasyon Güvenliği Yönetmeliği yaş ve gebelik konusunda çok sıkı yasaklar içerir."
      ]
    }
  ],
  fillQuestions: [
    {
      q: "Gürültü Yönetmeliği'ne göre çalışanların kulak koruyucu donanım kullanmasının zorunlu olduğu En Yüksek Maruziyet Eylem Değeri ________ dB(A)'dır.",
      answers: ["85", "seksen beş", "seksenbes"],
      hint: "80 - ? - 87 dB(A) üçlüsündeki zorunlu kullanım sınırı",
      explanation: "80 dB(A)'da kulak koruyucu hazır bulundurulur, 85 dB(A)'da ise kullanımı yasal olarak zorunludur."
    },
    {
      q: "Gürültü Yönetmeliği'nde KKD etkisi de dikkate alınarak hiçbir koşulda aşılmaması gereken Maruziyet Sınır Değeri ________ dB(A)'dır.",
      answers: ["87", "seksen yedi", "seksenyedi"],
      hint: "Gürültüdeki en üst sınır değer",
      explanation: "Gürültüde Maruziyet Sınır Değeri 87 dB(A)'dır."
    },
    {
      q: "El-kol titreşimi için 8 saatlik günlük maruziyet eylem değeri 2,5 m/s², maruziyet sınır değeri ise ________ m/s²'dir.",
      answers: ["5", "5,0", "5.0", "beş"],
      hint: "El-kol titreşimi sınır değeri",
      explanation: "El-kol titreşiminde günlük eylem değeri 2,5 m/s², sınır değer ise 5,0 m/s²'dir."
    },
    {
      q: "Bütün vücut titreşimi için 8 saatlik günlük maruziyet eylem değeri ________ m/s², sınır değeri ise 1,15 m/s²'dir.",
      answers: ["0,5", "0.5", "yarım"],
      hint: "Bütün vücut titreşimi eylem değeri",
      explanation: "Bütün vücut titreşiminde günlük eylem değeri 0,5 m/s², sınır değer ise 1,15 m/s²'dir."
    },
    {
      q: "Yüksek basınç altında çalışan dalgıç ve keson işçilerinde basınç hızla düştüğünde kanda ________ gazı kabarcıklarının oluşmasıyla 'Vurgun' (dekompresyon) meydana gelir.",
      answers: ["azot", "nitrojen", "N2"],
      hint: "Havanın %78'ini oluşturan gaz",
      explanation: "Basınç hızla düştüğünde dokularda çözünen Azot (N2) gazı kabarcıklaşarak damarları tıkar ve vurgun yapar."
    },
    {
      q: "Dönen makine parçalarının floresan ışık frekansıyla çakışarak duruyormuş gibi görünmesi yanılsamasına ________ etki denir.",
      answers: ["stroboskopik"],
      hint: "Optik yanılma etkisi",
      explanation: "Işık titreşim frekansı ile döner parça hızının çakışmasıyla oluşan optik yanılmaya Stroboskopik Etki denir."
    },
    {
      q: "Aydınlatma şiddetinin birimi ________ olup, işyerlerinde Lüksmetre cihazı ile ölçülür.",
      answers: ["lüks", "luks", "lux"],
      hint: "Lümen / m² karşılığı birim",
      explanation: "Aydınlatma şiddeti birimi Lüks (Lux = Lümen/m²)'tür."
    },
    {
      q: "Radyasyondan korunmada dış maruziyeti azaltmanın 3 temel yolu: Zamanı kısaltmak, Mesafeyi artırmak ve ________ kullanmaktır.",
      answers: ["zırhlama", "zirhlama"],
      hint: "Kurşun veya beton bariyer kullanımı",
      explanation: "Dış radyasyondan korunmanın 3 temel kuralı: Zaman, Mesafe ve Zırhlama'dır."
    },
    {
      q: "Radyasyon görevlileri için ardışık 5 yılın ortalaması yıllık etkin doz sınırı ________ mSv, tek bir yılda ise en fazla 50 mSv'tir.",
      answers: ["20", "yirmi"],
      hint: "Yıllık ortalama radyasyon doz sınırı (mSv)",
      explanation: "Radyasyon görevlileri için 5 yıllık ortalama etkin doz sınırı yılda 20 mSv, tek bir yılda maksimum 50 mSv'tir."
    },
    {
      q: "Termal konfor ölçümlerinde ortamdaki radyant ısıyı (ışıma ısısını) ölçmek için siyah küreli ________ termometre kullanılır.",
      answers: ["glob", "globe"],
      hint: "Siyah küreli termometre türü",
      explanation: "Radyant (ışıma) ısısını ölçmek için mat siyah küreli Glob Termometre kullanılır."
    },
    {
      q: "Her ikisi de 80 dB(A) gürültü yayan iki makine aynı anda çalıştığında toplam gürültü düzeyi +3 dB artarak ________ dB(A) olur.",
      answers: ["83", "seksen üç", "seksenuc"],
      hint: "Logaritmik toplama (+3 dB kuralı)",
      explanation: "Eşit iki ses kaynağı birleştiğinde toplam gürültü düzeyi 3 dB artar (80 + 3 = 83 dB)."
    },
    {
      q: "El-kol titreşimine maruz kalan çalışanlarda soğuk etkisiyle parmak uçlarının beyazlaşması ve his kaybı ile seyreden meslek hastalığına Beyaz Parmak (________ fenomeni) denir.",
      answers: ["Raynaud", "raynaud"],
      hint: "Titreşime bağlı damar büzülmesi sendromu",
      explanation: "El-kol titreşiminin damar ve sinirlerde yaptığı hasara Beyaz Parmak Hastalığı (Raynaud Fenomeni) denir."
    },
    {
      q: "İyonlaştırıcı radyasyon türlerinden kağıt tabakası veya deri ile durdurulabilen, ancak solunduğunda iç organlarda çok ağır hasar yapan parçacık radyasyonu ________ radyasyonudur.",
      answers: ["alfa", "alpha"],
      hint: "Helyum çekirdeği olan parçacık (α)",
      explanation: "Alfa parçacıkları dıştan deriyi geçemez ancak solunduğunda iç maruziyette en tehlikeli iyonlaştırıcı radyasyondur."
    },
    {
      q: "İşyeri ortamında hava akım hızını (esinti hızını) ölçmek için kullanılan cihaza ________ denir.",
      answers: ["anemometre"],
      hint: "Rüzgar/hava hızı ölçer",
      explanation: "Termal konfor ölçümlerinde hava akım hızı Anemometre ile ölçülür."
    },
    {
      q: "Radyasyon Güvenliği Yönetmeliği'ne göre radyasyon görevlisi olmayan sivil toplum üyeleri (halk) için yıllık etkin doz sınırı ________ mSv'tir.",
      answers: ["1", "bir"],
      hint: "Halk için yıllık sınır (mSv)",
      explanation: "Sivil halk (ve gebelerde fetüs) için yıllık etkin radyasyon doz sınırı 1 mSv'tir."
    }
  ]
};
