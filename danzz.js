require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const ms = require('ms');
const { JSDOM } = require('jsdom')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')

//lib
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

//sewa
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));

//db game
let _family100 = db.data.game.family100 = []
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

//waktu
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//tanggal
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var harri = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = harri[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const tanggall = (hri + '' + buln[bulnh] + '' + syear)
const harii = (thisDaye)

module.exports = danzz = async (danzz, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await danzz.decodeJid(danzz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const from = m.chat
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        
        //ucapan waktu
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🌃'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🏙'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌁'
}
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌉'
}
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌌'
}

		// Group
        const groupMetadata = m.isGroup ? await danzz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = true
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: true,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }

//Sewa
const isSewa = _sewa.checkSewaGroup(from, sewa)
//
_sewa.expiredCheck(danzz, sewa)
	
        // Public & Self
        if (!danzz.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            danzz.readMessages([m.key])
            console.log(chalk.black(chalk.bgGreen('[ Chat ]')), chalk.black(chalk.blueBright(new Date)), chalk.black(chalk.greenBright(budy || m.mtype)) + '\n' + chalk.magentaBright('- from'), chalk.blueBright(pushname), chalk.greenBright(m.sender) + '\n' + chalk.blueBright('- in'), chalk.cyanBright(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
		//reset limit
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await danzz.setStatus(`${'©Danzz-MD'} | Runtime : ${runtime(process.uptime())}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin`)
        let gclink = (`https://chat.whatsapp.com/`+await danzz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ngapain Lu Ngirim Link Group Ini?`)
        if (isAdmins) return m.reply(`Admin Mah Bebas Yakan?`)
        if (isCreator) return m.reply(`Owner Bot Mah Bebas Yakan?`)
        m.reply(`[ *ANTI LINK* ]\n\nKamu Terdeteksi Mengirim Link Grup, Kamu Akan Di Kick!!!`)
        danzz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: danzz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, danzz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        danzz.ev.emit('messages.upsert', msg)
        }
        if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            danzz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danzz.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danzz.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await danzz.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await danzz.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    danzz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    danzz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) danzz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) danzz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) danzz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    danzz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) danzz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) danzz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    danzz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            danzz.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        
        switch(command) {
        	case 'menu': case 'help': case '?': {
				m.reply(mess.wait)
				anu = `${ucapanWaktu} ${pushname}

Hi saya ${namabot}, bot whatsapp yang dibuat oleh:DanzzCoding, pada 21/08/22 menggunakan JavaScript.

*Sosmed*
- My Github:
https://github.com/Ramdaniofficial
- My Youtube:
https://youtube.com/DanzzCoding
- My Instagram:
https://instagram.com/ramdani_real01
- My Facebook:
https://www.facebook.com/profile.php?id=100055274594084`
                let btn = [{
                                urlButton: {
                                    displayText: 'My Website',
                                    url: 'https://danzzcodingweb.vercel.app'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
            case 'command': case 'c':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `${ucapanWaktu} ${pushname}\n\nKalo ada yg error lapor ke owner.\n\n`,
                    description: "*Click below here*",
                    buttonText: "SELECT MENU",
                    footerText: "© Danzz Coding",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "All Menu",
								"rows": [
									{
										"title": "All Menu",
										"description": "Menampikan Semua Menu",
										"rowId": `${prefix}allmenu`
									}
								]
							},
							{
								"title": "List Menu",
								"rows": [
									{
										"title": "Info Menu",
										"description": "Menampilkan Info Menu",
										"rowId": `${prefix}infomenu`
									},
									{
										"title": "Hosting Menu",
										"description": "Menampilkan Hosting Menu",
										"rowId": `${prefix}hostingmenu`
									},
									{
										"title": "Downloader Menu",
										"description": "Menampilkan Downloader Menu",
										"rowId": `${prefix}downloadermenu`
									},
									{
										"title": "Asupan Menu",
										"description": "Menampilkan Asupan Menu",
										"rowId": `${prefix}asupanmenu`
									},
									{
										"title": "Fun Menu",
										"description": "Menampilkan Fun Menu",
										"rowId": `${prefix}funmenu`
									},
									{
										"title": "Convert Menu",
										"description": "Menampilkan Convert Menu",
										"rowId": `${prefix}convertmenu`
									},
									{
										"title": "Text Pro Menu",
										"description": "Menampilkan Text Pro Menu",
										"rowId": `${prefix}textpromenu`
									},
									{
										"title": "Photo Oxy Menu",
										"description": "Menampilkan Photo Oxy Menu",
										"rowId": `${prefix}photooxymenu`
									},
									{
										"title": "Ephoto Menu",
										"description": "Menampilkan Ephoto Menu",
										"rowId": `${prefix}ephotomenu`
									},
									{
										"title": "Group Menu",
										"description": "Menampilkan Group Menu",
										"rowId": `${prefix}groupmenu`
									},
									{
										"title": "Owner Menu",
										"description": "Menampilkan Owner Menu",
										"rowId": `${prefix}ownermenu`
									}
										]
										},
							{
								"title": "Developer",
								"rows": [
									{
										"title": "Developer",
										"description": "Menampilkan Nomor Developer",
										"rowId": `${prefix}owner`
									}
								]
							},
							{
								"title": "Sewabot",
								"rows": [
									{
										"title": "Sewabot",
										"description": "Menampilkan List Sewabot",
										"rowId": `${prefix}sewabot`
									}
								]
							},
							{
								"title": "Thanks To",
								"rows": [
									{
										"title": "Thanks To",
										"description": "Menampilkan Ungkapan Terima Kasih",
										"rowId": `${prefix}tqto`
									}
								]
							}
						],
          listType: 1
                }
            }), { userJid: m.chat, quoted: m })
            danzz.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

case 'allmenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *INFO MENU*
${symbol2} ${prefix}ping
${symbol2} ${prefix}speed
${symbol2} ${prefix}botstatus

${symbol1} *HOSTING MENU*
${symbol2} ${prefix}domain <hostname|ip>
${symbol2} ${prefix}listdomain
${symbol2} ${prefix}shorlink
${symbol2} ${prefix}loginwhm
${symbol2} ${prefix}logincpanel
${symbol2} ${prefix}linkadd
${symbol2} ${prefix}linksubdo

${symbol1} *DOWNLOADER MENU*
${symbol2} ${prefix}yts <query>
${symbol2} ${prefix}play <query>
${symbol2} ${prefix}ytmp3 <url>
${symbol2} ${prefix}ytmp4 <url>
${symbol2} ${prefix}tiktokwm <url>
${symbol2} ${prefix}tiktoknowm <url>
${symbol2} ${prefix}tiktokmp3 <url>
${symbol2} ${prefix}instagram <url>
${symbol2} ${prefix}facebook <url>
${symbol2} ${prefix}twitter <url>
${symbol2} ${prefix}twittermp3 <url>
${symbol2} ${prefix}joox <query>
${symbol2} ${prefix}pinterest

${symbol1} *ASUPAN MENU*
${symbol2} ${prefix}santuy
${symbol2} ${prefix}bocil
${symbol2} ${prefix}ukhty
${symbol2} ${prefix}gheayuby
${symbol2} ${prefix}rika

${symbol1} *FUN MENU*
${symbol2} ${prefix}afk <alasan>
${symbol2} ${prefix}simih <text>
${symbol2} ${prefix}halah <text>
${symbol2} ${prefix}hilih <text>
${symbol2} ${prefix}huluh <text>
${symbol2} ${prefix}heleh <text>
${symbol2} ${prefix}holoh <text>
${symbol2} ${prefix}jadian
${symbol2} ${prefix}jodohku
${symbol2} ${prefix}family100
${symbol2} ${prefix}tictactoe
${symbol2} ${prefix}delttt
${symbol2} ${prefix}tebak <option>
${symbol2} ${prefix}kuismath <mode>
${symbol2} ${prefix}suitpvp <@tag>

${symbol1} *CONVERT MENU*
${symbol2} ${prefix}ttp
${symbol2} ${prefix}attp
${symbol2} ${prefix}toimage
${symbol2} ${prefix}removebg
${symbol2} ${prefix}sticker
${symbol2} ${prefix}stickerwm
${symbol2} ${prefix}emojimix
${symbol2} ${prefix}emojimix2
${symbol2} ${prefix}tovideo
${symbol2} ${prefix}togif
${symbol2} ${prefix}tourl
${symbol2} ${prefix}tovn
${symbol2} ${prefix}tomp3
${symbol2} ${prefix}toaudio
${symbol2} ${prefix}ebinary
${symbol2} ${prefix}dbinary
${symbol2} ${prefix}styletext
${symbol2} ${prefix}smeme

${symbol1} *TEXT PRO MENU*
${symbol2} ${prefix}3dchristmas
${symbol2} ${prefix}3ddeepsea
${symbol2} ${prefix}americanflag
${symbol2} ${prefix}3dscifi
${symbol2} ${prefix}3drainbow
${symbol2} ${prefix}3dwaterpipe
${symbol2} ${prefix}halloweenskeleton
${symbol2} ${prefix}sketch
${symbol2} ${prefix}bluecircuit
${symbol2} ${prefix}space
${symbol2} ${prefix}metallic
${symbol2} ${prefix}fiction
${symbol2} ${prefix}greenhorror
${symbol2} ${prefix}transformer
${symbol2} ${prefix}berry
${symbol2} ${prefix}thunder
${symbol2} ${prefix}magma
${symbol2} ${prefix}3dcrackedstone
${symbol2} ${prefix}3dneonlight
${symbol2} ${prefix}impressiveglitch
${symbol2} ${prefix}naturalleaves
${symbol2} ${prefix}fireworksparkle
${symbol2} ${prefix}matrix
${symbol2} ${prefix}dropwater
${symbol2} ${prefix}harrypotter
${symbol2} ${prefix}foggywindow
${symbol2} ${prefix}neondevils
${symbol2} ${prefix}christmasholiday
${symbol2} ${prefix}3dgradient
${symbol2} ${prefix}blackpink
${symbol2} ${prefix}gluetext

${symbol1} *PHOTO OXY MENU*
${symbol2} ${prefix}shadow
${symbol2} ${prefix}romantic
${symbol2} ${prefix}smoke
${symbol2} ${prefix}burnpapper
${symbol2} ${prefix}naruto
${symbol2} ${prefix}lovemsg
${symbol2} ${prefix}grassmsg
${symbol2} ${prefix}lovetext
${symbol2} ${prefix}coffecup
${symbol2} ${prefix}butterfly
${symbol2} ${prefix}harrypotter
${symbol2} ${prefix}retrolol

${symbol1} *EPHOTO MENU*
${symbol2} ${prefix}ffcover
${symbol2} ${prefix}crossfire
${symbol2} ${prefix}galaxy
${symbol2} ${prefix}glass
${symbol2} ${prefix}neon
${symbol2} ${prefix}beach
${symbol2} ${prefix}blackpink
${symbol2} ${prefix}igcertificate
${symbol2} ${prefix}ytcertificate

${symbol1} *GROUP MENU*
${symbol2} ${prefix}linkgroup
${symbol2} ${prefix}hidetag <text>
${symbol2} ${prefix}tagall <text>
${symbol2} ${prefix}totag <reply>
${symbol2} ${prefix}antilink <on/off>
${symbol2} ${prefix}setppgc <image>
${symbol2} ${prefix}setname <text>
${symbol2} ${prefix}setdesc <text>
${symbol2} ${prefix}group <option>
${symbol2} ${prefix}editinfo <option>
${symbol2} ${prefix}mute <on/off>
${symbol2} ${prefix}add @user
${symbol2} ${prefix}kick @user
${symbol2} ${prefix}promote @user
${symbol2} ${prefix}demote @user
${symbol2} ${prefix}vote <text>
${symbol2} ${prefix}devote
${symbol2} ${prefix}upvote
${symbol2} ${prefix}cekvote
${symbol2} ${prefix}hapusvote

${symbol1} *OWNER MENU*
${symbol2} ${prefix}sewa
${symbol2} ${prefix}chat <option>
${symbol2} ${prefix}join <link>
${symbol2} ${prefix}leave
${symbol2} ${prefix}block @user
${symbol2} ${prefix}unblock @user
${symbol2} ${prefix}bcgroup <text>
${symbol2} ${prefix}bcall <text>
${symbol2} ${prefix}setppbot <image>
${symbol2} ${prefix}setmenu <option>
${symbol2} ${prefix}public
${symbol2} ${prefix}self
${symbol2} ${prefix}setexif
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
            //MENU
            case 'infomenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *INFO MENU*
${symbol2} ${prefix}ping
${symbol2} ${prefix}speed
${symbol2} ${prefix}botstatus
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
            case 'hostingmenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *HOSTING MENU*
${symbol2} ${prefix}domain <hostname|ip>
${symbol2} ${prefix}listdomain
${symbol2} ${prefix}shorlink
${symbol2} ${prefix}loginwhm
${symbol2} ${prefix}logincpanel
${symbol2} ${prefix}linkadd
${symbol2} ${prefix}linksubdo
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
            case 'downloadermenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *DOWNLOADER MENU*
${symbol2} ${prefix}yts <query>
${symbol2} ${prefix}play <query>
${symbol2} ${prefix}ytmp3 <url>
${symbol2} ${prefix}ytmp4 <url>
${symbol2} ${prefix}tiktokwm <url>
${symbol2} ${prefix}tiktoknowm <url>
${symbol2} ${prefix}tiktokmp3 <url>
${symbol2} ${prefix}instagram <url>
${symbol2} ${prefix}facebook <url>
${symbol2} ${prefix}twitter <url>
${symbol2} ${prefix}twittermp3 <url>
${symbol2} ${prefix}joox <query>
${symbol2} ${prefix}pinterest
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
case 'groupmenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *GROUP MENU*
${symbol2} ${prefix}linkgroup
${symbol2} ${prefix}hidetag <text>
${symbol2} ${prefix}tagall <text>
${symbol2} ${prefix}totag <reply>
${symbol2} ${prefix}antilink <on/off>
${symbol2} ${prefix}setppgc <image>
${symbol2} ${prefix}setname <text>
${symbol2} ${prefix}setdesc <text>
${symbol2} ${prefix}group <option>
${symbol2} ${prefix}editinfo <option>
${symbol2} ${prefix}mute <on/off>
${symbol2} ${prefix}add @user
${symbol2} ${prefix}kick @user
${symbol2} ${prefix}promote @user
${symbol2} ${prefix}demote @user
${symbol2} ${prefix}vote <text>
${symbol2} ${prefix}devote
${symbol2} ${prefix}upvote
${symbol2} ${prefix}cekvote
${symbol2} ${prefix}hapusvote
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
            case 'ownermenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *OWNER MENU*
${symbol2} ${prefix}sewa
${symbol2} ${prefix}chat <option>
${symbol2} ${prefix}join <link>
${symbol2} ${prefix}leave
${symbol2} ${prefix}block @user
${symbol2} ${prefix}unblock @user
${symbol2} ${prefix}bcgroup <text>
${symbol2} ${prefix}bcall <text>
${symbol2} ${prefix}setppbot <image>
${symbol2} ${prefix}setmenu <option>
${symbol2} ${prefix}public
${symbol2} ${prefix}self
${symbol2} ${prefix}setexif
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
case 'convertmenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *CONVERT MENU*
${symbol2} ${prefix}ttp
${symbol2} ${prefix}attp
${symbol2} ${prefix}toimage
${symbol2} ${prefix}removebg
${symbol2} ${prefix}sticker
${symbol2} ${prefix}stickerwm
${symbol2} ${prefix}emojimix
${symbol2} ${prefix}emojimix2
${symbol2} ${prefix}tovideo
${symbol2} ${prefix}togif
${symbol2} ${prefix}tourl
${symbol2} ${prefix}tovn
${symbol2} ${prefix}tomp3
${symbol2} ${prefix}toaudio
${symbol2} ${prefix}ebinary
${symbol2} ${prefix}dbinary
${symbol2} ${prefix}styletext
${symbol2} ${prefix}smeme
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
            case 'asupanmenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *ASUPAN MENU*
${symbol2} ${prefix}santuy
${symbol2} ${prefix}bocil
${symbol2} ${prefix}ukhty
${symbol2} ${prefix}gheayuby
${symbol2} ${prefix}rika
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
            case 'funmenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *FUN MENU*
${symbol2} ${prefix}afk <alasan> 
${symbol2} ${prefix}simih <text> 
${symbol2} ${prefix}halah <text> 
${symbol2} ${prefix}hilih <text> 
${symbol2} ${prefix}huluh <text> 
${symbol2} ${prefix}heleh <text> 
${symbol2} ${prefix}holoh <text>
${symbol2} ${prefix}jadian 
${symbol2} ${prefix}jodohku 
${symbol2} ${prefix}family100 
${symbol2} ${prefix}tictactoe 
${symbol2} ${prefix}delttt 
${symbol2} ${prefix}tebak <option> 
${symbol2} ${prefix}math <mode> 
${symbol2} ${prefix}suitpvp <@tag>
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break            
 case 'textpromenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *TEXT PRO MENU*
${symbol2} ${prefix}3dchristmas
${symbol2} ${prefix}3ddeepsea
${symbol2} ${prefix}americanflag
${symbol2} ${prefix}3dscifi
${symbol2} ${prefix}3drainbow
${symbol2} ${prefix}3dwaterpipe
${symbol2} ${prefix}halloweenskeleton
${symbol2} ${prefix}sketch
${symbol2} ${prefix}bluecircuit
${symbol2} ${prefix}space
${symbol2} ${prefix}metallic
${symbol2} ${prefix}fiction
${symbol2} ${prefix}greenhorror
${symbol2} ${prefix}transformer
${symbol2} ${prefix}berry
${symbol2} ${prefix}thunder
${symbol2} ${prefix}magma
${symbol2} ${prefix}3dcrackedstone
${symbol2} ${prefix}3dneonlight
${symbol2} ${prefix}impressiveglitch
${symbol2} ${prefix}naturalleaves
${symbol2} ${prefix}fireworksparkle
${symbol2} ${prefix}matrix
${symbol2} ${prefix}dropwater
${symbol2} ${prefix}harrypotter
${symbol2} ${prefix}foggywindow
${symbol2} ${prefix}neondevils
${symbol2} ${prefix}christmasholiday
${symbol2} ${prefix}3dgradient
${symbol2} ${prefix}blackpink
${symbol2} ${prefix}gluetext
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
case 'photooxymenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *PHOTO OXY MENU*
${symbol2} ${prefix}shadow
${symbol2} ${prefix}romantic
${symbol2} ${prefix}smoke
${symbol2} ${prefix}burnpapper
${symbol2} ${prefix}naruto
${symbol2} ${prefix}lovemsg
${symbol2} ${prefix}grassmsg
${symbol2} ${prefix}lovetext
${symbol2} ${prefix}coffecup
${symbol2} ${prefix}butterfly
${symbol2} ${prefix}harrypotter
${symbol2} ${prefix}retrolol
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
case 'ephotomenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *EPHOTO MENU*
${symbol2} ${prefix}ffcover
${symbol2} ${prefix}crossfire
${symbol2} ${prefix}galaxy
${symbol2} ${prefix}glass
${symbol2} ${prefix}neon
${symbol2} ${prefix}beach
${symbol2} ${prefix}blackpink
${symbol2} ${prefix}igcertificate
${symbol2} ${prefix}ytcertificate
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
            //FITUR
            //INFO MENU
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speed': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            //SERVER MENU
            case 'domain': 
            if (!isPremium) throw mess.premium
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone1 = "e8de8d9cbc96b323b53f596417e909b1";
            let apiToken1 = "W-qRsQzS4c0UKglamuRQ9QP_em9AcdgLqTfeybYR";
            let tld1 = "newvira.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld1, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken1,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return m.reply(`Harap Masukan Host&Ip!\n\nExample: ${prefix + command} danzz-api.duckdns.org | 114.79.1.246`);
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) m.reply(`*SUCCESS ADD DOMAIN*\n\nIP: ${e['ip']}\nDOMAIN:${e['name']}`);
          else m.reply(`404 ERROR, Msg: Domain Sudah Terdaftar, Silahkan Pakai Id Host/Ip Baru`)
        });
        break
        case 'shorlink':
        if (!isPremium) throw mess.premium
        m.reply(`*SHORT LINK*\n\nLINK: https://t-qw.tutorevent2022.cf/add.php?keyini=Y`)
        break
case 'loginwhm':
if (!isPremium) throw mess.premium
m.reply(`*LINK LOGIN WHM*\n\nLINK: https://papernesia.cloudnesia.tk:2087`)
break
case 'logincpanel':
if (!isPremium) throw mess.premium
m.reply(`*LOGIN CPANEL*\n\nLINK: https://papernesia.cloudnesia.tk:2083`)
break
case 'linksubdo':
if (!isPremium) throw mess.premium
m.reply(`*SUBDO*\n\nLINK: https://subdomain.rakapay.my.id/domain.php`)
break
case 'linkadd':
if (!isPremium) throw mess.premium
m.reply(`*LINK ADD*\n\nLINK: https://paperpack.cloudnesia.tk`)
break
case 'listdomain': {
if (!isPremium) throw mess.premium
                anu = `*LIST DOMAIN*
- barux2022.tk
- baruxx.my.id 
- xbaru.my.id
- terbarux2022.my.id
- barux.ink 

contoh : https://danzzcodingweb.barux2022.tk
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/foto/image.jpg') }, { upload: danzz.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My Website',
                                    url: 'https://danzzcodingweb.vercel.app'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                danzz.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            //DOWNLOAD MENU
            case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} DanzzCoding`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `â­” No : ${no++}\nâ­” Type : ${i.type}\nâ­” Video ID : ${i.videoId}\nâ­” Title : ${i.title}\nâ­” Views : ${i.views}\nâ­” Duration : ${i.timestamp}\nâ­” Upload At : ${i.ago}\nâ­” Author : ${i.author.name}\nâ­” Url : ${i.url}\n\nâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n\n`
                }
                danzz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} DanzzCoding`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: danzz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                danzz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                danzz.sendImage(m.chat, media.thumb, `â­” Title : ${media.title}\nâ­” File Size : ${media.filesizeF}\nâ­” Url : ${isUrl(text)}\nâ­” Ext : MP3\nâ­” Resolusi : ${args[1] || '128kbps'}`, m)
                danzz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                danzz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `â­” Title : ${media.title}\nâ­” File Size : ${media.filesizeF}\nâ­” Url : ${isUrl(text)}\nâ­” Ext : MP3\nâ­” Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'â–º With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'â™« Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                danzz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'â–º No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'â™« Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                danzz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'â–º No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'â–º With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await danzz.sendMessage(m.chat, buttonMessage, { quoted: m })
                danzz.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) danzz.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    danzz.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await danzz.sendImage(m.chat, anu.result.img, `â­” Title : ${anu.result.lagu}\nâ­” Album : ${anu.result.album}\nâ­” Singer : ${anu.result.penyanyi}\nâ­” Publish : ${anu.result.publish}\nâ­” Lirik :\n${anu.result.lirik.result}`, m)
                danzz.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break            
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'â–º Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                danzz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: 'â–º Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await danzz.sendMessage(m.chat, buttonMessage, { quoted: m })
                danzz.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                danzz.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `â­” Title : ${anu.result.title}`}, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                danzz.sendMessage(m.chat, { image: { url: result }, caption: 'â­” Media Url : '+result }, { quoted: m })
            }
            break
            
            //ASUPAN MENU
            case 'santuy': {
            m.reply(mess.wait)	
			santuy = await getBuffer(`https://ramdani-api.herokuapp.com/api/asupan/santuy?apikey=Ramdaniofficial`)
			danzz.sendMessage(m.chat, {video: santuy, mimetype: 'video/mp4', caption: `done`}, {quoted:m})
			}
			break
			case 'bocil': {
            m.reply(mess.wait)	
			bocil = await getBuffer(`https://ramdani-api.herokuapp.com/api/asupan/bocil?apikey=Ramdaniofficial`)
			danzz.sendMessage(m.chat, {video: bocil, mimetype: 'video/mp4', caption: `done`}, {quoted:m})
			}
			break
			case 'ukhty': {
            m.reply(mess.wait)	
			ukhty = await getBuffer(`https://ramdani-api.herokuapp.com/api/asupan/ukhty?apikey=Ramdaniofficial`)
			danzz.sendMessage(m.chat, {video: ukhty, mimetype: 'video/mp4', caption: `done`}, {quoted:m})
			}
			break
			case 'gheayuby': {
            m.reply(mess.wait)	
			gheayuby = await getBuffer(`https://ramdani-api.herokuapp.com/api/asupan/gheayuby?apikey=Ramdaniofficial`)
			danzz.sendMessage(m.chat, {video: gheayuby, mimetype: 'video/mp4', caption: `done`}, {quoted:m})
			}
			break
			//FUN MENU
			case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Sedang Afk,\n\n*Alasan* ${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await danzz.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await danzz.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await danzz.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await danzz.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    danzz.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danzz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danzz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danzz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danzz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danzz.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                danzz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, jawab, danzz.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, jawab, danzz.user.name, m, {mentions: menst})
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await danzz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) danzz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break            
		    //CONVERT MENU
			case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await danzz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await danzz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await danzz.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await danzz.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😂+😭`
		if (!emoji2) throw `Example : ${prefix + command} 😭+😂`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await danzz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😂`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await danzz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await danzz.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'danzz', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await danzz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break             
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await danzz.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    danzz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await danzz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await danzz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            danzz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            danzz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${'© Danzz Coding'}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            danzz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await danzz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await danzz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await danzz.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await danzz.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    danzz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
		//TEXT PRO MENU
		case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                danzz.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
       //PHOTO OXY MENU
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                danzz.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
        //EPHOTO MENU
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                danzz.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
            //GROUP MENU            
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danzz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danzz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danzz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danzz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await danzz.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await danzz.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break          
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await danzz.downloadAndSaveMediaMessage(quoted)
                await danzz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `â•â•âœªã€˜ *ðŸ‘¥ Tag All* ã€™âœªâ•â•
 
 âž² *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `â­” @${mem.id.split('@')[0]}\n`
                }
                danzz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            danzz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               danzz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: danzz.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            danzz.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: danzz.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            danzz.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: danzz.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            danzz.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${danzz.user.id}
`
danzz.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await danzz.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await danzz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `Mode Group`, `${wm}`, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await danzz.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await danzz.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `Mode Edit Info`, `${wm}`, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `Mode Antilink`, `${wm}`, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${'© DanzzCoding'} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${'© DanzzCoding'} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await danzz.sendButtonText(m.chat, buttons, `Mute Bot`, '© DanzzCoding', m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await danzz.groupInviteCode(m.chat)
                danzz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await danzz.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await danzz.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await danzz.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await danzz.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                danzz.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, '© DanzzCoding', `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
            }
            break
            //OWNER MENU
            case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await danzz.downloadAndSaveMediaMessage(quoted)
                await danzz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danzz.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danzz.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await danzz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await danzz.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\nâ­” Packname : ${global.packname}\nâ­” Author : ${global.author}`)
            }
            break
            case 'public': {
                if (!isCreator) throw mess.owner
                danzz.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                danzz.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                danzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await danzz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'owner'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                      let txt = `ã€Œ Broadcast Bot ã€\n\n${text}`
                      danzz.send5ButImg(i, txt, '© DanzzCoding', global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'owner'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                      let txt = `ã€Œ Broadcast Bot ã€\n\n${text}`
                      danzz.send5ButImg(yoi, txt, `${wm}`, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
           case 'sewa':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0] === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
m.reply(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
m.reply(mess.success)
} else {
m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break
case 'sewalist': case 'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
m.reply(txtnyee)
break
case 'sewacheck': case 'ceksewa': 
if (!m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Grup')
if (!isSewa) return m.reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*ã€Œ SEWA EXPIRE ã€*\n\nâž¸ *ID*: ${from}\nâž¸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
m.reply(sewanya)
break
case 'sewabot':
anu = `*SEWABOT*
- 1 BULAN : 20K

*KELEBIHAN BOT*
- ON 24 JAM
- FITUR BANYAK

*KEUNTUNGAN*
- ANTI LINK ( AUTO KICK )
- ANTI VIRUS ( AUTO KICK )
- WELCOME ( OTOMATIS )
- DAN FITUR LAINYA

Minat? wa.me/6288296339947?text=bang+mau+sewabot

*PAYMENT*
- DANA
- GOPAY
- QRIS ALL PAY
`
let btn = [{
                                quickReplyButton: {
                                    displayText: 'Dana',
                                    id: 'dana'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Gopay',
                                    id: 'gopay'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Qris All Pay',
                                    id: 'qrisallpay'
                                }  
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
            break
            case 'owner': case 'creator': {
                danzz.sendContact(m.chat, global.owner, m)
            }
            break
            case 'rules': {
	anu = `*RULES*
1. Jangan Pernah Spam Bot
2. Jangan Call Nomer Bot
3. Jangan Mengeksploitasi Bot

Sanksi : *Warn/Soft Block*

*About Questions*

You : Bot nya Slow Respon
Bot : Mohon Bersabar, Mungkin
Kendala Dari Jaringan, Signal,
Atau Bahkan Terbanned Dari
Pihak WhatsApp

You : Scriptnya Beli Dimana?
Bot: Wa.me/6289512545999

You : Boleh Masukin Ke Grup Saia
Tidak?
Bot : Untuk Masalah Memasukkan
Bot Ke Dalam Grup Bisa
Menghubungi Owner

You: Apakah Bot Ini Masih
Menyimpan File Yang Saya Kirim?
Bot : Data WhatsApp Anda Hanya
Tersimpan Saat Bot Aktif, Dan Bot
Tidak Pernah Menyimpan File-file
Yang Anda Kirim

You : Min, Ada Fitur Yang Error
Bot : Jika Menemukan Bug/Error
Silahkan Langsung Hubungi
Owner/Creator Agar Segera Di Fix

Tetap Patuhi Rules Agar Tetap
Bisa Menikmati Bot

*Note* : Segala Ketentuan Dan
Kebijakan Yang Berlaku Di Pegang
Oleh Owner Bot, Sewaktu-Waktu
Owner Berhak Memakai Ataupun
Mengubah Kebijakan Dan
Ketentuan Yang Berlaku

*Thanks* Buat Kalian
User-User Yang Sudah Memakai Bot,
Yang Sudah Mau Mematuhi
Rules, Serta Para Constributor
Yang Sudah Membantu Dalam
Pembuatan Bot Ini
Ini`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
//tqto
case 'tqto': case 'contributor': {
	anu = `*THANKS TO :*
- Adiwajshing 
- Dika Ardnt 
- Saipul Anuar
- Ramdani

*Penyedia Rest Api* :
- https://zenzapis.xyz
- https://ramdani-api.herokuapp.com
- https://danzz-api.herokuapp.com`
	let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewabot',
                                    id: 'sewabot'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
case 'donasi':
anu = `Mau donasi kak? Silahkan pilih dibawah sini untuk memilih via pembayaran!`
let donatod = [{
                                quickReplyButton: {
                                    displayText: 'Dana',
                                    id: 'dana'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Gopay',
                                    id: 'gopay'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Qris All Pay',
                                    id: 'qrisallpay'
                                }  
                            }]
                         let setbott = db.data.settings[botNumber]
                        if (setbott.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, donatod, global.thumb)
                        } else if (setbott.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, donatod, global.thumb)
                        } else if (setbott.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, donatod, global.thumb)
                        } else if (setbott.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbott.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, donatod)
                        }
            break            
case 'qrisallpay': {
                danzz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/24861ac82715b3d495381.jpg' }, caption: `Qris All Pay` }, { quoted: m })
            }
            break
case 'dana': {
 m.reply('DANA : 088296339947')
}
break
case 'gopay': {
 m.reply('GOPAY : 089512545999')
}
break
case 'pulsa': {
m.reply('PULSA : 089512545999')
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    danzz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
