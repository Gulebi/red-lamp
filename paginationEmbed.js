const paginationEmbed = async (msg, pages, emojiList = ['⏪', '⏩'], timeout = 120_000) => {
	if (!msg && !msg.channel) throw new Error('Channel is inaccessible.');
	if (!pages) throw new Error('Pages are not given.');
	if (emojiList.length !== 2) throw new Error('Need two emojis.');
	let page = 0;
	const curPage = await msg.channel.send({ embeds: [pages[page].setFooter({ text: `Страница ${page + 1} / ${pages.length}` })]});
	for (const emoji of emojiList) await curPage.react(emoji);
    // const filter = (reaction, user) => emojiList.includes(reaction.emoji.name) && !user.bot;

    const filter = (reaction, user) => {
        return emojiList.includes(reaction.emoji.name) && !user.bot;
    }

	const reactionCollector = curPage.createReactionCollector({ filter, idle: timeout });

	reactionCollector.on('collect', (reaction, user) => {
		reaction.users.remove(msg.author);
		switch (reaction.emoji.name) {
			case emojiList[0]:
				page = page > 0 ? --page : pages.length - 1;
				break;
			case emojiList[1]:
				page = page + 1 < pages.length ? ++page : 0;
				break;
			default:
				break;
		}
		curPage.edit({ embeds: [pages[page].setFooter({ text: `Страница ${page + 1} / ${pages.length}` })]});
	});
	
	reactionCollector.on('end', () => {
		if (!curPage.deleted) {
			curPage.reactions.removeAll()
		}
	});
	return curPage;
};

module.exports = paginationEmbed;