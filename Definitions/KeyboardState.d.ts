declare class Keys {
    constructor();

    public static F1(): boolean;
    public static F2(): boolean;
    public static F3(): boolean;
    public static F4(): boolean;
    public static F5(): boolean;
    public static F6(): boolean;
    public static F7(): boolean;
    public static F8(): boolean;
    public static F9(): boolean;
    public static F10(): boolean;
    public static F11(): boolean;
    public static F12(): boolean;

    public static Right(): boolean;
    public static Left(): boolean;
    public static Space(): boolean;
    public static Up(): boolean;
    public static Down(): boolean;
    public static LeftControl(): boolean;
    public static RightControl(): boolean;

    public static A(): boolean;
    public static B(): boolean;
    public static C(): boolean;
    public static D(): boolean;
    public static E(): boolean;
    public static F(): boolean;
    public static G(): boolean;
    public static H(): boolean;
    public static I(): boolean;
    public static J(): boolean;
    public static K(): boolean;
    public static L(): boolean;
    public static M(): boolean;
    public static N(): boolean;
    public static O(): boolean;
    public static P(): boolean;
    public static Q(): boolean;
    public static R(): boolean;
    public static S(): boolean;
    public static T(): boolean;
    public static U(): boolean;
    public static V(): boolean;
    public static W(): boolean;
    public static X(): boolean;
    public static Y(): boolean;
    public static Z(): boolean;
}

declare class Keyboard {
    constructor();
    public static GetState();
    public static IsKeyDown(key: Keys);
}

declare class KeyboardState {
}