import { Millionaire } from './Millionaire';
import { MOOD } from '../Mood';
import { RichMan } from './RichMan';
import { Normally } from './Normally';
import { Poverty } from './Poverty';

describe('CustomerRankClass', () => {
    describe('MillionaireClass', () => {
        const millionaire = new Millionaire();
        test('各パラメーターが取得できるか', () => {
            expect(millionaire.name).toBe('Millionaire');
            expect(millionaire.paymentAmount).toBe(200000);
        });
        describe('getCompatibilityWith()', () => {
            test('総合判定が16のときBest', () => {
                expect(millionaire.getCompatibilityWith(16).name).toBe(
                    MOOD.BEST.name
                );
            });
            test('総合判定が15のときGoodMood', () => {
                expect(millionaire.getCompatibilityWith(15).name).toBe(
                    MOOD.GOOD_MOOD.name
                );
            });
            test('総合判定が14のときGoodMood', () => {
                expect(millionaire.getCompatibilityWith(14).name).toBe(
                    MOOD.GOOD_MOOD.name
                );
            });
            test('総合判定が13のときNormally', () => {
                expect(millionaire.getCompatibilityWith(13).name).toBe(
                    MOOD.NORMALLY.name
                );
            });
            test('総合判定が11のときNormally', () => {
                expect(millionaire.getCompatibilityWith(11).name).toBe(
                    MOOD.NORMALLY.name
                );
            });
            test('総合判定が10のときBadMood', () => {
                expect(millionaire.getCompatibilityWith(10).name).toBe(
                    MOOD.BAD_MOOD.name
                );
            });
            test('総合判定が7のときBadMood', () => {
                expect(millionaire.getCompatibilityWith(7).name).toBe(
                    MOOD.BAD_MOOD.name
                );
            });
            test('総合判定が6のときAnger', () => {
                expect(millionaire.getCompatibilityWith(6).name).toBe(
                    MOOD.ANGER.name
                );
            });
        });
    });

    describe('RichManClass', () => {
        const richMan = new RichMan();
        test('各パラメーターが取得できるか', () => {
            expect(richMan.name).toBe('RichMan');
            expect(richMan.paymentAmount).toBe(100000);
        });
        describe('getCompatibilityWith()', () => {
            test('総合判定が14のときBest', () => {
                expect(richMan.getCompatibilityWith(14).name).toBe(
                    MOOD.BEST.name
                );
            });
            test('総合判定が13のときGoodMood', () => {
                expect(richMan.getCompatibilityWith(13).name).toBe(
                    MOOD.GOOD_MOOD.name
                );
            });
            test('総合判定が11のときGoodMood', () => {
                expect(richMan.getCompatibilityWith(11).name).toBe(
                    MOOD.GOOD_MOOD.name
                );
            });
            test('総合判定が10のときNormally', () => {
                expect(richMan.getCompatibilityWith(10).name).toBe(
                    MOOD.NORMALLY.name
                );
            });
            test('総合判定が8のときNormally', () => {
                expect(richMan.getCompatibilityWith(8).name).toBe(
                    MOOD.NORMALLY.name
                );
            });
            test('総合判定が7のときBadMood', () => {
                expect(richMan.getCompatibilityWith(7).name).toBe(
                    MOOD.BAD_MOOD.name
                );
            });
            test('総合判定が5のときBadMood', () => {
                expect(richMan.getCompatibilityWith(5).name).toBe(
                    MOOD.BAD_MOOD.name
                );
            });
            test('総合判定が4のときAnger', () => {
                expect(richMan.getCompatibilityWith(4).name).toBe(
                    MOOD.ANGER.name
                );
            });
        });
    });

    describe('NormallyClass', () => {
        const normally = new Normally();
        test('各パラメーターが取得できるか', () => {
            expect(normally.name).toBe('Normally');
            expect(normally.paymentAmount).toBe(50000);
        });
        describe('getCompatibilityWith()', () => {
            test('総合判定が11のときBest', () => {
                expect(normally.getCompatibilityWith(11).name).toBe(
                    MOOD.BEST.name
                );
            });
            test('総合判定が10のときGoodMood', () => {
                expect(normally.getCompatibilityWith(10).name).toBe(
                    MOOD.GOOD_MOOD.name
                );
            });
            test('総合判定が9のときGoodMood', () => {
                expect(normally.getCompatibilityWith(9).name).toBe(
                    MOOD.GOOD_MOOD.name
                );
            });
            test('総合判定が8のときNormally', () => {
                expect(normally.getCompatibilityWith(8).name).toBe(
                    MOOD.NORMALLY.name
                );
            });
            test('総合判定が5のときNormally', () => {
                expect(normally.getCompatibilityWith(5).name).toBe(
                    MOOD.NORMALLY.name
                );
            });
            test('総合判定が4のときBadMood', () => {
                expect(normally.getCompatibilityWith(4).name).toBe(
                    MOOD.BAD_MOOD.name
                );
            });
        });
    });

    describe('PovertyClass', () => {
        const poverty = new Poverty();
        test('各パラメーターが取得できるか', () => {
            expect(poverty.name).toBe('Poverty');
            expect(poverty.paymentAmount).toBe(20000);
        });
        describe('getCompatibilityWith()', () => {
            test('総合判定が8のときBest', () => {
                expect(poverty.getCompatibilityWith(8).name).toBe(
                    MOOD.BEST.name
                );
            });
            test('総合判定が7のときGoodMood', () => {
                expect(poverty.getCompatibilityWith(7).name).toBe(
                    MOOD.GOOD_MOOD.name
                );
            });
            test('総合判定が5のときGoodMood', () => {
                expect(poverty.getCompatibilityWith(5).name).toBe(
                    MOOD.GOOD_MOOD.name
                );
            });
            test('総合判定が4のときNormally', () => {
                expect(poverty.getCompatibilityWith(4).name).toBe(
                    MOOD.NORMALLY.name
                );
            });
        });
    });
});
