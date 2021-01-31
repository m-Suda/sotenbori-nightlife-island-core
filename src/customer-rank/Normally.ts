import { AbstractCustomerRank } from './AbstractCustomerRank';
import { MOOD, Mood } from '../Mood';

export class Normally extends AbstractCustomerRank {
    private _goodMoodBoundary = 10;
    private _normallyBoundary = 8;
    private _badMoodBoundary = 4;

    constructor() {
        super('Normally', 50000);
    }

    /**
     * 客との相性を判定し、機嫌を取得する
     * @param comprehensiveEvaluation
     */
    public getCompatibilityFrom(comprehensiveEvaluation: number): Mood {
        if (this._goodMoodBoundary < comprehensiveEvaluation) {
            return MOOD.BEST;
        }

        if (
            this._normallyBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._goodMoodBoundary
        ) {
            return MOOD.GOOD_MOOD;
        }

        if (
            this._badMoodBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._normallyBoundary
        ) {
            return MOOD.NORMALLY;
        }

        return MOOD.BAD_MOOD;
    }
}
