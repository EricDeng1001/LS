import {
  __SET_LEARNING_TYPE,
  __ASYNC_LOAD_CHAPTER_NAME
} from 'actionTypes';

export default( state = {
  learningType: "",
  chapter_name: "",
  finished_level_test: "", // 0 表示未完成水平测试 ， 1 完成了水平测试
  loadState: {
    pending: 0,
    resolved: 0,
    rejected: 0,
    lastFailed: false,
    failedReason: "network", // "json" , "server"
    failedDetail: null
  },
} , { type , payload , id }) => {
  switch( type ){
    case __SET_LEARNING_TYPE:
      return{
        ...state,
        learningType: payload.learningType
      }

      case __ASYNC_LOAD_CHAPTER_NAME.pending: {
        let loadState = {...state.loadState };
        loadState.lastFailed = false;
        loadState.pending++;
        return {
          ...state,
          loadState
        };
      }
      case __ASYNC_LOAD_CHAPTER_NAME.resolved: {
        let { response , initState } = payload;
        initState = initState || {
          lock: false,
          show: false,
          choice: -1
        };
        let loadState = {...state.loadState };
        loadState.resolved++;
        loadState.pending--;
        return {
          ...state,
          loadState,
          chapter_name: response.chapter_name_ch,
          finished_level_test: response.flag
          //name2: response.section_name2,
          //name3: response.section_name3,
          //NAME: response
          //NAME: {
            //title: response.title,
            //title_article: response.title_article,
            //name: response.name,
            //example_article: response.NAME
          //}
        };
      }
      case __ASYNC_LOAD_CHAPTER_NAME.rejected: {
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
