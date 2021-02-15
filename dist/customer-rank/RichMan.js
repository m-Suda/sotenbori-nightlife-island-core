import { AbstractCustomerRank } from './AbstractCustomerRank';
import { MOOD } from '../Mood';
export class RichMan extends AbstractCustomerRank {
    constructor() {
        super('RichMan', 100000);
        this._goodMoodBoundary = 13;
        this._normallyBoundary = 10;
        this._badMoodBoundary = 7;
        this._angerBoundary = 4;
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
        if (this._angerBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._badMoodBoundary) {
            return MOOD.BAD_MOOD;
        }
        return MOOD.ANGER;
    }
}