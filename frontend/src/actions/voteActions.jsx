/*
 * action types
 */
export const ADD_COMMENT = 'ADD_COMMENT'

/*
 * action creators
 */

export function addComment(aComment) {
  return { type: ADD_COMMENT, payload: aComment }
}