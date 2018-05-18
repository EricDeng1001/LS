import {
  __SAVE_OR_SUMBIT_TEXT,
  __LOAD_LAST_SAVE_TEXT,
  __LOAD_ALL_SUBMIT_TEXT
} from 'actionTypes';

 /* 暂存或者提交文件 */
let saveOrSubmitTextCounter = 0;
const saveOrSubmitTextStart = () => ({
    type: __SAVE_OR_SUMBIT_TEXT.pending,
    payload: {

    },
    id: saveOrSubmitTextCounter
});
const saveOrSubmitTextResolved = ( response ) => ({
    type: __SAVE_OR_SUMBIT_TEXT.resolved,
    payload: {
      response
    },
    id: saveOrSubmitTextCounter
});
const saveOrSubmitTextRejected = ( reason , detail ) => ({
    type: __SAVE_OR_SUMBIT_TEXT.rejected,
    payload: {
      reason,
      detail
    },
    id: saveOrSubmitTextCounter
});

export const saveOrSubmitText = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const oldState = getState();
  const reqId = ++saveOrSubmitTextCounter;
  const dispatchLastest = action => {
    if( reqId === saveOrSubmitTextCounter ){
      dispatch( action );
    }
  }
  dispatch( saveOrSubmitTextStart() );
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
    dispatchLastest( saveOrSubmitTextRejected( "server" , response.status ) );
    return;
  }
 response.json()
  .then( json => dispatchLastest( saveOrSubmitTextResolved(  json  , initState ) ) )
  .catch( err => {
    dispatchLastest( saveOrSubmitTextRejected( "json" , err ) )
});
})
.catch( err => {
    dispatchLastest( saveOrSubmitTextRejected( "network" , err ) );
});
};

/* 加载用户最新一次保存的文本 */
let loadLastSaveTextCounter = 0;
const loadLastSaveTextStart = () => ({
    type: __LOAD_LAST_SAVE_TEXT.pending,
    payload: {

    },
    id: loadLastSaveTextCounter
});
const loadLastSaveTextResolved = ( response ) => ({
    type: __LOAD_LAST_SAVE_TEXT.resolved,
    payload: {
      response
    },
    id: loadLastSaveTextCounter
});
const loadLastSaveTextRejected = ( reason , detail ) => ({
    type: __LOAD_LAST_SAVE_TEXT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadLastSaveTextCounter
});

export const loadLastSaveText = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++loadLastSaveTextCounter;
  const dispatchLastest = action => {
    if( reqId === loadLastSaveTextCounter ){
      dispatch( action );
    }
  }
  dispatch( loadLastSaveTextStart() );
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
    dispatchLastest( loadLastSaveTextRejected( "server" , response.status ) );
    return;
  }
 response.json()
  .then( json => dispatchLastest( loadLastSaveTextResolved(  json  , initState ) ) )
  .catch( err => {
    dispatchLastest( loadLastSaveTextRejected( "json" , err ) )
});
})
.catch( err => {
    dispatchLastest( loadLastSaveTextRejected( "network" , err ) );
});
};

/* 加载用户所有提交过的文本 */
let loadAllSubmitTextCounter = 0;
const loadAllSubmitTextStart = () => ({
    type: __LOAD_LAST_SAVE_TEXT.pending,
    payload: {

    },
    id: loadAllSubmitTextCounter
});
const loadAllSubmitTextResolved = ( response ) => ({
    type: __LOAD_LAST_SAVE_TEXT.resolved,
    payload: {
      response
    },
    id: loadAllSubmitTextCounter
});
const loadAllSubmitTextRejected = ( reason , detail ) => ({
    type: __LOAD_LAST_SAVE_TEXT.rejected,
    payload: {
      reason,
      detail
    },
    id: loadAllSubmitTextCounter
});

export const loadAllSubmitText = ({ url , body , parser , headers  , initState }) => ( dispatch , getState ) => {
  const reqId = ++loadAllSubmitTextCounter;
  const dispatchLastest = action => {
    if( reqId === loadAllSubmitTextCounter ){
      dispatch( action );
    }
  }
  dispatch( loadAllSubmitTextStart() );
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
    dispatchLastest( loadAllSubmitTextRejected( "server" , response.status ) );
    return;
  }
 response.json()
  .then( json => dispatchLastest( loadAllSubmitTextResolved(  json  , initState ) ) )
  .catch( err => {
    dispatchLastest( loadAllSubmitTextRejected( "json" , err ) )
});
})
.catch( err => {
    dispatchLastest( loadAllSubmitTextRejected( "network" , err ) );
});
};
