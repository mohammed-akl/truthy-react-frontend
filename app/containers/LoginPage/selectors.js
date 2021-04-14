import { createSelector } from 'reselect';
import { initialState } from 'containers/LoginPage/reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = (state) => state.login || initialState;

/**
 * Other specific selectors
 */

const makeEmailSelector = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.email);

const makePasswordSelector = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.password);

const makeErrorSelector = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.errors);

const makeIsLoadingSelector = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.isLoading);

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(selectLoginPageDomain, (substate) => substate);

export default makeSelectLoginPage;

export {
  makeEmailSelector,
  makePasswordSelector,
  makeErrorSelector,
  makeIsLoadingSelector,
};