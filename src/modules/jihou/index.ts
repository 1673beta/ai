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
			
		if (minutes === 0) {
				const hour = now.getHours();

				switch (hour) {
					default:
						this.ai.post ({
							text: `${hour}時です！`
						});

						break;

					case 7:
						this.ai.post ({
							text: `${hour}時です！おはようございます♪`
						})

						break;

					case 12:
						this.ai.post ({
							text: `${hour}時です！お昼の時間です！何を食べましょう？`
						})

						break;

					case 20:
						this.ai.post ({
							text: `${hour}時です！お疲れさまでした♪`
						})

						break;

					case 23:
						this.ai.post ({
							text: `${hour}時です！ふわぁ……`
						})

						break;

					case 1:
						this.ai.post ({
							text: `${hour}時です！そろそろお休みになられたらどうでしょう？`
						})

						break;

					case 3:
						this.ai.post ({
							text: `${hour}時です！まだ起きてるんですか？`
						})

						break;

					case 4:
						this.ai.post ({
							text: `${hour}時です！夜更かしした分明日はちゃんと寝ましょうね？`
						})

						break;
				}
			}

		}
	}

