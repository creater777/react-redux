/**
 * Created by Programmist on 07.11.2017.
 */
export const logger = store => next => action => {
  console.log('in middleware', action);
  let result = next(action)
  // console.log('next state', store.getState())
  return result;
}
