import { describe, it, expect } from 'vitest';

describe('Example Tests', () => {
  it('should pass a simple assertion', () => {
    expect(true).toBe(true);
  });

  it('should perform basic math', () => {
    expect(2 + 2).toBe(4);
  });

  it('should handle strings', () => {
    const greeting = 'Hello, World!';
    expect(greeting).toContain('World');
  });
});
