const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('jest', () => {
    test('Jest runs', () => {

    });
});

describe('funcs', () => {
    // beforeEach(() => {
    //     console.log('running');
    // })

    describe('getBiggest', () => {
        test('get the biggest number', () => {
            expect(funcs.getBiggest(5, 3)).toBe(5);
            expect(funcs.getBiggest(8, 8)).toBe(8);
            expect(funcs.getBiggest(2, 4)).toBe(4);
        });
    })

    describe('greeting', () => {
        test('get a greeting in different language', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
            expect(funcs.greeting('English')).toBe('Hello!');
            expect(funcs.greeting()).toBe('Hello!');
            expect(funcs.greeting(5)).toBe('Hello!');
        });
    })

    describe('isTenOrFive', () => {
        test('is it 10 or 5', () => {
            expect(funcs.isTenOrFive(5)).toBeTruthy();
            expect(funcs.isTenOrFive(2)).toBeFalsy();

        });
    })

    describe('isInRange', () => {
        test('is it in range', () => {
            expect(funcs.isInRange(30)).toBeTruthy();
            expect(funcs.isInRange(10)).toBeFalsy();

        });
    })

    describe('isInteger', () => {
        test('is it a integer', () => {
            expect(funcs.isInteger(30)).toBeTruthy();
            expect(funcs.isInteger(30.5)).toBeFalsy();

        });
    })
    
    describe('fizzBuzz', () => {
        test('is it a fizzbuzz!', () => {
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
            expect(funcs.fizzBuzz(5)).toBe('buzz');
            expect(funcs.fizzBuzz(3)).toBe('fizz');
            expect(funcs.fizzBuzz(2)).toBe(2);
            expect(funcs.fizzBuzz('hello')).toBeTruthy();
            expect(funcs.fizzBuzz(1)).toBeTruthy();
        });
    })

    describe('isPrime', () => {
        test('is prime!', () => {
            expect(funcs.isPrime(-1)).toBeFalsy();
            expect(funcs.isPrime(1)).toBeFalsy();
            expect(funcs.isPrime(2)).toBeTruthy();
        });
    })

    describe('returnFirst', () => {
        test('return first!', () => {
            expect(funcs.returnFirst([0,1,2,3])).toBe(0);
        });
    })

    describe('returnLast', () => {
        test('return last!', () => {
            expect(funcs.returnLast([0,1,2,3])).toBe(3);
        });
    })

    
    describe('getArrayLength', () => {
        test('get length of array!', () => {
            expect(funcs.getArrayLength([0,1,2,3])).toBe(4);
        });
    })

    describe('incrementByOne', () => {
        test('increment!', () => {
            expect(funcs.incrementByOne([0,1,2,3])).toEqual([1,2,3,4]);
        });
    })

    describe('addItemToArray', () => {
        test('increment!', () => {
            expect(funcs.addItemToArray([0,1,2], 3)).toEqual([0,1,2,3]);
        });
    })

    describe('addItemToFront', () => {
        test('add to front!', () => {
            expect(funcs.addItemToFront([0,1,2], 3)).toEqual([3,0,1,2]);
        });
    })

    describe('wordsToSentence', () => {
        test('add words to sentance', () => {
            expect(funcs.wordsToSentence(['hello', 'world'])).toBe('hello world');
        });
    })

    describe('contains', () => {
        test('contains items!', () => {
            expect(funcs.contains([1,2,3], 3)).toBeTruthy();
            expect(funcs.contains([1,2,3], 4)).toBeFalsy();
        });
    })

    describe('addNumbers', () => {
        test('add sum', () => {
            expect(funcs.addNumbers([1,2,3])).toBe(6);
        });
    })

    describe('averageTestScore', () => {
        test('average scores', () => {
            expect(funcs.averageTestScore([95,95,95,92,91,91])).toBe(93.16666666666667);
        });
    })

    describe('largestNumber', () => {
        test('find largest number', () => {
            expect(funcs.largestNumber([95,95,95,92,91,91])).toBe(95);
        });
    })
})