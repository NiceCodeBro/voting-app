export class FeedActions {
  static GET_ALL_FEEDS() {
    return 'FeedActions.GET_ALL_FEEDS';
  }

  static GET_ALL_FEEDS_SUCCESSFUL() {
    return 'FeedActions.SUCCESSFUL';
  }

  static GET_ALL_FEEDS_FAILED() {
    return 'FeedActions.GET_ALL_FEEDS_FAILED';
  }

  static ADD_FEED() {
    return 'FeedActions.ADD_FEED';
  }

  static ADD_FEED_SUCCESSFUL() {
    return 'FeedActions.ADD_FEED_SUCCESSFUL';
  }

  static ADD_FEED_FAILED() {
    return 'FeedActions.ADD_FEED_FAILED';
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
    return { 
      type: FeedActions.GET_ALL_FEEDS_FAILED,
      payload: aError
    }
  }

  static addFeed(aFeed = undefined, aToken = undefined) {
    return { 
      type: FeedActions.ADD_FEED,
      payload: {
        item: aFeed,
        token: aToken
      }
    }
  }

  static addFeedSuccessful(aFeeds) {
    return { 
      type: FeedActions.ADD_FEED_SUCCESSFUL,
      payload: aFeeds
    }
  }

  static addFeedFailed(aError) {
    return { 
      type: FeedActions.ADD_FEED_FAILED,
      payload: aError
    }
  }
}
