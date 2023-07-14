import { fireEvent, render,screen } from "@testing-library/react"
import App from "./App"
import Counter from "./Counter"
// Test yazma yöntemleri
// 1 - Test Driven Development (TDD) | RED-to-Green
// 2 - Behaviour Driven Development (BDD)

//! test methodu icolorBtnki parametre alır
// 1. neyi test test ettiğimizin açıklaması
// 2. kontrollleri yapıcağımız fonksiyon
// testi yapıcağımız bileşeni ekrana basma (sanal ortamda gerçekleşir)

test("buton rengi ve yazısı değişimi",()=>{
    render(<App/>)
    // change to blue yazan pembe butonu çağırma
    // change to blue yazıyor mu ?
    // buton ilk ekrana geldiğinde pembe mi? 
    // tıklama olayını gerçekleştir
    // change to pink yazıyor mu 
    // butona tıklanınca mavi oldu mu ?

  const colorBtn =  screen.getByRole("button", {name : /change to blue/i})
  expect(colorBtn).toHaveTextContent("Change to blue")
  expect(colorBtn).toHaveStyle({backgroundColor:"pink"})
  fireEvent.click(colorBtn)
  expect(colorBtn).toHaveTextContent("Change to pink")
  expect(colorBtn).toHaveStyle({backgroundColor :"#61dafb"})
})

test("checkboxa tıklanınca butonun etkisiz olması", ()=>{
    render(<App/>)
    // checkbox u çağırma
    // butonu çağırma
    // buton aktif mi ?
    // checkboxa tıklama durumu
    // tıklanınca buton inaktif mi ? 
    const checkbox = screen.getByRole("checkbox")
    const colorBtn =screen.getByRole("button",{name : /change to blue/i})
    expect(colorBtn).toBeEnabled()
    fireEvent.click(checkbox)
    expect(colorBtn).toBeDisabled()
})

// COUNTER UNITTEST
// butonları çağır
// sayacı çağır
// sayacın değeri 0 mı konrol et
// butonların stillerini  kontrol et
// azalt butonuyla count azalacak mı ?


// describe aynı özellik / bileşen ile alaklaı olan
// testleri bir araya toplamamızı sağlar

describe("Counter ile ilgili tesler",()=>{
    // her testten önce yapılcak ortak işlemleri belirler
  // beforEach: her testten önce ona verdiğimiz kodu çalıştırır
  // beforAll: ilk başta sadece bir kere önce ona verdiğimiz kodu çalıştırır

    test("sayac ve butonların özellikleri", ()=>{
  render( <Counter/>)
 const increaseBtn =   screen.getByRole("button",{name: /Arttır/i})
 const decreaseBtn = screen.getByRole("button",{name : /Azalt/i})
const counter =  screen.getByTestId("sayac-alanı")
expect(increaseBtn).toHaveStyle({padding : "8px 12px", borderRadius: "5px"})
expect(decreaseBtn).toHaveStyle({padding : "8px 12px", borderRadius: "5px"})
expect(counter).toHaveTextContent("0")
    })
// artır butonuyla count artacak mı ?
// artır butonuna basınca değeri 1 olacak mı 
// arttır butonunu çağır
// 
    test("arttır butonuna basma", ()=>{
render(<Counter/>)
const increaseBtn =   screen.getByRole("button",{name: /Arttır/i})
const counter = screen.getByTestId("sayac-alanı")
fireEvent.click(increaseBtn)
expect(counter).toHaveTextContent("1")
})

test ("azalt butonuna basma", ()=>{
    render (<Counter/>)
   const decreaseBtn= screen.getByRole("button",{name:/Azalt/i})
  const counter=  screen.getByTestId("sayac-alanı")
    fireEvent.click(decreaseBtn)
expect(counter).toHaveTextContent("-1")
})
})

