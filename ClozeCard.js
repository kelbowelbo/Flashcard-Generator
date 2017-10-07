function ClozeCard (text, cloze) {
	if(this instanceof ClozeCard) {
		if(text.indexOf(cloze) > -1) {
			this.cloze = cloze;
			this.fullText = text;
			this.partial = text.replace(cloze, '...');
		}
		else {
			console.log("That is incorrect, please study!")
		}
	}
	else {
		return new ClozeCard(text, cloze);
	}
}

module.exports = ClozeCard;
