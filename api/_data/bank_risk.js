export const riskTestThemes = [
  "Temel Kavramlar (Tehlike, Risk, Ramak Kala, Kabul Edilebilir Risk)",
  "Proaktif vs. Reaktif Yaklaşım & Kaza Teorileri (Heinrich Domino)",
  "6331 Sayılı İSG Kanunu & Risklerden Korunma İlkeleri",
  "Risk Kontrol Tedbirleri Hiyerarşisi (Eliminasyon, İkame, KKD)",
  "Risk Değerlendirmesi Yönetmeliği, Ekip Üyeleri & 5 Aşama",
  "Yenileme Süreleri (2-4-6 Yıl) & Yenilemeyi Gerektiren Durumlar",
  "Matris Yöntemleri (5x5 L Tipi Matris & X Tipi Matris)",
  "Kantitatif Yöntemler (Fine-Kinney & FMEA Hesaplamaları)",
  "Proses ve Ağaç Analizleri (HAZOP, FTA, ETA, JSA, What-If)",
  "Genel Karma Vize Simülasyonu (Funda Hoca Sunum & Sorular)"
];

export const riskConceptGroups = [
  {
    groupName: "Temel İSG ve Risk Yönetimi Kavramları",
    items: [
      {
        opt: "Tehlike (Hazard)",
        desc: "İşyerinde var olan ya da dışarıdan gelebilecek, çalışanı veya işyerini etkileyebilecek zarar veya hasar verme potansiyelidir.",
        q: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre; çalışma ortamında bulunan ve 'zarar veya hasar verme potansiyeli' taşıyan her türlü kaynağa ne ad verilir?"
      },
      {
        opt: "Risk",
        desc: "Tehlikeden kaynaklanacak kayıp, yaralanma ya da başka zararlı sonuç meydana gelme ihtimali ile zararın şiddetinin bileşkesidir.",
        q: "Bir tehlikenin gerçekleşerek kayıp, yaralanma veya ölüm gibi zararlı bir sonuç doğurma olasılığı ve etkisinin bileşkesine ne ad verilir?"
      },
      {
        opt: "Ramak Kala Olay (Near Miss)",
        desc: "İşyerinde meydana gelen; çalışan, işyeri ya da iş ekipmanını zarara uğratma potansiyeli olduğu halde şans eseri zarara uğratmayan olaydır.",
        q: "Yüksekten düşen bir malzemenin çalışanın hemen yanına düşüp kimseye zarar vermemesi gibi 'ucuz atlatılan' olaylara mevzuatta ne ad verilir?"
      },
      {
        opt: "Kabul Edilebilir Risk Seviyesi",
        desc: "Yasal yükümlülüklere ve işyerinin önleme politikasına uygun, kayıp veya yaralanma oluşturmayacak düzeye indirilmiş risk seviyesidir.",
        q: "Kontrol tedbirleri uygulandıktan sonra yasal mevzuata uygun ve yaralanma oluşturmayacak düzeye düşürülmüş riske ne ad verilir?"
      },
      {
        opt: "Artık (Kalıntı) Risk",
        desc: "Risk kontrol tedbirleri devreye alındıktan sonra tamamen sıfırlanamayan ve ortamda geriye kalan risk miktarıdır.",
        q: "Tehlike kaynağında veya ortamda kontrol önlemleri uygulandıktan sonra geriye kalan riske risk yönetiminde ne ad verilir?"
      },
      {
        opt: "Katlanılamaz (Tolerans Gösterilemez / Kabul Edilemez) Risk",
        desc: "Risk skorunun en üst kırmızı bölgede (örneğin 5x5 matriste 15-25 arası) çıktığı, risk düşürülmeden işin asla başlatılamayacağı veya derhal durdurulacağı risktir.",
        q: "Yapılan analiz sonucunda işin derhal durdurulmasını ve risk azaltılmadan çalışmaya devam edilmemesini gerektiren en yüksek risk düzeyi hangisidir?"
      },
      {
        opt: "Önleme (Prevention)",
        desc: "İşyerinde yürütülen işlerin bütün safhalarında iş sağlığı ve güvenliği ile ilgili riskleri ortadan kaldırmak veya azaltmak için planlanan ve alınan tedbirlerin tümüdür.",
        q: "6331 sayılı Kanun'da 'işin bütün safhalarında İSG ile ilgili riskleri ortadan kaldırmak veya azaltmak için planlanan ve alınan tedbirlerin tümü' nasıl tanımlanır?"
      },
      {
        opt: "Proaktif (Önleyici) Yaklaşım",
        desc: "İş kazası veya meslek hastalığı henüz gerçekleşmeden önce tehlikeleri tespit edip riskleri kaynağında yok etmeye dayanan çağdaş İSG yaklaşımıdır.",
        q: "Prof. Dr. Funda Cengiz Çallıoğlu'nun modern İSG'nin temeli olarak vurguladığı, olaylar yaşanmadan önce öngörüp tedbir alan yaklaşım hangisidir?"
      },
      {
        opt: "Reaktif (Tepkisel) Yaklaşım",
        desc: "İş kazası veya meslek hastalığı meydana geldikten sonra harekete geçen, kaza sonrası inceleme ve cezaya odaklanan eski/geleneksel yaklaşımdır.",
        q: "Yalnızca iş kazası veya yangın çıktıktan sonra harekete geçerek tedbir almaya çalışan geleneksel ve yetersiz yaklaşım türü hangisidir?"
      },
      {
        opt: "Güvenlik Kültürü",
        desc: "Bir kurumda en üst yöneticiden en alt çalışana kadar herkesin İSG kurallarını kimse denetlemese bile ortak değer ve davranış biçimi olarak benimsemesidir.",
        q: "Bir işyerinde çalışanların ve yönetimin iş güvenliğini sadece yasal ceza korkusuyla değil, ortak bir yaşam değeri ve alışkanlık olarak benimsemesine ne denir?"
      }
    ]
  },
  {
    groupName: "Kaza Teorileri, Güvensiz Hareket ve Güvensiz Durum",
    items: [
      {
        opt: "Heinrich Domino Teorisi (%88 Güvensiz Hareket, %10 Güvensiz Durum, %2 Önlenemez)",
        desc: "Kazaların 5 ardışık domino taşından oluştuğunu ve 3. taş olan güvensiz hareket (%88) ile güvensiz durum (%10) ortadan kaldırılırsa kazanın önleneceğini açıklayan teoridir.",
        q: "İş kazalarının %88 oranında güvensiz hareketlerden, %10 oranında güvensiz durumlardan ve %2 oranında kaçınılmaz sebeplerden kaynaklandığını ortaya koyan teori hangisidir?"
      },
      {
        opt: "Heinrich Kaza Piramidi (1 Ağır/Ölümlü - 29 Hafif Yaralanmalı - 300 Ramak Kala)",
        desc: "Her 300 yaralanmasız (ramak kala) olaya karşılık 29 hafif yaralanmalı kaza ve 1 ölümlü/ağır yaralanmalı iş kazası meydana geldiğini gösteren istatistiksel piramittir.",
        q: "Kaza istatistiklerinde '1 - 29 - 300 kuralı' ile bilinen ve tabandaki 300 ramak kala olay önlenirse tepedeki 1 ölümlü kazanın engelleneceğini belirten model hangisidir?"
      },
      {
        opt: "Güvensiz Hareket (İnsana Bağlı Hatalı Davranış - %88)",
        desc: "Çalışanın KKD takmaması, makine koruyucusunu iptal etmesi, yetkisiz müdahale yapması, tehlikeli hızda çalışması veya şakalaşması gibi kişisel kusurlardır.",
        q: "Çalışanın kendisine teslim edilen emniyet kemerini takmaması veya makinenin güvenlik switch'ini bantlayarak iptal etmesi hangi kavramla açıklanır?"
      },
      {
        opt: "Güvensiz Durum (Ortama ve Ekipmana Bağlı Fiziksel Kusur - %10)",
        desc: "Koruyucusu olmayan döner aksam, kaygan/yağlı zemin, bozuk topraklama, yetersiz aydınlatma veya korkuluksuz merdiven gibi fiziksel çalışma ortamı tehlikeleridir.",
        q: "Atölye zemininin yağ sızıntısı nedeniyle kaygan olması, merdiven korkuluğunun kırık olması veya havalandırmanın çalışmaması hangi kavrama örnektir?"
      },
      {
        opt: "İsviçre Peyniri Modeli (James Reason - Savunma Bariyerlerindeki Delikler)",
        desc: "Kurumsal güvenlik önlemlerini peynir dilimlerine benzeten; yönetim, denetim ve çalışan katmanlarındaki zafiyet delikleri aynı hizaya geldiğinde kazanın gerçekleştiğini anlatan modeldir.",
        q: "James Reason tarafından geliştirilen ve farklı güvenlik katmanlarındaki zafiyetlerin (deliklerin) üst üste çakışmasıyla kazanın meydana geldiğini açıklayan model nedir?"
      },
      {
        opt: "Kök Neden Analizi (5 Neden / 5 Whys ve Balık Kılçığı Diyagramı)",
        desc: "Bir kaza veya ramak kala olay sonrasında sadece görünen yüzeysel sebebi değil, ardışık 'Neden?' soruları sorarak altta yatan sistemsel kök sebebi bulma yöntemidir.",
        q: "Bir iş kazası incelenirken 'İşçi kaydı -> Neden? -> Yerde yağ vardı -> Neden? -> Conta sızdırmıştı -> Neden? -> Bakım yapılmamıştı' şeklinde kök sebebe inen yöntem nedir?"
      },
      {
        opt: "Ergonomik Risk Faktörleri (İşi İnsana Uydurma İlkesi)",
        desc: "Tekrarlayan zorlayıcı hareketler, uygunsuz duruş, ağır yük kaldırma ve kötü ekran/tezgah tasarımının kas-iskelet sistemi hastalıklarına yol açmasıdır.",
        q: "Çalışma tezgahının işçinin boyuna uygun olmaması, sürekli eğilerek ağır paket kaldırma ve tekrarlı bilek hareketleri hangi risk grubuna girer?"
      },
      {
        opt: "Psikososyal Risk Faktörleri (Stres, Mobbing, Aşırı İş Yükü, Tükenmişlik)",
        desc: "İş organizasyonu, uzun vardiyalar, rol belirsizliği ve psikolojik taciz (mobbing) nedeniyle çalışanda dikkat dağınıklığı, stres ve kaza yatkınlığı oluşmasıdır.",
        q: "Aşırı çalışma saatleri, vardiya düzensizliği, yönetim baskısı ve işyerinde psikolojik taciz (mobbing) gibi etkenler hangi tehlike sınıfında değerlendirilir?"
      },
      {
        opt: "İş Kazası (5510 ve 6331 Sayılı Kanun Kapsamı)",
        desc: "İşyerinde veya işin yürütümü nedeniyle meydana gelen, ölüme sebebiyet veren veya vücut bütünlüğünü ruhen ya da bedenen engelli hale getiren olaydır.",
        q: "6331 sayılı Kanun'a göre 'işyerinde veya işin yürütümü nedeniyle meydana gelen, ölüme sebebiyet veren veya vücut bütünlüğünü ruhen ya da bedenen engelli hale getiren olay' nedir?"
      },
      {
        opt: "İş Kazasının SGK'ya Bildirim Süresi (Kazadan Sonraki 3 İş Günü İçinde)",
        desc: "İşverenin meydana gelen iş kazasını kolluk kuvvetlerine derhal, Sosyal Güvenlik Kurumu'na (SGK) ise kazadan sonraki en geç 3 iş günü içinde bildirme yükümlülüğüdür.",
        q: "İşyerinde meydana gelen bir iş kazası, işveren tarafından Sosyal Güvenlik Kurumu'na (SGK) kazadan sonraki en geç kaç iş günü içinde bildirilmelidir?"
      }
    ]
  },
  {
    groupName: "Risk Kontrol Hiyerarşisi ve 6331 Korunma İlkeleri",
    items: [
      {
        opt: "1. Adım: Eliminasyon (Tehlikeyi Kaynağında Yok Etme / Ortadan Kaldırma)",
        desc: "Risk kontrol hiyerarşisinin en üst ve en etkili basamağıdır; tehlikeli işlem veya maddenin sistemden tamamen çıkarılmasıdır.",
        q: "Risk kontrol tedbirleri hiyerarşisinde EN ÖNCELİKLİ (1. sırada) uygulanması gereken ve tehlikeyi tamamen ortadan kaldıran adım hangisidir?"
      },
      {
        opt: "2. Adım: İkame (Substitution - Tehlikeliyi Daha Az Tehlikeli Olanla Değiştirme)",
        desc: "Tehlikeli bir kimyasalın (örneğin solvent bazlı boya veya kumlama silisinin) daha az tehlikeli olanla (su bazlı boya veya çelik granülle) değiştirilmesidir.",
        q: "Risk kontrol hiyerarşisinde tehlikenin tamamen yok edilemediği durumda 2. sırada başvurulan 'tehlikeliyi tehlikesiz veya az tehlikeli olanla değiştirme' adımı nedir?"
      },
      {
        opt: "3. Adım: Mühendislik Önlemleri ve Toplu Koruma (Yalıtım / Havalandırma / Koruyucu)",
        desc: "Gürültülü makineyi kabin içine alma, lokal egzoz havalandırma kurma, makine koruyucusu veya kenar korkuluk takma gibi tüm çalışanları koruyan teknik önlemlerdir.",
        q: "Tehlikeli makinenin kapalı kabin içine alınması, zehirli gaz kaynağının üzerine davlumbaz emiş sistemi kurulması veya korkuluk yapılması hangi kontrol adımıdır?"
      },
      {
        opt: "4. Adım: İdari Önlemler (Çalışma Süresi Sınırlaması, Rotasyon, Eğitim, İşaretleme)",
        desc: "Maruziyet süresini kısaltmak için iş rotasyonu yapma, güvenli çalışma talimatları hazırlama, İSG eğitimleri ve uyarı levhaları asma gibi organizasyonel önlemlerdir.",
        q: "Gürültülü veya sıcak bir bölümde çalışan işçilerin maruziyet süresini azaltmak için 'vardiya rotasyonu' uygulanması ve uyarı levhaları asılması hangi kontrol adımıdır?"
      },
      {
        opt: "5. Adım (Son Çare): Kişisel Koruyucu Donanım (KKD) Kullanımı",
        desc: "Toplu koruma ve mühendislik önlemlerinin riski yeterince düşüremediği durumda en son çare olarak çalışana baret, kulaklık, maske, gözlük verilmesidir.",
        q: "Risk kontrol hiyerarşisinde diğer tüm teknik ve toplu koruma önlemleri alındıktan sonra EN SON ÇARE olarak başvurulan yöntem hangisidir?"
      },
      {
        opt: "Risklerle Kaynağında Mücadele Etmek",
        desc: "6331 sayılı Kanun Madde 5'te yer alan, tehlikenin çalışma ortamına yayılmasına izin vermeden çıktığı noktada bastırılması/önlenmesi ilkesidir.",
        q: "6331 sayılı Kanun'un 'Risklerden Korunma İlkeleri' (Madde 5) uyarınca tehlike ve risklerle öncelikle nerede mücadele edilmelidir?"
      },
      {
        opt: "Toplu Korunma Tedbirlerine Kişisel Korunma Tedbirlerine Göre Öncelik Vermek",
        desc: "Tek tek işçilere KKD dağıtmadan önce havalandırma, korkuluk, izolasyon gibi ortamdaki herkesi aynı anda koruyan tedbirlerin uygulanması ilkesidir.",
        q: "Yüksekte çalışılan bir terasta işçilere sadece emniyet kemeri vermek yerine öncelikle teras kenarlarına sağlam korkuluk ve güvenlik ağı kurulması hangi kanuni ilkedir?"
      },
      {
        opt: "İşi Kişilere Uygun Hale Getirmek (Ergonomik Tasarım İlkesi)",
        desc: "Özellikle işyerinin tasarımında, iş ekipmanı ve çalışma şekli seçiminde işi çalışana uyumlu hale getirme ve tekdüze çalışmanın olumsuz etkilerini azaltma ilkesidir.",
        q: "6331 sayılı Kanun'da yer alan; iş ekipmanı, çalışma yöntemi ve üretim temposu seçilirken gözetilmesi zorunlu olan ergonomik korunma ilkesi hangisidir?"
      },
      {
        opt: "Teknik Gelişmelere Uyum Sağlamak",
        desc: "Eski ve tehlikeli üretim makineleri yerine güvenlik sensörlü, düşük emisyonlu ve modern teknolojiye uygun güvenli ekipmanlara geçiş yapılması ilkesidir.",
        q: "İşverenin teknolojik ilerlemeleri takip ederek daha güvenli makine ve otomasyon sistemlerine geçiş yapmasını öngören 6331 sayılı Kanun ilkesi nedir?"
      },
      {
        opt: "Çalışanlara Uygun Talimatlar Vermek ve Eğitmek",
        desc: "Alınan tüm teknik tedbirlerin sahada doğru uygulanabilmesi için çalışanlara anlaşılır iş güvenliği eğitimi ve yazılı talimatlar verilmesi ilkesidir.",
        q: "Risklerden korunma ilkelerinin son halkası olarak, alınan tedbirlerin sahada uygulanmasını sağlamak üzere işverenin çalışanlara karşı yükümlülüğü nedir?"
      }
    ]
  },
  {
    groupName: "Risk Değerlendirmesi Yönetmeliği, Ekip ve Süreler",
    items: [
      {
        opt: "Çok Tehlikeli Sınıfta En Geç 2 Yılda Bir Yenileme",
        desc: "Maden, inşaat, tersane, ağır metal ve kimya gibi Çok Tehlikeli sınıftaki işyerlerinde risk değerlendirmesinin periyodik yenilenme süresidir.",
        q: "İSG Risk Değerlendirmesi Yönetmeliği'ne göre 'Çok Tehlikeli' sınıfta yer alan bir şantiye veya maden işletmesinde risk değerlendirmesi en geç kaç yılda bir yenilenir?"
      },
      {
        opt: "Tehlikeli Sınıfta En Geç 4 Yılda Bir Yenileme",
        desc: "Tekstil, gıda üretimi, mobilya, plastik ve makine imalatı gibi Tehlikeli sınıftaki işyerlerinde risk değerlendirmesinin periyodik yenilenme süresidir.",
        q: "'Tehlikeli' sınıfta yer alan bir üretim fabrikasında önemli bir değişiklik veya kaza yaşanmadığı takdirde risk değerlendirmesi en geç kaç yılda bir yenilenmelidir?"
      },
      {
        opt: "Az Tehlikeli Sınıfta En Geç 6 Yılda Bir Yenileme",
        desc: "Ofisler, bankalar, perakende mağazalar ve eğitim kurumları gibi Az Tehlikeli sınıftaki işyerlerinde risk değerlendirmesinin periyodik yenilenme süresidir.",
        q: "'Az Tehlikeli' sınıfta yer alan bir büro, yazılım şirketi veya okulda risk değerlendirmesi çalışması en geç kaç yılda bir yenilenir?"
      },
      {
        opt: "İşveren veya İşveren Vekili (Risk Değerlendirme Ekibi Koordinatörü)",
        desc: "Risk değerlendirmesi ekibinin doğal lideri ve yasal sorumlusudur; ihtiyaç duyulan kaynakları, zamanı ve bütçeyi sağlamakla yükümlüdür.",
        q: "Risk Değerlendirmesi Yönetmeliği'ne göre risk değerlendirmesi çalışmalarının koordinasyonunu sağlayan ve nihai yasal sorumluluğu taşıyan ekip üyesi kimdir?"
      },
      {
        opt: "İş Güvenliği Uzmanı ve İşyeri Hekimi",
        desc: "İşyerinde sağlık ve güvenlik hizmetini yürüten, tehlike tespiti ve sağlık risklerinin analizinde teknik/tıbbi rehberlik yapan zorunlu ekip üyeleridir.",
        q: "Risk değerlendirmesi ekibinde teknik tehlikelerin analizi ve meslek hastalığı/sağlık gözetimi boyutuyla yer alan profesyonel İSG profesyonelleri kimlerdir?"
      },
      {
        opt: "Çalışan Temsilcisi ve Destek Elemanları",
        desc: "Sahadaki işçilerin sesini ekibe taşıyan çalışan temsilcileri ile acil durum (yangın, ilk yardım, kurtarma) destek elemanlarından oluşan ekip üyeleridir.",
        q: "Risk değerlendirmesi ekibinde işveren, uzman ve hekimin yanı sıra çalışanların katılımını ve acil durum hazırlığını temsil eden zorunlu üyeler kimlerdir?"
      },
      {
        opt: "1. Aşama: Tasarım veya Kuruluş Aşamasında Başlama",
        desc: "Risk değerlendirmesinin işyeri henüz kurulurken veya üretime başlamadan önce başlatılması, proses ve makine yerleşiminin buna göre planlanmasıdır.",
        q: "Risk Değerlendirmesi Yönetmeliği'ne göre yeni açılacak bir fabrikanın risk değerlendirmesi çalışmasına hangi aşamada başlanmalıdır?"
      },
      {
        opt: "Asıl İşveren - Alt İşveren (Taşeron) Koordinasyonu",
        desc: "Alt işverenlerin kendi yürüttükleri işler için yaptıkları risk değerlendirmesinin bir nüshasını asıl işverene vermesi ve asıl işverenin denetleyip entegre etmesidir.",
        q: "Bir işyerinde bir veya daha fazla alt işveren (taşeron) bulunması halinde risk değerlendirmesi süreci nasıl yürütülür?"
      },
      {
        opt: "Çalışmaktan Kaçınma Hakkı (6331 Sayılı Kanun Madde 13)",
        desc: "Ciddi ve yakın bir tehlike ile karşı karşıya kalan çalışanların İSG kuruluna/işverene başvurarak gerekli tedbirler alınıncaya kadar çalışmaktan kaçınma hakkıdır.",
        q: "6331 sayılı Kanun'un 13. maddesine göre, ciddi ve yakın bir tehlikenin varlığı halinde çalışanların tedbir alınıncaya kadar işi bırakabilmesine ne ad verilir?"
      },
      {
        opt: "İşin Durdurulması Yaptırımı (Çok Tehlikeli Sınıfta Risk Değerlendirmesi Yapılmaması)",
        desc: "Maden, metal, yapı işleri veya tehlikeli kimyasallarla çalışılan çok tehlikeli işyerlerinde risk değerlendirmesi hiç yapılmamışsa uygulanan idari yaptırımdır.",
        q: "6331 sayılı Kanun'un 25. maddesine göre; maden, inşaat ve metal gibi çok tehlikeli işyerlerinde risk değerlendirmesi yapılmadığının tespiti halinde hangi yaptırım uygulanır?"
      }
    ]
  },
  {
    groupName: "Risk Analiz Metodolojileri (Kalitatif, Kantitatif ve Karma)",
    items: [
      {
        opt: "5x5 L Tipi Matris Yöntemi (R = Olasılık x Şiddet)",
        desc: "Olasılık (1-5) ve Şiddet (1-5) puanlarının çarpımıyla 1 ile 25 arasında risk skoru üreten, tek bir uzman tarafından dahi hızla uygulanabilen en yaygın yöntemdir.",
        q: "Sebep-sonuç ilişkilerini Olasılık (1-5) ve Şiddet (1-5) ölçeğinde değerlendirerek 1 ile 25 arasında skor üreten en yaygın risk analiz metodu hangisidir?"
      },
      {
        opt: "X Tipi Matris Yöntemi (5 Yıllık Kaza Geçmişi + Takım Çalışması)",
        desc: "Olasılık ve şiddetin yanı sıra işletmenin son 5 yıllık kaza istatistiklerini hesaba katan ve mutlaka disiplinlerarası bir ekip gerektiren matris yöntemidir.",
        q: "L Tipi matristen farklı olarak işletmenin 'son 5 yıllık kaza geçmişi verilerini' zorunlu kılan ve tek kişiyle yapılamayıp ekip gerektiren matris yöntemi nedir?"
      },
      {
        opt: "Fine-Kinney Yöntemi (R = İhtimal x Frekans x Şiddet)",
        desc: "İhtimal (0,2-10), Frekans (0,5-10) ve Şiddet (1-100) değerlerinin çarpımıyla sayısal risk değeri hesaplayan, 400 üstü skorda işi hemen durduran kantitatif yöntemdir.",
        q: "Risk değerini İhtimal, Frekans (maruziyet sıklığı) ve Şiddet olmak üzere 3 parametrenin çarpımıyla hesaplayan yaygın kantitatif yöntem hangisidir?"
      },
      {
        opt: "FMEA — Hata Türü ve Etkileri Analizi (RÖS = Olasılık x Şiddet x Farkedilebilirlik)",
        desc: "Sistem, tasarım, süreç veya servis hatalarını her biri 1-10 arası puanlanan Olasılık, Şiddet ve Farkedilebilirlik çarpanlarıyla (1-1000 RÖS) inceleyen yöntemdir.",
        q: "Özellikle otomotiv, makine ve üretim hatlarında kullanılan; Risk Öncelik Sayısını (RÖS = 1-1000) 'Olasılık x Şiddet x Farkedilebilirlik' ile bulan yöntem nedir?"
      },
      {
        opt: "HAZOP — Tehlike ve İşletilebilirlik Analizi (Kılavuz Kelimelerle Proses Analizi)",
        desc: "Kimya, ilaç ve petrol tesislerinde boru hattı/reaktör parametrelerini 'Az, Çok, Hiç, Ters, Başka' gibi kılavuz kelimelerle inceleyen detaylı ekip yöntemidir.",
        q: "Kimya ve petrokimya endüstrisinde basınç, sıcaklık ve debi sapmalarını 'Kılavuz Kelimeler (Guide Words)' yardımıyla analiz eden yöntem hangisidir?"
      },
      {
        opt: "FTA — Hata Ağacı Analizi (Tepe Olaydan Kök Nedenlere Tümdengelim)",
        desc: "İstenmeyen bir Tepe Olaydan (Top Event) başlayarak geriye doğru VE / VEYA (AND / OR) mantık kapılarıyla alt hataları modellediği tümdengelim yöntemidir.",
        q: "Gerçekleşmesi istenmeyen bir Tepe Olaydan (örneğin kazan patlaması) başlayıp VE/VEYA mantık kapılarıyla alt sebeplere doğru inen tümdengelim yöntemi nedir?"
      },
      {
        opt: "ETA — Olay Ağacı Analizi (Başlangıç Olayından Sonuçlara Tümevarım)",
        desc: "Bir başlangıç olayından sonra devreye girmesi gereken güvenlik bariyerlerinin 'Başarılı / Başarısız' olma ihtimallerini ileriye doğru dallandıran tümevarım yöntemidir.",
        q: "Bir başlangıç arızasından hareketle güvenlik sistemlerinin çalışıp çalışmama durumuna göre olası sonuç senaryolarını ileriye doğru dallandıran tümevarım yöntemi nedir?"
      },
      {
        opt: "JSA — İş Güvenliği Analizi (İşi Görev Basamaklarına Ayırarak Analiz)",
        desc: "Belirli bir işi veya görevi ardışık alt adımlara bölerek her bir iş adımındaki tehlikeleri ve güvenli çalışma prosedürlerini belirleyen görev odaklı yöntemdir.",
        q: "Kişi veya görev odaklı olarak bir işin yapılışını adım adım alt basamaklara ayıran ve her adım için tehlike ile önlemi tanımlayan yöntem hangisidir?"
      },
      {
        opt: "Kontrol Listesi (Checklist) ve Olursa Ne Olur? (What-If) Yöntemi",
        desc: "Önceden hazırlanmış standart kontrol soruları ile hızlı saha taraması yapan (Checklist) ve 'Şu vana kapanırsa ne olur?' sorusuyla beyin fırtınası yürüten (What-If) yöntemdir.",
        q: "Tesis genelinde hızlı bir ön tarama yapmak için Evet/Hayır soruları veya 'Şöyle olursa ne olur?' beyin fırtınası soruları kullanan pratik yöntemler hangileridir?"
      },
      {
        opt: "Papyon (Bow-Tie) Risk Analiz Yöntemi (FTA + ETA Birleşimi)",
        desc: "Merkezdeki kritik olayın sol tarafında Hata Ağacı (nedenler ve önleyici bariyerler), sağ tarafında ise Olay Ağacı (sonuçlar ve azaltıcı bariyerler) bulunan görsel yöntemdir.",
        desc: "Sol tarafında tehlike nedenlerini (FTA), sağ tarafında ise olası sonuçları (ETA) birleştirerek önleyici ve sınırlandırıcı bariyerleri gösteren yöntemdir.",
        q: "Merkezdeki kritik olayın solunda nedenleri (Hata Ağacı), sağında ise sonuçları (Olay Ağacı) birleştirerek şekli itibarıyla bu adı alan analiz yöntemi nedir?"
      }
    ]
  }
];

export const riskExtraFills = [
  {
    q: "Risk değerlendirmesi; Çok Tehlikeli sınıfta ________ yılda bir, Tehlikeli sınıfta 4 yılda bir, Az Tehlikeli sınıfta 6 yılda bir yenilenir.",
    answers: ["2", "iki"],
    hint: "Çok tehlikeli sınıf yenileme süresi (yıl)",
    explanation: "Çok tehlikeli sınıfta risk değerlendirmesi en geç 2 yılda bir yenilenir."
  },
  {
    q: "Risk değerlendirmesi; Çok Tehlikeli sınıfta 2 yılda bir, Tehlikeli sınıfta 4 yılda bir, Az Tehlikeli sınıfta ise ________ yılda bir yenilenir.",
    answers: ["6", "altı", "alti"],
    hint: "Az tehlikeli sınıf yenileme süresi (yıl)",
    explanation: "Az tehlikeli sınıfta risk değerlendirmesi en geç 6 yılda bir yenilenir."
  },
  {
    q: "İş kazası veya meslek hastalığı meydana geldikten SONRA tepki vermeye dayanan geleneksel yaklaşıma ________ (tepkisel) yaklaşım denir.",
    answers: ["reaktif", "tepkisel"],
    hint: "Proaktif yaklaşımın zıttı",
    explanation: "Olay olduktan sonra harekete geçen geleneksel anlayışa Reaktif yaklaşım denir."
  },
  {
    q: "Risk kontrol tedbirleri hiyerarşisinin 1. ve en etkili adımı, tehlikenin kaynağında tamamen ortadan kaldırılması yani ________'dur.",
    answers: ["eliminasyon", "yok etme"],
    hint: "Tehlikeyi tamamen yok etme adımı",
    explanation: "Risk kontrol hiyerarşisinin ilk basamağı Eliminasyon (Yok etme) adımıdır."
  },
  {
    q: "Kontrol önlemleri alındıktan sonra tamamen sıfırlanamayan ve ortamda geriye kalan riske ________ (kalıntı) risk denir.",
    answers: ["artık", "artik", "kalıntı", "kalinti"],
    hint: "Residual risk karşılığı",
    explanation: "Önlemler sonrası geriye kalan riske Artık (Kalıntı) Risk denir."
  },
  {
    q: "Heinrich'in Kaza Piramidine (1 - 29 - 300 kuralı) göre her 1 ölümlü/ağır kazanın altında ________ adet hafif yaralanmalı kaza ve 300 ramak kala olay bulunur.",
    answers: ["29", "yirmi dokuz"],
    hint: "1 - ? - 300 piramidindeki orta sayı",
    explanation: "Heinrich piramidinde oran 1 ağır/ölümlü, 29 hafif yaralanmalı ve 300 ramak kala olaydır."
  },
  {
    q: "Heinrich'in Domino Teorisine göre iş kazalarının %88'i güvensiz hareketlerden, %________'u ise güvensiz durumlardan kaynaklanır.",
    answers: ["10", "on"],
    hint: "%88 + %? + %2 = %100",
    explanation: "Heinrich'e göre kazaların %88'i güvensiz hareket, %10'u güvensiz durum, %2'si önlenemez nedenlerdir."
  },
  {
    q: "Çalışanın baretini takmaması veya makine koruyucusunu sökmesi güvensiz hareket iken; zeminin yağlı ve kaygan olması güvensiz ________'dur.",
    answers: ["durum", "koşul", "kosul"],
    hint: "Ortama ait fiziksel kusur",
    explanation: "Fiziksel ortamdaki eksiklik ve kusurlara Güvensiz Durum (Koşul) denir."
  },
  {
    q: "5x5 L Tipi Matris yönteminde olasılık (1-5) ve şiddet (1-5) çarpımıyla elde edilebilecek en yüksek risk skoru ________ puandır.",
    answers: ["25", "yirmi beş"],
    hint: "5 x 5 sonucu",
    explanation: "5x5 matriste maksimum risk skoru 5 x 5 = 25 (Katlanılamaz Risk) puandır."
  },
  {
    q: "L Tipi matristen farklı olarak işletmenin son 5 yıllık kaza istatistiklerini kullanan ve ekip çalışması gerektiren matris yöntemi ________ Tipi Matristir.",
    answers: ["X", "x"],
    hint: "L harfi dışındaki diğer matris tipi harfi",
    explanation: "Geçmiş 5 yıllık kaza istatistiklerini kullanan matris yöntemi X Tipi Matristir."
  },
  {
    q: "İstenmeyen bir Tepe Olaydan (Top Event) başlayarak VE/VEYA mantık kapılarıyla kök nedenlere doğru inen tümdengelim yöntemine ________ Ağacı Analizi (FTA) denir.",
    answers: ["hata"],
    hint: "Fault Tree Analysis karşılığı",
    explanation: "Tepe olaydan nedenlere inen mantık kapılı yöntem Hata Ağacı Analizi (FTA)'dır."
  },
  {
    q: "Bir başlangıç olayından hareketle güvenlik bariyerlerinin çalışıp çalışmamasına göre olası sonuçları ileriye doğru dallandıran tümevarım yöntemine ________ Ağacı Analizi (ETA) denir.",
    answers: ["olay"],
    hint: "Event Tree Analysis karşılığı",
    explanation: "Başlangıç olayından sonuçlara giden tümevarım yöntemi Olay Ağacı Analizi (ETA)'dır."
  },
  {
    q: "Bir işi ardışık alt görev basamaklarına ayırarak her adımdaki tehlike ve önlemleri belirleyen yönteme İş Güvenliği Analizi (kısaltması: ________) denir.",
    answers: ["JSA", "jsa", "İGA"],
    hint: "Job Safety Analysis kısaltması",
    explanation: "Job Safety Analysis (JSA), işi adım adım bölen görev odaklı risk analiz yöntemidir."
  },
  {
    q: "Bir kaza sonrasında yüzeysel sebepte kalmayıp üst üste 5 kez '________?' sorusunu sorarak sistemsel ana sebebe inme yöntemine Kök Neden Analizi denir.",
    answers: ["neden", "niçin"],
    hint: "5 Whys yöntemindeki soru kelimesi",
    explanation: "5 Neden (5 Whys) tekniğiyle kazanın kök nedenine ulaşılır."
  },
  {
    q: "Ciddi ve yakın bir tehlike ile karşı karşıya kalan çalışanların 6331 sayılı Kanun Madde 13 uyarınca tedbir alınıncaya kadar işi bırakmasına çalışmaktan ________ hakkı denir.",
    answers: ["kaçınma", "kacinma"],
    hint: "Çalışanın tehlikeli işi reddetme hakkı",
    explanation: "6331 sayılı Kanun Madde 13 çalışanlara ciddi ve yakın tehlikede Çalışmaktan Kaçınma Hakkı tanır."
  },
  {
    q: "Maden, inşaat ve metal gibi çok tehlikeli sınıftaki işyerlerinde risk değerlendirmesi hiç yapılmamışsa Bakanlık müfettişlerince işin ________ yaptırımı uygulanır.",
    answers: ["durdurulması", "durdurulmasi"],
    hint: "Faaliyetin askıya alınması/kapatılması",
    explanation: "Çok tehlikeli sınıfta risk değerlendirmesi olmaması doğrudan İşin Durdurulması sebebidir."
  },
  {
    q: "İşyerinde meydana gelen bir iş kazası, işveren tarafından SGK'ya kazadan sonraki en geç ________ iş günü içinde bildirilmelidir.",
    answers: ["3", "üç", "uc"],
    hint: "SGK iş kazası bildirim süresi (iş günü)",
    explanation: "İş kazaları SGK'ya kazadan sonraki 3 iş günü içinde bildirilir."
  },
  {
    q: "James Reason tarafından geliştirilen ve güvenlik katmanlarındaki zafiyet deliklerinin aynı hizaya gelmesiyle kazanın oluştuğunu anlatan modele İsviçre ________ Modeli denir.",
    answers: ["peyniri", "peynir"],
    hint: "Delikli peynir benzetmesi",
    explanation: "Savunma bariyerlerindeki boşlukların çakışmasını anlatan model İsviçre Peyniri Modelidir."
  },
  {
    q: "6331 sayılı Kanun'a göre işin bütün safhalarında İSG ile ilgili riskleri ortadan kaldırmak veya azaltmak için planlanan ve alınan tedbirlerin tümüne ________ denir.",
    answers: ["önleme", "onleme"],
    hint: "Prevention karşılığı kanuni tanım",
    explanation: "Kanunda riskleri ortadan kaldırmak veya azaltmak için alınan tedbirlerin tümü 'Önleme' olarak tanımlanır."
  },
  {
    q: "Bir işyerinde alt işveren (taşeron) bulunması halinde alt işveren kendi yaptığı risk değerlendirmesinin bir nüshasını ________ işverene vermek zorundadır.",
    answers: ["asıl", "asil", "ana"],
    hint: "Taşerona işi veren ana işveren",
    explanation: "Alt işverenler hazırladıkları risk değerlendirmesinin bir nüshasını koordinasyon için Asıl İşverene teslim eder."
  },
  {
    q: "Risk değerlendirmesi sürecinin 5 temel adımının sonuncusu, yapılan tüm çalışmaların yazılı hale getirilmesi yani ________ aşamasıdır.",
    answers: ["dokümantasyon", "dokumantasyon", "belgelendirme"],
    hint: "Raporlama ve kayıt altına alma aşaması",
    explanation: "Tasarım, tehlike tanımlama, analiz ve kontrol adımlarından sonra 5. aşama Dokümantasyondur."
  },
  {
    q: "Yeni kurulan bir işletmede risk değerlendirmesi çalışması işyerinin ________ veya kuruluş aşamasında başlar.",
    answers: ["tasarım", "tasarim", "planlama"],
    hint: "Kuruluştan da önceki ilk proje aşaması",
    explanation: "Risk değerlendirmesi işyerinin tasarım veya kuruluş aşamasında başlar."
  },
  {
    q: "FMEA yönteminde Olasılık (1-10), Şiddet (1-10) ve Farkedilebilirlik (1-10) çarpımıyla elde edilen ve 1 ile 1000 arasında değişen değere Risk ________ Sayısı (RÖS) denir.",
    answers: ["öncelik", "oncelik"],
    hint: "RÖS kısaltmasındaki Ö harfi",
    explanation: "FMEA'da hesaplanan skora Risk Öncelik Sayısı (RÖS / RPN) denir."
  },
  {
    q: "Gürültülü bir bölümde çalışanların maruziyet süresini azaltmak için vardiya değişimi / iş rotasyonu yapılması risk kontrol hiyerarşisinde ________ önlemlere girer.",
    answers: ["idari", "organizasyonel"],
    hint: "Mühendislik ile KKD arasındaki yönetimsel adım",
    explanation: "Çalışma sürelerinin düzenlenmesi, rotasyon ve eğitim İdari Önlemler basamağındadır."
  },
  {
    q: "İşyerinde aşırı iş yükü, vardiya düzensizliği, stres ve mobbing (psikolojik taciz) gibi tehlikeler ________ risk faktörleri grubunda yer alır.",
    answers: ["psikososyal", "psiko-sosyal"],
    hint: "Ruhsal ve sosyal çalışma ortamı riskleri",
    explanation: "Stres, mobbing ve tükenmişlik Psikososyal risk faktörleridir."
  },
  {
    q: "Tekrarlayan zorlayıcı hareketler, ağır yük kaldırma ve uygunsuz çalışma duruşu ________ risk faktörleri arasında yer alır.",
    answers: ["ergonomik", "fiziksel"],
    hint: "İşi insana uyumlu hale getirme bilimiyle ilgili",
    explanation: "Uygunsuz duruş ve kas-iskelet zorlanmaları Ergonomik risk faktörleridir."
  },
  {
    q: "Hata Ağacı (FTA) ile Olay Ağacını (ETA) merkezdeki kritik olay etrafında birleştiren görsel risk analiz yöntemine ________ (Bow-Tie) yöntemi denir.",
    answers: ["papyon", "bow-tie", "bowtie"],
    hint: "Kravat/papyon şeklindeki diyagram",
    explanation: "Nedenleri ve sonuçları kelebek/papyon şeklinde birleştiren yönteme Papyon (Bow-Tie) analizi denir."
  },
  {
    q: "6331 sayılı Kanun'a göre risk değerlendirmesi yaptırmak için işyerinde en az ________ çalışan bulunması yeterlidir (tüm işyerlerinde zorunludur).",
    answers: ["1", "bir"],
    hint: "Asgari çalışan sayısı",
    explanation: "Risk değerlendirmesi çalışan sayısı sınırı olmaksızın (1 çalışan dahi olsa) tüm işyerlerinde zorunludur."
  },
  {
    q: "Risk değerlendirmesi dokümanının tüm sayfaları paraflanır ve son sayfası risk değerlendirmesi ________ yer alan tüm üyeler tarafından imzalanır.",
    answers: ["ekibinde", "ekibi"],
    hint: "Çalışmayı yürüten kurul/takım",
    explanation: "Dokümanın son sayfası Risk Değerlendirmesi Ekibindeki tüm üyelerce imzalanır."
  },
  {
    q: "İşyerinde bir iş kazası, meslek hastalığı veya ________ olay meydana geldiğinde periyodik süre beklenmeden risk değerlendirmesi yenilenir.",
    answers: ["ramak kala", "ramakkala"],
    hint: "Yaralanmasız ucuz atlatılan olay",
    explanation: "İş kazası, meslek hastalığı veya ramak kala olay yaşandığında risk değerlendirmesi derhal yenilenir."
  },
  {
    q: "Fine-Kinney yönteminde hesaplanan risk değeri ________ puanın üzerinde çıkarsa 'Tolerans Gösterilemez Risk' kabul edilir ve iş derhal durdurulur.",
    answers: ["400", "dört yüz"],
    hint: "Fine-Kinney en üst risk eşiği",
    explanation: "Fine-Kinney metodunda R > 400 bölgesi Tolerans Gösterilemez (Kabul Edilemez) risktir."
  },
  {
    q: "Kurum içinde kimse denetlemese bile herkesin güvenli davranışı ortak bir değer olarak benimsemesine güvenlik ________ denir.",
    answers: ["kültürü", "kulturu"],
    hint: "Ortak değer ve davranış bütünü",
    explanation: "İSG kurallarının içselleştirilip yaşam biçimi haline gelmesine Güvenlik Kültürü denir."
  },
  {
    q: "Risk Değerlendirmesi Yönetmeliği'ne göre tehlikeler tanımlanırken çalışma ortamı, ekipmanlar ve çalışanların yanı sıra ________ yürüttüğü işler de dikkate alınır.",
    answers: ["alt işverenlerin", "taşeronların", "diğer işverenlerin"],
    hint: "Sahada iş yapan diğer firmalar",
    explanation: "Ortak çalışma alanlarında diğer/alt işverenlerin yürüttüğü işlerden kaynaklanan tehlikeler de dikkate alınır."
  },
  {
    q: "6331 sayılı Kanun Madde 5'e göre risklerle ________ mücadele etmek birinci temel ilkedir.",
    answers: ["kaynağında", "kaynaginda"],
    hint: "Tehlikenin doğduğu ilk nokta",
    explanation: "Risklerle kaynağında mücadele etmek kanunun temel korunma ilkesidir."
  },
  {
    q: "'Şu vana kapanırsa ne olur?' gibi beyin fırtınası sorularıyla yapılan kalitatif risk analiz yöntemine ________ (What-If) yöntemi denir.",
    answers: ["olursa ne olur", "what-if", "what if"],
    hint: "What-If yönteminin Türkçe adı",
    explanation: "What-If (Olursa Ne Olur?) yöntemi beyin fırtınası sorularıyla olası sapmaları inceler."
  }
];
