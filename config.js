const fs = require('fs')
const chalk = require('chalk')

//web api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// Other
global.namabot = ['Patrick-Botz']
global.namaowner = ['RajaDev']
global.owner = ['6289505054287']
global.premium = ['6289505054287']
global.packname = '© Created By'
global.author = 'RajaXCode'
global.sessionName = 'session.data'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.symbol1 = '•'
global.symbol2 = '›'
global.wm = '© RajaDev Coding'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/foto/image.jpg')
global.video = { url: 'https://telegra.ph/file/45c29d1789968d9a28eac.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
