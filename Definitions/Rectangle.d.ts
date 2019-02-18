declare class Rectangle {
    X: number;
    Y: number;
    Bottom: number;
    Center: number;
    Empty: Rectangle;
    Height: number;
    Left: number;
    Right: number;
    Top: number;
    Width: number;
    constructor(x: number, y: number, width: number, height: number);
    Contains(value): boolean;
    Intersects(value): boolean;
}