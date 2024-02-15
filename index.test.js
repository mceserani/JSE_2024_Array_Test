import op from "./operations.js";

describe("vectorAddition", () => {
    
    test("should return the sum of two vectors", () => {
        const a = [1, 2, 3];
        const b = [4, 5, 6];
        expect(op.vectorAddition(a, b)).toEqual([5, 7, 9]);
        expect(op.vectorAddition(a, b)).toHaveLength(3);
    });

    test("should return error if vectors differ in size", () => {
        const a = [1, 2, 3];
        const b = [4, 5];
        expect(() => op.vectorAddition(a, b)).toThrow("I due vettori devono avere la stessa lunghezza!");
    });

    test("should return [] if two vectors are empty", () => {
        const a = [];
        const b = [];
        expect(op.vectorAddition(a, b)).toEqual([]);
    });

});

describe('dotProduct', () => {

    test('should return the dot product of two vectors', () => {
        const a = [1, 2, 3];
        const b = [4, 5, 6];
        expect(op.dotProduct(a, b)).toBe(32);
    });

    test('should return error if vectors differ in size', () => {
        const a = [1, 2, 3];
        const b = [4, 5];
        expect(() => op.dotProduct(a, b)).toThrow("I due vettori devono avere la stessa lunghezza!");
    });

    test('should return 0 if two vectors are empty', () => {
        const a = [];
        const b = [];
        expect(op.dotProduct(a, b)).toBe(0);
    });

});

describe('norm', () => {
    
        test('should return the norm of a vector', () => {
            const a = [1, 2, 3];
            expect(op.norm(a)).toBe(Math.sqrt(14));
        });
    
        test('should return 0 if vector is empty', () => {
            const a = [];
            expect(op.norm(a)).toBe(0);
        });
    
});

describe('crossProduct', () => {

    test('should return the cross product of two vectors', () => {
        const a = [1, 2, 3];
        const b = [4, 5, 6];
        expect(op.crossProduct(a, b)).toEqual([-3, 6, -3]);
    });

    test('should return error if vectors differ in size', () => {
        const a = [1, 2, 3];
        const b = [4, 5];
        expect(() => op.crossProduct(a, b)).toThrow("I due vettori devono essere di dimensione 3!");
    });

});

describe('mean', () => {
    
        test('should return the mean of a vector', () => {
            const a = [1, 2, 3];
            expect(op.mean(a)).toBe(2);
        });
    
        test('should return NaN if vector is empty', () => {
            const a = [];
            expect(op.mean(a)).toBe(NaN);
        });
    
});

describe('median', () => {
    
    test('should return the median of a vector', () => {
        const a = [1, 2, 3];
        expect(op.median(a)).toBe(2);
    });

    test('should return NaN if vector is empty', () => {
        const a = [];
        expect(op.median(a)).toBe(NaN);
    });
    
});
