/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export type SettingName =
  | 'disableBeforeInput'
  | 'measureTypingPerf'
  | 'isRichText'
  | 'isCollab'
  | 'isCharLimit'
  | 'isMaxLength'
  | 'isCharLimitUtf8'
  | 'isAutocomplete'
  | 'showTreeView'
  | 'showNestedEditorTreeView'
  | 'emptyEditor'
  | 'showTableOfContents';

export type Settings = Record<SettingName, boolean>;

const hostName = window.location.hostname;
export const isDevPlayground: boolean = false;

export const DEFAULT_SETTINGS: Settings = {
  disableBeforeInput: false,
  emptyEditor: false,
  isAutocomplete: false,
  isCharLimit: false,
  isCharLimitUtf8: false,
  isCollab: false,
  isMaxLength: false, 
  isRichText: true,
  measureTypingPerf: false,
  showNestedEditorTreeView: false,
  showTableOfContents: false,
  showTreeView: false,
};
