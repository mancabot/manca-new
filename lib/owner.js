exports.owner = (id, MANCA-NEW, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, no-bot) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋
❉──────────❉

╔════════════════════
║   *_OWNER INFO_  MENU*
╠════════════════════
║╭──❉ *INFO OWNER* ❉──
║│1. *#creator*
║│2. *#owner*
║│3. *#donasi*
║╰───────────
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *Nomer-Bot <Info-Doang:V>*
║│ _${no-bot}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${MANCA-NEW}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║  *BOT BY NURUL CANS*
╚════════════════════

╔[ *TANGGAL HARI INI🗓️* ]
╚➣ _*${tampilTanggal}*_
╔[ *SEKARANG JAM🕒* ]
╚➣ _*${tampilWaktu}*_
╔[ *BOT AKTIF🤖* ]
╚➣ _*${aktif}*_
`
}