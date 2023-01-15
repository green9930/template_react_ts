import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CommonStatus = {
  test1: string;
  test2: string;
};

const initialState: CommonStatus = {
  test1: "test1",
  test2: "test2",
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setCommonTest1: (state, action: PayloadAction<string>) => {
      console.log(state);
      console.log(action);
    },
    setCommonTest2: (state, action: PayloadAction<string>) => {},
  },
  extraReducers: (builder) => {},
});

export const { setCommonTest1, setCommonTest2 } = commonSlice.actions;
export default commonSlice.reducer;
