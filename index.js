/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { isim: 'jane' }
 */
function nesneyiTrimle(obj) {
  //!objelerin key/value larını dolaşmak için: i-->key obj[i]-->value
  for (let i in obj) {
    if (typeof obj[i] === "string") {
      //!tekrar değere atamayınca yapmıyor
      obj[i] = obj[i].trim();
    }
  }

  return obj;
}

// console.log(nesneyiTrimle({ isim: "  jane  " }));

/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  obj[prop] = obj[prop].trim();

  return obj;
}

// console.log(verileniTrimle({ isim: "  jane  ", yas: "   34    " }, "isim"));

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  let enbuyuksayi = 0;
  tamsayilar.map((obje) => {
    for (let i in obje) {
      if (enbuyuksayi < obje[i]) {
        enbuyuksayi = obje[i];
      }
    }
  });
  return enbuyuksayi;
}

console.log(
  enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }])
);
//!NESNE TABANLI PROGRAMLAMA DİLLERİ: java C# JS
//bu bir class/obje:
function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */

  // ✨ gerekli propları ekleyin

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */

  //!objenin metodu:
  this.asagiSay = () => {
    if (ilkSayi == 0) {
      return 0;
    } else {
      return ilkSayi--;
    }
  };
}

const sayac = new Sayici(3);
console.log(sayac.asagiSay());
console.log(sayac.asagiSay());
console.log(sayac.asagiSay());
console.log(sayac.asagiSay());
console.log(sayac.asagiSay());
function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */

  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */

  const mevsimler = ["yaz", "sonbahar", "kış", "ilkbahar"];
  let i = 0;

  this.sonraki = () => {
    let mevsim = mevsimler[i % mevsimler.length];
    console.log("i:", i % mevsimler.length);
    i++;
    return mevsim;
  };
}

// const mevsimler = new Mevsimler();
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());
// console.log(mevsimler.sonraki());

function Araba(isim, depo, kml) {
  let gidilenYol = 0;

  this.sur = (gidilecekyol) => {
    if (depo > gidilecekyol / kml) {
      gidilenYol = gidilenYol + gidilecekyol;
      depo = depo - gidilecekyol / kml;
      console.log("gidilen toplam yol:", gidilenYol, "km");
      console.log("kalan depo:", depo, "L");

      return gidilenYol;
    }
    gidilenYol = gidilenYol + depo * kml;
    depo = 0;
    console.log("gidilen toplam yol:", gidilenYol, "km");
    console.log("kalan depo:", depo, "L");

    return gidilenYol;
  };

  this.benzinal = (litre) => {
    if (depo + litre <= 20 && litre >= 0) {
      depo = depo + litre;
      console.log("Benzin yüklendi, kalan depo:", depo, "L");
      return depo;
    } else if (depo + litre > 20) {
      depo = 20;
      console.log("Benzin yüklendi, kalan depo:", depo, "L");
      return depo;
    }
  };
}

const focus = new Araba("focus", 20, 30);
focus.sur(30);
focus.sur(30);
focus.sur(300);
focus.sur(180);
focus.sur(180);

focus.benzinal(1);
focus.sur(30);
focus.sur(180);
focus.benzinal(100);
focus.sur(150);
/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
function asenkronCiftSayi(sayi) {
  return new Promise((res) => {
    res(sayi % 2 == 0);
  });
}
//yukarıdaki res aşağıdaki result a karşılık geliyor
asenkronCiftSayi(2).then((result) => {
  console.log(result);
});

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
};
