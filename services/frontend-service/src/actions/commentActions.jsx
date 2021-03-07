export class CommentActions {
    static GET_COMMENT() {
      return 'CommentActions.GET_COMMENT';
    }
  
    static GET_COMMENT_SUCCESSFUL() {
      return 'CommentActions.GET_COMMENT_SUCCESSFUL';
    }
  
    static GET_COMMENT_FAILED() {
      return 'CommentActions.GET_COMMENT_FAILED';
    }

    static getComments(aCommentId) {
      return { 
        type: CommentActions.GET_COMMENT,
        payload: aCommentId
      }
    }
  
    static getCommentsSuccessful(aComments) {
      return { 
        type: CommentActions.GET_COMMENT_SUCCESSFUL,
        payload: aComments
      }
    }
  
    static getCommentsFailed(aError) {
      return { 
        type: CommentActions.GET_COMMENT_FAILED,
        payload: aError
      }
    }
}
  