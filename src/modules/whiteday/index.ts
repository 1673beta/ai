import { bindThis } from '@/decorators.js';
import Module from '@/module.js';
import Friend from '@/friend.js';
import serifs from '@/serifs.js';

export default class extends Module {
	public readonly name = 'whiteday';

	@bindThis
	public install() {
		this.crawleWhiteday();
		setInterval(this.crawleWhiteday, 1000 * 60 * 3);

		return {};
	}


	@bindThis
	private crawleWhiteday() {
		const now = new Date();

		const isWhiteday = now.getMonth() == 3 && now.getDate() == 14;
		if (!isWhiteday) return;

		const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

		const friends = this.ai.friends.find({} as any);

		friends.forEach(f => {
			const friend = new Friend(this.ai, { doc: f });

			if (friend.love < 5) return;

			const data = friend.getPerModulesData(this);

			if (data.lastWhiteday == date) return;

			
		})
	}
}
