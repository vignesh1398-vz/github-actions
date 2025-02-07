const { expect } = require('@jest/globals');

test('flag must be true', () => {
    const flag = true;
    expect(flag).toBe(true);
});