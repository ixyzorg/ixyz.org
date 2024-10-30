import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhInterviewNote = defineNoteConfig({
  dir: 'interview',
  link: 'interview',
  sidebar: 'auto',
})

const zhMemoNote = defineNoteConfig({
  dir: 'memo',
  link: 'memo',
  sidebar: 'auto',
})

const zhWebsiteNavigateNote = defineNoteConfig({
  dir: 'website-navigate',
  link: 'website-navigate',
})

export const zhNotes = defineNotesConfig({
  dir: 'bag',
  link: '/bag',
  notes: [zhInterviewNote, zhMemoNote, zhWebsiteNavigateNote],
})

/* =================== locale: en-US ======================= */

export const enNotes = defineNotesConfig({
  dir: 'en/bag',
  link: '/en/bag',
  notes: [zhInterviewNote, zhMemoNote, zhWebsiteNavigateNote],
})
