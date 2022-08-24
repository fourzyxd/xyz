let fs = require('fs')
//bts================================================
global.owner = ['6285748600473','6285338590624'] // Letakan nomor kamu disini
global.mods = ['6285748600473','6285338590624'] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  aqul: 'https://api.justaqul.xyz',
  irwan: 'https://irwan-api1-xyz.herokuapp.com',
  mel: 'https://melcanz.com'

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'cristian9407',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://api.lolhuman.xyz': 'RIFQIBOTZ',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'pnj8NAJb',
  'https://api.justaqul.xyz': '5kbUqdG00OXelFYx',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://irwan-api1-xyz.herokuapp.com': 'memek',
  'https://melcanz.com': 'jokowi3periode'

}

// Sticker WM
global.packname = ':)'
global.author = '@yudtya_x_ameliya'
global.irwan1 = '6285748600473@s.whatsapp.net'
global.wan = `0@s.whatsapp.net` //gausah di ubah
global.wait = '「 ⏱️ 」Loading...'
global.ganteng = 'https://wa.me/y285748600473?text=Hallo Mas, Kamu Ganteng'
global.gantengku = 'Link Ke Whatsapp Developer Bot'
global.eror = '「❗」Server ERROR!'
global._gc1 = 'https://chat.whatsapp.com/BHfAnBSe1UTHzRpTSWkFx1'
global._gc2 = 'https://chat.whatsapp.com/JEDQfzMGZan4HA98wtxsNL'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.watermark = '© yudtya ᝣ ameliya'
global.wm = '© yudtya ᝣ ameliya'
global.gc1 = '6281228040725-1623203905@g.us'
global.gc2 = '6287887038108-1499223893@g.us'
global.sumberurl = 'https://github.com/fourzylol'
global.deskripsiurl = 'fourzybot adalah salah satu bot WhatsApp, yang mempunyai ±350 fitur'
global.namabot = "fourzybot" //manual di sini
global.thanks = `Thanks to:\n•Allah swt\n•Nurutomo\n•IrwanX\n•Ariffb\n•Aca Mirabel\n•Penyedia Layanan API\n•Orang-orang yang Berdonasi\n•Wifi Tetangga\n\nJika menemukan bug atau request fitur dan join bot harap chat owner dengan cara:\n*#report* [pesan].\n\n(Bot join group NOT FREE!)\nPrice:\n10K untuk 1 bulan\nUntuk 1 group\n\nNb:bot ini masih terus dikembangkan.`
global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
