import {
  __ASYNC_LOAD_REVIEW_CHAPTER
} from 'actionTypes';

export default ( state = {
    whetherHaveFinishedChapter: 0,
    ordinaryChapterName: [],
    importantChapterName: [],
    loadState: {
      pending: 0,
      resolved: 0,
      rejected: 0,
      lastFailed: false,
      failedReason: "network", // "json" , "server"
      failedDetail: null
    },
} , { type , payload , id } ) => {
  const { content } = state;
  //console.log(content)
  switch( type ){
    case __ASYNC_LOAD_REVIEW_CHAPTER.pending: {
      let loadState = {...state.loadState };
      loadState.lastFailed = false;
      loadState.pending++;
      return {
        ...state,
        loadState
      };
    }
    case __ASYNC_LOAD_REVIEW_CHAPTER.resolved: {
      let { response , initState } = payload;
      let loadState = {...state.loadState };
      loadState.resolved++;
      loadState.pending--;
      return {
        ...state,
        loadState,
        whetherHaveFinishedChapter: response.flag,
        ordinaryChapterName: response.yiban,
        importantChapterName: respone.zhongdian
      };
    }
    case __ASYNC_LOAD_REVIEW_CHAPTER.rejected: {
      let { reason , detail } = payload;
      let loadState = {...state.loadState };
      loadState.rejected++;
      loadState.pending--;
      loadState.lastFailed = true;
      loadState.failedReason = reason;
      loadState.failedDetail = detail;
      return {
        ...state,
        loadState
      };
    }


    default:
      return state;
  }
}
