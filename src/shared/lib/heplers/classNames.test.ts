import { classNames } from './classNames';

describe('classNames', () => {
  test('with first one param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with all params', () => {
    const expected = 'someClass addClass1 addClass2';
    expect(classNames(
      'someClass',
      {},
      ['addClass1', 'addClass2'],
    ))
      .toBe(expected);
  });
  test('with mods', () => {
    const expected = 'someClass addClass1 addClass2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['addClass1', 'addClass2'],
    ))
      .toBe(expected);
  });
  test('with mods false', () => {
    const expected = 'someClass addClass1 addClass2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['addClass1', 'addClass2'],
    ))
      .toBe(expected);
  });
  test('with mods undef', () => {
    const expected = 'someClass addClass1 addClass2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['addClass1', 'addClass2'],
    ))
      .toBe(expected);
  });
});
