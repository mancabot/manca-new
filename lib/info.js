exports.info = (id, MANCA-NEW, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, no-bot) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋
❉──────────❉

╔════════════════════
║   *_INFORMATION_ MENU*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *#sholat* <daerah>
║│2. *#covid*
║│3. *#infogempa* 
║│4. *#harinasional* <tanggal>
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