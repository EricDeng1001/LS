import {
  __ASYNC_LOAD_REVIEW_CHAPTER
} from 'actionTypes';

let loadLogicReviewChapterNameCounter = 0;
const getLogicReviewChapterNameStart = () => ({
    type: __ASYNC_LOAD_REVIEW_CHAPTER.pending,
    payload: {

    },
    id: loadLogicReviewChapterNameCounter
});
const getLogicReviewChapterNameResolved = ( response , initState ) => ({
    type: __ASYNC_LOAD_REVIEW_CHAPTER.resolved,
    payload: {
      response,
      initState
    },
    id: loadLogicReviewChapterNameCounter
});
const getLogicReviewChapterNameRejected = ( reason , detail ) => ({
    type: __ASYNC_LOAD_REVIEW_CHAPTER.rejected,
    payload: {
      reason,
      detail
    },
    id: loadLogicReviewChapterNameCounter
});


export const getLogicReviewChapterName = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
    const reqId = ++loadLogicReviewChapterNameCounter;
    const dispatchLastest = action => {
      if( reqId === loadLogicReviewChapterNameCounter ){
        dispatch( action );
      }
    }
    dispatch( getLogicReviewChapterNameStart() );
    if( typeof body === "object" ){
      body = JSON.stringify( body );
    }
    fetch( url , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: body
    })
  .then( response => {
    if( !response.ok ){
      dispatchLastest( getLogicReviewChapterNameRejected( "server" , response.status ) );
      return;
    }
   response.json()
    .then( json => dispatchLastest( getLogicReviewChapterNameResolved(  json  , initState ) ) )
    .catch( err => {
      dispatchLastest( getLogicReviewChapterNameRejected( "json" , err ) )
  });
  })
  .catch( err => {
      dispatchLastest( getLogicReviewChapterNameRejected( "network" , err ) );
 });
};
