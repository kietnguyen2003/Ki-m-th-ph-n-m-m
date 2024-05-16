const calculate = require('./index');

describe('calculate', () => {
  it('Calculate area of Square', () => {
    //Set up
    // Run
    const SHinhVuong = calculate.SHinhVuong(10);
    const SHinhVuongLittle = calculate.SHinhVuong(-1);
    const SHinhVuongZero = calculate.SHinhVuong(0);
    //Assert
    expect(SHinhVuong).toBe(100);
    expect(SHinhVuongLittle).toBe(1);
    expect(SHinhVuongZero).toBe(0);
  })

  it('Is Leaf year', () => {
    expect(calculate.isLeafYear(2000)).toBe(true);
    expect(calculate.isLeafYear(1960)).toBe(true);
    expect(calculate.isLeafYear(1940)).toBe(true);
    expect(calculate.isLeafYear(2020)).toBe(true);
  })
});