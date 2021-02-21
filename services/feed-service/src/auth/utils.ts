import { decode } from 'jsonwebtoken'
import { JwtPayload } from './JwtPayload'

/**
 * Parse a JWT token and return a user id /email
 * @param jwtToken JWT token to parse
 * @returns a user id from the JWT token
 */
export function parsePartitionKey(jwtToken: string): string {
  const decodedJwt = decode(jwtToken) as JwtPayload
  return decodedJwt.email;
}