import { config } from "../../src/config";
import { generateToken } from "../../src/core/tokenUtils";

describe('generateToken', () => {
  it('should generate a valid token', () => {
    const userId = 'testUserId112331';
    const token = generateToken(userId);

    expect(typeof token).toBe('string');
  })
})