import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
/* eslint-disable */
import axios from 'axios';
export const getArticles = createAsyncThunk('article/getArticles', async () => {
  try {
    const res = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=5d30a5ab65764ba0a6694020cf885380'
    );
    const articles = res.data.articles.map((a) => ({
      id: uuid(),
      title: a.title,
      description: a.description,
      author: a.author,
      urlToImage: a.urlToImage,
      content: a.content,
      createdDate: a.publishedAt,
      url: a.url,
    }));
    return articles;
  } catch (error) {}
});

export const getNewsByCategory = createAsyncThunk(
  'article/getByCategory',
  async (category) => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5d30a5ab65764ba0a6694020cf885380`
      );

      const articles = res.data.articles.map((a) => ({
        id: uuid(),
        title: a.title,
        description: a.description,
        author: a.author,
        urlToImage: a.urlToImage,
        content: a.content,
        createdDate: a.publishedAt,
        url: a.url,
      }));
      console.log(articles, 'text 000');
      return articles;
    } catch (error) {}
  }
);

const initialState = {
  articles: [],
  categoryNews: [],
  loading: false,
  error: false,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: {
    [getArticles.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getArticles.fulfilled]: (state, { payload }) => {
      state.articles = payload;
      state.loading = false;
    },
    [getArticles.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },

    [getNewsByCategory.fulfilled]: (state, { payload }) => {
      state.categoryNews = payload;
      state.loading = false;
    },
    [getNewsByCategory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default articleSlice.reducer;
