module.exports = {
    name: 'error',
    description: 'Error command',

    async run(client, message) {
        message.reply('Commande inconnue, veuillez réessayer.');
    }
}