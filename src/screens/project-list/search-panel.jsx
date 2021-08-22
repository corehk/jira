import React from 'react';

export const SearchPanel = (props) => {
  const {param,setParam,users,} = props;

  return <from>
    <div>
      <input
        onChange={evt => setParam({
          ...param,
          name: evt.target.value,
        })}
        type="text"
        value={param.name}
      />
      <select
        onChange={evt => setParam({
          ...param,
          personId: evt.target.value,
        })}
        value={param.personId}
      >
        <option value={''} >负责人</option>
        {users.map(user =>
          <option key={user.id}
            value={user.id}
          >{user.name}</option>)}
      </select>
    </div>
  </from>;
};