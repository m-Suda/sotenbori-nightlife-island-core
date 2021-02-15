import { AbstractCustomerRank } from './AbstractCustomerRank';
import { MOOD } from '../Mood';
export class Normally extends AbstractCustomerRank {
    constructor() {
        super('Normally', 50000);
        this._goodMoodBoundary = 10;
        this._normallyBoundary = 8;
        this._badMoodBoundary = 4;
    }
    /**
     * 客との相性を判定し、機嫌を取得する
     * @param comprehensiveEvaluation
     */
    getCompatibilityFrom(comprehensiveEvaluation) {
        if (this._goodMoodBoundary < comprehensiveEvaluation) {
            return MOOD.BEST;
        }
        if (this._normallyBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._goodMoodBoundary) {
            return MOOD.GOOD_MOOD;
        }
        if (this._badMoodBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._normallyBoundary) {
            return MOOD.NORMALLY;
        }
        return MOOD.BAD_MOOD;
    }
}
