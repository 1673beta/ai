import { bindThis } from '@/decorators.js';
import Module from '@/module.js';

export default class extends Module {
	public readonly name = 'jihou';

	public install() {
		this.startjihou();
		setInterval(this.startjihou, 1000 * 60 * 1);

		return {};
	}

	@bindThis
	private startjihou() {
	
		const now = new Date();
		const minutes = now.getMinutes();
		const hour = now.getHours();
		
		if (minutes === 0 && (hour === 5 || hour === 9 || hour === 12 || hour === 15 || hour === 20 || hour === 23)) {
			let message;

			switch (hour) {
				case 5:
					message: 'ふあぁ……おはようございます、こんな時間まで起きていたんですか？早起きならいいんですが……';
					break;
				case 9:
					message: 'おはようございます！今日も一日がんばりましょう♪';
					break;
				case 12:
					message: 'お昼の時間です！';
					break;
				case 15:
					message: 'おやつの時間です♪ええと、今日のおやつは……';
					break;
				case 20:
					message: '今日も一日お疲れ様でした！お風呂に入って、ご飯を食べてゆっくりしてくださいね♪';
					break;
				case 23:
					message: 'ふわぁ…… 眠くなってきました、そろそろ寝ますね。おやすみなさい！';
					break;
			} 

			this.ai.post ({
				text: message
			});
		}

		}
	}

