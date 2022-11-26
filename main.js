const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0
const botSay = (data) => {
    return [
        `"Perkenalkan saya dari Chanel 'Web Chanel', siapa nama kamu?"`,
        `"Hai ${data?.nama} salam kenal, btw berapa usia kamu?"`,
        `"Ohh..${data?.usia}, hobi kamu apa ya?"`,
        `"Waww sama dong aku juga hobi ${data?.hobi}, ee..kamu udah punya pacar?"`,
        `"Ohh..${data?.pacar}, ya udah kalau gitu. udahan yah?"`
    ]
}
let userData = []
pertanyaan.innerHTML = botSay()[0]

function botStart() {
    if (jawaban.value.length < 1) return alert(`Silahkan ${userData[0]} isi jawaban dulu`)
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(5px)"

    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"

    }, [1000])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank u ya ${userData[0]} udah main ke Chanel 'Web Chanel', kali-kali kita main ${userData[2]} bareng ya!`
    jawaban.value = "Siap thanks juga!"

}

function botEnd() {
    alert(`Terimakasih ${userData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama`)
    window.location.reload()

}