import { CastRankItem } from './CastRank';
import { Preference } from './Preference';
import { Behavior } from './Behavior';

export class Cast {
    constructor(
        public name: string,
        public rank: CastRankItem,
        public hp: number,
        public preference: Preference,
        public behavior: Behavior
    ) {}

    /**
     * 客に対応する
     * @param decreasePoint
     */
    public serve(decreasePoint: number): void {
        if (this.hp - decreasePoint < 0) {
            this.hp = 0;
            return;
        }

        this.hp -= decreasePoint;
    }

    /**
     * 体力を回復する
     * @param recoveryPoint
     */
    public recovery(recoveryPoint: number): void {
        this.hp += recoveryPoint;
    }
}
