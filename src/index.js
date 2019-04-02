import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/commentDetail';
import ApprovalCard from './components/approvalCard';

function App(props) {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    date="Today at 6:00 pm" 
                    content="Nice blog post!"
                    avatar="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    date="Yesterdat at 12:00 am" 
                    content="First Comment lol"
                    avatar="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    date="Wednesday at 9:00 am" 
                    content="Dumb"
                    avatar="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));