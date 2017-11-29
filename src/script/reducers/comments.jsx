// action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

//router和redux结合测试
const EDIT_REDUXSTATE = 'EDIT_REDUXSTATE'
// reducer
export default function (state, action) {
  if (!state) {
    state = { 
      comments: [],
      withRouterReduxState:'withRouterReduxState'
    }
  }
  switch (action.type) {
    case INIT_COMMENTS:
      // 初始化评论
      return { comments: action.comments }
    case ADD_COMMENT:
      // 新增评论
      return {
        comments: [...state.comments, action.comment]
      }
    case DELETE_COMMENT:
      // 删除评论
       let newComments = [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ];
      return {
        comments: newComments
      }
    case EDIT_REDUXSTATE:
      return {
        withRouterReduxState:action.withRouterReduxState
      }
    default:
      return state
  }
}

// action creators
export const initComments = (comments) => {
  return { type: INIT_COMMENTS, comments }
}

export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment:comment }
}

export const deleteComment = (commentIndex) => {
  return { type: DELETE_COMMENT, commentIndex }
}

//router和redux结合测试
//
export const editRouterReduxComment = (withRouterReduxState) => {
  return { type: EDIT_REDUXSTATE, withRouterReduxState }
}