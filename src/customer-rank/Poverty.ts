import { AbstractCustomerRank } from './AbstractCustomerRank';
import { MOOD, Mood } from '../Mood';

export class Poverty extends AbstractCustomerRank {
    private _goodMoodBoundary = 7;
    private _normallyBoundary = 4;

    constructor() {
        super('Poverty', 20000);
    }

    /**
     * 客との相性を判定し、機嫌を取得する
     * @param comprehensiveEvaluation
     */
    public getCompatibilityWith(comprehensiveEvaluation: number): Mood {
        if (this._goodMoodBoundary < comprehensiveEvaluation) {
            return MOOD.BEST;
        }

        if (
            this._normallyBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._goodMoodBoundary
        ) {
            return MOOD.GOOD_MOOD;
        }

        return MOOD.NORMALLY;
    }
}
