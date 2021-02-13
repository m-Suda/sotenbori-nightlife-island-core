declare type MoodKeys = 'Fever' | 'Best' | 'GoodMood' | 'Normally' | 'BadMood' | 'Anger';
export declare type Mood = {
    name: MoodKeys;
    paymentCycleMs: number;
    coefficient: number;
};
export declare const MOOD: {
    FEVER: Mood;
    BEST: Mood;
    GOOD_MOOD: Mood;
    NORMALLY: Mood;
    BAD_MOOD: Mood;
    ANGER: Mood;
};
export declare const MOOD_NAME: {
    [key in MoodKeys]: string;
};
export {};
