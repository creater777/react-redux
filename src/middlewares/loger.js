/**
 * Created by Programmist on 07.11.2017.
 */
export default store => next => action => {
  console.log('in middleware', action);
  return next(action);
}
