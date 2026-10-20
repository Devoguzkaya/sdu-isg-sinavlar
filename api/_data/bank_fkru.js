// Fiziksel ve Kimyasal Risk Etmenleri (FKRÜ) — 10 Ayrı Test Teması + Ek 75 Çoktan Seçmeli + 35 Boşluk Doldurma
export const fkruTestThemes = [
  'Gürültü Risk Etmeni: Fiziksel Özellikler, Desibel (dB) ve Maruziyet Sınır/Eylem Değerleri',
  'Titreşim Risk Etmeni: El-Kol Titreşimi ve Bütün Vücut Titreşimi Mevzuatı',
  'Termal Konfor (İç Ortam İklimlendirme): Sıcaklık, Nem, Hava Akım Hızı ve Radyant Isı',
  'Aydınlatma (Lüks), Basınç Değişimleri ve Dekompresyon (Vurgun) Hastalığı',
  'Radyasyon: İyonlaştırıcı (Alfa, Beta, Gama, X) ve İyonlaştırıcı Olmayan Radyasyon',
  'Tozlarla Mücadele: Solunabilir Toz, Pnömokonyozlar ve Asbest Sınır Değerleri',
  'Kimyasal Risk Etmenleri: Toksikoloji, MSDS (GBF) ve Mesleki Maruziyet Sınır Değerleri (TWA / STEL)',
  'Tehlikeli Gazlar ve Buharlar: Basit Boğucular, Kimyasal Boğucular, Tahriş Ediciler ve Narkotikler',
  'Kanserojen ve Mutajen Maddeler (Benzen, Vinil Klorür, Sert Odun Tozları) ve Kayıt Saklama',
  'Patlayıcı Ortamlar (ATEX / PATKÖD): Bölge (Zone 0/1/2 - 20/21/22) Sınıflandırması ve Ex-Proof'
];

export const fkruConceptGroups = [
  {
    groupName: 'Gürültü, Titreşim, Termal Konfor, Aydınlatma ve Radyasyon (Fiziksel Etmenler)',
    items: [
      {
        opt: 'Gürültü en düşük maruziyet eylem değeri: 80 dB(A) (Kulaklık hazır bulundurulur)',
        desc: 'Çalışanların Gürültü ile İlgili Risklerden Korunmalarına Dair Yönetmeliğe göre günlük gürültü maruziyeti 80 dB(A)\'ya ulaştığında işveren kulak koruyucuları çalışanların kullanımına hazır bulundurur ve bilgilendirme yapar.',
        q: 'Gürültü Yönetmeliğine göre işverenin kulak koruyucu donanımları çalışanların kullanımına HAZIR BULUNDURMAK zorunda olduğu "En Düşük Maruziyet Eylem Değeri" kaç dB(A)\'dır?'
      },
      {
        opt: 'Gürültü en yüksek maruziyet eylem değeri: 85 dB(A) (Kulaklık takmak zorunludur)',
        desc: 'Günlük gürültü maruziyeti 85 dB(A)\'ya ulaştığında veya aştığında kulak koruyucu donanımların çalışanlar tarafından KULLANILMASI ZORUNLUDUR ve işitme muayenesi yapılır.',
        q: 'Gürültü Yönetmeliğine göre çalışanların kulak koruyucu donanımları TAKMASININ ZORUNLU hale geldiği "En Yüksek Maruziyet Eylem Değeri" kaç dB(A)\'dır?'
      },
      {
        opt: 'Gürültü maruziyet sınır değeri: 87 dB(A) (Kulaklık koruma etkisi dahil aşılamaz)',
        desc: 'Kulak koruyucuların sağladığı koruma etkisi (SNR/NRR) düşüldükten sonra çalışanın kulağına ulaşan gürültünün kesinlikle aşmaması gereken sınır değer 87 dB(A)\'dır.',
        q: 'Gürültü Yönetmeliğine göre kişisel koruyucu donanımın (kulaklığın) koruma etkisi de dikkate alındığında hiçbir koşulda aşılmaması gereken "Maruziyet Sınır Değeri" kaç dB(A)\'dır?'
      },
      {
        opt: 'Logaritmik desibel (dB) toplamı (80 dB + 80 dB = 83 dB)',
        desc: 'Ses basınç düzeyi (dB) logaritmik bir büyüklüktür; birbirine eşit iki ses kaynağı aynı anda çalıştığında toplam gürültü düzeyi aritmetik olarak toplanmaz, sadece +3 dB artar.',
        q: 'Bir atölyede her biri 80 dB(A) gürültü yayan iki özdeş makine aynı anda çalıştırıldığında ortamdaki toplam gürültü seviyesi kaç dB(A) olur?'
      },
      {
        opt: 'El-kol titreşimi (Eylem değeri: 2,5 m/s² — Sınır değer: 5,0 m/s²)',
        desc: 'Kırıcı, delici ve taşlama gibi el aletlerinden kaynaklanan ve "Beyaz Parmak (Raynaud)" hastalığına yol açan el-kol titreşiminde 8 saatlik günlük maruziyet eylem değeri 2,5 m/s², sınır değer ise 5,0 m/s²\'dir.',
        q: 'Titreşim Yönetmeliğine göre "El-Kol Titreşimi" için 8 saatlik çalışma süresinde günlük maruziyet EYLEM değeri ve SINIR değeri sırasıyla kaç m/s²\'dir?'
      },
      {
        opt: 'Bütün vücut titreşimi (Eylem değeri: 0,5 m/s² — Sınır değer: 1,15 m/s²)',
        desc: 'İş makineleri, traktör ve kamyon sürücülerinde bel/omurga hasarına yol açan bütün vücut titreşiminde 8 saatlik günlük maruziyet eylem değeri 0,5 m/s², sınır değer ise 1,15 m/s²\'dir.',
        q: 'Titreşim Yönetmeliğine göre "Bütün Vücut Titreşimi" için 8 saatlik çalışma süresinde günlük maruziyet EYLEM değeri ve SINIR değeri sırasıyla kaç m/s²\'dir?'
      },
      {
        opt: 'Termal konfor ölçüm cihazları (Kuru/Islak Termometre, Glob Termometre, Anemometre)',
        desc: 'Hava sıcaklığı kuru termometre ile, bağıl nem psikrometre/higrometre ile, hava akım hızı anemometre (veya kata termometre) ile, radyant ısı ise siyah küreli Glob termometre ile ölçülür ve WBGT / PMV-PPD indeksleriyle değerlendirilir.',
        q: 'İşyeri ortamında "Termal Konfor" şartlarını belirleyen 4 temel parametre (hava sıcaklığı, bağıl nem, hava akım hızı ve radyant/ışınım ısısı) içinden "Radyant Isı" ve "Hava Akım Hızı" sırasıyla hangi cihazlarla ölçülür?'
      },
      {
        opt: 'Aydınlatma şiddeti birimi Lüks (Lux) ve Lüksmetre',
        desc: 'Birim yüzeye (1 m²) düşen ışık akısına (1 lümen) Aydınlatma Şiddeti (Lüks) denir ve işyerlerinde çalışma yüzeyi seviyesinde Lüksmetre ile ölçülür.',
        q: 'İşyerlerinde aydınlatma yeterliğin tespitinde birim yüzeye (m²) düşen ışık akısını ifade eden ölçü birimi ve ölçüm cihazı hangisidir?'
      },
      {
        opt: 'İyonlaştırıcı radyasyon doz sınırları (Yıllık ortalama 20 mSv, tek yılda en fazla 50 mSv)',
        desc: 'Radyasyon Güvenliği Yönetmeliğine göre radyasyon görevlileri için etkin doz ardışık 5 yılın ortalaması yılda 20 mSv\'i, herhangi bir tek yılda ise 50 mSv\'i geçemez (halk için yılda 1 mSv).',
        q: 'Radyasyon Güvenliği Yönetmeliğine göre radyasyonla çalışan görevliler için etkin doz, ardışık 5 yılın ortalamasında yılda kaç mSv\'i ve tek bir yılda en fazla kaç mSv\'i geçemez?'
      }
    ]
  },
  {
    groupName: 'Kimyasal Risk Etmenleri, Gazlar, Tozlar ve Sınır Değerler',
    items: [
      {
        opt: 'TWA (Zaman Ağırlıklı Ortalama — 8 saatlik referans süre)',
        desc: 'Günlük 8 saatlik ve haftalık 40 saatlik çalışma süresine göre ölçülen veya hesaplanan zaman ağırlıklı ortalama mesleki maruziyet sınır değeridir.',
        q: 'Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmeliğe göre "8 saatlik belirlenen referans süre için ölçülen veya hesaplanan zaman ağırlıklı ortalama" sınır değer kısaltması hangisidir?'
      },
      {
        opt: 'STEL (Kısa Süreli Maruziyet Sınır Değeri — 15 dakikalık süre)',
        desc: 'Başka bir süre belirtilmedikçe, aşılmaması gereken 15 dakikalık kısa süreli mesleki maruziyet sınır değeridir.',
        q: 'Kimyasal maddelerle çalışmalarda başka bir süre belirtilmedikçe aşılmaması gereken "15 dakikalık kısa süreli maruziyet sınır değeri" kısaltması hangisidir?'
      },
      {
        opt: 'Kimyasal boğucu gazlar (Karbonmonoksit CO, Hidrojen Sülfür H2S, Hidrojen Siyanür HCN)',
        desc: 'Havadaki oksijeni azaltmak yerine doğrudan kanın oksijen taşıma kapasitesini (CO -> karboksihemoglobin) veya hücrelerin oksijen kullanma enzimlerini (HCN, H2S) bloke ederek boğulmaya yol açan zehirli gazlardır.',
        q: 'Solunduğunda kandaki hemoglobinle birleşerek veya hücresel solunum enzimlerini bloke ederek dokuların oksijensiz kalmasına yol açan "Kimyasal Boğucu Gazlar" grubu hangisidir?'
      },
      {
        opt: 'Basit boğucu gazlar (Karbondioksit CO2, Metan CH4, Azot N2, Argon, LPG)',
        desc: 'Kendi başlarına fizyolojik olarak zehirli olmayan ancak kapalı ortamlarda birikerek havadaki oksijen oranını (%19,5\'in altına) düşürmek suretiyle hipoksi/boğulmaya yol açan gazlardır.',
        q: 'Toksik (zehirli) olmadıkları halde kapalı ortamlarda oksijenin yerini alarak ortamdaki oksijen oranını düşürmek suretiyle boğulmaya neden olan "Basit Boğucu Gazlar" grubu hangisidir?'
      },
      {
        opt: 'Asbest sınır değeri (0,1 lif/cm³ — 8 saatlik TWA)',
        desc: 'Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmeliğe göre havadaki asbest konsantrasyonunun 8 saatlik zaman ağırlıklı ortalama (TWA) sınır değeri 0,1 lif/cm³\'tür.',
        q: 'Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmeliğe göre işyeri havasındaki 8 saatlik zaman ağırlıklı ortalama (TWA) asbest sınır değeri kaç lif/cm³\'tür?'
      },
      {
        opt: 'Solunabilir toz (< 10 mikron; alveollere ulaşan < 5 mikron)',
        desc: 'Aerodinamik eşdeğer çapı 0,1 ile 5,0 mikron arasında olan kristal veya amorf yapıda tozlar ile çapı 3 mikrondan küçük, uzunluğu çapının en az 3 katı olan lifsi tozlardır (akciğer alveollerine kadar ulaşır).',
        q: 'Tozla Mücadele Yönetmeliğine göre akciğerin en uç noktası olan alveollere (hava keseciklerine) kadar ulaşarak pnömokonyoza neden olan "Solunabilir Toz" parçacıklarının aerodinamik çap aralığı nedir?'
      },
      {
        opt: 'Benzen (C6H6) — Lösemi (Kan Kanseri) ve TWA: 1 ppm (3,25 mg/m³)',
        desc: 'Aromatik hidrokarbon olan Benzen, kemik iliğini baskılayarak aplastik anemi ve Lösemi (kan kanseri) yapan Grup 1 kanserojendir; 8 saatlik TWA sınır değeri 1 ppm (3,25 mg/m³)\'tür.',
        q: 'Kanserojen ve Mutajen Maddeler Yönetmeliğinde yer alan, kemik iliği hasarı ve Lösemiye (kan kanseri) neden olan Benzenin 8 saatlik TWA sınır değeri kaç ppm\'dir?'
      },
      {
        opt: 'Kurşun (Pb) biyolojik sınır değeri (Kanda en fazla 70 µg Pb/100 ml kan; tıbbi gözetim > 40 µg)',
        desc: 'Kurşunla çalışmalarda bağlayıcı biyolojik sınır değer 70 µg Pb/100 ml kandır; kanda kurşun seviyesi 40 µg/100 ml\'yi veya havadaki kurşun 0,075 mg/m³\'ü aşarsa tıbbi gözetim başlatılır (sınır değer TWA: 0,15 mg/m³).',
        q: 'Kimyasal Maddeler Yönetmeliğine göre çalışanların kanındaki "Kurşun (Pb)" düzeyi için bağlayıcı biyolojik sınır değer 100 ml kanda en fazla kaç mikrogram (µg) kurşundur?'
      },
      {
        opt: 'Kanserojen ve Asbest kayıtlarının saklanma süresi (Maruziyet bittikten sonra en az 40 yıl)',
        desc: 'Kanserojen, mutajen maddeler ve asbestle yapılan çalışmalarda sağlık gözetimi ve maruziyet kayıtları, maruziyetin sona ermesinden itibaren en az 40 yıl süreyle saklanır.',
        q: 'Kanserojen ve Mutajen Maddeler ile Asbestle yapılan çalışmalarda çalışanların sağlık ve maruziyet kayıtları maruziyet sona erdikten sonra en az kaç yıl saklanmalıdır?'
      }
    ]
  },
  {
    groupName: 'Patlayıcı Ortamlar (ATEX) ve Biyolojik Risk Etmenleri',
    items: [
      {
        opt: 'Bölge 0 (Zone 0) — Gaz/Buhar/Sis için sürekli veya uzun süreli patlayıcı ortam',
        desc: 'Gaz, buhar ve sis halindeki yanıcı maddelerin hava ile karışımından oluşan patlayıcı ortamın SÜREKLİ olarak veya uzun süreli ya da sık sık oluştuğu yerlerdir (tozlar için karşılığı Bölge 20\'dir).',
        q: 'Çalışanların Patlayıcı Ortamların Tehlikelerinden Korunması Hakkında Yönetmeliğe (ATEX) göre gaz, buhar ve sis halindeki patlayıcı ortamın SÜREKLİ veya uzun süreli bulunduğu tehlikeli bölge hangisidir?'
      },
      {
        opt: 'Bölge 1 (Zone 1) ve Bölge 2 (Zone 2) — Gaz/Buhar/Sis bölgeleri',
        desc: 'Bölge 1: Normal çalışmada patlayıcı ortamın ara sıra oluşma ihtimali olan yerler (Tozda Bölge 21); Bölge 2: Normal çalışmada oluşma ihtimali olmayan, oluşsa bile çok kısa süren yerlerdir (Tozda Bölge 22).',
        q: 'ATEX Yönetmeliğine göre yanıcı gaz, buhar ve sislerden kaynaklanan patlayıcı ortamın normal çalışma koşullarında ARA SIRA oluşma ihtimali bulunan bölge hangisidir?'
      },
      {
        opt: 'Bölge 20, Bölge 21 ve Bölge 22 — Yanıcı TOZ bulutu bölgeleri',
        desc: 'Havada bulut halinde bulunan tutuşabilir TOZLAR için sürekli/uzun süreli ortam Bölge 20, ara sıra oluşan ortam Bölge 21, nadir/kısa süreli ortam ise Bölge 22 olarak sınıflandırılır.',
        q: 'ATEX Yönetmeliğine göre havada bulut halinde bulunan tutuşabilir TOZLARIN sürekli veya uzun süreli patlayıcı ortam oluşturduğu bölge sınıfı hangisidir?'
      },
      {
        opt: 'Biyolojik Risk Grupları (Grup 1, Grup 2, Grup 3 ve Grup 4)',
        desc: 'Grup 1: İnsanda hastalık yapma ihtimali olmayan; Grup 2: Hastalık yapabilen, tedavisi olan; Grup 3: Ağır hastalık yapan, topluma yayılma riski olan ancak etkili korunma/tedavisi OLAN; Grup 4: Ağır hastalık yapan, yayılma riski yüksek ve etkili korunma/tedavisi OLMAYAN (örn. Ebola) etkenlerdir.',
        q: 'Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi Hakkında Yönetmeliğe göre "İnsanda ağır bir hastalığa neden olan, topluma yayılma riski yüksek olan ancak etkili korunma ve tedavi yöntemi BULUNMAYAN" biyolojik etkenler hangi gruptadır?'
      }
    ]
  }
];

export const fkruExtraFill = [
  { q: 'Gürültü Yönetmeliğine göre en düşük maruziyet eylem değeri ____ dB(A)\'dır.', answers: ['80', 'seksen'], hint: 'Kulaklığın hazır bulundurulduğu değer', explanation: 'En düşük maruziyet eylem değeri 80 dB(A)\'dır.' },
  { q: 'Gürültü Yönetmeliğine göre kulaklık takmanın zorunlu olduğu en yüksek maruziyet eylem değeri ____ dB(A)\'dır.', answers: ['85', 'seksen beş'], hint: 'Kulaklığın zorunlu olduğu değer', explanation: 'En yüksek maruziyet eylem değeri 85 dB(A)\'dır.' },
  { q: 'Gürültü Yönetmeliğine göre hiçbir koşulda aşılmaması gereken maruziyet sınır değeri ____ dB(A)\'dır.', answers: ['87', 'seksen yedi'], hint: 'Mutlak üst sınır', explanation: 'Maruziyet sınır değeri 87 dB(A)\'dır.' },
  { q: '80 dB(A) gürültü yayan iki özdeş makine aynı anda çalıştığında toplam gürültü ____ dB(A) olur.', answers: ['83', 'seksen üç'], hint: 'Logaritmik +3 dB kuralı', explanation: 'Eşit iki ses kaynağı birleştiğinde gürültü +3 dB artarak 83 dB olur.' },
  { q: 'El-kol titreşimi için 8 saatlik günlük maruziyet sınır değeri ____ m/s²\'dir.', answers: ['5', '5,0', '5.0', 'beş'], hint: 'Eylem değeri 2,5 m/s²', explanation: 'El-kol titreşiminde eylem değeri 2,5 m/s², sınır değer 5,0 m/s²\'dir.' },
  { q: 'El-kol titreşimi için 8 saatlik günlük maruziyet eylem değeri ____ m/s²\'dir.', answers: ['2,5', '2.5'], hint: 'Sınır değerin yarısı', explanation: 'El-kol titreşimi eylem değeri 2,5 m/s²\'dir.' },
  { q: 'Bütün vücut titreşimi için 8 saatlik günlük maruziyet eylem değeri ____ m/s²\'dir.', answers: ['0,5', '0.5'], hint: 'Sınır değer 1,15 m/s²', explanation: 'Bütün vücut titreşiminde eylem değeri 0,5 m/s²\'dir.' },
  { q: 'Bütün vücut titreşimi için 8 saatlik günlük maruziyet sınır değeri ____ m/s²\'dir.', answers: ['1,15', '1.15'], hint: 'Eylem değeri 0,5 m/s²', explanation: 'Bütün vücut titreşiminde sınır değer 1,15 m/s²\'dir.' },
  { q: 'Termal konforda ortamdaki radyant (ışınım) ısısını ölçen siyah küreli cihaza ____ termometre denir.', answers: ['Glob', 'glob', 'Globe'], hint: 'Siyah küre termometresi', explanation: 'Radyant ısı Glob termometre ile ölçülür.' },
  { q: 'Termal konforda hava akım hızını ölçen cihaza ____ denir.', answers: ['Anemometre', 'anemometre'], hint: 'Rüzgar/hava hızı ölçer', explanation: 'Hava akım hızı anemometre ile ölçülür.' },
  { q: 'Aydınlatma şiddetinin birimi ____ (Lux) olup Lüksmetre ile ölçülür.', answers: ['Lüks', 'lüks', 'Lux'], hint: 'Lümen / m²', explanation: 'Aydınlatma şiddeti birimi Lüks\'tür.' },
  { q: 'Radyasyon görevlileri için ardışık 5 yılın ortalama yıllık etkin doz sınırı ____ mSv\'dir.', answers: ['20', 'yirmi'], hint: 'Tek yılda max 50 mSv', explanation: '5 yılın ortalaması yılda 20 mSv\'i, tek yılda 50 mSv\'i geçemez.' },
  { q: 'Radyasyon görevlileri için herhangi bir tek yılda alınabilecek azami etkin doz sınırı ____ mSv\'dir.', answers: ['50', 'elli'], hint: 'Yıllık mutlak üst sınır', explanation: 'Tek bir yılda etkin doz 50 mSv\'i geçemez.' },
  { q: 'Toplum üyesi (halk / sivil) kişiler için yıllık etkin radyasyon doz sınırı ____ mSv\'dir.', answers: ['1', 'bir'], hint: 'Halk için yıllık sınır', explanation: 'Halk için yıllık etkin doz sınırı 1 mSv\'dir.' },
  { q: 'Kimyasal maddelerle çalışmalarda 8 saatlik referans süre için zaman ağırlıklı ortalama sınır değere ____ denir.', answers: ['TWA', 'twa'], hint: 'Time Weighted Average', explanation: '8 saatlik zaman ağırlıklı ortalama sınır değer TWA\'dır.' },
  { q: 'Kimyasal maddelerle çalışmalarda 15 dakikalık kısa süreli maruziyet sınır değerine ____ denir.', answers: ['STEL', 'stel'], hint: 'Short Term Exposure Limit', explanation: '15 dakikalık kısa süreli maruziyet sınır değeri STEL\'dir.' },
  { q: 'Kandaki hemoglobinle birleşerek karboksihemoglobin oluşturan renksiz ve kokusuz kimyasal boğucu gaz ____ (CO) gazıdır.', answers: ['Karbonmonoksit', 'karbonmonoksit', 'CO'], hint: 'Soba/egzoz gazı', explanation: 'Karbonmonoksit (CO) hemoglobine oksijenden 200-250 kat hızlı bağlanır.' },
  { q: 'Çürük yumurta kokulu olan ve koku alma duyusunu felç eden kimyasal boğucu gaz ____ (H2S) gazıdır.', answers: ['Hidrojen sülfür', 'hidrojen sülfür', 'H2S'], hint: 'Kanalizasyon/kuyu gazı', explanation: 'Hidrojen sülfür (H2S) çürük yumurta kokulu kimyasal boğucu gazdır.' },
  { q: 'Asbestle çalışmalarda 8 saatlik zaman ağırlıklı ortalama (TWA) sınır değer ____ lif/cm³\'tür.', answers: ['0,1', '0.1'], hint: 'Sıfır virgül bir', explanation: 'Asbest TWA sınır değeri 0,1 lif/cm³\'tür.' },
  { q: 'Akciğer alveollerine kadar ulaşabilen solunabilir tozların aerodinamik çapı ____ mikronun altındadır.', answers: ['5', 'beş', '10'], hint: '0,1 - 5,0 mikron aralığı', explanation: 'Alveollere ulaşan solunabilir tozlar 5 mikronun (genel tanım 10 mikron) altındadır.' },
  { q: 'Kemik iliğini baskılayarak Lösemi (kan kanseri) yapan aromatik hidrokarbon çözücü ____ (C6H6) maddesidir.', answers: ['Benzen', 'benzen', 'Benzol'], hint: 'TWA sınırı 1 ppm olan kanserojen', explanation: 'Benzen (benzol) Grup 1 kanserojen olup lösemiye yol açar.' },
  { q: 'Benzenin 8 saatlik zaman ağırlıklı ortalama (TWA) mesleki maruziyet sınır değeri ____ ppm\'dir.', answers: ['1', 'bir'], hint: '3,25 mg/m³ karşılığı', explanation: 'Benzenin TWA sınır değeri 1 ppm\'dir.' },
  { q: 'Kurşunla çalışmalarda bağlayıcı biyolojik sınır değer 100 ml kanda en fazla ____ mikrogram (µg) kurşundur.', answers: ['70', 'yetmiş'], hint: 'Tıbbi gözetim 40 µg, sınır 70 µg', explanation: 'Kanda bağlayıcı kurşun sınır değeri 70 µg Pb/100 ml kandır.' },
  { q: 'Kanserojen, mutajen maddeler ve asbest kayıtları maruziyet sona erdikten sonra en az ____ yıl saklanır.', answers: ['40', 'kırk'], hint: 'Uzun latent dönem süresi', explanation: 'Kanserojen ve asbest kayıtları en az 40 yıl saklanır.' },
  { q: 'Kuvars (kristal silis / SiO2) tozlarının solunması sonucu oluşan pnömokonyoz türüne ____ denir.', answers: ['Silikozis', 'silikozis'], hint: 'Silis tozu hastalığı', explanation: 'Kristal silis (kuvars) tozu Silikozis hastalığına yol açar.' },
  { q: 'Pamuk, keten ve kenevir tozlarının solunması sonucu oluşan tekstil işçisi akciğer hastalığına ____ denir.', answers: ['Bisinozis', 'bisinozis'], hint: 'Pazartesi ateşi / Pamuk tozu', explanation: 'Pamuk tozu maruziyeti Bisinozis hastalığına neden olur.' },
  { q: 'Demir oksit tozlarının solunması sonucu akciğerde oluşan iyi huylu toz birikimine ____ denir.', answers: ['Siderozis', 'siderozis'], hint: 'Demir tozu pnömokonyozu', explanation: 'Demir tozları Siderozis hastalığına yol açar.' },
  { q: 'ATEX Yönetmeliğine göre gaz ve buhar patlayıcı ortamının SÜREKLİ bulunduğu alanlar Bölge ____ (Zone) olarak adlandırılır.', answers: ['0', 'sıfır'], hint: 'Gazlar için 0, 1, 2', explanation: 'Gaz/buhar için sürekli patlayıcı ortam Bölge 0\'dır.' },
  { q: 'ATEX Yönetmeliğine göre yanıcı TOZ bulutunun SÜREKLİ patlayıcı ortam oluşturduğu alanlar Bölge ____ olarak adlandırılır.', answers: ['20', 'yirmi'], hint: 'Tozlar için 20, 21, 22', explanation: 'Yanıcı tozlar için sürekli patlayıcı ortam Bölge 20\'dir.' },
  { q: 'ATEX Yönetmeliğine göre patlayıcı ortam oluşabilecek işyerlerinde işveren ____ Korunma Dokümanı (PKD) hazırlamak zorundadır.', answers: ['Patlamadan', 'patlamadan'], hint: 'PKD açılımı', explanation: 'Patlamadan Korunma Dokümanı (PKD) hazırlanması zorunludur.' },
  { q: 'Dalgıçlarda ve tünel (keson) işçilerinde yüksek basınçtan normal basınca hızlı geçişte kanda ____ gazı kabarcıklarının oluşturduğu hastalığa Vurgun (Dekompresyon) denir.', answers: ['Azot', 'azot', 'Nitrojen'], hint: 'Havanın %78\'ini oluşturan gaz', explanation: 'Vurgun (dekompresyon) hastalığına kandaki çözünmüş Azot (N2) gazının kabarcıklaşması yol açar.' },
  { q: 'Biyolojik etkenler içinde insanda ağır hastalık yapan ve etkili korunma/tedavisi OLMAYAN etkenler Grup ____ biyolojik etkenlerdir.', answers: ['4', 'dört'], hint: 'En yüksek biyolojik risk grubu', explanation: 'Grup 4 biyolojik etkenlerin etkili tedavisi yoktur.' },
  { q: 'İyonlaştırıcı radyasyon türlerinden kağıt tabakası veya deri tarafından bile tutulabilen, parçacık yapılı radyasyon ____ ışınıdır.', answers: ['Alfa', 'alfa'], hint: 'Helyum çekirdeği', explanation: 'Alfa parçacıkları kağıtla tutulur; Gama ve X ışınları ise kurşun/beton ile zırhlanır.' },
  { q: 'Kimyasal maddelerin tehlike ve güvenlik bilgilerini içeren 16 bölümlük forma ____ Bilgi Formu (GBF / MSDS) denir.', answers: ['Güvenlik', 'güvenlik'], hint: 'Safety Data Sheet', explanation: 'Güvenlik Bilgi Formu (GBF / SDS) 16 standart başlıktan oluşur.' },
  { q: 'Normal temiz atmosfer havasında hacimce yaklaşık % ____ oranında Oksijen bulunur.', answers: ['21', 'yirmi bir', '20,9'], hint: 'Azot %78, Oksijen %...', explanation: 'Temiz havada yaklaşık %21 (%20,9) oksijen ve %78 azot bulunur.' }
];
