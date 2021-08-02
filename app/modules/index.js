"use strict";

import { combineReducers } from "redux";

import base from "./base/base.reducer";
import modal from "./modal/modal.reducer";
import images from "./images/images.reducer";
import sidebar from "./sidebar/sidebar.reducer";

import * as baseAction from "./base/base.action";
import * as modalAction from "./modal/modal.action";
import * as imagesAction from "./images/images.action";
import * as sidebarAction from "./sidebar/sidebar.action";

const reducers = combineReducers({
	base, modal, images, sidebar,
});

export const action = {
	base: baseAction,
	modal: modalAction,
	images: imagesAction,
	sidebar: sidebarAction,
};

export default reducers;
