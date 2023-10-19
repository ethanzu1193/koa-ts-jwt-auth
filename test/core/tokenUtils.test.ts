import { initConfig } from "../../config";
import { generateToken } from "../../core/tokenUtils";

initConfig()
describe('generateToken', () => {
  it('should generate a valid token', () => {
    const userId = 'testUserId112331';
    const token = generateToken(userId);

    expect(typeof token).toBe('string');
  })
})