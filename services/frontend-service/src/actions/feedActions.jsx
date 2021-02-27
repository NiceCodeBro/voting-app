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

  static GET_FEED_FROM_MY_FEED_REDUCER() {
    return 'FeedActions.GET_FEED_FROM_MY_FEED_REDUCER';
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

  static DELETE_FEED() {
    return 'FeedActions.DELETE_FEED';
  }

  static DELETE_FEED_SUCCESSFUL() {
    return 'FeedActions.DELETE_FEED_SUCCESSFUL';
  }

  static DELETE_FEED_FAILED() {
    return 'FeedActions.DELETE_FEED_FAILED';
  }

  static UPDATE_FEED() {
    return 'FeedActions.UPDATE_FEED';
  }

  static UPDATE_FEED_SUCCESSFUL() {
    return 'FeedActions.UPDATE_FEED_SUCCESSFUL';
  }

  static UPDATE_FEED_FAILED() {
    return 'FeedActions.UPDATE_FEED_FAILED';
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

  static deleteFeed(aFeedId = undefined, aToken = undefined) {
    return { 
      type: FeedActions.DELETE_FEED,
      payload: {
        feedId: aFeedId,
        token: aToken
      }
    }
  }

  static deleteFeedSuccessful(aFeedId) {
    return { 
      type: FeedActions.DELETE_FEED_SUCCESSFUL,
      payload: aFeedId
    }
  }

  static deleteFeedFailed(aError) {
    return { 
      type: FeedActions.DELETE_FEED_FAILED,
      payload: aError
    }
  }

  static getFeedFromMyFeedReducer(aFeedId) {
    return { 
      type: FeedActions.GET_FEED_FROM_MY_FEED_REDUCER,
      payload: aFeedId
    }
  }

  
  static updateFeed(aFeedToUpdate = undefined, aToken = undefined) {
    return { 
      type: FeedActions.UPDATE_FEED,
      payload: {
        feed: aFeedToUpdate,
        token: aToken
      }
    }
  }

  static updateFeedSuccessful(aUpdatedFeed) {
    return { 
      type: FeedActions.UPDATE_FEED_SUCCESSFUL,
      payload: aUpdatedFeed
    }
  }

  static updateFeedFailed(aError) {
    return { 
      type: FeedActions.UPDATE_FEED_FAILED,
      payload: aError
    }
  }
}
