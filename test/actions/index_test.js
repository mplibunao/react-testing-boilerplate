import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment} from '../../src/actions/';

describe('Actions', ()=>{
  describe('saveComment', ()=>{
    let action;

    beforeEach(()=>{
      action = saveComment('New Comment');
    });

    it('has the correct type', ()=>{
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', ()=>{
      expect(action.payload).to.equal('New Comment');
    });
  });
});