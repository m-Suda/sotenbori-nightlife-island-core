import { AbstractCustomerRank } from './AbstractCustomerRank';
import { MOOD, Mood } from '../Mood';

export class Millionaire extends AbstractCustomerRank {
    private _goodMoodBoundary = 15;
    private _normallyBoundary = 13;
    private _badMoodBoundary = 10;
    private _angerBoundary = 6;

    constructor() {
        super('Millionaire', 200000);
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

        if (
            this._angerBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._badMoodBoundary
        ) {
            return MOOD.BAD_MOOD;
        }

        return MOOD.ANGER;
    }
}
