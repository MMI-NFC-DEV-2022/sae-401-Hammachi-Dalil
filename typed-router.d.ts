/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/celebrite/[id]': RouteRecordInfo<'/celebrite/[id]', '/celebrite/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/connexion': RouteRecordInfo<'/connexion', '/connexion', Record<never, never>, Record<never, never>>,
    '/films/': RouteRecordInfo<'/films/', '/films', Record<never, never>, Record<never, never>>,
    '/films/[id]': RouteRecordInfo<'/films/[id]', '/films/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/films/edit/[[id]]': RouteRecordInfo<'/films/edit/[[id]]', '/films/edit/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/plateforme/[id]': RouteRecordInfo<'/plateforme/[id]', '/plateforme/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/saga/[id]': RouteRecordInfo<'/saga/[id]', '/saga/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
  }
}
