export class FeedActions {
  static GET_FEEDS() {
    return 'FeedActions.GET_FEEDS';
  }

  static GET_FEEDS_SUCCESSFUL() {
    return 'FeedActions.GET_FEEDS_SUCCESSFUL';
  }

  static GET_FEEDS_FAILED() {
    return 'FeedActions.GET_FEEDS_FAILED';
  }

  static GET_MY_FEEDS() {
    return 'FeedActions.GET_MY_FEEDS';
  }

  static GET_MY_FEEDS_SUCCESSFUL() {
    return 'FeedActions.GET_MY_FEEDS_SUCCESSFUL';
  }

  static GET_MY_FEEDS_FAILED() {
    return 'FeedActions.GET_MY_FEEDS_FAILED';
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

  static getFeeds() {
    return { 
      type: FeedActions.GET_FEEDS
    }
  }

  static getFeedsSuccessful(aFeeds) {
    return { 
      type: FeedActions.GET_FEEDS_SUCCESSFUL,
      payload: aFeeds
    }
  }

  static getFeedsFailed(aError) {
    return { 
      type: FeedActions.GET_FEEDS_FAILED,
      payload: aError
    }
  }

  static getMyFeeds(aToken, aEmail) {
    return { 
      type: FeedActions.GET_MY_FEEDS,
      payload: {
        email: aEmail,
        token: aToken
      }
    }
  }

  static getMyFeedsSuccessful(aFeeds) {
    return { 
      type: FeedActions.GET_MY_FEEDS_SUCCESSFUL,
      payload: aFeeds
    }
  }

  static getMyFeedsFailed(aError) {
    return { 
      type: FeedActions.GET_MY_FEEDS_FAILED,
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
