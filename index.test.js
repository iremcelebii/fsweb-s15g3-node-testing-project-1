const utils = require("./index");

describe("[Görev 1] nesneyiTrimle", () => {
  test("[1] propları trimlenmiş bir nesne döndürüyor", () => {
    // ÖRNEK
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.nesneyiTrimle(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 2] verileniTrimle", () => {
  test("[3] verilen propu trimliyor", () => {
    //!arrange
    let inpuObj = { isim: "    jane   " };
    let expected = { isim: "jane" };
    //!act
    let result = utils.verileniTrimle(inpuObj, "isim");
    //!assert
    expect(result).toEqual(expected);
  });
  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    //!arrange
    let inpuObj = { isim: "    jane   ", age: "   34   " };
    let expected = { isim: "jane", age: "   34   " };
    //!act
    let result = utils.verileniTrimle(inpuObj, "isim");
    //!assert
    expect(result).toEqual(expected);
  });
});

describe("[Görev 3] enBuyukTamsayiyiBul", () => {
  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }", () => {
    //!arrange
    let inpuObj = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }];
    let expected = 3;
    //!act
    let result = utils.enBuyukTamsayiyiBul(inpuObj);
    //!assert
    expect(result).toEqual(expected);
  });
});

describe("[Görev 4] Sayici", () => {
  let sayici;
  beforeEach(() => {
    //!arrange
    sayici = new utils.Sayici(3); // her test yeni bir sayı ile başlatılıyor
  });
  test("[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor", () => {
    //!act
    let result = sayici.asagiSay();
    //!assert
    expect(result).toEqual(3);
  });
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    //!act
    sayici.asagiSay();
    let result = sayici.asagiSay();
    //!assert
    expect(result).toEqual(2);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    //!act
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    let result = sayici.asagiSay();

    //!assert
    expect(result).toEqual(0);
  });
});

describe("[Görev 5] Mevsimler", () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler(); // her test yeni bir mevsimle başlar
  });
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    //!act
    let result = mevsimler.sonraki();
    //!assert
    expect(result).toEqual("yaz");
  });
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    //!act
    mevsimler.sonraki();
    let result = mevsimler.sonraki();
    //!assert
    expect(result).toEqual("sonbahar");
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    //!act
    mevsimler.sonraki();
    mevsimler.sonraki();
    let result = mevsimler.sonraki();
    //!assert
    expect(result).toEqual("kış");
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    //!act
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();

    let result = mevsimler.sonraki();
    //!assert
    expect(result).toEqual("ilkbahar");
  });
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    //!act
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    let result = mevsimler.sonraki();
    //!assert
    expect(result).toEqual("yaz");
  });
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    //!act
    for (let i = 1; i <= 39; i++) {
      mevsimler.sonraki();
    }
    let result = mevsimler.sonraki();
    //!assert
    expect(result).toEqual("ilkbahar");
  });
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30); // her test yeni bir araba oluşturur
  });
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {
    let result = focus.sur(30);
    expect(result).toEqual(30);
  });
  test("[16] arabayı sürmek benzin tüketiyor", () => {
    focus.sur(600);
    let result = focus.sur(600);
    expect(result).toEqual(600);
  });
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    focus.sur(600);
    focus.benzinal(20);
    let result = focus.sur(600);
    expect(result).toEqual(1200);
  });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    let result1 = focus.benzinal(20);
    let result2 = focus.benzinal(40);
    expect(result1).toEqual(result2);
  });
});

describe("[Görev 7] asenkronCiftSayi", () => {
  test("[19] bir çift sayı verilirse true çözümlüyor", () => {
    utils.asenkronCiftSayi(2).then((result) => {
      expect(result).toBe(true);
    });
  });
  test("[20] tek sayı verilirse false çözümlüyor", async () => {
    let result = await utils.asenkronCiftSayi(1);
    expect(result).toBe(false);
  });
});
