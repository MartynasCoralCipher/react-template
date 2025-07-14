import type { TemplateState } from "./";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: TemplateState = {
    isLoading: false,
    text: "",
    error: null,
    loadingFailed: false,
};

export const templateSlice = createSlice({
    name: "template",
    initialState,
    reducers: {
        resetStateValues: (state) => {
            state.isLoading = initialState.isLoading;
            state.text = initialState.text;
            state.error = initialState.error;
            state.loadingFailed = initialState.loadingFailed;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setLoadingFailed: (state, action: PayloadAction<boolean>) => {
            state.loadingFailed = action.payload;
        }
    }
})

export const {
    resetStateValues,
    setIsLoading,
    setText,
    setError,
    setLoadingFailed
} = templateSlice.actions;

export default templateSlice.reducer;