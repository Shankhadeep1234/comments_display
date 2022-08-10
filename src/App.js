import React from "react";
import { faker } from "@faker-js/faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          text='Looking forward for more content like this'
          time={`${faker.date.weekday()} at 09:21am`}
          name={faker.name.fullName()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <CommentDetail
        text='Great post!!!'
        time={`${faker.date.weekday()} at 05:33pm`}
        name={faker.name.fullName()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        text='Amazingly done'
        time={`${faker.date.weekday()} at 11:23am`}
        name={faker.name.fullName()}
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

export default App;
