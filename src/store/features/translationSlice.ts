import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Lang } from "../../domain/model/Lang";

export interface TranslationState {
  lang: Lang;
}

const initialState: TranslationState = {
  lang: "en",
};

export const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    updateLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload as Lang;
    },
  },
});

export const { updateLang } = translationSlice.actions;

export default translationSlice.reducer;
