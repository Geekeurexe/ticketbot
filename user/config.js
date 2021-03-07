/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *      Quick Start
 * ---------------------
 *
 * 	> For detailed instructions, visit the GitHub repository and read the documentation:
 * 	https://github.com/eartharoid/DiscordTickets/wiki
 *
 * 	> IMPORTANT: Also edit the TOKEN in 'user/.env'
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Information: https://github.com/eartharoid/DiscordTickets/#readme
 * 	> Discord Support Server: https://go.eartharoid.me/discord
 * 	> Wiki: https://github.com/eartharoid/DiscordTickets/wiki
 *
 * ###############################################################################################
 */

module.exports = {
	prefix: '?',
	name: 'ForestTickets',
	presences: [
		{
			activity: '🎫 | Regarde vos tickets',
			type: 'PLAYING'
		},
		{
			activity: '📌 | Mon prefix est |?|',
			type: 'PLAYING'
		},
		{
			activity: '🛒 | ForestHeberg.eu',
			type: 'WATCHING'
		}
	],
	append_presence: ' | %shelp',
	colour: '#009999',
	err_colour: 'RED',
	cooldown: 3,

	guild: '816738452795424768', // ID of your guild
	staff_role: '817456476104556575', // ID of your Support Team role

	tickets: {
		category: 'tickets', // ID of your tickets category
		send_img: false,
		ping: '',
		text: `Bonjour là, {{ tag }}!
		Un membre du personnel vous assistera sous peu.
		En même temps, veuillez décrire votre problème le plus en détail possible! :)`,
		pin: false,
		max: 3
	},

	transcripts: {
		text: {
			enabled: true,
			keep_for: 90,
		},
		web: {
			enabled: false,
			server: 'https://tickets.example.com',
		}
	},

	panel: {
		title: 'Support Tickets',
		description: 'Besoin d’aide? aucun problème! Réagissez à ce panneau pour créer un nouveau ticket de support afin que notre équipe de support puisse vous aider.',
		reaction: '🧾'
	},

	storage: {
		type: 'sqlite'
	},

	logs: {
		files: {
			enabled: true,
			keep_for: 7
		},
		discord: {
			enabled: false,
			channel: '' // ID of your log channel
		}
	},

	debug: false,
	updater: true
};
