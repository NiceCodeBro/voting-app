export class FeedActions {
  static ADD_COMMENT() {
      return 'FeedActions.ADD_COMMENT';
  }

  static GET_ALL_FEEDS() {
    return 'FeedActions.GET_ALL_FEEDS';
  }

  static GET_ALL_FEEDS_SUCCESSFUL() {
    return 'FeedActions.SUCCESSFUL';
  }

  static GET_ALL_FEEDS_FAILED() {
    return 'FeedActions.GET_ALL_FEEDS_FAILED';
  }

  static addComment(aComment) {
    return { 
      type: FeedActions.ADD_COMMENT, 
      payload: aComment 
    }
  }

  static getAllFeeds() {
    return { 
      type: FeedActions.GET_ALL_FEEDS
    }
  }

  static getAllFeedsSuccessful(aFeeds) {
    return { 
      type: FeedActions.GET_ALL_FEEDS_SUCCESSFUL,
      payload: aFeeds
    }
  }

  static getAllFeedsFailed(aError) {
    console.log('getAllFeedsFailed')
    return { 
      type: FeedActions.GET_ALL_FEEDS_FAILED,
      payload: aError
    }
  }
}
