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
      createdDate: a.publishedAts,
    }));

    console.log(articles, '00000000000000000000000');
    return articles;
  } catch (error) {}
});

const initialState = {
  articles: [],
  error: null,
  loading: false,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: {
    [getArticles.fulfilled]: (state, { payload }) => payload,
  },
});

export default articleSlice.reducer;
