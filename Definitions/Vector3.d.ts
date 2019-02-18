declare class Vector3 {
    X: number;
    Y: number;
    Z: number;
    constructor(x: number, y: number, z: number);
    Add(value1: Vector3, value2: Vector3): Vector3;
    Barycentric(value1, value2, value3, amount1, amount2): Vector3;
    CatmullRom(value1, value2, value3, value4, amount): Vector3;
    Clamp(value1: Vector3, min: number, max: number): Vector3;
    Cross(vector1: Vector3, vector2: Vector3): Vector3;
    Distance(value1: Vector3, value2: Vector3): Vector3;
    DistanceSquared(value1: Vector3, value2: Vector3): Vector3;
    Divide(value1: Vector3, value2: Vector3): Vector3;
    Dot(vector1: Vector3, vector2: Vector3);
    Hermite(value1: Vector3, tangent1: Vector3, value2: Vector3, tangent2: Vector3, amount: number): Vector3;
    Length(): number;
    LengthSquared(): number;
    Lerp(value1, value2, amount): Vector3;
    Max(value1: Vector3, value2: Vector3): Vector3;
    Min(value1: Vector3, value2: Vector3): Vector3;
    Multiply(value1: Vector3, value2: Vector3): Vector3;
    Negate(value: Vector3): Vector3;
    Normalize(): void;
    Reflect(vector: Vector3, normal: Vector3): Vector3;
    SmoothStep(value1: Vector3, value2: Vector3, amount: number): Vector3;
    Subtract(value1: Vector3, value2: Vector3): Vector3;
    Transform(position: Vector3, matrix): Vector3;
    TransformNormal(normal: Vector3, matrix): Vector3;
}