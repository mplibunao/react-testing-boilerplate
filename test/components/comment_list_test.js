import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', ()=>{
  let component;

  beforeEach(()=>{
    const props = { comments: ['New Comment', 'Second Comment'] };
    component =  renderComponent(CommentList, null, props);
  });

  it('shows an li for each comment', ()=>{
    expect(component.find('li').length).to.be.equal(2);

  });

  it('shows each comment that is provided', ()=>{
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Second Comment');
  });
});