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

    static ADD_COMMENT() {
      return 'CommentActions.ADD_COMMENT';
    }
  
    static ADD_COMMENT_SUCCESSFUL() {
      return 'CommentActions.ADD_COMMENT_SUCCESSFUL';
    }
  
    static ADD_COMMENT_FAILED() {
      return 'CommentActions.ADD_COMMENT_FAILED';
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

    static addComment(aComment, aFeedId, aToken) {
      return { 
        type: CommentActions.ADD_COMMENT,
        payload: {
          comment: aComment,
          feedId: aFeedId,
          token: aToken
        }
      }
    }
  
    static addCommentSuccessful(aCommentItem) {
      return { 
        type: CommentActions.ADD_COMMENT_SUCCESSFUL,
        payload: aCommentItem
      }
    }
  
    static addCommentFailed(aError) {
      return { 
        type: CommentActions.GET_COMMENT_FAILED,
        payload: aError
      }
    }
}
  