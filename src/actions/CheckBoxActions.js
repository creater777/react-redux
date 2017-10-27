/**
 * Created by Programmist on 25.10.2017.
 */
export const CLICK = 'CLICK';

export function click(id){
  return {
    type: CLICK,
    id
  }
}