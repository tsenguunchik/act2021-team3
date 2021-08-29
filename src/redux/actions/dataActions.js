import {
    SET_POSTS,
    LOADING_DATA,
    DELETE_POST,
    SET_ERRORS,
    POST_POST,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_POST,
    STOP_LOADING_UI
  } from '../types';
  import axios from 'axios';
  
  // Get all POSTs
  export const getPosts = (board) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get(`/posts/${board}`)
      .then((res) => {
        dispatch({
          type: SET_POSTS,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_POSTS,
          payload: []
        });
      });
  };
  
  export const getPost = (postId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(`/post/${postId}`)
      .then((res) => {
        dispatch({
          type: SET_POST,
          payload: res.data
        });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch((err) => console.log(err));
  };
  // Post a post
  export const createPost = (newPost) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .post('/post', newPost)
      .then((res) => {
        dispatch({
          type: POST_POST,
          payload: res.data
        });
        dispatch(clearErrors());
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });
      });
  };
  
  export const deletePost = (postId) => (dispatch) => {
    axios
      .delete(`/post/${postId}`)
      .then(() => {
        dispatch({ type: DELETE_POST, payload: postId });
      })
      .catch((err) => console.log(err));
  };
  
  export const getUserData = (userId) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get(`/user/${userId}`)
      .then((res) => {
        dispatch({
          type: SET_POSTS,
          payload: res.data.posts
        });
      })
      .catch(() => {
        dispatch({
          type: SET_POSTS,
          payload: null
        });
      });
  };
  
  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  