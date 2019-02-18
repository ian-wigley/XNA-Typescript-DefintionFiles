declare class Vector2 {
    X: number;
    Y: number;
    constructor(x?: number, y?: number);
    Length(): number;
    LengthSquared(): void;
    Distance(value1: Vector2, value2: Vector2): number;
    DistanceSquared(value1: Vector2, value2: Vector2): number;
    Dot(value1: Vector2, value2: Vector2): number;
    Normalize(): void;
    Reflect(vector: Vector2, normal: Vector2): Vector2;
    Min(value1: Vector2, value2: Vector2): Vector2;
    Max(value1: Vector2, value2: Vector2): Vector2;
    Clamp(value1: Vector2, min: Vector2, max: Vector2): Vector2;
    Lerp(value1: Vector2, value2: Vector2, amount: number): Vector2;
    Barycentric(value1: Vector2, value2: Vector2, value3: Vector2, amount1: number, amount2: number): Vector2;
    SmoothStep(value1: Vector2, value2: Vector2, amount: number): Vector2;
    CatmullRom(value1: Vector2, value2: Vector2, value3: Vector2, value4: Vector2, amount: number): Vector2;
    Hermite(value1: Vector2, tangent1: Vector2, value2: Vector2, tangent2: Vector2, amount: number): Vector2;
    Transform(position: Vector2, matrix: Matrix): Vector2;
    TransformNormal(normal: Vector2, matrix: Matrix): Vector2;
    Negate(value: Vector2): Vector2;
    Add(value1: Vector2, value2: Vector2): Vector2;
    Subtract(value1: Vector2, value2: Vector2): Vector2;
    Multiply(value1: Vector2, value2: Vector2): Vector2;
    Divide(value1: Vector2, value2: Vector2): Vector2;
}