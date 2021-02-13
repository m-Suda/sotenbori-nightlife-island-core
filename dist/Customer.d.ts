import { Mood } from './Mood';
import { Course } from './Course';
import { PreferenceNames } from './Preference';
import { BehaviorNames } from './Behavior';
import { Cast } from './Cast';
import { AbstractCustomerRank } from './customer-rank/AbstractCustomerRank';
export declare class Customer {
    private _rank;
    private _preference;
    private _purpose;
    private _course;
    private _mood;
    /**
     * 支払い金額
     * @private {number}
     */
    private _paymentAmount;
    constructor(_rank: AbstractCustomerRank, _preference: PreferenceNames, _purpose: BehaviorNames, _course: Course, _mood?: Mood | null);
    /**
     * 支払い金額を取得する
     */
    get paymentAmount(): number;
    /**
     * 金額を支払う
     */
    pay(): void;
    /**
     * キャストとの相性を取得する
     * @param cast
     */
    getCompatibilityWith(cast: Cast): Mood;
    /**
     * 機嫌を変更する
     * @param m
     */
    set changeMood(m: Mood);
}
