/**
 *  @param {number} N
 *  @returns {number}
 */
function solution(N) {
    let intputStr = String(N).toString();
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let inputArray = [];
    let startPosition = 0;
    let inputArrayLength = 0;
    let unitStr = "";
    let unitIntValue = 0;

    const insertValue = "5";

    for (let i = 0, len = intputStr.length; i < len; i++) {
        inputArray.push(intputStr[i]);
    }

    /* 替原始的陣列做備份 */
    const originalArray = JSON.parse(JSON.stringify(inputArray));

    inputArrayLength = inputArray.length;

    if (N >= 0) {
        startPosition = 0;
    } else {
        startPosition = 1;
    }

    for (let i = startPosition; i <= inputArrayLength; i++) {
        inputArray.splice(i, 0, insertValue);
        unitStr = inputArray.join("");
        unitIntValue = Number.parseInt(unitStr, 10);
        if (unitIntValue > maxNumber) {
            maxNumber = unitIntValue;
        }
        inputArray = null;

        /* 把原始陣列重設回去 */
        inputArray = JSON.parse(JSON.stringify(originalArray));
    }

    return maxNumber;
}

test("Check that we have a string to begin with", () => {
    [
        { test: 268, expected: 5268 },
        { test: 0, expected: 50 },
        { test: 670, expected: 6750 },
        { test: -999, expected: -5999 },
        { test: 1000, expected: 51000 }
    ].forEach(({ test, expected }) => {
        expect(solution(test)).toBe(expected);
    });
});
