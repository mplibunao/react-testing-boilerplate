import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', ()=>{
  it('handles action with unknown type', ()=>{
    expect(commentReducer()).to.eql([]);
  });

  it('SAVE_COMMENT', ()=>{
    const state = ["New Comment"];
    const action = SAVE_COMMENT;
    expect(commentReducer(state, action)).to.eql(["New Comment"]);
  });
});
